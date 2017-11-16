/*
 * Created by Zubin on 2017-11-02 12:06:44
 */

import * as moment from 'moment';

import { Context, Middleware } from 'koa';
import { errCodeEnum, retCodeEnum } from '../common/api_errcode';

import { appLog } from '../common/logger';
import { formatResData } from '../common/util';

// import { mongoModel } from '../model';

export function handleError(): Middleware {
  return async (ctx: Context, next: () => Promise<any>) => {
    appLog.info('\n========start:开始本次请求跟踪=========');
    appLog.info(JSON.stringify({
      url: ctx.url,
      headers: ctx.headers,
      query: ctx.request.query,
      body: ctx.request.body,
    }));

    try {
      await next();
    } catch (err) {
      ctx.body = formatResData(
        null,
        err.retCode || retCodeEnum.serverError,
        err.errCode || errCodeEnum.autoSnapError,
        err.message || err.toString(),
      );

      appLog.error(`出现异常错误:${err.toString()}\n错误堆栈：${err.stack}\n响应数据:${JSON.stringify(ctx.body)}`);
    } finally {
      // 保存post请求的日志
      if (ctx.req.method.toUpperCase() === 'POST') {
        const urls = ctx.url.split('/');

        // mongoModel.logger.create({
        //   url: ctx.url,
        //   createAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        //   header: ctx.headers,
        //   reqData: ctx.request.body,
        //   resData: ctx.body,
        //   name: urls[urls.length - 1],
        // }).catch(() => true);
      }
    }
  };
}

