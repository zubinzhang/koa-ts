/*
 * Created by Zubin on 2017-11-03 14:29:59
 */

import { IUserInfoAttrbute, UserInfoSchema } from './logger';
import { Model, Mongoose } from 'mongoose';

export interface ITables {
  userInfo: Model<IUserInfoAttrbute>;
}
/**
 * 获取model
 *
 * @export
 * @param {Mongoose} mongo
 * @returns {ITables}
 */
export function getModels(mongo: Mongoose): ITables {
  const tables: ITables = {
    userInfo: mongo.model<IUserInfoAttrbute>('userInfo', UserInfoSchema),
  };
  return tables;
}

