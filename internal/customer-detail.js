Page.customerDetail = () => `
  <div class="customer-detail-page">
    <section class="cd-hero">
      <div class="cd-hero-top">
        <div>
          <div class="cd-back" data-route="customers">← 返回客户管理</div>
          <div class="cd-title-row">
            <div class="cd-logo">IN</div>
            <div class="cd-title">
              <h1>影石 Insta360</h1>
              <div class="cd-meta"><span class="cd-badge">合作中</span><span>客户编号 CUS-00182</span><span>消费电子 · 影像设备</span><span>负责人：王小明</span></div>
            </div>
          </div>
        </div>
        <div class="cd-actions"><button class="cd-btn">编辑客户</button><button class="cd-btn">创建项目</button><button class="cd-btn">创建需求</button><button class="cd-btn primary" data-route="delivery-detail">创建交付</button></div>
      </div>
      <div class="cd-stats">
        <div class="cd-stat"><span>当前可用曲库</span><strong>182,381</strong><small>较上月 +3,214</small></div>
        <div class="cd-stat"><span>近 7 天 API 调用</span><strong>128,642</strong><small>成功率 99.96%</small></div>
        <div class="cd-stat"><span>近 7 天试听播放</span><strong>3,428</strong><small>涉及 1,186 首歌曲</small></div>
        <div class="cd-stat"><span>近 30 天活跃账号</span><strong>12 / 18</strong><small>最近活跃：今天 16:42</small></div>
      </div>
    </section>

    <div class="cd-tabs" id="customerDetailTabs">
      ${cdTab('overview','概览',true)}${cdTab('catalog','客户曲库')}${cdTab('entitlement','授权配置')}${cdTab('api','API 配置')}${cdTab('projects','项目')}${cdTab('requirements','需求')}${cdTab('deliveries','交付')}${cdTab('accounts','账号')}
    </div>

    <section class="cd-panel active" data-cd-panel="overview">
      <div class="cd-activity-strip">
        ${cdMetric('今日 API 调用','21,482','较昨日 +8.2%')}${cdMetric('今日试听','624','播放完成率 61%')}${cdMetric('今日下载','86','涉及 42 首歌曲')}${cdMetric('近 30 天交付','12 次','共 438 首')}
      </div>
      <div class="cd-grid-2 cd-section-gap">
        <div class="cd-card">
          <div class="cd-card-head"><div><h3>客户信息</h3><p>维护商务合作和日常联系需要的核心资料。</p></div><button class="cd-icon-btn">编辑</button></div>
          <div class="cd-card-body"><dl class="cd-kv"><dt>客户全称</dt><dd>影石创新科技股份有限公司</dd><dt>客户简称</dt><dd>Insta360</dd><dt>行业</dt><dd>消费电子 / 影像设备</dd><dt>商务负责人</dt><dd>王小明</dd><dt>主要联系人</dt><dd>陈女士 · chen@insta360.example</dd><dt>合作开始</dt><dd>2024-06-01</dd></dl></div>
        </div>
        <div class="cd-card">
          <div class="cd-card-head"><div><h3>访问能力</h3><p>客户当前可以使用哪些内容和产品能力。</p></div><span class="cd-link" data-cd-jump="entitlement">查看授权配置</span></div>
          <div class="cd-card-body"><div class="cd-cap-list">
            ${cdCap('API 访问','已启用',true)}${cdCap('在线试听','无水印',true)}${cdCap('下载文件','MP3 / WAV',true)}${cdCap('自助上架','API 曲库',true)}${cdCap('批量导出','仅 Metadata',false)}${cdCap('试听分享','已启用',true)}
          </div></div>
        </div>
      </div>
      <div class="cd-card cd-section-gap">
        <div class="cd-card-head"><div><h3>最近使用活动</h3><p>汇总 API、试听、下载和登录行为，便于判断客户活跃度和使用异常。</p></div><div class="cd-mini-actions"><button class="cd-icon-btn active">全部</button><button class="cd-icon-btn">API</button><button class="cd-icon-btn">试听</button><button class="cd-icon-btn">下载</button></div></div>
        <div class="cd-table-wrap"><table class="cd-table"><thead><tr><th>时间</th><th>类型</th><th>账号 / 调用方</th><th>动作</th><th>内容</th><th>结果</th></tr></thead><tbody>
          ${cdActivityRow('今天 16:42','API','insta360_prod','GET /catalog/tracks','查询 100 首','成功')}
          ${cdActivityRow('今天 16:38','试听','chen@insta360.example','播放','Midnight Drive · 01:48','完成 72%')}
          ${cdActivityRow('今天 16:31','下载','li@insta360.example','下载 WAV','8 首','成功')}
          ${cdActivityRow('今天 15:57','API','insta360_prod','GET /tracks/22648659','读取单曲','成功')}
        </tbody></table></div>
      </div>
      <div class="cd-grid-2 cd-section-gap">
        <div class="cd-card"><div class="cd-card-head"><div><h3>最近需求</h3><p>客户提出并正在流转的内容需求。</p></div><span class="cd-link" data-route="requirements">查看全部</span></div><div class="cd-table-wrap"><table class="cd-table"><thead><tr><th>需求</th><th>项目</th><th>状态</th><th>更新时间</th></tr></thead><tbody><tr><td><span class="cd-link" data-route="requirement-detail">户外旅行音乐</span></td><td>Insta360</td><td><span class="cd-status warn">处理中</span></td><td>今天 14:21</td></tr><tr><td>无人机首发音乐</td><td>Drone</td><td><span class="cd-status">待客户反馈</span></td><td>昨天</td></tr></tbody></table></div></div>
        <div class="cd-card"><div class="cd-card-head"><div><h3>最近交付</h3><p>客户最近收到的试听、下载与 API 内容。</p></div><span class="cd-link" data-route="deliveries">查看全部</span></div><div class="cd-table-wrap"><table class="cd-table"><thead><tr><th>内容</th><th>方式</th><th>数量</th><th>时间</th></tr></thead><tbody><tr><td><span class="cd-link" data-route="delivery-detail">0916 户外旅行</span></td><td>API 上架</td><td>8 首</td><td>今天 14:21</td></tr><tr><td>0909 中秋推荐</td><td>API 上架</td><td>7 首</td><td>09-09</td></tr></tbody></table></div></div>
      </div>
    </section>

    <section class="cd-panel" data-cd-panel="catalog">
      <div class="cd-card">
        <div class="cd-card-head"><div><h3>客户曲库</h3><p>当前客户实际可访问的内容集合，由客户授权规则与人工上架结果共同决定。</p></div><div class="cd-mini-actions"><button class="cd-btn">添加歌单</button><button class="cd-btn primary">添加歌曲</button></div></div>
        <div class="cd-card-body"><div class="cd-activity-strip">${cdMetric('当前可用','182,381','全部可访问内容')}${cdMetric('API 已上架','176,204','96.6%')}${cdMetric('30 天内新增','4,812','自动 + 人工')}${cdMetric('即将到期','328','30 天内到期')}</div></div>
        <div class="cd-card-body" style="padding-top:0"><div class="cd-searchbar"><input class="cd-input" placeholder="搜索歌曲 / 艺人 / Track ID"><button class="cd-btn">授权场景：全部</button><button class="cd-btn">API 状态：全部</button><button class="cd-btn">到期状态：全部</button><button class="cd-btn primary">查询</button></div></div>
        <div class="cd-table-wrap"><table class="cd-table"><thead><tr><th>歌曲</th><th>来源</th><th>授权场景</th><th>授权区域</th><th>有效期</th><th>API 状态</th><th>操作</th></tr></thead><tbody>
          ${cdCatalogRow('Love you more','TrailblazersRadar','智能授权','影视同步 / 数字发行','全球','2027-12-31','已上架')}
          ${cdCatalogRow('Crystal Crush','独立创作','人工上架','影视同步','全球','长期','已上架')}
          ${cdCatalogRow('New World','Krewella','智能授权','数字发行','中国大陆及港澳台','2026-10-20','已上架')}
        </tbody></table></div>
      </div>
    </section>

    <section class="cd-panel" data-cd-panel="entitlement">
      <div class="cd-grid-2">
        <div class="cd-card">
          <div class="cd-card-head"><div><h3>客户曲库授权规则</h3><p>这些规则决定客户能检索、试听和通过 API 获取哪些内容。</p></div><button class="cd-btn primary">编辑规则</button></div>
          <div class="cd-card-body">
            ${cdRightsBlock('影视同步',['独家授权','词版权','曲版权','录音版权','表演者权','有定价权','可超期授权'])}
            ${cdRightsBlock('数字发行',['词版权','曲版权','录音版权','表演者权','有定价权'])}
            <div class="cd-rights-block"><div class="cd-rights-title"><strong>通用限制</strong></div><div class="cd-rights-row"><label>场景关系</label><div>AND</div></div><div class="cd-rights-row"><label>授权区域</label><div>全球</div></div><div class="cd-rights-row"><label>授权有效期</label><div>大于 1 年</div></div></div>
            <div class="cd-note">规则更新后可重新计算客户可用曲库。历史已经交付的内容保留交付时的授权快照，不会跟随当前规则变化。</div>
          </div>
        </div>
        <div class="cd-card">
          <div class="cd-card-head"><div><h3>产品能力权限</h3><p>控制客户如何使用已经授权的曲库。</p></div></div>
          <div class="cd-card-body"><div class="cd-cap-list">${cdCap('API 是否授权','允许调用客户曲库',true)}${cdCap('在线试听','允许在线播放',true)}${cdCap('试听水印','当前关闭',false)}${cdCap('文件下载','允许授权后下载',true)}${cdCap('WAV 下载','允许无损文件',true)}${cdCap('客户自助上架','允许加入 API 曲库',true)}</div></div>
        </div>
      </div>
    </section>

    <section class="cd-panel" data-cd-panel="api">
      <div class="cd-grid-2">
        <div class="cd-card"><div class="cd-card-head"><div><h3>API 接入配置</h3><p>管理生产环境凭证、访问控制和开放能力。</p></div><span class="cd-badge">正常</span></div><div class="cd-card-body">
          <div class="cd-api-cred"><div class="cd-cred"><label>AppKey / Client ID</label><code>83715b9dfd5f4b8fad2fb0830acbffa7</code></div><div class="cd-cred"><label>AppSecret</label><code>••••••••••••••••••••••••</code></div></div>
          <div class="cd-rights-block cd-section-gap"><div class="cd-rights-row"><label>IP 白名单</label><div>120.24.18.0/24 · 47.96.88.21</div></div><div class="cd-rights-row"><label>开放能力</label><div><span class="cd-chip">曲库查询</span><span class="cd-chip">歌曲详情</span><span class="cd-chip">试听地址</span><span class="cd-chip">文件获取</span><span class="cd-chip">Webhook</span></div></div><div class="cd-rights-row"><label>速率限制</label><div>600 req/min</div></div></div>
          <div class="cd-mini-actions"><button class="cd-btn">重置 Secret</button><button class="cd-btn">管理 IP 白名单</button></div>
        </div></div>
        <div class="cd-card"><div class="cd-card-head"><div><h3>近 7 天 API 使用</h3><p>接口调用情况与异常概览。</p></div></div><div class="cd-card-body"><div class="cd-activity-strip" style="grid-template-columns:1fr 1fr">${cdMetric('总调用','128,642','+8.2%')}${cdMetric('成功率','99.96%','51 次失败')}${cdMetric('平均延迟','184 ms','P95 462 ms')}${cdMetric('今日峰值','412 RPM','16:00 - 17:00')}</div></div></div>
      </div>
      <div class="cd-card cd-section-gap"><div class="cd-card-head"><div><h3>API 调用日志</h3><p>用于排查客户接入问题和确认内容调用情况。</p></div><div class="cd-searchbar"><input class="cd-input" placeholder="搜索 Track ID / Endpoint / Request ID"><button class="cd-btn">状态：全部</button></div></div><div class="cd-table-wrap"><table class="cd-table"><thead><tr><th>时间</th><th>Endpoint</th><th>Request ID</th><th>调用内容</th><th>状态</th><th>耗时</th><th>IP</th></tr></thead><tbody>${cdApiRow('16:42:18','GET /catalog/tracks','req_8f21a','page=1&limit=100','200','168 ms','120.24.18.32')}${cdApiRow('16:41:52','GET /tracks/{id}','req_8f20f','22648659','200','92 ms','120.24.18.32')}${cdApiRow('16:37:08','GET /files/{id}','req_8f1ac','audio/wav','403','76 ms','120.24.18.41',true)}</tbody></table></div></div>
    </section>

    <section class="cd-panel" data-cd-panel="projects">${cdSimpleList('合作项目','统一查看该客户下各产品线或合作业务。',['Insta360 相机 · 合作中','Drone 无人机 · 合作中','Ace Pro · 合作中','移动端模板 · 暂停'])}</section>
    <section class="cd-panel" data-cd-panel="requirements">${cdSimpleList('客户需求','记录客户提出的内容需求以及处理流转。',['户外旅行音乐 · 处理中','无人机首发音乐 · 待客户反馈','中秋推荐 · 已完成','经典耳熟内容盘活 · 已完成'])}</section>
    <section class="cd-panel" data-cd-panel="deliveries">${cdSimpleList('客户交付','查看该客户全部在线试听、下载、API 和网盘交付记录。',['0916 户外旅行 · API · 8 首','0909 中秋推荐 · API · 7 首','0827 产品线候选 · 在线试听 · 53 首','0803 旅行精选 · 下载 · 32 首'])}</section>

    <section class="cd-panel" data-cd-panel="accounts">
      <div class="cd-card"><div class="cd-card-head"><div><h3>客户账号</h3><p>管理客户登录 STARLINK 的成员、角色和最近活跃情况。</p></div><div class="cd-mini-actions"><button class="cd-btn">关联已有账号</button><button class="cd-btn primary">添加账号</button></div></div>
      <div class="cd-card-body"><div class="cd-searchbar"><input class="cd-input" placeholder="搜索姓名 / 邮箱 / 手机号 / 部门"><button class="cd-btn">角色：全部</button><button class="cd-btn">状态：全部</button></div></div>
      <div class="cd-table-wrap"><table class="cd-table"><thead><tr><th>成员</th><th>账号</th><th>部门</th><th>角色</th><th>状态</th><th>最近登录</th><th>近 30 天活动</th><th>操作</th></tr></thead><tbody>${cdAccountRow('陈女士','chen@insta360.example','内容运营','管理员','正常','今天 16:42','试听 186 · 下载 12')}${cdAccountRow('李先生','li@insta360.example','产品','选歌成员','正常','今天 14:18','试听 92 · 下载 8')}${cdAccountRow('API Team','api@insta360.example','研发','API 管理员','正常','昨天 21:06','API 配置 2 次')}</tbody></table></div></div>
    </section>
  </div>
`;

function cdTab(key,label,active=false){return `<button class="cd-tab ${active?'active':''}" data-cd-tab="${key}">${label}</button>`}
function cdMetric(label,value,note){return `<div class="cd-activity-metric"><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`}
function cdCap(title,desc,on){return `<div class="cd-cap"><div class="cd-cap-top"><div><strong>${title}</strong><small>${desc}</small></div><span class="cd-switch ${on?'on':''}"></span></div></div>`}
function cdActivityRow(time,type,user,action,content,result){return `<tr><td>${time}</td><td>${type}</td><td>${user}</td><td>${action}</td><td>${content}</td><td><span class="cd-status">${result}</span></td></tr>`}
function cdCatalogRow(title,artist,source,scene,territory,term,status){return `<tr><td><strong>${title}</strong><div style="font-size:11px;color:#9199a6;margin-top:3px">${artist}</div></td><td>${source}</td><td>${scene}</td><td>${territory}</td><td>${term}</td><td><span class="cd-status">${status}</span></td><td><span class="cd-link">查看</span></td></tr>`}
function cdRightsBlock(scene,rights){return `<div class="cd-rights-block"><div class="cd-rights-title"><strong>${scene}</strong><span class="cd-link">编辑</span></div><div class="cd-rights-row"><label>权利项</label><div>${rights.map(x=>`<span class="cd-chip">${x}</span>`).join('')}</div></div></div>`}
function cdApiRow(time,endpoint,id,content,status,latency,ip,warn=false){return `<tr><td>${time}</td><td class="cd-log-method">${endpoint}</td><td>${id}</td><td>${content}</td><td class="${warn?'cd-log-warn':'cd-log-ok'}">${status}</td><td>${latency}</td><td>${ip}</td></tr>`}
function cdSimpleList(title,desc,items){return `<div class="cd-card"><div class="cd-card-head"><div><h3>${title}</h3><p>${desc}</p></div><button class="cd-btn primary">新增</button></div><div class="cd-card-body">${items.map(x=>`<div style="padding:13px 2px;border-bottom:1px solid #eef0f3;font-size:13px">${x}</div>`).join('')}</div></div>`}
function cdAccountRow(name,account,dept,role,status,last,activity){return `<tr><td><div class="cd-row-user"><span class="cd-avatar">${name.slice(0,1)}</span><strong>${name}</strong></div></td><td>${account}</td><td>${dept}</td><td>${role}</td><td><span class="cd-status">${status}</span></td><td>${last}</td><td>${activity}</td><td><span class="cd-link">管理</span></td></tr>`}

if (routes && routes['customer-detail']) routes['customer-detail'].render = Page.customerDetail;

document.addEventListener('click', e => {
  const tab = e.target.closest('[data-cd-tab]');
  if(tab){
    const key=tab.dataset.cdTab;
    document.querySelectorAll('.cd-tab').forEach(x=>x.classList.toggle('active',x===tab));
    document.querySelectorAll('.cd-panel').forEach(x=>x.classList.toggle('active',x.dataset.cdPanel===key));
    return;
  }
  const jump=e.target.closest('[data-cd-jump]');
  if(jump){
    const target=document.querySelector(`[data-cd-tab="${jump.dataset.cdJump}"]`);
    if(target) target.click();
  }
});