import { mongoModel } from '../model/index';

export function find(){
  return mongoModel.logger.findOne();
}
