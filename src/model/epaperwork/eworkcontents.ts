/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {eworkcontentsInstance, eworkcontentsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<eworkcontentsInstance, eworkcontentsAttribute>('eworkcontents', {
		contentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'contentId'
		},
		batchId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'batchId'
		},
		workId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'workId'
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
		parentVersionId: {
			type: DataTypes.STRING(20),
			allowNull: false,
			field: 'parentVersionId'
		},
		resourceName: {
			type: DataTypes.STRING(300),
			allowNull: false,
			field: 'resourceName'
		},
		resourceType: {
			type: DataTypes.STRING(40),
			allowNull: false,
			field: 'resourceType'
		},
		workScore: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00',
			field: 'workScore'
		},
		requirementContent: {
			type: DataTypes.STRING(500),
			allowNull: false,
			defaultValue: '',
			field: 'requirementContent'
		},
		checkedResource: {
			type: DataTypes.STRING(1500),
			allowNull: false,
			defaultValue: '',
			field: 'checkedResource'
		},
		refLong: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'refLong'
		},
		workTag: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '1',
			field: 'workTag'
		}
	}, {
		tableName: 'eworkcontents',
		timestamps: false
	});
};
