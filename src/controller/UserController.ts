/*
 * Created by Zubin on 2017-11-06 10:10:21
 */

import * as Joi from 'joi';
import * as router from '../extend/router_decorator';

import { allow, validateBody, validateQuery } from '../extend/decorator';
import { getUserInfoList, updateUserInfo } from '../service/userInfo';

import { Context } from 'koa';

export default class UserController {
  /**
   * 获取用户列表
   *
   * @param {Context} ctx
   * @returns
   * @memberof UserController
   */
  @router.get('/user/getUserListByGroup')
  @validateQuery({
    group: Joi.number()
      .required()
      .error(new Error('用户组不能为空')),
  })
  async getUserListByGroup(ctx: Context) {
    return getUserInfoList(ctx.params);
  }

  /**
   * 修改用户信息
   *
   * @param {Context} ctx
   * @returns
   * @memberof UserController
   */
  @router.post('/user/setUserInfo')
  @allow('json')
  @validateBody({
    userId: Joi.number().required(),
    group: Joi.number().required(),
  })
  async setUserInfo(ctx: Context) {
    return updateUserInfo({ group: ctx.params.group }, { userId: ctx.params.userId });
  }
}
