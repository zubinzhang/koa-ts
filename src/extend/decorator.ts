// Create by Zubin on 2018-07-04 14:52:10

import * as Joi from 'joi';
import * as assert from 'assert';

import { CWErrors } from '../common/cw_error';
import { Context } from 'koa';
import { errCodeEnum } from '../common/api_errcode';
import { isEmpty } from 'lodash';
import { isObject } from 'util';
import { toArray } from '../common/util';

export function validateQuery(schema) {
  return function(target: any, name: string, descriptor: PropertyDescriptor) {
    target[name] = toArray(middleware(schema, 'query'), target[name]);

    return descriptor;
  };
}

export function validateBody(schema) {
  return function(target: any, name: string, descriptor: PropertyDescriptor) {
    target[name] = toArray(middleware(schema, 'body'), target[name]);

    return descriptor;
  };
}

/**
 * 数据验证中间件，使用joi
 *
 * @param {*} schema joi chema
 * @param {string} [type='query']
 * @returns
 */
function middleware(schema: any, type: string = 'query') {
  assert(!isEmpty(schema), 'schema is empty');
  assert(isObject(schema), 'schema should be object');

  return async function(ctx: Context, next: Function) {
    const { error, value } = Joi.validate(ctx.request[type], schema);

    if (error) {
      throw new CWErrors(error.message, errCodeEnum.paramTypeError);
    }

    ctx.params = { ...ctx.params, ...value };

    return next();
  };
}

/**
 * Content-Type验证
 *
 * @export
 * @param {string} contentType Content-Type
 * @returns
 */
export function allow(...contentTypes: string[]) {
  assert(contentTypes.length > 0, 'ContentType is empty');

  return function(target: any, name: string, descriptor: PropertyDescriptor) {
    target[name] = toArray(mw, target[name]);

    return descriptor;
  };

  async function mw(ctx: Context, next: Function) {
    if (!ctx.is(contentTypes)) {
      throw new CWErrors('不支持当前表单类型');
    }
    return next();
  }
}
