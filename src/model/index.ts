/*
 * Created by Zubin on 2017-11-02 17:10:05
 */

import * as Bluebird from 'bluebird';
import * as Sequelize from 'sequelize';
import * as mondoModels from './mongo/db';
import * as mongoose from 'mongoose';

import { appLog } from '../common/logger';
import config from '../config';

// import * as workModels from './epaperwork/db.tables'; //引入sequelize-auto生成的实体


// // 新建mysql数据库实例
// config.db.epaperWork.dbConfig.logging = sql => {
//   appLog.info(sql); // sql语句写入日志
// };

// const workSquelize = new Sequelize(
//   config.db.epaperWork.database,
//   config.db.epaperWork.userName,
//   config.db.epaperWork.password,
//   config.db.epaperWork.dbConfig,
// );

// // 获取mysql实体
// const workModel = workModels.getModels(workSquelize);


// export { Sequelize, workSquelize, workModel };

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
