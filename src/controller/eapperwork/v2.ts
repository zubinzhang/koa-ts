/*
 * Created by Zubin on 2017-11-02 17:14:04
 */

import { workModel, workSquelize } from '../../model';

import { Context } from 'koa';
import Redis from '../../common/redis';

export async function ttt(ctx: Context) {
  // workSquelize
  const data = await Redis.init().getJsonData('tttt');
  Redis.init().set('tttt', '{"a":1}', 'EX', 60);

  ctx.success(data);
}
