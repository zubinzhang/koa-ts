/*
 * Created by Zubin on 2017-10-31 14:18:45
 */

/**
 * 开发数据库配置
 */
const epaperWork: DBConfig = {
  userName: 'root',
  password: 'root',
  database: 'cw_epaper_work',
  dbConfig: {
    host: '192.168.1.49',
    port: 3306,
    dialect: 'mysql',
    timezone: '+08:00',
    pool: {
      max: 2000,
      min: 3,
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
 * 开发mq配置
 */
const rabbitmq: RabbitMqConfig = {
  connOptions: {
    host: '192.168.2.163',
    port: 5672,
    login: 'ciwong2017',
    password: '123456',
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
  rabbitmq,
  submitQueueName: 'queue.epaper.submit.development',
  submitExchangeName: 'queue.epaper.submit.development',
} as Config;
