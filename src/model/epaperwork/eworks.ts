/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {eworksInstance, eworksAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<eworksInstance, eworksAttribute>('eworks', {
		workId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'workId'
		},
		workName: {
			type: DataTypes.STRING(128),
			allowNull: false,
			field: 'workName'
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
		brandId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'brandId'
		},
		workType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'workType'
		},
		batchId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'batchId'
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
		workMessage: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: '',
			field: 'workMessage'
		},
		workMessageType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'workMessageType'
		},
		totalNum: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'totalNum'
		},
		subjectId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'subjectId'
		},
		schoolId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'schoolId'
		},
		schoolName: {
			type: DataTypes.STRING(128),
			allowNull: true,
			defaultValue: '',
			field: 'schoolName'
		},
		areaCode: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: '',
			field: 'areaCode'
		},
		sourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'sourceType'
		},
		classId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'classId'
		},
		tags: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: '',
			field: 'tags'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'status'
		}
	}, {
		tableName: 'eworks',
		timestamps: false
	});
};
