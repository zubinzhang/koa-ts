/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {dataAppFlowInstance, dataAppFlowAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<dataAppFlowInstance, dataAppFlowAttribute>('dataAppFlow', {
		flowId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			field: 'flowId'
		},
		flowType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'flowType'
		},
		dataValue: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'dataValue'
		},
		useTime: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'useTime'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'userId'
		},
		sourceUrl: {
			type: DataTypes.STRING(128),
			allowNull: false,
			field: 'sourceUrl'
		},
		clientId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'clientId'
		},
		sourceIp: {
			type: DataTypes.STRING(64),
			allowNull: false,
			field: 'sourceIp'
		},
		remark: {
			type: DataTypes.STRING(250),
			allowNull: false,
			field: 'remark'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'createDate'
		},
		dataFormat: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'dataFormat'
		}
	}, {
		tableName: 'data_app_flow',
		timestamps: false
	});
};
