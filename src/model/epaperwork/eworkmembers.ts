/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {eworkmembersInstance, eworkmembersAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<eworkmembersInstance, eworkmembersAttribute>('eworkmembers', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		workId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'workId'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'userId'
		},
		userName: {
			type: DataTypes.STRING(128),
			allowNull: false,
			field: 'userName'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'status'
		},
		isRead: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'isRead'
		}
	}, {
		tableName: 'eworkmembers',
		timestamps: false
	});
};
