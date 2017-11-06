/*
 * Created by Zubin on 2017-11-06 09:35:01
 */

/**
 * 定义参数校验接口
 */
interface IValidator {
  required(): IValidator;
  defaultTo(val: any): IValidator;
  isNumber(): IValidator;
  isString(): IValidator;
  isArray(fn?: (vail: ICheckJson) => void): IValidator;
  isObject(fn?: (vail: ICheckJson) => void): IValidator;
  isUUId(version?: 3 | 4 | 5 | "3" | "4" | "5" | "all"): IValidator;
  // isTimestramp(): IValidator;
  toString(): IValidator;
  toInt(): IValidator;
  toFloat(digit: number): IValidator;
  eq(data: number | string): IValidator;
  ne(data: number | string): IValidator;
  gt(data: number): IValidator;
  gte(data: number): IValidator;
  lt(data: number): IValidator;
  lte(data: number): IValidator;
}

interface ICheckJson {
  check(key: string): IValidator;
}
