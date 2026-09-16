Page.customers = () => `
  <div class="customer-page">
    <div class="customer-head">
      <div>
        <h1>客户管理</h1>
        <p>统一管理客户基本信息、合作状态、客户曲库、项目和接入方式。</p>
      </div>
      <button class="customer-primary" type="button">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
        新建客户
      </button>
    </div>

    <section class="customer-filter-card">
      <div class="customer-filter-top">
        <div class="customer-search-block">
          <label>搜索客户</label>
          <div class="customer-search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            <input id="customerSearchInput" placeholder="客户名称、简称、联系人或 Client ID" />
            <span class="customer-search-kbd">⌘ K</span>
          </div>
        </div>
        ${customerSelect('合作状态',['全部状态','合作中','待激活','已暂停','已终止'])}
        ${customerSelect('接入方式',['全部方式','API','在线试听','下载','网盘','多种方式'])}
        ${customerSelect('行业',['全部行业','智能硬件','运动健身','航空','短视频 / UGC','空间音乐','其他'])}
      </div>
      <div class="customer-filter-bottom">
        <div class="customer-quick-filters">
          <span>快捷筛选</span>
          <button class="customer-chip active" data-customer-filter="all">全部客户</button>
          <button class="customer-chip" data-customer-filter="api">API 客户</button>
          <button class="customer-chip" data-customer-filter="pending">有待处理需求</button>
          <button class="customer-chip" data-customer-filter="recent">近期有交付</button>
        </div>
        <div class="customer-filter-actions">
          <button class="customer-secondary" id="customerResetBtn" type="button">重置</button>
          <button class="customer-primary compact" type="button">查询</button>
        </div>
      </div>
    </section>

    <section class="customer-list-card">
      <div class="customer-list-head">
        <div><strong>126</strong><span> 家客户</span></div>
        <div class="customer-list-tools">
          <button type="button" class="customer-tool-btn">
            <svg viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
            列设置
          </button>
          <button type="button" class="customer-tool-btn">
            最近更新
            <svg viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg>
          </button>
        </div>
      </div>

      <div class="customer-table-wrap">
        <table class="customer-table">
          <thead>
            <tr>
              <th>客户</th>
              <th>合作状态</th>
              <th>客户曲库</th>
              <th>项目</th>
              <th>待处理需求</th>
              <th>接入方式</th>
              <th>最近交付</th>
              <th>更新时间</th>
              <th class="align-right">操作</th>
            </tr>
          </thead>
          <tbody id="customerTableBody">
            ${customerRows()}
          </tbody>
        </table>
      </div>

      <div class="customer-pagination">
        <span>每页 20 条，共 126 条</span>
        <div class="customer-pages"><button disabled>‹</button><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>7</button><button>›</button></div>
      </div>
    </section>
  </div>
`;

function customerSelect(label, options){
  return `<div class="cm-field"><label>${label}</label><div class="cm-select"><button class="cm-select-trigger" type="button"><span>${options[0]}</span><svg viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg></button><div class="cm-select-menu">${options.map((x,i)=>`<button class="cm-option ${i===0?'selected':''}" type="button">${x}${i===0?'<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>':''}</button>`).join('')}</div></div></div>`;
}

function customerRows(){
  const rows=[
    {name:'影石 Insta360',short:'影石',id:'CUS-00182',industry:'智能硬件',status:'合作中',catalog:'182,381',projects:'4',pending:'1',access:['API'],last:'今天 14:21',updated:'今天 15:08',tone:'blue',filter:'api pending recent'},
    {name:'Keep',short:'Keep',id:'CUS-00176',industry:'运动健身',status:'合作中',catalog:'82,128',projects:'3',pending:'2',access:['在线试听','下载'],last:'昨天 16:42',updated:'今天 11:30',tone:'green',filter:'pending recent'},
    {name:'中国南方航空',short:'南航',id:'CUS-00164',industry:'航空',status:'合作中',catalog:'31,822',projects:'2',pending:'1',access:['在线试听'],last:'昨天 11:18',updated:'昨天 18:20',tone:'purple',filter:'pending recent'},
    {name:'Mood Media',short:'Mood',id:'CUS-00151',industry:'空间音乐',status:'合作中',catalog:'125,603',projects:'5',pending:'0',access:['API','下载'],last:'09-13 15:22',updated:'09-15 10:12',tone:'orange',filter:'api recent'},
    {name:'Superfect',short:'SF',id:'CUS-00138',industry:'短视频 / UGC',status:'待激活',catalog:'0',projects:'1',pending:'0',access:['API'],last:'—',updated:'09-12 17:42',tone:'blue',filter:'api'},
    {name:'FilmAction',short:'FA',id:'CUS-00125',industry:'短视频 / UGC',status:'已暂停',catalog:'18,221',projects:'1',pending:'0',access:['网盘'],last:'09-01 10:12',updated:'09-08 09:30',tone:'gray',filter:''}
  ];
  return rows.map(r=>`<tr class="customer-row" data-filter="${r.filter}" data-route="customer-detail">
    <td>
      <div class="customer-identity">
        <div class="customer-logo ${r.tone}">${r.short.slice(0,2)}</div>
        <div class="customer-name-wrap"><strong>${r.name}</strong><span>${r.industry} · ${r.id}</span></div>
      </div>
    </td>
    <td><span class="customer-status ${statusClass(r.status)}"><i></i>${r.status}</span></td>
    <td><strong class="customer-number">${r.catalog}</strong><span class="cell-sub">首可用歌曲</span></td>
    <td><a class="customer-count-link" data-route="projects">${r.projects}</a></td>
    <td>${Number(r.pending)>0?`<span class="customer-pending">${r.pending}</span>`:'<span class="cell-muted">—</span>'}</td>
    <td><div class="customer-access">${r.access.map(x=>`<span>${x}</span>`).join('')}</div></td>
    <td><span>${r.last}</span></td>
    <td><span class="cell-muted">${r.updated}</span></td>
    <td class="align-right"><div class="customer-row-actions"><button class="customer-icon-btn" type="button" title="查看详情" data-route="customer-detail"><svg viewBox="0 0 24 24"><path d="M4 12s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6Z"/><circle cx="12" cy="12" r="2.5"/></svg></button><button class="customer-icon-btn" type="button" title="更多"><svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg></button></div></td>
  </tr>`).join('');
}

function statusClass(status){
  return status==='合作中'?'active':status==='待激活'?'pending':status==='已暂停'?'paused':'closed';
}

if(routes && routes.customers) routes.customers.render=Page.customers;

document.addEventListener('click',e=>{
  const trigger=e.target.closest('.cm-select-trigger');
  if(trigger){
    e.stopPropagation();
    const select=trigger.closest('.cm-select');
    document.querySelectorAll('.cm-select.open').forEach(x=>{if(x!==select)x.classList.remove('open')});
    select.classList.toggle('open');
    return;
  }
  const option=e.target.closest('.cm-option');
  if(option){
    e.stopPropagation();
    const select=option.closest('.cm-select');
    select.querySelectorAll('.cm-option').forEach(x=>{x.classList.remove('selected');const s=x.querySelector('svg');if(s)s.remove()});
    option.classList.add('selected');
    option.insertAdjacentHTML('beforeend','<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>');
    select.querySelector('.cm-select-trigger span').textContent=option.textContent.trim();
    select.classList.remove('open');
    return;
  }
  const chip=e.target.closest('[data-customer-filter]');
  if(chip){
    document.querySelectorAll('.customer-chip').forEach(x=>x.classList.remove('active'));
    chip.classList.add('active');
    const key=chip.dataset.customerFilter;
    document.querySelectorAll('.customer-row').forEach(row=>row.style.display=key==='all'||row.dataset.filter.split(' ').includes(key)?'':'none');
    return;
  }
  if(e.target.closest('#customerResetBtn')){
    const input=document.querySelector('#customerSearchInput');if(input)input.value='';
    document.querySelectorAll('.customer-chip').forEach((x,i)=>x.classList.toggle('active',i===0));
    document.querySelectorAll('.customer-row').forEach(row=>row.style.display='');
    document.querySelectorAll('.cm-select').forEach(select=>{const first=select.querySelector('.cm-option');select.querySelector('.cm-select-trigger span').textContent=first.textContent.trim();});
    return;
  }
  if(!e.target.closest('.cm-select'))document.querySelectorAll('.cm-select.open').forEach(x=>x.classList.remove('open'));
});

document.addEventListener('input',e=>{
  if(e.target.id!=='customerSearchInput')return;
  const q=e.target.value.trim().toLowerCase();
  document.querySelectorAll('.customer-row').forEach(row=>row.style.display=!q||row.textContent.toLowerCase().includes(q)?'':'none');
});
