/*
 * Created by Zubin on 2017-11-06 10:10:21
 */

import * as mongoTest from '../../service/mongoTest';
import * as tbTest from '../../service/tbtest';

import { Context } from 'koa';
import { redis } from '../../common/redis';
import { submitMQ } from '../../common/mq';

export async function tests(ctx: Context) {
  // 使用redis
  await redis.setData('test', 'test data', 60);
  const redisData = redis.get('test');
  console.log(redisData);

  // 使用mysql,建议数据库操作逻辑放在src/services文件夹
  const mysqlData = await tbTest.find();
  console.log(mysqlData);

  // mongodb操作
  const mongoData = mongoTest.find();
  console.log(mongoData);

  // mq 操作
  await submitMQ.publishMsg('test', { headers: { a: 11 } });

  return ctx.config;
  // ctx.error('12312125');
  // ctx.validateBody('contents').isArray(vali => {
  //   vali.check('b').required().isNumber().gt(0);
  // });
  // ctx.success(ctx.vals);
}
