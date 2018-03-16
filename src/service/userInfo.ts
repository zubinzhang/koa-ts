/**
 * Create by Zubin on 2018-01-16 11:48:58
 **/


import { testModel } from '../model';
import { userinfoAttribute } from '../model/db_test/db';

/**
 * 获取用户列表
 *
 * @export
 * @param {userinfoAttribute} condition
 * @returns
 */
export function getUserInfoList(condition: userinfoAttribute) {
  return testModel.userinfo.findAll({ where: condition, raw: true });
}
