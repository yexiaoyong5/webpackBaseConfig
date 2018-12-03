export default{
  sysName:"资源名称",
  sysIp:"资源IP",
  sysPort:"资源端口",
  sysType:"资源类型",
  sysCode:"资源编码",
  manufacturer:"设备厂商",
  buildTime:"创建时间",
  buildPerson:"创建人",
  treatyType:"通信协议",
  system:"源系统",
  sysArr:"资源序列号",
  sysLogName:"资源登录名",
  sysLogPsd:"资源登录密码",
  AssociatedEqp:"关联设备",
  sysDec:"资源描述",
  extendedAtt :"扩展属性",
  ipTunnel :"IP通道数",
  talkTunnel :"对讲通道数",
  mnTunnel :"模拟通道数",
  version :"版本号",
  diskNum :"硬盘数",
  mainResolution:"主码流分辨率",
  subResolution:"子码流分辨率",
  mainStreamType:"主码流类型",
  subStreamType:"子码流类型",
  ptz:"云台支持",
  channelNo:"通道号",
  channelNum:"通道数",
  inChannel:"输入IO通道数",
  outChannel:"输出IO通道数",
  decodeType:"解码器类型",
  addBinding:"添加资源绑定",
  cancelBinding:"取消资源绑定",
  state:"状态告警",
  aPerformance:"性能告警",
  target:"指标",
  grade:"告警等级",
  gradeAlert:"提醒",
  gradeAlarm:"警告",
  gradePrimary:"主要",
  gradeSecond:"次要",
  gradeSerious:"严重", 
  configName:"配置名称",
  ldWay:"联动方式",
  message:"短信",
  email:"邮件",
  alarmCnt:"告警内容",
  alarmDes:"告警描述",
  acceptUser:"接收用户",
  apartTree:"部门树",
  userList:"用户列表",
  ldTime:"联动时间",
  aRange:"区间",
  aRangeAll:"全开区间(最小,最大)",
  aRangeLeft:"左开右闭区间(最小,最大]",
  aRangeRight:"左闭右开区间[最小,最大)",
  aRangeBoth:"全闭区间[最小,最大]",
  authority:"门限设置",
  triggerNum:"触发门限数",
  recoveryNum:"恢复门限数",
  subList:"下级平台列表",
  subRoot:"下级平台根节点",
  platformName:"平台名称",
  platformCon:"平台上下文",
  pullData:"拉取级联数据",
  jlType:"级联类型",
  useNtp:"启用ntp设置",
  allowRange:"可允许设备时差范围(秒)",
  clockIp:"时钟源服务器Ip",
  clockPort:"时钟源服务器端口",
  autoTiming:"系统自动校时",
  autoTime:"自动校时时间",
  buildData:"生成全量数据",
  patrolIntime:"实时巡检",
  mainRateType:"主码流码率",
  subRateType:"子码流码率",
  mainIInterval:"主码流帧率",      
  subIInterval:"子码流帧率",     
  determineOrg:"目标区域",  
  video:{     
    patrolDays:"巡检天数（单位：天）",
    singleUnnormalTime:"单次异常时长（单位：秒）",
    totalUnnormalTime:"累计异常时长（单位：秒）",
    totalUnnormalCount:"累计异常次数（单位：次数）"
  },
  storageType:"存储设备类型",
  transportType:"传输协议", 
  cancelSingleBinding:"确定取消该资源与所属区域的绑定关系吗？", 
  cancelMultipleBinding:"确定取消所选资源与所属区域的绑定关系吗？",
  psdExplain:{
    rang0:"* 等级0（风险密码）：密码长度小于8位，或者只包含4类字符中的任意一类，或者密码与用户名一样，或者密码是用户名的倒写。 ", 
      rang1:"* 等级1（弱密码）：包含两类字符，且组合为（数字+小写字母）或（数字+大写字母），且长度大于等于8位。 ",
      rang2:"* 等级2（中密码）：包含两类字符，且组合不能为（数字+小写字母）和（数字+大写字母），且长度大于等于8位。",
      rang3:"* 等级3（强密码）：包含三类字符及以上，且长度大于等于8位。"
  },
  subNode:{
    ptIp: "平台IP",
    ptPort: "平台端口",
    ptProtocol: "平台协议",
    subIp: "下级网关IP"
  }
}