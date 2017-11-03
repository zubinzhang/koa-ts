/*
 * Created by Zubin on 2017-11-02 17:10:05
 */
import * as Sequelize from 'sequelize';

import config from '../config';
import { getModels } from './epaperwork/db.tables';

// 建立数据库连接
const workSquelize = new Sequelize(
  config.db.epaperWork.database,
  config.db.epaperWork.userName,
  config.db.epaperWork.password,
  config.db.epaperWork.dbConfig,
);

// 获取实体
const workModel = getModels(workSquelize);

export { Sequelize, workSquelize, workModel };
