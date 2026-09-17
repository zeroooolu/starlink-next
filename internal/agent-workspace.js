(() => {
  const tasks = {
    search:{prompt:'给影石找 20 首适合无人机旅行视频的歌，全球可用，最近三个月没交过，优先高热度',summary:'已基于影石当前客户授权、项目范围和历史交付记录完成筛选。共命中 481 首候选，已按场景匹配度、热度和历史新鲜度排序，下面先展示前 8 首。'},
    requirement:{prompt:'处理影石「户外旅行音乐周更」需求：找 8 首新歌，延续上周风格，排除最近 90 天已交付内容，并准备一轮客户试听',summary:'已读取需求原文、项目约束、客户授权和最近交付反馈。建议先生成 12 首候选供内部复核，再发送其中 8 首给客户试听。'},
    rights:{prompt:'检查影石当前客户曲库里未来 30 天可能失效的歌曲，并告诉我哪些会影响 API 上架内容',summary:'已核对客户授权场景、区域、有效期和当前上架状态。发现 328 首将在 30 天内进入授权风险窗口，其中 46 首当前已通过 API 上架，建议优先处理。'},
    analyze:{prompt:'分析 Keep 当前客户曲库，看看跑步场景在语言、BPM、热度和近 90 天交付覆盖上有没有明显缺口',summary:'已结合客户曲库、项目需求和近 90 天交付记录完成覆盖分析。主要缺口集中在 140–160 BPM 的英文高热内容，以及 120–135 BPM 的中文轻快内容。'}
  };

  const songs = [
    ['Midnight Drive','Nova Lane','电子 · 旅行 · 128 BPM','全球 / UGC','90 天未交付','96'],
    ['Open Sky','Mila June','独立流行 · 自由 · 124 BPM','全球 / 短视频','从未交付','94'],
    ['Run With Me','Atlas North','流行摇滚 · 激励 · 132 BPM','全球 / UGC','180 天未交付','92'],
    ['Momentum','Violet Echo','电子 · 科技 · 136 BPM','全球 / 短视频','从未交付','91'],
    ['Higher Ground','Echo Field','流行 · 户外 · 126 BPM','全球 / UGC','120 天未交付','89'],
    ['Into The Wild','Northline','独立流行 · 旅行 · 122 BPM','全球 / UGC','从未交付','88'],
    ['Airborne','Luma Peak','电子 · 开阔 · 130 BPM','全球 / 短视频','210 天未交付','87'],
    ['Golden Hour Run','Mira Coast','流行 · 温暖 · 125 BPM','全球 / UGC','从未交付','86']
  ];

  const icon = (type) => {
    const map={search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',list:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',shield:'<path d="M12 3 5 6v5c0 4.6 2.9 7.8 7 10 4.1-2.2 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',history:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',plus:'<path d="M12 5v14M5 12h14"/>'};
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${map[type]||map.search}</svg>`;
  };

  function resultRows(){
    return songs.map((s,i)=>`<tr class="${i>4?'aiw-result-more':''}">
      <td><div class="aiw-song"><div class="aiw-cover">♫</div><div><strong>${s[0]}</strong><small>${s[1]} · ${s[2]}</small></div></div></td>
      <td><span class="aiw-ok">${s[3]}</span></td><td>${s[4]}</td><td><span class="aiw-score">${s[5]}</span></td>
    </tr>`).join('');
  }

  function stepsHtml(running=false){
    const rows=[['识别业务上下文','客户：影石 Insta360','0.2s'],['读取客户授权','全球 · UGC / 短视频','0.4s'],['读取项目与需求','Insta360 内容音乐 / 户外旅行音乐周更','0.3s'],['检索客户可用曲库','82,319 首进入候选池','0.8s'],['排除历史交付','近 90 天排除 1,283 首','0.2s'],['排序并生成候选','481 首 → 推荐 20 首','0.6s']];
    return rows.map((x,i)=>`<div class="aiw-step ${running&&i===rows.length-1?'running':''}"><i>${running&&i===rows.length-1?'•':'✓'}</i><span>${x[0]} · ${x[1]}</span><small>${running&&i===rows.length-1?'执行中':x[2]}</small></div>`).join('');
  }

  Page.agent = () => `
    <div class="aiw-page">
      <div class="aiw-head"><div><h1>AI Agent</h1><p>直接用自然语言查询曲库、读取客户上下文，并在确认后执行歌单、需求和交付操作。</p></div><button class="aiw-new" type="button" data-aiw-action="new">+ 新建会话</button></div>
      <div class="aiw-layout">
        <aside class="aiw-side">
          <section class="aiw-panel aiw-side-card">
            <div class="aiw-side-title"><strong>最近任务</strong><span>今天</span></div>
            <button class="aiw-session active" data-aiw-task="search"><strong>影石无人机旅行音乐</strong><small><span>16:42</span><em>已完成</em></small></button>
            <button class="aiw-session" data-aiw-task="requirement"><strong>处理户外旅行周更需求</strong><small><span>14:21</span><em>已完成</em></small></button>
            <button class="aiw-session" data-aiw-task="rights"><strong>检查影石授权到期风险</strong><small><span>11:05</span><em>已完成</em></small></button>
            <button class="aiw-session" data-aiw-task="analyze"><strong>分析 Keep 跑步曲库缺口</strong><small><span>昨天</span><em>已完成</em></small></button>
            <div class="aiw-side-divider"></div>
            <div class="aiw-side-title"><strong>常用工作</strong><span>可直接执行</span></div>
            <button class="aiw-quick" data-aiw-task="search">${icon('search')}<span>找歌并排除历史交付</span></button>
            <button class="aiw-quick" data-aiw-task="requirement">${icon('list')}<span>处理客户需求</span></button>
            <button class="aiw-quick" data-aiw-task="rights">${icon('shield')}<span>检查客户授权</span></button>
            <button class="aiw-quick" data-aiw-task="analyze">${icon('chart')}<span>分析客户曲库覆盖</span></button>
          </section>
        </aside>

        <main class="aiw-main">
          <section class="aiw-panel aiw-console" id="aiwConsole">
            <div class="aiw-context-strip"><span class="aiw-context-label">当前上下文</span><span class="aiw-context-chip">客户 <b>影石 Insta360</b></span><span class="aiw-context-chip">项目 <b>Insta360 内容音乐</b></span><span class="aiw-context-chip">需求 <b>户外旅行音乐周更</b></span><button class="aiw-context-add" type="button" data-aiw-action="context">+ 添加<div class="aiw-context-menu"><button type="button">客户：Keep</button><button type="button">项目：影石无人机音乐</button><button type="button">需求：无人机首发配乐</button><button type="button">歌单：影石旅行候选池</button></div></button></div>
            <div class="aiw-thread">
              <div class="aiw-user-msg" id="aiwUserMessage">${tasks.search.prompt}</div>
              <div class="aiw-agent-block">
                <div class="aiw-agent-head"><span class="aiw-agent-mark">✦</span><strong>Agent</strong><span id="aiwAgentTime">刚刚完成</span></div>
                <div class="aiw-agent-copy" id="aiwSummary">${tasks.search.summary}</div>
                <div class="aiw-constraint-row" id="aiwConstraints"><span class="aiw-constraint">全球授权</span><span class="aiw-constraint">UGC / 短视频</span><span class="aiw-constraint">近 90 天未交付</span><span class="aiw-constraint">户外 / 旅行</span><span class="aiw-constraint">高热度优先</span><span class="aiw-constraint">20 首</span></div>
                <div class="aiw-execution" id="aiwExecution"><div class="aiw-execution-head"><strong>执行记录</strong><span id="aiwExecutionStatus">6 个步骤 · 已完成</span></div><div class="aiw-steps" id="aiwSteps">${stepsHtml(false)}</div></div>
                <div class="aiw-result" id="aiwResult"><div class="aiw-result-head"><div><strong>推荐结果 · 20 首</strong><span>已通过客户授权与历史交付校验</span></div><span>按综合匹配度排序</span></div><div class="aiw-result-table-wrap"><table class="aiw-result-table"><thead><tr><th>歌曲</th><th>客户授权</th><th>交付历史</th><th>匹配度</th></tr></thead><tbody>${resultRows()}</tbody></table></div><div class="aiw-result-foot"><button class="aiw-text-btn" type="button" data-aiw-action="expand">查看全部 20 首</button><span></span></div></div>
                <div class="aiw-write-box"><div class="aiw-write-head"><div><strong>接下来可以直接落到业务里</strong><p>读取和分析已自动完成；以下操作会写入业务数据，需要你确认。</p></div><span class="aiw-write-badge">需要确认</span></div><div class="aiw-write-actions"><button class="aiw-action" type="button" data-aiw-write="playlist">保存为候选歌单</button><button class="aiw-action" type="button" data-aiw-write="requirement">写入当前需求</button><button class="aiw-action primary" type="button" data-aiw-write="delivery">创建客户试听交付</button></div></div>
              </div>
            </div>
            <div class="aiw-composer"><div class="aiw-composer-box"><textarea id="aiwPrompt" placeholder="描述你要完成的工作，例如：检查南航 10 月交付里有哪些歌曲授权快到期，并给我一份替换候选……"></textarea><div class="aiw-composer-foot"><span class="aiw-composer-hint">Agent 会自动使用当前页面上下文；输入 @ 可引用客户、项目、需求、歌单</span><button class="aiw-send" type="button" data-aiw-action="run">执行</button></div></div></div>
          </section>
        </main>

        <aside class="aiw-context">
          <section class="aiw-panel aiw-context-card"><h3>业务上下文</h3><div class="aiw-object" data-route="customer-detail"><div><span>客户</span><strong>影石 Insta360</strong></div><em>›</em></div><div class="aiw-object" data-route="project-detail"><div><span>项目</span><strong>Insta360 内容音乐</strong></div><em>›</em></div><div class="aiw-object" data-route="requirement-detail"><div><span>需求</span><strong>户外旅行音乐周更</strong></div><em>›</em></div></section>
          <section class="aiw-panel aiw-context-card"><h3>本次使用的数据</h3><div class="aiw-source"><i></i><div><strong>客户可用曲库</strong><small>182,381 首 · 实时授权结果</small></div></div><div class="aiw-source"><i></i><div><strong>客户授权规则</strong><small>全球 · UGC / 短视频</small></div></div><div class="aiw-source"><i></i><div><strong>历史交付</strong><small>27 次 · 近 90 天去重</small></div></div><div class="aiw-source"><i></i><div><strong>需求与客户反馈</strong><small>12 条需求 · 选取记录可用</small></div></div></section>
          <section class="aiw-panel aiw-context-card"><h3>执行边界</h3><div class="aiw-permission"><b>自动执行：</b>查询曲库、读取授权、分析客户历史、生成候选。<br><br><b>确认后执行：</b>新建/修改歌单、写入需求、创建交付、客户曲库上架。</div></section>
        </aside>
      </div>
    </div>`;

  if(routes && routes.agent) routes.agent.render = Page.agent;

  function toast(text){let n=document.getElementById('aiwToast');if(!n){n=document.createElement('div');n.id='aiwToast';n.className='aiw-toast';document.body.appendChild(n)}n.textContent=text;n.classList.add('show');clearTimeout(window.__aiwToast);window.__aiwToast=setTimeout(()=>n.classList.remove('show'),1700)}
  function modal(){let m=document.getElementById('aiwModal');if(m)return m;m=document.createElement('div');m.id='aiwModal';m.className='aiw-modal-mask';m.innerHTML='<div class="aiw-modal"><div class="aiw-modal-head"><h3></h3><p></p></div><div class="aiw-modal-body"></div><div class="aiw-modal-foot"><button type="button" data-aiw-modal="cancel">取消</button><button type="button" class="primary" data-aiw-modal="confirm">确认执行</button></div></div>';document.body.appendChild(m);return m}
  function closeModal(){document.getElementById('aiwModal')?.classList.remove('open')}
  function confirmWrite(kind){const config={playlist:['保存为候选歌单','将本次 20 首结果保存为普通歌单。','歌单名称','影石_无人机旅行候选_0917','内容','当前推荐结果 20 首','后续','保存后可继续人工调整歌曲顺序与内容'],requirement:['写入当前需求','将候选结果关联到「户外旅行音乐周更」需求。','需求','REQ-20260916-028 · 户外旅行音乐周更','写入内容','本次候选结果 20 首 + 筛选条件','后续','需求时间线会新增一条 Agent 处理记录'],delivery:['创建客户试听交付','从本次结果创建一轮客户试听，并冻结歌曲快照。','交付名称','0917 无人机旅行候选','歌曲','20 首','权限','允许在线试听、客户选择 / 淘汰']};const c=config[kind];if(!c)return;const m=modal();m.querySelector('h3').textContent=c[0];m.querySelector('.aiw-modal-head p').textContent=c[1];m.querySelector('.aiw-modal-body').innerHTML=`<div class="aiw-confirm-list"><div><span>${c[2]}</span><b>${c[3]}</b></div><div><span>${c[4]}</span><b>${c[5]}</b></div><div><span>${c[6]}</span><b>${c[7]}</b></div></div>`;m.dataset.kind=kind;m.classList.add('open')}

  function loadTask(key,run=false){const t=tasks[key]||tasks.search;const page=document.querySelector('.aiw-page');if(!page)return;page.querySelectorAll('.aiw-session').forEach(x=>x.classList.toggle('active',x.dataset.aiwTask===key));const prompt=page.querySelector('#aiwPrompt');if(prompt)prompt.value=t.prompt;if(run) execute(t.prompt,key);else{page.querySelector('#aiwUserMessage').textContent=t.prompt;page.querySelector('#aiwSummary').textContent=t.summary;page.querySelector('#aiwAgentTime').textContent='已完成';page.querySelector('#aiwSteps').innerHTML=stepsHtml(false);page.querySelector('#aiwExecutionStatus').textContent='6 个步骤 · 已完成';}}

  function execute(text,key='search'){
    const page=document.querySelector('.aiw-page');if(!page||!text.trim())return;const btn=page.querySelector('[data-aiw-action="run"]');btn.disabled=true;page.querySelector('#aiwUserMessage').textContent=text.trim();page.querySelector('#aiwAgentTime').textContent='正在执行';page.querySelector('#aiwSummary').textContent='正在读取当前业务上下文，并根据任务调用曲库、授权、客户与历史交付数据……';page.querySelector('#aiwSteps').innerHTML=stepsHtml(true);page.querySelector('#aiwExecutionStatus').textContent='执行中';page.querySelector('#aiwExecution').classList.add('aiw-running');setTimeout(()=>{const t=tasks[key]||tasks.search;page.querySelector('#aiwSummary').textContent=t.summary;page.querySelector('#aiwAgentTime').textContent='刚刚完成';page.querySelector('#aiwSteps').innerHTML=stepsHtml(false);page.querySelector('#aiwExecutionStatus').textContent='6 个步骤 · 已完成';page.querySelector('#aiwExecution').classList.remove('aiw-running');btn.disabled=false;page.querySelector('#aiwPrompt').value='';toast('任务已完成');},850)
  }

  document.addEventListener('click',e=>{
    const page=e.target.closest('.aiw-page');
    const task=e.target.closest('[data-aiw-task]');if(task&&page){e.preventDefault();loadTask(task.dataset.aiwTask,task.classList.contains('aiw-quick'));return}
    const action=e.target.closest('[data-aiw-action]')?.dataset.aiwAction;
    if(action==='new'&&page){page.querySelector('#aiwPrompt').value='';page.querySelector('#aiwPrompt').focus();toast('已开始新会话，当前业务上下文会继续保留');return}
    if(action==='context'&&page){const b=e.target.closest('.aiw-context-add');if(e.target.closest('.aiw-context-menu button')){const x=e.target.closest('.aiw-context-menu button').textContent.trim();toast(`已加入上下文：${x}`);b.classList.remove('open');return}b.classList.toggle('open');return}
    if(action==='run'&&page){const prompt=page.querySelector('#aiwPrompt');execute(prompt.value,'search');return}
    if(action==='expand'&&page){const result=page.querySelector('#aiwResult');result.classList.toggle('expanded');e.target.textContent=result.classList.contains('expanded')?'收起结果':'查看全部 20 首';return}
    const write=e.target.closest('[data-aiw-write]');if(write&&page){confirmWrite(write.dataset.aiwWrite);return}
    if(e.target.matches('[data-aiw-modal="cancel"]')){closeModal();return}
    if(e.target.matches('[data-aiw-modal="confirm"]')){const m=modal(),kind=m.dataset.kind;closeModal();if(kind==='delivery'){toast('已创建客户试听交付并生成歌曲快照');setTimeout(()=>location.hash='#delivery-detail',400)}else if(kind==='playlist'){toast('候选歌单已创建');setTimeout(()=>location.hash='#playlist-detail',400)}else{toast('候选结果已写入需求');setTimeout(()=>location.hash='#requirement-detail',400)}return}
    if(e.target.id==='aiwModal'){closeModal();return}
    if(page&&!e.target.closest('.aiw-context-add'))page.querySelectorAll('.aiw-context-add.open').forEach(x=>x.classList.remove('open'));
  });

  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){closeModal();document.querySelectorAll('.aiw-context-add.open').forEach(x=>x.classList.remove('open'))}
    if((e.metaKey||e.ctrlKey)&&e.key==='Enter'&&document.activeElement?.id==='aiwPrompt'){e.preventDefault();const page=document.querySelector('.aiw-page');if(page)execute(page.querySelector('#aiwPrompt').value,'search')}
  });
})();