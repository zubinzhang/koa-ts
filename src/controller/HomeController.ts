// Create by Zubin on 2018-07-04 14:30:10

import * as router from '../extend/router_decorator';

import { Context } from 'koa';

export default class HomeController {
  @router.all('/')
  async index(ctx: Context) {
    ctx.body = 'Hello World';
  }
}
