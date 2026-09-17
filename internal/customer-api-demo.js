(() => {
  function copyText(text, button) {
    const finish = () => {
      button.textContent = '已复制';
      button.classList.add('copied');
      setTimeout(() => {
        button.textContent = '复制';
        button.classList.remove('copied');
      }, 1200);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(finish).catch(() => fallbackCopy(text, finish));
    } else {
      fallbackCopy(text, finish);
    }
  }

  function fallbackCopy(text, callback) {
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
    callback();
  }

  function enhanceCustomerApiPanel() {
    const panelTitle = [...document.querySelectorAll('.cd-card-head h3')].find((node) => node.textContent.trim() === 'API 接入配置');
    if (!panelTitle) return;
    const card = panelTitle.closest('.cd-card');
    if (!card || card.dataset.apiDemoEnhanced === 'true') return;
    card.dataset.apiDemoEnhanced = 'true';

    const credBox = card.querySelector('.cd-api-cred');
    if (credBox) credBox.classList.add('stacked');

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
      button.addEventListener('click', () => copyText(node.textContent.trim(), button));
      wrap.appendChild(button);
    });

    const status = card.querySelector('.cd-card-head .cd-badge');
    if (status) {
      status.className = 'cd-api-status active';
      status.innerHTML = '<i></i>已授权';
    }

    const actions = card.querySelector('.cd-mini-actions');
    if (actions) {
      actions.className = 'cd-api-auth-row';
      actions.innerHTML = `
        <div class="cd-api-auth-copy">
          <strong>API 授权</strong>
          <span>控制该客户是否可以使用以上凭证调用 STARLINK API。</span>
        </div>
        <button class="cd-api-switch on" type="button" role="switch" aria-checked="true" aria-label="API 授权">
          <span></span>
        </button>
      `;

      const toggle = actions.querySelector('.cd-api-switch');
      toggle.addEventListener('click', () => {
        const enabled = toggle.classList.toggle('on');
        toggle.setAttribute('aria-checked', String(enabled));
        if (status) {
          status.className = `cd-api-status ${enabled ? 'active' : 'disabled'}`;
          status.innerHTML = `<i></i>${enabled ? '已授权' : '未授权'}`;
        }
        const desc = actions.querySelector('.cd-api-auth-copy span');
        if (desc) {
          desc.textContent = enabled
            ? '控制该客户是否可以使用以上凭证调用 STARLINK API。'
            : '当前未授权，客户使用以上凭证发起的 API 请求将被拒绝。';
        }
      });
    }
  }

  function loadStylesheet(href, marker) {
    if (document.querySelector(`link[data-dynamic-asset="${marker}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.dataset.dynamicAsset = marker;
    document.head.appendChild(link);
  }

  function loadScript(src, marker, callback) {
    const existing = document.querySelector(`script[data-dynamic-asset="${marker}"]`);
    if (existing) {
      if (callback) callback();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.dataset.dynamicAsset = marker;
    if (callback) script.addEventListener('load', callback, {once:true});
    document.body.appendChild(script);
  }

  function ensureWorkflowAssets() {
    loadStylesheet('./workflow-management.css', 'workflow-css');
    loadStylesheet('./customer-workflow-tabs.css', 'customer-workflow-css');
    loadScript('./workflow-management.js', 'workflow-js', () => {
      loadScript('./customer-workflow-tabs.js', 'customer-workflow-js');
    });
  }

  ensureWorkflowAssets();
  const observer = new MutationObserver(() => enhanceCustomerApiPanel());
  observer.observe(document.getElementById('workspace'), { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', enhanceCustomerApiPanel);
})();
