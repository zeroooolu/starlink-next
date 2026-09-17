(() => {
  const detailBreadcrumbs = {
    'playlist-detail': [
      { label: '歌单与交付' },
      { label: '歌单管理', route: 'playlists' },
      { label: '歌单详情', current: true }
    ],
    'smart-playlist-create': [
      { label: '歌单与交付' },
      { label: '歌单管理', route: 'playlists' },
      { label: '新建智能歌单', current: true }
    ],
    'delivery-detail': [
      { label: '歌单与交付' },
      { label: '交付记录', route: 'deliveries' },
      { label: '交付详情', current: true }
    ],
    'customer-detail': [
      { label: '客户' },
      { label: '客户管理', route: 'customers' },
      { label: '影石 Insta360', current: true }
    ],
    'project-detail': [
      { label: '客户' },
      { label: '项目管理', route: 'projects' },
      { label: 'Insta360 内容音乐', current: true }
    ],
    'requirement-detail': [
      { label: '客户' },
      { label: '需求管理', route: 'requirements' },
      { label: '户外旅行音乐周更', current: true }
    ]
  };

  function currentRoute() {
    return (window.location.hash || '#dashboard').replace(/^#/, '').split('?')[0] || 'dashboard';
  }

  function removeInlineBackLinks() {
    const workspace = document.getElementById('workspace');
    if (!workspace) return;

    workspace.querySelectorAll('.cd-back,.wf-back,.smart-back').forEach((node) => {
      node.style.display = 'none';
    });

    workspace.querySelectorAll('[data-route]').forEach((node) => {
      const text = (node.textContent || '').trim();
      if (text.startsWith('←') || /^返回(歌单|客户|项目|需求|交付)/.test(text)) {
        node.style.display = 'none';
      }
    });
  }

  function renderBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;

    const route = currentRoute();
    const items = detailBreadcrumbs[route];
    if (!items) {
      breadcrumb.removeAttribute('data-detail-breadcrumb');
      return;
    }

    const currentLabel = items.find(x => x.current)?.label || '';
    if (
      breadcrumb.dataset.detailBreadcrumb === route &&
      breadcrumb.querySelector('.breadcrumb-current')?.textContent.trim() === currentLabel
    ) return;

    breadcrumb.dataset.detailBreadcrumb = route;
    breadcrumb.innerHTML = items.map((item, index) => {
      const content = item.route
        ? `<button type="button" class="breadcrumb-link" data-route="${item.route}">${item.label}</button>`
        : `<span class="${item.current ? 'breadcrumb-current' : 'breadcrumb-root'}">${item.label}</span>`;
      const separator = index < items.length - 1 ? '<span class="breadcrumb-separator">/</span>' : '';
      return `${content}${separator}`;
    }).join('');
  }

  function sync() {
    removeInlineBackLinks();
    renderBreadcrumb();
  }

  window.addEventListener('hashchange', () => requestAnimationFrame(sync));
  document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(sync));

  const workspace = document.getElementById('workspace');
  if (workspace) {
    new MutationObserver(() => requestAnimationFrame(sync)).observe(workspace, { childList: true, subtree: true });
  }

  const breadcrumb = document.getElementById('breadcrumb');
  if (breadcrumb) {
    new MutationObserver(() => {
      if (detailBreadcrumbs[currentRoute()]) requestAnimationFrame(renderBreadcrumb);
    }).observe(breadcrumb, { childList: true, subtree: true, characterData: true });
  }
})();
