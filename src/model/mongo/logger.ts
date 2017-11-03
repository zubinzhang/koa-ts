/*
 * Created by Zubin on 2017-11-03 14:20:45
 */
import { Document, Schema } from 'mongoose';

export interface ILogger extends Document {
  url: string;
  createAt: string;
  header: any;
  reqData: any;
  resData: any;
  name: string;
}

export const LoggerSchema = new Schema({
  url: String,
  createAt: String,
  header: Schema.Types.Mixed,
  reqData: Schema.Types.Mixed,
  resData: Schema.Types.Mixed,
  name: String,
});
