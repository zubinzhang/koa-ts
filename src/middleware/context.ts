/*
 * Created by Zubin on 2017-11-01 18:21:24
 */

import { Context, Middleware } from 'koa';
import { errCodeEnum, retCodeEnum } from '../common/api_errcode';

import { formatResData } from '../common/util';

/**
 * 扩展context
 */
export function extendContext(): Middleware {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.success = function <T>(data: T) {
      ctx.body = formatResData<T>(data);
    };

    ctx.error = (msg: string, errCode: number = retCodeEnum.serverError, retCode: number = errCodeEnum.apiError) => {
      throw Object.assign(
        new Error(msg || '接口口内部异常'),
        {
          retCode,
          errCode,
        });
    };

    ctx.allow = (passMethod: string | Array<string> = 'GET') => {
      let validateResult = false;
      if (typeof passMethod === 'string') {
        let _passMethod = passMethod.toUpperCase();
        validateResult = passMethod === 'ALL' || ctx.req.method === passMethod;
      } else if (Array.isArray(passMethod)) {
        validateResult = passMethod.some(item => item.toUpperCase() === ctx.req.method);
      }
      if (!validateResult) {
        ctx.error(`接口不支持${ctx.req.method}请求`, errCodeEnum.refusedRequest);
        // throw Object.assign(new Error(`接口不支持${ctx.req.method}请求`),
        //   { errcode: errCodeEnum.refusedRequest });
      }
      return ctx;
    };



    ctx.allowJson = (() => {
      if (!ctx.is('json')) {
        ctx.error('content-type错误,必须是application/json');
      }
      return ctx;
    });

    await next();

  };
}
