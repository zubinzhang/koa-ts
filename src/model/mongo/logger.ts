/*
 * Created by Zubin on 2017-11-03 14:20:45
 */
import { Document, Schema } from 'mongoose';

export interface IUserInfo extends Document {
  userId: number;
  userName: string;
  group: number;
}

export interface IUserInfoAttrbute extends IUserInfo, Document { }

export const UserInfoSchema = new Schema({
  userId: Number,
  userName: String,
  group: Number,
});
