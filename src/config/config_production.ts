/*
 * Created by Zubin on 2017-10-31 14:18:45
 */
import {Config, DBConfig, RabbitMqConfig} from '../../typings/config';

/**
 * 投产数据库配置
 */
const epaperWork: DBConfig = {
  userName: 'apps',
  password: 'apps_sabin@2017',
  database: 'cw_epaper_work',
  dbConfig: {
    host: 'rm-2ze0qk421h84k72iirw.mysql.rds.aliyuncs.com',
    port: 3306,
    dialect: 'mysql',
    timezone: '+08:00',
    pool: {
      max: 50,
      min: 1,
    },
    dialectOptions: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      supportBigNumbers: true,
      bigNumberStrings: true,
    },
  },
};

/**
 * 投产mq配置
 */
const rabbitmq: RabbitMqConfig = {
  connOptions: {
    host: '101.200.87.163',
    port: 5672,
    login: 'cwmq_admin',
    password: 'L0v3@4dmin_cwmq',
    authMechanism: 'AMQPLAIN',
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
    host: 'a4bcad9c53a1443b.redis.rds.aliyuncs.com',
    port: 6379,
    password: 'cwToken201512',
    db: 2,
    connectTimeout: 5000,
    lazyConnect: false,
    keyPrefix: '',
  },
  rabbitmq,
  submitQueueName: 'queue.epaper.submit',
  submitExchangeName: 'queue.epaper.submit',
} as Config;
