/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {doeworksInstance, doeworksAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<doeworksInstance, doeworksAttribute>('doeworks', {
		doWorkId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'doWorkId'
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
		packageId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'packageId'
		},
		cId: {
			type: DataTypes.STRING(32),
			allowNull: false,
			field: 'cId'
		},
		moduleId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'moduleId'
		},
		versionId: {
			type: DataTypes.STRING(20),
			allowNull: false,
			field: 'versionId'
		},
		resourceName: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: '',
			field: 'resourceName'
		},
		parentVersionId: {
			type: DataTypes.STRING(20),
			allowNull: false,
			field: 'parentVersionId'
		},
		resourceType: {
			type: DataTypes.STRING(40),
			allowNull: false,
			field: 'resourceType'
		},
		submitDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'submitDate'
		},
		doWorkPackageUrl: {
			type: DataTypes.STRING(128),
			allowNull: false,
			field: 'doWorkPackageUrl'
		},
		workId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'workId'
		},
		contentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'contentId'
		},
		workScore: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'workScore'
		},
		actualScore: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'actualScore'
		},
		workLong: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'workLong'
		},
		comment: {
			type: DataTypes.STRING(300),
			allowNull: false,
			field: 'comment'
		},
		commentType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'commentType'
		},
		workStatus: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'workStatus'
		},
		classId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			defaultValue: '0',
			field: 'classId'
		},
		delStatus: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'delStatus'
		},
		codeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'codeId'
		},
		insteadUserId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'insteadUserId'
		},
		insteadUserName: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: '',
			field: 'insteadUserName'
		},
		submitCount: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'submitCount'
		},
		logInfo: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: '',
			field: 'logInfo'
		},
		sourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'sourceType'
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
			defaultValue: '0',
			field: 'workType'
		},
		likeCount: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'likeCount'
		}
	}, {
		tableName: 'doeworks',
		timestamps: false
	});
};
