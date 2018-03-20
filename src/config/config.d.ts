/*
 * Created by Zubin on 2017-10-30 17:15:44
 */

import { RedisOptions } from 'ioredis'
import { Options as seqOptions } from 'sequelize';
import { ConnectionOptions } from 'amqp';

/**
 * rabbitmq配置
 *
 * @interface RabbitMqConfig
 */
export interface RabbitMqConfig {
  connOptions: ConnectionOptions;
}

/**
 * 数据库配置
 *
 * @interface DBConfig
 */
export interface DBConfig {
  userName: string;
  password: string;
  database: string;
  dbConfig: seqOptions;
}

/**
 * 配置文件
 *
 * @interface IConfig
 */
export interface IConfig {
  [x: string]: any;
  debug?: boolean;
  name?: string,
  port: number;
  db: {
    [x:string]: DBConfig;
  };
  mongo?: {
    [x:string]: string,
  };
  redis?: RedisOptions;
  rabbitmq: RabbitMqConfig;
  queueName: string;
  exchangeName: string;
}
