(() => {
  const deliveryData = [
    {id:'DLV-20260916-0182',title:'0916 户外旅行周更',project:'Insta360 内容音乐',req:'REQ-20260916-028',sent:38,played:31,selected:8,rejected:12,method:'API 上架',status:'待确认',updated:'今天 14:21'},
    {id:'DLV-20260915-0171',title:'无人机首发候选',project:'影石无人机音乐',req:'REQ-20260915-024',sent:30,played:28,selected:6,rejected:9,method:'在线试听',status:'待客户反馈',updated:'昨天 18:03'},
    {id:'DLV-20260912-0168',title:'Ace Pro 秋季运动内容',project:'Ace Pro 内容音乐',req:'REQ-20260910-017',sent:24,played:21,selected:9,rejected:7,method:'在线试听 + 下载',status:'待客户反馈',updated:'09-16 11:42'},
    {id:'DLV-20260909-0158',title:'0909 中秋旅行推荐',project:'Insta360 内容音乐',req:'REQ-20260909-015',sent:20,played:18,selected:7,rejected:11,method:'API 上架',status:'已完成',updated:'09-12 16:06'},
    {id:'DLV-20260903-0144',title:'经典耳熟内容盘活',project:'Insta360 内容音乐',req:'REQ-20260903-009',sent:55,played:49,selected:22,rejected:27,method:'API 上架',status:'已完成',updated:'09-08 15:18'}
  ];

  let toastTimer;

  function ensureModal(){
    let mask=document.getElementById('cdaModalMask');
    if(mask) return mask;
    mask=document.createElement('div');
    mask.id='cdaModalMask';
    mask.className='cda-modal-mask';
    mask.innerHTML=`<div class="cda-modal" role="dialog" aria-modal="true"><div class="cda-modal-head"><div><h3></h3><p></p></div><button class="cda-close" type="button">×</button></div><div class="cda-modal-body"></div><div class="cda-modal-foot"><button class="cd-btn cda-cancel" type="button">取消</button><button class="cd-btn primary cda-primary" type="button">保存</button></div></div>`;
    document.body.appendChild(mask);
    return mask;
  }

  function closeModal(){
    const mask=document.getElementById('cdaModalMask');
    if(mask) mask.classList.remove('open');
  }

  function openModal({title,desc='',body='',primary='保存',large=false,onSave=null,hidePrimary=false}){
    const mask=ensureModal();
    const modal=mask.querySelector('.cda-modal');
    modal.classList.toggle('large',large);
    mask.querySelector('.cda-modal-head h3').textContent=title;
    mask.querySelector('.cda-modal-head p').textContent=desc;
    mask.querySelector('.cda-modal-body').innerHTML=body;
    const primaryBtn=mask.querySelector('.cda-primary');
    primaryBtn.textContent=primary;
    primaryBtn.style.display=hidePrimary?'none':'';
    primaryBtn.onclick=()=>{
      if(onSave) onSave(mask.querySelector('.cda-modal-body'));
      else {closeModal();toast('已保存');}
    };
    mask.classList.add('open');
    requestAnimationFrame(()=>mask.querySelector('input,textarea,select')?.focus());
  }

  function toast(message){
    let node=document.getElementById('cdaToast');
    if(!node){node=document.createElement('div');node.id='cdaToast';node.className='cda-toast';document.body.appendChild(node);}
    node.textContent=message;node.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('show'),1800);
  }

  function field(label,control,full=false,help=''){
    return `<div class="cda-field ${full?'full':''}"><label>${label}</label>${control}${help?`<div class="cda-help">${help}</div>`:''}</div>`;
  }

  const input=(value='',placeholder='')=>`<input value="${value}" placeholder="${placeholder}">`;
  const textarea=(value='',placeholder='')=>`<textarea placeholder="${placeholder}">${value}</textarea>`;
  const select=(items,current='')=>`<select>${items.map(x=>`<option ${x===current?'selected':''}>${x}</option>`).join('')}</select>`;

  function openEditCustomer(){
    openModal({title:'编辑客户',desc:'维护客户基本信息、负责人和主要联系人。',body:`<div class="cda-form-grid">${field('客户全称',input('影石创新科技股份有限公司'))}${field('客户简称',input('Insta360'))}${field('行业',select(['消费电子 / 影像设备','互联网 / 内容平台','运动健身','航空娱乐'],'消费电子 / 影像设备'))}${field('商务负责人',select(['王小明','李小雨','张伟'],'王小明'))}${field('主要联系人',input('陈女士'))}${field('联系邮箱',input('chen@insta360.example'))}${field('合作开始日期',input('2024-06-01'))}${field('备注',textarea('面向运动相机、无人机和移动端模板持续提供版权音乐。'),true)}</div>`,onSave:()=>{closeModal();toast('客户信息已更新');}});
  }

  function openCreateProject(){
    openModal({title:'新建项目',desc:'在影石 Insta360 下创建新的长期合作项目。',body:`<div class="cda-form-grid">${field('项目名称',input('','例如：新产品线内容音乐'))}${field('项目负责人',select(['王小明','李小雨','张伟'],'王小明'))}${field('合作场景',input('','例如：户外 / UGC / 短视频'))}${field('目标区域',select(['全球','中国大陆','中国大陆及港澳台','指定区域'],'全球'))}${field('开始日期',input('2026-09-17'))}${field('结束日期',input('长期'))}${field('项目说明',textarea('','记录合作背景、更新频率和项目级约束。'),true)}</div>`,primary:'创建项目',onSave:()=>{closeModal();toast('项目已创建，可在项目 Tab 中继续维护');}});
  }

  function openCreateRequirement(){
    openModal({title:'新建需求',desc:'把客户的口头、群聊或邮件需求记录为可追踪工单。',body:`<div class="cda-form-grid">${field('需求标题',input('','例如：秋季户外旅行音乐'))}${field('所属项目',select(['Insta360 内容音乐','影石无人机音乐','Ace Pro 内容音乐','移动端模板音乐']))}${field('负责人',select(['王小明','李小雨','张伟'],'王小明'))}${field('截止时间',input('2026-09-20'))}${field('目标数量',input('8 首'))}${field('优先级',select(['普通','高','紧急'],'普通'))}${field('客户原始需求',textarea('','尽量保留客户原话，避免多轮沟通后失真。'),true)}${field('结构化条件',input('户外 / 旅行 / 高热 / 全球'),true)}</div>`,primary:'创建工单',onSave:()=>{closeModal();toast('需求工单已创建');}});
  }

  function openCreateDelivery(){
    openModal({title:'创建客户交付',desc:'从项目/需求或运营歌单生成一次独立交付，并冻结本次内容快照。',large:true,body:`<div class="cda-form-grid">${field('交付名称',input('0917 户外旅行补充推荐'))}${field('所属项目',select(['Insta360 内容音乐','影石无人机音乐','Ace Pro 内容音乐']))}${field('关联需求',select(['REQ-20260916-028 · 户外旅行音乐周更','REQ-20260915-024 · 无人机首发配乐','不关联需求']))}${field('来源内容',select(['影石旅行候选池 · 128 首','户外旅行智能歌单 · 2,812 首','手动添加歌曲']))}${field('交付方式',select(['在线试听','在线试听 + 下载','API 上架','网盘 / SFTP'],'在线试听'))}${field('客户反馈截止',input('2026-09-20'))}<div class="cda-field full"><label>客户权限</label><div class="cda-check-grid"><label class="cda-check"><input type="checkbox" checked>允许在线播放试听</label><label class="cda-check"><input type="checkbox" checked>允许客户选择/淘汰歌曲</label><label class="cda-check"><input type="checkbox">允许下载 MP3</label><label class="cda-check"><input type="checkbox">允许下载 WAV</label></div></div>${field('给客户的说明',textarea('请优先试听标记为“优先推荐”的歌曲，并在 9 月 20 日前提交选取结果。'),true)}<div class="cda-field full"><div class="cda-modal-note">创建后会生成本次交付的歌曲快照。来源歌单后续增删不会修改历史交付。</div></div></div>`,primary:'创建并生成交付',onSave:(body)=>{
      const title=body.querySelector('input')?.value.trim()||'新交付';
      deliveryData.unshift({id:'DLV-20260917-0191',title,project:'Insta360 内容音乐',req:'REQ-20260916-028',sent:18,played:0,selected:0,rejected:0,method:'在线试听',status:'待确认',updated:'刚刚'});
      closeModal();const panel=document.querySelector('[data-cd-panel="deliveries"]');if(panel){panel.dataset.cdaDeliveryEnhanced='';renderDeliveryPanel(panel);}toast('交付已创建，内容快照已生成');
    }});
  }

  function openAddPlaylist(){
    openModal({title:'添加歌单到客户曲库',desc:'将运营歌单内容加入当前客户可访问曲库。',body:`<div class="cda-form-grid">${field('搜索歌单',input('','输入歌单名称或 ID'),true)}${field('选择歌单',select(['影石旅行候选池 · 128 首','欧美高热运动音乐 · 2,812 首','疗愈轻音乐 · 416 首']),true)}${field('加入方式',select(['持续跟随歌单更新','仅加入当前歌曲快照'],'持续跟随歌单更新'))}${field('API 状态',select(['直接上架','仅加入客户曲库'],'直接上架'))}</div>`,primary:'确认添加',onSave:()=>{closeModal();toast('歌单已加入客户曲库');}});
  }

  function openAddSongs(){
    openModal({title:'添加歌曲到客户曲库',desc:'按 Track ID 或搜索结果人工加入指定歌曲。',body:`<div class="cda-form-grid">${field('Track ID / 歌曲',textarea('','支持粘贴多个 Track ID，每行一个。'),true)}${field('加入原因',input('客户指定 / 运营补充'))}${field('API 状态',select(['直接上架','仅加入客户曲库'],'直接上架'))}</div>`,primary:'添加歌曲',onSave:()=>{closeModal();toast('歌曲已加入客户曲库');}});
  }

  function openRightsEditor(scene='全部授权规则'){
    openModal({title:`编辑${scene}`,desc:'配置应用场景、权利项、授权区域和有效期。',large:true,body:`<div class="cda-form-grid">${field('应用场景',select(['影视同步','数字发行','短视频 / UGC','空间音乐'],scene==='全部授权规则'?'影视同步':scene))}${field('场景关系',select(['AND','OR'],'AND'))}<div class="cda-field full"><label>权利项</label><div class="cda-check-grid"><label class="cda-check"><input type="checkbox" checked>词版权</label><label class="cda-check"><input type="checkbox" checked>曲版权</label><label class="cda-check"><input type="checkbox" checked>录音版权</label><label class="cda-check"><input type="checkbox" checked>表演者权</label><label class="cda-check"><input type="checkbox">独家授权</label><label class="cda-check"><input type="checkbox" checked>有定价权</label></div></div>${field('授权区域',select(['全球','中国大陆','中国大陆及港澳台','自定义区域'],'全球'))}${field('授权有效期',select(['大于 1 年','大于 6 个月','长期有效'],'大于 1 年'))}<div class="cda-field full"><div class="cda-modal-note">保存后会重新计算客户可用曲库；已经形成的历史交付仍保留交付时的授权快照。</div></div></div>`,primary:'保存并重新计算',onSave:()=>{closeModal();toast('授权规则已更新，正在重新计算客户曲库');}});
  }

  function openAccount(add=true){
    openModal({title:add?'添加客户账号':'账号管理',desc:add?'新增可登录 STARLINK 的客户成员。':'维护成员角色、状态和访问权限。',body:`<div class="cda-form-grid">${field('姓名',input(add?'':'陈女士'))}${field('邮箱 / 登录账号',input(add?'':'chen@insta360.example'))}${field('手机号',input(''))}${field('部门',input(add?'':'内容运营'))}${field('角色',select(['管理员','选歌成员','API 管理员','只读成员'],add?'选歌成员':'管理员'))}${field('账号状态',select(['正常','停用'],'正常'))}<div class="cda-field full"><label>能力权限</label><div class="cda-check-grid"><label class="cda-check"><input type="checkbox" checked>在线试听</label><label class="cda-check"><input type="checkbox" checked>客户选取</label><label class="cda-check"><input type="checkbox">内容下载</label><label class="cda-check"><input type="checkbox">API 配置</label></div></div></div>`,primary:add?'添加账号':'保存修改',onSave:()=>{closeModal();toast(add?'客户账号已添加':'账号配置已更新');}});
  }

  function openLinkAccount(){
    openModal({title:'关联已有账号',desc:'把已有 STARLINK 用户关联到当前客户。',body:`<div class="cda-form-grid">${field('搜索账号',input('','邮箱 / 手机号 / 用户名'),true)}${field('关联角色',select(['管理员','选歌成员','API 管理员','只读成员']))}${field('部门',input('内容运营'))}</div>`,primary:'确认关联',onSave:()=>{closeModal();toast('已有账号已关联到客户');}});
  }

  function openSelection(row){
    openModal({title:`客户选取记录 · ${row.title}`,desc:`${row.id} · ${row.project}`,large:true,hidePrimary:true,body:`<div class="cda-selection-grid"><div><span>发送歌曲</span><strong>${row.sent}</strong></div><div><span>已试听</span><strong>${row.played}</strong></div><div><span>已选择</span><strong>${row.selected}</strong></div><div><span>已淘汰</span><strong>${row.rejected}</strong></div></div><table class="cda-mini-table"><thead><tr><th>歌曲</th><th>试听</th><th>完成率</th><th>客户结果</th><th>客户备注</th></tr></thead><tbody><tr><td>Midnight Drive</td><td>4 次</td><td>92%</td><td><span class="cda-pill green">已选择</span></td><td>节奏很好，适合户外镜头</td></tr><tr><td>Open Sky</td><td>3 次</td><td>81%</td><td><span class="cda-pill green">已选择</span></td><td>保留</td></tr><tr><td>Crystal Crush</td><td>2 次</td><td>43%</td><td><span class="cda-pill">待处理</span></td><td>—</td></tr><tr><td>Slow Horizon</td><td>1 次</td><td>28%</td><td><span class="cda-pill" style="color:#b34e4e;background:#fff0f0">已淘汰</span></td><td>太慢</td></tr></tbody></table><div class="cda-modal-note" style="margin-top:14px">客户每次选取、取消选择和备注都会记录操作时间与账号；正式交付使用最终确认结果生成新的交付快照。</div>`});
  }

  function deliveryRow(r){
    const statusClass=r.status==='已完成'?'green':r.status==='待客户反馈'?'orange':'blue';
    return `<tr data-delivery-id="${r.id}" data-status="${r.status}" data-method="${r.method}"><td><div class="title">${r.title}</div><div class="sub">${r.id}</div></td><td>${r.project}<div class="sub">${r.req}</div></td><td><b>${r.sent}</b> 首</td><td><div class="cda-result"><span>试听 ${r.played}</span><b>选 ${r.selected}</b><span class="reject">淘汰 ${r.rejected}</span></div></td><td><span class="cda-pill">${r.method}</span></td><td><span class="cda-pill ${statusClass}">${r.status}</span></td><td>${r.updated}</td><td><div class="cda-row-actions"><button class="cda-row-btn primary" data-cda-action="selection" data-id="${r.id}">选取记录</button><button class="cda-row-btn" data-cda-action="delivery-detail">详情</button></div></td></tr>`;
  }

  function renderDeliveryPanel(panel){
    if(panel.dataset.cdaDeliveryEnhanced==='true') return;
    panel.dataset.cdaDeliveryEnhanced='true';
    panel.innerHTML=`<div class="cda-delivery-summary"><div><span>累计交付</span><strong>27 次</strong><small>本月 6 次</small></div><div><span>累计发送</span><strong>612 首</strong><small>去重 438 首</small></div><div><span>客户已选择</span><strong>186 首</strong><small>整体选中率 30.4%</small></div><div><span>待客户反馈</span><strong>2 次</strong><small>最近反馈：今天 14:21</small></div><div><span>正式交付</span><strong>21 次</strong><small>API / 下载 / 网盘</small></div></div><section class="cda-delivery-toolbar"><div class="cda-delivery-toolbar-top"><div class="cda-delivery-toolbar-title"><strong>该客户的交付记录</strong><span>跟踪发送、试听、客户选取和最终正式交付全过程</span></div><div class="cda-delivery-tools"><button class="cd-btn" data-route="deliveries">进入交付记录</button><button class="cd-btn primary" data-cda-action="create-delivery">+ 创建交付</button></div></div><div class="cda-status-tabs" data-cda-delivery-tabs><button class="active" data-status="全部">全部 27</button><button data-status="待确认">待确认 1</button><button data-status="待客户反馈">待客户反馈 2</button><button data-status="已完成">已完成 21</button></div><div class="cda-delivery-filter"><input class="cda-search" data-cda-delivery-search placeholder="搜索交付名称 / 交付 ID / 需求 ID"><select class="cda-select" data-cda-delivery-project><option>全部项目</option><option>Insta360 内容音乐</option><option>影石无人机音乐</option><option>Ace Pro 内容音乐</option></select><select class="cda-select" data-cda-delivery-method><option>全部方式</option><option>在线试听</option><option>在线试听 + 下载</option><option>API 上架</option></select><select class="cda-select"><option>最近更新时间</option><option>创建时间</option><option>客户选择数</option></select></div></section><section class="cda-delivery-card"><div style="overflow:auto"><table class="cda-delivery-table"><thead><tr><th>交付</th><th>项目 / 需求</th><th>发送</th><th>客户行为</th><th>方式</th><th>状态</th><th>最近更新</th><th>操作</th></tr></thead><tbody data-cda-delivery-body>${deliveryData.map(deliveryRow).join('')}</tbody></table></div><div class="cda-pager"><span>显示最近 5 条，共 27 条</span><div><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>6</button></div></div></section>`;
  }

  function applyDeliveryFilters(){
    const panel=document.querySelector('[data-cd-panel="deliveries"]');if(!panel) return;
    const q=(panel.querySelector('[data-cda-delivery-search]')?.value||'').toLowerCase();
    const project=panel.querySelector('[data-cda-delivery-project]')?.value||'全部项目';
    const method=panel.querySelector('[data-cda-delivery-method]')?.value||'全部方式';
    const status=panel.querySelector('[data-cda-delivery-tabs] .active')?.dataset.status||'全部';
    panel.querySelectorAll('[data-delivery-id]').forEach(tr=>{
      const text=tr.textContent.toLowerCase();
      const okQ=!q||text.includes(q);const okP=project==='全部项目'||text.includes(project);const okM=method==='全部方式'||tr.dataset.method===method;const okS=status==='全部'||tr.dataset.status===status;
      tr.style.display=okQ&&okP&&okM&&okS?'':'none';
    });
  }

  function enhance(){
    const page=document.querySelector('.customer-detail-page');if(!page) return;
    const deliveryPanel=page.querySelector('[data-cd-panel="deliveries"]');if(deliveryPanel) renderDeliveryPanel(deliveryPanel);
    page.querySelectorAll('[data-cd-panel="api"] .cd-table tbody tr').forEach(tr=>tr.classList.add('cda-clickable'));
    page.querySelectorAll('[data-cd-panel="catalog"] .cd-table tbody tr').forEach(tr=>tr.classList.add('cda-clickable'));
  }

  function handleCustomerClick(e){
    const page=e.target.closest('.customer-detail-page');if(!page) return;
    const action=e.target.closest('[data-cda-action]')?.dataset.cdaAction;
    if(action){
      e.preventDefault();e.stopImmediatePropagation();
      if(action==='create-delivery') openCreateDelivery();
      if(action==='selection'){const r=deliveryData.find(x=>x.id===e.target.closest('[data-cda-action]').dataset.id);if(r)openSelection(r);}
      if(action==='delivery-detail') location.hash='#delivery-detail';
      return;
    }
    const btn=e.target.closest('button,.cd-link,.wf-link-btn,.cwt-filter-chip');
    const text=(btn?.textContent||'').trim();
    if(!btn) return;
    const actions={
      '编辑客户':openEditCustomer,'创建项目':openCreateProject,'创建需求':openCreateRequirement,'创建交付':openCreateDelivery,
      '+ 新建项目':openCreateProject,'+ 新建需求':openCreateRequirement,'添加歌单':openAddPlaylist,'添加歌曲':openAddSongs,
      '编辑规则':()=>openRightsEditor(),'添加账号':()=>openAccount(true),'关联已有账号':openLinkAccount
    };
    if(actions[text]){e.preventDefault();e.stopImmediatePropagation();actions[text]();return;}
    if(text==='编辑' && btn.closest('.cd-card')?.querySelector('h3')?.textContent.trim()==='客户信息'){e.preventDefault();e.stopImmediatePropagation();openEditCustomer();return;}
    if(text==='编辑' && btn.closest('.cd-rights-title')){e.preventDefault();e.stopImmediatePropagation();openRightsEditor(btn.closest('.cd-rights-title').querySelector('strong')?.textContent.trim()||'授权场景');return;}
    if(text==='管理' && btn.closest('[data-cd-panel="accounts"]')){e.preventDefault();e.stopImmediatePropagation();openAccount(false);return;}
    if(btn.classList.contains('cd-switch') && btn.closest('[data-cd-panel="entitlement"]')){e.preventDefault();e.stopImmediatePropagation();btn.classList.toggle('on');toast(btn.classList.contains('on')?'能力权限已开启':'能力权限已关闭');return;}
    if(btn.closest('[data-cd-panel="api"]')?.matches?.('tr')) return;
  }

  document.addEventListener('click',e=>{
    if(e.target.closest('.cda-close,.cda-cancel')){closeModal();return;}
    if(e.target.id==='cdaModalMask') closeModal();
  });

  document.addEventListener('click',handleCustomerClick,true);

  document.addEventListener('click',e=>{
    const page=e.target.closest('.customer-detail-page');if(!page) return;
    const deliveryTab=e.target.closest('[data-cda-delivery-tabs] button');if(deliveryTab){deliveryTab.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('active'));deliveryTab.classList.add('active');applyDeliveryFilters();return;}
    const apiRow=e.target.closest('[data-cd-panel="api"] .cd-table tbody tr');if(apiRow){const cells=[...apiRow.children].map(x=>x.textContent.trim());openModal({title:'API 调用详情',desc:'查看本次客户 API 请求的关键上下文。',hidePrimary:true,body:`<dl class="cda-log-detail"><dt>时间</dt><dd>${cells[0]}</dd><dt>Endpoint</dt><dd>${cells[1]}</dd><dt>Request ID</dt><dd>${cells[2]}</dd><dt>调用内容</dt><dd>${cells[3]}</dd><dt>HTTP 状态</dt><dd>${cells[4]}</dd><dt>耗时</dt><dd>${cells[5]}</dd><dt>来源 IP</dt><dd>${cells[6]}</dd></dl>`});return;}
    const catalogRow=e.target.closest('[data-cd-panel="catalog"] .cd-table tbody tr');if(catalogRow && e.target.closest('.cd-link')){const cells=[...catalogRow.children].map(x=>x.textContent.trim());openModal({title:`客户曲库内容 · ${cells[0]}`,desc:'查看该歌曲为什么对当前客户可用。',hidePrimary:true,body:`<dl class="cda-log-detail"><dt>歌曲</dt><dd>${cells[0]}</dd><dt>来源</dt><dd>${cells[1]}</dd><dt>授权场景</dt><dd>${cells[2]}</dd><dt>授权区域</dt><dd>${cells[3]}</dd><dt>有效期</dt><dd>${cells[4]}</dd><dt>API 状态</dt><dd>${cells[5]}</dd></dl>`});}
  });

  document.addEventListener('input',e=>{
    if(e.target.matches('[data-cda-delivery-search]')) applyDeliveryFilters();
    if(e.target.matches('[data-cd-panel="accounts"] .cd-input')){const q=e.target.value.toLowerCase();document.querySelectorAll('[data-cd-panel="accounts"] .cd-table tbody tr').forEach(tr=>tr.style.display=!q||tr.textContent.toLowerCase().includes(q)?'':'none');}
  });
  document.addEventListener('change',e=>{if(e.target.matches('[data-cda-delivery-project],[data-cda-delivery-method]'))applyDeliveryFilters();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

  const workspace=document.getElementById('workspace');if(workspace)new MutationObserver(enhance).observe(workspace,{childList:true,subtree:true});
  document.addEventListener('DOMContentLoaded',enhance);enhance();
})();