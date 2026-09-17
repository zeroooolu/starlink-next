(() => {
  const DEMO_CREDENTIALS = ['demo-client-value-001', 'demo-access-value-002'];

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

  function apiCard() {
    const panel = document.querySelector('[data-cd-panel="api"]');
    if (!panel) return null;
    return [...panel.querySelectorAll('.cd-card')].find((card) => card.querySelector('h3')?.textContent.trim() === 'API 接入配置') || null;
  }

  function buildCredentialRow(node, index) {
    node.textContent = DEMO_CREDENTIALS[index] || `demo-value-${index + 1}`;
    if (node.parentElement?.classList.contains('cd-cred-value')) return;

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
  }

  function ensureAuthorizationSwitch(card) {
    const body = card.querySelector('.cd-card-body');
    if (!body) return;

    let row = body.querySelector('.cd-api-auth-row');
    const legacyActions = body.querySelector('.cd-mini-actions');

    if (!row) {
      row = legacyActions || document.createElement('div');
      row.className = 'cd-api-auth-row';
      row.innerHTML = `
        <div class="cd-api-auth-copy">
          <strong>API 授权</strong>
          <span>允许该客户使用以上凭证调用 STARLINK API。</span>
        </div>
        <button class="cd-api-switch on" type="button" role="switch" aria-checked="true" aria-label="API 授权">
          <span></span>
        </button>
      `;
      if (!legacyActions) body.appendChild(row);
    }

    const status = card.querySelector('.cd-card-head .cd-badge, .cd-card-head .cd-api-status');
    if (status) {
      status.className = 'cd-api-status active';
      status.innerHTML = '<i></i>已授权';
    }
  }

  function enhanceCustomerApiPanel() {
    const card = apiCard();
    if (!card) return;

    const credBox = card.querySelector('.cd-api-cred');
    if (credBox) credBox.classList.add('stacked');

    card.querySelectorAll('.cd-api-cred .cd-cred code').forEach((node, index) => buildCredentialRow(node, index));
    ensureAuthorizationSwitch(card);
  }

  document.addEventListener('click', (event) => {
    const toggle = event.target.closest('.cd-api-switch');
    if (!toggle) return;

    const enabled = toggle.classList.toggle('on');
    toggle.setAttribute('aria-checked', String(enabled));

    const card = toggle.closest('.cd-card');
    const status = card?.querySelector('.cd-api-status');
    if (status) {
      status.className = `cd-api-status ${enabled ? 'active' : 'disabled'}`;
      status.innerHTML = `<i></i>${enabled ? '已授权' : '未授权'}`;
    }

    const desc = card?.querySelector('.cd-api-auth-copy span');
    if (desc) {
      desc.textContent = enabled
        ? '允许该客户使用以上凭证调用 STARLINK API。'
        : '当前未授权，客户使用以上凭证发起的 API 请求将被拒绝。';
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-cd-tab="api"]')) requestAnimationFrame(enhanceCustomerApiPanel);
  });

  window.addEventListener('hashchange', () => requestAnimationFrame(enhanceCustomerApiPanel));
  document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(enhanceCustomerApiPanel));

  const workspace = document.getElementById('workspace');
  if (workspace) {
    new MutationObserver(() => requestAnimationFrame(enhanceCustomerApiPanel)).observe(workspace, { childList: true, subtree: true });
  }
})();