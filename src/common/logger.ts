/*
 * Created by Zubin on 2017-11-02 15:16:52
 */

import * as RotatingFileStream from 'bunyan-rotating-file-stream';
import * as bunyan from 'bunyan';
import * as fs from 'fs';

import config from '../config';
import { resolve } from 'path';

const logRoot = resolve(__dirname, '../../logs'); // 日志根目录

// 初始化日志目录
initLogDir(['app']);
// 创建日志对象
const appLog = createLogger();

// 新增log方法
appLog.log = function (...items) {
  const args = items.map(item => (typeof item === 'string' ? item : JSON.stringify(item)));
  appLog.info(args.join(' '));
};

/**
 * 创建日志对象
 *
 * @param {any} fileName
 * @returns
 */
function createLogger() {
  const pm2WorkId = process.env.pm_id === undefined
    ? ''
    : `${process.env.pm_id}-`;

  const options: LogOption = {
    name: config.name,
    streams: [{
      level: 'info',
      type: 'raw',
      stream: new RotatingFileStream({
        path: resolve(__dirname, `../../logs/app/${pm2WorkId}app-%Y-%m-%d-out.log`),
        // path: '/app/ex.%Y-%m-%d %H:%M:%S.log',
        period: '1d', // rotation
        totalFiles: 10, // keep 10 back copies
        rotateExisting: true, // Give ourselves a clean file when we start up, based on period
        threshold: '100m', // Rotate log files larger than 10 megabytes
        // totalSize: '20m', // Don't keep more than 20mb of archived log files
        gzip: false, // Compress the archive log files to save space
      }),
    }],
  };

  if (config.debug) {
    options.streams.push({
      level: 'trace',
      stream: process.stdout,
    });
  }

  return bunyan.createLogger(options);
}


/**
 * 初始化日志目录
 * @param logDirs 日志子目录
 */
function initLogDir(logDirs: Array<string>): void {
  // 日志根目录不存在创建根目录
  if (!fs.existsSync(logRoot)) {
    fs.mkdirSync(logRoot);
  }

  // 创建子目录
  logDirs.forEach((item) => {
    const childLogDir = resolve(logRoot, item);
    if (!fs.existsSync(childLogDir)) {
      fs.mkdirSync(childLogDir);
    }
  });
}


export { appLog };
export default appLog;
