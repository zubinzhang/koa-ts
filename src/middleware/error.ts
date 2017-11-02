/*
 * Created by Zubin on 2017-11-02 12:06:44
 */
import { Context, Middleware } from 'koa';
import { errCodeEnum, retCodeEnum } from '../common/api_errcode';

import { ValidationError } from 'koa-bouncer';
import appLog from '../common/logger';
import { formatResData } from '../common/util';

export function handleError(): Middleware {
  return async (ctx: Context, next: () => Promise<any>) => {
    appLog.log('\n========start:开始本次请求跟踪=========');
    appLog.log(`当前URL:${ctx.url}`);
    appLog.log(`当前headers:${JSON.stringify(ctx.headers)}`);
    appLog.log(`当前query:${JSON.stringify(ctx.request.query)}`);
    appLog.log(`当前body:${JSON.stringify(ctx.request.body)}`);
    try {
      await next();
    } catch (err) {

      // 参数校验错误
      if (err instanceof ValidationError) {
        err.retCode = retCodeEnum.serverError;
        err.errCode = errCodeEnum.paramTypeError;
      }

      ctx.body = formatResData(
        null,
        err.retCode || retCodeEnum.serverError,
        err.errCode || errCodeEnum.autoSnapError,
        err.message || err.toString(),
      );


      appLog.error(`出现异常错误:${err.toString()}`);
      appLog.error(`错误堆栈：${err.stack}`);
      appLog.error(`响应数据:${JSON.stringify(ctx.body)}`);
    } finally {
      // 保存post请求的日志
      if (ctx.req.method.toUpperCase() === 'POST') {
        const urls = ctx.url.split('/');

        // epaperLog.currentLog().create({
        //   url: ctx.url,
        //   createAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        //   header: ctx.headers,
        //   reqData: ctx.request.body,
        //   resData: ctx.body,
        //   name: urls[urls.length - 1],
        // }).catch(() => true);
      }
      appLog.log('=======end:结束本次请求跟踪=======\n');
    }
  };
}
