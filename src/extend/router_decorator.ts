/*
 * Create by Zubin on 2018-07-04 10:43:13
 */

import * as assert from 'assert';

import Router from './router';
import { toArray } from '../common/util';

export function get(path: string) {
  return addRouterDecorator(path, 'get');
}

export function post(path: string) {
  return addRouterDecorator(path, 'post');
}

export function all(path: string) {
  return addRouterDecorator(path, 'all');
}

export function put(path: string) {
  return addRouterDecorator(path, 'put');
}

export function del(path: string) {
  return addRouterDecorator(path, 'delete');
}

/**
 * 路由装饰器
 *
 * @param {string} path 路径
 * @param {string} method 方法
 * @returns
 */
function addRouterDecorator(path: string, method: string) {
  assert(
    typeof method === 'string' && typeof path === 'string',
    'method and path should be string',
  );

  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    Router.routerSet.add({
      method: method,
      path,
      middlewares: toArray(Reflect.get(target, name)),
    });

    return descriptor;
  };
}
