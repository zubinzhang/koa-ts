/*
 * Created by Zubin on 2017-10-17 11:32:58
 */
import * as amqp from 'amqp';

class MQ {
  // static _mq = {};

  static init(mqConfig) {
    const { exchangeName } = mqConfig;

    let _mq: MQ = MQ[exchangeName];
    if (!_mq) {
      _mq = new MQ(mqConfig);
    }
    return _mq;
  }

  private ready: boolean;
  private exchangeSubmit;
  private queue;

  constructor({ connOptions, implOptions, exchangeName, exchangeOption, queueName, queueOption }) {
    const that = this;
    const conn = amqp.createConnection(connOptions, implOptions);

    conn.on('close', () => {
      that.ready = false;
      console.info('rabbitMQ has closed...');
    });

    conn.on('ready', () => {
      that.exchangeSubmit = conn.exchange(exchangeName, exchangeOption);
      that.exchangeSubmit.on('open', () => {
        that.ready = true;
        conn.queue(queueName, queueOption, (queue) => {
          queue.bind(that.exchangeSubmit, '');
          that.ready = true;
          that.queue = queue;
        });
        console.info('rabbitMQ connection success!');
      });
    });

    conn.on('error', (err) => {
      that.ready = false;
      console.log(err);
      console.info(`rabbitMQ error,${err.toString()}`);
    });

    conn.on('disconnect', () => {
      that.ready = false;
      console.info('rabbitMQ disconnect');
    });
  }

  public publishMsg(body, options = {}) {
    // console.log('publish', this.ready);
    const that = this;
    return new Promise(((resolve, reject) => {
      if (!this.ready || !this.exchangeSubmit || this.exchangeSubmit.binds == 0) {
        setTimeout(() => {
          resolve(that.publishMsg(body, options));
        }, 1000);
      } else {
        this.exchangeSubmit.publish('', body, options || {}, (ret, err) => {
          if (err) {
            return reject(err);
          }
          return resolve(!ret);
        });
      }
    }));
  }

  public subscribe(options, callback) {
    const that = this;
    if (that.queue) {
      that.queue.subscribe(options, callback);
    } else {
      setTimeout(() => {
        that.subscribe(options, callback);
      }, 1000);
    }
  }
}

export default MQ;
