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
    ctx.body = `Hello ${config.name}`;
  });

  router.get('/user/getUserListByGroup',  handle({
    auth: false,
    req: {
      headers: Joi.object().unknown(),
      body: Joi.object().unknown(),
      query: {
        group: Joi.number().required().error(new Error('用户组不能为空')),
      }
    },
    res: Joi.array().required().items({
      id: Joi.number().required(),
      userId: Joi.number().required(),
      userName: Joi.string().required(),
      group: Joi.number().required(),
    }),
  }));

  //自动适配路由
  // router.all('/*', handle({}));

  return router;
}
