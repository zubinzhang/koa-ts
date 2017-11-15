/*
 * Created by Zubin on 2017-11-02 12:06:44
 */

import * as moment from 'moment';

import { Context, Middleware } from 'koa';
import { errCodeEnum, retCodeEnum } from '../common/api_errcode';

import { ValidationError } from '../common/validator';
import { appLog } from '../common/logger';
import { formatResData } from '../common/util';

// import { mongoModel } from '../model';

export function handleError(): Middleware {
  return async (ctx: Context, next: () => Promise<any>) => {
    // appLog.info('\n========start:开始本次请求跟踪=========');
    // appLog.info(`当前URL:${ctx.url}`);
    // appLog.info(`当前headers:${JSON.stringify(ctx.headers)}`);
    // appLog.info(`当前query:${JSON.stringify(ctx.request.query)}`);
    // appLog.info(`当前body:${JSON.stringify(ctx.request.body)}`);
    try {
      await next();
    } catch (err) {
      formatError(ctx, err);

      // appLog.error(`出现异常错误:${err.toString()}`);
      // appLog.error(`错误堆栈：${err.stack}`);
      // appLog.error(`响应数据:${JSON.stringify(ctx.body)}`);
    } finally {
      // // 保存post请求的日志
      // if (ctx.req.method.toUpperCase() === 'POST') {
      //   const urls = ctx.url.split('/');

      //   // mongoModel.logger.create({
      //   //   url: ctx.url,
      //   //   createAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      //   //   header: ctx.headers,
      //   //   reqData: ctx.request.body,
      //   //   resData: ctx.body,
      //   //   name: urls[urls.length - 1],
      //   // }).catch(() => true);
      // }
      // appLog.info('=======end:结束本次请求跟踪=======\n');
    }
  };
}

/**
 * 
 * @param ctx 格式化错误
 * @param err 
 */
function formatError(ctx: Context, err: any) {
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

}
