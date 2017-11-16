/*
 * Created by Zubin on 2017-10-30 16:43:20
 */

import 'source-map-support/register';

import * as Koa from 'koa';
import * as http from 'http';
import * as koaBodyparser from 'koa-bodyparser';
import * as koaFavicon from 'koa-favicon';

import config from './config';
import { handleError } from './middleware/error';
import { initRouter } from './router';

const app = new Koa();

// 中间件
app.use(koaFavicon('./favicon.ico'));
app.use(koaBodyparser());
app.use(handleError());

// 路由
const router = initRouter();

app.use(router.routes())
  .use(router.allowedMethods());

// create server
const server = http.createServer(app.callback());

// 捕捉全局错误
app.on('error', (err, ctx) => {
  console.log(`app-on-error事件:${err.toString()} ctx.request: ${JSON.stringify(ctx.request)}`);
});

// 监听所有未处理的Promise.reject异常
process.on('unhandledRejection', function (err) {
  console.error('process-on-unhandledRejection事件:' + err.toString());
});

process.on('uncaughtException', function (err) {
  console.error('process-on-uncaughtException,请检查日志,[detail]:' + err.toString());

});

server.listen(config.port);

server.on('listening', () => {
  console.info('Server is listening on port: %d', config.port);
});
