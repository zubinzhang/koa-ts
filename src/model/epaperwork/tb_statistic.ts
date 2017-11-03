/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {tbStatisticInstance, tbStatisticAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<tbStatisticInstance, tbStatisticAttribute>('tbStatistic', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			field: 'UserID'
		},
		schoolId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'SchoolID'
		},
		schoolName: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'SchoolName'
		},
		prov: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'Prov'
		},
		city: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'City'
		},
		dist: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'Dist'
		},
		brand: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0',
			field: 'Brand'
		},
		terminal: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'Terminal'
		},
		userIp: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'UserIp'
		},
		accessTimes: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'AccessTimes'
		},
		scanNumber: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'ScanNumber'
		},
		dateTime: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00',
			primaryKey: true,
			field: 'DateTime'
		}
	}, {
		tableName: 'tb_statistic',
		timestamps: false
	});
};
