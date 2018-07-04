// Create by Zubin on 2018-07-04 14:52:10

import * as Joi from 'joi';

import { CWErrors } from './common/cw_error';
import { Context } from 'koa';
import { errCodeEnum } from './common/api_errcode';
import { toArray } from './common/util';

export function validateQuery(schema) {
  return function(target: any, name: string, descriptor: PropertyDescriptor) {
    target[name] = toArray(target[name]);
    target[name].splice(target[name].length - 1, 0, vaildateMiddleware(schema, 'query'));

    return descriptor;
  };
}

export function validateBody(schema) {
  return function(target: any, name: string, descriptor: PropertyDescriptor) {
    target[name] = toArray(target[name]);
    target[name].splice(target[name].length - 1, 0, vaildateMiddleware(schema, 'body'));

    return descriptor;
  };
}

function vaildateMiddleware(schema, type) {
  return async function middleware(ctx: Context, next: Function) {
    const { error, value } = Joi.validate(ctx.request[type], schema);

    if (error) {
      throw new CWErrors(error.message, errCodeEnum.paramTypeError);
    }

    ctx.params = { ...ctx.params, ...value };

    return next();
  };
}
