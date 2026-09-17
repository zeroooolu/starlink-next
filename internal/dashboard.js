// Dashboard override: AI is part of the daily workbench rather than a standalone module.
Page.dashboard = () => `
  <div class="dashboard-page">
    <div class="page-head dashboard-head">
      <div class="page-title">
        <h1>工作台</h1>
        <p>直接处理今天的工作，也可以快速查看待办、最近进展和曲库状态。</p>
      </div>
    </div>

    <section class="dashboard-ai">
      <div class="aiw-ask-card dashboard-ai-card">
        <div class="aiw-ask-title"><span>✦</span><strong>今天要处理什么？</strong></div>
        <textarea id="aiwPrompt" placeholder="直接说需求，例如：给影石找 20 首适合无人机旅行视频的歌，全球可用，最近三个月没交过。"></textarea>
        <div class="aiw-ask-foot">
          <div class="dashboard-ai-shortcuts">
            <button type="button" data-aiw-task="search">找歌</button>
            <button type="button" data-aiw-task="requirement">处理客户需求</button>
            <button type="button" data-aiw-task="rights">查授权风险</button>
            <button type="button" data-aiw-task="analyze">分析曲库</button>
            <a data-route="catalog-search">高级检索</a>
          </div>
          <button class="aiw-primary aiw-run" type="button" data-aiw-action="run">开始处理</button>
        </div>
      </div>
      <div id="aiwResultMount"></div>
    </section>

    <section class="dashboard-section">
      <div class="dashboard-section-head"><div><h2>待处理事项</h2><p>今天需要继续推进的业务事项</p></div></div>
      <div class="dashboard-todo-stats">
        <button class="dashboard-todo-card" data-route="requirements"><span>待处理需求</span><strong>12</strong><small>其中 4 条今天到期</small></button>
        <button class="dashboard-todo-card" data-route="catalog-search"><span>授权风险</span><strong>8</strong><small>2,318 首歌曲需关注</small></button>
        <button class="dashboard-todo-card" data-route="deliveries"><span>待交付</span><strong>5</strong><small>3 个客户等待交付</small></button>
        <button class="dashboard-todo-card" data-route="requirements"><span>客户待反馈</span><strong>3</strong><small>已有试听结果待确认</small></button>
      </div>
    </section>

    <div class="dashboard-grid">
      <section class="card dashboard-work-card">
        <div class="dashboard-card-head"><div><h2>最近工作</h2><p>继续刚刚处理过的事情</p></div><a data-route="requirements">查看全部</a></div>
        <div class="dashboard-work-list">
          <button type="button" data-aiw-task="search">
            <span class="dashboard-work-mark ai">✦</span><div><strong>影石无人机旅行音乐</strong><small>AI 找歌 · 20 首结果</small></div><em>今天 16:42</em>
          </button>
          <button type="button" data-route="requirement-detail">
            <span class="dashboard-work-mark"></span><div><strong>户外旅行音乐周更</strong><small>影石 · 12 首候选待确认</small></div><em>今天 14:21</em>
          </button>
          <button type="button" data-aiw-task="rights">
            <span class="dashboard-work-mark warn"></span><div><strong>影石授权到期检查</strong><small>328 首进入风险期</small></div><em>今天 11:05</em>
          </button>
          <button type="button" data-route="requirement-detail">
            <span class="dashboard-work-mark ok"></span><div><strong>Keep Q4 跑步音乐</strong><small>试听歌单已发送 · 等待客户反馈</small></div><em>昨天</em>
          </button>
        </div>
      </section>

      <section class="card dashboard-catalog-card">
        <div class="dashboard-card-head"><div><h2>曲库概览</h2><p>当前核心曲库状态</p></div><a data-route="catalog-dashboard">查看看板</a></div>
        <div class="dashboard-catalog-metrics">
          <div><span>全量曲库</span><strong>29,830,412</strong><small>当前已入库音乐资产</small></div>
          <div><span>常规商用</span><strong>3,184,206</strong><small>约占全量 10.7%</small></div>
          <div><span>本月新增</span><strong>82,319</strong><small>持续更新中</small></div>
          <div><span>合作 CP</span><strong>1,286</strong><small>当前曲库来源</small></div>
        </div>
      </section>
    </div>
  </div>
`;

// app.js captures render function references when building the route table.
if (typeof routes !== 'undefined' && routes.dashboard) {
  routes.dashboard.render = Page.dashboard;
}
