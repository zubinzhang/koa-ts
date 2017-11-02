/*
 * Created by Zubin on 2017-10-20 15:44:33
 */

import * as Sequelize from 'sequelize';
import config from '../config';

const workSquelize = new Sequelize(
  config.db.epaperWork.database,
  config.db.epaperWork.userName,
  config.db.epaperWork.password,
  config.db.epaperWork.dbConfig,
);

export { Sequelize, workSquelize };
