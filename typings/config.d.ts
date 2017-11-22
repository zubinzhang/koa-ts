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
  debug?: boolean;
  name?: string,
  port: number;
  db: {
    epaperWork?: DBConfig;
  };
  mongo?: {
    epaperLog?: string,
  };
  redis?: RedisOptions;
  rabbitmq: RabbitMqConfig;
  submitQueueName: string;
  submitExchangeName: string;
}
