/*
 * Created by Zubin on 2017-11-03 14:29:59
 */

import * as moment from 'moment';

import { ILogger, LoggerSchema } from './logger';
import { Model, Mongoose } from 'mongoose';

export interface ITables {
  logger: Model<ILogger>;
}
/**
 * 获取model
 * 
 * @export
 * @param {Mongoose} mongo 
 * @returns {ITables} 
 */
export function getModels(mongo: Mongoose, logDoc?: string): ITables {
  logDoc = logDoc || `log${moment().format('YYYYMM')}`;
  const tables: ITables = {
    logger: mongo.model<ILogger>(logDoc, LoggerSchema),
  };
  return tables;
}

// const logger = mongoose.model<ILogger>('User', LoggerSchema);
