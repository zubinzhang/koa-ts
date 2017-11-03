/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {tbWrongQuestionInstance, tbWrongQuestionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<tbWrongQuestionInstance, tbWrongQuestionAttribute>('tbWrongQuestion', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'Id'
		},
		brandId: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0',
			field: 'brandId'
		},
		serviceId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'serviceId'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'userId'
		},
		userName: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'userName'
		},
		cId: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'cId'
		},
		doWorkId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'doWorkId'
		},
		subject: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'subject'
		},
		typeId: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			field: 'typeId'
		},
		packageId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'packageId'
		},
		moduleId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'moduleId'
		},
		versionId: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'versionId'
		},
		resourceName: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'resourceName'
		},
		createtime: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'createtime'
		},
		state: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			field: 'state'
		},
		examId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue: '0',
			field: 'examId'
		},
		classId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'classId'
		},
		qtypeId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0',
			field: 'qtypeId'
		},
		videoVersion: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'videoVersion'
		}
	}, {
		tableName: 'tb_wrong_question',
		timestamps: false
	});
};
