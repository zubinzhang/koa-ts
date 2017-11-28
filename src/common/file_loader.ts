/*
 * Created by Zubin on 2017-11-27 17:49:48
 */

import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';

enum targetEnum { File, Folder, All }


export function getController(pathStr: string, ) {
  const apiController: any = {};
  for (const controllerName of loadFolder(pathStr, targetEnum.Folder)) {
    apiController[controllerName] = {};
    const controllerPath = path.join(pathStr, controllerName);

    // 版本是文件如v1.js
    for (const versionName of loadFolder(controllerPath, targetEnum.File)) {
      const filePath = path.join(controllerPath, versionName);
      apiController[controllerName][versionName] = loadFile(filePath);
    }

    // 版本是文件夹如v1
    for (const versionName of loadFolder(controllerPath, targetEnum.Folder)) {
      const versionPath = path.join(controllerPath, versionName);
      for (const actionFile of loadFolder(versionPath, targetEnum.File)) {
        const filePath = path.join(versionPath, actionFile);
        apiController[controllerName][versionName] = loadFile(filePath);
      }

    }
  }

  return apiController;
}


/**
 * 加载文件夹
 *
 * @param {string} pathStr
 * @param {targetEnum} target
 * @returns
 */
function loadFolder(pathStr: string, target: targetEnum) {
  // 过滤map
  const subdirectories = fs.readdirSync(pathStr).filter(item => !item.includes('.map'));

  const items = [];
  for (const directory of subdirectories) {
    const filePath = path.join(pathStr, directory);
    if (target === targetEnum.File && !fs.statSync(filePath).isFile()) continue;
    if (target === targetEnum.Folder && fs.statSync(filePath).isFile()) continue;
    items.push(_.camelCase(directory.replace('.js', '')));
  }

  return items;
}

/**
 * 加载文件
 *
 * @param {string} pathStr
 * @returns
 */
function loadFile(pathStr: string) {
  const exportMethods = { ...require(pathStr), ...require(pathStr).default };
  let methods = {};
  for (const key in exportMethods) {
    if (!_.isFunction(exportMethods[key])) continue;
    methods[_.camelCase(key)] = exportMethods[key];
  }
  return methods;
}
