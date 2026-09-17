const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const icons = {
  home:'<path d="m3 10 9-7 9 7"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-7h6v7"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
  sparkles:'<path d="m12 3-1.2 3.4L7.5 7.6l3.3 1.2L12 12l1.2-3.2 3.3-1.2-3.3-1.2L12 3Z"/><path d="m5 14-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14Z"/><path d="m18 14-.8 2.2L15 17l2.2.8L18 20l.8-2.2L21 17l-2.2-.8L18 14Z"/>',
  folder:'<path d="M3 6h6l2 2h10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"/>',
  listMusic:'<path d="M8 6h13M8 12h13M8 18h7"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
  library:'<path d="M4 4v16M9 4v16"/><path d="m14 5 4-1 3 15-4 1-3-15Z"/>',
  code:'<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21h-4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V3h4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  panelLeft:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
  chevronsUpDown:'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',
  arrowUpRight:'<path d="M7 17 17 7M7 7h10v10"/>',
  ellipsis:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  briefcaseBusiness:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
  chevronDown:'<path d="m6 9 6 6 6-6"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  circleHelp:'<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.6 2.1c-.9.5-1.4 1-1.4 2M12 17h.01"/>',
  music:'<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  download:'<path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M5 20h14"/>',
  upload:'<path d="M12 16V4m0 0 4 4m-4-4-4 4"/><path d="M5 20h14"/>',
  heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  play:'<path d="m8 5 11 7-11 7V5Z"/>',
  pause:'<path d="M9 5v14M15 5v14"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  sliders:'<path d="M4 7h10M18 7h2M4 17h4M12 17h8M14 5v4M8 15v4"/>',
  layoutList:'<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
  grid:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
  sort:'<path d="M3 6h18M6 12h12M10 18h4"/>',
  x:'<path d="m6 6 12 12M18 6 6 18"/>',
  wand:'<path d="m15 4 5 5L7 22l-5-5L15 4Z"/><path d="m14 5 5 5M6 4v3M4.5 5.5h3M19 16v4M17 18h4"/>',
  send:'<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
  paperclip:'<path d="m20.5 11.5-8.9 8.9a6 6 0 0 1-8.5-8.5l9.6-9.6a4 4 0 0 1 5.7 5.7l-9.6 9.6a2 2 0 1 1-2.8-2.8l8.9-8.9"/>',
  copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  key:'<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.8 12.2 8.7-8.7M15 8l2 2M18 5l2 2"/>',
  webhook:'<path d="M18 16.5a4 4 0 0 0 0-8h-1M6 8.5a4 4 0 0 0 0 8h1M8 12h8"/>',
  bot:'<rect x="4" y="7" width="16" height="13" rx="3"/><path d="M12 3v4M8 12h.01M16 12h.01M9 16h6"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  userPlus:'<path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8" cy="7" r="4"/><path d="M19 8v6M16 11h6"/>',
  building:'<path d="M3 21h18M6 21V5l6-3 6 3v16M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1"/>',
  creditCard:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/>',
  lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  filter:'<path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z"/>',
  moreHorizontal:'<path d="M5 12h.01M12 12h.01M19 12h.01"/>',
  externalLink:'<path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
  refresh:'<path d="M20 6v5h-5M4 18v-5h5"/><path d="M18.5 9A7 7 0 0 0 6 6L4 8M5.5 15A7 7 0 0 0 18 18l2-2"/>'
};

function icon(name, cls=''){
  const key=name.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
  return `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${icons[key]||icons.music}</svg>`;
}

function hydrateIcons(root=document){
  $$('[data-icon]',root).forEach(el=>{
    if(el.dataset.hydrated) return;
    el.insertAdjacentHTML('afterbegin',icon(el.dataset.icon));
    el.dataset.hydrated='1';
  });
}

const navGroups = [
  {label:'工作区',items:[{id:'home',label:'工作台',icon:'home'}]},
  {label:'内容发现',items:[{id:'catalog',label:'曲库搜索',icon:'search'},{id:'discover',label:'分类浏览',icon:'compass'},{id:'ai',label:'AI 找歌',icon:'sparkles',badge:'AI'}]},
  {label:'项目协作',items:[{id:'projects',label:'我的项目',icon:'folder',badge:'4'},{id:'playlists',label:'歌单',icon:'list-music'}]},
  {label:'内容使用',items:[{id:'content',label:'我的内容',icon:'library',badge:'12'}]},
  {label:'系统',items:[{id:'developer',label:'接入中心',icon:'code'},{id:'settings',label:'管理',icon:'settings'}]}
];

const tracks = [
  {id:'ST-310284',title:'Never Stop Moving',artist:'Neon Avenue',genre:'Electronic · Pop',mood:['活力','积极'],bpm:124,duration:'03:12',vocal:'女声',status:'可使用',cover:'c1',match:'96%'},
  {id:'ST-284911',title:'Running Into Light',artist:'Mia Carter',genre:'Pop · Dance',mood:['明亮','运动'],bpm:118,duration:'02:46',vocal:'女声',status:'可使用',cover:'c2',match:'94%'},
  {id:'ST-401237',title:'Forward Motion',artist:'Northline',genre:'Electronic',mood:['科技','坚定'],bpm:120,duration:'03:04',vocal:'纯音乐',status:'可使用',cover:'c3',match:'92%'},
  {id:'ST-229850',title:'Open Road',artist:'Atlas Weekend',genre:'Indie Pop',mood:['自由','旅行'],bpm:110,duration:'03:29',vocal:'男声',status:'可使用',cover:'c4',match:'89%'},
  {id:'ST-376612',title:'Pulse Theory',artist:'Lumen Club',genre:'House · Electronic',mood:['能量','未来'],bpm:128,duration:'02:58',vocal:'纯音乐',status:'可使用',cover:'c5',match:'87%'},
  {id:'ST-194720',title:'Skyline Stories',artist:'June Harbor',genre:'Pop',mood:['温暖','城市'],bpm:106,duration:'03:36',vocal:'女声',status:'可使用',cover:'c2',match:'84%'},
  {id:'ST-451083',title:'Quiet Momentum',artist:'Paper Satellites',genre:'Ambient · Electronic',mood:['专注','平静'],bpm:96,duration:'04:10',vocal:'纯音乐',status:'可使用',cover:'c4',match:'82%'},
  {id:'ST-338107',title:'Higher Ground',artist:'Signal Fires',genre:'Rock · Pop',mood:['激励','热血'],bpm:132,duration:'03:21',vocal:'男声',status:'可使用',cover:'c3',match:'79%'}
];

const state = {route:'home',query:'',contentTab:'online',playing:null,favorites:new Set(),selectedFilters:new Set(['Electronic','活力'])};
const workspace = $('#workspace');

function renderNav(){
  $('#sideNav').innerHTML = navGroups.map(group=>`<div class="nav-group"><div class="nav-group-title">${group.label}</div>${group.items.map(item=>`<button class="nav-item" data-route="${item.id}" title="${item.label}">${icon(item.icon)}<span class="nav-label">${item.label}</span>${item.badge?`<span class="nav-badge">${item.badge}</span>`:''}</button>`).join('')}</div>`).join('');
}

function updateActiveNav(){
  $$('.nav-item').forEach(el=>el.classList.toggle('active',el.dataset.route===state.route));
}

function metricCard(label,value,foot,ico,trend=''){
  return `<div class="metric-card"><div class="metric-top"><span class="metric-label">${label}</span><span class="metric-icon">${icon(ico)}</span></div><div class="metric-value">${value}</div><div class="metric-foot">${trend?`<span class="${trend.includes('+')?'trend-up':'trend-warn'}">${trend}</span>`:''}<span>${foot}</span></div></div>`;
}

function pageHead(title,desc,actions=''){
  return `<div class="page-head"><div><h1>${title}</h1><p>${desc}</p></div><div class="page-actions">${actions}</div></div>`;
}

function cover(track,index=0){
  const cls=track.cover==='c1'?'':track.cover;
  return `<div class="cover-mini ${cls}"><span>${track.artist.split(' ').map(x=>x[0]).join('').slice(0,2)}</span><button class="play-track" data-track="${track.id}" aria-label="播放">${icon(state.playing===track.id?'pause':'play')}</button></div>`;
}

function homePage(){
  return `${pageHead('工作台','从已授权的完整曲库开始，完成内容发现、项目协作和业务接入。',`<button class="btn" data-route="developer">${icon('code')}接入中心</button><button class="btn btn-primary" data-route="projects">${icon('plus')}新建项目</button>`)}
  <section class="hero-card">
    <div class="hero-copy"><div class="eyebrow">STARLINK CATALOG ACCESS</div><h2>找到现在就能用的音乐</h2><p>搜索歌曲、艺人、场景或直接描述需求。结果只来自当前项目已获得授权的内容。</p>
      <div class="hero-search">${icon('search')}<input id="heroSearchInput" placeholder="例如：适合户外跑步，节奏感强，100–130 BPM，纯音乐"/><button class="btn btn-primary" id="heroSearchBtn">搜索曲库</button></div>
      <div class="hero-hint"><span>试试：</span><button data-query="运动 · 高能量 · 纯音乐">运动高能量</button><button data-query="科技感 · 未来 · 中等能量">科技未来感</button><button data-query="睡眠 · 舒缓 · 无人声">睡眠舒缓</button></div>
    </div>
  </section>
  <section class="section grid grid-4">${metricCard('可访问音乐','184,320','基于当前授权范围','music','+2,143 本月')}${metricCard('当前项目已上架','12,840','Keep App · 2026 Q4','upload','+326 本月')}${metricCard('歌单与收藏','18','3 个协作歌单','heart')}${metricCard('API 本月调用','68.4K','配额 100K · 68.4%','chart','正常')}</section>
  <section class="section split-layout">
    <div class="panel"><div class="panel-head"><h3>继续工作</h3><button class="section-link" data-route="projects">查看全部</button></div><div class="panel-body">
      <div class="activity-list">
        <div class="activity-item"><span class="activity-icon">${icon('folder')}</span><span class="activity-copy"><strong>Keep App · 2026 Q4</strong><small>跑步场景歌单 · 42 首候选音乐</small></span><span class="activity-side">12 分钟前</span></div>
        <div class="activity-item"><span class="activity-icon">${icon('list-music')}</span><span class="activity-copy"><strong>新品发布会 · 科技感 BGM</strong><small>协作歌单 · 18 首 · 3 位成员</small></span><span class="activity-side">今天</span></div>
        <div class="activity-item"><span class="activity-icon">${icon('sparkles')}</span><span class="activity-copy"><strong>AI 找歌：轻快、户外、无中文</strong><small>已保存 12 首结果到「跑步场景」</small></span><span class="activity-side">昨天</span></div>
      </div>
    </div>
    <div class="panel"><div class="panel-head"><h3>待处理</h3><span class="status pending">3 项</span></div><div class="panel-body">
      <div class="task-item"><i class="task-dot"></i><span class="task-copy"><strong>待确认上架</strong><small>Keep App · 跑步场景</small></span><span class="task-count">12</span></div>
      <div class="task-item"><i class="task-dot" style="background:#22a17a"></i><span class="task-copy"><strong>歌单有新内容</strong><small>编辑精选 · 本周新增</small></span><span class="task-count">36</span></div>
      <div class="task-item"><i class="task-dot" style="background:#d99032"></i><span class="task-copy"><strong>API Key 即将过期</strong><small>Production Key · 7 天后</small></span><span class="task-count">1</span></div>
    </div>
  </section>
  <section class="section"><div class="section-head"><div class="section-title"><h2>常用入口</h2><span>快速开始一个任务</span></div></div><div class="grid grid-4">
    <div class="quick-card brand" data-route="catalog"><span class="quick-icon">${icon('search')}</span><h3>搜索全曲库</h3><p>通过标签、高级筛选和精确字段快速定位音乐。</p></div>
    <div class="quick-card" data-route="ai"><span class="quick-icon">${icon('sparkles')}</span><h3>用自然语言找歌</h3><p>描述业务场景，由 AI 自动理解并转换为曲库条件。</p></div>
    <div class="quick-card" data-route="content"><span class="quick-icon">${icon('upload')}</span><h3>管理已上架内容</h3><p>查看当前业务系统已使用的音乐及更新状态。</p></div>
    <div class="quick-card" data-route="developer"><span class="quick-icon">${icon('code')}</span><h3>接入 API / AI</h3><p>通过 Search API、Catalog API 和 Agent 能力访问曲库。</p></div>
  </div></section>`;
}

function filterOption(label,count,selected=false){return `<div class="filter-option ${selected?'selected':''}" data-filter="${label}"><span class="check">${selected?icon('check'):''}</span><span>${label}</span><span style="margin-left:auto;color:#a4aab4">${count}</span></div>`}

function trackRow(track,head=false){
  if(head)return `<div class="track-row head"><span></span><span>歌曲</span><span>风格 / 情绪</span><span>BPM</span><span>人声</span><span>时长</span><span style="text-align:right">操作</span></div>`;
  return `<div class="track-row" data-title="${track.title.toLowerCase()} ${track.artist.toLowerCase()} ${track.genre.toLowerCase()} ${track.mood.join(' ')}"><div>${cover(track)}</div><div class="track-main"><div class="track-title">${track.title}</div><div class="track-sub">${track.artist} · ${track.id}</div></div><div class="track-cell"><div class="tag-list"><span class="tag">${track.genre.split(' · ')[0]}</span><span class="tag">${track.mood[0]}</span></div></div><div class="track-cell">${track.bpm}</div><div class="track-cell">${track.vocal}</div><div class="track-cell">${track.duration}</div><div class="track-actions"><button class="icon-btn favorite-track ${state.favorites.has(track.id)?'active':''}" data-track="${track.id}" title="收藏">${icon('heart')}</button><button class="btn btn-sm add-track" data-track="${track.id}">${icon('plus')}加入</button><button class="icon-btn get-track" data-track="${track.id}" title="获取">${icon('download')}</button><button class="icon-btn" title="更多">${icon('more-horizontal')}</button></div></div>`;
}

function catalogPage(){
  const query = state.query ? `“${state.query}”` : '全部授权内容';
  return `${pageHead('曲库搜索','在当前授权范围内搜索、试听、筛选并加入项目。',`<button class="btn">${icon('refresh')}保存搜索</button><button class="btn btn-soft" data-route="ai">${icon('sparkles')}AI 找歌</button>`)}
  <div class="catalog-toolbar"><div class="catalog-search-row"><div class="catalog-search">${icon('search')}<input id="catalogSearchInput" value="${state.query}" placeholder="歌曲、艺人、ISRC、标签或场景描述"/><button class="icon-btn" id="clearCatalogSearch" title="清空">${icon('x')}</button></div><button class="btn" id="advancedFilterBtn">${icon('sliders')}高级筛选 <span class="filter-count">2</span></button><button class="btn btn-primary" id="catalogSearchBtn">搜索</button></div>
    <div class="filter-strip"><button class="filter-chip active">Electronic ${icon('x')}</button><button class="filter-chip active">活力 ${icon('x')}</button><button class="filter-chip">场景 ${icon('chevron-down')}</button><button class="filter-chip">语言 ${icon('chevron-down')}</button><button class="filter-chip">人声 ${icon('chevron-down')}</button><button class="filter-chip">BPM ${icon('chevron-down')}</button><button class="filter-chip">时长 ${icon('chevron-down')}</button><button class="filter-chip">授权能力 ${icon('chevron-down')}</button></div>
  </div>
  <div class="catalog-layout">
    <aside class="filter-panel"><div class="filter-panel-head"><strong>筛选条件</strong><button class="clear-link">清空全部</button></div>
      <div class="filter-section"><div class="filter-section-title">风格 <span>−</span></div>${filterOption('Pop','32.4K')}${filterOption('Electronic','28.1K',true)}${filterOption('Hip-Hop','16.7K')}${filterOption('Rock','14.2K')}${filterOption('Classical','9.8K')}</div>
      <div class="filter-section"><div class="filter-section-title">情绪 <span>−</span></div>${filterOption('活力','21.8K',true)}${filterOption('快乐','19.6K')}${filterOption('放松','17.4K')}${filterOption('高级','8.9K')}${filterOption('紧张','5.4K')}</div>
      <div class="filter-section"><div class="filter-section-title">BPM <span>−</span></div><div class="range-line"><div class="range-box">80</div><span style="font-size:9px;color:#aaa">—</span><div class="range-box">140</div></div></div>
      <div class="filter-section"><div class="filter-section-title">能力 <span>−</span></div>${filterOption('可下载','152K')}${filterOption('支持 Stems','36K')}${filterOption('可 API 获取','184K')}</div>
    </aside>
    <section class="catalog-results"><div class="result-head"><div class="result-meta"><strong>${query}</strong> · 48,392 首结果</div><div class="view-actions"><button class="btn btn-sm">推荐排序 ${icon('chevron-down')}</button><button class="icon-btn">${icon('layout-list')}</button><button class="icon-btn">${icon('grid')}</button></div></div><div class="track-list">${trackRow(null,true)}${tracks.map(trackRow).join('')}<div class="load-more">加载更多结果</div></div></section>
  </div>`;
}

function discoverPage(){
  const cards=[['运动健身','12,840 首',''],['科技与未来','8,420 首','a2'],['广告与品牌','10,316 首','a3'],['睡眠与疗愈','7,905 首','a4'],['旅行与探索','9,284 首','a5'],['游戏与电竞','11,205 首','a4'],['影视氛围','14,820 首','a3'],['儿童内容','5,610 首','a2'],['办公与专注','6,930 首','a5'],['节日与活动','4,830 首','']];
  return `${pageHead('分类浏览','从业务场景、情绪和曲风出发，探索当前可用的音乐。',`<button class="btn" data-route="catalog">${icon('search')}搜索全曲库</button>`)}
  <div class="discover-hero"><div class="feature-banner"><div class="feature-content"><div class="eyebrow">EDITOR'S PICK · THIS WEEK</div><h2>运动与户外精选</h2><p>为跑步、训练、户外视频和运动产品整理的一组高能量曲目，覆盖 100–145 BPM。</p><button class="btn" data-query="运动 户外 高能量">浏览 128 首精选</button></div></div><div class="mini-discover-stack"><div class="mini-feature tint" data-route="discover"><span>本周新增</span><strong>2,143 首新音乐</strong><div class="icon-bubble">${icon('music')}</div></div><div class="mini-feature" data-route="ai"><span>不知道怎么搜？</span><strong>直接描述使用场景</strong><div class="icon-bubble">${icon('sparkles')}</div></div></div></div>
  <section class="section"><div class="section-head"><div class="section-title"><h2>按业务场景探索</h2><span>常用内容需求</span></div><button class="section-link">查看全部</button></div><div class="scene-grid">${cards.map((c,i)=>`<div class="discover-card" data-query="${c[0]}"><div class="discover-art ${c[2]}"></div><div class="discover-copy"><strong>${c[0]}</strong><small>${c[1]}</small></div></div>`).join('')}</div></section>
  <section class="section"><div class="section-head"><div class="section-title"><h2>按情绪与曲风</h2><span>更快缩小范围</span></div></div><div class="grid grid-4"><div class="quick-card" data-query="快乐 明亮"><span class="quick-icon">${icon('sparkles')}</span><h3>快乐 / 明亮</h3><p>19,620 首 · Pop / Indie / Electronic</p></div><div class="quick-card" data-query="高级 氛围"><span class="quick-icon">${icon('sparkles')}</span><h3>高级 / 氛围</h3><p>8,940 首 · Ambient / Electronic</p></div><div class="quick-card" data-query="热血 激励"><span class="quick-icon">${icon('sparkles')}</span><h3>热血 / 激励</h3><p>11,370 首 · Rock / Pop / Hip-Hop</p></div><div class="quick-card" data-query="放松 平静"><span class="quick-icon">${icon('sparkles')}</span><h3>放松 / 平静</h3><p>17,430 首 · Ambient / Acoustic</p></div></div></section>`;
}

function aiResultRow(track){return `<div class="ai-track"><div>${cover(track)}</div><div class="track-main"><div class="track-title">${track.title}</div><div class="track-sub">${track.artist} · ${track.genre}</div></div><div class="similarity">${track.match} 匹配</div><div class="track-actions"><button class="icon-btn favorite-track" data-track="${track.id}">${icon('heart')}</button><button class="btn btn-sm add-track" data-track="${track.id}">${icon('plus')}加入</button></div></div>`}
function aiPage(){
  return `${pageHead('AI 找歌','像和音乐编辑沟通一样描述需求，AI 会把自然语言转换成可解释的曲库搜索。',`<button class="btn">${icon('clock')}历史记录</button>`)}
  <div class="ai-layout"><section class="ai-chat"><div class="ai-chat-head"><strong>新的找歌会话</strong><span class="ai-badge">${icon('sparkles')} Catalog AI</span></div><div class="ai-thread" id="aiThread">
    <div class="message"><span class="message-avatar">KH</span><div class="message-bubble">帮我找一批适合新能源车发布会的视频 BGM，要有科技感和未来感，但不要太激烈，100–120 BPM，纯音乐。</div></div>
    <div class="message ai"><span class="message-avatar">${icon('sparkles')}</span><div class="message-bubble">已理解。优先搜索 Electronic / Ambient，控制能量在中等水平，并排除人声。<div class="query-logic"><span class="tag">场景 · 科技/广告</span><span class="tag">情绪 · 未来/高级</span><span class="tag">BPM · 100–120</span><span class="tag">纯音乐</span></div></div></div>
  </div><div class="ai-prompts"><button class="prompt-chip" data-ai-prompt="再轻一点，不要电子感那么强">再轻一点</button><button class="prompt-chip" data-ai-prompt="只要纯音乐，适合 15 秒短视频">适合 15 秒视频</button><button class="prompt-chip" data-ai-prompt="找和第一首最接近的音乐">找相似音乐</button></div><div class="ai-compose"><textarea id="aiInput" placeholder="继续描述需求，例如：更轻、更高级、加入钢琴元素……"></textarea><div class="compose-actions"><div class="compose-left"><button class="icon-btn" title="添加参考音乐">${icon('paperclip')}</button><button class="icon-btn" title="搜索条件">${icon('sliders')}</button></div><button class="btn btn-primary" id="aiSend">发送 ${icon('send')}</button></div></div></section>
  <section class="ai-results"><div class="ai-results-head"><strong>推荐结果 · 32 首</strong><div class="page-actions"><button class="btn btn-sm">匹配度 ${icon('chevron-down')}</button><button class="btn btn-sm">${icon('list-music')}保存为歌单</button></div></div><div class="ai-result-body"><div class="ai-summary"><span>基于 4 个条件生成 · 当前结果全部在「Keep App · 2026 Q4」授权范围内</span><button class="section-link">查看搜索逻辑</button></div>${tracks.slice(0,6).map(aiResultRow).join('')}</div></section></div>`;
}

function projectsPage(){
  const projects=[['Keep App · 2026 Q4','运动 / 睡眠 / 冥想内容更新','84','12,840','KH','LS','CY'],['海外短视频素材库','短视频配乐与模板素材','36','6,280','KH','WW'],['智能硬件 · Sound Box','设备端离线音乐内容','24','3,420','KH','ZY','LS'],['品牌内容中台','市场与广告部门日常选曲','18','1,160','KH','MT']];
  return `${pageHead('我的项目','以产品、业务线或内容需求组织候选音乐、歌单和上架内容。',`<button class="btn">${icon('filter')}筛选</button><button class="btn btn-primary" id="createProject">${icon('plus')}新建项目</button>`)}
  <div class="grid grid-3">${projects.map((p,i)=>`<article class="project-card"><div class="project-card-top"><span class="project-icon-lg">${icon('folder')}</span><span class="status ${i===3?'neutral':''}">${i===3?'归档':'进行中'}</span></div><h3>${p[0]}</h3><p>${p[1]}</p><div class="project-meta"><div>候选音乐<strong>${p[2]} 首</strong></div><div>已上架<strong>${p[3]} 首</strong></div></div><div class="avatar-stack">${p.slice(4).map(x=>`<span class="avatar-sm">${x}</span>`).join('')}<span class="avatar-sm more">+2</span></div></article>`).join('')}</div>
  <section class="section"><div class="section-head"><div class="section-title"><h2>最近项目内容</h2><span>Keep App · 2026 Q4</span></div><button class="section-link" data-route="content">查看已上架</button></div><div class="table-card"><div class="data-row head"><span>内容</span><span>归属歌单</span><span>状态</span><span>负责人</span><span>更新时间</span><span>操作</span></div>${[['跑步场景 · 高能量','42 首','待确认','客户管理员','12 分钟前'],['睡眠场景 · 环境音乐','68 首','已上架','李思','今天'],['冥想场景 · 轻音乐','35 首','筛选中','陈雨','昨天'],['新品活动 · 科技氛围','18 首','待确认','客户管理员','9 月 15 日']].map(r=>`<div class="data-row"><div class="data-main"><strong>${r[0]}</strong><small>${r[1]}</small></div><div class="data-cell">Keep App</div><div><span class="status ${r[2]==='待确认'?'pending':r[2]==='筛选中'?'neutral':''}">${r[2]}</span></div><div class="data-cell">${r[3]}</div><div class="data-cell">${r[4]}</div><div><button class="icon-btn">${icon('more-horizontal')}</button></div></div>`).join('')}</div></section>`;
}

function playlistsPage(){
  const lists=[['跑步场景 · 高能量','42 首','', '今天更新'],['新品发布会 · 科技感 BGM','18 首','c2','3 人协作'],['睡眠场景 · 深度放松','68 首','c3','昨天更新'],['户外旅行 · 轻快明亮','36 首','c4','本周更新'],['广告备选 · 高级氛围','24 首','c2','私有歌单'],['本周新歌待选','52 首','c3','自动更新']];
  return `${pageHead('歌单','保存筛选结果、项目候选内容，并与团队协作完成选曲。',`<button class="btn">${icon('users')}协作歌单</button><button class="btn btn-primary" id="createPlaylist">${icon('plus')}新建歌单</button>`)}
  <div class="tabs"><button class="tab active">全部歌单 · 18</button><button class="tab">我创建的</button><button class="tab">与我协作</button><button class="tab">智能歌单</button></div>
  <div class="grid grid-3">${lists.map((l,i)=>`<article class="collection-card"><div class="collection-art ${l[2]}"><span class="count">${l[1]}</span></div><div class="collection-copy"><strong>${l[0]}</strong><small>${l[3]}</small></div></article>`).join('')}</div>`;
}

const contentRows = {
  online:[['Never Stop Moving','Neon Avenue','Keep App','2026-09-17','API + 下载','正常'],['Running Into Light','Mia Carter','Keep App','2026-09-17','API','正常'],['Forward Motion','Northline','Sound Box','2026-09-16','批量交付','正常'],['Open Road','Atlas Weekend','海外短视频','2026-09-16','API','正常'],['Pulse Theory','Lumen Club','Keep App','2026-09-15','API + 下载','正常']],
  acquired:[['Skyline Stories','June Harbor','Keep App','2026-09-17','下载','已获取'],['Quiet Momentum','Paper Satellites','品牌内容中台','2026-09-16','API','已获取'],['Higher Ground','Signal Fires','海外短视频','2026-09-15','下载','已获取']],
  favorites:[['City Lights','Clara Noon','未加入项目','2026-09-17','收藏','候选'],['Moving Fast','The Avenue','Keep App','2026-09-16','收藏','候选'],['Soft Horizon','Mellow State','品牌内容中台','2026-09-14','收藏','候选']]
};
function contentPage(){
  const map={online:['已上架','12,840','当前进入业务系统持续使用的音乐'],acquired:['已获取','7,812','通过下载、API 或批量交付获取过的音乐'],favorites:['收藏','326','尚未进入项目、但已保存的候选音乐']};
  const active=map[state.contentTab];
  return `${pageHead('我的内容','统一管理已经进入业务、已经获取以及收藏的内容。',`<button class="btn">${icon('download')}导出记录</button><button class="btn btn-primary" data-route="catalog">${icon('search')}继续找歌</button>`)}
  <div class="tabs"><button class="tab ${state.contentTab==='online'?'active':''}" data-content-tab="online">已上架 · 12,840</button><button class="tab ${state.contentTab==='acquired'?'active':''}" data-content-tab="acquired">已获取 · 7,812</button><button class="tab ${state.contentTab==='favorites'?'active':''}" data-content-tab="favorites">收藏 · 326</button></div>
  <div class="grid grid-3" style="margin-bottom:14px">${metricCard(active[0],active[1],active[2],'library')}${metricCard('本月新增','326','较上月 +18.2%','music','+18.2%')}${metricCard('涉及项目','4','覆盖 3 个业务系统','folder')}</div>
  <div class="table-card"><div class="table-toolbar"><div class="table-search">${icon('search')}<input placeholder="搜索我的内容"/></div><button class="btn btn-sm">项目 ${icon('chevron-down')}</button><button class="btn btn-sm">时间 ${icon('chevron-down')}</button><button class="btn btn-sm">状态 ${icon('chevron-down')}</button></div><div class="data-row head"><span>音乐</span><span>项目</span><span>状态</span><span>时间</span><span>获取方式</span><span>操作</span></div>${contentRows[state.contentTab].map((r,i)=>`<div class="data-row"><div class="data-main"><strong>${r[0]}</strong><small>${r[1]} · ST-${310284+i*8631}</small></div><div class="data-cell">${r[2]}</div><div><span class="status ${state.contentTab==='favorites'?'neutral':''}">${r[5]}</span></div><div class="data-cell">${r[3]}</div><div class="data-cell">${r[4]}</div><div class="track-actions"><button class="icon-btn">${icon('external-link')}</button><button class="icon-btn">${icon('more-horizontal')}</button></div></div>`).join('')}<div class="pagination"><span>共 ${active[1]} 条记录</span><div class="pager"><button class="page-btn">‹</button><button class="page-btn active">1</button><button class="page-btn">2</button><button class="page-btn">3</button><button class="page-btn">›</button></div></div></div>`;
}

function developerPage(){
  return `${pageHead('接入中心','将 STARLINK 曲库搜索、内容获取和 AI 能力接入客户自己的产品与工作流。',`<button class="btn">${icon('circle-help')}开发者文档</button><button class="btn btn-primary">${icon('key')}管理 API Keys</button>`)}
  <div class="dev-hero"><div><h2>同一套曲库能力，服务 Web、API 与 AI Agent</h2><p>基于当前组织与项目的授权范围，通过统一接口完成搜索、试听、元数据获取、相似推荐和内容获取。</p></div><div class="dev-status"><i></i><span>Production API 正常</span></div></div>
  <section class="section grid grid-4"><div class="integration-card"><div class="integration-top"><span class="integration-icon">${icon('search')}</span><span class="status">可用</span></div><h3>Catalog Search API</h3><p>关键词、标签、条件组合与高级曲库检索。</p><button class="section-link">查看接口 →</button></div><div class="integration-card"><div class="integration-top"><span class="integration-icon">${icon('library')}</span><span class="status">可用</span></div><h3>Content API</h3><p>元数据、试听地址、文件与授权状态查询。</p><button class="section-link">查看接口 →</button></div><div class="integration-card"><div class="integration-top"><span class="integration-icon">${icon('sparkles')}</span><span class="status">Beta</span></div><h3>AI Search</h3><p>自然语言找歌、相似推荐与条件解释。</p><button class="section-link">查看能力 →</button></div><div class="integration-card"><div class="integration-top"><span class="integration-icon">${icon('bot')}</span><span class="status neutral">规划中</span></div><h3>Agent Tools</h3><p>为企业 Agent 提供可调用的音乐内容工具。</p><button class="section-link">了解规划 →</button></div></section>
  <section class="section split-layout"><div class="code-panel"><div class="code-head"><span>Search API · cURL</span><div class="page-actions"><span class="code-dots"><i></i><i></i><i></i></span><button class="icon-btn copy-code" style="color:#aeb7c7">${icon('copy')}</button></div></div><pre><span class="code-blue">curl</span> https://api.starlink.kanjian.com/v1/tracks/search \\
  -H <span class="code-green">"Authorization: Bearer $STARLINK_API_KEY"</span> \\
  -H <span class="code-green">"X-Project-ID: keep-app-2026-q4"</span> \\
  -G \\
  --data-urlencode <span class="code-orange">"q=运动 科技 纯音乐"</span> \\
  --data-urlencode <span class="code-orange">"bpm_min=100"</span> \\
  --data-urlencode <span class="code-orange">"bpm_max=120"</span></pre></div><div class="panel"><div class="panel-head"><h3>本月 API 使用</h3><button class="section-link">查看明细</button></div><div class="panel-body"><div class="metric-value">68,420 <span style="font-size:10px;color:#949ba6;font-weight:500">/ 100,000</span></div><div class="usage-bar"><span style="width:68.42%"></span></div><div class="metric-foot"><span>68.4% 已使用</span><span style="margin-left:auto">9 月 30 日重置</span></div><div class="activity-list" style="margin-top:12px"><div class="activity-item"><span class="activity-icon">${icon('key')}</span><span class="activity-copy"><strong>Production Key</strong><small>sk_live_••••••••92d1</small></span><span class="status">启用</span></div><div class="activity-item"><span class="activity-icon">${icon('webhook')}</span><span class="activity-copy"><strong>Webhook</strong><small>2 个事件订阅</small></span><span class="status">正常</span></div></div></div></div></section>`;
}

function settingsPage(){
  return `${pageHead('管理','管理组织、授权能力、团队成员和当前套餐用量。',`<button class="btn btn-primary">${icon('user-plus')}邀请成员</button>`)}
  <div class="settings-layout"><aside class="settings-nav"><button class="active">${icon('building')}组织信息</button><button>${icon('shield')}授权与能力</button><button>${icon('users')}团队成员</button><button>${icon('credit-card')}用量与配额</button><button>${icon('lock')}安全设置</button></aside><section class="settings-panel">
    <div class="settings-section"><h3>组织信息</h3><p>这是当前工作空间在 STARLINK 中的企业身份。</p><div class="info-grid"><div class="info-block"><small>组织名称</small><strong>看见音乐科技有限公司</strong></div><div class="info-block"><small>组织 ID</small><strong>ORG-KANJIAN-001</strong></div><div class="info-block"><small>默认项目</small><strong>Keep App · 2026 Q4</strong></div><div class="info-block"><small>企业管理员</small><strong>客户管理员</strong></div></div></div>
    <div class="settings-section"><h3>当前授权能力</h3><p>由合同与项目授权范围决定，客户前台会自动隐藏未开放的能力。</p><div class="permission-card"><span><strong>全曲库搜索与试听</strong><small>184,320 首 · 当前项目授权范围</small></span><span class="status">已开放</span></div><div class="permission-card"><span><strong>下载与内容获取</strong><small>支持单曲下载与批量获取</small></span><span class="status">已开放</span></div><div class="permission-card"><span><strong>API / AI 接入</strong><small>Search API、Content API、AI Search</small></span><span class="status">已开放</span></div><div class="permission-card"><span><strong>自主上架</strong><small>上架至已配置业务系统</small></span><span class="status">已开放</span></div></div>
    <div class="settings-section"><div class="section-head"><div><h3>团队成员</h3><p style="margin:4px 0 0;font-size:9px;color:#969da8">共 8 位成员</p></div><button class="btn btn-sm">${icon('user-plus')}邀请成员</button></div>${[['KH','客户管理员','admin@kanjian.com','管理员','全部项目'],['LS','李思','lisi@company.com','内容编辑','Keep App'],['CY','陈雨','chenyu@company.com','内容编辑','品牌内容'],['WW','王维','wangwei@company.com','开发者','API / AI']].map(m=>`<div class="member-row"><div class="member-info"><span class="avatar-sm">${m[0]}</span><span><strong>${m[1]}</strong><small>${m[2]}</small></span></div><div class="data-cell">${m[3]}</div><div class="data-cell">${m[4]}</div><button class="icon-btn">${icon('more-horizontal')}</button></div>`).join('')}</div>
  </section></div>`;
}

const pages={home:homePage,catalog:catalogPage,discover:discoverPage,ai:aiPage,projects:projectsPage,playlists:playlistsPage,content:contentPage,developer:developerPage,settings:settingsPage};

function routeTo(route,options={}){
  if(!pages[route]) route='home';
  state.route=route;
  if(options.query!==undefined) state.query=options.query;
  const hash=`#/${route}`;
  if(location.hash!==hash) history.pushState(null,'',hash);
  renderPage();
}

function renderPage(){
  workspace.innerHTML=(pages[state.route]||homePage)();
  updateActiveNav();
  workspace.scrollTo?.(0,0);
  hydrateIcons(workspace);
}

function parseRoute(){return (location.hash.replace(/^#\//,'').split('?')[0]||'home')}

function toast(message){
  const node=document.createElement('div');node.className='toast';node.innerHTML=`${icon('check')}<span>${message}</span>`;$('#toastStack').appendChild(node);setTimeout(()=>node.remove(),2600);
}

function showDropdown(anchor,content){
  $$('.dropdown').forEach(x=>x.remove());
  const box=document.createElement('div');box.className='dropdown show';box.innerHTML=content;document.body.appendChild(box);
  const r=anchor.getBoundingClientRect();const width=Math.max(220,r.width);box.style.minWidth=`${width}px`;box.style.left=`${Math.min(r.left,window.innerWidth-width-12)}px`;box.style.top=`${r.bottom+7}px`;
  setTimeout(()=>document.addEventListener('click',()=>box.remove(),{once:true}),0);
  hydrateIcons(box);
  return box;
}

function initStaticInteractions(){
  $('#sidebarToggle').addEventListener('click',e=>{e.stopPropagation();document.body.classList.toggle('sidebar-collapsed')});
  $('#mobileMenu').addEventListener('click',()=>{$('body').classList.add('mobile-menu-open');$('#scrim').classList.add('show')});
  $('#scrim').addEventListener('click',()=>{$('body').classList.remove('mobile-menu-open');$('#scrim').classList.remove('show')});
  $('#workspaceSwitch').addEventListener('click',e=>{e.stopPropagation();showDropdown(e.currentTarget,`<div class="dropdown-title">组织</div><button class="dropdown-item active">${icon('building')}看见音乐 <small>当前</small></button><button class="dropdown-item">${icon('building')}星接测试企业</button><div class="divider"></div><button class="dropdown-item">${icon('settings')}管理组织</button>`)});
  $('#projectSwitch').addEventListener('click',e=>{e.stopPropagation();showDropdown(e.currentTarget,`<div class="dropdown-title">当前项目</div><button class="dropdown-item active">${icon('folder')}Keep App · 2026 Q4 <small>当前</small></button><button class="dropdown-item">${icon('folder')}海外短视频素材库</button><button class="dropdown-item">${icon('folder')}智能硬件 · Sound Box</button><button class="dropdown-item">${icon('folder')}品牌内容中台</button><div class="divider"></div><button class="dropdown-item" data-route="projects">${icon('plus')}查看全部项目</button>`)});
  $('#globalSearchInput').addEventListener('keydown',e=>{if(e.key==='Enter'){state.query=e.target.value.trim();routeTo('catalog',{query:state.query})}});
  document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#globalSearchInput').focus()}});
}

function handleDelegatedClick(e){
  const routeEl=e.target.closest('[data-route]');
  if(routeEl){routeTo(routeEl.dataset.route);document.body.classList.remove('mobile-menu-open');$('#scrim').classList.remove('show');return}
  const queryEl=e.target.closest('[data-query]');
  if(queryEl){state.query=queryEl.dataset.query;routeTo('catalog',{query:state.query});return}
  const contentTab=e.target.closest('[data-content-tab]');
  if(contentTab){state.contentTab=contentTab.dataset.contentTab;renderPage();return}
  const play=e.target.closest('.play-track');
  if(play){state.playing=state.playing===play.dataset.track?null:play.dataset.track;renderPage();toast(state.playing?'正在试听音乐':'已暂停试听');return}
  const fav=e.target.closest('.favorite-track');
  if(fav){const id=fav.dataset.track;state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);renderPage();toast(state.favorites.has(id)?'已加入收藏':'已取消收藏');return}
  const add=e.target.closest('.add-track');if(add){toast('已加入「Keep App · 2026 Q4 / 跑步场景」');return}
  const get=e.target.closest('.get-track');if(get){toast('已加入获取队列，可在「我的内容」查看记录');return}
  const option=e.target.closest('.filter-option');if(option){option.classList.toggle('selected');const check=option.querySelector('.check');check.innerHTML=option.classList.contains('selected')?icon('check'):'';return}
  if(e.target.closest('#heroSearchBtn')){const q=$('#heroSearchInput').value.trim();routeTo('catalog',{query:q});return}
  if(e.target.closest('#catalogSearchBtn')){state.query=$('#catalogSearchInput').value.trim();renderPage();return}
  if(e.target.closest('#clearCatalogSearch')){state.query='';renderPage();return}
  const prompt=e.target.closest('[data-ai-prompt]');if(prompt){$('#aiInput').value=prompt.dataset.aiPrompt;$('#aiInput').focus();return}
  if(e.target.closest('#aiSend')){const input=$('#aiInput');const value=input?.value.trim();if(value){const thread=$('#aiThread');thread.insertAdjacentHTML('beforeend',`<div class="message"><span class="message-avatar">KH</span><div class="message-bubble">${value.replace(/[<>]/g,'')}</div></div><div class="message ai"><span class="message-avatar">${icon('sparkles')}</span><div class="message-bubble">已根据你的补充重新调整结果。推荐列表已更新，并保持在当前授权范围内。</div></div>`);input.value='';thread.scrollTop=thread.scrollHeight;hydrateIcons(thread)}return}
  if(e.target.closest('#createProject')){toast('项目创建入口已预留：下一步可接项目新建流程');return}
  if(e.target.closest('#createPlaylist')){toast('歌单创建入口已预留：可从搜索结果直接建歌单');return}
  if(e.target.closest('.copy-code')){navigator.clipboard?.writeText('curl https://api.starlink.kanjian.com/v1/tracks/search');toast('示例代码已复制');return}
}

document.addEventListener('click',handleDelegatedClick);
window.addEventListener('popstate',()=>{state.route=parseRoute();renderPage()});
window.addEventListener('hashchange',()=>{state.route=parseRoute();renderPage()});

renderNav();
hydrateIcons();
initStaticInteractions();
state.route=parseRoute();
renderPage();
