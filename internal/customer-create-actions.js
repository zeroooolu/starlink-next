(() => {
  let toastTimer;

  function route(){return (location.hash||'#dashboard').replace(/^#/,'').split('?')[0]||'dashboard'}
  function toast(text){
    let n=document.getElementById('ccoToast');
    if(!n){n=document.createElement('div');n.id='ccoToast';n.className='cda-toast';document.body.appendChild(n)}
    n.textContent=text;n.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>n.classList.remove('show'),1800);
  }

  function modal(){
    let mask=document.getElementById('ccoModalMask');
    if(mask) return mask;
    mask=document.createElement('div');mask.id='ccoModalMask';mask.className='cda-modal-mask cco-modal-mask';
    mask.innerHTML=`<div class="cda-modal cco-modal" role="dialog" aria-modal="true"><div class="cda-modal-head"><div><h3></h3><p></p></div><button class="cda-close cco-close" type="button">×</button></div><div class="cda-modal-body"></div><div class="cda-modal-foot"><button class="cd-btn cco-cancel" type="button">取消</button><button class="cd-btn primary cco-primary" type="button">保存</button></div></div>`;
    document.body.appendChild(mask);return mask;
  }
  function close(){modal().classList.remove('open');document.querySelectorAll('.cco-select.open').forEach(x=>x.classList.remove('open'))}
  function open({title,desc='',body='',primary='保存',large=false,required=[],save}){
    const m=modal();m.querySelector('.cco-modal').classList.toggle('large',large);m.querySelector('h3').textContent=title;m.querySelector('.cda-modal-head p').textContent=desc;m.querySelector('.cda-modal-body').innerHTML=body;m.querySelector('.cco-primary').textContent=primary;
    m.querySelector('.cco-primary').onclick=()=>{
      let ok=true;
      required.forEach(name=>{const el=m.querySelector(`[data-name="${name}"]`);const val=value(name);const field=el?.closest('.cda-field');field?.classList.toggle('cco-invalid',!val);if(!val)ok=false});
      if(!ok){toast('请先填写必填信息');return}
      save?.(m.querySelector('.cda-modal-body'));
    };
    m.classList.add('open');requestAnimationFrame(()=>m.querySelector('input,textarea')?.focus());
  }
  function value(name){
    const root=modal();const input=root.querySelector(`input[data-name="${name}"],textarea[data-name="${name}"]`);if(input)return input.value.trim();
    return root.querySelector(`.cco-select[data-name="${name}"] .cco-select-trigger span`)?.textContent.trim()||'';
  }
  function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
  function input(label,name,val='',placeholder='',full=false,required=false){return `<div class="cda-field ${full?'full':''}"><label>${label}${required?'<em>*</em>':''}</label><input data-name="${name}" value="${esc(val)}" placeholder="${placeholder}"></div>`}
  function area(label,name,val='',placeholder='',full=true,required=false){return `<div class="cda-field ${full?'full':''}"><label>${label}${required?'<em>*</em>':''}</label><textarea data-name="${name}" placeholder="${placeholder}">${esc(val)}</textarea></div>`}
  function picker(label,name,options,current=options[0],full=false,required=false){return `<div class="cda-field ${full?'full':''}"><label>${label}${required?'<em>*</em>':''}</label><div class="cco-select" data-name="${name}"><button class="cco-select-trigger" type="button"><span>${current}</span><svg viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg></button><div class="cco-select-menu">${options.map(x=>`<button type="button" class="${x===current?'selected':''}" data-value="${x}">${x}<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg></button>`).join('')}</div></div></div>`}
  function section(title,desc=''){return `<div class="cco-section full"><strong>${title}</strong>${desc?`<span>${desc}</span>`:''}</div>`}

  function openNewCustomer(){
    open({title:'新建客户',desc:'建立客户档案，并初始化合作、接入和客户曲库配置。',large:true,primary:'创建客户',required:['name','short','industry','owner'],body:`<div class="cda-form-grid cco-form">
      ${section('基本信息','用于客户列表、项目和交付中的统一识别。')}
      ${input('客户全称','name','','例如：某某科技有限公司',false,true)}${input('客户简称','short','','例如：Example',false,true)}
      ${picker('行业','industry',['智能硬件','运动健身','航空','短视频 / UGC','空间音乐','互联网 / 内容平台','其他'],'智能硬件',false,true)}${picker('合作状态','status',['待激活','合作中'],'待激活')}
      ${picker('商务负责人','owner',['王小明','李小雨','张伟'],'王小明',false,true)}${input('客户编号','clientId','自动生成','创建后由系统生成')}
      ${section('联系人与合作','记录最常用的客户侧联系人。')}
      ${input('主要联系人','contact','','姓名 / 职位')}${input('联系邮箱','email','','name@example.com')}${input('手机号','phone','','可选')}${input('合作开始日期','start','2026-09-17')}
      ${section('接入能力','可先初始化，后续仍可在客户详情中调整。')}
      <div class="cda-field full"><label>接入方式</label><div class="cda-check-grid cco-access"><label class="cda-check"><input type="checkbox" value="API">API</label><label class="cda-check"><input type="checkbox" value="在线试听" checked>在线试听</label><label class="cda-check"><input type="checkbox" value="下载">下载</label><label class="cda-check"><input type="checkbox" value="网盘">网盘 / SFTP</label></div></div>
      ${area('客户备注','note','','记录合作背景、重点产品线或特殊约束。')}
      <div class="cda-field full"><div class="cda-modal-note">创建客户后会生成独立客户档案。客户曲库初始为空，需通过授权规则计算或人工上架后才会对客户可见。</div></div>
    </div>`,save:body=>{
      const name=value('name'),short=value('short'),industry=value('industry'),status=value('status'),owner=value('owner');
      const accesses=[...body.querySelectorAll('.cco-access input:checked')].map(x=>x.value);const id=`CUS-${String(183+document.querySelectorAll('.customer-row.cco-created').length).padStart(5,'0')}`;
      const tbody=document.getElementById('customerTableBody');
      if(tbody){tbody.insertAdjacentHTML('afterbegin',`<tr class="customer-row cco-created" data-filter="${accesses.includes('API')?'api ':''}" data-route="customer-detail"><td><div class="customer-identity"><div class="customer-logo blue">${esc(short.slice(0,2))}</div><div class="customer-name-wrap"><strong>${esc(name)}</strong><span>${esc(industry)} · ${id}</span></div></div></td><td><span class="customer-status ${status==='合作中'?'active':'pending'}"><i></i>${status}</span></td><td><strong class="customer-number">0</strong><span class="cell-sub">首可用歌曲</span></td><td><a class="customer-count-link">0</a></td><td><span class="cell-muted">—</span></td><td><div class="customer-access">${accesses.length?accesses.map(x=>`<span>${x}</span>`).join(''):'<span>待配置</span>'}</div></td><td>—</td><td><span class="cell-muted">刚刚</span></td><td class="align-right"><div class="customer-row-actions"><button class="customer-icon-btn" type="button" data-route="customer-detail" title="查看详情"><svg viewBox="0 0 24 24"><path d="M4 12s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6Z"/><circle cx="12" cy="12" r="2.5"/></svg></button></div></td></tr>`);const count=document.querySelector('.customer-list-head strong');if(count)count.textContent=String(Number(count.textContent||126)+1);const p=document.querySelector('.customer-pagination>span');if(p)p.textContent='每页 20 条，共 127 条'}
      close();toast(`客户「${name}」已创建`);
    }});
  }

  function projectForm(prefillCustomer='影石 Insta360'){
    return `<div class="cda-form-grid cco-form">${section('项目基本信息','项目是客户长期合作与需求、交付的业务容器。')}${picker('所属客户','customer',['影石 Insta360','Keep','中国南方航空','Mood Media'],prefillCustomer,false,true)}${input('项目名称','projectName','','例如：新产品线内容音乐',false,true)}${picker('负责人','projectOwner',['王小明','李小雨','张伟'],'王小明')}${picker('项目状态','projectStatus',['待启动','进行中'],'待启动')}${input('合作场景','scene','','例如：运动相机 / UGC / 短视频',true,true)}${input('目标区域','territory','全球')}${input('开始日期','projectStart','2026-09-17')}${input('结束日期','projectEnd','长期')}${input('更新节奏','cadence','','例如：每周 7–8 首')}${area('项目说明','projectNote','','记录合作背景、内容偏好、产品范围和项目级约束。')}</div>`;
  }
  function openNewProject(prefillCustomer='影石 Insta360'){
    open({title:'新建项目',desc:'创建客户长期合作项目，并作为需求和交付的归属容器。',large:true,primary:'创建项目',required:['customer','projectName','scene'],body:projectForm(prefillCustomer),save:()=>{
      const name=value('projectName'),customer=value('customer'),scene=value('scene'),owner=value('projectOwner'),status=value('projectStatus');const id=`PRJ-2026-${String(59+document.querySelectorAll('.wf-page .cco-created-project').length).padStart(4,'0')}`;
      if(route()==='projects'){
        const tbody=document.querySelector('.wf-page .wf-table tbody');
        if(tbody)tbody.insertAdjacentHTML('afterbegin',`<tr class="clickable cco-created-project" data-route="project-detail"><td><div class="wf-title">${esc(name)}</div><div class="wf-sub">${id}</div></td><td>${esc(customer)}</td><td>${esc(scene)}</td><td>2026-09-17 ～ 长期</td><td><b>0</b></td><td>0 次 · 0 首</td><td>${owner}</td><td><span class="wf-status ${status==='进行中'?'ok':'doing'}">${status}</span></td><td>刚刚</td><td><button class="wf-row-btn" data-route="project-detail">详情</button></td></tr>`);
      }
      close();toast(`项目「${name}」已创建`);
    }});
  }

  function requirementForm(prefillProject='Insta360 内容音乐'){
    return `<div class="cda-form-grid cco-form">${section('需求来源','尽量保留客户原始表达，同时整理为可执行条件。')}${picker('所属客户','reqCustomer',['影石 Insta360','Keep','中国南方航空'],'影石 Insta360')}${picker('所属项目','reqProject',['Insta360 内容音乐','影石无人机音乐','Ace Pro 内容音乐','Keep 跑步课程音乐','南航机上娱乐音乐'],prefillProject,false,true)}${input('需求标题','reqTitle','','例如：秋季户外旅行音乐',true,true)}${picker('负责人','reqOwner',['王小明','李小雨','张伟'],'王小明')}${input('截止时间','reqDue','2026-09-20')}${input('目标数量','reqTarget','8 首')}${picker('优先级','priority',['普通','高','紧急'],'普通')}${area('客户原始需求','rawReq','','保留邮件、企业微信或会议中的客户原话。',true,true)}${section('结构化条件')}${input('检索条件','reqTags','户外 / 旅行 / 高热 / 全球',true)}${input('使用场景','reqScene','短视频 / UGC')}${input('授权区域','reqTerritory','全球')}</div>`;
  }
  function openNewRequirement(prefillProject='Insta360 内容音乐'){
    open({title:'新建需求',desc:'把客户需求转成可追踪、可流转、可关联交付的工单。',large:true,primary:'创建工单',required:['reqProject','reqTitle','rawReq'],body:requirementForm(prefillProject),save:()=>{
      const title=value('reqTitle'),customer=value('reqCustomer'),project=value('reqProject'),tags=value('reqTags'),target=value('reqTarget'),owner=value('reqOwner');const id=`REQ-20260917-${String(30+document.querySelectorAll('.cco-created-requirement').length).padStart(3,'0')}`;
      if(route()==='requirements'){
        const tbody=document.querySelector('.wf-page .req-table tbody');
        if(tbody)tbody.insertAdjacentHTML('afterbegin',`<tr class="clickable cco-created-requirement" data-route="requirement-detail"><td><div class="wf-title">${esc(title)}</div><div class="wf-sub">${id}</div></td><td><div class="wf-title">${esc(customer)}</div><div class="wf-sub">${esc(project)}</div></td><td>${esc(tags)}</td><td>${esc(target)}</td><td>待筛选候选</td><td>${owner}</td><td>09-20</td><td><span class="wf-status">待处理</span></td><td>刚刚</td></tr>`);
      }
      close();toast(`需求工单「${title}」已创建`);
    }});
  }

  function deliveryForm(prefillProject='Insta360 内容音乐',prefillReq='REQ-20260916-028 · 户外旅行音乐周更'){
    return `<div class="cda-form-grid cco-form">${section('交付关联','正式交付会保留创建时的歌曲快照。')}${input('交付名称','deliveryName','0917 客户内容交付','',true,true)}${picker('所属项目','deliveryProject',['Insta360 内容音乐','影石无人机音乐','Ace Pro 内容音乐'],prefillProject,false,true)}${picker('关联需求','deliveryReq',['REQ-20260916-028 · 户外旅行音乐周更','REQ-20260915-024 · 无人机首发配乐','不关联需求'],prefillReq)}${picker('来源内容','deliverySource',['影石旅行候选池 · 128 首','户外旅行智能歌单 · 2,812 首','手动添加歌曲'],'影石旅行候选池 · 128 首')}${picker('交付方式','deliveryMethod',['在线试听','在线试听 + 下载','API 上架','网盘 / SFTP'],'在线试听',false,true)}${input('客户反馈截止','deliveryDue','2026-09-20')}<div class="cda-field full"><label>客户权限</label><div class="cda-check-grid"><label class="cda-check"><input type="checkbox" checked>允许在线播放试听</label><label class="cda-check"><input type="checkbox" checked>允许客户选择 / 淘汰</label><label class="cda-check"><input type="checkbox">允许下载 MP3</label><label class="cda-check"><input type="checkbox">允许下载 WAV</label></div></div>${area('给客户的说明','deliveryNote','请试听后提交选取结果。')}</div>`;
  }
  function openNewDelivery(prefillProject, prefillReq){
    open({title:'创建交付',desc:'从项目或需求创建一次独立客户交付。',large:true,primary:'创建并查看交付',required:['deliveryName','deliveryProject','deliveryMethod'],body:deliveryForm(prefillProject,prefillReq),save:()=>{close();toast('交付已创建并生成歌曲快照');setTimeout(()=>location.hash='#delivery-detail',180)}});
  }

  function openProcessRecord(){
    open({title:'添加处理记录',desc:'记录本次需求处理动作、客户反馈或内部进展。',primary:'添加记录',required:['recordType','recordContent'],body:`<div class="cda-form-grid cco-form">${picker('记录类型','recordType',['内部处理','客户反馈','候选更新','状态变更'],'内部处理',false,true)}${picker('记录人','recordOwner',['王小明','李小雨','张伟'],'王小明')}${area('记录内容','recordContent','','例如：已补充 12 首全球授权的户外旅行音乐。',true,true)}${input('关联交付 / 歌单','recordRef','','可选')}</div>`,save:()=>{close();toast('处理记录已添加到需求时间线')}});
  }

  function openNewEntitlementScene(){
    open({title:'新增授权场景',desc:'为当前客户增加新的内容使用场景和对应权利要求。',large:true,primary:'新增并重新计算',required:['entScene'],body:`<div class="cda-form-grid cco-form">${picker('应用场景','entScene',['短视频 / UGC','空间音乐','运动健身','车载 / 智能终端','KTV','其他'],'短视频 / UGC',false,true)}${picker('与其他场景关系','entRelation',['AND','OR'],'AND')}<div class="cda-field full"><label>要求权利项</label><div class="cda-check-grid cco-rights"><label class="cda-check"><input type="checkbox" value="词版权" checked>词版权</label><label class="cda-check"><input type="checkbox" value="曲版权" checked>曲版权</label><label class="cda-check"><input type="checkbox" value="录音版权" checked>录音版权</label><label class="cda-check"><input type="checkbox" value="表演者权" checked>表演者权</label><label class="cda-check"><input type="checkbox" value="独家授权">独家授权</label><label class="cda-check"><input type="checkbox" value="有定价权">有定价权</label></div></div>${picker('授权区域','entTerritory',['全球','中国大陆','中国大陆及港澳台','指定区域'],'全球')}${picker('授权有效期','entTerm',['大于 1 年','大于 6 个月','长期有效'],'大于 1 年')}<div class="cda-field full"><div class="cda-modal-note">新增后会重新计算客户可用曲库，但不会改变历史交付中的授权快照。</div></div></div>`,save:body=>{
      const scene=value('entScene');const rights=[...body.querySelectorAll('.cco-rights input:checked')].map(x=>x.value);const card=[...document.querySelectorAll('[data-cd-panel="entitlement"] .cd-card')].find(c=>c.querySelector('h3')?.textContent.trim()==='客户曲库授权规则');const note=card?.querySelector('.cd-note');if(note)note.insertAdjacentHTML('beforebegin',`<div class="cd-rights-block"><div class="cd-rights-title"><strong>${esc(scene)}</strong><span class="cd-link">编辑</span></div><div class="cd-rights-row"><label>权利项</label><div>${rights.map(x=>`<span class="cd-chip">${x}</span>`).join('')}</div></div></div>`);close();toast(`已新增「${scene}」授权场景，正在重新计算曲库`);
    }});
  }

  function enhance(){
    const panel=document.querySelector('[data-cd-panel="entitlement"]');if(panel && !panel.querySelector('[data-cco-action="new-entitlement"]')){
      const card=[...panel.querySelectorAll('.cd-card')].find(c=>c.querySelector('h3')?.textContent.trim()==='客户曲库授权规则');const head=card?.querySelector('.cd-card-head');if(head){const actions=head.querySelector('.cco-head-actions')||document.createElement('div');actions.className='cco-head-actions';if(!actions.parentNode){const existing=head.querySelector('.cd-btn');if(existing){existing.remove();actions.appendChild(existing)}head.appendChild(actions)}actions.insertAdjacentHTML('afterbegin','<button class="cd-btn" type="button" data-cco-action="new-entitlement">+ 新增场景</button>')}}
  }

  document.addEventListener('click',e=>{
    const closeBtn=e.target.closest('.cco-close,.cco-cancel');if(closeBtn){close();return}
    if(e.target.id==='ccoModalMask'){close();return}
    const trigger=e.target.closest('.cco-select-trigger');if(trigger){e.preventDefault();const s=trigger.closest('.cco-select');document.querySelectorAll('.cco-select.open').forEach(x=>{if(x!==s)x.classList.remove('open')});s.classList.toggle('open');return}
    const option=e.target.closest('.cco-select-menu button');if(option){e.preventDefault();const s=option.closest('.cco-select');s.querySelector('.cco-select-trigger span').textContent=option.dataset.value||option.textContent.trim();s.querySelectorAll('.cco-select-menu button').forEach(x=>x.classList.toggle('selected',x===option));s.classList.remove('open');s.closest('.cda-field')?.classList.remove('cco-invalid');return}
    if(!e.target.closest('.cco-select'))document.querySelectorAll('.cco-select.open').forEach(x=>x.classList.remove('open'));
  });

  document.addEventListener('input',e=>{if(e.target.closest('#ccoModalMask'))e.target.closest('.cda-field')?.classList.remove('cco-invalid')});

  document.addEventListener('click',e=>{
    const r=route();const btn=e.target.closest('button,[data-cco-action]');if(!btn)return;const text=(btn.textContent||'').trim();const action=btn.dataset.ccoAction;
    if(action==='new-entitlement'){e.preventDefault();e.stopImmediatePropagation();openNewEntitlementScene();return}
    if(r==='customers' && text.includes('新建客户')){e.preventDefault();e.stopImmediatePropagation();openNewCustomer();return}
    if(r==='projects' && text==='+ 新建项目'){e.preventDefault();e.stopImmediatePropagation();openNewProject();return}
    if(r==='requirements' && text==='+ 新建需求'){e.preventDefault();e.stopImmediatePropagation();openNewRequirement();return}
    if(r==='project-detail' && text==='+ 新建需求'){e.preventDefault();e.stopImmediatePropagation();openNewRequirement('Insta360 内容音乐');return}
    if(r==='project-detail' && text==='+ 创建交付'){e.preventDefault();e.stopImmediatePropagation();openNewDelivery('Insta360 内容音乐');return}
    if(r==='requirement-detail' && text==='添加处理记录'){e.preventDefault();e.stopImmediatePropagation();openProcessRecord();return}
    if(r==='requirement-detail' && text==='创建交付'){e.preventDefault();e.stopImmediatePropagation();openNewDelivery('Insta360 内容音乐','REQ-20260916-028 · 户外旅行音乐周更');return}
  },true);

  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  const workspace=document.getElementById('workspace');if(workspace)new MutationObserver(enhance).observe(workspace,{childList:true,subtree:true});document.addEventListener('DOMContentLoaded',enhance);enhance();
})();