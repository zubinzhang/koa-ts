/*
 * Created by Zubin on 2017-10-17 11:32:58
 */

import * as MQ from 'cw-rabbitmq';
import config from '../config';

// 初始化mq
export const testMQ = new MQ(config.rabbitmq.connOptions, {
  exchangeName: config.exchangeName,
  exchangeOption: {
    type: 'direct',
    autoDelete: false,
    confirm: true,
  },
  queueName: config.queueName,
  queueOption: {
    durable: true,
    autoDelete: false,
  },
});
