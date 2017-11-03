/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {eworkStatisticsInstance, eworkStatisticsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<eworkStatisticsInstance, eworkStatisticsAttribute>('eworkStatistics', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		month: {
			type: DataTypes.STRING(8),
			allowNull: false,
			field: 'month'
		},
		classId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'classId'
		},
		subjectId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'subjectId'
		},
		brandId: {
			type: DataTypes.STRING(32),
			allowNull: false,
			field: 'brandId'
		},
		schoolId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'schoolId'
		},
		schoolName: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: '',
			field: 'schoolName'
		},
		publishCount: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'publishCount'
		},
		receiveCount: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'receiveCount'
		},
		submitCount: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'submitCount'
		},
		finishRate: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'finishRate'
		},
		publishUserId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'publishUserId'
		},
		publishUserName: {
			type: DataTypes.STRING(128),
			allowNull: false,
			defaultValue: '',
			field: 'publishUserName'
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '1',
			field: 'status'
		}
	}, {
		tableName: 'ework_statistics',
		timestamps: false
	});
};
