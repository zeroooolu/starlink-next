Page.playlists = () => `
  <div class="playlist-page">
    <div class="playlist-head">
      <div>
        <h1>歌单管理</h1>
        <p>统一维护运营歌单库。普通歌单人工维护，智能歌单按规则自动拉取和更新。</p>
      </div>
      <div class="playlist-create-actions">
        <button class="playlist-create">
          <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          新建普通歌单
        </button>
        <button class="playlist-create primary" data-route="smart-playlist-create">
          <svg viewBox="0 0 24 24"><path d="m12 3-1 2.8A5.6 5.6 0 0 1 7.8 9L5 10l2.8 1a5.6 5.6 0 0 1 3.2 3.2L12 17l1-2.8A5.6 5.6 0 0 1 16.2 11L19 10l-2.8-1A5.6 5.6 0 0 1 13 5.8L12 3Z"/></svg>
          新建智能歌单
        </button>
      </div>
    </div>

    <section class="playlist-toolbar">
      <div class="playlist-tabs" id="playlistTabs">
        <button class="playlist-tab active" data-playlist-tab="all">全部 <span>128</span></button>
        <button class="playlist-tab" data-playlist-tab="manual">普通歌单 <span>86</span></button>
        <button class="playlist-tab" data-playlist-tab="smart">智能歌单 <span>42</span></button>
      </div>

      <div class="playlist-filter-row">
        <div class="playlist-search-wrap">
          <label>搜索歌单</label>
          <div class="playlist-search">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            <input placeholder="搜索歌单名称、ID 或简介" />
          </div>
        </div>

        ${playlistSelect('分类',['全部分类','运动健身','旅行户外','疗愈音乐','游戏配乐','短剧配乐'])}
        ${playlistSelect('更新方式',['全部','人工维护','自动更新'])}
        ${playlistSelect('状态',['全部','启用','已暂停'])}

        <div class="playlist-filter-actions" style="display:flex;gap:7px">
          <button class="playlist-reset-btn">重置</button>
          <button class="playlist-query-btn">查询</button>
        </div>
      </div>
    </section>

    <section class="playlist-list-shell">
      <div class="playlist-list-top">
        <div class="playlist-list-count"><strong>128</strong> 个歌单</div>
        <div class="playlist-list-actions">
          <button class="playlist-view-btn">排序：最近更新</button>
          <button class="playlist-view-btn">列表密度：标准</button>
        </div>
      </div>

      <div class="playlist-table-wrap">
        <table class="playlist-table">
          <thead>
            <tr>
              <th>歌单信息</th>
              <th>简介</th>
              <th>类型</th>
              <th>分类</th>
              <th>歌曲数量</th>
              <th>更新方式</th>
              <th>最近更新</th>
              <th>状态</th>
              <th style="text-align:right">操作</th>
            </tr>
          </thead>
          <tbody id="playlistTableBody">
            ${playlistRows()}
          </tbody>
        </table>
      </div>

      <div class="playlist-pagination">
        <span>每页 20 条，共 128 条</span>
        <div class="playlist-pages"><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>7</button></div>
      </div>
    </section>
  </div>
`;

function playlistSelect(label, options){
  return `<div class="pm-field"><label>${label}</label><div class="pm-select"><button class="pm-select-trigger" type="button"><span>${options[0]}</span><svg viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg></button><div class="pm-select-menu">${options.map((x,i)=>`<button class="pm-option ${i===0?'selected':''}" type="button">${x}</button>`).join('')}</div></div></div>`;
}

function playlistRows(){
  const rows = [
    {name:'欧美高热运动音乐',id:'PL-202609-0182',desc:'面向运动、跑步、健身等场景的高热度欧美音乐池。',type:'smart',category:'运动健身',count:'2,812',method:'每日 03:00 自动更新',delta:'+38 / -12',updated:'今天 03:00',status:'启用',cover:'blue'},
    {name:'影石旅行候选池',id:'PL-202609-0174',desc:'户外旅行、探索、运动相机等场景的运营精选候选内容。',type:'manual',category:'旅行户外',count:'128',method:'人工维护',delta:'',updated:'今天 10:32',status:'启用',cover:'orange'},
    {name:'俄语 KTV 全球可授权',id:'PL-202609-0168',desc:'满足全球授权条件的俄语 KTV 内容动态集合。',type:'smart',category:'KTV',count:'12,421',method:'每日 02:00 自动更新',delta:'+124 / -9',updated:'今天 02:00',status:'启用',cover:'green'},
    {name:'疗愈轻音乐',id:'PL-202607-0821',desc:'适合放松、冥想、助眠和空间疗愈场景的轻音乐精选。',type:'manual',category:'疗愈音乐',count:'416',method:'人工维护',delta:'',updated:'昨天 18:45',status:'启用',cover:'pink'},
    {name:'短剧悬疑氛围音乐',id:'PL-202606-0417',desc:'悬疑、紧张、反转等短剧常用氛围音乐内容池。',type:'smart',category:'短剧配乐',count:'6,309',method:'每 6 小时自动更新',delta:'+16 / -21',updated:'今天 12:00',status:'启用',cover:''},
    {name:'节日精选｜中秋',id:'PL-202605-0336',desc:'中秋节相关节日氛围、团圆、国风内容人工精选。',type:'manual',category:'节日音乐',count:'86',method:'人工维护',delta:'',updated:'09-12 16:20',status:'已暂停',cover:'orange'}
  ];
  return rows.map((r)=>`<tr data-kind="${r.type}" class="playlist-row clickable" data-route="playlist-detail">
    <td><div class="playlist-info"><div class="playlist-cover ${r.cover}">♫</div><div class="playlist-copy"><div class="playlist-name">${r.name}</div><div class="playlist-id">${r.id}</div></div></div></td>
    <td><div class="playlist-desc">${r.desc}</div></td>
    <td>${r.type==='smart'?`<span class="playlist-type smart"><svg viewBox="0 0 24 24"><path d="m12 3-1 2.8A5.6 5.6 0 0 1 7.8 9L5 10l2.8 1a5.6 5.6 0 0 1 3.2 3.2L12 17l1-2.8A5.6 5.6 0 0 1 16.2 11L19 10l-2.8-1A5.6 5.6 0 0 1 13 5.8L12 3Z"/></svg>智能歌单</span>`:`<span class="playlist-type manual">普通歌单</span>`}</td>
    <td><span class="playlist-category">${r.category}</span></td>
    <td><span class="playlist-count">${r.count}</span></td>
    <td><div class="playlist-update"><strong>${r.method}</strong>${r.delta?`<small class="smart-delta">最近变更 ${r.delta}</small>`:''}</div></td>
    <td>${r.updated}</td>
    <td><span class="playlist-status ${r.status==='已暂停'?'paused':''}">${r.status}</span></td>
    <td><div class="playlist-row-actions">
      <button class="playlist-icon-btn" title="查看详情"><svg viewBox="0 0 24 24"><path d="M4 12s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6Z"/><circle cx="12" cy="12" r="2.5"/></svg></button>
      <button class="playlist-icon-btn" title="复制歌单"><svg viewBox="0 0 24 24"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg></button>
      <button class="playlist-icon-btn" title="更多"><svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg></button>
    </div></td>
  </tr>`).join('');
}

if (routes && routes.playlists) routes.playlists.render = Page.playlists;

document.addEventListener('click', (e) => {
  const tab = e.target.closest('[data-playlist-tab]');
  if (tab) {
    document.querySelectorAll('.playlist-tab').forEach(x=>x.classList.remove('active'));
    tab.classList.add('active');
    const kind = tab.dataset.playlistTab;
    document.querySelectorAll('.playlist-row').forEach(row=>{
      row.style.display = kind==='all' || row.dataset.kind===kind ? '' : 'none';
    });
    return;
  }
  const trigger = e.target.closest('.pm-select-trigger');
  if (trigger) {
    const current = trigger.closest('.pm-select');
    document.querySelectorAll('.pm-select.open').forEach(x=>{if(x!==current)x.classList.remove('open')});
    current.classList.toggle('open');
    return;
  }
  const option = e.target.closest('.pm-option');
  if (option) {
    const select = option.closest('.pm-select');
    select.querySelectorAll('.pm-option').forEach(x=>x.classList.remove('selected'));
    option.classList.add('selected');
    select.querySelector('.pm-select-trigger span').textContent = option.textContent;
    select.classList.remove('open');
    return;
  }
  if (!e.target.closest('.pm-select')) document.querySelectorAll('.pm-select.open').forEach(x=>x.classList.remove('open'));
});
