/*
 * Created by Zubin on 2017-10-30 16:43:20
 */

import 'source-map-support/register';

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaBodyparser from 'koa-bodyparser';
import * as koaCompress from 'koa-compress';
import * as koaFavicon from 'koa-favicon';
import * as koaLogger from 'koa-logger';
import * as koaValidate from './middleware/koa-validate';

import autoRoute from './middleware/auto_router';
import config from './config';
import { extendContext } from './middleware/context';
import { handleError } from './middleware/error';

const app = new Koa();

// 中间件
app.use(koaLogger());
app.use(koaFavicon('../favicon.ico'));
app.use(koaCompress());
app.use(koaBodyparser());
app.use(handleError());
app.use(koaValidate.middleware());
app.use(extendContext());

// 路由
const router = Router();

router.all('/', ctx => {
  ctx.body = `welcome to ${config.name}`;
});
router.all('/*', autoRoute());

app.use(router.routes())
  .use(router.allowedMethods());


// 捕捉全局错误
app.on('error', (err, ctx) => {
  console.log('app-on-error事件:' + err.toString() + 'ctx.request:' + JSON.stringify(ctx.request));
});

//监听所有未处理的Promise.reject异常
process.on('unhandledRejection', function (err) {
  console.error('process-on-unhandledRejection事件:' + err.toString());
});

process.on('uncaughtException', function (err) {
  console.error('process-on-uncaughtException,请检查日志,[detail]:' + err.toString());

});

app.listen(config.port, () => {
  console.log('Server is run at port ' + config.port);
});
