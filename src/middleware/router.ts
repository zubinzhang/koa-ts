/*
 * Created by Zubin on 2017-11-15 18:24:20
 */

import * as Joi from 'joi';

import { errCodeEnum, retCodeEnum } from '../common/api_errcode';

import { CWErrors } from '../common/cw_error';
import { Context } from 'koa';
import { appLog } from '../common/logger';

export function handle(options?: any) {
  return async (ctx: Context, next) => {
    appLog.info('validate...');
    const reqData = ctx.request.method === 'GET' ? ctx.request.query : ctx.request.body;

    // 验证path,找到相应的action
    const action = await vailPath(ctx);

    if (options.auth) {
      // 验证用户
    }
    // 验证请求参数request{ headers, query, body }
    for (const key in options.req) {
      if (options.req.hasOwnProperty(key)) {
        const schema = options.req[key];
        const { error, value } = Joi.validate(ctx.request[key], schema);
        // ctx.cwLogger.info('value', value);
        if (error) {
          throw new CWErrors(error.message, errCodeEnum.paramTypeError);
        }
      }
    }

    ctx.body = await action();

    // 验证返回数据respose.body{...}
    if (ctx.body instanceof Object && options.res) {
      const { error, value } = Joi.validate(ctx.body, options.res);
      if (error) {
        throw new CWErrors(error.message, errCodeEnum.responseParamTypeError);
      }
    }
  };
}

/**
 * 验证路劲,找到相应的action
 * 
 * @param {*} ctx 
 * @returns 
 */
async function vailPath(ctx: any) {
  const scheme = ctx.path.toLowerCase().split('/').filter(item => item.trim().length > 0);
  if (scheme.length <= 1) {
    throw new CWErrors('未找到指定的接口');
  }
  if (scheme.length === 2) {
    scheme.splice(1, 0, 'v1');
  }
  const controller = await import(`../controller/${scheme.slice(0, 2).join('/')}`)
    .catch(() => {
      throw new Error('未找到指定的控制器');
    });
  const action = controller[scheme[2]];
  if (!action) {
    throw new CWErrors('未找到指定的接口');
  }
  return action;
}

