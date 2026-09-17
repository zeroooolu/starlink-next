(() => {
  const rows = [
    {id:'16375366',title:'Illusionary Daytime',artist:'pxfeqlttk',album:'Illusionary Daytime (The Remixes)',albumId:'3538713',cp:'SYNTH ALLEY',scene:'影视同步 / 数字发行',territory:'全球',term:'2027-12-31',listed:'2026-06-22 17:56',status:'已上架',source:'人工上架'},
    {id:'22648659',title:'Midnight Drive',artist:'Nova Lane',album:'Night Runner',albumId:'ALB-88120',cp:'Nova Lane Studio',scene:'短视频 / UGC',territory:'全球',term:'长期',listed:'2026-09-16 14:18',status:'已上架',source:'智能授权'},
    {id:'22648118',title:'Open Sky',artist:'Mila June',album:'Open Sky',albumId:'ALB-87318',cp:'North Star Records',scene:'影视同步',territory:'全球',term:'2028-03-31',listed:'2026-09-15 10:32',status:'已上架',source:'人工上架'},
    {id:'22647092',title:'Momentum',artist:'Violet Echo',album:'Future Motion',albumId:'ALB-86742',cp:'Violet Echo',scene:'数字发行',territory:'中国大陆及港澳台',term:'2027-06-30',listed:'—',status:'未上架',source:'授权规则'},
    {id:'22646301',title:'New World',artist:'Krewella',album:'New World',albumId:'ALB-85911',cp:'Electronic Works',scene:'数字发行',territory:'中国大陆及港澳台',term:'2026-10-20',listed:'2026-08-28 16:20',status:'已下架',source:'历史上架'}
  ];
  let filtered = [...rows];
  let toastTimer;

  function select(label, options, key){
    return `<div class="ccm-field"><label>${label}</label><div class="ccm-select" data-ccm-select="${key}"><button class="ccm-select-trigger" type="button"><span>${options[0]}</span><svg viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg></button><div class="ccm-select-menu">${options.map((x,i)=>`<button type="button" class="${i===0?'selected':''}" data-value="${x}">${x}</button>`).join('')}</div></div></div>`;
  }

  function combo(label, types, key, placeholder, keyword=false){
    return `<div class="ccm-field"><label>${label}</label><div class="ccm-combo ${keyword?'keyword':''}"><div class="ccm-select" data-ccm-select="${key}-type"><button class="ccm-select-trigger" type="button"><span>${types[0]}</span><svg viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg></button><div class="ccm-select-menu">${types.map((x,i)=>`<button type="button" class="${i===0?'selected':''}" data-value="${x}">${x}</button>`).join('')}</div></div><input class="ccm-input" data-ccm-input="${key}" placeholder="${placeholder}"></div></div>`;
  }

  function statusClass(s){return s==='已上架'?'':'off'}
  function rowHtml(r){
    return `<tr data-id="${r.id}" data-status="${r.status}">
      <td><input class="ccm-check ccm-row-check" type="checkbox"></td>
      <td><div class="ccm-song"><div class="ccm-cover">♫</div><div><strong>${r.title}</strong><small>${r.artist} · Track ${r.id}</small></div></div></td>
      <td><strong>${r.album}</strong><span class="ccm-sub">${r.albumId}</span></td>
      <td>${r.cp}</td>
      <td><span class="ccm-tag">${r.scene.split(' / ')[0]}</span>${r.scene.includes(' / ')?`<span class="ccm-tag">${r.scene.split(' / ')[1]}</span>`:''}<span class="ccm-sub">${r.territory} · 至 ${r.term}</span></td>
      <td>${r.listed}<span class="ccm-sub">${r.source}</span></td>
      <td><span class="ccm-state ${statusClass(r.status)}">${r.status}</span></td>
      <td><div class="ccm-row-actions"><button class="ccm-link" data-ccm-action="toggle">${r.status==='已上架'?'下架':'上架'}</button><button class="ccm-link" data-ccm-action="title">编辑标题</button><button class="ccm-link" data-ccm-action="rights">查看授权</button></div></td>
    </tr>`;
  }

  function renderRows(){
    const body=document.querySelector('#ccmTableBody');
    if(body) body.innerHTML=filtered.map(rowHtml).join('') || `<tr><td colspan="8" style="padding:42px;text-align:center;color:#98a0ab">没有符合当前条件的歌曲</td></tr>`;
    const count=document.querySelector('#ccmResultCount');
    if(count) count.textContent=filtered.length===rows.length?'182,381':filtered.length;
    syncBatch();
  }

  function modal(){
    let mask=document.getElementById('ccmModal');
    if(mask) return mask;
    mask=document.createElement('div');mask.id='ccmModal';mask.className='ccm-modal-mask';
    mask.innerHTML=`<div class="ccm-modal"><div class="ccm-modal-head"><div><h3></h3><p></p></div><button class="ccm-modal-close" type="button">×</button></div><div class="ccm-modal-body"></div><div class="ccm-modal-foot"><button class="ccm-btn ccm-modal-cancel" type="button">取消</button><button class="ccm-btn primary ccm-modal-primary" type="button">确认</button></div></div>`;
    document.body.appendChild(mask);return mask;
  }

  function openModal(title,desc,body,primary='确认',save){
    const m=modal();m.querySelector('h3').textContent=title;m.querySelector('.ccm-modal-head p').textContent=desc;m.querySelector('.ccm-modal-body').innerHTML=body;m.querySelector('.ccm-modal-primary').textContent=primary;m.querySelector('.ccm-modal-primary').onclick=()=>{save?.(m);m.classList.remove('open')};m.classList.add('open');
  }
  function toast(text){let n=document.getElementById('ccmToast');if(!n){n=document.createElement('div');n.id='ccmToast';n.className='ccm-toast';document.body.appendChild(n)}n.textContent=text;n.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>n.classList.remove('show'),1700)}

  function render(panel){
    if(!panel || panel.dataset.ccmEnhanced==='true') return;
    panel.dataset.ccmEnhanced='true';
    panel.innerHTML=`<div class="ccm-shell">
      <div class="ccm-summary"><div><span>客户可用曲库</span><strong>182,381</strong><small>授权规则 + 人工加入</small></div><div><span>已上架</span><strong>176,204</strong><small>可通过客户侧 / API 获取</small></div><div><span>未上架</span><strong>5,849</strong><small>已授权但尚未发布</small></div><div><span>30 天内新增</span><strong>4,812</strong><small>自动 + 人工上架</small></div></div>
      <section class="ccm-filter-card">
        <div class="ccm-filter-grid">
          ${combo('ID 搜索',['Track ID','ISRC','歌曲 UID','专辑 ID'],'id','多个用空格或逗号隔开')}
          ${combo('关键词',['歌曲名称','专辑名称','艺人','厂牌 / CP'],'keyword','歌曲名称、专辑名称、艺人、厂牌',true)}
          ${select('上架状态',['全部','已上架','未上架','已下架'],'status')}
        </div>
        <div class="ccm-filter-row2">
          <div class="ccm-field"><label>上架日期</label><div class="ccm-date-range"><input class="ccm-date" type="date" data-ccm-date="start"><span>—</span><input class="ccm-date" type="date" data-ccm-date="end"></div></div>
          ${select('授权场景',['全部场景','影视同步','数字发行','短视频 / UGC'],'scene')}
          ${select('授权有效期',['全部','长期','1 年以上','30 天内到期'],'term')}
          <div class="ccm-filter-actions"><button class="ccm-btn" data-ccm-action="reset">重置</button><button class="ccm-btn primary" data-ccm-action="query">查询</button></div>
        </div>
      </section>
      <section class="ccm-list-card">
        <div class="ccm-toolbar"><div class="ccm-toolbar-left"><button class="ccm-btn primary" data-ccm-action="add">+ 新增上架</button><button class="ccm-btn" data-ccm-action="export">导出歌曲清单</button><button class="ccm-btn" data-batch="up" disabled>批量上架</button><button class="ccm-btn" data-batch="down" disabled>批量下架</button><button class="ccm-btn danger" data-batch="remove" disabled>批量移除</button></div><div class="ccm-toolbar-right">客户曲库数量：<strong id="ccmResultCount">182,381</strong></div></div>
        <div class="ccm-table-wrap"><table class="ccm-table"><thead><tr><th><input class="ccm-check" id="ccmCheckAll" type="checkbox"></th><th>歌曲信息</th><th>专辑信息</th><th>厂牌 / CP</th><th>授权情况</th><th>上架时间</th><th>状态</th><th>操作</th></tr></thead><tbody id="ccmTableBody"></tbody></table></div>
        <div class="ccm-pagination"><span>每页 20 条 · 当前为 Demo 数据</span><div class="ccm-pages"><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>9120</button></div></div>
      </section>
    </div>`;
    filtered=[...rows];renderRows();
  }

  function selectValue(key){return document.querySelector(`[data-ccm-select="${key}"] .ccm-select-trigger span`)?.textContent.trim()||''}
  function doQuery(){
    const id=(document.querySelector('[data-ccm-input="id"]')?.value||'').trim().toLowerCase();
    const keyword=(document.querySelector('[data-ccm-input="keyword"]')?.value||'').trim().toLowerCase();
    const status=selectValue('status');const scene=selectValue('scene');
    filtered=rows.filter(r=>{
      const idOk=!id || id.split(/[\s,，]+/).some(x=>r.id.toLowerCase().includes(x));
      const keyOk=!keyword || [r.title,r.artist,r.album,r.cp].join(' ').toLowerCase().includes(keyword);
      const statusOk=status==='全部'||!status||r.status===status;
      const sceneOk=scene==='全部场景'||!scene||r.scene.includes(scene);
      return idOk&&keyOk&&statusOk&&sceneOk;
    });renderRows();toast(`找到 ${filtered.length} 条示例结果`);
  }
  function resetFilters(){document.querySelectorAll('[data-ccm-input]').forEach(x=>x.value='');document.querySelectorAll('[data-ccm-date]').forEach(x=>x.value='');document.querySelectorAll('.ccm-select').forEach(s=>{const first=s.querySelector('.ccm-select-menu button');if(first){s.querySelector('.ccm-select-trigger span').textContent=first.textContent;s.querySelectorAll('.ccm-select-menu button').forEach((b,i)=>b.classList.toggle('selected',i===0))}});filtered=[...rows];renderRows();}
  function selectedIds(){return [...document.querySelectorAll('.ccm-row-check:checked')].map(x=>x.closest('tr')?.dataset.id).filter(Boolean)}
  function syncBatch(){const n=selectedIds().length;document.querySelectorAll('[data-batch]').forEach(b=>b.disabled=n===0);const all=document.getElementById('ccmCheckAll');if(all){const boxes=[...document.querySelectorAll('.ccm-row-check')];all.checked=boxes.length>0&&boxes.every(x=>x.checked);all.indeterminate=n>0&&n<boxes.length}}
  function rowFor(el){const id=el.closest('tr')?.dataset.id;return rows.find(r=>r.id===id)}
  function refresh(){filtered=filtered.map(r=>rows.find(x=>x.id===r.id)||r);renderRows()}

  function openAdd(){openModal('新增上架','将已经满足客户授权条件的歌曲加入客户曲库并上架。',`<div class="ccm-form"><div class="ccm-field full"><label>Track ID / ISRC</label><textarea placeholder="支持多个 ID，每行一个，或从曲库检索结果批量加入"></textarea></div><div class="ccm-field"><label>来源</label><div class="ccm-input" style="padding:9px 10px;border-radius:7px">人工选择</div></div><div class="ccm-field"><label>上架方式</label><div class="ccm-input" style="padding:9px 10px;border-radius:7px">立即上架</div></div><div class="ccm-field full"><div class="ccm-modal-note">系统会再次校验当前客户的授权场景、区域和有效期，不满足授权条件的歌曲不会被上架。</div></div></div>`,'确认上架',()=>toast('已提交上架，授权校验通过后生效'))}
  function editTitle(r){openModal('编辑客户侧标题',`仅修改 ${r.title} 在当前客户曲库中的展示标题，不修改母曲库元数据。`,`<div class="ccm-form"><div class="ccm-field full"><label>当前标题</label><input class="ccm-input" style="border-radius:7px;padding:0 10px" value="${r.title}"></div><div class="ccm-field full"><label>副标题 / 展示备注</label><input class="ccm-input" style="border-radius:7px;padding:0 10px" placeholder="可选"></div></div>`,'保存标题',()=>toast('客户侧标题已更新'))}
  function rights(r){openModal('客户授权详情',`${r.title} 为什么可以进入当前客户曲库。`,`<div class="ccm-modal-note" style="margin-bottom:12px"><b>${r.title}</b> · Track ${r.id}</div><div class="ccm-form"><div class="ccm-field"><label>授权场景</label><div>${r.scene}</div></div><div class="ccm-field"><label>授权区域</label><div>${r.territory}</div></div><div class="ccm-field"><label>授权有效期</label><div>${r.term}</div></div><div class="ccm-field"><label>进入客户曲库方式</label><div>${r.source}</div></div><div class="ccm-field full"><div class="ccm-modal-note">上架状态只控制该歌曲是否对客户发布；是否具备授权资格仍由客户授权规则实时计算。</div></div></div>`,'知道了',()=>{})}

  document.addEventListener('click',e=>{
    const trigger=e.target.closest('.ccm-select-trigger');if(trigger){const s=trigger.closest('.ccm-select');document.querySelectorAll('.ccm-select.open').forEach(x=>{if(x!==s)x.classList.remove('open')});s.classList.toggle('open');return}
    const option=e.target.closest('.ccm-select-menu button');if(option){const s=option.closest('.ccm-select');s.querySelectorAll('button').forEach(x=>x.classList.remove('selected'));option.classList.add('selected');s.querySelector('.ccm-select-trigger span').textContent=option.dataset.value||option.textContent;s.classList.remove('open');return}
    if(!e.target.closest('.ccm-select')) document.querySelectorAll('.ccm-select.open').forEach(x=>x.classList.remove('open'));
    if(e.target.closest('[data-ccm-action="query"]')) return doQuery();
    if(e.target.closest('[data-ccm-action="reset"]')) return resetFilters();
    if(e.target.closest('[data-ccm-action="add"]')) return openAdd();
    if(e.target.closest('[data-ccm-action="export"]')) return toast('歌曲清单已生成（Demo）');
    const batch=e.target.closest('[data-batch]');if(batch){const ids=selectedIds();if(!ids.length)return;const act=batch.dataset.batch;openModal(act==='remove'?'批量移除':'批量'+(act==='up'?'上架':'下架'),`已选择 ${ids.length} 首歌曲。`, `<div class="ccm-modal-note">${act==='remove'?'移除后歌曲将不再属于当前客户曲库；不会删除母曲库歌曲。':'操作只影响当前客户的上架状态，不修改歌曲授权规则。'}</div>`, '确认操作',()=>{ids.forEach(id=>{const r=rows.find(x=>x.id===id);if(r&&act!=='remove'){r.status=act==='up'?'已上架':'已下架';r.listed=act==='up'?'刚刚':r.listed}});if(act==='remove'){ids.forEach(id=>{const i=rows.findIndex(x=>x.id===id);if(i>-1)rows.splice(i,1)})}filtered=[...rows];renderRows();toast('批量操作已完成')});return}
    const action=e.target.closest('[data-ccm-action]');if(action&&action.closest('tr')){const r=rowFor(action);if(!r)return;if(action.dataset.ccmAction==='toggle'){r.status=r.status==='已上架'?'已下架':'已上架';if(r.status==='已上架')r.listed='刚刚';refresh();toast(r.status==='已上架'?'歌曲已上架':'歌曲已下架')}if(action.dataset.ccmAction==='title')editTitle(r);if(action.dataset.ccmAction==='rights')rights(r);return}
    if(e.target.matches('#ccmCheckAll')){document.querySelectorAll('.ccm-row-check').forEach(x=>x.checked=e.target.checked);syncBatch();return}
    if(e.target.matches('.ccm-row-check')) return syncBatch();
    if(e.target.closest('.ccm-modal-close,.ccm-modal-cancel')||e.target.id==='ccmModal'){modal().classList.remove('open')}
  });

  function enhance(){render(document.querySelector('[data-cd-panel="catalog"]'))}
  const workspace=document.getElementById('workspace');if(workspace)new MutationObserver(enhance).observe(workspace,{childList:true,subtree:true});
  document.addEventListener('DOMContentLoaded',enhance);enhance();
})();