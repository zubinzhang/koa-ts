// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
	dbold:def.dboldModel;
	dbnew:def.dbnewModel;
	test:def.testModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
	const tables:ITables = {
		dbold: seq.import(path.join(__dirname, './dbold')),
		dbnew: seq.import(path.join(__dirname, './dbnew')),
		test: seq.import(path.join(__dirname, './test')),
	};
	return tables;
};
