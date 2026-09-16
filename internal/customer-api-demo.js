(() => {
  const cssHref = './workflow-management.css';
  if (![...document.querySelectorAll('link[rel="stylesheet"]')].some(x => x.getAttribute('href') === cssHref)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssHref;
    document.head.appendChild(link);
  }
  const script = document.createElement('script');
  script.src = './workflow-management.js';
  script.onload = () => {
    const current = location.hash.replace('#','') || 'dashboard';
    if (['projects','project-detail','requirements','requirement-detail','deliveries','delivery-detail'].includes(current) && typeof routeTo === 'function') routeTo(current,false);
  };
  document.body.appendChild(script);
})();

(() => {
  function enhanceCustomerApiPanel() {
    const panelTitle = [...document.querySelectorAll('.cd-card-head h3')].find((node) => node.textContent.trim() === 'API 接入配置');
    if (!panelTitle) return;
    const card = panelTitle.closest('.cd-card');
    if (!card || card.dataset.apiDemoEnhanced === 'true') return;
    card.dataset.apiDemoEnhanced = 'true';

    const values = card.querySelectorAll('.cd-api-cred .cd-cred code');
    const demoValues = ['demo-client-value-001', 'demo-access-value-002'];
    values.forEach((node, index) => {
      node.textContent = demoValues[index] || `demo-value-${index + 1}`;
      const wrap = document.createElement('div');
      wrap.className = 'cd-cred-value';
      node.parentNode.insertBefore(wrap, node);
      wrap.appendChild(node);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'cd-copy-btn';
      button.textContent = '复制';
      button.addEventListener('click', async () => {
        const text = node.textContent.trim();
        try {
          await navigator.clipboard.writeText(text);
        } catch (err) {
          const area = document.createElement('textarea');
          area.value = text;
          area.style.position = 'fixed';
          area.style.opacity = '0';
          document.body.appendChild(area);
          area.select();
          document.execCommand('copy');
          area.remove();
        }
        button.textContent = '已复制';
        button.classList.add('copied');
        setTimeout(() => {
          button.textContent = '复制';
          button.classList.remove('copied');
        }, 1200);
      });
      wrap.appendChild(button);
    });

    const status = card.querySelector('.cd-card-head .cd-badge');
    if (status) {
      status.className = 'cd-api-status active';
      status.innerHTML = '<i></i>正常';
    }

    const actions = card.querySelector('.cd-mini-actions');
    if (actions) {
      actions.classList.add('cd-api-actions');
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'cd-btn danger';
      toggle.textContent = '停用 API';
      toggle.dataset.disabled = 'false';
      actions.appendChild(toggle);

      const note = document.createElement('div');
      note.className = 'cd-api-warning';
      note.textContent = '停用后，客户的 API 请求将立即被拒绝；历史日志与客户曲库不会删除。';
      actions.insertAdjacentElement('afterend', note);

      toggle.addEventListener('click', () => {
        const isDisabled = toggle.dataset.disabled === 'true';
        toggle.dataset.disabled = String(!isDisabled);
        if (isDisabled) {
          toggle.textContent = '停用 API';
          toggle.className = 'cd-btn danger';
          if (status) {
            status.className = 'cd-api-status active';
            status.innerHTML = '<i></i>正常';
          }
          note.classList.remove('disabled');
        } else {
          toggle.textContent = '重新启用';
          toggle.className = 'cd-btn enable';
          if (status) {
            status.className = 'cd-api-status disabled';
            status.innerHTML = '<i></i>已停用';
          }
          note.classList.add('disabled');
        }
      });
    }
  }

  const observer = new MutationObserver(() => enhanceCustomerApiPanel());
  observer.observe(document.getElementById('workspace'), { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', enhanceCustomerApiPanel);
})();