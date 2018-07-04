// Create by Zubin on 2018-07-04 14:30:10

import * as router from '../router_decorator';

import { Context } from 'koa';

export default class {
  @router.all('/')
  async index(ctx: Context) {
    ctx.body = 'Hello World';
  }
}
