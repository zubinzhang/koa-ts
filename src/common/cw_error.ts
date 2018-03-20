/*
 * Created by Zubin on 2017-11-15 18:26:31
 */

import { errCodeEnum, retCodeEnum } from './api_errcode';

interface IError {
  retCode: number;
  errCode: number;
}

export class CWErrors extends Error implements IError {
  retCode: number;
  errCode: number;
  constructor(message: string, errCode: number = errCodeEnum.apiError, retCode: number = retCodeEnum.serverError) {
    super(message);
    this.name = 'CWError';
    this.retCode = retCode;
    this.errCode = errCode;
    this.message = message;
  }
}
