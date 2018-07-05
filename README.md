# koa-ts

koa2 demo，使用 typescript,集成了[sequelize](http://docs.sequelizejs.com/)，[mongoose](http://mongoosejs.com)以及 redis 和 rabbitmq

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

- 开发时直接运行`npm run dev` babel 即时编译并运行,并检测改动的文件自动编译
- 建议 nodejs 使用 8 以上 lts 版本，不保证 windows 下兼容性
- 运行请先修改配置文件（src/config/）,端口,配置好数据库，mongodb,在 package.json->scripts->model 中配置好数据库信息，配置请参考

```
"model": "rimraf src/model/[库名] && sequelize-auto -o \"./src/model/[库名]\" -c \"create_model.json\" -d [库名] -h [数据库地址] -u [用户名] -p [端口] -x [密码] -e mysql -C -z"
```

## 定义路由

```js
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
```

## mysql 使用方法

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

## mongodb 使用方法

> [mongoose](http://mongoosejs.com)文档请参考http://mongoosejs.com

```js
import { mongoModel } from './src/model';
import * as moment from 'moment';

mongoModel.userInfo.create({
  userId: moment().format('X'),
  userName: '单元测试添加',
  group: 1,
});

mongoModel.userInfo.findOne();
```

## redis 使用方法

```js
import { redis } from './src/common/redis';

async () => {
  await redis.set('test', 'hello', 'EX', 60);
  const data = await redis.get('test');
};
```

## rabbitmq 使用方法

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
