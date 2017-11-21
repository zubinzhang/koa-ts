/*
 * Created by Zubin on 2017-11-21 15:23:49
 */

import { Context, Middleware } from 'koa';

// import { mongoModel } from '../model';

export function bodyNull(): Middleware {
  return async (ctx: Context, next) => {
    // 转换xml
    if (ctx.is('text/xml', 'xml') && /^(POST|PUT|PATCH)$/i.test(ctx.method)) {
      ctx.request.body = undefined;
    }
    await next();
  };
}
