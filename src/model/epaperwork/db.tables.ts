// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
	dataAppFlow:def.dataAppFlowModel;
	doeworks:def.doeworksModel;
	eworkStatistics:def.eworkStatisticsModel;
	eworkanswers:def.eworkanswersModel;
	eworkanswerdetails:def.eworkanswerdetailsModel;
	eworkcontents:def.eworkcontentsModel;
	eworkmembers:def.eworkmembersModel;
	learningRecords:def.learningRecordsModel;
	eworks:def.eworksModel;
	likerecord:def.likerecordModel;
	partinfo:def.partinfoModel;
	packageUsedRecords:def.packageUsedRecordsModel;
	tbArea:def.tbAreaModel;
	tbPackageservice:def.tbPackageserviceModel;
	workbatch:def.workbatchModel;
	tbStatistic:def.tbStatisticModel;
	tbWrongQuestion:def.tbWrongQuestionModel;
	worksession:def.worksessionModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
	const tables:ITables = {
		dataAppFlow: seq.import(path.join(__dirname, './data_app_flow')),
		doeworks: seq.import(path.join(__dirname, './doeworks')),
		eworkStatistics: seq.import(path.join(__dirname, './ework_statistics')),
		eworkanswers: seq.import(path.join(__dirname, './eworkanswers')),
		eworkanswerdetails: seq.import(path.join(__dirname, './eworkanswerdetails')),
		eworkcontents: seq.import(path.join(__dirname, './eworkcontents')),
		eworkmembers: seq.import(path.join(__dirname, './eworkmembers')),
		learningRecords: seq.import(path.join(__dirname, './learning_records')),
		eworks: seq.import(path.join(__dirname, './eworks')),
		likerecord: seq.import(path.join(__dirname, './likerecord')),
		partinfo: seq.import(path.join(__dirname, './partinfo')),
		packageUsedRecords: seq.import(path.join(__dirname, './package_used_records')),
		tbArea: seq.import(path.join(__dirname, './tb_area')),
		tbPackageservice: seq.import(path.join(__dirname, './tb_packageservice')),
		workbatch: seq.import(path.join(__dirname, './workbatch')),
		tbStatistic: seq.import(path.join(__dirname, './tb_statistic')),
		tbWrongQuestion: seq.import(path.join(__dirname, './tb_wrong_question')),
		worksession: seq.import(path.join(__dirname, './worksession')),
	};
	return tables;
};
