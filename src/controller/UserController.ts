/*
 * Created by Zubin on 2017-11-06 10:10:21
 */

import * as Joi from 'joi';
import * as router from '../router_decorator';

import { Context } from 'koa';
import { getUserInfoList } from '../service/userInfo';
import { validateQuery } from '../decorator';

export default class UserController {
  @router.get('/user/getUserListByGroup')
  @validateQuery({
    group: Joi.number()
      .required()
      .error(new Error('用户组不能为空')),
  })
  async getUserListByGroup(ctx: Context) {
    return getUserInfoList(ctx.params);
  }
}
