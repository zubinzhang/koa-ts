// tslint:disable
import * as Sequelize from 'sequelize';


// table: userinfo
export interface userinfoAttribute {
	id:number;
	userId:number;
	userName:string;
}
export interface userinfoInstance extends Sequelize.Instance<userinfoAttribute>, userinfoAttribute { }
export interface userinfoModel extends Sequelize.Model<userinfoInstance, userinfoAttribute> { }
