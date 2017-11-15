/*
 * Created by Zubin on 2017-11-02 15:16:52
 */

import * as log from 'cw-logger';

import { resolve } from 'path';

const logConfig = {
  logRoot: resolve(__dirname, './logs'), // 日志根目录(需根据实际情况设置)
  logLevel: 'error', // file
  logLevel4console: 'error', // console
  bunyan: {
    // 级别分别是: TRACE DEBUG INFO WARN ERROR FATAL
    categorys: [{
      name: 'console',
      type: 'console',
      logLevel4console: 'error',
      pretty: false // 格式化console输出日志, 方便查看
    }, {
      name: 'app', // 模块/分类
      type: 'rotatingFile',
      pretty: false, // 格式化console输出日志, 方便查看
      // logLevel: 'info',
      // logLevel4console: 'error',
      rotateConfig: {
        period: '1d', // The period at which to rotate.
        threshold: '10m', // Rotate log files larger than 10 megabytes
        totalFiles: 10 //The maximum number of rotated files to keep. 0 to keep files regardless of how many there are.
      }
    }
    ]
  }
};

/**
 * 日志类
 */
class CWLogger implements Ilog {
  logger: any;
  constructor(logger) {
    this.logger = logger;
  }
  info(...logStrs: string[]): void {
    this.logger.info(`${logStrs.join(' ')}`);
  }
  error(err: string | Error): void {
    this.logger.error(err);
  }

}

const logObj = log(logConfig);
// 创建日志对象
const appLog = new CWLogger(logObj.app);
const consoleLog = new CWLogger(logObj.console);

export { appLog, consoleLog };
// export default appLog;
