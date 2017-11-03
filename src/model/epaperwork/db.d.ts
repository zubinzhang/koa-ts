// tslint:disable
import * as Sequelize from 'sequelize';


// table: dataAppFlow
export interface dataAppFlowAttribute {
	flowId:number;
	flowType:number;
	dataValue:string;
	useTime:number;
	userId:number;
	sourceUrl:string;
	clientId:number;
	sourceIp:string;
	remark:string;
	createDate:Date;
	dataFormat:number;
}
export interface dataAppFlowInstance extends Sequelize.Instance<dataAppFlowAttribute>, dataAppFlowAttribute { }
export interface dataAppFlowModel extends Sequelize.Model<dataAppFlowInstance, dataAppFlowAttribute> { }

// table: doeworks
export interface doeworksAttribute {
	doWorkId:number;
	userId:number;
	userName:string;
	packageId:number;
	cId:string;
	moduleId:number;
	versionId:string;
	resourceName?:string;
	parentVersionId:string;
	resourceType:string;
	submitDate:Date;
	doWorkPackageUrl:string;
	workId:number;
	contentId:number;
	workScore:number;
	actualScore:number;
	workLong:number;
	comment:string;
	commentType:number;
	workStatus:number;
	classId:number;
	delStatus:number;
	codeId:number;
	insteadUserId:number;
	insteadUserName:string;
	submitCount:number;
	logInfo:string;
	sourceType:number;
	brandId:number;
	workType:number;
	likeCount:number;
}
export interface doeworksInstance extends Sequelize.Instance<doeworksAttribute>, doeworksAttribute { }
export interface doeworksModel extends Sequelize.Model<doeworksInstance, doeworksAttribute> { }

// table: eworkStatistics
export interface eworkStatisticsAttribute {
	id:number;
	month:string;
	classId:number;
	subjectId:number;
	brandId:string;
	schoolId:number;
	schoolName:string;
	publishCount:number;
	receiveCount:number;
	submitCount:number;
	finishRate:number;
	publishUserId:number;
	publishUserName:string;
	status:number;
}
export interface eworkStatisticsInstance extends Sequelize.Instance<eworkStatisticsAttribute>, eworkStatisticsAttribute { }
export interface eworkStatisticsModel extends Sequelize.Model<eworkStatisticsInstance, eworkStatisticsAttribute> { }

// table: eworkanswers
export interface eworkanswersAttribute {
	doWorkId:number;
	submitContent:string;
	correctContent?:string;
	correctDate?:Date;
}
export interface eworkanswersInstance extends Sequelize.Instance<eworkanswersAttribute>, eworkanswersAttribute { }
export interface eworkanswersModel extends Sequelize.Model<eworkanswersInstance, eworkanswersAttribute> { }

// table: eworkanswerdetails
export interface eworkanswerdetailsAttribute {
	id:number;
	doworkId:number;
	workId:number;
	contentId:number;
	versionId:string;
	assess:number;
	score:number;
	answerContent:string;
}
export interface eworkanswerdetailsInstance extends Sequelize.Instance<eworkanswerdetailsAttribute>, eworkanswerdetailsAttribute { }
export interface eworkanswerdetailsModel extends Sequelize.Model<eworkanswerdetailsInstance, eworkanswerdetailsAttribute> { }

// table: eworkcontents
export interface eworkcontentsAttribute {
	contentId:number;
	batchId:number;
	workId:number;
	packageId:number;
	cId:string;
	moduleId:number;
	versionId:string;
	parentVersionId:string;
	resourceName:string;
	resourceType:string;
	workScore:number;
	requirementContent:string;
	checkedResource:string;
	refLong:number;
	workTag:number;
}
export interface eworkcontentsInstance extends Sequelize.Instance<eworkcontentsAttribute>, eworkcontentsAttribute { }
export interface eworkcontentsModel extends Sequelize.Model<eworkcontentsInstance, eworkcontentsAttribute> { }

// table: eworkmembers
export interface eworkmembersAttribute {
	id:number;
	workId:number;
	userId:number;
	userName:string;
	status:number;
	isRead:number;
}
export interface eworkmembersInstance extends Sequelize.Instance<eworkmembersAttribute>, eworkmembersAttribute { }
export interface eworkmembersModel extends Sequelize.Model<eworkmembersInstance, eworkmembersAttribute> { }

// table: learningRecords
export interface learningRecordsAttribute {
	id:number;
	brandId?:number;
	userId?:number;
	paperid?:number;
	paperVersion?:number;
	quesId?:number;
	quesVersion?:number;
	createdAt?:Date;
}
export interface learningRecordsInstance extends Sequelize.Instance<learningRecordsAttribute>, learningRecordsAttribute { }
export interface learningRecordsModel extends Sequelize.Model<learningRecordsInstance, learningRecordsAttribute> { }

// table: eworks
export interface eworksAttribute {
	workId:number;
	workName:string;
	publishUserId:number;
	publishUserName:string;
	brandId:number;
	workType:number;
	batchId:number;
	publishDate:Date;
	sendDate:Date;
	effectiveDate:Date;
	workMessage:string;
	workMessageType:number;
	totalNum:number;
	subjectId:number;
	schoolId:number;
	schoolName?:string;
	areaCode?:string;
	sourceType:number;
	classId:number;
	tags:string;
	status:number;
}
export interface eworksInstance extends Sequelize.Instance<eworksAttribute>, eworksAttribute { }
export interface eworksModel extends Sequelize.Model<eworksInstance, eworksAttribute> { }

// table: likerecord
export interface likerecordAttribute {
	id:number;
	doWorkId:number;
	contentId:number;
	userId:number;
	userName:string;
	status:number;
}
export interface likerecordInstance extends Sequelize.Instance<likerecordAttribute>, likerecordAttribute { }
export interface likerecordModel extends Sequelize.Model<likerecordInstance, likerecordAttribute> { }

// table: partinfo
export interface partinfoAttribute {
	partId:string;
	sessionId:string;
	userId:number;
	versionId:string;
	parentVersionId:string;
	answerContent:string;
	answerType:number;
	refAnswer:string;
	refScore:number;
	actualScore:number;
	createDate:Date;
	modiflyDate:Date;
	pushStatus:number;
	fileStatus:number;
	correctScore:number;
	errorText:string;
	correctCount:number;
	status:number;
	fileName:string;
}
export interface partinfoInstance extends Sequelize.Instance<partinfoAttribute>, partinfoAttribute { }
export interface partinfoModel extends Sequelize.Model<partinfoInstance, partinfoAttribute> { }

// table: packageUsedRecords
export interface packageUsedRecordsAttribute {
	id:number;
	userId:number;
	packageId:number;
	serviceId:number;
	brandId:number;
	createAt:Date;
	updateAt:Date;
	status:number;
}
export interface packageUsedRecordsInstance extends Sequelize.Instance<packageUsedRecordsAttribute>, packageUsedRecordsAttribute { }
export interface packageUsedRecordsModel extends Sequelize.Model<packageUsedRecordsInstance, packageUsedRecordsAttribute> { }

// table: tbArea
export interface tbAreaAttribute {
	id:number;
	prov?:string;
	city?:string;
	cist?:string;
	dateTime?:Date;
	state?:number;
}
export interface tbAreaInstance extends Sequelize.Instance<tbAreaAttribute>, tbAreaAttribute { }
export interface tbAreaModel extends Sequelize.Model<tbAreaInstance, tbAreaAttribute> { }

// table: tbPackageservice
export interface tbPackageserviceAttribute {
	id:number;
	packageId?:number;
	serviceId?:number;
	state?:number;
	dateTime?:Date;
	doworkCount?:number;
}
export interface tbPackageserviceInstance extends Sequelize.Instance<tbPackageserviceAttribute>, tbPackageserviceAttribute { }
export interface tbPackageserviceModel extends Sequelize.Model<tbPackageserviceInstance, tbPackageserviceAttribute> { }

// table: workbatch
export interface workbatchAttribute {
	batchId:number;
	workName:string;
	brandId:number;
	workType:number;
	publishUserId:number;
	publishUserName:string;
	publishDate:Date;
	sendDate:Date;
	effectiveDate:Date;
	workCount:number;
	pushStatus:number;
	status:number;
	bookId:number;
	bookName:string;
}
export interface workbatchInstance extends Sequelize.Instance<workbatchAttribute>, workbatchAttribute { }
export interface workbatchModel extends Sequelize.Model<workbatchInstance, workbatchAttribute> { }

// table: tbStatistic
export interface tbStatisticAttribute {
	id:number;
	userId:number;
	schoolId?:number;
	schoolName?:string;
	prov?:string;
	city?:string;
	dist?:string;
	brand?:number;
	terminal?:number;
	userIp?:string;
	accessTimes?:number;
	scanNumber?:number;
	dateTime:Date;
}
export interface tbStatisticInstance extends Sequelize.Instance<tbStatisticAttribute>, tbStatisticAttribute { }
export interface tbStatisticModel extends Sequelize.Model<tbStatisticInstance, tbStatisticAttribute> { }

// table: tbWrongQuestion
export interface tbWrongQuestionAttribute {
	id:number;
	brandId:number;
	serviceId?:number;
	userId?:number;
	userName?:string;
	cId?:string;
	doWorkId?:number;
	subject?:number;
	typeId?:number;
	packageId?:number;
	moduleId?:number;
	versionId?:string;
	resourceName?:string;
	createtime?:Date;
	state?:number;
	examId?:number;
	classId?:number;
	qtypeId?:number;
	videoVersion?:string;
}
export interface tbWrongQuestionInstance extends Sequelize.Instance<tbWrongQuestionAttribute>, tbWrongQuestionAttribute { }
export interface tbWrongQuestionModel extends Sequelize.Model<tbWrongQuestionInstance, tbWrongQuestionAttribute> { }

// table: worksession
export interface worksessionAttribute {
	sessionId:string;
	workId:number;
	userId:number;
	classId:number;
	packageId:number;
	cId:string;
	moduleId:number;
	versionId:string;
	parentVersionId:string;
	resourceName:string;
	resourceType:string;
	clientId:number;
	brandId:number;
	workType:number;
	createDate:Date;
	completeDate:Date;
	modiflyDate:Date;
	pushStatus:number;
	doWorkId:number;
	status:number;
}
export interface worksessionInstance extends Sequelize.Instance<worksessionAttribute>, worksessionAttribute { }
export interface worksessionModel extends Sequelize.Model<worksessionInstance, worksessionAttribute> { }
