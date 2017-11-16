/*
 * Created by Zubin on 2017-11-15 18:20:08
 */

import * as Joi from 'joi';
import * as Router from 'koa-router';

import config from './config';
import { handle } from './middleware/router';

export function initRouter(): Router {
  const router = new Router();

  // 主页
  router.all('/', ctx => {
    ctx.body = `${config.name} hello world1112`;
  });

  router.get('/teacher/tests', handle({
    auth: false,
    req: {
      headers: Joi.object().unknown(),
      body: Joi.object().unknown(),
      query: {
        account: Joi.string().example('12345678901').description('邮箱/手机号码').required().error(new Error('账号不能为空')),
        password: Joi.string().min(3).max(24).example('1234').description('密码').required(),
        // password: Joi.string().min(3).error(new Error('长度不能小于3')).max(24).error(new Error('长度不能大于24')).example('1234').description('密码').required().error(new Error('必填'))
      }
    },
    res: {
      id: Joi.number().min(3).required()
    }

  }));

  //自动适配路由
  // router.all('/*', handle());

  return router;
}


