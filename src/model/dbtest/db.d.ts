// tslint:disable
import * as Sequelize from 'sequelize';


// table: dbold
export interface dboldAttribute {
	dbname?:string;
}
export interface dboldInstance extends Sequelize.Instance<dboldAttribute>, dboldAttribute { }
export interface dboldModel extends Sequelize.Model<dboldInstance, dboldAttribute> { }

// table: dbnew
export interface dbnewAttribute {
	dbname?:string;
}
export interface dbnewInstance extends Sequelize.Instance<dbnewAttribute>, dbnewAttribute { }
export interface dbnewModel extends Sequelize.Model<dbnewInstance, dbnewAttribute> { }

// table: test
export interface testAttribute {
	id:number;
	a?:string;
	b?:string;
	c?:string;
}
export interface testInstance extends Sequelize.Instance<testAttribute>, testAttribute { }
export interface testModel extends Sequelize.Model<testInstance, testAttribute> { }
