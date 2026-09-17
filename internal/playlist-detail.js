(() => {
  const playlistSongs = [
    {title:'Open Sky',artist:'Mila June',meta:'独立流行 · 124 BPM · English',heat:'81',rights:'全球可商用',added:'今天 10:32',by:'王小明',cover:'orange'},
    {title:'Midnight Drive',artist:'Nova Lane',meta:'电子 · 128 BPM · English',heat:'88',rights:'全球可商用',added:'今天 10:31',by:'王小明',cover:'pink'},
    {title:'Run With Me',artist:'Atlas North',meta:'流行摇滚 · 132 BPM · English',heat:'84',rights:'全球可商用',added:'今天 10:28',by:'王小明',cover:'green'},
    {title:'Higher Ground',artist:'Echo Field',meta:'流行 · 126 BPM · English',heat:'79',rights:'全球可商用',added:'昨天 18:42',by:'李小雨',cover:''},
    {title:'Into The Wild',artist:'Northline',meta:'独立流行 · 122 BPM · English',heat:'76',rights:'全球可商用',added:'昨天 18:40',by:'李小雨',cover:'blue'},
    {title:'Momentum',artist:'Violet Echo',meta:'电子 · 136 BPM · Instrumental',heat:'79',rights:'全球可商用',added:'09-15 16:20',by:'王小明',cover:''}
  ];

  const deliveryRefs = [
    {id:'DLV-20260917-0216',customer:'影石 Insta360',project:'Insta360 相机',songs:'8 首',time:'今天 11:42',operator:'王小明'},
    {id:'DLV-20260916-0182',customer:'影石 Insta360',project:'户外旅行音乐周更',songs:'12 首',time:'昨天 14:21',operator:'王小明'},
    {id:'DLV-20260912-0158',customer:'影石 Insta360',project:'Insta360 相机',songs:'10 首',time:'09-12 17:36',operator:'李小雨'},
    {id:'DLV-20260908-0121',customer:'GoPro China',project:'秋季户外内容',songs:'15 首',time:'09-08 10:18',operator:'陈可'}
  ];

  const logs = [
    ['今天 10:32','王小明','添加 12 首歌曲','歌单歌曲从 116 首更新为 128 首'],
    ['昨天 18:45','李小雨','调整歌曲顺序','将 6 首高热歌曲移动到歌单前部'],
    ['09-15 16:20','王小明','移除 3 首歌曲','内容风格与当前歌单定位不一致'],
    ['09-12 11:08','王小明','更新歌单信息','修改简介与分类为「旅行户外」'],
    ['09-05 14:32','王小明','创建歌单','创建普通歌单 PL-202609-0174']
  ];

  function songsTable(){
    return playlistSongs.map((s,i)=>`<tr class="pd-song-row" data-track="${i}">
      <td><div class="pd-song"><div class="pd-cover ${s.cover}">♪</div><div><strong>${s.title}</strong><small>${s.artist} · ${s.meta}</small></div></div></td>
      <td><span class="pd-heat">${s.heat}</span></td>
      <td><span class="pd-rights"><i></i>${s.rights}</span></td>
      <td>${s.added}</td>
      <td>${s.by}</td>
      <td class="pd-row-actions"><button type="button" title="试听" data-pd-action="play-one">▶</button><button type="button" title="移出歌单" data-pd-action="remove">×</button></td>
    </tr>`).join('');
  }

  function songsPanel(){
    return `<section class="pd-panel active" data-pd-panel="songs">
      <div class="pd-toolbar">
        <div class="pd-search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><input placeholder="搜索歌单内歌曲 / 艺人 / ISRC" /></div>
        <div class="pd-toolbar-actions"><button class="pd-btn" type="button" data-pd-action="export">导出歌曲</button><button class="pd-btn primary" type="button" data-pd-action="add">+ 添加歌曲</button></div>
      </div>
      <div class="pd-table-wrap"><table class="pd-table"><thead><tr><th>歌曲</th><th>热度</th><th>当前权利状态</th><th>加入时间</th><th>操作人</th><th></th></tr></thead><tbody>${songsTable()}</tbody></table></div>
      <div class="pd-table-foot"><span>共 128 首 · 当前展示 6 首示例</span><button type="button">加载更多</button></div>
    </section>`;
  }

  function infoPanel(){
    return `<section class="pd-panel" data-pd-panel="info">
      <div class="pd-info-grid">
        <div class="pd-card">
          <div class="pd-card-head"><div><h3>基本信息</h3><p>歌单作为独立内容资产维护，不绑定具体客户或项目。</p></div><button class="pd-text-btn" type="button" data-pd-action="edit">编辑</button></div>
          <dl class="pd-kv">
            <dt>歌单 ID</dt><dd>PL-202609-0174</dd>
            <dt>歌单名称</dt><dd>影石旅行候选池</dd>
            <dt>类型</dt><dd><span class="pd-pill">普通歌单</span></dd>
            <dt>分类</dt><dd>旅行户外</dd>
            <dt>状态</dt><dd><span class="pd-state"><i></i>启用</span></dd>
            <dt>维护方式</dt><dd>人工维护</dd>
            <dt>创建人</dt><dd>王小明</dd>
            <dt>创建时间</dt><dd>2026-09-05 14:32</dd>
            <dt>最近更新</dt><dd>2026-09-17 10:32</dd>
          </dl>
        </div>
        <div class="pd-card">
          <div class="pd-card-head"><div><h3>内容说明</h3><p>用于帮助运营理解这个歌单为什么存在、适合什么内容。</p></div></div>
          <div class="pd-description">户外旅行、探索、运动相机等场景的运营精选候选内容。整体偏轻快、自由、开阔，优先保留节奏清晰、画面适配度高的全球可授权歌曲。</div>
          <div class="pd-info-block"><span>运营标签</span><div class="pd-tags"><b>户外</b><b>旅行</b><b>探索</b><b>运动相机</b><b>轻快</b></div></div>
          <div class="pd-info-block"><span>封面</span><div class="pd-cover-preview"><div class="pd-cover-art">♫</div><div><strong>旅行户外</strong><small>系统默认封面 · 可编辑替换</small></div></div></div>
        </div>
      </div>
    </section>`;
  }

  function deliveryPanel(){
    return `<section class="pd-panel" data-pd-panel="deliveries">
      <div class="pd-reference-note"><div>i</div><p><strong>这里只记录歌单被交付引用的历史。</strong><span>创建交付时会生成独立歌曲快照；之后修改这个歌单，不会改变已经发生的交付。</span></p></div>
      <div class="pd-reference-summary"><div><span>累计创建交付</span><strong>12 次</strong></div><div><span>累计引用歌曲</span><strong>146 首次</strong></div><div><span>最近一次</span><strong>今天 11:42</strong></div><div><span>涉及客户</span><strong>3 家</strong></div></div>
      <div class="pd-card pd-reference-card"><div class="pd-card-head"><div><h3>最近交付引用</h3><p>查看这个歌单曾作为哪些交付的来源。</p></div><button class="pd-text-btn" type="button" data-route="deliveries">查看全部交付</button></div>
        <div class="pd-table-wrap"><table class="pd-table refs"><thead><tr><th>Delivery ID</th><th>客户 / 项目</th><th>引用歌曲</th><th>创建时间</th><th>操作人</th><th></th></tr></thead><tbody>${deliveryRefs.map(r=>`<tr><td><button class="pd-link" type="button" data-route="delivery-detail">${r.id}</button></td><td><strong>${r.customer}</strong><small>${r.project}</small></td><td>${r.songs}</td><td>${r.time}</td><td>${r.operator}</td><td><button class="pd-row-link" type="button" data-route="delivery-detail">查看交付</button></td></tr>`).join('')}</tbody></table></div>
      </div>
    </section>`;
  }

  function logPanel(){
    return `<section class="pd-panel" data-pd-panel="logs"><div class="pd-card"><div class="pd-card-head"><div><h3>操作记录</h3><p>只记录歌单资产本身的创建、编辑和歌曲维护。</p></div></div><div class="pd-log-list">${logs.map((x,i)=>`<div class="pd-log"><span class="pd-log-dot ${i===0?'active':''}"></span><div><strong>${x[2]}</strong><p>${x[3]}</p><small>${x[0]} · ${x[1]}</small></div></div>`).join('')}</div></div></section>`;
  }

  Page.playlistDetail = () => `<div class="pd-page">
    <section class="pd-hero">
      <div class="pd-hero-main"><div class="pd-hero-cover">♫</div><div class="pd-hero-copy"><div class="pd-eyebrow">PL-202609-0174</div><h1>影石旅行候选池</h1><p>户外旅行、探索、运动相机等场景的运营精选候选内容。</p><div class="pd-meta"><span class="pd-pill">普通歌单</span><span>旅行户外</span><span class="pd-state"><i></i>启用</span><span>最近更新 今天 10:32</span></div></div></div>
      <div class="pd-hero-actions"><button class="pd-btn" type="button" data-pd-action="play-all">▶ 播放全部</button><button class="pd-btn" type="button" data-pd-action="copy">复制歌单</button><button class="pd-btn primary" type="button" data-pd-action="edit">编辑歌单</button></div>
      <div class="pd-kpis"><div><span>歌曲</span><strong>128 首</strong></div><div><span>总时长</span><strong>7 小时 46 分</strong></div><div><span>交付引用</span><strong>12 次</strong></div><div><span>创建时间</span><strong>09-05</strong></div></div>
    </section>

    <nav class="pd-tabs">
      <button class="active" type="button" data-pd-tab="songs">歌曲 <span>128</span></button>
      <button type="button" data-pd-tab="info">歌单信息</button>
      <button type="button" data-pd-tab="deliveries">交付引用 <span>12</span></button>
      <button type="button" data-pd-tab="logs">操作记录</button>
    </nav>

    ${songsPanel()}${infoPanel()}${deliveryPanel()}${logPanel()}
  </div>`;

  if (typeof routes !== 'undefined' && routes['playlist-detail']) routes['playlist-detail'].render = Page.playlistDetail;

  function toast(text){
    let node=document.getElementById('pdToast');
    if(!node){node=document.createElement('div');node.id='pdToast';node.className='pd-toast';document.body.appendChild(node);}
    node.textContent=text;node.classList.add('show');clearTimeout(window.__pdToast);window.__pdToast=setTimeout(()=>node.classList.remove('show'),1500);
  }

  document.addEventListener('click',e=>{
    const tab=e.target.closest('[data-pd-tab]');
    if(tab){
      const page=tab.closest('.pd-page'); if(!page) return;
      page.querySelectorAll('[data-pd-tab]').forEach(x=>x.classList.remove('active'));
      page.querySelectorAll('[data-pd-panel]').forEach(x=>x.classList.remove('active'));
      tab.classList.add('active');
      page.querySelector(`[data-pd-panel="${tab.dataset.pdTab}"]`)?.classList.add('active');
      return;
    }
    const action=e.target.closest('[data-pd-action]');
    if(!action || !action.closest('.pd-page')) return;
    const a=action.dataset.pdAction;
    if(a==='play-all'){toast('开始顺序试听歌单');return;}
    if(a==='play-one'){toast('开始试听');return;}
    if(a==='copy'){toast('已复制为新的普通歌单');return;}
    if(a==='edit'){toast('打开歌单信息编辑');return;}
    if(a==='add'){toast('打开曲库选择歌曲');return;}
    if(a==='export'){toast('已准备导出 128 首歌曲');return;}
    if(a==='remove'){toast('Demo：歌曲已从当前歌单移出');return;}
  });
})();