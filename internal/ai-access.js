(() => {
  const agents = {
    chatgpt:{name:'ChatGPT',mark:'G',connected:true,enabled:true,last:'今天 11:18',account:'环环',connectedAt:'2026-09-17 09:42'},
    claude:{name:'Claude',mark:'C',connected:true,enabled:true,last:'昨天 18:42',account:'环环',connectedAt:'2026-09-15 14:08'},
    codex:{name:'Codex',mark:'X',connected:true,enabled:true,last:'今天 10:06',account:'环环',connectedAt:'2026-09-14 10:16'},
    cursor:{name:'Cursor',mark:'Cu',connected:false,enabled:false,last:'—',account:'环环',connectedAt:'—'}
  };

  function logo(key){
    const a=agents[key];
    return `<span class="aia-agent-logo ${key}">${a.mark}</span>`;
  }

  function status(a){
    if(!a.connected) return `<span class="aia-status"><i></i>未连接</span>`;
    if(!a.enabled) return `<span class="aia-status paused"><i></i>已暂停</span>`;
    return `<span class="aia-status ok"><i></i>已连接</span>`;
  }

  function rows(){
    return Object.entries(agents).map(([key,a])=>`<div class="aia-agent-row" data-aia-agent-row="${key}">
      <div class="aia-agent-main">${logo(key)}<div><strong>${a.name}</strong><span>${a.connected?'已连接到你的 STARLINK 账号':'尚未连接'}</span></div></div>
      <div class="aia-agent-state">${status(a)}</div>
      <div class="aia-agent-access">
        <span>后台访问</span>
        <button class="aia-switch ${a.connected&&a.enabled?'on':''}" type="button" role="switch" aria-checked="${a.connected&&a.enabled}" data-aia-toggle="${key}" ${a.connected?'':'disabled'}><span></span></button>
      </div>
      <div class="aia-agent-last"><span>最近使用</span><strong>${a.last}</strong></div>
      <div class="aia-agent-actions">${a.connected?`<button class="aia-btn" type="button" data-aia-manage="${key}">管理连接</button>`:`<button class="aia-btn primary" type="button" data-aia-connect="${key}">连接</button>`}</div>
    </div>`).join('');
  }

  Page.aiAccess = () => `<div class="aia-page">
    <div class="aia-head"><div><h1>AI 工具</h1><p>连接后，AI 自动使用你当前 STARLINK 账号的权限。</p></div></div>

    <div class="aia-account-bar">
      <div class="aia-user-dot">环</div>
      <div><strong>环环</strong><span>Agent 权限自动跟随当前账号，无需单独配置。</span></div>
    </div>

    <section class="aia-card">
      <div class="aia-card-head"><div><h2>我的 Agent</h2><p>控制每个 Agent 是否连接、是否允许访问后台。</p></div></div>
      <div class="aia-agent-list" id="aiaAgentList">${rows()}</div>
    </section>
  </div>`;

  routes['ai-access']={title:'个人设置 / AI 工具',render:Page.aiAccess};

  function refresh(){
    const list=document.getElementById('aiaAgentList');
    if(list) list.innerHTML=rows();
  }

  function toast(text){
    let node=document.getElementById('aiaToast');
    if(!node){node=document.createElement('div');node.id='aiaToast';node.className='aia-toast';document.body.appendChild(node);}
    node.textContent=text;node.classList.add('show');
    clearTimeout(window.__aiaToast);window.__aiaToast=setTimeout(()=>node.classList.remove('show'),1400);
  }

  function closeModal(){document.getElementById('aiaModalMask')?.classList.remove('open');}

  function modal(content){
    let mask=document.getElementById('aiaModalMask');
    if(!mask){
      mask=document.createElement('div');mask.id='aiaModalMask';mask.className='aia-modal-mask';document.body.appendChild(mask);
      mask.addEventListener('click',e=>{if(e.target===mask)closeModal();});
    }
    mask.innerHTML=`<div class="aia-modal">${content}</div>`;mask.classList.add('open');
  }

  function connectAgent(key){
    const a=agents[key];
    modal(`<div class="aia-modal-head"><div class="aia-modal-title">${logo(key)}<div><h2>连接 ${a.name}</h2><p>连接后将直接继承你当前 STARLINK 账号的全部可用权限。</p></div></div><button class="aia-close" type="button" data-aia-close>×</button></div>
      <div class="aia-modal-body">
        <div class="aia-connect-summary"><span>连接账号</span><strong>环环</strong></div>
        <div class="aia-connect-summary"><span>访问范围</span><strong>与当前账号一致</strong></div>
      </div>
      <div class="aia-modal-foot"><button class="aia-btn" type="button" data-aia-close>取消</button><button class="aia-btn primary" type="button" data-aia-confirm-connect="${key}">确认连接</button></div>`);
  }

  function manageAgent(key){
    const a=agents[key];
    modal(`<div class="aia-modal-head"><div class="aia-modal-title">${logo(key)}<div><h2>${a.name}</h2><p>连接使用的是当前员工账号权限。</p></div></div><button class="aia-close" type="button" data-aia-close>×</button></div>
      <div class="aia-modal-body">
        <div class="aia-manage-row"><div><strong>允许访问 STARLINK</strong><span>关闭后 ${a.name} 将无法继续访问后台。</span></div><button class="aia-switch large ${a.enabled?'on':''}" type="button" role="switch" aria-checked="${a.enabled}" data-aia-modal-toggle="${key}"><span></span></button></div>
        <div class="aia-info-list"><div><span>连接账号</span><strong>${a.account}</strong></div><div><span>权限</span><strong>与当前员工账号一致</strong></div><div><span>连接时间</span><strong>${a.connectedAt}</strong></div><div><span>最近使用</span><strong>${a.last}</strong></div></div>
      </div>
      <div class="aia-modal-foot between"><button class="aia-btn danger" type="button" data-aia-disconnect="${key}">断开连接</button><div><button class="aia-btn" type="button" data-aia-close>取消</button><button class="aia-btn primary" type="button" data-aia-save="${key}">保存</button></div></div>`);
  }

  function ensureUserMenu(){
    const user=document.querySelector('.user-menu');if(!user||user.dataset.aiaReady)return;
    user.dataset.aiaReady='true';user.style.position='relative';user.style.cursor='pointer';
    const menu=document.createElement('div');menu.className='aia-user-menu';menu.innerHTML=`<button type="button" data-route="ai-access"><span>✦</span><div><strong>AI 工具</strong><small>连接和管理我的 Agent</small></div></button><div></div><button type="button"><span>⚙</span><div><strong>个人设置</strong><small>账号与偏好</small></div></button>`;user.appendChild(menu);
    user.addEventListener('click',e=>{if(e.target.closest('.aia-user-menu'))return;menu.classList.toggle('open');});
    document.addEventListener('click',e=>{if(!user.contains(e.target))menu.classList.remove('open');});
  }

  ensureUserMenu();
  document.addEventListener('DOMContentLoaded',ensureUserMenu);

  document.addEventListener('click',e=>{
    const close=e.target.closest('[data-aia-close]');if(close){closeModal();return;}

    const connect=e.target.closest('[data-aia-connect]');if(connect){connectAgent(connect.dataset.aiaConnect);return;}
    const manage=e.target.closest('[data-aia-manage]');if(manage){manageAgent(manage.dataset.aiaManage);return;}

    const toggle=e.target.closest('[data-aia-toggle]');if(toggle){
      const key=toggle.dataset.aiaToggle;const a=agents[key];if(!a.connected)return;
      a.enabled=!a.enabled;refresh();toast(a.enabled?`${a.name} 已允许访问后台`:`${a.name} 已暂停后台访问`);return;
    }

    const modalToggle=e.target.closest('[data-aia-modal-toggle]');if(modalToggle){
      const on=modalToggle.classList.toggle('on');modalToggle.setAttribute('aria-checked',String(on));return;
    }

    const confirm=e.target.closest('[data-aia-confirm-connect]');if(confirm){
      const key=confirm.dataset.aiaConfirmConnect;const a=agents[key];a.connected=true;a.enabled=true;a.connectedAt='2026-09-17 11:40';a.last='刚刚';closeModal();refresh();toast(`${a.name} 已连接`);return;
    }

    const save=e.target.closest('[data-aia-save]');if(save){
      const key=save.dataset.aiaSave;const a=agents[key];a.enabled=!!document.querySelector(`[data-aia-modal-toggle="${key}"]`)?.classList.contains('on');closeModal();refresh();toast('连接设置已保存');return;
    }

    const disconnect=e.target.closest('[data-aia-disconnect]');if(disconnect){
      const key=disconnect.dataset.aiaDisconnect;const a=agents[key];a.connected=false;a.enabled=false;a.last='—';a.connectedAt='—';closeModal();refresh();toast(`${a.name} 已断开连接`);return;
    }
  });
})();