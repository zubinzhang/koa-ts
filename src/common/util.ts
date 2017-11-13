/*
 * Created by Zubin on 2017-11-02 09:34:28
 */

import * as crypto from 'crypto';
import * as moment from 'moment';

import { errCodeEnum, retCodeEnum } from './api_errcode';

import { v4 as uuidV4 } from 'uuid';

/**
 * 结构化返回信息
 * 
 * @export
 * @template T 
 * @param {T} data 
 * @param {number} [ret=retCodeEnum.success] 
 * @param {number} [errcode=errCodeEnum.success] 
 * @param {string} [msg='success'] 
 * @returns {IResData<T>} 
 */
export function formatResData<T>(data: T, ret: number = retCodeEnum.success, errcode: number = errCodeEnum.success, msg: string = 'success'): IResData<T> {
  return {
    ret,
    errcode,
    msg,
    data,
    uuid: uuidV4(),
  };
}

/**
 * 字符串转换成浮点数
 * 
 * @export
 * @param {string} data 待转换的数字
 * @param {number} [digit=2] 小数位数
 * @returns {number} 
 */
export function convertFloat(data: string, digit: number = 2): number {
  try {
    return parseFloat(parseFloat(data).toFixed(digit));
  } catch (error) {
    return 0;
  }
}
