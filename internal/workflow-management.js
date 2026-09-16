Page.projects = () => `
  <div class="wf-page">
    <div class="wf-head">
      <div><h1>项目管理</h1><p>记录客户长期合作项目，统一关联项目范围、负责人、需求、交付和关键过程。</p></div>
      <button class="wf-btn primary">+ 新建项目</button>
    </div>
    <section class="wf-filter-card">
      <div class="wf-filter-grid">
        <div class="wf-field wf-search-field"><label>搜索</label><div class="wf-search"><span>⌕</span><input placeholder="项目名称、客户名称、项目编号" /></div></div>
        ${wfSelect('所属客户',['全部客户','影石 Insta360','Keep','南航','世纪太华'])}
        ${wfSelect('项目状态',['全部状态','进行中','待启动','已暂停','已结束'])}
        ${wfSelect('负责人',['全部负责人','王小明','李小雨','张伟'])}
        <div class="wf-filter-actions"><button class="wf-btn">重置</button><button class="wf-btn primary">查询</button></div>
      </div>
    </section>
    <section class="wf-list-card">
      <div class="wf-list-top"><div><strong>合作项目</strong><span>共 24 个 · 进行中 11 个</span></div><span>按最近活动时间排序</span></div>
      <div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>项目</th><th>客户</th><th>合作场景</th><th>项目周期</th><th>进行中需求</th><th>累计交付</th><th>负责人</th><th>状态</th><th>最近活动</th><th>操作</th></tr></thead><tbody>
        ${wfProjectRow('PRJ-2024-0182','Insta360 内容音乐','影石 Insta360','运动相机 / UGC / 短视频','2024-06-01','长期','2','18 次 · 428 首','王小明','进行中','今天 16:42')}
        ${wfProjectRow('PRJ-2026-0046','影石无人机音乐','影石 Insta360','无人机 / 户外 / 旅行','2026-08-15','长期','1','3 次 · 24 首','王小明','进行中','今天 14:21')}
        ${wfProjectRow('PRJ-2025-0098','Keep 跑步课程音乐','Keep','运动健身 / 课程配乐','2025-03-01','2026-12-31','2','26 次 · 1,284 首','李小雨','进行中','昨天 18:03')}
        ${wfProjectRow('PRJ-2023-0031','南航机上娱乐音乐','南航','航空娱乐 / 音乐内容','2023-01-01','长期','1','42 次 · 3,816 首','张伟','进行中','昨天 11:47')}
      </tbody></table></div>
    </section>
  </div>`;

Page.projectDetail = () => `
  <div class="wf-page">
    <section class="wf-detail-hero">
      <div class="wf-detail-top"><div><div class="wf-back" data-route="projects">← 返回项目管理</div><div class="wf-detail-title"><h1>Insta360 内容音乐</h1><span class="wf-status ok">进行中</span></div><div class="wf-meta"><span>PRJ-2024-0182</span><span>客户：影石 Insta360</span><span>负责人：王小明</span><span>开始于 2024-06-01</span></div></div><div class="wf-actions"><button class="wf-btn">编辑项目</button><button class="wf-btn" data-route="requirement-detail">+ 新建需求</button><button class="wf-btn primary" data-route="delivery-detail">+ 创建交付</button></div></div>
      <div class="wf-kpis">${wfKpi('进行中需求','2','本月新增 3 条')}${wfKpi('累计交付','18 次','共 428 首')}${wfKpi('近 30 天试听','1,842 次','完成率 64%')}${wfKpi('当前项目曲库','182,381 首','跟随客户授权')}</div>
    </section>
    <div class="wf-tabs">${wfTab('project-overview','项目概览',true)}${wfTab('project-req','需求记录')}${wfTab('project-delivery','交付记录')}${wfTab('project-activity','项目动态')}</div>
    <section class="wf-panel active" data-wf-panel="project-overview">
      <div class="wf-grid-2"><div class="wf-card"><div class="wf-card-head"><div><h3>项目信息</h3><p>记录合作背景和项目级约束。</p></div><button class="wf-link-btn">编辑</button></div><div class="wf-card-body"><dl class="wf-kv"><dt>项目名称</dt><dd>Insta360 内容音乐</dd><dt>所属客户</dt><dd>影石 Insta360</dd><dt>合作场景</dt><dd>运动相机 / UGC / 短视频</dd><dt>目标区域</dt><dd>全球</dd><dt>合作周期</dt><dd>2024-06-01 ～ 长期</dd><dt>更新节奏</dt><dd>每周 7–8 首增量内容</dd></dl></div></div>
      <div class="wf-card"><div class="wf-card-head"><div><h3>合作说明</h3><p>项目内部约定，方便运营和商务快速理解。</p></div></div><div class="wf-card-body"><div class="wf-note-block">面向 Insta360 相机和移动端产品提供可用于用户创作的版权音乐。内容以户外、旅行、运动和热点音乐为主；每周小批量增量更新，优先全球可授权内容。</div><div class="wf-mini-title">项目联系人</div><div class="wf-person-row"><span class="wf-avatar">陈</span><div><strong>陈女士 · 内容运营</strong><small>客户侧主要选品联系人 · chen@example.com</small></div></div><div class="wf-person-row"><span class="wf-avatar blue">王</span><div><strong>王小明 · 商务负责人</strong><small>看见音乐项目负责人</small></div></div></div></div></div>
      <div class="wf-grid-2 wf-gap"><div class="wf-card"><div class="wf-card-head"><div><h3>当前需求</h3><p>项目下仍在流转的工单。</p></div><span class="wf-link" data-route="requirements">查看全部</span></div><div class="wf-compact-list">${wfReqMini('REQ-20260916-028','户外旅行音乐周更','处理中','今天 14:21')}${wfReqMini('REQ-20260915-024','无人机首发配乐','待客户反馈','昨天 18:03')}</div></div><div class="wf-card"><div class="wf-card-head"><div><h3>最近交付</h3><p>项目最近完成或等待反馈的内容交付。</p></div><span class="wf-link" data-route="deliveries">查看全部</span></div><div class="wf-compact-list">${wfDeliveryMini('DLV-20260916-0182','0916 户外旅行','38 → 8 首','待客户确认','今天 14:21')}${wfDeliveryMini('DLV-20260909-0168','0909 中秋推荐','20 → 7 首','已完成','09-09')}</div></div></div>
    </section>
    <section class="wf-panel" data-wf-panel="project-req">${wfProjectRequirements()}</section>
    <section class="wf-panel" data-wf-panel="project-delivery">${wfProjectDeliveries()}</section>
    <section class="wf-panel" data-wf-panel="project-activity">${wfTimelineCard('项目动态',wfProjectTimeline())}</section>
  </div>`;

Page.requirements = () => `
  <div class="wf-page">
    <div class="wf-head"><div><h1>需求管理</h1><p>把客户口头、群聊或邮件需求转成可追踪工单，记录从理解需求到交付完成的全过程。</p></div><button class="wf-btn primary">+ 新建需求</button></div>
    <div class="wf-status-tabs"><button class="active">全部 <b>32</b></button><button>待处理 <b>4</b></button><button>处理中 <b>8</b></button><button>待客户反馈 <b>5</b></button><button>已完成 <b>15</b></button></div>
    <section class="wf-filter-card"><div class="wf-filter-grid req"><div class="wf-field wf-search-field"><label>搜索</label><div class="wf-search"><span>⌕</span><input placeholder="需求标题、需求 ID、客户或项目" /></div></div>${wfSelect('客户',['全部客户','影石 Insta360','Keep','南航'])}${wfSelect('项目',['全部项目','Insta360 内容音乐','无人机音乐','跑步课程音乐','机上娱乐音乐'])}${wfSelect('负责人',['全部负责人','王小明','李小雨','张伟'])}${wfSelect('截止时间',['全部时间','今天到期','3 天内到期','7 天内到期','已逾期'])}<div class="wf-filter-actions"><button class="wf-btn">重置</button><button class="wf-btn primary">查询</button></div></div></section>
    <section class="wf-list-card"><div class="wf-list-top"><div><strong>需求工单</strong><span>最近 7 天新增 9 条</span></div><span>按优先级与更新时间排序</span></div><div class="wf-table-wrap"><table class="wf-table req-table"><thead><tr><th>需求</th><th>客户 / 项目</th><th>需求内容</th><th>目标数量</th><th>当前进度</th><th>负责人</th><th>截止时间</th><th>状态</th><th>最近更新</th></tr></thead><tbody>
      ${wfRequirementRow('REQ-20260916-028','户外旅行音乐周更','影石 Insta360','Insta360 内容音乐','户外 / 旅行 / 高热 / 全球','7–8 首','已发 38 · 已选 8','王小明','09-18','处理中','今天 14:21')}
      ${wfRequirementRow('REQ-20260915-024','无人机首发配乐','影石 Insta360','影石无人机音乐','大气 / 开阔 / 无人机航拍','20 首','已发 30 · 已选 6','王小明','09-20','待客户反馈','昨天 18:03')}
      ${wfRequirementRow('REQ-20260915-021','Q4 跑步课程音乐','Keep','Keep 跑步课程音乐','120–160 BPM / 英文 / 高能量','50 首','候选 80 · 已选 35','李小雨','09-19','待客户反馈','昨天 16:42')}
      ${wfRequirementRow('REQ-20260914-019','10 月机上音乐','南航','南航机上娱乐音乐','热歌 + 非热歌高播放专辑','≤200 首','候选 185 · 已确认 53','张伟','09-17','已完成','09-15 17:36')}
    </tbody></table></div></section>
  </div>`;

Page.requirementDetail = () => `
  <div class="wf-page">
    <section class="wf-detail-hero req-hero"><div class="wf-detail-top"><div><div class="wf-back" data-route="requirements">← 返回需求管理</div><div class="wf-detail-title"><h1>户外旅行音乐周更</h1><span class="wf-status doing">处理中</span><span class="wf-priority">高优先级</span></div><div class="wf-meta"><span>REQ-20260916-028</span><span>影石 Insta360</span><span>项目：Insta360 内容音乐</span><span>负责人：王小明</span><span>截止：09-18</span></div></div><div class="wf-actions"><button class="wf-btn">编辑需求</button><button class="wf-btn">添加处理记录</button><button class="wf-btn primary" data-route="delivery-detail">创建交付</button></div></div>
    <div class="wf-flow"><div class="done"><i>✓</i><span>需求已记录</span></div><em></em><div class="done"><i>✓</i><span>筛选候选</span></div><em></em><div class="current"><i>3</i><span>客户试听</span></div><em></em><div><i>4</i><span>确认结果</span></div><em></em><div><i>5</i><span>完成交付</span></div></div></section>
    <div class="wf-grid-2">
      <div class="wf-card"><div class="wf-card-head"><div><h3>客户原始需求</h3><p>保留最初输入，避免需求在多轮沟通中失真。</p></div></div><div class="wf-card-body"><blockquote class="wf-quote">每周给 7–8 首适合户外、旅行、运动相机视频的歌，优先抖音热门或者比较耳熟的，最好全球都能用。不要太慢，也不要太偏门。</blockquote><div class="wf-source">来源：企业微信 · 陈女士 · 09-16 09:15</div></div></div>
      <div class="wf-card"><div class="wf-card-head"><div><h3>结构化需求</h3><p>运营确认后的检索和交付条件。</p></div><button class="wf-link-btn">编辑条件</button></div><div class="wf-card-body"><div class="wf-tags"><span>户外</span><span>旅行</span><span>运动</span><span>高热度优先</span><span>全球授权</span><span>7–8 首</span></div><dl class="wf-kv compact"><dt>使用场景</dt><dd>短视频 / UGC</dd><dt>区域</dt><dd>全球</dd><dt>倾向</dt><dd>热门、耳熟、节奏感</dd><dt>排除</dt><dd>过慢 / 小众实验性内容</dd></dl></div></div>
    </div>
    <div class="wf-grid-2 wf-gap"><div class="wf-card"><div class="wf-card-head"><div><h3>本轮候选与客户反馈</h3><p>一次需求可以经历多轮候选发送。</p></div><button class="wf-btn" data-route="delivery-detail">查看本轮交付</button></div><div class="wf-card-body"><div class="wf-round"><div><strong>第 1 轮 · 0916 户外旅行</strong><small>今天 10:25 发送 · 38 首</small></div><div class="wf-round-stats"><b>32</b><span>已试听</span><b class="green">8</b><span>已选择</span><b class="red">12</b><span>已淘汰</span><b>18</b><span>待处理</span></div></div><div class="wf-feedback"><strong>客户最新反馈</strong><p>“前面几首方向对，想再补几首更适合骑行和山野画面的，女声可以少一点。”</p><small>陈女士 · 今天 13:58</small></div></div></div>
      <div class="wf-card"><div class="wf-card-head"><div><h3>处理清单</h3><p>让需求像工单一样可接手、可追踪。</p></div></div><div class="wf-card-body"><div class="wf-checklist"><label><input type="checkbox" checked>确认客户授权范围</label><label><input type="checkbox" checked>生成首轮候选内容</label><label><input type="checkbox" checked>发送客户试听</label><label><input type="checkbox">根据反馈补充第二轮</label><label><input type="checkbox">确认最终选取</label><label><input type="checkbox">完成正式交付</label></div></div></div></div>
    <div class="wf-card wf-gap"><div class="wf-card-head"><div><h3>流转记录</h3><p>自动记录状态变化、内部处理、客户反馈与交付动作。</p></div></div><div class="wf-timeline">${wfReqTimeline()}</div></div>
  </div>`;

Page.deliveries = () => `
  <div class="wf-page">
    <div class="wf-head"><div><h1>交付记录</h1><p>记录每次发给客户的具体内容、试听与选取过程，以及最终下载、API、网盘等正式交付结果。</p></div><div class="wf-actions"><button class="wf-btn">导出记录</button><button class="wf-btn primary">+ 创建交付</button></div></div>
    <section class="wf-filter-card"><div class="wf-filter-grid"><div class="wf-field wf-search-field"><label>搜索</label><div class="wf-search"><span>⌕</span><input placeholder="交付名称、ID、客户、需求或歌单" /></div></div>${wfSelect('客户',['全部客户','影石 Insta360','Keep','南航'])}${wfSelect('项目',['全部项目','Insta360 内容音乐','无人机音乐','跑步课程音乐','机上娱乐音乐'])}${wfSelect('状态',['全部状态','准备中','待客户反馈','已确认','已完成','已终止'])}${wfSelect('方式',['全部方式','在线试听','下载','API 上架','网盘','SFTP'])}<div class="wf-filter-actions"><button class="wf-btn">重置</button><button class="wf-btn primary">查询</button></div></div></section>
    <section class="wf-list-card"><div class="wf-list-top"><div><strong>交付记录</strong><span>共 1,281 条 · 最近 30 天 86 条</span></div><span>交付内容创建后保留歌曲快照</span></div><div class="wf-table-wrap"><table class="wf-table delivery-table"><thead><tr><th>交付</th><th>客户 / 项目</th><th>关联需求</th><th>发送</th><th>客户行为</th><th>最终结果</th><th>方式</th><th>状态</th><th>最近更新</th></tr></thead><tbody>
      ${wfDeliveryRow('DLV-20260916-0182','0916 户外旅行','影石 Insta360','Insta360 内容音乐','REQ-20260916-028','38 首','32 听 · 8 选 · 12 淘汰','待确认 8 首','在线试听','待客户反馈','今天 14:21')}
      ${wfDeliveryRow('DLV-20260915-0176','南航_20260827需求','南航','南航机上娱乐音乐','REQ-20260914-019','185 首','168 听 · 53 选','53 首已确认','在线试听 + 下载','已确认','昨天 17:36')}
      ${wfDeliveryRow('DLV-20260915-0171','260914 热歌','影石 Insta360','Insta360 内容音乐','REQ-20260915-024','150 首','96 听 · 32 选','32 首 API 上架','API 上架','已完成','昨天 11:47')}
      ${wfDeliveryRow('DLV-20260914-0149','Keep Q4 跑步音乐','Keep','Keep 跑步课程音乐','REQ-20260915-021','80 首','64 听 · 35 选','等待最终确认','试听 + 下载','待客户反馈','09-14 18:03')}
    </tbody></table></div></section>
  </div>`;

Page.deliveryDetail = () => `
  <div class="wf-page">
    <section class="wf-detail-hero delivery-hero"><div class="wf-detail-top"><div><div class="wf-back" data-route="deliveries">← 返回交付记录</div><div class="wf-detail-title"><h1>0916 户外旅行</h1><span class="wf-status wait">待客户反馈</span></div><div class="wf-meta"><span>DLV-20260916-0182</span><span>影石 Insta360</span><span>项目：Insta360 内容音乐</span><span>需求：REQ-20260916-028</span><span>创建：今天 10:25</span></div></div><div class="wf-actions"><button class="wf-btn">编辑内容</button><button class="wf-btn">分享设置</button><button class="wf-btn">终止</button><button class="wf-btn primary">完成正式交付</button></div></div>
      <div class="wf-kpis">${wfKpi('发送歌曲','38','本轮内容快照')}${wfKpi('已试听','32','84%')}${wfKpi('已选择','8','21%')}${wfKpi('已淘汰','12','32%')}${wfKpi('待处理','18','47%')}</div>
    </section>
    <div class="wf-tabs delivery-tabs">${wfTab('delivery-content','交付内容',true)}${wfTab('delivery-selection','客户选取')}${wfTab('delivery-share','分享与权限')}${wfTab('delivery-final','正式交付')}${wfTab('delivery-log','活动记录')}</div>
    <section class="wf-panel active" data-wf-panel="delivery-content">${wfDeliveryContentTable(false)}</section>
    <section class="wf-panel" data-wf-panel="delivery-selection">${wfDeliverySelection()}</section>
    <section class="wf-panel" data-wf-panel="delivery-share">${wfDeliveryShare()}</section>
    <section class="wf-panel" data-wf-panel="delivery-final">${wfDeliveryFinal()}</section>
    <section class="wf-panel" data-wf-panel="delivery-log">${wfTimelineCard('完整活动记录',wfDeliveryTimeline())}</section>
  </div>`;

function wfSelect(label, options){return `<div class="wf-field"><label>${label}</label><div class="wf-select"><button class="wf-select-trigger" type="button"><span>${options[0]}</span><b>⌄</b></button><div class="wf-select-menu">${options.map((x,i)=>`<button type="button" class="${i===0?'selected':''}">${x}</button>`).join('')}</div></div></div>`}
function wfKpi(label,value,note){return `<div class="wf-kpi"><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`}
function wfTab(id,label,active=false){return `<button class="wf-tab ${active?'active':''}" data-wf-tab="${id}">${label}</button>`}
function wfProjectRow(id,name,customer,scene,start,end,req,delivery,owner,status,update){return `<tr class="clickable" data-route="project-detail"><td><div class="wf-title">${name}</div><div class="wf-sub">${id}</div></td><td>${customer}</td><td>${scene}</td><td>${start}<div class="wf-sub">至 ${end}</div></td><td><b>${req}</b></td><td>${delivery}</td><td>${owner}</td><td><span class="wf-status ok">${status}</span></td><td>${update}</td><td><button class="wf-row-btn">查看</button></td></tr>`}
function wfRequirementRow(id,title,customer,project,brief,count,progress,owner,due,status,update){let cls=status==='已完成'?'ok':status==='处理中'?'doing':'wait';return `<tr class="clickable" data-route="requirement-detail"><td><div class="wf-title">${title}</div><div class="wf-sub">${id}</div></td><td>${customer}<div class="wf-sub">${project}</div></td><td>${brief}</td><td>${count}</td><td>${progress}</td><td>${owner}</td><td>${due}</td><td><span class="wf-status ${cls}">${status}</span></td><td>${update}</td></tr>`}
function wfDeliveryRow(id,name,customer,project,req,sent,behavior,result,method,status,update){let cls=status==='已完成'||status==='已确认'?'ok':'wait';return `<tr class="clickable" data-route="delivery-detail"><td><div class="wf-title">${name}</div><div class="wf-sub">${id}</div></td><td>${customer}<div class="wf-sub">${project}</div></td><td><span class="wf-link" data-route="requirement-detail">${req}</span></td><td><b>${sent}</b></td><td>${behavior}</td><td>${result}</td><td>${method}</td><td><span class="wf-status ${cls}">${status}</span></td><td>${update}</td></tr>`}
function wfReqMini(id,title,status,time){return `<div class="wf-list-row" data-route="requirement-detail"><div><strong>${title}</strong><small>${id}</small></div><div><span class="wf-status ${status==='处理中'?'doing':'wait'}">${status}</span><small>${time}</small></div></div>`}
function wfDeliveryMini(id,title,count,status,time){return `<div class="wf-list-row" data-route="delivery-detail"><div><strong>${title}</strong><small>${id} · ${count}</small></div><div><span class="wf-status ${status==='已完成'?'ok':'wait'}">${status}</span><small>${time}</small></div></div>`}
function wfProjectRequirements(){return `<div class="wf-card"><div class="wf-card-head"><div><h3>项目需求记录</h3><p>该项目下全部需求工单。</p></div><button class="wf-btn" data-route="requirement-detail">+ 新建需求</button></div><div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>需求</th><th>内容</th><th>负责人</th><th>截止</th><th>状态</th><th>更新时间</th></tr></thead><tbody><tr data-route="requirement-detail" class="clickable"><td><div class="wf-title">户外旅行音乐周更</div><div class="wf-sub">REQ-20260916-028</div></td><td>每周 7–8 首 · 全球 · 户外旅行</td><td>王小明</td><td>09-18</td><td><span class="wf-status doing">处理中</span></td><td>今天 14:21</td></tr><tr><td><div class="wf-title">无人机首发配乐</div><div class="wf-sub">REQ-20260915-024</div></td><td>20 首 · 大气开阔 · 全球</td><td>王小明</td><td>09-20</td><td><span class="wf-status wait">待客户反馈</span></td><td>昨天</td></tr></tbody></table></div></div>`}
function wfProjectDeliveries(){return `<div class="wf-card"><div class="wf-card-head"><div><h3>项目交付记录</h3><p>该项目所有发送、选取和正式交付记录。</p></div><button class="wf-btn" data-route="delivery-detail">+ 创建交付</button></div><div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>交付</th><th>关联需求</th><th>发送</th><th>选取</th><th>方式</th><th>状态</th><th>时间</th></tr></thead><tbody><tr class="clickable" data-route="delivery-detail"><td>0916 户外旅行<div class="wf-sub">DLV-20260916-0182</div></td><td>REQ-20260916-028</td><td>38</td><td>8</td><td>在线试听</td><td><span class="wf-status wait">待反馈</span></td><td>今天 10:25</td></tr><tr><td>0909 中秋推荐<div class="wf-sub">DLV-20260909-0168</div></td><td>REQ-20260909-020</td><td>20</td><td>7</td><td>API 上架</td><td><span class="wf-status ok">已完成</span></td><td>09-09</td></tr></tbody></table></div></div>`}
function wfTimelineCard(title,content){return `<div class="wf-card"><div class="wf-card-head"><div><h3>${title}</h3><p>按时间记录关键动作。</p></div></div><div class="wf-timeline">${content}</div></div>`}
function wfProjectTimeline(){return wfTime('今天 16:42','客户通过 API 获取 100 首曲库数据','系统记录 API 使用')+wfTime('今天 14:21','户外旅行音乐周更进入客户试听','REQ-20260916-028')+wfTime('09-15 18:03','创建无人机首发配乐需求','王小明')+wfTime('09-09 10:12','中秋推荐 7 首完成 API 上架','DLV-20260909-0168')}
function wfReqTimeline(){return wfTime('今天 14:21','客户反馈：希望补充骑行和山野画面内容','陈女士')+wfTime('今天 13:58','客户完成首轮部分选取：选中 8 首，淘汰 12 首','STARLINK')+wfTime('今天 10:25','发送第 1 轮候选 38 首，生成在线试听链接','王小明')+wfTime('今天 09:32','完成需求结构化和授权条件确认','王小明')+wfTime('今天 09:15','创建需求工单','企业微信同步')}
function wfDeliveryTimeline(){return wfTime('今天 14:21','客户新增选择 2 首，当前共选择 8 首','陈女士')+wfTime('今天 13:58','客户提交反馈备注','STARLINK')+wfTime('今天 11:12','客户首次访问试听页并播放 12 首','STARLINK')+wfTime('今天 10:25','生成分享链接并发送客户','王小明')+wfTime('今天 10:18','从歌单「影石户外候选池」创建内容快照 38 首','王小明')}
function wfTime(time,title,sub){return `<div class="wf-time-row"><time>${time}</time><i></i><div><strong>${title}</strong><small>${sub}</small></div></div>`}
function wfDeliveryContentTable(selection){let rows=[['Midnight Drive','Nova Lane','3','92%','已选择','适合骑行'],['Open Sky','Mila June','2','100%','已选择','画面感不错'],['Momentum','Violet Echo','1','48%','已淘汰','太电子'],['Run With Me','Atlas North','0','—','待处理','—'],['Summer Coast','Luna Grey','4','86%','已选择','—']];return `<div class="wf-card"><div class="wf-card-head"><div><h3>${selection?'客户选取明细':'交付内容快照'}</h3><p>${selection?'查看客户对每首歌的试听、选择、淘汰和备注。':'本次发送时固定的 38 首内容，不跟随来源歌单后续变化。'}</p></div><div class="wf-actions"><button class="wf-btn">导出</button><button class="wf-btn">+ 添加歌曲</button></div></div><div class="wf-table-wrap"><table class="wf-table"><thead><tr><th>歌曲</th><th>试听次数</th><th>最高完成率</th><th>客户状态</th><th>客户备注</th><th>授权快照</th></tr></thead><tbody>${rows.map(r=>`<tr><td><div class="wf-song"><span>♫</span><div><strong>${r[0]}</strong><small>${r[1]}</small></div></div></td><td>${r[2]}</td><td>${r[3]}</td><td><span class="wf-selection ${r[4]==='已选择'?'chosen':r[4]==='已淘汰'?'rejected':''}">${r[4]}</span></td><td>${r[5]}</td><td>全球 · 短视频 / UGC</td></tr>`).join('')}</tbody></table></div></div>`}
function wfDeliverySelection(){return `<div class="wf-activity-grid">${wfKpi('访问人数','3','客户账号')}${wfKpi('已试听歌曲','32 / 38','84%')}${wfKpi('已选择','8','21%')}${wfKpi('已淘汰','12','32%')}${wfKpi('平均试听完成率','64%','较上轮 +8%')}</div><div class="wf-gap">${wfDeliveryContentTable(true)}</div>`}
function wfDeliveryShare(){return `<div class="wf-grid-2"><div class="wf-card"><div class="wf-card-head"><div><h3>分享链接</h3><p>控制客户这一次如何访问候选内容。</p></div><span class="wf-status ok">有效</span></div><div class="wf-card-body"><div class="wf-share-url"><code>https://starlink.example/share/demo-0916</code><button class="wf-btn">复制</button></div><dl class="wf-kv"><dt>有效期</dt><dd>2026-09-30 23:59</dd><dt>访问密码</dt><dd>已设置</dd><dt>允许试听</dt><dd>是</dd><dt>允许客户选取</dt><dd>是</dd><dt>允许备注</dt><dd>是</dd><dt>允许下载</dt><dd>否（确认后开放）</dd></dl></div></div><div class="wf-card"><div class="wf-card-head"><div><h3>访问记录</h3><p>这次分享的客户侧访问情况。</p></div></div><div class="wf-card-body"><div class="wf-person-row"><span class="wf-avatar">陈</span><div><strong>陈女士</strong><small>今天 11:12 首次访问 · 最近 14:21</small></div><b>播放 28 首</b></div><div class="wf-person-row"><span class="wf-avatar blue">李</span><div><strong>李先生</strong><small>今天 13:06 首次访问 · 最近 13:44</small></div><b>播放 11 首</b></div></div></div></div>`}
function wfDeliveryFinal(){return `<div class="wf-grid-2"><div class="wf-card"><div class="wf-card-head"><div><h3>正式交付结果</h3><p>客户最终确认后，记录实际拿走的内容和交付方式。</p></div></div><div class="wf-card-body"><div class="wf-final-state"><span>当前状态</span><strong>等待客户确认最终 8 首</strong><small>确认后可执行 API 上架、文件下载、网盘或 SFTP。</small></div><div class="wf-methods"><button class="active">API 上架</button><button>文件下载</button><button>网盘</button><button>SFTP</button></div><dl class="wf-kv compact"><dt>最终歌曲</dt><dd>8 首（随客户确认更新）</dd><dt>文件格式</dt><dd>WAV + JPG + Metadata</dd><dt>文件命名</dt><dd>trackId_歌曲名称</dd><dt>执行人</dt><dd>待分配</dd></dl><button class="wf-btn primary wide">确认并执行正式交付</button></div></div><div class="wf-card"><div class="wf-card-head"><div><h3>交付历史</h3><p>同一候选交付可以产生多次正式输出。</p></div></div><div class="wf-card-body"><div class="wf-empty-mini">尚未产生正式交付记录</div></div></div></div>`}

['projects','project-detail','requirements','requirement-detail','deliveries','delivery-detail'].forEach(k=>{if(routes&&routes[k]&&Page[k.replace(/-([a-z])/g,(_,c)=>c.toUpperCase())]) routes[k].render=Page[k.replace(/-([a-z])/g,(_,c)=>c.toUpperCase())]});
if(routes&&routes.projects) routes.projects.render=Page.projects;
if(routes&&routes['project-detail']) routes['project-detail'].render=Page.projectDetail;
if(routes&&routes.requirements) routes.requirements.render=Page.requirements;
if(routes&&routes['requirement-detail']) routes['requirement-detail'].render=Page.requirementDetail;
if(routes&&routes.deliveries) routes.deliveries.render=Page.deliveries;
if(routes&&routes['delivery-detail']) routes['delivery-detail'].render=Page.deliveryDetail;

document.addEventListener('click',e=>{
  const st=e.target.closest('.wf-select-trigger'); if(st){const box=st.closest('.wf-select');document.querySelectorAll('.wf-select.open').forEach(x=>{if(x!==box)x.classList.remove('open')});box.classList.toggle('open');return}
  const opt=e.target.closest('.wf-select-menu button'); if(opt){const box=opt.closest('.wf-select');box.querySelector('.wf-select-trigger span').textContent=opt.textContent;box.querySelectorAll('button').forEach(x=>x.classList.remove('selected'));opt.classList.add('selected');box.classList.remove('open');return}
  const tab=e.target.closest('[data-wf-tab]'); if(tab){const page=tab.closest('.wf-page');page.querySelectorAll('.wf-tab').forEach(x=>x.classList.remove('active'));page.querySelectorAll('.wf-panel').forEach(x=>x.classList.remove('active'));tab.classList.add('active');const p=page.querySelector(`[data-wf-panel="${tab.dataset.wfTab}"]`);if(p)p.classList.add('active');return}
});
