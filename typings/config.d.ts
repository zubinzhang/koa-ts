/*
 * Created by Zubin on 2017-10-30 17:15:44
 */

// import {} from 'sequelize';

/**
 * rabbitmq配置
 * 
 * @interface RabbitMqConfig
 */
interface RabbitMqConfig {
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
interface DBConfig {
  userName: string;
  password: string;
  database: string;
  dbConfig: {
    host: string;
    port: number;
    dialect: string;
    timezone: string;
    timestamps?: boolean;
    pool: {
      max: number;
      min: number;
    };
    dialectOptions: {
      charset: string;
      collate: string;
      supportBigNumbers: boolean;
      bigNumberStrings: boolean;
    };
  };
}

/**
 * 配置文件
 * 
 * @interface Config
 */
interface Config {
  debug?: boolean;
  name?: string,
  port: number;
  db: {
    epaperWork: DBConfig;
  };
  rabbitmq: RabbitMqConfig;
  submitQueueName: string;
  submitExchangeName: string;
}
