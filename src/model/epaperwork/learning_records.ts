/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {learningRecordsInstance, learningRecordsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<learningRecordsInstance, learningRecordsAttribute>('learningRecords', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		brandId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'brandId'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'userId'
		},
		paperid: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'paperid'
		},
		paperVersion: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'paperVersion'
		},
		quesId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'quesId'
		},
		quesVersion: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'quesVersion'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'createdAt'
		}
	}, {
		tableName: 'learning_records',
		timestamps: false
	});
};
