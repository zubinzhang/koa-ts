/*
 * Created by Zubin on 2017-11-01 18:21:24
 */

import { Context, Middleware } from 'koa';
import { errCodeEnum, retCodeEnum } from '../common/api_errcode';

import { formatResData } from '../common/util';

export class CWErrors extends Error implements IError {
  retCode: number;
  errCode: number;
  constructor(message: string, errCode?: number, retCode?: number) {
    super(message);
    this.name = 'CWError';
    this.retCode = retCode;
    this.errCode = errCode;
    this.message = message;
  }
}

/**
 * 扩展context
 */
export function extendContext(): Middleware {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.success = function <T>(data: T) {
      ctx.body = formatResData<T>(data);
    };

    ctx.error = (msg: string, errCode: number = retCodeEnum.serverError, retCode: number = errCodeEnum.apiError) => {
      throw new CWErrors('接口口内部异常', errCode, retCode);
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

    // auth
    auth(ctx);

    await next();

  };
}

/**
 * auth
 * 
 * @param {Context} ctx 
 */
function auth(ctx: Context) {
  const env = process.env.NODE_ENV || 'development';
  const defaultAuth = 'Basic MTU1MDE0OjE=';

  const authStr = ctx.header.authorization || (env === 'development' ? defaultAuth : '');

  /* 用户ID必须是5到12位数的数字*/
  const userPassRegExp = /^([\d]{5,12}?):(.*)$/;
  const credentialsRegExp = /^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9\-\._~\+\/]+=*) *$/;
  const match = credentialsRegExp.exec(authStr);

  if (!match) {
    ctx.error('未认证的请求', errCodeEnum.refusedRequest, retCodeEnum.authenticationFailure);
  }
  const userPass = userPassRegExp.exec(new Buffer(match[1], 'base64').toString());

  if (!userPass) {
    ctx.error('未认证的请求', errCodeEnum.refusedRequest, retCodeEnum.authenticationFailure);
  }

  ctx.auth.userId = parseInt(userPass[1], 10);
  ctx.auth.pass = userPass[2];
}
