/*
 * Created by Zubin on 2017-11-16 18:30:44
 */
import * as Koa from 'koa';

import { CWErrors } from '../common/cw_error';

export function extend(app: Koa) {
  app.context.error = (msg, errCode, retCode) => {
    throw new CWErrors(msg, errCode, retCode);
  };
}
