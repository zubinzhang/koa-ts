// import { Context } from 'koa';
// 定义api返回结构
interface ResData<T> {
  ret: number;
  errcode: number;
  msg?: string;
  data?: T;
  uuid: string;
}

interface LogOption {
  name: string;
  streams: Array<any>;
}
