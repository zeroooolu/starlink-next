Page.catalogSearch = () => `
  <div class="catalog-search-page">
    <div class="catalog-head">
      <div>
        <h1>曲库检索</h1>
        <p>面向大规模曲库的组合检索工作台，支持复杂条件筛选、批量处理、导出和结果列配置。</p>
      </div>
      <div class="actions">
        <button class="btn">保存当前查询</button>
        <button class="btn primary">导出结果</button>
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
          <div class="field-control"><input placeholder="歌曲名称、专辑名称、艺人、厂牌 / CP" /></div>
        </div>
        <div class="field-compact">
          <label>ID 搜索</label>
          <div class="field-control"><span class="prefix">Track ID ▾</span><input placeholder="多个用空格或逗号隔开" /></div>
        </div>
        <div class="search-actions">
          <button class="btn">重置</button>
          <button class="btn primary">查询</button>
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
        <div class="filter-section-head"><strong>筛选条件</strong><span>高频条件直接展示，低频条件按需展开</span></div>
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
            ${filterInput('标签搜索','搜索并选择标签')}
            ${filterInput('授权结束日期晚于','请选择日期')}
            ${filterSelect('入库来源',['全部','发行系统','版权系统','人工导入','API'])}
            ${filterInput('入库开始时间','请选择日期')}
            ${filterInput('入库截止时间','请选择日期')}
            ${filterSelect('内容质量',['全部','完整','缺少封面','缺少音频','缺少权利'])}
            ${filterSelect('音频质量',['全部','无损','320kbps','96kbps','未知'])}
            ${filterSelect('音乐类型',['全部','音乐','音效','采样','Beats','词曲'])}
            ${filterSelect('交付次数',['全部','从未交付','1-5 次','5 次以上'])}
          </div>
        </div>

        <div class="filter-footer">
          <button class="expand-filters" id="expandFilters">展开更多条件（10）⌄</button>
          <div class="filter-buttons"><button class="btn small">清空条件</button><button class="btn small primary">应用筛选</button></div>
        </div>
      </div>

      <div class="active-filters">
        <span class="active-title">当前条件</span>
        <span class="active-chip"><b>歌曲状态</b> 审核通过 <i>×</i></span>
        <span class="active-chip"><b>商用状态</b> 可商用 <i>×</i></span>
        <span class="active-chip"><b>授权区域</b> 全球 <i>×</i></span>
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
          <button class="view-btn primary-soft">列表视图：标准</button>
          <button class="view-btn">列设置</button>
          <button class="view-btn">密度：紧凑</button>
        </div>
      </div>

      <div class="catalog-table-wrap">
        <table class="catalog-table">
          <thead><tr>
            <th class="check-col"><input type="checkbox" /></th>
            <th class="song-col">歌曲信息</th>
            <th>热度 ↕</th>
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
          <tbody>
            ${catalogRows()}
          </tbody>
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
  return `<div class="filter-field"><label>${label}</label><div class="filter-input"><select>${options.map(x=>`<option>${x}</option>`).join('')}</select></div></div>`;
}
function filterInput(label, placeholder){
  return `<div class="filter-field"><label>${label}</label><div class="filter-input"><input placeholder="${placeholder}" /></div></div>`;
}
function filterRange(label, left, right){
  return `<div class="filter-field"><label>${label}</label><div class="filter-input dual"><input placeholder="${left}"/><span class="range-sep">—</span><input placeholder="${right}"/></div></div>`;
}

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
    <td class="check-col"><input type="checkbox" /></td>
    <td class="song-col"><div class="song-cell"><div class="song-cover">♪</div><div class="song-main"><div class="song-name">${r[0]}</div><div class="song-meta">${r[1]} · ${r[2]}</div></div></div></td>
    <td><span class="heat-num">${r[3]}</span></td>
    <td><span class="status-dot ${r[12]}">${r[4]}</span></td>
    <td>${r[5]}</td>
    <td><span class="badge green">${r[6]}</span></td>
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

// Lightweight demo interactions for the search workspace.
document.addEventListener('click', (e) => {
  const expand = e.target.closest('#expandFilters');
  if (expand) {
    const box = document.getElementById('advancedFilters');
    if (!box) return;
    box.classList.toggle('open');
    expand.textContent = box.classList.contains('open') ? '收起更多条件 ⌃' : '展开更多条件（10）⌄';
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
  }
});
