/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {dbnewInstance, dbnewAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<dbnewInstance, dbnewAttribute>('dbnew', {
		dbname: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'dbname'
		}
	}, {
		tableName: 'dbnew',
		timestamps: false
	});
};
