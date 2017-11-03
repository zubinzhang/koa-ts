/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {eworkanswerdetailsInstance, eworkanswerdetailsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<eworkanswerdetailsInstance, eworkanswerdetailsAttribute>('eworkanswerdetails', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		doworkId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'doworkId'
		},
		workId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'workId'
		},
		contentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'contentId'
		},
		versionId: {
			type: DataTypes.STRING(40),
			allowNull: false,
			field: 'versionId'
		},
		assess: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'assess'
		},
		score: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'score'
		},
		answerContent: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'answerContent'
		}
	}, {
		tableName: 'eworkanswerdetails',
		timestamps: false
	});
};
