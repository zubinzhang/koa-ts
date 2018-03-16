/*
 * Created by Zubin on 2017-11-22 18:32:33
 */
import { testModel } from '../model';

export function find() {
  return testModel.userinfo.findAll({ raw: true });
}
