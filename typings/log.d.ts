// 记录日志接口
interface Ilog {
  info(...logStrs: string[]): void;
  error(err: Error | string): void;
}
