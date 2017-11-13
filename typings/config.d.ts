/*
 * Created by Zubin on 2017-10-30 17:15:44
 */

import { RedisOptions } from 'ioredis'
import { Options as seqOptions } from 'sequelize';

/**
 * rabbitmq配置
 * 
 * @interface RabbitMqConfig
 */
export interface RabbitMqConfig {
  connOptions: {
    host: string;
    port: number;
    login: string;
    password: string;
    vhost?: string;
    authMechanism?: string;
  };
  implOptions: {
    reconnect: boolean;
    reconnectBackoffTime: number;
  };
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
 * @interface Config
 */
export interface Config {
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
}
