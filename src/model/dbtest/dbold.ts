/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {dboldInstance, dboldAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<dboldInstance, dboldAttribute>('dbold', {
		dbname: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'dbname'
		}
	}, {
		tableName: 'dbold',
		timestamps: false
	});
};
