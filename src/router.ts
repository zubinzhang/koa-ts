/*
 * Created by Zubin on 2017-11-15 18:20:08
 */

import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import * as glob from 'glob';

import { join } from 'path';

const router = new KoaRouter();

export default class Router {
  static routerSet: Set<{
    method: string;
    path: string;
    middlewares: Koa.Middleware[];
  }> = new Set();

  static init() {
    // 加载所有控制器
    glob.sync(join(__dirname, './controller/**/*.js')).forEach(require);

    for (const { method, path, middlewares } of this.routerSet) {
      router[method](path, ...middlewares);
    }

    return router;
  }
}
