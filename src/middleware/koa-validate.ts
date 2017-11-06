/*
 * Created by Zubin on 2017-11-01 18:21:24
 */

import { Context, Middleware } from 'koa';
import { errCodeEnum, retCodeEnum } from '../common/api_errcode';

import Validator from '../common/validator';
import { formatResData } from '../common/util';

/**
 * 扩展context
 */
export function middleware(): Middleware {
  return async (ctx: Context, next: () => Promise<any>) => {
    /**
     * 校验ctx.request.body参数
     * 
     * @param {string} key 
     * @returns 
     */
    ctx.validateBody = function (key: string) {
      ctx.vals = { ...ctx.request.body };
      const validator = new Validator(ctx.vals, key);
      return validator;
    };

    /**
     * 校验ctx.request.query
     * 
     * @param {string} key 
     * @returns 
     */
    ctx.validateQuery = function (key: string) {
      ctx.vals = { ...ctx.request.query };
      const validator = new Validator(ctx.vals, key);
      return validator;
    };

    await next();

  };
}
