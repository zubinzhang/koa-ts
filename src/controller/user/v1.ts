/*
 * Created by Zubin on 2017-11-06 10:10:21
 */

import { Context } from 'koa';
import { getUserInfoList } from '../../service/userInfo';

export async function getUserListByGroup(ctx: Context) {
  const userList = await getUserInfoList(ctx.params);

  return userList;
}
