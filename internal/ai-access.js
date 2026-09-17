(() => {
  const toolData = {
    chatgpt:{name:'ChatGPT',mark:'G',state:'connected',scope:'查询 + 日常操作',last:'今天 11:18',calls:'826 次'},
    claude:{name:'Claude',mark:'C',state:'connected',scope:'只查看',last:'昨天 18:42',calls:'218 次'},
    codex:{name:'Codex',mark:'X',state:'connected',scope:'查询 + 日常操作',last:'今天 10:06',calls:'604 次'},
    cursor:{name:'Cursor',mark:'Cu',state:'idle',scope:'未配置',last:'—',calls:'—'},
    custom:{name:'自定义 Agent',mark:'A',state:'connected',scope:'自定义权限',last:'09-16 21:32',calls:'194 次'}
  };

  const permissionGroups = [
    ['曲库与版权',[
      ['查询曲库 / 歌曲详情','允许 AI 搜索全量曲库和读取歌曲信息','on','read'],
      ['查看版权与授权状态','读取权利项、区域、有效期和风险状态','on','read'],
      ['创建 / 修改歌单','创建歌单、加歌、删歌及调整歌曲顺序','on','write']
    ]],
    ['客户与业务',[
      ['查看客户 / 项目 / 需求','读取当前账号有权限查看的客户业务信息','on','read'],
      ['创建 / 更新需求','新建需求、补充处理记录、更新流转状态','on','write'],
      ['创建客户交付','创建试听、下载、API 或网盘交付','on','confirm']
    ]],
    ['客户曲库与授权',[
      ['查看客户曲库','查询客户当前实际可访问的内容','on','read'],
      ['上架 / 下架客户曲库','调整客户实际可使用的歌曲范围','on','confirm'],
      ['修改客户授权规则','修改场景、区域、期限和产品能力','off','confirm']
    ]],
    ['系统与接入',[
      ['查看 API 使用情况','读取客户 API 调用量、失败率和调用日志','on','read'],
      ['修改客户 API 配置','调整 API 授权、白名单与开放能力','off','confirm'],
      ['删除 / 终止业务数据','删除数据或终止进行中的交付与合作','off','confirm']
    ]]
  ];

  function toolCard(key){
    const t=toolData[key]; const connected=t.state==='connected';
    return `<article class="aia-tool-card ${connected?'connected':''}" data-aia-tool="${key}">
      <div class="aia-tool-top"><div class="aia-tool-brand"><span class="aia-tool-logo ${key}">${t.mark}</span><div><h3>${t.name}</h3><p>${connected?'已连接 STARLINK':'尚未连接'}</p></div></div><span class="aia-status ${connected?'ok':''}"><i></i>${connected?'已连接':'未连接'}</span></div>
      <div class="aia-tool-meta"><div><span>访问范围</span><strong>${t.scope}</strong></div><div><span>最近使用</span><strong>${t.last}</strong></div><div><span>近 30 天调用</span><strong>${t.calls}</strong></div></div>
      <div class="aia-tool-actions">${connected?`<button class="aia-btn" type="button" data-aia-manage="${key}">管理</button><button class="aia-link-btn" type="button" data-aia-disable="${key}">停用</button>`:`<button class="aia-btn primary" type="button" data-aia-connect="${key}">连接</button>`}</div>
    </article>`;
  }

  function permissionRow(item){
    const [name,desc,state,risk]=item;
    const badge=risk==='read'?'只读':risk==='write'?'可直接执行':'执行前确认';
    return `<div class="aia-permission-row"><div class="aia-permission-copy"><strong>${name}</strong><span>${desc}</span></div><span class="aia-risk ${risk}">${badge}</span><button class="aia-switch ${state==='on'?'on':''}" type="button" role="switch" aria-checked="${state==='on'}"><span></span></button></div>`;
  }

  function permissionPanel(){
    return `<div class="aia-permission-layout">
      <aside class="aia-side-card"><div class="aia-side-head"><strong>选择 AI 工具</strong><span>单独授权</span></div>
        ${Object.entries(toolData).map(([key,t],i)=>`<button class="aia-tool-select ${i===0?'active':''}" type="button" data-aia-permission-tool="${key}"><span class="aia-tool-logo mini ${key}">${t.mark}</span><span><strong>${t.name}</strong><small>${t.state==='connected'?t.scope:'未连接'}</small></span></button>`).join('')}
      </aside>
      <div class="aia-permission-main">
        <section class="aia-card"><div class="aia-card-head"><div><h3 id="aiaPermissionTitle">ChatGPT 的访问权限</h3><p>AI 只能使用你本人已有的权限，不能越权访问数据。</p></div><button class="aia-btn" type="button" data-aia-action="all-read">全部改为只查看</button></div>
          <div class="aia-levels"><button class="aia-level" type="button"><span>只查看</span><small>只能查询、分析和总结</small></button><button class="aia-level active" type="button"><span>允许日常操作</span><small>歌单、需求等可直接处理</small></button><button class="aia-level" type="button"><span>敏感操作需确认</span><small>授权、上下架、删除等由你确认</small></button></div>
        </section>
        ${permissionGroups.map(g=>`<section class="aia-card aia-permission-group"><div class="aia-group-title"><h3>${g[0]}</h3><span>${g[1].filter(x=>x[2]==='on').length} / ${g[1].length} 已开启</span></div>${g[1].map(permissionRow).join('')}</section>`).join('')}
        <div class="aia-savebar"><span>权限修改后立即生效，并会记录到操作日志。</span><button class="aia-btn primary" type="button" data-aia-action="save-permissions">保存权限</button></div>
      </div>
    </div>`;
  }

  function toolsPanel(){
    return `<div class="aia-summary"><div><span>已连接工具</span><strong>4</strong><small>每个工具独立授权</small></div><div><span>近 30 天调用</span><strong>1,842</strong><small>查询与业务操作</small></div><div><span>业务写操作</span><strong>128</strong><small>歌单 / 需求 / 交付</small></div><div><span>待确认操作</span><strong>0</strong><small>当前无待处理</small></div></div>
      <div class="aia-section-title"><div><h2>我的 AI 工具</h2><p>连接你常用的 AI，让它以你的身份查询和处理 STARLINK 中的工作。</p></div><button class="aia-btn primary" type="button" data-aia-connect="custom">+ 连接 AI 工具</button></div>
      <div class="aia-tool-grid">${Object.keys(toolData).map(toolCard).join('')}</div>
      <section class="aia-card aia-connection-card" id="aiaConnectionCard"><div class="aia-card-head"><div><h3>ChatGPT · 连接信息</h3><p>把以下信息提供给你的 AI 工具即可接入。每个工具使用独立密钥。</p></div><span class="aia-status ok"><i></i>正常</span></div>
        <div class="aia-credential"><label>连接地址</label><div><code>https://starlink.example.com/agent/connect</code><button type="button" data-aia-copy>复制</button></div></div>
        <div class="aia-credential"><label>访问密钥</label><div><code>demo_ai_access_chatgpt_7K4P2M</code><button type="button" data-aia-copy>复制</button></div></div>
        <div class="aia-connection-meta"><span>创建于 2026-09-17</span><span>最近调用：今天 11:18</span><span>操作身份：环环 · via ChatGPT</span></div>
        <div class="aia-inline-actions"><button class="aia-btn" type="button" data-aia-tab-jump="permissions">管理权限</button><button class="aia-btn" type="button" data-aia-action="rotate-key">重新生成密钥</button><button class="aia-btn danger" type="button" data-aia-disable="chatgpt">停用连接</button></div>
      </section>`;
  }

  function logsPanel(){
    const rows=[
      ['今天 11:18','ChatGPT','环环','查询曲库','影石 · 全球 / UGC / 户外旅行','返回 381 首','只读'],
      ['今天 11:12','ChatGPT','环环','创建歌单','影石_0917_户外候选 · 20 首','成功','日常操作'],
      ['今天 10:06','Codex','环环','读取需求','REQ-20260916-028 户外旅行音乐周更','成功','只读'],
      ['昨天 18:42','Claude','环环','分析客户曲库','Keep 跑步场景覆盖分析','生成分析','只读'],
      ['09-16 21:32','自定义 Agent','环环','创建交付','影石 · 8 首 · API 上架','本人确认后完成','敏感操作']
    ];
    return `<section class="aia-card"><div class="aia-card-head"><div><h3>AI 操作记录</h3><p>所有 AI 查询和业务操作都会记录，便于追踪是谁、通过什么工具做了什么。</p></div><div class="aia-log-filter"><input placeholder="搜索工具 / 操作 / 客户 / 内容"/><button class="aia-btn">全部工具</button></div></div><div class="aia-table-wrap"><table class="aia-table"><thead><tr><th>时间</th><th>AI 工具</th><th>操作人</th><th>动作</th><th>内容</th><th>结果</th><th>类型</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td><strong>${r[1]}</strong></td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td><span class="aia-log-type">${r[6]}</span></td></tr>`).join('')}</tbody></table></div></section>`;
  }

  function guidePanel(){
    return `<div class="aia-guide-grid"><section class="aia-card"><div class="aia-card-head"><div><h3>连接一个 AI，只需要 3 步</h3><p>日常使用不需要理解后台技术实现。</p></div></div><div class="aia-steps"><div><i>1</i><span><strong>选择 AI 工具</strong><small>ChatGPT、Claude、Codex、Cursor 或自定义 Agent</small></span></div><div><i>2</i><span><strong>选择它能做什么</strong><small>按曲库、客户、需求、交付等业务能力授权</small></span></div><div><i>3</i><span><strong>复制连接信息</strong><small>完成后即可直接让 AI 帮你查询和处理 STARLINK 工作</small></span></div></div></section>
      <section class="aia-card"><div class="aia-card-head"><div><h3>权限规则</h3><p>所有接入都遵循相同的安全规则。</p></div></div><div class="aia-rule-list"><div><b>1</b><span><strong>不会超过你的权限</strong><small>你本人看不到、不能操作的数据，AI 同样无法访问。</small></span></div><div><b>2</b><span><strong>每个工具单独授权</strong><small>ChatGPT 和 Claude 可以拥有不同权限，也可以单独停用。</small></span></div><div><b>3</b><span><strong>敏感操作需要确认</strong><small>修改授权、批量上下架、删除等操作默认由本人最终确认。</small></span></div><div><b>4</b><span><strong>全部操作可追踪</strong><small>业务日志会记录为“环环 · via ChatGPT”等真实来源。</small></span></div></div></section>
      <section class="aia-card aia-tech-card"><div class="aia-card-head"><div><h3>开发者接入</h3><p>自研 Agent 或需要高级配置时再使用。</p></div></div><div class="aia-tech-row"><span>接入方式</span><strong>Agent Gateway / MCP / API</strong></div><div class="aia-tech-row"><span>身份模式</span><strong>用户委托身份</strong></div><div class="aia-tech-row"><span>权限模型</span><strong>用户权限 ∩ AI 工具权限</strong></div><div class="aia-tech-row"><span>审计</span><strong>查询与写操作全量记录</strong></div><button class="aia-btn" type="button">查看开发文档</button></section></div>`;
  }

  Page.aiAccess = () => `<div class="aia-page"><div class="aia-head"><div><h1>我的 AI 接入</h1><p>让你常用的 AI 直接访问 STARLINK，并在你的权限范围内帮你处理工作。</p></div><div class="aia-identity"><span class="aia-user-dot">环</span><div><strong>当前身份：环环</strong><small>AI 的权限不会超过你的账号权限</small></div></div></div>
    <div class="aia-tabs"><button class="active" type="button" data-aia-tab="tools">AI 工具</button><button type="button" data-aia-tab="permissions">访问权限</button><button type="button" data-aia-tab="logs">操作记录</button><button type="button" data-aia-tab="guide">接入说明</button></div>
    <section class="aia-panel active" data-aia-panel="tools">${toolsPanel()}</section>
    <section class="aia-panel" data-aia-panel="permissions">${permissionPanel()}</section>
    <section class="aia-panel" data-aia-panel="logs">${logsPanel()}</section>
    <section class="aia-panel" data-aia-panel="guide">${guidePanel()}</section>
  </div>`;

  routes['ai-access']={title:'个人设置 / 我的 AI 接入',render:Page.aiAccess};

  function toast(text){let n=document.getElementById('aiaToast');if(!n){n=document.createElement('div');n.id='aiaToast';n.className='aia-toast';document.body.appendChild(n)}n.textContent=text;n.classList.add('show');clearTimeout(window.__aiaToast);window.__aiaToast=setTimeout(()=>n.classList.remove('show'),1600)}
  function switchTab(key){document.querySelectorAll('[data-aia-tab]').forEach(x=>x.classList.toggle('active',x.dataset.aiaTab===key));document.querySelectorAll('[data-aia-panel]').forEach(x=>x.classList.toggle('active',x.dataset.aiaPanel===key));}
  function ensureUserMenu(){
    const user=document.querySelector('.user-menu'); if(!user||user.dataset.aiaReady)return; user.dataset.aiaReady='true'; user.style.position='relative'; user.style.cursor='pointer';
    const menu=document.createElement('div');menu.className='aia-user-menu';menu.innerHTML=`<button type="button" data-route="ai-access"><span>✦</span><div><strong>我的 AI 接入</strong><small>连接 ChatGPT、Claude 等工具</small></div></button><div></div><button type="button"><span>⚙</span><div><strong>个人设置</strong><small>账号与偏好</small></div></button>`;user.appendChild(menu);
    user.addEventListener('click',e=>{if(e.target.closest('.aia-user-menu'))return;menu.classList.toggle('open')});document.addEventListener('click',e=>{if(!user.contains(e.target))menu.classList.remove('open')});
  }
  ensureUserMenu(); document.addEventListener('DOMContentLoaded',ensureUserMenu);

  document.addEventListener('click',e=>{
    const tab=e.target.closest('[data-aia-tab]');if(tab){switchTab(tab.dataset.aiaTab);return}
    const jump=e.target.closest('[data-aia-tab-jump]');if(jump){switchTab(jump.dataset.aiaTabJump);return}
    const sw=e.target.closest('.aia-switch');if(sw){const on=sw.classList.toggle('on');sw.setAttribute('aria-checked',String(on));return}
    const level=e.target.closest('.aia-level');if(level){level.parentElement.querySelectorAll('.aia-level').forEach(x=>x.classList.remove('active'));level.classList.add('active');return}
    const select=e.target.closest('[data-aia-permission-tool]');if(select){select.parentElement.querySelectorAll('.aia-tool-select').forEach(x=>x.classList.remove('active'));select.classList.add('active');const t=toolData[select.dataset.aiaPermissionTool];const title=document.getElementById('aiaPermissionTitle');if(title)title.textContent=`${t.name} 的访问权限`;return}
    const copy=e.target.closest('[data-aia-copy]');if(copy){const code=copy.parentElement.querySelector('code');const text=code?.textContent||'';navigator.clipboard?.writeText(text).catch(()=>{});copy.textContent='已复制';setTimeout(()=>copy.textContent='复制',1100);return}
    const connect=e.target.closest('[data-aia-connect]');if(connect){toast(`${toolData[connect.dataset.aiaConnect]?.name||'AI 工具'} 连接流程已打开`);return}
    const disable=e.target.closest('[data-aia-disable]');if(disable){const card=disable.closest('.aia-tool-card');if(card){card.classList.toggle('connected');const status=card.querySelector('.aia-status');if(status){const disabled=!card.classList.contains('connected');status.classList.toggle('ok',!disabled);status.innerHTML=`<i></i>${disabled?'已停用':'已连接'}`;disable.textContent=disabled?'启用':'停用';}}else toast('连接状态已更新');return}
    const action=e.target.closest('[data-aia-action]');if(action){if(action.dataset.aiaAction==='all-read'){document.querySelectorAll('.aia-level').forEach(x=>x.classList.remove('active'));document.querySelector('.aia-level')?.classList.add('active');toast('已切换为只查看模式');}else if(action.dataset.aiaAction==='rotate-key')toast('已生成新的访问密钥');else if(action.dataset.aiaAction==='save-permissions')toast('权限已保存并立即生效');return}
    const manage=e.target.closest('[data-aia-manage]');if(manage){switchTab('permissions');const key=manage.dataset.aiaManage;const target=document.querySelector(`[data-aia-permission-tool="${key}"]`);target?.click();return}
  });
})();