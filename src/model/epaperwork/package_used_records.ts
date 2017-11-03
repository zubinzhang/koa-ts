/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {packageUsedRecordsInstance, packageUsedRecordsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<packageUsedRecordsInstance, packageUsedRecordsAttribute>('packageUsedRecords', {
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
		packageId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'packageId'
		},
		serviceId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'serviceId'
		},
		brandId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'brandId'
		},
		createAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'createAt'
		},
		updateAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			field: 'updateAt'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'status'
		}
	}, {
		tableName: 'package_used_records',
		timestamps: false
	});
};
