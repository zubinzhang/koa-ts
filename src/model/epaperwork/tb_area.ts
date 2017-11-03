/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {tbAreaInstance, tbAreaAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<tbAreaInstance, tbAreaAttribute>('tbArea', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'Id'
		},
		prov: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'prov'
		},
		city: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'city'
		},
		cist: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'cist'
		},
		dateTime: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'dateTime'
		},
		state: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'state'
		}
	}, {
		tableName: 'tb_area',
		timestamps: false
	});
};
