/*
 * Created by Zubin on 2017-11-06 10:10:21
 */
import { Context } from 'koa';

export async function tests(ctx: Context) {
  ctx.validateBody('contents').isArray(vali => {
    vali.check('b').required().isNumber().gt(0);
  });
  ctx.success(ctx.vals);
}
