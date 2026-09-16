const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

const data = {
  tracks:[
    {title:'Blinding Lights',artist:'The Weeknd',lang:'English',bpm:'171',heat:'92',tags:'流行 · 高能量',rights:'全球 / 商用',cover:''},
    {title:'Midnight Drive',artist:'Nova Lane',lang:'English',bpm:'128',heat:'88',tags:'电子 · 运动',rights:'全球 / 短视频',cover:'pink'},
    {title:'Run With Me',artist:'Atlas North',lang:'English',bpm:'132',heat:'84',tags:'流行摇滚 · 激励',rights:'大陆及海外',cover:'green'},
    {title:'Open Sky',artist:'Mila June',lang:'English',bpm:'124',heat:'81',tags:'独立流行 · 自由',rights:'全球 / UGC',cover:'orange'},
    {title:'Momentum',artist:'Violet Echo',lang:'Instrumental',bpm:'136',heat:'79',tags:'电子 · 科技',rights:'全球 / 商用',cover:''}
  ]
};

function trackRows(){
  return data.tracks.map((t,i)=>`<tr class="clickable" data-track="${i}">
    <td><div class="track"><div class="cover ${t.cover}">♪</div><div><div class="track-title">${t.title}</div><div class="track-sub">${t.artist}</div></div></div></td>
    <td>${t.tags}<div class="track-sub">${t.lang} · ${t.bpm} BPM</div></td>
    <td><span class="badge blue">🔥 ${t.heat}</span></td>
    <td>${t.rights}</td><td><span class="badge green">可用</span></td><td><span class="link">查看</span></td>
  </tr>`).join('');
}

const Page = {
  dashboard:()=>`
    <div class="page-head"><div class="page-title"><h1>工作台</h1><p>快速查看曲库、客户需求与近期交付，直接进入今天的工作。</p></div><div class="actions"><button class="btn">导出概览</button><button class="btn primary" data-route="catalog-search">开始找歌</button></div></div>
    <div class="hero-agent"><h3>✦ 今天想查什么？</h3><p>直接描述业务需求，AI 会结合曲库、权利、客户和历史交付来查询。</p><div class="prompt-box"><input value="找全球可授权、适合户外运动的热门音乐，优先英文歌"/><button class="btn primary" data-route="agent">AI 检索</button><button class="btn" data-route="catalog-search">高级检索</button></div></div>
    <div class="stats">
      <div class="card stat"><div class="stat-label">全量曲库</div><div class="stat-value">29,830,412</div><div class="stat-note">全部已入库音乐资产</div></div>
      <div class="card stat"><div class="stat-label">常规商用曲库</div><div class="stat-value">3,184,206</div><div class="stat-note up">本月 +82,319</div></div>
      <div class="card stat"><div class="stat-label">客户可用曲库</div><div class="stat-value">1,286,903</div><div class="stat-note">覆盖 126 家合作客户</div></div>
      <div class="card stat"><div class="stat-label">本月交付</div><div class="stat-value">6,821</div><div class="stat-note">试听 / 下载 / API / 网盘</div></div>
    </div>
    <div class="grid-2">
      <div class="card card-pad"><div class="card-title"><h3>待处理需求</h3><a data-route="requirements">查看全部</a></div><div class="list">
        <div class="list-row"><span class="dot orange"></span><div class="list-main"><strong>影石｜户外旅行音乐</strong><small>Insta360 · 每周 7–8 首 · 优先高热度</small></div><span class="badge orange">处理中</span></div>
        <div class="list-row"><span class="dot"></span><div class="list-main"><strong>南航｜10 月机上音乐</strong><small>机上娱乐 · 单轮不超过 200 首</small></div><span class="badge blue">待处理</span></div>
        <div class="list-row"><span class="dot green"></span><div class="list-main"><strong>Keep｜Q4 跑步音乐</strong><small>跑步课程 · 已发送试听歌单</small></div><span class="badge purple">待反馈</span></div>
      </div></div>
      <div class="card card-pad"><div class="card-title"><h3>最近交付</h3><a data-route="deliveries">查看全部</a></div><div class="list">
        <div class="list-row"><div class="list-main"><strong>影石 · API 上架</strong><small>0916 户外旅行</small></div><div class="list-meta"><b>8 首</b><br>今天 14:21</div></div>
        <div class="list-row"><div class="list-main"><strong>Keep · 下载</strong><small>跑步 Q4</small></div><div class="list-meta"><b>35 首</b><br>昨天</div></div>
        <div class="list-row"><div class="list-main"><strong>南航 · 分享链接</strong><small>10 月机上音乐</small></div><div class="list-meta"><b>185 首</b><br>昨天</div></div>
      </div></div>
    </div>
    <div class="split-analytics" style="margin-top:14px">
      <div class="card card-pad"><div class="card-title"><h3>语言分布</h3><a data-route="catalog-dashboard">查看看板</a></div><div class="metric-list">
        ${metric('中文','46%',46)}${metric('英文','25%',25)}${metric('日文','12%',12)}${metric('俄语','4%',4)}${metric('其他','13%',13)}
      </div></div>
      <div class="card card-pad"><div class="card-title"><h3>最近操作</h3></div><div class="list">
        <div class="list-row"><span class="dot"></span><div class="list-main"><strong>王小明创建歌单「影石_0916_户外」</strong><small>10:32</small></div></div>
        <div class="list-row"><span class="dot green"></span><div class="list-main"><strong>李小雨为 Keep 新增授权歌曲 320 首</strong><small>10:18</small></div></div>
        <div class="list-row"><span class="dot orange"></span><div class="list-main"><strong>系统完成 18,240 首标签更新</strong><small>09:47</small></div></div>
      </div></div>
    </div>`,

  catalogSearch:()=>`
    <div class="page-head"><div class="page-title"><h1>曲库检索</h1><p>检索全量曲库，组合标签、热度、权利、区域、场景等条件，并支持批量导出与组织。</p></div><div class="actions"><button class="btn">导入 ID 查询</button><button class="btn primary">导出结果</button></div></div>
    <div class="hero-agent" style="padding:14px"><div class="prompt-box" style="margin-top:0"><input placeholder="用自然语言描述：例如 适合跑步的高能量英文歌，120 BPM 以上，全球可商用"/><button class="btn primary" data-route="agent">✦ AI 找歌</button></div></div>
    <div class="filter-area">
      <div class="toolbar"><div class="search"><input placeholder="搜索歌曲 / 艺人 / 专辑 / ISRC / UID / CP"/></div><select class="select"><option>商用状态：全部</option></select><select class="select"><option>授权区域：全球</option></select><select class="select"><option>使用场景：运动健身</option></select></div>
      <div class="filter-row"><span class="filter-label">常用筛选</span><button class="chip active">全球</button><button class="chip active">运动健身</button><button class="chip active">英文</button><button class="chip">流派</button><button class="chip">情绪</button><button class="chip">热度</button><button class="chip">BPM</button><button class="chip">CP</button><button class="chip">KTV / 原唱</button><button class="chip">更多筛选 +12</button></div>
    </div>
    <div class="card table-card"><div class="table-top"><strong>找到 18,642 首</strong><div class="actions"><button class="btn small">加入歌单</button><button class="btn small">给客户授权</button><button class="btn small">创建交付</button><button class="btn small">批量导出</button></div></div><div class="table-wrap"><table class="table"><thead><tr><th>歌曲</th><th>标签</th><th>热度</th><th>授权范围</th><th>状态</th><th>操作</th></tr></thead><tbody>${trackRows()}</tbody></table></div><div class="pagination"><button class="page-num active">1</button><button class="page-num">2</button><button class="page-num">3</button><button class="page-num">…</button><button class="page-num">933</button></div></div>`,

  catalogDashboard:()=>`
    <div class="page-head"><div class="page-title"><h1>曲库看板</h1><p>从规模、类型、语言、区域、场景和 CP 等维度理解当前可用曲库，并可下钻到具体歌曲。</p></div><div class="actions"><select class="select"><option>全部曲库</option><option>常规商用</option></select><button class="btn">导出看板</button></div></div>
    <div class="stats"><div class="card stat"><div class="stat-label">总曲库</div><div class="stat-value">29,830,412</div><div class="stat-note">100%</div></div><div class="card stat"><div class="stat-label">商用可授权</div><div class="stat-value">3,184,206</div><div class="stat-note">10.7% of Catalog</div></div><div class="card stat"><div class="stat-label">本月新增</div><div class="stat-value">82,319</div><div class="stat-note up">+7.8%</div></div><div class="card stat"><div class="stat-label">合作 CP</div><div class="stat-value">1,286</div><div class="stat-note">持续更新</div></div></div>
    <div class="split-analytics">
      ${metricCard('曲库类型',[['原唱','18,212,223',61],['纯音乐','7,312,211',25],['KTV','2,817,322',9],['其他','1,488,656',5]])}
      ${metricCard('语言分布',[['中文','13,721,990',46],['英文','7,456,210',25],['日文','3,579,649',12],['俄语','1,193,216',4],['其他','3,879,347',13]])}
      ${metricCard('授权区域',[['全球','1,482,319',47],['中国大陆','1,021,881',32],['东南亚','391,028',12],['俄语区','188,821',6],['其他','100,157',3]])}
      ${metricCard('使用场景',[['短视频','1,281,021',40],['空间音乐','822,918',26],['健身','518,212',16],['KTV','302,944',10],['其他','259,111',8]])}
    </div>
    <div class="grid-2" style="margin-top:14px"><div class="card card-pad"><div class="card-title"><h3>CP 曲库 Top 8</h3><a data-route="catalog-search">查看对应歌曲</a></div><div class="chart-box"><div class="mini-bars"><div class="mini-bar" style="height:95%"><small>38.1万</small></div><div class="mini-bar" style="height:82%"><small>28.9万</small></div><div class="mini-bar" style="height:72%"><small>21.0万</small></div><div class="mini-bar" style="height:64%"><small>18.4万</small></div><div class="mini-bar" style="height:55%"><small>15.6万</small></div><div class="mini-bar" style="height:48%"><small>12.9万</small></div></div><div class="axis-labels"><span>CP A</span><span>CP B</span><span>CP C</span><span>CP D</span><span>CP E</span><span>CP F</span></div></div></div><div class="card card-pad"><div class="card-title"><h3>热度分布</h3></div><div class="metric-list" style="padding-top:18px">${metric('高热度','12%',12)}${metric('中高热度','21%',21)}${metric('中热度','38%',38)}${metric('长尾','29%',29)}</div></div></div>`,

  tags:()=>`
    <div class="page-head"><div class="page-title"><h1>标签管理</h1><p>统一维护标签体系、标签树、AI 映射与标签模板。</p></div><div class="actions"><button class="btn">导入标签</button><button class="btn primary">+ 新增标签</button></div></div>
    <div class="tabs"><button class="tab active">标签体系</button><button class="tab">标签规则</button><button class="tab">标签模板</button></div>
    <div class="card three-pane"><div class="pane"><div class="pane-head">标签树</div><div class="tree"><div class="tree-item active">▼ 音乐标签</div><div class="tree-indent"><div class="tree-item">▼ 流派</div><div class="tree-indent"><div class="tree-item">流行</div><div class="tree-item">摇滚</div><div class="tree-item">电子</div></div><div class="tree-item active">▼ 情绪</div><div class="tree-indent"><div class="tree-item active">激励</div><div class="tree-item">开心</div><div class="tree-item">平静</div><div class="tree-item">浪漫</div></div><div class="tree-item">▼ 场景</div><div class="tree-item">▼ 乐器</div><div class="tree-item">▼ 能量</div></div></div></div>
    <div class="pane"><div class="pane-head">情绪 · 18 个标签</div><div style="padding:12px"><div class="search"><input placeholder="搜索标签"/></div><div class="list" style="margin-top:10px"><div class="list-row"><div class="list-main"><strong>激励</strong><small>uplifting · 49,182 首</small></div><span class="badge green">启用</span></div><div class="list-row"><div class="list-main"><strong>开心</strong><small>happy · 81,220 首</small></div><span class="badge green">启用</span></div><div class="list-row"><div class="list-main"><strong>平静</strong><small>calm · 31,812 首</small></div><span class="badge green">启用</span></div><div class="list-row"><div class="list-main"><strong>浪漫</strong><small>romantic · 28,190 首</small></div><span class="badge green">启用</span></div></div></div></div>
    <div class="pane"><div class="pane-head">标签详情</div><div style="padding:16px"><div class="form"><div class="field"><label>名称</label><input class="input" value="激励"/></div><div class="field"><label>Code</label><input class="input" value="uplifting"/></div><div class="field"><label>上级标签</label><input class="input" value="情绪"/></div><div class="field"><label>标签来源</label><label class="check-row"><input type="checkbox" checked/> AI 自动打标</label><label class="check-row"><input type="checkbox" checked/> 人工维护</label></div><div class="field"><label>AI 语义映射</label><textarea class="textarea">Motivational, Uplifting, Inspiring, Positive Energy</textarea></div><button class="btn primary">保存</button></div></div></div></div>`,

  playlists:()=>`
    <div class="page-head"><div class="page-title"><h1>歌单管理</h1><p>统一组织内部歌单、智能歌单、客户推荐歌单与 STARLINK 展示歌单。</p></div><div class="actions"><button class="btn soft">✦ AI 创建歌单</button><button class="btn primary">+ 新建歌单</button></div></div>
    <div class="toolbar"><div class="search"><input placeholder="搜索歌单名称 / 客户 / 项目"/></div><select class="select"><option>全部类型</option></select><select class="select"><option>全部状态</option></select></div>
    <div class="tabs"><button class="tab active">全部 1,286</button><button class="tab">普通歌单</button><button class="tab">智能歌单</button><button class="tab">客户歌单</button><button class="tab">官网歌单</button></div>
    <div class="card table-card"><div class="table-wrap"><table class="table"><thead><tr><th>歌单</th><th>类型</th><th>歌曲数</th><th>关联客户 / 项目</th><th>使用情况</th><th>更新时间</th><th>操作</th></tr></thead><tbody>
      ${playlistRow('影石_0916_户外旅行','客户歌单','38','影石 · Insta360','已分享','今天')}
      ${playlistRow('南航_202610','客户歌单','185','南航 · 机上娱乐','待发送','今天')}
      ${playlistRow('欧美高热运动音乐','智能歌单','2,812','—','STARLINK 已上架','昨天')}
      ${playlistRow('治愈系轻音乐','官网歌单','120','—','已上架','09-14')}
      ${playlistRow('俄罗斯 KTV 热门','普通歌单','486','—','内部使用','09-12')}
    </tbody></table></div></div>`,

  playlistDetail:()=>`
    <div class="detail-hero"><div class="detail-title"><div><div class="detail-sub"><span class="link" data-route="playlists">← 歌单管理</span></div><h1 style="margin-top:9px">影石｜0916 户外旅行</h1><div class="detail-sub"><span class="badge blue">客户歌单</span><span>38 首</span><span>创建于 2026-09-16</span></div></div><div class="actions"><button class="btn">播放全部</button><button class="btn">分享客户</button><button class="btn">上架 STARLINK</button><button class="btn primary" data-route="delivery-detail">创建交付</button></div></div></div>
    <div class="tabs"><button class="tab active">歌曲</button><button class="tab">客户挑选</button><button class="tab">分享与权限</button><button class="tab">发布</button><button class="tab">交付记录</button><button class="tab">操作记录</button></div>
    <div class="grid-2"><div class="card table-card"><div class="table-top"><strong>38 首歌曲</strong><div class="actions"><button class="btn small">+ 添加歌曲</button><button class="btn small">AI 扩歌单</button></div></div><div class="table-wrap"><table class="table" style="min-width:760px"><thead><tr><th>歌曲</th><th>热度</th><th>权利</th><th>客户状态</th></tr></thead><tbody>
    ${data.tracks.slice(0,4).map((t,i)=>`<tr class="clickable" data-track="${i}"><td><div class="track"><div class="cover ${t.cover}">♪</div><div><div class="track-title">${t.title}</div><div class="track-sub">${t.artist}</div></div></div></td><td><span class="badge blue">🔥 ${t.heat}</span></td><td>${t.rights}</td><td>${i===0?'<span class="badge green">♥ 已选择</span>':i===2?'<span class="badge red">× 已淘汰</span>':'<span class="badge">未操作</span>'}</td></tr>`).join('')}
    </tbody></table></div></div><div><div class="card card-pad"><div class="card-title"><h3>客户反馈统计</h3></div><div class="stats" style="grid-template-columns:repeat(2,1fr);margin-bottom:0"><div><div class="stat-label">已试听</div><div class="stat-value" style="font-size:20px">32 / 38</div></div><div><div class="stat-label">已选择</div><div class="stat-value" style="font-size:20px">7</div></div><div><div class="stat-label">已淘汰</div><div class="stat-value" style="font-size:20px">12</div></div><div><div class="stat-label">待处理</div><div class="stat-value" style="font-size:20px">19</div></div></div></div><div class="card card-pad" style="margin-top:14px"><div class="card-title"><h3>分享与权限</h3><a>编辑</a></div><div class="key-values"><dt>状态</dt><dd><span class="badge green">已开启</span></dd><dt>有效期</dt><dd>2026-09-30</dd><dt>允许试听</dt><dd>✓</dd><dt>允许下载</dt><dd>✓ MP3</dd><dt>允许挑选</dt><dd>✓</dd><dt>访问密码</dt><dd>已设置</dd></div><button class="btn" style="width:100%;margin-top:14px">复制试听链接</button></div></div></div>`,

  categories:()=>`
    <div class="page-head"><div class="page-title"><h1>分类管理</h1><p>管理 STARLINK 前台展示的歌单分类、排序、上下架与关联歌单。</p></div><div class="actions"><button class="btn primary">+ 新增分类</button></div></div>
    <div class="grid-2"><div class="card table-card"><div class="table-wrap"><table class="table" style="min-width:650px"><thead><tr><th>分类</th><th>歌单数</th><th>STARLINK</th><th>排序</th><th>操作</th></tr></thead><tbody>
      ${categoryRow('运动健身',18,'已上架',1)}${categoryRow('旅行户外',12,'已上架',2)}${categoryRow('游戏配乐',31,'已上架',3)}${categoryRow('疗愈音乐',9,'已下架',4)}${categoryRow('节日音乐',16,'已上架',5)}
    </tbody></table></div></div><div class="card card-pad"><div class="card-title"><h3>编辑分类</h3></div><div class="form"><div class="field"><label>分类名称</label><input class="input" value="运动健身"/></div><div class="field"><label>英文名称</label><input class="input" value="Workout"/></div><div class="field"><label>描述</label><textarea class="textarea">适合运动、健身、跑步等高能量场景的音乐内容。</textarea></div><div class="field"><label>展示状态</label><select class="input"><option>上架</option><option>下架</option></select></div><div class="field"><label>排序</label><input class="input" value="1"/></div><div class="field"><label>包含歌单</label><div class="chip active">欧美运动热歌</div> <div class="chip active">跑步节奏</div> <div class="chip active">健身电子乐</div></div><button class="btn primary">保存</button></div></div></div>`,

  deliveries:()=>`
    <div class="page-head"><div class="page-title"><h1>交付记录</h1><p>统一记录在线试听、下载、API 上架、网盘等全部交付行为。</p></div><div class="actions"><button class="btn">导出记录</button><button class="btn primary">+ 创建交付</button></div></div>
    <div class="toolbar"><div class="search"><input placeholder="搜索客户 / 项目 / 歌单 / Delivery ID"/></div><select class="select"><option>客户：全部</option></select><select class="select"><option>方式：全部</option></select><select class="select"><option>状态：全部</option></select></div>
    <div class="card table-card"><div class="table-top"><strong>共 1,281 次交付</strong></div><div class="table-wrap"><table class="table"><thead><tr><th>客户</th><th>项目</th><th>内容</th><th>方式</th><th>数量</th><th>时间</th><th>状态</th><th>操作</th></tr></thead><tbody>
      ${deliveryRow('影石','Insta360','0916 户外旅行','API 上架','8','09-16 14:21')}${deliveryRow('Keep','跑步音乐','跑步 Q4','下载','35','09-15 16:42')}${deliveryRow('南航','机上娱乐','南航_202610','分享链接','185','09-15 11:18')}${deliveryRow('客户 A','门店音乐','秋季门店歌单','网盘','320','09-14 18:10')}
    </tbody></table></div></div>`,

  deliveryDetail:()=>`
    <div class="detail-hero"><div class="detail-title"><div><div class="detail-sub"><span class="link" data-route="deliveries">← 交付记录</span></div><h1 style="margin-top:9px">Delivery #DLV-20260916-0182</h1><div class="detail-sub"><span class="badge green">已完成</span><span>影石 · Insta360</span><span>API 上架</span></div></div><div class="actions"><button class="btn">导出清单</button><button class="btn">查看 API 日志</button></div></div><div class="detail-stats"><div class="detail-stat"><span>歌曲</span><strong>8 首</strong></div><div class="detail-stat"><span>操作人</span><strong>王小明</strong></div><div class="detail-stat"><span>交付时间</span><strong>09-16 14:21</strong></div><div class="detail-stat"><span>关联歌单</span><strong>0916 户外旅行</strong></div></div></div>
    <div class="grid-2"><div class="card table-card"><div class="table-top"><strong>交付歌曲</strong></div><div class="table-wrap"><table class="table" style="min-width:720px"><thead><tr><th>歌曲</th><th>权利快照</th><th>API 状态</th></tr></thead><tbody>${data.tracks.slice(0,4).map((t,i)=>`<tr data-track="${i}" class="clickable"><td><div class="track"><div class="cover ${t.cover}">♪</div><div><div class="track-title">${t.title}</div><div class="track-sub">${t.artist}</div></div></div></td><td>全球 / 短视频 / UGC</td><td><span class="badge green">已上架</span></td></tr>`).join('')}</tbody></table></div></div><div><div class="card card-pad"><div class="card-title"><h3>执行状态</h3></div><div class="list"><div class="list-row"><span class="dot green"></span><div class="list-main"><strong>权利检查</strong><small>通过</small></div></div><div class="list-row"><span class="dot green"></span><div class="list-main"><strong>客户权限检查</strong><small>通过</small></div></div><div class="list-row"><span class="dot green"></span><div class="list-main"><strong>API 上架</strong><small>8 / 8 成功</small></div></div><div class="list-row"><span class="dot green"></span><div class="list-main"><strong>客户可见</strong><small>已同步</small></div></div></div></div><div class="card card-pad" style="margin-top:14px"><div class="card-title"><h3>授权快照</h3></div><div class="key-values"><dt>区域</dt><dd>全球</dd><dt>场景</dt><dd>短视频 / UGC</dd><dt>方式</dt><dd>API 使用</dd><dt>期限</dt><dd>2026-01-01 ~ 2027-12-31</dd></div></div></div></div>`,

  customers:()=>`
    <div class="page-head"><div class="page-title"><h1>客户管理</h1><p>管理客户基本信息、授权范围、客户曲库、API 接入与合作记录。</p></div><div class="actions"><button class="btn primary">+ 新建客户</button></div></div>
    <div class="toolbar"><div class="search"><input placeholder="搜索客户名称 / 联系人 / Client ID"/></div><select class="select"><option>合作状态：全部</option></select><select class="select"><option>接入方式：全部</option></select></div>
    <div class="card table-card"><div class="table-wrap"><table class="table"><thead><tr><th>客户</th><th>合作状态</th><th>可用曲库</th><th>项目</th><th>待处理需求</th><th>接入方式</th><th>最近交付</th><th>操作</th></tr></thead><tbody>
      ${customerRow('影石 Insta360','182,381','4','1','API','今天')}${customerRow('Keep','82,128','3','2','试听 / 下载','昨天')}${customerRow('南航','31,822','2','1','试听链接','昨天')}${customerRow('客户 A','18,221','1','0','网盘','09-01','暂停')}
    </tbody></table></div></div>`,

  customerDetail:()=>`
    <div class="detail-hero"><div class="detail-title"><div><div class="detail-sub"><span class="link" data-route="customers">← 客户管理</span></div><h1 style="margin-top:9px">影石 Insta360</h1><div class="detail-sub"><span class="badge green">合作中</span><span>API 客户</span><span>客户编号 CUS-00182</span></div></div><div class="actions"><button class="btn">新增授权歌曲</button><button class="btn" data-route="requirement-detail">创建需求</button><button class="btn">创建项目</button><button class="btn primary" data-route="delivery-detail">创建交付</button></div></div><div class="detail-stats"><div class="detail-stat"><span>可用曲库</span><strong>182,381</strong></div><div class="detail-stat"><span>已交付</span><strong>18,281</strong></div><div class="detail-stat"><span>项目</span><strong>4</strong></div><div class="detail-stat"><span>待处理需求</span><strong>1</strong></div></div></div>
    <div class="tabs"><button class="tab active">概览</button><button class="tab">客户曲库</button><button class="tab">授权配置</button><button class="tab">API 配置</button><button class="tab">项目</button><button class="tab">需求</button><button class="tab">交付</button><button class="tab">账号</button></div>
    <div class="grid-2"><div><div class="card card-pad"><div class="card-title"><h3>最近需求</h3><a data-route="requirements">全部需求</a></div><div class="list"><div class="list-row"><div class="list-main"><strong class="link" data-route="requirement-detail">户外旅行音乐</strong><small>Insta360 · 09-16</small></div><span class="badge orange">处理中</span></div><div class="list-row"><div class="list-main"><strong>中秋内容</strong><small>Insta360 · 09-09</small></div><span class="badge green">已完成</span></div></div></div><div class="card card-pad" style="margin-top:14px"><div class="card-title"><h3>最近交付</h3><a data-route="deliveries">全部交付</a></div><div class="list"><div class="list-row"><div class="list-main"><strong>09-16 · API</strong><small>0916 户外旅行</small></div><div class="list-meta">8 首</div></div><div class="list-row"><div class="list-main"><strong>09-09 · API</strong><small>中秋内容</small></div><div class="list-meta">7 首</div></div></div></div></div><div><div class="card card-pad"><div class="card-title"><h3>曲库概况</h3><a>查看客户曲库</a></div><div class="metric-list">${metric('欧美','42%',42)}${metric('中文','28%',28)}${metric('日文','10%',10)}${metric('纯音乐','12%',12)}${metric('其他','8%',8)}</div></div><div class="card card-pad" style="margin-top:14px"><div class="card-title"><h3>API 接入</h3></div><div class="key-values"><dt>状态</dt><dd><span class="badge green">正常</span></dd><dt>Client ID</dt><dd>insta360_xxxxxx</dd><dt>今日调用</dt><dd>18,221 次</dd><dt>最近调用</dt><dd>今天 15:21</dd></div></div></div></div>`,

  projects:()=>`
    <div class="page-head"><div class="page-title"><h1>项目管理</h1><p>以客户合作项目为容器，关联需求、歌单、授权范围与交付记录。</p></div><div class="actions"><button class="btn primary">+ 新建项目</button></div></div>
    <div class="toolbar"><div class="search"><input placeholder="搜索项目 / 客户"/></div><select class="select"><option>客户：全部</option></select><select class="select"><option>状态：全部</option></select></div>
    <div class="card table-card"><div class="table-wrap"><table class="table"><thead><tr><th>项目</th><th>客户</th><th>状态</th><th>当前需求</th><th>歌单</th><th>授权范围</th><th>最近交付</th><th>操作</th></tr></thead><tbody>
      ${projectRow('Insta360 相机','影石','1','12','全球 · UGC','今天')}${projectRow('影石无人机','影石','0','3','全球 · UGC','09-12')}${projectRow('跑步音乐','Keep','2','18','中国大陆 · 健身','昨天')}${projectRow('机上娱乐','南航','1','21','中国大陆 · 航空','昨天')}
    </tbody></table></div></div>`,

  projectDetail:()=>`
    <div class="detail-hero"><div class="detail-title"><div><div class="detail-sub"><span class="link" data-route="projects">← 项目管理</span></div><h1 style="margin-top:9px">影石 · Insta360</h1><div class="detail-sub"><span class="badge green">合作中</span><span>项目编号 PRJ-00281</span></div></div><div class="actions"><button class="btn">新增需求</button><button class="btn">创建歌单</button><button class="btn primary">创建交付</button></div></div></div>
    <div class="tabs"><button class="tab active">基本信息</button><button class="tab">需求</button><button class="tab">歌单</button><button class="tab">交付</button><button class="tab">授权范围</button><button class="tab">记录</button></div>
    <div class="grid-2"><div><div class="card card-pad"><div class="card-title"><h3>项目说明</h3></div><p class="muted" style="line-height:1.8;margin:0">Insta360 产品内音乐合作，持续通过 API 增量上架适合运动、旅行、户外、UGC 视频制作的音乐内容。</p><div class="key-values" style="margin-top:18px"><dt>客户</dt><dd>影石 Insta360</dd><dt>负责人</dt><dd>王小明</dd><dt>合作开始</dt><dd>2025-03-18</dd><dt>交付方式</dt><dd>API 持续上架</dd></div></div><div class="card card-pad" style="margin-top:14px"><div class="card-title"><h3>相关歌单</h3><a data-route="playlists">全部</a></div><div class="list"><div class="list-row"><div class="list-main"><strong class="link" data-route="playlist-detail">0916 户外旅行</strong><small>38 首候选 · 客户选择 8 首</small></div><span class="badge green">已交付</span></div><div class="list-row"><div class="list-main"><strong>0909 中秋推荐</strong><small>26 首候选 · 客户选择 7 首</small></div><span class="badge green">已交付</span></div></div></div></div><div><div class="card card-pad"><div class="card-title"><h3>授权范围</h3></div><div class="key-values"><dt>区域</dt><dd>全球</dd><dt>使用场景</dt><dd>UGC / 短视频 / 产品内配乐</dd><dt>访问能力</dt><dd>试听 / API / 文件</dd><dt>有效期</dt><dd>2026-01-01 ~ 2027-12-31</dd></div></div><div class="card card-pad" style="margin-top:14px"><div class="card-title"><h3>当前需求</h3></div><div class="list"><div class="list-row"><div class="list-main"><strong class="link" data-route="requirement-detail">户外旅行音乐</strong><small>每周 7–8 首 · 优先高热度</small></div><span class="badge orange">处理中</span></div></div></div></div></div>`,

  requirements:()=>`
    <div class="page-head"><div class="page-title"><h1>需求管理</h1><p>记录客户提出的内容需求，并串联找歌、歌单、反馈和最终交付。</p></div><div class="actions"><button class="btn primary">+ 新建需求</button></div></div>
    <div class="stats" style="grid-template-columns:repeat(5,1fr)"><div class="card stat"><div class="stat-label">全部</div><div class="stat-value">38</div></div><div class="card stat"><div class="stat-label">待处理</div><div class="stat-value">3</div></div><div class="card stat"><div class="stat-label">处理中</div><div class="stat-value">4</div></div><div class="card stat"><div class="stat-label">待客户反馈</div><div class="stat-value">2</div></div><div class="card stat"><div class="stat-label">本月已完成</div><div class="stat-value">18</div></div></div>
    <div class="toolbar"><div class="search"><input placeholder="搜索需求 / 客户 / 项目"/></div><select class="select"><option>状态：全部</option></select><select class="select"><option>负责人：全部</option></select></div>
    <div class="card table-card"><div class="table-wrap"><table class="table"><thead><tr><th>需求</th><th>客户</th><th>项目</th><th>关键条件</th><th>状态</th><th>负责人</th><th>更新时间</th><th>操作</th></tr></thead><tbody>
      ${requirementRow('户外旅行音乐','影石','Insta360','全球 · 7–8 首 · 高热度','处理中','王小明','今天')}${requirementRow('10 月机上音乐','南航','机上娱乐','≤200 首 · 流媒体热度','待处理','李小雨','今天')}${requirementRow('Q4 跑步音乐','Keep','跑步音乐','120 BPM+ · 英文优先','待客户反馈','张晨','昨天')}
    </tbody></table></div></div>`,

  requirementDetail:()=>`
    <div class="detail-hero"><div class="detail-title"><div><div class="detail-sub"><span class="link" data-route="requirements">← 需求管理</span></div><h1 style="margin-top:9px">户外旅行音乐</h1><div class="detail-sub"><span class="badge orange">处理中</span><span>REQ-20260916-028</span><span>影石 · Insta360</span></div></div><div class="actions"><button class="btn soft" data-route="agent">✦ AI 找歌</button><button class="btn" data-route="playlist-detail">创建歌单</button><button class="btn primary">标记完成</button></div></div></div>
    <div class="grid-2"><div><div class="card card-pad"><div class="card-title"><h3>客户需求</h3></div><p style="line-height:1.8;margin:0">每周提供 7–8 首，适合户外、旅行、运动相机拍摄场景，优先抖音 / 流媒体高热度内容，要求全球可使用。</p></div><div class="card card-pad" style="margin-top:14px"><div class="card-title"><h3>处理结果</h3></div><div class="list"><div class="list-row"><div class="list-main"><strong class="link" data-route="playlist-detail">影石_0916_户外旅行</strong><small>38 首候选 → 客户选择 8 首</small></div><span class="badge green">已反馈</span></div><div class="list-row"><div class="list-main"><strong class="link" data-route="delivery-detail">API 上架</strong><small>8 首 · DLV-20260916-0182</small></div><span class="badge green">已完成</span></div></div></div></div><div><div class="card card-pad"><div class="card-title"><h3>需求条件</h3></div><div class="key-values"><dt>场景</dt><dd>户外 / 旅行</dd><dt>情绪</dt><dd>激励 / 自由</dd><dt>数量</dt><dd>7–8 首</dd><dt>区域</dt><dd>全球</dd><dt>热度</dt><dd>优先高热</dd><dt>交付</dt><dd>API</dd></div></div><div class="card card-pad" style="margin-top:14px"><div class="card-title"><h3>流转时间线</h3></div><div class="timeline"><div class="time-item"><strong>创建需求</strong><small>09-16 09:15 · 王小明</small></div><div class="time-item"><strong>开始处理</strong><small>09-16 09:32</small></div><div class="time-item"><strong>创建候选歌单 38 首</strong><small>09-16 10:10</small></div><div class="time-item"><strong>发送客户试听</strong><small>09-16 10:25</small></div><div class="time-item"><strong>客户选中 8 首</strong><small>09-16 14:03</small></div><div class="time-item"><strong>API 上架完成</strong><small>09-16 14:21</small></div></div></div></div></div>`,

  agent:()=>`
    <div class="page-head"><div class="page-title"><h1>AI Agent</h1><p>用自然语言调用曲库、权利、客户、歌单与交付能力，帮助运营和商务快速完成工作。</p></div></div>
    <div class="agent-layout"><div class="card agent-console"><div class="agent-title"><h2>✦ 今天想处理什么？</h2><p class="muted">可以直接描述客户、场景、权利范围和期望结果。</p></div><div class="prompt-box"><input value="给影石找 20 首适合无人机旅行视频的歌，全球可用，最近三个月没交过，优先高热度"/><button class="btn primary" id="runAgent">执行</button></div><div class="quick-grid"><button class="quick">🔎 查曲库<br><span class="muted">数量 / 类型 / 权利</span></button><button class="quick">♫ 生成歌单<br><span class="muted">按需求自动组织</span></button><button class="quick">▦ 分析曲库<br><span class="muted">分布与覆盖</span></button><button class="quick">◎ 处理客户需求<br><span class="muted">从需求到交付</span></button><button class="quick">↺ 查客户历史<br><span class="muted">排除已交付</span></button><button class="quick">✓ 检查授权<br><span class="muted">区域 / 场景 / 期限</span></button></div><div class="steps"><h3 style="font-size:14px">执行过程</h3><div class="step"><span class="state">✓</span><span>识别客户：影石 Insta360</span></div><div class="step"><span class="state">✓</span><span>读取项目授权范围：全球 / UGC / 短视频</span></div><div class="step"><span class="state">✓</span><span>检索可商用曲库：82,319 首</span></div><div class="step"><span class="state">✓</span><span>排除近 3 个月已交付歌曲：-1,283 首</span></div><div class="step"><span class="state">✓</span><span>筛选户外 / 旅行 / 高热度：481 首</span></div><div class="step running"><span class="state">●</span><span>正在计算推荐排序并生成 20 首候选……</span></div></div></div><div><div class="card card-pad"><div class="card-title"><h3>结果预览</h3></div><div class="list">${data.tracks.slice(0,4).map((t,i)=>`<div class="list-row" data-track="${i}"><div class="cover ${t.cover}">♪</div><div class="list-main"><strong>${t.title}</strong><small>${t.artist} · ${t.tags}</small></div><span class="badge blue">${t.heat}</span></div>`).join('')}</div><div class="actions" style="margin-top:14px"><button class="btn" data-route="playlist-detail">保存为歌单</button><button class="btn primary" data-route="requirement-detail">添加到需求</button></div></div></div></div>`,

  settings:()=>`
    <div class="page-head"><div class="page-title"><h1>系统设置</h1><p>管理成员、角色、权限组和基础配置。</p></div></div><div class="grid-3"><div class="card card-pad"><div class="card-title"><h3>成员与角色</h3></div><p class="muted">管理员、曲库运营、商务、版权运营、只读查询。</p><button class="btn">管理成员</button></div><div class="card card-pad"><div class="card-title"><h3>权限组</h3></div><p class="muted">页面权限、操作权限与数据访问范围。</p><button class="btn">管理权限</button></div><div class="card card-pad"><div class="card-title"><h3>操作日志</h3></div><p class="muted">记录曲库、客户、交付和授权的关键操作。</p><button class="btn">查看日志</button></div></div>`
};

function metric(name,val,width){return `<div class="metric-row"><span>${name}</span><div class="bar"><span style="width:${width}%"></span></div><span class="metric-num">${val}</span></div>`}
function metricCard(title,rows){return `<div class="card card-pad"><div class="card-title"><h3>${title}</h3><a data-route="catalog-search">查看歌曲</a></div><div class="metric-list">${rows.map(r=>metric(r[0],r[1],r[2])).join('')}</div></div>`}
function playlistRow(name,type,count,relation,use,time){return `<tr class="clickable" data-route="playlist-detail"><td><strong>${name}</strong></td><td><span class="badge blue">${type}</span></td><td>${count}</td><td>${relation}</td><td>${use}</td><td>${time}</td><td><span class="link">查看</span></td></tr>`}
function categoryRow(name,count,status,sort){return `<tr><td><strong>${name}</strong></td><td>${count}</td><td><span class="badge ${status==='已上架'?'green':''}">${status}</span></td><td>${sort}</td><td><span class="link">编辑</span></td></tr>`}
function deliveryRow(customer,project,content,method,count,time){return `<tr class="clickable" data-route="delivery-detail"><td><strong>${customer}</strong></td><td>${project}</td><td>${content}</td><td><span class="badge blue">${method}</span></td><td>${count}</td><td>${time}</td><td><span class="badge green">已完成</span></td><td><span class="link">查看</span></td></tr>`}
function customerRow(name,catalog,projects,req,method,last,status='合作中'){return `<tr class="clickable" data-route="customer-detail"><td><strong>${name}</strong></td><td><span class="badge ${status==='合作中'?'green':'orange'}">${status}</span></td><td>${catalog}</td><td>${projects}</td><td>${req}</td><td>${method}</td><td>${last}</td><td><span class="link">查看</span></td></tr>`}
function projectRow(name,customer,req,playlists,rights,last){return `<tr class="clickable" data-route="project-detail"><td><strong>${name}</strong></td><td>${customer}</td><td><span class="badge green">合作中</span></td><td>${req}</td><td>${playlists}</td><td>${rights}</td><td>${last}</td><td><span class="link">查看</span></td></tr>`}
function requirementRow(name,customer,project,conditions,status,owner,time){let cls=status==='处理中'?'orange':status==='待客户反馈'?'purple':'blue';return `<tr class="clickable" data-route="requirement-detail"><td><strong>${name}</strong></td><td>${customer}</td><td>${project}</td><td>${conditions}</td><td><span class="badge ${cls}">${status}</span></td><td>${owner}</td><td>${time}</td><td><span class="link">查看</span></td></tr>`}

const routes={
  'dashboard':{title:'工作台',render:Page.dashboard},
  'catalog-search':{title:'曲库 / 曲库检索',render:Page.catalogSearch},
  'catalog-dashboard':{title:'曲库 / 曲库看板',render:Page.catalogDashboard},
  'tags':{title:'曲库 / 标签管理',render:Page.tags},
  'playlists':{title:'歌单与交付 / 歌单管理',render:Page.playlists},
  'playlist-detail':{title:'歌单与交付 / 歌单详情',render:Page.playlistDetail,parent:'playlists'},
  'categories':{title:'歌单与交付 / 分类管理',render:Page.categories},
  'deliveries':{title:'歌单与交付 / 交付记录',render:Page.deliveries},
  'delivery-detail':{title:'歌单与交付 / 交付详情',render:Page.deliveryDetail,parent:'deliveries'},
  'customers':{title:'客户 / 客户管理',render:Page.customers},
  'customer-detail':{title:'客户 / 客户详情',render:Page.customerDetail,parent:'customers'},
  'projects':{title:'客户 / 项目管理',render:Page.projects},
  'project-detail':{title:'客户 / 项目详情',render:Page.projectDetail,parent:'projects'},
  'requirements':{title:'客户 / 需求管理',render:Page.requirements},
  'requirement-detail':{title:'客户 / 需求详情',render:Page.requirementDetail,parent:'requirements'},
  'agent':{title:'AI Agent',render:Page.agent},
  'settings':{title:'系统设置',render:Page.settings}
};

function routeTo(name,push=true){
  const r=routes[name]||routes.dashboard;
  $('#workspace').innerHTML=r.render();
  $('#breadcrumb').innerHTML=r.title.split(' / ').map((x,i,a)=>i===a.length-1?`<b>${x}</b>`:x).join(' / ');
  $$('.nav-item[data-route]').forEach(el=>el.classList.remove('active'));
  const active=r.parent||name;
  const nav=$(`.nav-item[data-route="${active}"]`); if(nav) nav.classList.add('active');
  if(push) history.pushState({route:name},'',`#${name}`);
  window.scrollTo(0,0);
}

function openTrack(i){
  const t=data.tracks[i]||data.tracks[0];
  $('#drawerContent').innerHTML=`<button class="drawer-close" id="drawerClose">×</button><div class="track"><div class="cover ${t.cover}" style="width:56px;height:56px">♪</div><div><h2 style="margin:0 0 5px">${t.title}</h2><div class="muted">${t.artist}</div></div></div><div class="player"><div style="display:flex;justify-content:space-between"><b>▶ 试听</b><span class="muted">03:20</span></div><div class="wave">${[8,15,22,12,29,17,31,24,11,28,33,18,25,13,30,20,9,26,15,32,18,24,11,28,20,15,30,23,9,18,25,12].map(h=>`<i style="height:${h}px"></i>`).join('')}</div></div><div class="tabs"><button class="tab active">基本信息</button><button class="tab">权利</button><button class="tab">标签</button><button class="tab">文件</button><button class="tab">交付</button></div><dl class="key-values"><dt>语言</dt><dd>${t.lang}</dd><dt>BPM</dt><dd>${t.bpm}</dd><dt>热度</dt><dd>${t.heat}</dd><dt>标签</dt><dd>${t.tags}</dd><dt>授权</dt><dd>${t.rights}</dd><dt>商用状态</dt><dd><span class="badge green">可商用</span></dd><dt>UID</dt><dd>TRK-29A81C${i}</dd><dt>ISRC</dt><dd>QZ-KJ2-26-10${i}8</dd></dl><div class="actions" style="margin-top:22px"><button class="btn">加入歌单</button><button class="btn">给客户授权</button><button class="btn primary">创建交付</button></div>`;
  $('#drawerMask').classList.add('open');
}

document.addEventListener('click',e=>{
  const routeEl=e.target.closest('[data-route]');
  if(routeEl){e.preventDefault();routeTo(routeEl.dataset.route);return}
  const tr=e.target.closest('[data-track]');
  if(tr){openTrack(Number(tr.dataset.track));return}
  if(e.target.id==='drawerClose'||e.target.id==='drawerMask') $('#drawerMask').classList.remove('open');
});

window.addEventListener('popstate',()=>routeTo(location.hash.replace('#','')||'dashboard',false));
document.addEventListener('DOMContentLoaded',()=>routeTo(location.hash.replace('#','')||'dashboard',false));
