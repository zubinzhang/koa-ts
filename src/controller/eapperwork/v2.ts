/*
 * Created by Zubin on 2017-11-02 17:14:04
 */

import { workModel, workSquelize } from '../../model';

import { Context } from 'koa';

export async function ttt(ctx: Context) {
  // workSquelize
  const data = await workModel.doeworks.findOne({
    raw: true,
    // attributes: ['*'],
  });
  ctx.success(data);
}
