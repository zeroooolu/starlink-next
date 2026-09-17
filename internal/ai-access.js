(() => {
  const toolData = {
    chatgpt:{name:'ChatGPT',mark:'G',connected:true,enabled:true,preset:'work',last:'今天 11:18',calls:'826 次',created:'2026-09-17'},
    claude:{name:'Claude',mark:'C',connected:true,enabled:true,preset:'read',last:'昨天 18:42',calls:'218 次',created:'2026-09-15'},
    codex:{name:'Codex',mark:'X',connected:true,enabled:true,preset:'work',last:'今天 10:06',calls:'604 次',created:'2026-09-14'},
    cursor:{name:'Cursor',mark:'Cu',connected:false,enabled:false,preset:'read',last:'—',calls:'—',created:'—'},
    custom:{name:'自定义 Agent',mark:'A',connected:true,enabled:true,preset:'custom',last:'09-16 21:32',calls:'194 次',created:'2026-09-16'}
  };

  const logs = [
    ['今天 11:18','ChatGPT','查询曲库','影石 · 全球 / UGC / 户外旅行','返回 381 首','查询'],
    ['今天 11:12','ChatGPT','创建歌单','影石_0917_户外候选 · 20 首','成功','操作'],
    ['今天 10:06','Codex','读取需求','REQ-20260916-028 户外旅行音乐周更','成功','查询'],
    ['昨天 18:42','Claude','分析客户曲库','Keep 跑步场景覆盖分析','已生成','查询'],
    ['09-16 21:32','自定义 Agent','创建交付','影石 · 8 首 · API 上架','本人确认后完成','需确认']
  ];

  const customPermissions = [
    ['曲库与版权',[
      ['查询曲库 / 歌曲详情',true,'read'],
      ['查看版权与授权状态',true,'read'],
      ['创建 / 修改歌单',true,'write']
    ]],
    ['客户与业务',[
      ['查看客户 / 项目 / 需求',true,'read'],
      ['创建 / 更新需求',true,'write'],
      ['创建客户交付',true,'confirm']
    ]],
    ['客户曲库与授权',[
      ['查看客户曲库',true,'read'],
      ['上架 / 下架客户曲库',true,'confirm'],
      ['修改客户授权规则',false,'confirm']
    ]],
    ['系统与接入',[
      ['查看 API 使用情况',true,'read'],
      ['修改客户 API 配置',false,'confirm'],
      ['删除 / 终止业务数据',false,'confirm']
    ]]
  ];

  function logo(key,small=false){const t=toolData[key];return `<span class="aia-tool-logo ${key} ${small?'small':''}">${t.mark}</span>`}
  function presetName(p){return p==='read'?'只查看':p==='work'?'日常工作':'自定义'}
  function presetDesc(p){
    if(p==='read') return '可查询、分析和总结，不会修改任何业务数据';
    if(p==='work') return '可处理歌单和需求；交付、授权等敏感操作仍需你确认';
    return '按具体业务能力单独设置';
  }

  function toolRows(){
    return Object.entries(toolData).filter(([,t])=>t.connected).map(([key,t])=>`<div class="aia-tool-row" data-tool-row="${key}">
      <div class="aia-tool-main">${logo(key)}<div><strong>${t.name}</strong><span>${t.enabled?'正在使用你的 STARLINK 权限':'已暂停访问 STARLINK'}</span></div></div>
      <div class="aia-tool-permission"><span>权限</span><strong>${presetName(t.preset)}</strong><small>${presetDesc(t.preset)}</small></div>
      <div class="aia-tool-last"><span>最近使用</span><strong>${t.last}</strong><small>近 30 天 ${t.calls}</small></div>
      <span class="aia-status ${t.enabled?'ok':'paused'}"><i></i>${t.enabled?'已启用':'已暂停'}</span>
      <button class="aia-manage-btn" type="button" data-aia-manage="${key}">管理</button>
    </div>`).join('');
  }

  function availableTools(){
    return Object.entries(toolData).filter(([,t])=>!t.connected).map(([key,t])=>`<button class="aia-add-tool" type="button" data-aia-connect="${key}">${logo(key,true)}<span><strong>${t.name}</strong><small>连接后即可让它访问 STARLINK</small></span><b>连接</b></button>`).join('') || `<div class="aia-all-connected">常用 AI 工具都已连接</div>`;
  }

  function logRows(){return logs.map(r=>`<tr><td>${r[0]}</td><td><strong>${r[1]}</strong></td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td><span class="aia-log-type ${r[5]==='需确认'?'warn':''}">${r[5]}</span></td></tr>`).join('')}

  Page.aiAccess = () => `<div class="aia-page">
    <div class="aia-head"><div><h1>我的 AI 接入</h1><p>让 ChatGPT、Claude、Codex 等 AI 以你的身份帮你查询和处理 STARLINK 工作。</p></div><button class="aia-btn primary" type="button" data-aia-open-add>+ 连接新的 AI</button></div>

    <div class="aia-safety-note"><div class="aia-user-dot">环</div><div><strong>AI 使用的是你的权限</strong><span>你本人看不到或不能操作的内容，AI 也无法访问；交付、授权、删除等敏感操作默认需要你本人确认。</span></div><button type="button" data-aia-help>怎么连接？</button></div>

    <section class="aia-section">
      <div class="aia-section-head"><div><h2>已接入的 AI</h2><p>点「管理」就能设置这个 AI 能做什么、是否启用，以及查看连接信息。</p></div><span>${Object.values(toolData).filter(t=>t.connected).length} 个已连接</span></div>
      <div class="aia-tool-list" id="aiaToolList">${toolRows()}</div>
    </section>

    <section class="aia-section aia-add-section">
      <div class="aia-section-head"><div><h2>还可以连接</h2><p>每个 AI 使用独立权限和独立访问密钥，随时可以单独停用。</p></div></div>
      <div class="aia-add-list" id="aiaAddList">${availableTools()}</div>
    </section>

    <section class="aia-section">
      <div class="aia-section-head"><div><h2>最近 AI 操作</h2><p>系统会记录 AI 以你的身份做过的查询和业务操作。</p></div><button class="aia-text-btn" type="button" data-aia-all-logs>查看全部</button></div>
      <div class="aia-card"><div class="aia-table-wrap"><table class="aia-table"><thead><tr><th>时间</th><th>AI 工具</th><th>做了什么</th><th>对象 / 内容</th><th>结果</th><th>类型</th></tr></thead><tbody>${logRows()}</tbody></table></div></div>
    </section>
  </div>`;

  routes['ai-access']={title:'个人设置 / 我的 AI 接入',render:Page.aiAccess};

  function toast(text){let n=document.getElementById('aiaToast');if(!n){n=document.createElement('div');n.id='aiaToast';n.className='aia-toast';document.body.appendChild(n)}n.textContent=text;n.classList.add('show');clearTimeout(window.__aiaToast);window.__aiaToast=setTimeout(()=>n.classList.remove('show'),1600)}

  function modalShell(content,wide=false){
    let mask=document.getElementById('aiaModalMask');
    if(!mask){mask=document.createElement('div');mask.id='aiaModalMask';mask.className='aia-modal-mask';document.body.appendChild(mask);mask.addEventListener('click',e=>{if(e.target===mask)closeModal()});}
    mask.innerHTML=`<div class="aia-modal ${wide?'wide':''}">${content}</div>`;mask.classList.add('open');
  }
  function closeModal(){document.getElementById('aiaModalMask')?.classList.remove('open')}

  function presetCards(selected){
    return `<div class="aia-preset-grid">
      <button type="button" class="aia-preset ${selected==='read'?'active':''}" data-aia-preset="read"><b>只查看</b><span>查询、分析、总结</span><small>不会修改业务数据</small></button>
      <button type="button" class="aia-preset ${selected==='work'?'active':''}" data-aia-preset="work"><b>日常工作</b><span>查询 + 歌单 + 需求</span><small>敏感操作仍需你确认</small><em>推荐</em></button>
      <button type="button" class="aia-preset ${selected==='custom'?'active':''}" data-aia-preset="custom"><b>自定义</b><span>逐项选择业务能力</span><small>适合特殊工作方式</small></button>
    </div>`;
  }

  function customPermissionHtml(show){
    return `<div class="aia-custom-permissions ${show?'show':''}" id="aiaCustomPermissions"><div class="aia-custom-title"><strong>具体允许它做什么</strong><span>敏感操作即使开启，也必须由你最终确认</span></div>${customPermissions.map(g=>`<div class="aia-permission-group"><div class="aia-group-name">${g[0]}</div>${g[1].map(p=>`<div class="aia-permission-row"><div><strong>${p[0]}</strong><small>${p[2]==='read'?'只读取数据':p[2]==='write'?'可直接执行日常操作':'执行前必须确认'}</small></div><span class="aia-risk ${p[2]}">${p[2]==='read'?'查询':p[2]==='write'?'日常操作':'需确认'}</span><button class="aia-switch ${p[1]?'on':''}" type="button" role="switch" aria-checked="${p[1]}"><span></span></button></div>`).join('')}</div>`).join('')}</div>`;
  }

  function manageTool(key){
    const t=toolData[key];
    modalShell(`<div class="aia-modal-head"><div class="aia-modal-tool">${logo(key)}<div><h2>管理 ${t.name}</h2><p>设置它能否访问 STARLINK，以及具体能帮你做什么。</p></div></div><button class="aia-close" type="button" data-aia-close>×</button></div>
      <div class="aia-modal-body">
        <section class="aia-manage-status"><div><strong>允许 ${t.name} 访问 STARLINK</strong><span>${t.enabled?'当前可以使用你的授权能力':'当前所有访问都会被拒绝'}</span></div><button class="aia-switch large ${t.enabled?'on':''}" type="button" role="switch" aria-checked="${t.enabled}" data-aia-tool-enable="${key}"><span></span></button></section>
        <section class="aia-manage-block"><div class="aia-block-title"><h3>它可以帮我做什么？</h3><p>选一个最接近你日常使用方式的权限方案。</p></div>${presetCards(t.preset)}${customPermissionHtml(t.preset==='custom')}</section>
        <section class="aia-manage-block"><div class="aia-block-title"><h3>连接信息</h3><p>通常只在第一次连接或重新配置 AI 时使用。</p></div><div class="aia-credentials"><div><label>连接地址</label><div><code>https://starlink.example.com/agent/connect</code><button type="button" data-aia-copy>复制</button></div></div><div><label>访问密钥</label><div><code>demo_ai_access_${key}_7K4P2M</code><button type="button" data-aia-copy>复制</button></div></div></div><div class="aia-key-meta">创建于 ${t.created} · 每个 AI 使用独立密钥</div><button class="aia-text-btn danger" type="button" data-aia-rotate="${key}">重新生成访问密钥</button></section>
      </div>
      <div class="aia-modal-foot"><button class="aia-btn" type="button" data-aia-close>取消</button><button class="aia-btn primary" type="button" data-aia-save-tool="${key}">保存设置</button></div>`,true);
  }

  function connectFlow(key,step=1){
    const t=toolData[key];
    if(step===1){
      modalShell(`<div class="aia-modal-head"><div><h2>连接 ${t.name}</h2><p>先决定它能帮你做哪些工作。</p></div><button class="aia-close" type="button" data-aia-close>×</button></div><div class="aia-wizard"><div class="active"><i>1</i><span>选择权限</span></div><em></em><div><i>2</i><span>完成连接</span></div><em></em><div><i>3</i><span>开始使用</span></div></div><div class="aia-modal-body"><div class="aia-block-title"><h3>你希望 ${t.name} 能做什么？</h3><p>以后随时可以修改，不需要一次配置完所有能力。</p></div>${presetCards(t.preset)}${customPermissionHtml(t.preset==='custom')}</div><div class="aia-modal-foot"><button class="aia-btn" type="button" data-aia-close>取消</button><button class="aia-btn primary" type="button" data-aia-connect-next="${key}">下一步</button></div>`,true);
      return;
    }
    if(step===2){
      modalShell(`<div class="aia-modal-head"><div><h2>连接 ${t.name}</h2><p>把下面两项配置到 ${t.name}，即可完成接入。</p></div><button class="aia-close" type="button" data-aia-close>×</button></div><div class="aia-wizard"><div class="done"><i>✓</i><span>选择权限</span></div><em></em><div class="active"><i>2</i><span>完成连接</span></div><em></em><div><i>3</i><span>开始使用</span></div></div><div class="aia-modal-body"><div class="aia-connect-note"><strong>复制连接信息</strong><span>如果 ${t.name} 支持直接添加连接，请将连接地址和访问密钥填入对应位置。</span></div><div class="aia-credentials large"><div><label>连接地址</label><div><code>https://starlink.example.com/agent/connect</code><button type="button" data-aia-copy>复制</button></div></div><div><label>访问密钥</label><div><code>demo_ai_access_${key}_NEW84KD</code><button type="button" data-aia-copy>复制</button></div></div></div><div class="aia-help-line">不知道填在哪里？ <button type="button" data-aia-help>查看连接说明</button></div></div><div class="aia-modal-foot"><button class="aia-btn" type="button" data-aia-connect-back="${key}">上一步</button><button class="aia-btn primary" type="button" data-aia-connect-finish="${key}">我已完成连接</button></div>`,true);
      return;
    }
    modalShell(`<div class="aia-success"><span>✓</span><h2>${t.name} 已连接</h2><p>现在你可以直接在 ${t.name} 里让它查询曲库、处理歌单和需求。敏感操作仍会回来让你确认。</p><div class="aia-success-summary"><div><span>权限方案</span><strong>${presetName(t.preset)}</strong></div><div><span>操作身份</span><strong>环环 · via ${t.name}</strong></div></div><button class="aia-btn primary" type="button" data-aia-done>完成</button></div>`);
  }

  function helpModal(){
    modalShell(`<div class="aia-modal-head"><div><h2>怎么连接 AI？</h2><p>不需要理解 MCP、Gateway 等技术概念，按下面三步即可。</p></div><button class="aia-close" type="button" data-aia-close>×</button></div><div class="aia-modal-body"><div class="aia-help-steps"><div><i>1</i><span><strong>选择 AI</strong><small>选择 ChatGPT、Claude、Codex、Cursor 或自定义 Agent。</small></span></div><div><i>2</i><span><strong>选择它能做什么</strong><small>推荐直接使用「日常工作」，敏感操作仍由你本人确认。</small></span></div><div><i>3</i><span><strong>复制连接地址和访问密钥</strong><small>填到对应 AI 后即可使用；每个 AI 都有自己的独立密钥。</small></span></div></div><div class="aia-help-rule"><strong>记住一条就够：</strong>AI 永远不会获得比你本人更大的 STARLINK 权限。</div></div><div class="aia-modal-foot"><button class="aia-btn primary" type="button" data-aia-close>知道了</button></div>`);
  }

  function logsModal(){modalShell(`<div class="aia-modal-head"><div><h2>全部 AI 操作记录</h2><p>查询和业务写操作都会记录真实操作人和 AI 来源。</p></div><button class="aia-close" type="button" data-aia-close>×</button></div><div class="aia-modal-body flush"><div class="aia-log-toolbar"><input placeholder="搜索 AI / 操作 / 客户 / 内容"><button class="aia-btn">全部工具</button><button class="aia-btn">全部类型</button></div><div class="aia-table-wrap"><table class="aia-table"><thead><tr><th>时间</th><th>AI 工具</th><th>做了什么</th><th>对象 / 内容</th><th>结果</th><th>类型</th></tr></thead><tbody>${logRows()}${logRows()}</tbody></table></div></div>`,true)}

  function refreshLists(){const list=document.getElementById('aiaToolList');if(list)list.innerHTML=toolRows();const add=document.getElementById('aiaAddList');if(add)add.innerHTML=availableTools();}

  function ensureUserMenu(){
    const user=document.querySelector('.user-menu'); if(!user||user.dataset.aiaReady)return; user.dataset.aiaReady='true'; user.style.position='relative'; user.style.cursor='pointer';
    const menu=document.createElement('div');menu.className='aia-user-menu';menu.innerHTML=`<button type="button" data-route="ai-access"><span>✦</span><div><strong>我的 AI 接入</strong><small>管理 AI 的访问与操作权限</small></div></button><div></div><button type="button"><span>⚙</span><div><strong>个人设置</strong><small>账号与偏好</small></div></button>`;user.appendChild(menu);
    user.addEventListener('click',e=>{if(e.target.closest('.aia-user-menu'))return;menu.classList.toggle('open')});document.addEventListener('click',e=>{if(!user.contains(e.target))menu.classList.remove('open')});
  }
  ensureUserMenu(); document.addEventListener('DOMContentLoaded',ensureUserMenu);

  document.addEventListener('click',e=>{
    const manage=e.target.closest('[data-aia-manage]');if(manage){manageTool(manage.dataset.aiaManage);return}
    const connect=e.target.closest('[data-aia-connect]');if(connect){connectFlow(connect.dataset.aiaConnect,1);return}
    if(e.target.closest('[data-aia-open-add]')){const first=Object.entries(toolData).find(([,t])=>!t.connected);if(first)connectFlow(first[0],1);else toast('常用 AI 工具都已连接');return}
    if(e.target.closest('[data-aia-help]')){helpModal();return}
    if(e.target.closest('[data-aia-all-logs]')){logsModal();return}
    if(e.target.closest('[data-aia-close]')){closeModal();return}
    if(e.target.closest('[data-aia-done]')){closeModal();refreshLists();return}

    const preset=e.target.closest('[data-aia-preset]');if(preset){preset.parentElement.querySelectorAll('.aia-preset').forEach(x=>x.classList.remove('active'));preset.classList.add('active');const key=preset.dataset.aiaPreset;const custom=document.getElementById('aiaCustomPermissions');if(custom)custom.classList.toggle('show',key==='custom');return}
    const sw=e.target.closest('.aia-permission-row .aia-switch');if(sw){const on=sw.classList.toggle('on');sw.setAttribute('aria-checked',String(on));return}
    const enable=e.target.closest('[data-aia-tool-enable]');if(enable){const on=enable.classList.toggle('on');enable.setAttribute('aria-checked',String(on));const text=enable.closest('.aia-manage-status')?.querySelector('span');if(text)text.textContent=on?'当前可以使用你的授权能力':'当前所有访问都会被拒绝';return}
    const copy=e.target.closest('[data-aia-copy]');if(copy){const text=copy.parentElement.querySelector('code')?.textContent||'';navigator.clipboard?.writeText(text).catch(()=>{});copy.textContent='已复制';setTimeout(()=>copy.textContent='复制',1100);return}
    const rotate=e.target.closest('[data-aia-rotate]');if(rotate){toast('已生成新的访问密钥，旧密钥将失效');return}
    const save=e.target.closest('[data-aia-save-tool]');if(save){const key=save.dataset.aiaSaveTool;const t=toolData[key];t.enabled=!!document.querySelector(`[data-aia-tool-enable="${key}"]`)?.classList.contains('on');t.preset=document.querySelector('.aia-preset.active')?.dataset.aiaPreset||t.preset;closeModal();refreshLists();toast(`${t.name} 设置已保存`);return}
    const next=e.target.closest('[data-aia-connect-next]');if(next){const key=next.dataset.aiaConnectNext;toolData[key].preset=document.querySelector('.aia-preset.active')?.dataset.aiaPreset||'read';connectFlow(key,2);return}
    const back=e.target.closest('[data-aia-connect-back]');if(back){connectFlow(back.dataset.aiaConnectBack,1);return}
    const finish=e.target.closest('[data-aia-connect-finish]');if(finish){const key=finish.dataset.aiaConnectFinish;toolData[key].connected=true;toolData[key].enabled=true;toolData[key].created='2026-09-17';toolData[key].last='刚刚';toolData[key].calls='0 次';connectFlow(key,3);return}
  });
})();