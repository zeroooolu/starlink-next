(() => {
  const presets = {
    search: {
      title: '帮我找歌',
      prompt: '给影石找 20 首适合无人机旅行视频的歌，全球可用，最近三个月没交过，优先高热度。',
      summary: '找到了 481 首符合条件的歌曲。我先挑出匹配度最高的 20 首，并自动排除了影石近 90 天已经交付过的内容。',
      note: '结果已检查客户授权、使用场景和历史交付。',
      action: '保存为候选歌单'
    },
    requirement: {
      title: '处理客户需求',
      prompt: '处理影石「户外旅行音乐周更」这个需求，按客户之前喜欢的风格找 8 首新歌，并准备一轮试听。',
      summary: '已经根据这条需求、客户历史选取记录和当前授权范围整理出 12 首候选。建议内部确认后选 8 首发给客户试听。',
      note: '已参考该客户最近的选歌偏好，并排除近期重复交付。',
      action: '加入当前需求'
    },
    rights: {
      title: '查授权风险',
      prompt: '看看影石现在的客户曲库里，未来 30 天有哪些歌可能不能继续用了。',
      summary: '发现 328 首歌将在未来 30 天进入授权风险期，其中 46 首当前已经在客户 API 曲库里。建议优先处理这 46 首。',
      note: '已按当前客户授权区域、使用场景和有效期检查。',
      action: '查看风险歌曲'
    },
    analyze: {
      title: '看曲库缺口',
      prompt: '分析 Keep 现在的跑步音乐曲库，看看还有哪些类型的歌比较缺。',
      summary: '目前最明显的缺口是 140–160 BPM 的英文高热歌曲，以及 120–135 BPM 的中文轻快歌曲。近 90 天这两类内容交付覆盖偏低。',
      note: '已结合客户现有曲库和近 90 天交付情况分析。',
      action: '去补充这些歌曲'
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

  const icon = (type) => {
    const icons = {
      search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
      list:'<path d="M8 6h12M8 12h12M8 18h12"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
      shield:'<path d="M12 3 5 6v5c0 4.6 2.9 7.8 7 10 4.1-2.2 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
      chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
      clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      arrow:'<path d="m9 18 6-6-6-6"/>'
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[type] || icons.search}</svg>`;
  };

  function resultRows(){
    return songs.map(s => `<tr>
      <td><div class="aiw-song"><div class="aiw-cover">♫</div><div><strong>${s[0]}</strong><small>${s[1]} · ${s[2]}</small></div></div></td>
      <td><span class="aiw-good">${s[3]}</span></td>
      <td>${s[4]}</td>
      <td><button class="aiw-play" type="button">试听</button></td>
    </tr>`).join('');
  }

  function resultPanel(task='search'){
    const item = presets[task] || presets.search;
    return `
      <section class="aiw-result-card" id="aiwResultCard">
        <div class="aiw-result-top">
          <div class="aiw-result-mark">✦</div>
          <div class="aiw-result-copy">
            <span>处理结果</span>
            <h2>${item.summary}</h2>
            <p>${item.note}</p>
          </div>
        </div>
        <div class="aiw-result-tags">
          <span>全球可用</span><span>户外 / 旅行</span><span>近期未交付</span><span>优先高热度</span>
        </div>
        <div class="aiw-table-wrap">
          <table class="aiw-table">
            <thead><tr><th>推荐歌曲</th><th>授权</th><th>最近交付</th><th></th></tr></thead>
            <tbody>${resultRows()}</tbody>
          </table>
        </div>
        <div class="aiw-result-bottom">
          <button class="aiw-link-btn" type="button" data-route="catalog-search">查看全部结果</button>
          <div class="aiw-result-actions">
            <button class="aiw-secondary" type="button" data-aiw-action="adjust">换一批 / 调整条件</button>
            <button class="aiw-primary" type="button" data-aiw-action="business">${item.action}</button>
          </div>
        </div>
      </section>`;
  }

  Page.agent = () => `
    <div class="aiw-page">
      <header class="aiw-head">
        <div>
          <h1>AI 曲库助手</h1>
          <p>告诉我你要做什么，我帮你查曲库、看授权、去重历史交付，并整理成可以直接使用的结果。</p>
        </div>
      </header>

      <section class="aiw-ask-card">
        <div class="aiw-ask-title"><span>✦</span><strong>今天要处理什么？</strong></div>
        <textarea id="aiwPrompt" placeholder="直接说需求就行，例如：给影石找 20 首适合无人机旅行视频的歌，全球可用，最近三个月没交过。"></textarea>
        <div class="aiw-ask-foot">
          <span>不用记筛选条件，也不用先选客户或项目，我会从你的描述里自动判断。</span>
          <button class="aiw-primary aiw-run" type="button" data-aiw-action="run">开始处理</button>
        </div>
      </section>

      <section class="aiw-common">
        <div class="aiw-section-title"><strong>常用工作</strong><span>点一下就可以开始</span></div>
        <div class="aiw-common-grid">
          <button class="aiw-task" type="button" data-aiw-task="search">
            <span class="aiw-task-icon">${icon('search')}</span><div><strong>帮我找歌</strong><small>按客户、场景、授权和历史交付直接筛歌</small></div>${icon('arrow')}
          </button>
          <button class="aiw-task" type="button" data-aiw-task="requirement">
            <span class="aiw-task-icon">${icon('list')}</span><div><strong>处理客户需求</strong><small>根据需求和客户历史偏好准备候选内容</small></div>${icon('arrow')}
          </button>
          <button class="aiw-task" type="button" data-aiw-task="rights">
            <span class="aiw-task-icon">${icon('shield')}</span><div><strong>查授权风险</strong><small>找快到期、不可继续使用或可能影响交付的歌</small></div>${icon('arrow')}
          </button>
          <button class="aiw-task" type="button" data-aiw-task="analyze">
            <span class="aiw-task-icon">${icon('chart')}</span><div><strong>看曲库缺口</strong><small>看看某个客户或场景还缺什么类型的内容</small></div>${icon('arrow')}
          </button>
        </div>
      </section>

      <div id="aiwResultMount"></div>

      <section class="aiw-recent">
        <div class="aiw-section-title"><strong>最近处理</strong><span>继续之前的工作</span></div>
        <div class="aiw-recent-list">
          <button type="button" data-aiw-task="search"><span class="aiw-recent-icon">${icon('clock')}</span><div><strong>影石无人机旅行音乐</strong><small>找歌 · 今天 16:42</small></div><em>20 首结果</em></button>
          <button type="button" data-aiw-task="requirement"><span class="aiw-recent-icon">${icon('clock')}</span><div><strong>户外旅行音乐周更</strong><small>客户需求 · 今天 14:21</small></div><em>12 首候选</em></button>
          <button type="button" data-aiw-task="rights"><span class="aiw-recent-icon">${icon('clock')}</span><div><strong>影石授权到期检查</strong><small>授权风险 · 今天 11:05</small></div><em>328 首风险</em></button>
        </div>
      </section>
    </div>`;

  if (routes && routes.agent) routes.agent.render = Page.agent;

  function toast(text){
    let node=document.getElementById('aiwToast');
    if(!node){node=document.createElement('div');node.id='aiwToast';node.className='aiw-toast';document.body.appendChild(node)}
    node.textContent=text;node.classList.add('show');clearTimeout(window.__aiwToast);window.__aiwToast=setTimeout(()=>node.classList.remove('show'),1600);
  }

  function showResult(task='search', usePreset=true){
    const mount=document.getElementById('aiwResultMount');
    if(!mount) return;
    if(usePreset){
      const prompt=document.getElementById('aiwPrompt');
      if(prompt) prompt.value=(presets[task]||presets.search).prompt;
    }
    mount.innerHTML=resultPanel(task);
    requestAnimationFrame(()=>mount.querySelector('.aiw-result-card')?.scrollIntoView({behavior:'smooth',block:'start'}));
  }

  document.addEventListener('click', e=>{
    const root=e.target.closest('.aiw-page');
    if(!root) return;

    const task=e.target.closest('[data-aiw-task]');
    if(task){showResult(task.dataset.aiwTask,true);return;}

    const action=e.target.closest('[data-aiw-action]');
    if(!action) return;

    if(action.dataset.aiwAction==='run'){
      const prompt=document.getElementById('aiwPrompt');
      if(!prompt?.value.trim()){
        prompt?.focus();toast('先说一下你想让我帮你做什么');return;
      }
      action.disabled=true;action.textContent='处理中…';
      setTimeout(()=>{
        showResult('search',false);
        action.disabled=false;action.textContent='开始处理';
      },550);
      return;
    }

    if(action.dataset.aiwAction==='adjust'){
      document.getElementById('aiwPrompt')?.focus();
      window.scrollTo({top:0,behavior:'smooth'});
      return;
    }

    if(action.dataset.aiwAction==='business'){
      toast(`${action.textContent.trim()} · 已准备好，确认后即可保存`);
    }
  });
})();