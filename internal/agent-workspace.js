(() => {
  const presets = {
    search: {
      prompt:'给影石找 20 首适合无人机旅行视频的歌，全球可用，最近三个月没交过，优先高热度。',
      summary:'找到了 481 首符合条件的歌曲。我先挑出匹配度最高的 20 首，并自动排除了影石近 90 天已经交付过的内容。',
      note:'结果已检查客户授权、使用场景和历史交付。',
      tags:['全球可用','户外 / 旅行','近期未交付','优先高热度'],
      action:'保存为候选歌单'
    },
    requirement: {
      prompt:'处理影石「户外旅行音乐周更」这个需求，按客户之前喜欢的风格找 8 首新歌，并准备一轮试听。',
      summary:'已经根据这条需求、客户历史选取记录和当前授权范围整理出 12 首候选。建议内部确认后选 8 首发给客户试听。',
      note:'已参考该客户最近的选歌偏好，并排除近期重复交付。',
      tags:['影石','当前需求','历史偏好','近期未交付'],
      action:'加入当前需求'
    },
    rights: {
      prompt:'看看影石现在的客户曲库里，未来 30 天有哪些歌可能不能继续用了。',
      summary:'发现 328 首歌将在未来 30 天进入授权风险期，其中 46 首当前已经在客户曲库里。建议优先处理这 46 首。',
      note:'已按当前客户授权区域、使用场景和有效期检查。',
      tags:['影石','未来 30 天','授权风险','客户曲库'],
      action:'查看风险歌曲'
    },
    analyze: {
      prompt:'分析 Keep 现在的跑步音乐曲库，看看还有哪些类型的歌比较缺。',
      summary:'目前最明显的缺口是 140–160 BPM 的英文高热歌曲，以及 120–135 BPM 的中文轻快歌曲。近 90 天这两类内容交付覆盖偏低。',
      note:'已结合客户现有曲库和近 90 天交付情况分析。',
      tags:['Keep','跑步音乐','曲库缺口','近 90 天'],
      action:'去补充这些歌曲'
    }
  };

  const songs = [
    ['Midnight Drive','Nova Lane','电子 · 旅行 · 128 BPM','全球可用','90 天未交付'],
    ['Open Sky','Mila June','独立流行 · 自由 · 124 BPM','全球可用','从未交付'],
    ['Run With Me','Atlas North','流行摇滚 · 激励 · 132 BPM','全球可用','180 天未交付'],
    ['Momentum','Violet Echo','电子 · 科技 · 136 BPM','全球可用','从未交付'],
    ['Higher Ground','Echo Field','流行 · 户外 · 126 BPM','全球可用','120 天未交付'],
    ['Into The Wild','Northline','独立流行 · 旅行 · 122 BPM','全球可用','从未交付']
  ];

  function resultRows(){
    return songs.map(s=>`<tr><td><div class="aiw-song"><div class="aiw-cover">♫</div><div><strong>${s[0]}</strong><small>${s[1]} · ${s[2]}</small></div></div></td><td><span class="aiw-good">${s[3]}</span></td><td>${s[4]}</td><td><button class="aiw-play" type="button">试听</button></td></tr>`).join('');
  }

  function resultPanel(task='search'){
    const item=presets[task]||presets.search;
    return `<section class="aiw-result-card" id="aiwResultCard">
      <div class="aiw-result-top"><div class="aiw-result-mark">✦</div><div class="aiw-result-copy"><span>处理结果</span><h2>${item.summary}</h2><p>${item.note}</p></div></div>
      <div class="aiw-result-tags">${item.tags.map(x=>`<span>${x}</span>`).join('')}</div>
      <div class="aiw-table-wrap"><table class="aiw-table"><thead><tr><th>推荐歌曲</th><th>授权</th><th>最近交付</th><th></th></tr></thead><tbody>${resultRows()}</tbody></table></div>
      <div class="aiw-result-bottom"><button class="aiw-link-btn" type="button" data-route="catalog-search">查看全部结果</button><div class="aiw-result-actions"><button class="aiw-secondary" type="button" data-aiw-action="adjust">调整条件</button><button class="aiw-primary" type="button" data-aiw-action="business">${item.action}</button></div></div>
    </section>`;
  }

  function toast(text){
    let node=document.getElementById('aiwToast');
    if(!node){node=document.createElement('div');node.id='aiwToast';node.className='aiw-toast';document.body.appendChild(node)}
    node.textContent=text;node.classList.add('show');clearTimeout(window.__aiwToast);window.__aiwToast=setTimeout(()=>node.classList.remove('show'),1600);
  }

  function showResult(task='search',usePreset=true){
    const mount=document.getElementById('aiwResultMount');
    if(!mount)return;
    const prompt=document.getElementById('aiwPrompt');
    if(usePreset&&prompt)prompt.value=(presets[task]||presets.search).prompt;
    mount.innerHTML=resultPanel(task);
    requestAnimationFrame(()=>mount.querySelector('.aiw-result-card')?.scrollIntoView({behavior:'smooth',block:'nearest'}));
  }

  // Legacy #agent links now resolve to the workbench instead of a second AI page.
  if(typeof Page!=='undefined'&&Page.dashboard){
    Page.agent=()=>Page.dashboard();
    if(typeof routes!=='undefined'&&routes.agent){
      routes.agent.title='工作台';
      routes.agent.parent='dashboard';
      routes.agent.render=Page.dashboard;
    }
  }

  document.addEventListener('click',e=>{
    const globalSubmit=e.target.closest('[data-aiw-global-submit]');
    if(globalSubmit){
      const globalInput=document.querySelector('.global-agent input');
      const text=globalInput?.value.trim();
      setTimeout(()=>{
        const prompt=document.getElementById('aiwPrompt');
        if(prompt&&text)prompt.value=text;
        if(text)showResult('search',false);else prompt?.focus();
      },0);
      return;
    }

    const root=e.target.closest('.dashboard-page,.aiw-page');
    if(!root)return;

    const task=e.target.closest('[data-aiw-task]');
    if(task){showResult(task.dataset.aiwTask,true);return;}

    const action=e.target.closest('[data-aiw-action]');
    if(!action)return;

    if(action.dataset.aiwAction==='run'){
      const prompt=document.getElementById('aiwPrompt');
      if(!prompt?.value.trim()){prompt?.focus();toast('先说一下你想让我帮你做什么');return;}
      action.disabled=true;action.textContent='处理中…';
      setTimeout(()=>{showResult('search',false);action.disabled=false;action.textContent='开始处理';},450);
      return;
    }

    if(action.dataset.aiwAction==='adjust'){
      const prompt=document.getElementById('aiwPrompt');prompt?.focus();prompt?.scrollIntoView({behavior:'smooth',block:'center'});return;
    }

    if(action.dataset.aiwAction==='business')toast(`${action.textContent.trim()} · 已准备好，确认后即可继续`);
  });
})();