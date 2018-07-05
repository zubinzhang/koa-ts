/*
 * Created by Zubin on 2017-11-15 18:20:08
 */

import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import * as glob from 'glob';

import { join } from 'path';

const router = new KoaRouter();

/**
 * 路由
 *
 * @export
 * @class Router
 */
export default class Router {
  // 用于存储路由信息
  static routerSet: Set<{
    method: string;
    path: string;
    middlewares: Koa.Middleware[];
  }> = new Set();

  /**
   * 初始化路由
   *
   * @static
   * @returns
   * @memberof Router
   */
  static init() {
    // 加载所有控制器
    glob.sync(join(__dirname, '../controller/**/*.js')).forEach(require);

    // 挂载路由
    for (const { method, path, middlewares } of this.routerSet) {
      router[method](path, ...middlewares);
    }

    // 404
    router.all('*', (ctx: Koa.Context) => {
      ctx.status = 404;
      ctx.error('Router Not Found');
    });

    return router;
  }
}
