/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {testInstance, testAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<testInstance, testAttribute>('test', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		a: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'a'
		},
		b: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'b'
		},
		c: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '111',
			field: 'c'
		}
	}, {
		tableName: 'test',
		timestamps: false
	});
};
