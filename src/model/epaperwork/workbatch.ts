/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {workbatchInstance, workbatchAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<workbatchInstance, workbatchAttribute>('workbatch', {
		batchId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'batchId'
		},
		workName: {
			type: DataTypes.STRING(128),
			allowNull: false,
			field: 'workName'
		},
		brandId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'brandId'
		},
		workType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'workType'
		},
		publishUserId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'publishUserId'
		},
		publishUserName: {
			type: DataTypes.STRING(128),
			allowNull: false,
			field: 'publishUserName'
		},
		publishDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'publishDate'
		},
		sendDate: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '2000-01-01 00:00:01',
			field: 'sendDate'
		},
		effectiveDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'effectiveDate'
		},
		workCount: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'workCount'
		},
		pushStatus: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'pushStatus'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'status'
		},
		bookId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'bookId'
		},
		bookName: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '',
			field: 'bookName'
		}
	}, {
		tableName: 'workbatch',
		timestamps: false
	});
};
