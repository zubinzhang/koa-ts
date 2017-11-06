import { BaseContext, Context } from 'koa';

// 扩展koa
declare module "koa" {
  interface BaseRequest {
    body: any;
  }
  // 扩展context
  interface BaseContext {
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
     * 返回成功的实体
     * 
     * @param {*} data 
     * @memberof BaseContext
     */
    success<T>(data: T): void;

    /**
     * 判断http method
     * 
     * @param {string} method 
     * @memberof BaseContext
     */
    allow(method: string | Array<string>): Context;


    /**
     * 判断content-type 是否application/json
     * 
     * @memberof BaseContext
     */
    allowJson(): Context;

    /**
     * 参数校验
     */
    validateBody(key: string): IValidator;

    /**
     * 参数校验
     */
    validateQuery(key: string): IValidator;

    /**
     * 校验完毕的请求参数
     */
    vals: object;

    /**
     * 验证
     */
    auth: {
      userId: number;
      pass: string;
    }
  }
}
