/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {worksessionInstance, worksessionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<worksessionInstance, worksessionAttribute>('worksession', {
		sessionId: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true,
			field: 'sessionId'
		},
		workId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'workId'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'userId'
		},
		classId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'classId'
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
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'resourceName'
		},
		resourceType: {
			type: DataTypes.STRING(40),
			allowNull: false,
			field: 'resourceType'
		},
		clientId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'clientId'
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
		createDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'createDate'
		},
		completeDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'completeDate'
		},
		modiflyDate: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'modiflyDate'
		},
		pushStatus: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'pushStatus'
		},
		doWorkId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'doWorkId'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'status'
		}
	}, {
		tableName: 'worksession',
		timestamps: false
	});
};
