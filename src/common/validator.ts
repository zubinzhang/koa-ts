/*
 * Created by Zubin on 2017-11-06 09:52:09
 */

import * as _ from 'lodash';
import * as validator from 'validator';

/**
 * 参数校验错误
 */
export class ValidationError extends Error implements IError {
  retCode: number;
  errCode: number;
  key: string;
  constructor(key: string, message: string) {
    super(message);
    this.name = 'ValidationError';
    this.message = message;
    this.key = key;
  }
}

/**
 * 参数校验类
 */
export default class Validator implements IValidator {
  val: any; // 参数的值 val=vals[key]
  key: string; // 参数的key
  vals: object; // ctx.vals
  name: string;

  constructor(vals: object, key: string, name?: string = '') {
    this.val = vals[key];
    this.key = key;
    this.vals = vals;
    this.name = name;
  }

  /**
   * 必填
   * 
   * @returns {IValidator} 
   * @memberof Validator
   */
  required(): IValidator {
    if (isEmpty(this.val)) {
      throw new ValidationError(this.key, `${this.name}${this.key} is required!!!`);
    }

    return this;
  }

  /**
   * 默认值
   * 
   * @param {*} val 
   * @returns {IValidator} 
   * @memberof Validator
   */
  defaultTo(val: any): IValidator {
    this.vals[this.key] = isEmpty(this.val) ? val : this.val;
    this.val = this.vals[this.key];
    return this;
  }

  /**
   * 是否数值类型
   * 
   * @returns {IValidator} 
   * @memberof Validator
   */
  isNumber(): IValidator {
    if (!_.isNumber(this.val)) {
      throw new ValidationError(this.key, `${this.name}${this.key} must a number`);
    }
    return this;
  }

  /**
   * 是否字符串类型
   * 
   * @returns {IValidator} 
   * @memberof Validator
   */
  isString(): IValidator {
    if (!_.isString(this.val)) {
      throw new ValidationError(this.key, `${this.name}${this.key} must a string`);
    }
    return this;
  }

  /**
   * 是否数组
   * 
   * @returns {IValidator} 
   * @memberof Validator
   */
  isArray(fn?: (vail: ICheckJson) => void): IValidator {
    if (!_.isArray(this.val)) {
      throw new ValidationError(this.key, `${this.name}${this.key} must a array`);
    }
    if (fn) {
      this.val.filter(item => _.isObject(item)).forEach((item, i) => {
        fn(new CheckJson(item, `${this.key}[${i}].`));
      });
    }
    return this;
  }

  /**
   * 是否object类型
   * 
   * @returns {IValidator} 
   * @memberof Validator
   */
  isObject(fn?: (vail: ICheckJson) => void): IValidator {
    if (_.isArray(this.val) || !_.isObject(this.val)) {
      throw new ValidationError(this.key, `${this.name}${this.key} must a object`);
    }
    if (fn) {
      fn(new CheckJson(this.val, `${this.key}.`));
    }
    return this;
  }

  /**
   * 是否uuid
   * 
   * @param {(3 | 4 | 5 | '3' | '4' | '5' | 'all')} [version] uuid版本
   * @returns {IValidator} 
   * @memberof Validator
   */
  isUUId(version?: 3 | 4 | 5 | '3' | '4' | '5' | 'all'): IValidator {
    if (!validator.isUUID(this.val.toString(), version)) {
      throw new ValidationError(this.key, `${this.name}${this.key} must a uuid`);
    }
    return this;
  }

  /**
   * val转换成字符串
   * 
   * @returns {IValidator} 
   * @memberof Validator
   */
  toString(): IValidator {
    try {
      this.val = this.val.toString();
    } catch (err) {
      throw new ValidationError(this.key, err.message);
    }
    return this;
  }

  /**
   * val转换成整形
   * 
   * @returns {IValidator} 
   * @memberof Validator
   */
  toInt(): IValidator {
    try {
      this.val = parseInt(this.val, 10);
    } catch (err) {
      throw new ValidationError(this.key, err.message);
    }
    return this;
  }

  /**
   * val转换成浮点型
   * 
   * @param {number} [digit=2] 小数位数，默认为2
   * @returns {IValidator} 
   * @memberof Validator
   */
  toFloat(digit: number = 2): IValidator {
    try {
      this.val = parseFloat(parseFloat(this.val).toFixed(2));
    } catch (err) {
      throw new ValidationError(this.key, err.message);
    }
    return this;
  }

  /**
   * 是否相等
   * 
   * @param {(string | number)} data 比较的值
   * @returns {IValidator} 
   * @memberof Validator
   */
  eq(data: string | number): IValidator {
    if (!_.eq(this.val, data)) {
      throw new ValidationError(this.key, `${this.name}${this.key} must eq ${data}`);
    }
    return this;
  }

  /**
   * 是否不相等
   * 
   * @param {(string | number)} data 比较的值
   * @returns {IValidator} 
   * @memberof Validator
   */
  ne(data: string | number): IValidator {
    if (this.val === data) {
      throw new ValidationError(this.key, `${this.name}${this.key} must ne ${data}`);
    }
    return this;
  }

  /**
   * 是否大于
   * 
   * @param {number} data 比较的值
   * @returns {IValidator} 
   * @memberof Validator
   */
  gt(data: number): IValidator {
    if (this.val <= data) {
      throw new ValidationError(this.key, `${this.name}${this.key} must > ${data}`);
    }
    return this;
  }

  /**
   * 是否大于或等于
   * 
   * @param {number} data 比较的值
   * @returns {IValidator} 
   * @memberof Validator
   */
  gte(data: number): IValidator {
    if (this.val < data) {
      throw new ValidationError(this.key, `${this.name}${this.key} must >= ${data}`);
    }
    return this;
  }

  /**
   * 是否小于
   * 
   * @param {number} data 对比的值
   * @returns {IValidator} 
   * @memberof Validator
   */
  lt(data: number): IValidator {
    if (this.val >= data) {
      throw new ValidationError(this.key, `${this.name}${this.key} must < ${data}`);
    }
    return this;
  }

  /**
   * 是否小于或等于
   * 
   * @param {number} data 对比的值
   * @returns {IValidator} 
   * @memberof Validator
   */
  lte(data: number): IValidator {
    if (this.val < data) {
      throw new ValidationError(this.key, `${this.name}${this.key} must >= ${data}`);
    }
    return this;
  }
}
/**
 * 判断是否空值或者空对象空数据
 * 
 * @export
 * @param {*} val 
 * @returns 
 */
export function isEmpty(val: any) {
  if (val === null || val === undefined) {
    return true;
  }
  if (_.isString(val) && val.trim() === '') {
    return true;
  }
  if (_.isArray(val) && val.length === 0) {
    return true;
  }
  if (_.isObject(val) && _.keys(val).length === 0) {
    return true;
  }
  return false;
}

/**
 * 验证json数据
 */
export class CheckJson implements ICheckJson {
  vals: object;
  name: string;

  constructor(data: object, name: string = '') {
    this.vals = data;
    this.name = name;
  }
  check(key: string): IValidator {
    return new Validator(this.vals, key, this.name);
  }
}
