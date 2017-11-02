/*
 * Created by Zubin on 2017-10-17 11:32:58
 */
import config from '../config';
import rabbitmq from './rabbitmq_core';

export const submitMQ = rabbitmq.init({
  connOptions: config.rabbitmq.connOptions,
  implOptions: config.rabbitmq.implOptions,
  exchangeName: config.submitExchangeName,
  exchangeOption: {
    type: 'direct',
    autoDelete: false,
    confirm: true,
  },
  queueName: config.submitQueueName,
  queueOption: {
    durable: true,
    autoDelete: false,
  },
});


/**
 * mq心跳监测
 * 
 * @export
 * @param {number} timeSpan 检测时间间隔,单位:s,默认10min
 */
export function mqCheckHealth(timeSpan: number = 600) {
  setInterval(() => {
    submitMQ.publishMsg('heartbeat-test').then((result) => {
      console.info(`MQ心跳监测正常,result:${result}`);
    }).catch((err) => {
      console.info(`MQ心跳监测异常${err.toString()}`);
    });
  }, timeSpan * 1000);
}



