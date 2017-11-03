/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {tbPackageserviceInstance, tbPackageserviceAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<tbPackageserviceInstance, tbPackageserviceAttribute>('tbPackageservice', {
		id: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'Id'
		},
		packageId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'packageId'
		},
		serviceId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'serviceId'
		},
		state: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'state'
		},
		dateTime: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'dateTime'
		},
		doworkCount: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'doworkCount'
		}
	}, {
		tableName: 'tb_packageservice',
		timestamps: false
	});
};
