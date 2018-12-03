export default{
	checking:"正在检测中...",
	complete:"全部项目检查完毕",
	cancel:"取消一键运维",
	reCheck:"重新检查",
	result:"检查结果",
	camera:"监控点巡检数",
	encode:"编码设备巡检数",
	store:"存储设备巡检数",
	decode:"解码设备巡检数",
	vqd:"视频诊断数",
	vqdService:"视频服务巡检数",
	video:"录像巡检数",
	totalExpItem:"共检测 {num} 项,发现异常项目 : {unnormal}项,正常项目 : {normal}项",
	totalExpLi:"共检测{num}例,离线:{offline}例,在线:{online}例",
	total:"共检测",
	abnormal:"发现异常项目",
	normal:"正常项目",
	item:"项",
	itemli:"例",
	score:"得分",
	totalScore:"得分为以下6项得分的总分： ",
	cameraFomate: "监控点状态得分  = 在线数/巡检总数*20",
	decodeFomate: "解码设备状态得分  = 在线数/巡检总数*10",
	encodeFomate: "编码设备状态得分   = 在线数/巡检总数*20",
	saveFomate: "存储设备状态得分  = 在线数/巡检总数*10",
	videoFomate: "录像巡检状态得分   =  录像完整数/巡检总数*20",
	recordFomate: "视频诊断状态得分 = 图像正常数/巡检总数*20",
	unNormal1: "异常",
	normal1: "正常",
	cameraStatus: "监控点状态",
	encodeStatus: "编码设备状态",
	decodeStatus: "解码设备状态",
	saveStatus: "存储设备状态",
	videoStatus: "录像巡检状态",
	recordStatus: "视频诊断状态",
	allExport: "全部导出",
	confirmExport:"确定导出当前查询结果中所有异常(离线)(共{num}条){info}信息?",
	exportAllConfirm:'确认导出当前查询结果中4项检查结果吗?',
	exportResult: "导出结果",   //add
	areaOrder: "区域计分排名",
	totalScore1: "总体分数",
	totalSum: "总体得分",
	asc: "升序",
	desc: "降序",
	score1: "分",
	scoreBasic: "基础分",
	cameras:{
		name: "监控点",
		status: "监控点状态",
		rate: "监控点在线率"
	},
	videos:{
		name: "录像巡检",
		status: "录像巡检状态",
		rate: "录像完整率"
	},
	records:{
		name: "视频诊断",
		status: "视频诊断状态",
		rate: "图像正常率"
	},
	streams:{
		name: "点播",
		status: "点播状态",
		rate: "点播成功率",
		time: "点播时间"
	}
}
