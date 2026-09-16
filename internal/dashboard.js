// Dashboard override: keep the home page focused on catalog overview, search and pending work.
Page.dashboard = () => `
  <div class="page-head">
    <div class="page-title">
      <h1>工作台</h1>
      <p>快速了解当前曲库规模，直接查询内容，并处理需要关注的事项。</p>
    </div>
  </div>

  <div class="stats">
    <div class="card stat">
      <div class="stat-label">全量曲库</div>
      <div class="stat-value">29,830,412</div>
      <div class="stat-note">当前已入库音乐资产</div>
    </div>
    <div class="card stat">
      <div class="stat-label">常规商用曲库</div>
      <div class="stat-value">3,184,206</div>
      <div class="stat-note">约占全量曲库 10.7%</div>
    </div>
    <div class="card stat">
      <div class="stat-label">本月新增</div>
      <div class="stat-value">82,319</div>
      <div class="stat-note up">持续更新中</div>
    </div>
    <div class="card stat">
      <div class="stat-label">合作 CP</div>
      <div class="stat-value">1,286</div>
      <div class="stat-note">当前曲库来源</div>
    </div>
  </div>

  <div class="card card-pad" style="margin-top:14px">
    <div class="card-title">
      <h3>快速查曲库</h3>
      <a data-route="catalog-search">进入高级检索</a>
    </div>
    <div class="toolbar" style="padding:10px 0 2px">
      <div class="search" style="max-width:none;flex:1">
        <input placeholder="搜索歌曲、艺人、专辑、ISRC、UID 或 CP" />
      </div>
      <button class="btn primary" data-route="catalog-search">查询</button>
    </div>
    <div class="filter-row" style="padding:10px 0 0;border:0">
      <span class="filter-label">常用入口</span>
      <button class="chip" data-route="catalog-search">商用曲库</button>
      <button class="chip" data-route="catalog-search">KTV 曲库</button>
      <button class="chip" data-route="catalog-search">按授权区域</button>
      <button class="chip" data-route="catalog-search">按使用场景</button>
      <button class="chip" data-route="catalog-search">按标签</button>
    </div>
  </div>

  <div class="card card-pad" style="margin-top:14px">
    <div class="card-title">
      <div>
        <h3>待处理事项</h3>
        <div class="track-sub" style="margin-top:4px">需要运营或商务继续跟进的事项</div>
      </div>
      <a data-route="requirements">查看全部需求</a>
    </div>
    <div class="list">
      <div class="list-row clickable" data-route="requirement-detail">
        <span class="dot orange"></span>
        <div class="list-main">
          <strong>影石｜户外旅行音乐</strong>
          <small>Insta360 · 每周 7–8 首 · 优先高热度内容</small>
        </div>
        <span class="badge orange">处理中</span>
        <div class="list-meta">今天</div>
      </div>
      <div class="list-row clickable" data-route="requirement-detail">
        <span class="dot"></span>
        <div class="list-main">
          <strong>南航｜10 月机上音乐</strong>
          <small>单轮供给不超过 200 首 · 等待整理候选内容</small>
        </div>
        <span class="badge blue">待处理</span>
        <div class="list-meta">今天</div>
      </div>
      <div class="list-row clickable" data-route="requirement-detail">
        <span class="dot green"></span>
        <div class="list-main">
          <strong>Keep｜Q4 跑步音乐</strong>
          <small>试听歌单已发送 · 等待客户完成挑选</small>
        </div>
        <span class="badge purple">待反馈</span>
        <div class="list-meta">昨天</div>
      </div>
      <div class="list-row clickable" data-route="catalog-search">
        <span class="dot orange"></span>
        <div class="list-main">
          <strong>2,318 首歌曲授权将在 30 日内到期</strong>
          <small>建议确认续约或限制后续客户使用范围</small>
        </div>
        <span class="badge orange">需关注</span>
        <div class="list-meta">权利</div>
      </div>
    </div>
  </div>
`;

// app.js captures render function references when building the route table.
// Re-wire the dashboard route so both initial load and later navigation use the new page.
if (typeof routes !== 'undefined' && routes.dashboard) {
  routes.dashboard.render = Page.dashboard;
}
