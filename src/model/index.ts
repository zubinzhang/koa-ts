/*
 * Created by Zubin on 2017-11-02 17:10:05
 */

import * as Bluebird from 'bluebird';
import * as Sequelize from 'sequelize';
import * as mondoModels from './mongo/db';
import * as mongoose from 'mongoose';
import * as testModels from './db_test/db.tables'; //引入sequelize-auto生成的实体

import { appLog } from '../common/logger';
import config from '../config';

// 新建mysql数据库实例
config.db.db_test.dbConfig.logging = sql => {
  appLog.info(sql); // sql语句写入日志
};

const workSquelize = new Sequelize(
  config.db.db_test.database,
  config.db.db_test.userName,
  config.db.db_test.password,
  config.db.db_test.dbConfig,
);

// 获取mysql实体
const testModel = testModels.getModels(workSquelize);


export { Sequelize, workSquelize, testModel };

// 不用mongodb请删除下面代码

// Use bluebird promises
(<any>mongoose).Promise = Bluebird;
// 新建mongodb连接
mongoose.connect(config.mongo.epaperLog, {
  // autoReconnect: true,
  // poolSize: 10,
  useMongoClient: true,
})
  .then(() => console.info('mongodb连接已就绪...'))
  .catch(err => console.error('mongodb connection error:', err.message));

export const mongoModel = mondoModels.getModels(mongoose);
