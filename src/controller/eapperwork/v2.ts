import { Context } from 'koa';
export async function ttt(ctx: Context) {
  ctx.success(111);
}
