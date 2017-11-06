/*
 * Created by Zubin on 2017-10-31 16:01:52
 */
import * as koaRouter from 'koa-router';

import { errCodeEnum, retCodeEnum } from '../common/api_errcode';
import { lstatSync, readdirSync } from 'fs';

import { Context } from 'koa';
import { join } from 'path';

const CONTROLLER_PATH = '../controller';
let apiController = {};

readdirSync(join(__dirname, CONTROLLER_PATH))
  .filter(ctrlName => lstatSync(join(__dirname, CONTROLLER_PATH, ctrlName)).isDirectory()) // 筛选文件夹
  .forEach(ctrlName => {
    const _ctrlName = ctrlName.toLowerCase();
    apiController[_ctrlName] = {}; // 添加控制器

    const versionPath = join(__dirname, CONTROLLER_PATH, ctrlName);
    readdirSync(versionPath)
      .filter(versionName => versionName.indexOf('.map') < 0) // 过滤map文件
      .forEach(versionName => {
        const actionPath = join(versionPath, versionName);

        if (lstatSync(actionPath).isDirectory()) {
          // version是文件夹
          readdirSync(actionPath)
            .filter(action => lstatSync(join(actionPath, action)).isFile() && action.indexOf('.map') < 0)
            .forEach(action => {
              const _versionName = versionName.toLowerCase();
              apiController[_ctrlName][_versionName] = {};

              const actions = requireModule(join(actionPath, action).replace('.js', ''));
              Object.keys(actions).forEach(key => {
                apiController[_ctrlName][_versionName][key] = actions[key];
              });
            });

        } else {
          // version是文件如v1.js
          const _versionName = versionName.toLowerCase().replace('.js', '');
          apiController[_ctrlName][_versionName] = {};

          const actions = requireModule(join(actionPath));
          Object.keys(actions).forEach(key => {
            apiController[_ctrlName][_versionName][key] = actions[key];
          });
        }
      });
  });

apiController = Object.freeze(apiController);


/**
 * 加载模块
 * 
 * @param {string} path 模块路径
 * @returns {object} 
 */
function requireModule(path: string): object {
  const module: any = require(path);
  return module.default || module;
}

export default () => async function autoRoute(ctx: Context) {
  const scheme = ctx.path.toLowerCase().split('/').filter(item => item.trim().length > 0);
  if (scheme.length <= 1) {
    throw Object.assign(new Error('未找到指定的接口'), {
      errCode: errCodeEnum.notFoundController,
    });
  }

  if (scheme.length === 2) {
    scheme.splice(1, 0, 'v1');
  }

  const controller = apiController[scheme[0]];
  if (!controller) {
    ctx.error('未找到指定的控制器', errCodeEnum.notFoundController);
    // throw Object.assign(new Error('未找到指定的控制器'), {
    //   errCode: errCodeEnum.notFoundController,
    // });
  }

  const version = controller[scheme[1]];
  if (!version) {
    ctx.error('未找到指定版本的接口', errCodeEnum.notFoundApiVersion);
    // throw Object.assign(new Error('未找到指定版本的接口'), {
    //   errCode: errCodeEnum.notFoundApiVersion,
    // });
  }

  const action = version[scheme[2]];
  if (!action) {
    ctx.error('未找到指定的接口', errCodeEnum.notFoundApiAction);
    // throw Object.assign(new Error('未找到指定的接口'), {
    //   errCode: errCodeEnum.notFoundApiAction,
    // });
  }

  await action(ctx);
};
