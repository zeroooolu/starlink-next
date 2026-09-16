Page.catalogSearch = () => `
  <div class="catalog-search-page">
    <div class="catalog-head">
      <div>
        <h1>曲库检索</h1>
        <p>面向大规模曲库的组合检索工作台，支持复杂条件筛选、批量处理、导出和结果列配置。</p>
      </div>
      <div class="actions catalog-head-actions">
        <button class="btn catalog-ghost-btn">保存当前查询</button>
        <button class="btn primary catalog-primary-btn">导出结果</button>
      </div>
    </div>

    <div class="query-modes" id="queryModes">
      <button class="query-mode active">标准查询</button>
      <button class="query-mode">Key Value 查询</button>
      <button class="query-mode">表格导入查询</button>
    </div>

    <section class="search-workspace">
      <div class="search-primary">
        <div class="field-compact">
          <label>关键词</label>
          <div class="field-control search-control">
            ${searchIcon()}
            <input placeholder="歌曲名称、专辑名称、艺人、厂牌 / CP" />
          </div>
        </div>
        <div class="field-compact">
          <label>ID 搜索</label>
          <div class="field-control id-search-control">
            <div class="id-type-select" data-id-type>
              <button type="button" class="id-type-trigger"><span>Track ID</span>${chevronIcon()}</button>
              <div class="id-type-menu">
                ${['Track ID','UID','ISRC','UPC','专辑 ID'].map((x,i)=>`<button type="button" class="id-type-option ${i===0?'selected':''}" data-value="${x}">${x}${i===0?checkIcon():''}</button>`).join('')}
              </div>
            </div>
            <input placeholder="多个用空格或逗号隔开" />
          </div>
        </div>
        <div class="search-actions">
          <button class="btn catalog-ghost-btn">重置</button>
          <button class="btn primary catalog-primary-btn">查询</button>
        </div>
      </div>

      <div class="saved-views">
        <span class="saved-label">常用查询</span>
        <button class="saved-view active">全部曲库</button>
        <button class="saved-view">可商用</button>
        <button class="saved-view">即将到期</button>
        <button class="saved-view">有风险 CP</button>
        <button class="saved-view">无标签</button>
        <button class="saved-view">本月新入库</button>
        <button class="save-query">＋ 保存为常用查询</button>
      </div>

      <div class="filter-section">
        <div class="filter-section-head">
          <div><strong>筛选条件</strong><span class="filter-hint">常用条件默认展示，更多条件按需展开</span></div>
          <span class="filter-count">10 个常用条件</span>
        </div>
        <div class="filter-grid">
          ${filterSelect('歌曲状态',['审核通过','全部','待审核'])}
          ${filterSelect('商用状态',['全部','可商用','不可商用'])}
          ${filterSelect('歌曲语言',['全部','中文','英文','日文','俄语'])}
          ${filterSelect('有无人声',['全部','有人声','纯音乐'])}
          ${filterSelect('授权区域',['全部','全球','中国大陆','东南亚','俄语区'])}
          ${filterSelect('授权场景',['全部','短视频','健身','KTV','空间音乐'])}
          ${filterSelect('权利项',['全部','词','曲','录音','表演'])}
          ${filterSelect('是否风险 CP',['全部','否','是'])}
          ${filterRange('热度区间','最低热度','最高热度')}
          ${filterInput('热度 Top','输入需要返回的前 N 条数据')}
        </div>

        <div class="advanced-filters" id="advancedFilters">
          <div class="filter-grid">
            ${filterSelect('有无标签',['全部','有标签','无标签'])}
            ${filterInput('标签搜索','搜索并选择标签', 'search')}
            ${filterInput('授权结束日期晚于','请选择日期', 'calendar')}
            ${filterSelect('入库来源',['全部','发行系统','版权系统','人工导入','API'])}
            ${filterInput('入库开始时间','请选择日期', 'calendar')}
            ${filterInput('入库截止时间','请选择日期', 'calendar')}
            ${filterSelect('内容质量',['全部','完整','缺少封面','缺少音频','缺少权利'])}
            ${filterSelect('音频质量',['全部','无损','320kbps','96kbps','未知'])}
            ${filterSelect('音乐类型',['全部','音乐','音效','采样','Beats','词曲'])}
            ${filterSelect('交付次数',['全部','从未交付','1-5 次','5 次以上'])}
          </div>
        </div>

        <div class="filter-footer">
          <button class="expand-filters" id="expandFilters"><span>展开更多条件</span><em>10</em>${chevronIcon()}</button>
          <div class="filter-buttons"><button class="btn small catalog-ghost-btn">清空条件</button><button class="btn small primary catalog-primary-btn">应用筛选</button></div>
        </div>
      </div>

      <div class="active-filters">
        <span class="active-title">当前条件</span>
        <span class="active-chip"><b>歌曲状态</b><span>审核通过</span><button>×</button></span>
        <span class="active-chip"><b>商用状态</b><span>可商用</span><button>×</button></span>
        <span class="active-chip"><b>授权区域</b><span>全球</span><button>×</button></span>
        <button class="clear-filters">清空全部</button>
      </div>
    </section>

    <section class="result-shell">
      <div class="result-toolbar">
        <div class="result-count">共找到 <span>2,297,495</span> 首</div>
        <div class="divider"></div>
        <div class="result-actions">
          <button class="view-btn">加入歌单</button>
          <button class="view-btn">创建交付</button>
          <button class="view-btn">批量导出</button>
        </div>
        <div class="result-actions right">
          <button class="view-btn primary-soft">标准视图</button>
          <button class="view-btn icon-text-btn">${columnsIcon()}列设置</button>
          <button class="view-btn icon-text-btn">${densityIcon()}紧凑</button>
        </div>
      </div>

      <div class="catalog-table-wrap">
        <table class="catalog-table">
          <thead><tr>
            <th class="check-col"><input class="ui-checkbox" type="checkbox" /></th>
            <th class="song-col">歌曲信息</th>
            <th>热度 <span class="sort-mark">↕</span></th>
            <th>商用状态</th>
            <th>交付次数</th>
            <th>内容质量</th>
            <th>音频信息</th>
            <th>专辑信息</th>
            <th>厂牌 / CP</th>
            <th>相关艺人与版权比例</th>
            <th>授权情况</th>
            <th class="action-col">操作</th>
          </tr></thead>
          <tbody>${catalogRows()}</tbody>
        </table>
      </div>

      <div class="result-footer">
        <span class="column-note">当前显示 11 个字段 · 可在「列设置」中保存不同列表视图</span>
        <div class="pagination-mini"><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>45950</button></div>
      </div>
    </section>
  </div>
`;

function filterSelect(label, options){
  const first = options[0];
  return `<div class="filter-field"><label>${label}</label>
    <div class="custom-select" data-custom-select>
      <button type="button" class="select-trigger"><span class="select-value">${first}</span>${chevronIcon()}</button>
      <div class="select-menu">
        ${options.map((x,i)=>`<button type="button" class="select-option ${i===0?'selected':''}" data-value="${x}"><span>${x}</span>${i===0?checkIcon():''}</button>`).join('')}
      </div>
    </div>
  </div>`;
}
function filterInput(label, placeholder, icon=''){
  return `<div class="filter-field"><label>${label}</label><div class="filter-input ${icon?'with-icon':''}">${icon==='search'?searchIcon():icon==='calendar'?calendarIcon():''}<input placeholder="${placeholder}" /></div></div>`;
}
function filterRange(label, left, right){
  return `<div class="filter-field"><label>${label}</label><div class="filter-input dual"><input placeholder="${left}"/><span class="range-sep">—</span><input placeholder="${right}"/></div></div>`;
}

function chevronIcon(){return `<svg class="chevron-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 9.5 5 5 5-5"/></svg>`}
function checkIcon(){return `<svg class="check-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>`}
function searchIcon(){return `<svg class="field-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>`}
function calendarIcon(){return `<svg class="field-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`}
function columnsIcon(){return `<svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/></svg>`}
function densityIcon(){return `<svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`}

function catalogRows(){
  const rows = [
    ['新的开始','1｜音乐','HKC372475256','5.9029','不可用','—','完整','04:06｜0bpm','时光','太声文化 / 小水珠…','0% 词：—<br>0% 曲：吴宇深<br>0% 录：吴宇深','1970.01.01 至 1970.01.01','off'],
    ['224','1000｜音乐','HKC371501088','21.5262','可用','2','完整','03:17｜0bpm','孙老师与失恋故事','坡上村 / —','100% 词：孙骁<br>100% 曲：孙骁<br>100% 录：坡上村乐队','2015.10.13 至 2099.12.31<br>AR, CU, BM, KW…',''],
    ['Git Yo Lyfe Rite','10000｜音乐','USA6U1900004','0.277','可用','—','完整','03:16｜107bpm','Outta Time','MusicD… / —','100% 词：Vernon Neilly<br>100% 曲：Vernon Neilly<br>100% 录：Vernon Neilly','2016.06.20 至 2099.12.31<br>BH, CC, GE, LA…',''],
    ['The Gifted Intro','1000001｜音乐','US3DF1502073','0','不可用','—','完整','00:50｜126bpm','The Gifted and Privilege','Pipeline… / DashGo','0% 词：—<br>0% 曲：—<br>0% 录：Amped Up Mix Nation','2015.04.14 至 2099.12.31','off'],
    ['Park The Delorean_ In Ca…','1000002｜音乐','US3DF1502074','0','不可用','—','完整','04:47｜111bpm','The Gifted and Privilege','Pipeline… / DashGo','0% 词：—<br>0% 曲：—<br>0% 录：Amped Up Mix Nation','2015.04.14 至 2099.12.31','off'],
    ['Ma Introduction Skaten F…','1000003｜音乐','US3DF1502075','0.4251','不可用','—','完整','04:51｜97bpm','The Gifted and Privilege','Pipeline… / DashGo','0% 词：—<br>0% 曲：—<br>0% 录：Amped Up Mix Nation','2015.04.14 至 2099.12.31','off']
  ];
  return rows.map((r,i)=>`<tr class="clickable" data-track="${i}">
    <td class="check-col"><input class="ui-checkbox" type="checkbox" /></td>
    <td class="song-col"><div class="song-cell"><div class="song-cover">♪</div><div class="song-main"><div class="song-name">${r[0]}</div><div class="song-meta">${r[1]} · ${r[2]}</div></div></div></td>
    <td><span class="heat-num">${r[3]}</span></td>
    <td><span class="status-dot ${r[12]}">${r[4]}</span></td>
    <td>${r[5]}</td>
    <td><span class="quality-badge">${r[6]}</span></td>
    <td><div class="cell-stack"><div class="main-line">${r[7]}</div><div class="sub-line">音质无损｜未知人声</div></div></td>
    <td><div class="cell-stack"><div class="main-line">${r[8]}</div><div class="sub-line">专辑 ID 5004506</div></div></td>
    <td><div class="cell-stack"><div class="main-line">${r[9]}</div></div></td>
    <td><div class="rights-text">${r[10]}</div></td>
    <td><div class="rights-text">${r[11]}</div></td>
    <td class="action-col"><div class="icon-actions">
      <button class="icon-action" title="试听"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/></svg></button>
      <button class="icon-action" title="加入歌单"><svg viewBox="0 0 24 24"><path d="M4 6h10M4 12h10M4 18h7"/><path d="M18 14v6M15 17h6"/></svg></button>
      <button class="icon-action" title="查看详情"><svg viewBox="0 0 24 24"><path d="M4 20h4l11-11-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/></svg></button>
    </div></td>
  </tr>`).join('');
}

if (routes && routes['catalog-search']) routes['catalog-search'].render = Page.catalogSearch;

function closeCatalogDropdowns(except=null){
  document.querySelectorAll('.custom-select.open,.id-type-select.open').forEach(el=>{if(el!==except) el.classList.remove('open')});
}

// Lightweight demo interactions for the search workspace.
document.addEventListener('click', (e) => {
  const selectTrigger = e.target.closest('.select-trigger');
  if (selectTrigger) {
    const box = selectTrigger.closest('.custom-select');
    const willOpen = !box.classList.contains('open');
    closeCatalogDropdowns(box);
    box.classList.toggle('open', willOpen);
    return;
  }
  const option = e.target.closest('.select-option');
  if (option) {
    const box = option.closest('.custom-select');
    box.querySelector('.select-value').textContent = option.dataset.value;
    box.querySelectorAll('.select-option').forEach(x=>{x.classList.remove('selected'); const icon=x.querySelector('.check-icon'); if(icon) icon.remove();});
    option.classList.add('selected');
    option.insertAdjacentHTML('beforeend', checkIcon());
    box.classList.remove('open');
    return;
  }
  const idTrigger = e.target.closest('.id-type-trigger');
  if (idTrigger) {
    const box=idTrigger.closest('.id-type-select');
    const willOpen=!box.classList.contains('open');
    closeCatalogDropdowns(box);
    box.classList.toggle('open',willOpen);
    return;
  }
  const idOption=e.target.closest('.id-type-option');
  if(idOption){
    const box=idOption.closest('.id-type-select');
    box.querySelector('.id-type-trigger span').textContent=idOption.dataset.value;
    box.querySelectorAll('.id-type-option').forEach(x=>{x.classList.remove('selected'); const icon=x.querySelector('.check-icon'); if(icon) icon.remove();});
    idOption.classList.add('selected');
    idOption.insertAdjacentHTML('beforeend',checkIcon());
    box.classList.remove('open');
    return;
  }
  const expand = e.target.closest('#expandFilters');
  if (expand) {
    const box = document.getElementById('advancedFilters');
    if (!box) return;
    box.classList.toggle('open');
    expand.classList.toggle('open', box.classList.contains('open'));
    expand.querySelector('span').textContent = box.classList.contains('open') ? '收起更多条件' : '展开更多条件';
    return;
  }
  const mode = e.target.closest('.query-mode');
  if (mode) {
    document.querySelectorAll('.query-mode').forEach(x=>x.classList.remove('active'));
    mode.classList.add('active');
    return;
  }
  const saved = e.target.closest('.saved-view');
  if (saved) {
    document.querySelectorAll('.saved-view').forEach(x=>x.classList.remove('active'));
    saved.classList.add('active');
    return;
  }
  if (!e.target.closest('.custom-select') && !e.target.closest('.id-type-select')) closeCatalogDropdowns();
});

document.addEventListener('keydown',e=>{if(e.key==='Escape') closeCatalogDropdowns();});
