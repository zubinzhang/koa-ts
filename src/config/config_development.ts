/*
 * Created by Zubin on 2017-10-31 14:18:45
 */
import { Config, DBConfig, RabbitMqConfig } from '../../typings/config';

/**
 * 开发数据库配置
 */
const epaperWork: DBConfig = {
  userName: '',
  password: '',
  database: '',
  dbConfig: {
    host: '',
    port: 3306,
    dialect: 'mysql',
    timezone: '+08:00',
    pool: {
      max: 2000,
      min: 3,
    },
    operatorsAliases: false,
    dialectOptions: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      supportBigNumbers: true,
      bigNumberStrings: true,
    },
  },
};


/**
 * 开发mq配置
 */
const rabbitmq: RabbitMqConfig = {
  connOptions: {
    host: '',
    port: 5672,
    login: '',
    password: '',
    vhost: 'ciwong_vhost',
  },
  implOptions: {
    reconnect: true,
    reconnectBackoffTime: 10000, // 10秒尝试连接一次
  },
};


export default {
  port: 10086,
  db: {
    epaperWork,
  },
  redis: {
    host: '',
    port: 6379,
    password: '',
    db: 5,
    connectTimeout: 1000,
    lazyConnect: false,
    keyPrefix: '',
  },
  mongo: {
    epaperLog: 'mongodb://×××××?poolSize=50',
  },
  rabbitmq,
  submitQueueName: 'queue.epaper.submit.development',
  submitExchangeName: 'queue.epaper.submit.development',
} as Config;
