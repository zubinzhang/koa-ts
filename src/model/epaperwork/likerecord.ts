/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {likerecordInstance, likerecordAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<likerecordInstance, likerecordAttribute>('likerecord', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		doWorkId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'doWorkId'
		},
		contentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'contentId'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'userId'
		},
		userName: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '',
			field: 'userName'
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0',
			field: 'status'
		}
	}, {
		tableName: 'likerecord',
		timestamps: false
	});
};
