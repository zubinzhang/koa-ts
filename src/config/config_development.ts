/*
 * Created by Zubin on 2017-10-31 14:18:45
 */
import { DBConfig, IConfig, RabbitMqConfig } from '../../typings/config';

/**
 * 开发数据库配置
 */
const dbTest: DBConfig = {
  userName: 'root',
  password: 'root',
  database: 'db_test',
  dbConfig: {
    host: '127.0.0.1',
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
    host: '127.0.0.1',
    port: 5672,
    login: '123456',
    password: '123456',
    vhost: 'test_vhost',
    reconnect: true,
    reconnectBackoffTime: 10000, // 10秒尝试连接一次
  },
};

// redis 配置
const redis = {
  host: '127.0.0.1',
  port: 6379,
  password: '123456',
  db: 5,
  connectTimeout: 1000,
  lazyConnect: false,
  keyPrefix: '',
};


export default {
  port: 10086,
  db: {
    db_test: dbTest,
  },
  redis,
  mongo: {
    db_test: 'mongodb://127.0.0.1:27017/db_test?poolSize=50',
  },
  rabbitmq,
  queueName: 'queue.epaper.test.development',
  exchangeName: 'queue.epaper.test.development',
} as IConfig;
