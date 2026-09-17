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
    const projectCard = event.target.closest('.project-card');
    if (projectCard && !event.target.closest('button,a')) {
      const name = $('h3', projectCard)?.textContent;
      if (name) setCurrentProject(name);
      return;
    }

    const dropdownItem = event.target.closest('.dropdown-item');
    if (!dropdownItem || dropdownItem.dataset.route) return;
    const text = dropdownItem.textContent?.replace(/当前/g, '').trim();
    const knownProjects = ['Keep App · 2026 Q4', '海外短视频素材库', '智能硬件 · Sound Box', '品牌内容中台'];
    const matched = knownProjects.find(name => text?.includes(name));
    if (matched) setCurrentProject(matched);
  }, true);
})();
