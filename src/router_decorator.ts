/*
 * Create by Zubin on 2018-07-04 10:43:13
 */

import { Middleware } from 'koa';
import Router from './router';
import { toArray } from './common/util';

export function get(path: string, middleware?: Middleware) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    Router.routerSet.add({
      method: 'get',
      path,
      middlewares: toArray(middleware, target[name]),
    });

    return descriptor;
  };
}

export function post(path: string, middleware?: Middleware) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    Router.routerSet.add({
      method: 'post',
      path,
      middlewares: toArray(middleware, target[name]),
    });

    return descriptor;
  };
}

export function all(path: string, middleware?: Middleware) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    Router.routerSet.add({
      method: 'all',
      path,
      middlewares: toArray(middleware, target[name]),
    });

    return descriptor;
  };
}

export function put(path: string, middleware?: Middleware) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    Router.routerSet.add({
      method: 'put',
      path,
      middlewares: toArray(middleware, target[name]),
    });

    return descriptor;
  };
}

export function del(path: string, middleware?: Middleware) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    Router.routerSet.add({
      method: 'delete',
      path,
      middlewares: toArray(middleware, target[name]),
    });

    return descriptor;
  };
}
