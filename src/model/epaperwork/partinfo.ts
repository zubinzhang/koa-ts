/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {partinfoInstance, partinfoAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<partinfoInstance, partinfoAttribute>('partinfo', {
		partId: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true,
			field: 'partId'
		},
		sessionId: {
			type: DataTypes.STRING(40),
			allowNull: false,
			field: 'sessionId'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'userId'
		},
		versionId: {
			type: DataTypes.STRING(40),
			allowNull: false,
			field: 'versionId'
		},
		parentVersionId: {
			type: DataTypes.STRING(40),
			allowNull: false,
			field: 'parentVersionId'
		},
		answerContent: {
			type: DataTypes.STRING(2000),
			allowNull: false,
			field: 'answerContent'
		},
		answerType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'answerType'
		},
		refAnswer: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'refAnswer'
		},
		refScore: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'refScore'
		},
		actualScore: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00',
			field: 'actualScore'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'createDate'
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
			defaultValue: '0',
			field: 'pushStatus'
		},
		fileStatus: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'fileStatus'
		},
		correctScore: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'correctScore'
		},
		errorText: {
			type: DataTypes.STRING(500),
			allowNull: false,
			defaultValue: '',
			field: 'errorText'
		},
		correctCount: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'correctCount'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'status'
		},
		fileName: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'fileName'
		}
	}, {
		tableName: 'partinfo',
		timestamps: false
	});
};
