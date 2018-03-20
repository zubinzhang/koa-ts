import { BaseContext, Context } from 'koa';

// 扩展koa
declare module "koa" {
  interface BaseRequest {
    body: any;
  }
  // 扩展context
  interface BaseContext {

    /**
     * 请求参数
     */
    params: any;

    /**
     * 抛出错误信息
     *
     * @param {string} msg 错误信息
     * @param {number} errCode ret错误代码
     * @param {number} retCode 错误代码
     * @memberof BaseContext
     */
    error(msg: string, errCode?: number, retCode?: number): void;

    /**
     * 验证
     */
    auth: {
      userId: number;
      pass: string;
    }
  }
}
