/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {userinfoInstance, userinfoAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<userinfoInstance, userinfoAttribute>('userinfo', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'userId'
		},
		userName: {
			type: DataTypes.STRING(0),
			allowNull: false,
			field: 'userName'
		}
	}, {
		tableName: 'userinfo',
		timestamps: false
	});
};
