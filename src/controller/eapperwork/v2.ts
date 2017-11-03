/*
 * Created by Zubin on 2017-11-02 17:14:04
 */

import { workModel, workSquelize } from '../../model';

import { Context } from 'koa';
import { redis } from '../../common/redis';

export async function ttt(ctx: Context) {
  // workSquelize
  const data = await redis.getJsonData('tttt');
  redis.set('tttt', '{"a":1}', 'EX', 60);

  ctx.success(data);
}
