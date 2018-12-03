export default {
  area:{
    "month": "按月统计",
    "time": "按时间段",
    "score": "总分",
    "onlineRate": "监控点在线率",
    "onlineRate1": "监控点在线率",
    "onlineRate2": "监控点在线率丨天数",
    "videoRate": "图像正常率",
    "videoRate1": "图像正常率(%)",
    "videoRate2": "图像正常率丨次数",
    "vedioRate": "录像完整率",
    "vedioRate1": "录像完整率",//(%)
    "vedioRate2": "录像完整率丨天数",
    "vedioRate3": "点播成功率丨次数",                                          /////add
    "weightConfig": "权重配置",
    "formula1": "监控点在线率 = 在线时长 /（在线时长+离线时长）*100%",
    "formula3": "录像完整率 = 完整时长 /（完整时长+丢失时长）*100%",
    "formula2": "图像正常率 = 正常数 /（正常数+异常数+诊断失败数）*100%",
    "formula4": "点播成功率=点播正常数/（点播正常+点播异常） *100% ",
    "areaCheck": "区域运维统计",
    "tabTime": "制表时间",
    "sort": "排名",
    "total": "总数",
    "operation": "运行情况统计",
    "offlineTime": "离线时间(天)",
    "ruleFloat": "权重分配不支持小数",
    "ruleNull": "权重分配不能为空",
    "ruleSum": "权重和必须等于100",
    "collectTime":"统计时间",
    "areaTop10":"区域运维总分top10",
    "areaDetail":"区域运维统计明细"
  },
  flow:{
    "formula":"取流成功率 = 取流成功次数/取流总次数*100%",
    "flowCheck":"取流情况统计",
    "flowTop10":"取流成功率top10",
    "flowDetail":"取流情况统计明细",
    "iFrameDelay":"关键帧延迟(s)",
    "signalDelay":"信令延迟(s)",
    "streamdelay":"视频流延迟(s)",
    "flowTotal":"取流总次数",
    "flowCount":"取流成功次数",
    "flowRate":"取流成功率"
  },
  offline:{
    "offlineCheck":"离线时长统计"
  },
  offpoints:{
    "offpointTop10":"频繁离线点位数top10",
    "offCount":"断频次数",
    "offDetail":"频繁离线点位明细"
  },
  online:{
    "formula1":"在线率 = 在线数/ (在线数+离线数)*100% ",     //edit
    "formula2":"完整率 = 完整时长/（完整时长+丢失时长）",
    "formula3":"完好率 = 正常次数/（正常次数+异常次数）",
    "onlineTop10":"监控点在线率TOP10",                      //edit
    "onlineDetail":"监控点实时统计明细",                      //edit
    "total":"总数",
    "onlineCount":"在线数",
    "offlineCount":"离线数",
    "onlineUnknown":"未检测数（在线离线)",
    "bqUnknown":"未检测数（高清标清)", 
    "bqCount":"标清数",
    "gqCount":"高清数",
    "znCount":"智能数",
    "onlineRate":"在线率",
    "camerCheck":"监控点离线统计"
  },
  quality:{
    "qualityTop10":"图像正常率top10",
    "qualityDetail":"视频质量统计明细",
    "Intactrate":"图像正常率",
    "collecttime":"诊断时间",
    "cameraCount":"总数",
    "unconfigCount":"未配置数",
    "abnormalCount":"异常数",
    "normalCount":"正常数",
    "failCount":"诊断失败数",
    "formula":"图像正常率 = 正常数 /（正常数 + 异常数 + 诊断失败数）*100%",
    "abnormalCose": "异常原因",
    "currentTime": "制表时间："
  },
  video:{
    "formula":"录像完整率 = 录像完整时长/（录像完整时长+录像丢失时长）*100%",
    "searchRule": "至多同时选择5个区域",
    "videoTop10": "录像完整率top10",
    "videoDetail": "录像完整率统计明细",
    "videoCheck": "录像情况统计"
  },
  capterTime: "采集时间"
}