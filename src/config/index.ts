/*
 * Created by Zubin on 2017-10-20 15:13:13
 */
import { IConfig } from '../../typings/config';

const packageJson = require('../../package.json');
const env = process.env.NODE_ENV || 'development';

const configEnv = require(`./config_${env}`); // 根据环境变量动态加载配置文件

const config: IConfig = configEnv.default || configEnv;

config.name = packageJson.name;
config.debug = env === 'development';
config.redis.keyPrefix = `${packageJson.name}:`;

export default config as IConfig;
