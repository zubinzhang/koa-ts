// import { Context } from 'koa';
// 定义api返回结构
interface IResData<T> {
  ret: number;
  errcode: number;
  msg?: string;
  data?: T;
  uuid: string;
}

interface ILogOption {
  name: string;
  streams: Array<any>;
}
