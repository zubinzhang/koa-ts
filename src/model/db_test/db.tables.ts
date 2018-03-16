// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
	userinfo:def.userinfoModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
	const tables:ITables = {
		userinfo: seq.import(path.join(__dirname, './userinfo')),
	};
	return tables;
};
