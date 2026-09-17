(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function closeTransientUI() {
    $$('.dropdown').forEach(node => node.remove());
    document.body.classList.remove('mobile-menu-open');
    $('#scrim')?.classList.remove('show');
  }

  function setCurrentProject(name) {
    const target = $('.project-copy strong');
    if (!target || !name) return;
    target.textContent = name.trim();
    if (typeof window.toast === 'function') window.toast(`已切换到「${name.trim()}」`);
  }

  // 客户前台的项目来自内部后台配置，只读展示，不允许新建、编辑、归档或在项目页操作内容。
  if (typeof pages !== 'undefined') {
    pages.projects = () => {
      const projects = [
        {
          name: 'Keep App · 2026 Q4',
          id: 'PRJ-2026-0042',
          scope: '全曲库 · 商业音乐授权',
          period: '2026-07-01 — 2027-06-30',
          status: '生效中'
        },
        {
          name: '海外短视频素材库',
          id: 'PRJ-2026-0036',
          scope: '海外曲库 · 短视频场景',
          period: '2026-05-15 — 2027-05-14',
          status: '生效中'
        },
        {
          name: '智能硬件 · Sound Box',
          id: 'PRJ-2026-0028',
          scope: '设备端曲库 · 离线使用',
          period: '2026-03-01 — 2027-02-28',
          status: '生效中'
        },
        {
          name: '品牌内容中台',
          id: 'PRJ-2025-0094',
          scope: '品牌营销 · 广告与宣传',
          period: '2025-10-01 — 2026-09-30',
          status: '即将到期'
        }
      ];

      const columns = 'minmax(240px,1.65fr) 150px minmax(210px,1fr) 190px 110px';
      const rows = projects.map(project => `
        <div class="data-row" style="grid-template-columns:${columns};min-height:62px;cursor:default">
          <div class="data-main">
            <strong>${project.name}</strong>
            <small>由 STARLINK 后台配置</small>
          </div>
          <div class="data-cell">${project.id}</div>
          <div class="data-cell">${project.scope}</div>
          <div class="data-cell">${project.period}</div>
          <div><span class="status ${project.status === '即将到期' ? 'pending' : ''}">${project.status}</span></div>
        </div>`).join('');

      return `${pageHead('我的项目','查看当前企业已授权的项目。项目信息由 STARLINK 后台统一配置，客户端仅支持查看。')}
        <div class="table-card project-readonly-list">
          <div class="data-row head" style="grid-template-columns:${columns}">
            <span>项目名称</span>
            <span>项目编号</span>
            <span>授权范围</span>
            <span>授权有效期</span>
            <span>状态</span>
          </div>
          ${rows}
        </div>`;
    };
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeTransientUI();
      return;
    }

    if (event.key === 'Enter' && event.target?.id === 'heroSearchInput') {
      event.preventDefault();
      $('#heroSearchBtn')?.click();
      return;
    }

    if (event.key === 'Enter' && event.target?.id === 'catalogSearchInput') {
      event.preventDefault();
      $('#catalogSearchBtn')?.click();
      return;
    }

    if (event.target?.id === 'aiInput' && event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      $('#aiSend')?.click();
    }
  });

  document.addEventListener('click', event => {
    const dropdownItem = event.target.closest('.dropdown-item');
    if (!dropdownItem || dropdownItem.dataset.route) return;
    const text = dropdownItem.textContent?.replace(/当前/g, '').trim();
    const knownProjects = ['Keep App · 2026 Q4', '海外短视频素材库', '智能硬件 · Sound Box', '品牌内容中台'];
    const matched = knownProjects.find(name => text?.includes(name));
    if (matched) setCurrentProject(matched);
  }, true);
})();
