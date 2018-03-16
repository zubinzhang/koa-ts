# koa-ts
koa2 demo，使用typescript,集成了[sequelize](http://docs.sequelizejs.com/)，[mongoose](http://mongoosejs.com)以及redis和rabbitmq

## 启动
```sh
npm install #安装依赖
npm run build # tsc编译
npm start # 启动项目
```

## 其他命令
```sh
npm run build # tsc编译
npm run dev # tsc即时编译并运行，用于本地开发
npm run model # 生成model,默认目录在src/model/[dbname]下
```


## 说明
+ 开发时直接运行``` npm run dev ``` babel即时编译并运行,并检测改动的文件自动编译
+ 建议nodejs使用8以上lts版本，不保证windows下兼容性
+ 运行请先修改配置文件（src/config/）,端口,配置好数据库，mongodb,在package.json->scripts->model中配置好数据库信息，配置请参考
```
"model": "rimraf src/model/[库名] && sequelize-auto -o \"./src/model/[库名]\" -c \"create_model.json\" -d [库名] -h [数据库地址] -u [用户名] -p [端口] -x [密码] -e mysql -C -z"
```

## mysql使用方法
> [sequelize](http://docs.sequelizejs.com/)文档请参考http://docs.sequelizejs.com/

```js
import { testModel } from './src/model';
import * as moment from 'moment';

testModel.userinfo.create({
  userId: parseInt(moment().format('X')),
  userName: '单元测试添加',
  group: 1,
});

testModel.userinfo.findOne({ raw: true });

```

## mongodb使用方法
```js
> [mongoose](http://mongoosejs.com)文档请参考http://mongoosejs.com

import { mongoModel } from './src/model';
import * as moment from 'moment';

mongoModel.userInfo.create({
  userId: moment().format('X'),
  userName: '单元测试添加',
  group: 1,
});

mongoModel.userInfo.findOne();
```
## redis使用方法
```js
import { redis } from './src/common/redis';

async () => {
  await redis.set('test', 'hello', 'EX', 60);
  const data = await redis.get('test');
}
```
## rabbitmq使用方法
```js
import { testMQ } from './src/common/mq';

// 发布
testMQ.publishMsg('msg test', {
  headers: {
    key: 1,
  },
});

// 订阅
testMQ.subscribe({ ack: true }, (message, headers, _deliverInfo, ack) => {
  console.log(message.data.toString());
  console.log(headers.key);
  ack.acknowledge(false);
});
```
