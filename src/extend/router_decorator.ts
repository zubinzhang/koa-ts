/*
 * Create by Zubin on 2018-07-04 10:43:13
 */

import * as assert from 'assert';

import Router from './router';
import { toArray } from '../common/util';

export function get(...paths: string[]) {
  return addRouterDecorator(paths, 'get');
}

export function post(...paths: string[]) {
  return addRouterDecorator(paths, 'post');
}

export function all(...paths: string[]) {
  return addRouterDecorator(paths, 'all');
}

export function put(...paths: string[]) {
  return addRouterDecorator(paths, 'put');
}

export function del(...paths: string[]) {
  return addRouterDecorator(paths, 'delete');
}

/**
 * 路由装饰器
 *
 * @param {string} path 路径
 * @param {string} method 方法
 * @returns
 */
function addRouterDecorator(paths: string[], method: string) {
  assert(paths.length > 0, 'paths is empty');
  assert(typeof method === 'string', 'method should be string');

  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    Router.routerSet.add({
      method: method,
      path: paths.map(p => p.toLowerCase()),
      middlewares: toArray(Reflect.get(target, name)),
    });

    return descriptor;
  };
}
