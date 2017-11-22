/*
 * Created by Zubin on 2017-11-03 12:00:10
 */

import * as Redis from 'cw-redis';

import config from '../config';

export const redis = Redis.init(config.redis);
