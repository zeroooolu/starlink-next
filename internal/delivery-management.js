Page.deliveries = () => `
  <div class="delivery-page">
    <div class="delivery-head">
      <div><h1>交付记录</h1><p>记录歌单如何发送给客户，以及客户挑选、确认、下载或 API 上架的完整过程。</p></div>
      <div class="delivery-actions"><button class="delivery-btn">导出记录</button><button class="delivery-btn primary">+ 创建交付</button></div>
    </div>

    <section class="delivery-filter-shell">
      <div class="delivery-filter-grid">
        <div class="delivery-field"><label>搜索</label><div class="delivery-search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input placeholder="客户、项目、歌单名称或交付 ID" /></div></div>
        ${deliverySelect('所属客户',['全部客户','影石 Insta360','Keep','南航','公共试听'])}
        ${deliverySelect('所属项目',['全部项目','Insta360','跑步音乐','机上娱乐','试听'])}
        ${deliverySelect('状态',['全部状态','待确认','待客户反馈','已确认','已完成','已终止'])}
        ${deliverySelect('交付方式',['全部方式','在线试听','下载','API 上架','网盘'])}
        <div class="delivery-filter-buttons"><button class="delivery-btn">重置</button><button class="delivery-btn primary">查询</button></div>
      </div>
    </section>

    <section class="delivery-list-shell">
      <div class="delivery-list-top"><div><strong>共 1,281 条交付记录</strong><span> · 最近 30 天 86 条</span></div><span>按最近更新时间排序</span></div>
      <div class="delivery-table-wrap"><table class="delivery-table">
        <thead><tr><th>交付信息</th><th>客户</th><th>项目</th><th>来源歌单</th><th>歌曲数</th><th>客户已选</th><th>方式</th><th>状态</th><th>最近更新</th><th style="text-align:right">操作</th></tr></thead>
        <tbody>${deliveryRows()}</tbody>
      </table></div>
      <div class="delivery-pagination"><span>每页 20 条，共 1,281 条</span><div class="delivery-pages"><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>65</button></div></div>
    </section>
  </div>
`;

Page.deliveryDetail = () => `
  <div class="delivery-detail-page">
    <div class="delivery-summary">
      <div class="delivery-summary-top">
        <div class="delivery-summary-title">
          <div class="delivery-summary-icon">K</div>
          <div><h1>Playlist for Apple</h1><div class="delivery-summary-meta"><span><b>待确认</b></span><span>客户：公共试听</span><span>项目：试听</span><span>创建于 2026-09-16 15:02</span><span>ID：DLV-20260916-0182</span></div></div>
        </div>
        <div class="delivery-summary-actions"><button class="delivery-btn">编辑</button><button class="delivery-btn">分享设置</button><button class="delivery-btn">终止</button></div>
      </div>
      <div class="delivery-kpis">
        <div class="delivery-kpi"><span>发送歌曲</span><strong>15 首</strong></div>
        <div class="delivery-kpi"><span>客户已选</span><strong>15 首</strong></div>
        <div class="delivery-kpi"><span>来源歌单</span><strong>Playlist for Apple</strong></div>
        <div class="delivery-kpi"><span>交付方式</span><strong>在线试听 + 下载</strong></div>
        <div class="delivery-kpi"><span>最近反馈</span><strong>今天 15:06</strong></div>
      </div>
    </div>

    <div class="delivery-tabs" id="deliveryTabs">
      <button class="delivery-tab active" data-delivery-tab="all">全部歌曲 <span>(15)</span></button>
      <button class="delivery-tab" data-delivery-tab="selected">已选歌曲 <span>(15)</span></button>
      <button class="delivery-tab" data-delivery-tab="groups">歌曲分组</button>
      <button class="delivery-tab" data-delivery-tab="history">更新记录</button>
      <button class="delivery-tab" data-delivery-tab="download">下载配置</button>
    </div>

    <section class="delivery-panel active" data-delivery-panel="all">${deliverySongsPanel(false)}</section>
    <section class="delivery-panel" data-delivery-panel="selected">${deliverySongsPanel(true)}</section>
    <section class="delivery-panel" data-delivery-panel="groups">
      <div class="delivery-content-card"><div class="delivery-panel-toolbar"><strong>歌曲分组</strong><div class="actions"><button class="delivery-btn">+ 新建分组</button></div></div>
        <div class="delivery-group-grid">
          <div class="delivery-group-card"><h4>客户优先试听</h4><p>6 首 · 排在试听页顶部</p></div>
          <div class="delivery-group-card"><h4>备选内容</h4><p>5 首 · 客户可继续挑选</p></div>
          <div class="delivery-group-card"><h4>补充推荐</h4><p>4 首 · 运营二次追加</p></div>
        </div>
      </div>
    </section>
    <section class="delivery-panel" data-delivery-panel="history">
      <div class="delivery-content-card"><div class="delivery-panel-toolbar"><strong>更新记录</strong><span style="font-size:11px;color:#9097a1">记录歌曲变化、客户反馈与交付动作</span></div>
        <div class="delivery-history">
          <div class="delivery-history-row"><time>09-16 15:06</time><div><strong>客户提交挑选结果</strong><div class="delivery-sub">15 首全部确认</div></div><span class="delivery-status done">客户操作</span></div>
          <div class="delivery-history-row"><time>09-16 15:02</time><div><strong>创建在线试听分享</strong><div class="delivery-sub">允许试听、允许下载 MP3</div></div><span class="delivery-status done">系统</span></div>
          <div class="delivery-history-row"><time>09-16 14:58</time><div><strong>从歌单加入 15 首歌曲</strong><div class="delivery-sub">来源：Playlist for Apple</div></div><span class="delivery-status done">王小明</span></div>
        </div>
      </div>
    </section>
    <section class="delivery-panel" data-delivery-panel="download">${deliveryDownloadPanel()}</section>
  </div>
`;

function deliverySelect(label,options){return `<div class="delivery-field"><label>${label}</label><div class="delivery-select"><button class="delivery-select-trigger" type="button"><span>${options[0]}</span><svg viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg></button><div class="delivery-select-menu">${options.map((x,i)=>`<button class="delivery-option ${i===0?'selected':''}" type="button">${x}</button>`).join('')}</div></div></div>`}

function deliveryRows(){
 const rows=[
  ['DLV-20260916-0182','Playlist for Apple','公共试听','试听','Playlist for Apple',15,15,'在线试听','待确认','今天 15:06','link'],
  ['DLV-20260915-0176','南航_20260827需求','深圳市太华世纪文化传播有限公司','世纪太华公播授权','南航候选池',53,53,'在线试听','已确认','昨天 17:36','link'],
  ['DLV-20260915-0171','260914_热歌','影石创新科技股份有限公司','INSTA360','抖音热歌池',150,32,'API 上架','已确认','昨天 11:47','api'],
  ['DLV-20260914-0149','Keep Q4 跑步音乐','Keep','跑步音乐','欧美运动热歌',80,35,'下载','待客户反馈','09-14 18:03','download'],
  ['DLV-20260914-0142','20260914','深圳市太华世纪文化传播有限公司','世纪太华公播授权','公播精选',15,15,'网盘','已完成','09-14 18:03','download']
 ];
 return rows.map(r=>`<tr class="clickable" data-route="delivery-detail"><td><div class="delivery-title">${r[1]}</div><div class="delivery-sub">${r[0]}</div></td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td><b>${r[5]}</b></td><td>${r[6]}</td><td><span class="delivery-type ${r[10]}">${r[7]}</span></td><td><span class="delivery-status ${r[8]==='已完成'||r[8]==='已确认'?'done':r[8]==='待客户反馈'?'wait':''}">${r[8]}</span></td><td>${r[9]}</td><td><div class="delivery-row-actions"><button class="delivery-icon-btn" title="详情"><svg viewBox="0 0 24 24"><path d="M4 12s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6Z"/><circle cx="12" cy="12" r="2.5"/></svg></button><button class="delivery-icon-btn" title="更多"><svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg></button></div></td></tr>`).join('')
}

function deliverySongsPanel(selectedOnly){
 const songs=[['Visions','9Gmusic','16.7462','02:35｜129bpm','Visions','全球｜至 2099.12.31','已选择'],['Midnight Drive','Nova Lane','88.1','03:18｜128bpm','Night Runner','全球｜短视频','已选择'],['Open Sky','Mila June','81.4','03:42｜124bpm','Open Sky','全球｜UGC','已选择'],['Momentum','Violet Echo','79.3','03:05｜136bpm','Future Motion','中国大陆｜商用','已选择']];
 return `<div class="delivery-content-card"><div class="delivery-panel-toolbar"><strong>${selectedOnly?'客户已选歌曲':'交付歌曲'} · ${selectedOnly?15:15} 首</strong><div class="actions"><button class="delivery-btn">导出筛选</button><button class="delivery-btn">+ 添加歌曲</button></div></div><div style="overflow:auto"><table class="delivery-song-table"><thead><tr><th>歌曲信息</th><th>热度</th><th>音频信息</th><th>专辑</th><th>授权情况</th><th>客户状态</th><th>操作</th></tr></thead><tbody>${songs.map((s,i)=>`<tr><td><div class="delivery-song"><div class="delivery-song-cover">♫</div><div><div class="delivery-title">${s[0]}</div><div class="delivery-sub">${s[1]} · Track ${1306900+i}</div></div></div></td><td>${s[2]}</td><td>${s[3]}<div class="delivery-sub">音质无损｜未知人声</div></td><td>${s[4]}</td><td>${s[5]}</td><td><span class="selection-badge chosen">${s[6]}</span></td><td><button class="delivery-icon-btn" title="试听"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/></svg></button></td></tr>`).join('')}</tbody></table></div></div>`
}

function deliveryDownloadPanel(){return `<div class="delivery-download-layout">
 <div class="delivery-settings-card"><h3>下载配置</h3>
   <div class="setting-section"><div class="switch-row"><div><div class="setting-label">下载权限</div><div class="delivery-sub">控制客户是否可以下载确认后的内容</div></div><button class="toggle-switch on" type="button"></button></div></div>
   <div class="setting-section"><div class="setting-label">下载物料</div><div class="check-row"><label class="check-item"><input type="checkbox" checked>歌曲专辑封面 JPG</label><label class="check-item"><input type="checkbox" checked>128 kbps MP3</label><label class="check-item"><input type="checkbox">320 kbps MP3</label><label class="check-item"><input type="checkbox">WAV 无损</label><label class="check-item"><input type="checkbox">Metadata 表格</label></div></div>
   <div class="setting-section"><div class="setting-label">音频文件命名</div><div class="filename-builder"><span class="filename-token">trackId</span><span>_</span><span class="filename-token">歌曲名称</span><button class="delivery-btn">+ 字段</button></div></div>
   <div class="setting-section"><div class="setting-label">封面文件命名</div><div class="filename-builder"><span class="filename-token">trackId</span><span>_</span><span class="filename-token">歌曲名称</span></div></div>
   <div class="setting-section"><div class="setting-label">下载方式</div><div class="check-row"><label class="check-item"><input type="checkbox" checked>本地下载</label><label class="check-item"><input type="checkbox">网盘</label><label class="check-item"><input type="checkbox">FTP / SFTP</label><label class="check-item"><input type="checkbox">API</label></div></div>
 </div>
 <aside class="delivery-settings-card"><h3>当前配置</h3><div class="delivery-config-summary"><dl><dt>下载权限</dt><dd>已开启</dd><dt>音频</dt><dd>128 kbps MP3</dd><dt>封面</dt><dd>JPG</dd><dt>交付表格</dt><dd>默认模板</dd><dt>文件命名</dt><dd>trackId_歌曲名称</dd><dt>下载方式</dt><dd>本地下载</dd></dl></div><button class="delivery-btn primary" style="width:100%;margin-top:12px">保存配置</button></aside>
 </div>`}

if(routes&&routes.deliveries) routes.deliveries.render=Page.deliveries;
if(routes&&routes['delivery-detail']) routes['delivery-detail'].render=Page.deliveryDetail;

document.addEventListener('click',e=>{
 const trigger=e.target.closest('.delivery-select-trigger');if(trigger){const box=trigger.closest('.delivery-select');document.querySelectorAll('.delivery-select.open').forEach(x=>{if(x!==box)x.classList.remove('open')});box.classList.toggle('open');return}
 const option=e.target.closest('.delivery-option');if(option){const box=option.closest('.delivery-select');box.querySelectorAll('.delivery-option').forEach(x=>x.classList.remove('selected'));option.classList.add('selected');box.querySelector('.delivery-select-trigger span').textContent=option.textContent;box.classList.remove('open');return}
 const tab=e.target.closest('[data-delivery-tab]');if(tab){document.querySelectorAll('.delivery-tab').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.delivery-panel').forEach(x=>x.classList.remove('active'));tab.classList.add('active');document.querySelector(`[data-delivery-panel="${tab.dataset.deliveryTab}"]`)?.classList.add('active');return}
 const toggle=e.target.closest('.toggle-switch');if(toggle){toggle.classList.toggle('on');return}
 if(!e.target.closest('.delivery-select'))document.querySelectorAll('.delivery-select.open').forEach(x=>x.classList.remove('open'));
});
