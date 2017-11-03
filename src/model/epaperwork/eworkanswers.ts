/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {eworkanswersInstance, eworkanswersAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<eworkanswersInstance, eworkanswersAttribute>('eworkanswers', {
		doWorkId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'doWorkId'
		},
		submitContent: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'submitContent'
		},
		correctContent: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'correctContent'
		},
		correctDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'correctDate'
		}
	}, {
		tableName: 'eworkanswers',
		timestamps: false
	});
};
