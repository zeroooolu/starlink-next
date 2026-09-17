(() => {
  const state = {
    share: {
      audition: true,
      selection: true,
      comment: true,
      watermark: true,
      password: true,
      accountOnly: false,
      downloadPolicy: 'after-confirm'
    },
    final: {
      audio: { mp3_96:false, mp3_128:false, mp3_320:true, wav:true },
      cover: true,
      manifest: true,
      manifestMode: 'default',
      methods: { download:true, cloud:false, sftp:true, api:false },
      executed: false
    }
  };

  const check = () => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>`;
  const chevron = () => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;

  function switchControl(key, on){
    return `<button type="button" class="dde-switch ${on?'on':''}" data-dde-switch="${key}" aria-pressed="${on?'true':'false'}"><span></span></button>`;
  }

  function permissionRow(key, title, desc, on){
    return `<div class="dde-permission-row"><div><strong>${title}</strong><span>${desc}</span></div>${switchControl(key,on)}</div>`;
  }

  function downloadPolicyLabel(){
    if(state.share.downloadPolicy==='direct') return '客户可直接下载';
    if(state.share.downloadPolicy==='after-confirm') return state.final.executed ? '正式交付已生成，下载已开放' : '确认最终歌曲后自动开放';
    return '不允许下载';
  }

  function deliverySharePanel(active=false){
    const s=state.share;
    return `<section class="wf-panel ${active?'active':''}" data-wf-panel="delivery-share">
      <div class="dde-share-layout">
        <div class="dde-stack">
          <section class="wf-card dde-card">
            <div class="wf-card-head"><div><h3>分享链接</h3><p>这条链接用于客户试听、选歌和反馈，权限只作用于本次交付。</p></div><span class="wf-status ok">有效</span></div>
            <div class="wf-card-body">
              <div class="dde-share-url"><div><span>客户访问地址</span><code>https://starlink.example/share/demo-0916</code></div><div class="dde-inline-actions"><button class="wf-btn" type="button" data-dde-action="copy-link">复制链接</button><button class="wf-btn" type="button" data-dde-action="renew-link">重新生成</button></div></div>
              <div class="dde-form-grid two">
                <label class="dde-field"><span>有效期</span><input value="2026-09-30 23:59" /></label>
                <label class="dde-field"><span>访问密码</span><div class="dde-password"><input value="••••••" ${s.password?'':'disabled'} /><button type="button" data-dde-action="reset-password">重置</button></div></label>
              </div>
              <div class="dde-inline-settings">
                <div><strong>访问密码</strong><span>访问链接前需要输入密码</span>${switchControl('password',s.password)}</div>
                <div><strong>仅客户账号访问</strong><span>开启后必须登录已授权的客户账号</span>${switchControl('accountOnly',s.accountOnly)}</div>
              </div>
            </div>
          </section>

          <section class="wf-card dde-card">
            <div class="wf-card-head"><div><h3>客户权限</h3><p>控制客户在这次分享中具体可以做什么。</p></div><button class="wf-link-btn" type="button" data-dde-action="save-share">保存设置</button></div>
            <div class="dde-permission-list">
              ${permissionRow('audition','在线试听','允许客户在线播放本次交付中的歌曲',s.audition)}
              ${permissionRow('selection','选取歌曲','允许客户标记选中 / 淘汰并提交最终选择',s.selection)}
              ${permissionRow('comment','反馈备注','允许客户对歌曲或本轮交付填写备注',s.comment)}
              ${permissionRow('watermark','在线试听水印','试听音频使用客户级水印，便于追溯',s.watermark)}
            </div>
            <div class="dde-download-policy">
              <div class="dde-setting-title"><div><strong>下载权限</strong><span>${downloadPolicyLabel()}</span></div></div>
              <div class="dde-segmented">
                <button type="button" class="${s.downloadPolicy==='none'?'active':''}" data-dde-download-policy="none">禁止下载</button>
                <button type="button" class="${s.downloadPolicy==='direct'?'active':''}" data-dde-download-policy="direct">直接开放</button>
                <button type="button" class="${s.downloadPolicy==='after-confirm'?'active':''}" data-dde-download-policy="after-confirm">确认后开放</button>
              </div>
              <div class="dde-note">“确认后开放”会在正式交付生成后自动开放下载；客户拿到的是正式交付生成的文件包，不直接读取歌单源文件。</div>
            </div>
          </section>
        </div>

        <div class="dde-stack">
          <section class="wf-card dde-card">
            <div class="wf-card-head"><div><h3>客户侧效果</h3><p>按当前权限，客户打开链接后可以：</p></div></div>
            <div class="dde-client-preview">
              <div class="dde-preview-item ${s.audition?'ok':'off'}"><span>${s.audition?'✓':'—'}</span><div><strong>试听歌曲</strong><small>${s.audition?'可在线播放 38 首候选':'不可试听'}</small></div></div>
              <div class="dde-preview-item ${s.selection?'ok':'off'}"><span>${s.selection?'✓':'—'}</span><div><strong>选取歌曲</strong><small>${s.selection?'可选中 / 淘汰并提交':'不可选取'}</small></div></div>
              <div class="dde-preview-item ${s.comment?'ok':'off'}"><span>${s.comment?'✓':'—'}</span><div><strong>填写反馈</strong><small>${s.comment?'可填写单曲和整轮备注':'不可填写备注'}</small></div></div>
              <div class="dde-preview-item ${s.downloadPolicy==='none'?'off':'ok'}"><span>${s.downloadPolicy==='none'?'—':'✓'}</span><div><strong>下载文件</strong><small>${downloadPolicyLabel()}</small></div></div>
            </div>
          </section>
          <section class="wf-card dde-card">
            <div class="wf-card-head"><div><h3>访问记录</h3><p>查看本次分享真实访问与试听情况。</p></div></div>
            <div class="wf-card-body dde-visitor-list">
              <div class="wf-person-row"><span class="wf-avatar">陈</span><div><strong>陈女士</strong><small>首次访问 今天 11:12 · 最近 14:21</small></div><b>播放 28 首</b></div>
              <div class="wf-person-row"><span class="wf-avatar blue">李</span><div><strong>李先生</strong><small>首次访问 今天 13:06 · 最近 13:44</small></div><b>播放 11 首</b></div>
              <div class="dde-access-summary"><span>累计访问 6 次</span><span>2 位客户成员</span><span>最近访问 今天 14:21</span></div>
            </div>
          </section>
        </div>
      </div>
    </section>`;
  }

  function formatOption(key,title,sub,on){
    return `<button type="button" class="dde-check-card ${on?'selected':''}" data-dde-format="${key}"><span class="dde-check-box">${on?check():''}</span><div><strong>${title}</strong><small>${sub}</small></div></button>`;
  }

  function methodOption(key,title,sub,on){
    return `<button type="button" class="dde-method-card ${on?'selected':''}" data-dde-method="${key}"><span class="dde-check-box">${on?check():''}</span><div><strong>${title}</strong><small>${sub}</small></div>${chevron()}</button>`;
  }

  function deliveryTargetConfig(){
    const m=state.final.methods;
    let html='';
    if(m.download){
      html += `<div class="dde-target-config"><div class="dde-target-head"><strong>下载包</strong><span>生成可下载 ZIP，支持客户从分享页或交付记录获取</span></div><div class="dde-form-grid two"><label class="dde-field"><span>下载有效期</span><input value="7 天" /></label><label class="dde-field"><span>压缩包名称</span><input value="DLV-20260916-0182_Insta360_0916" /></label></div></div>`;
    }
    if(m.cloud){
      html += `<div class="dde-target-config"><div class="dde-target-head"><strong>云盘</strong><span>将正式交付包同步到指定网盘目录</span></div><div class="dde-form-grid two"><label class="dde-field"><span>云盘</span><input value="百度云企业空间" /></label><label class="dde-field"><span>目标目录</span><input value="/Insta360/2026/0916户外旅行" /></label></div></div>`;
    }
    if(m.sftp){
      html += `<div class="dde-target-config"><div class="dde-target-head"><strong>SFTP / FTP</strong><span>用于客户服务器或内部文件系统的自动投递</span></div><div class="dde-form-grid sftp"><label class="dde-field"><span>Host</span><input value="sftp.insta360.example" /></label><label class="dde-field small"><span>Port</span><input value="22" /></label><label class="dde-field"><span>Root</span><input value="/music/incoming" /></label><label class="dde-field"><span>Username</span><input value="starlink_delivery" /></label><label class="dde-field"><span>凭据</span><div class="dde-secret"><input value="已安全保存" disabled /><button type="button" data-dde-action="credential">更新凭据</button></div></label></div></div>`;
    }
    if(m.api){
      html += `<div class="dde-target-config"><div class="dde-target-head"><strong>API 上架</strong><span>将最终歌曲同步到客户已授权的 API 曲库</span></div><div class="dde-form-grid two"><label class="dde-field"><span>目标</span><input value="Insta360 客户曲库" /></label><label class="dde-field"><span>执行策略</span><input value="确认后立即上架" /></label></div></div>`;
    }
    return html || `<div class="dde-empty-target">至少选择一种正式交付方式。</div>`;
  }

  function finalSummary(){
    const f=state.final;
    const audioFormats=Object.values(f.audio).filter(Boolean).length;
    const audioFiles=8*audioFormats;
    const coverFiles=f.cover?8:0;
    const manifestFiles=f.manifest?1:0;
    const total=audioFiles+coverFiles+manifestFiles;
    const methods=Object.entries(f.methods).filter(([,v])=>v).map(([k])=>({download:'下载包',cloud:'云盘',sftp:'SFTP',api:'API 上架'}[k]));
    return {audioFormats,audioFiles,coverFiles,manifestFiles,total,methods};
  }

  function finalHistory(){
    if(!state.final.executed) return `<div class="wf-empty-mini">尚未产生正式交付记录</div>`;
    return `<div class="dde-output-row"><div><strong>OUT-20260917-001</strong><span>8 首 · ${finalSummary().total} 个文件 · ${finalSummary().methods.join(' + ')}</span></div><div><span class="wf-status ok">已完成</span><small>今天 15:06 · 王小明</small></div></div>`;
  }

  function deliveryFinalPanel(active=false){
    const f=state.final;
    const sum=finalSummary();
    return `<section class="wf-panel ${active?'active':''}" data-wf-panel="delivery-final">
      <div class="dde-final-headnote"><span>正式交付</span><p>客户确认后，以最终歌曲生成独立交付快照和文件。后续歌单、分享权限或客户改选都不会修改已经执行的正式输出。</p></div>

      <div class="dde-final-layout">
        <div class="dde-stack">
          <section class="wf-card dde-card">
            <div class="wf-card-head"><div><h3>1. 交付内容</h3><p>当前按客户已选择歌曲准备正式输出。</p></div><span class="dde-step-state">8 首</span></div>
            <div class="wf-card-body">
              <div class="dde-content-scope"><div><span>来源</span><strong>客户最终选择</strong><small>当前已选 8 首</small></div><div><span>内容快照</span><strong>交付执行时锁定</strong><small>执行后不可被后续改选覆盖</small></div><button class="wf-btn" type="button" data-dde-jump="delivery-selection">查看客户选取</button></div>
            </div>
          </section>

          <section class="wf-card dde-card">
            <div class="wf-card-head"><div><h3>2. 交付物料</h3><p>配置最终需要给客户的音频、封面和交付清单。</p></div></div>
            <div class="wf-card-body">
              <div class="dde-material-group"><div class="dde-setting-title"><div><strong>音频文件</strong><span>可同时输出多个规格</span></div></div><div class="dde-check-grid four">
                ${formatOption('mp3_96','96 kbps MP3','轻量试听 / 兼容',f.audio.mp3_96)}
                ${formatOption('mp3_128','128 kbps MP3','标准压缩音频',f.audio.mp3_128)}
                ${formatOption('mp3_320','320 kbps MP3','高品质 MP3',f.audio.mp3_320)}
                ${formatOption('wav','WAV 无损','正式母带文件',f.audio.wav)}
              </div></div>
              <div class="dde-material-group"><div class="dde-setting-title"><div><strong>附加文件</strong><span>跟随每首歌曲或整批交付输出</span></div></div><div class="dde-check-grid two">
                ${formatOption('cover','专辑封面 JPG','每首歌曲输出封面',f.cover)}
                ${formatOption('manifest','交付清单 XLSX','歌曲信息、Track ID、ISRC、授权信息',f.manifest)}
              </div></div>
              ${f.manifest?`<div class="dde-manifest-mode"><span>交付表格</span><div class="dde-segmented compact"><button type="button" class="${f.manifestMode==='default'?'active':''}" data-dde-manifest="default">默认字段</button><button type="button" class="${f.manifestMode==='custom'?'active':''}" data-dde-manifest="custom">自定义字段</button></div><small>${f.manifestMode==='default'?'歌曲名称 / 艺人 / Track ID / ISRC / 专辑 / 授权范围':'已选择 9 个自定义字段'}</small></div>`:''}
            </div>
          </section>

          <section class="wf-card dde-card">
            <div class="wf-card-head"><div><h3>3. 文件与目录规则</h3><p>统一最终文件命名和文件夹组织，避免客户每次收到不同结构。</p></div></div>
            <div class="wf-card-body">
              <div class="dde-form-grid two naming">
                <label class="dde-field"><span>音频命名</span><input value="{{track_id}}_{{song_name}}" /></label>
                <label class="dde-field"><span>封面命名</span><input value="{{track_id}}_{{song_name}}_cover" /></label>
                <label class="dde-field"><span>文件夹组织</span><input value="{{customer}}/{{project}}/{{delivery_id}}" /></label>
                <label class="dde-field"><span>交付包命名</span><input value="{{delivery_id}}_{{customer}}_{{date}}" /></label>
              </div>
              <div class="dde-name-preview"><span>示例</span><code>TRK-29A81C1_Open Sky.wav</code><code>TRK-29A81C1_Open Sky_cover.jpg</code></div>
            </div>
          </section>

          <section class="wf-card dde-card">
            <div class="wf-card-head"><div><h3>4. 交付方式</h3><p>同一次正式交付可以同时生成下载包，并推送到一个或多个目标。</p></div></div>
            <div class="wf-card-body">
              <div class="dde-method-grid">
                ${methodOption('download','下载包','生成安全下载链接',f.methods.download)}
                ${methodOption('cloud','云盘','同步到指定网盘目录',f.methods.cloud)}
                ${methodOption('sftp','SFTP / FTP','推送到客户服务器',f.methods.sftp)}
                ${methodOption('api','API 上架','同步到客户 API 曲库',f.methods.api)}
              </div>
              <div class="dde-target-list">${deliveryTargetConfig()}</div>
            </div>
          </section>
        </div>

        <div class="dde-stack dde-final-side">
          <section class="wf-card dde-card dde-summary-card">
            <div class="wf-card-head"><div><h3>本次输出预览</h3><p>执行前最后确认。</p></div></div>
            <div class="dde-output-summary">
              <div><span>最终歌曲</span><strong>8 首</strong></div>
              <div><span>音频文件</span><strong>${sum.audioFiles}</strong><small>${sum.audioFormats} 种规格</small></div>
              <div><span>封面</span><strong>${sum.coverFiles}</strong><small>${f.cover?'JPG':'未输出'}</small></div>
              <div><span>交付表</span><strong>${sum.manifestFiles}</strong><small>${f.manifest?'XLSX':'未输出'}</small></div>
            </div>
            <div class="dde-output-total"><span>预计生成</span><strong>${sum.total} 个文件</strong></div>
            <div class="dde-output-methods"><span>交付到</span><div>${sum.methods.length?sum.methods.map(x=>`<b>${x}</b>`).join(''):'<em>未选择</em>'}</div></div>
            <button class="wf-btn primary wide" type="button" data-dde-action="execute-final" ${sum.methods.length&&sum.audioFormats?'':'disabled'}>${f.executed?'重新生成一版正式交付':'生成并执行正式交付'}</button>
            <p class="dde-execute-tip">执行后生成不可变的正式交付版本；如需重新输出，会新增一条输出记录。</p>
          </section>

          <section class="wf-card dde-card">
            <div class="wf-card-head"><div><h3>正式交付记录</h3><p>记录每一次实际生成或推送。</p></div></div>
            <div class="wf-card-body">${finalHistory()}</div>
          </section>
        </div>
      </div>
    </section>`;
  }

  Page.deliveryDetail = () => `<div class="wf-page dde-page">
    <section class="wf-detail-hero delivery-hero">
      <div class="wf-detail-top"><div><div class="wf-back" data-route="deliveries">← 返回交付记录</div><div class="wf-detail-title"><h1>0916 户外旅行</h1><span class="wf-status wait">待客户反馈</span></div><div class="wf-meta"><span>DLV-20260916-0182</span><span>影石 Insta360</span><span>项目：Insta360 内容音乐</span><span>需求：REQ-20260916-028</span><span>创建：今天 10:25</span></div></div><div class="wf-actions"><button class="wf-btn" type="button" data-dde-jump="delivery-content">编辑内容</button><button class="wf-btn" type="button" data-dde-jump="delivery-share">分享设置</button><button class="wf-btn" type="button" data-dde-action="terminate">终止</button><button class="wf-btn primary" type="button" data-dde-jump="delivery-final">正式交付</button></div></div>
      <div class="dde-kpis"><div><span>内容快照</span><strong>38 首</strong><small>本轮固定候选</small></div><div><span>已试听</span><strong>32 首</strong><small>客户侧已播放</small></div><div><span>客户已选</span><strong>8 首</strong><small>当前最终选择</small></div><div><span>正式输出</span><strong>${state.final.executed?'1 次':'0 次'}</strong><small>${state.final.executed?'已生成正式交付':'尚未执行'}</small></div></div>
    </section>
    <div class="wf-tabs delivery-tabs">${wfTab('delivery-content','交付内容',true)}${wfTab('delivery-selection','客户选取')}${wfTab('delivery-share','分享与权限')}${wfTab('delivery-final','正式交付')}${wfTab('delivery-log','活动记录')}</div>
    <section class="wf-panel active" data-wf-panel="delivery-content">${wfDeliveryContentTable(false)}</section>
    <section class="wf-panel" data-wf-panel="delivery-selection">${wfDeliverySelection()}</section>
    ${deliverySharePanel(false)}
    ${deliveryFinalPanel(false)}
    <section class="wf-panel" data-wf-panel="delivery-log">${wfTimelineCard('完整活动记录',wfDeliveryTimeline())}</section>
  </div>`;

  if(typeof routes!=='undefined' && routes['delivery-detail']) routes['delivery-detail'].render=Page.deliveryDetail;

  function toast(text){
    let node=document.getElementById('ddeToast');
    if(!node){node=document.createElement('div');node.id='ddeToast';node.className='dde-toast';document.body.appendChild(node)}
    node.textContent=text;node.classList.add('show');clearTimeout(window.__ddeToast);window.__ddeToast=setTimeout(()=>node.classList.remove('show'),1700);
  }

  function activateTab(key){
    const page=document.querySelector('.dde-page'); if(!page) return;
    page.querySelectorAll('.wf-tab').forEach(x=>x.classList.toggle('active',x.dataset.wfTab===key));
    page.querySelectorAll('.wf-panel').forEach(x=>x.classList.toggle('active',x.dataset.wfPanel===key));
    page.querySelector(`[data-wf-panel="${key}"]`)?.scrollIntoView({behavior:'smooth',block:'start'});
  }

  function rerenderShare(){
    const node=document.querySelector('[data-wf-panel="delivery-share"]'); if(!node) return;
    const active=node.classList.contains('active'); node.outerHTML=deliverySharePanel(active);
  }
  function rerenderFinal(){
    const node=document.querySelector('[data-wf-panel="delivery-final"]'); if(!node) return;
    const active=node.classList.contains('active'); node.outerHTML=deliveryFinalPanel(active);
  }

  document.addEventListener('click',e=>{
    const jump=e.target.closest('[data-dde-jump]');
    if(jump && jump.closest('.dde-page')){activateTab(jump.dataset.ddeJump);return;}

    const sw=e.target.closest('[data-dde-switch]');
    if(sw && sw.closest('.dde-page')){
      const key=sw.dataset.ddeSwitch; state.share[key]=!state.share[key]; rerenderShare(); return;
    }

    const policy=e.target.closest('[data-dde-download-policy]');
    if(policy && policy.closest('.dde-page')){state.share.downloadPolicy=policy.dataset.ddeDownloadPolicy;rerenderShare();return;}

    const format=e.target.closest('[data-dde-format]');
    if(format && format.closest('.dde-page')){
      const key=format.dataset.ddeFormat;
      if(key==='cover'||key==='manifest') state.final[key]=!state.final[key]; else state.final.audio[key]=!state.final.audio[key];
      rerenderFinal();return;
    }

    const manifest=e.target.closest('[data-dde-manifest]');
    if(manifest && manifest.closest('.dde-page')){state.final.manifestMode=manifest.dataset.ddeManifest;rerenderFinal();return;}

    const method=e.target.closest('[data-dde-method]');
    if(method && method.closest('.dde-page')){const key=method.dataset.ddeMethod;state.final.methods[key]=!state.final.methods[key];rerenderFinal();return;}

    const action=e.target.closest('[data-dde-action]');
    if(!action || !action.closest('.dde-page')) return;
    const type=action.dataset.ddeAction;
    if(type==='copy-link'){navigator.clipboard?.writeText('https://starlink.example/share/demo-0916');toast('分享链接已复制');return;}
    if(type==='renew-link'){toast('已生成新的分享链接，旧链接将失效');return;}
    if(type==='reset-password'){toast('已生成新的访问密码');return;}
    if(type==='save-share'){toast('分享与权限设置已保存');return;}
    if(type==='credential'){toast('打开安全凭据更新');return;}
    if(type==='terminate'){toast('Demo：终止交付前需要二次确认');return;}
    if(type==='execute-final'){
      state.final.executed=true; rerenderFinal();
      const kpi=document.querySelector('.dde-kpis>div:last-child'); if(kpi) kpi.innerHTML='<span>正式输出</span><strong>1 次</strong><small>已生成正式交付</small>';
      toast('正式交付已生成并开始执行');return;
    }
  });
})();