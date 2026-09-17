(() => {
  function projectRow(id,name,scene,period,req,delivery,owner,status,last){
    return `<tr class="clickable" data-route="project-detail">
      <td><div class="wf-title">${name}</div><div class="wf-sub">${id}</div></td>
      <td>${scene}</td>
      <td>${period}</td>
      <td><b>${req}</b></td>
      <td>${delivery}</td>
      <td>${owner}</td>
      <td><span class="wf-status ${status==='进行中'?'ok':status==='待启动'?'doing':''}">${status}</span></td>
      <td>${last}</td>
      <td><button class="wf-row-btn" data-route="project-detail">详情</button></td>
    </tr>`;
  }

  function requirementRow(id,title,project,brief,target,progress,owner,due,status,last){
    const cls=status==='处理中'?'doing':status==='待客户反馈'?'wait':status==='已完成'?'ok':'';
    return `<tr class="clickable" data-route="requirement-detail">
      <td><div class="wf-title">${title}</div><div class="wf-sub">${id}</div></td>
      <td>${project}</td>
      <td>${brief}</td>
      <td>${target}</td>
      <td><div class="cwt-progress"><strong>${progress}</strong><span>${status==='已完成'?'已形成正式交付':'持续流转中'}</span></div></td>
      <td>${owner}</td>
      <td>${due}</td>
      <td><span class="wf-status ${cls}">${status}</span></td>
      <td>${last}</td>
    </tr>`;
  }

  function enhance(){
    const projects=document.querySelector('[data-cd-panel="projects"]');
    const requirements=document.querySelector('[data-cd-panel="requirements"]');
    if(!projects || !requirements) return;

    if(projects.dataset.workflowEnhanced!=='true'){
      projects.dataset.workflowEnhanced='true';
      projects.innerHTML=`
        <div class="cwt-summary">
          <div><span>合作项目</span><strong>4</strong><small>3 个进行中</small></div>
          <div><span>进行中需求</span><strong>3</strong><small>2 个等待客户反馈</small></div>
          <div><span>累计交付</span><strong>27 次</strong><small>共 612 首歌曲</small></div>
          <div><span>最近项目活动</span><strong>今天 16:42</strong><small>Insta360 内容音乐</small></div>
        </div>
        <section class="wf-filter-card cwt-filter">
          <div class="cwt-filter-head"><div><strong>该客户的合作项目</strong><span>记录不同产品线和长期合作场景</span></div><div class="wf-actions"><button class="wf-btn" data-route="projects">进入项目管理</button><button class="wf-btn primary">+ 新建项目</button></div></div>
          <div class="cwt-filter-row">
            <div class="wf-search cwt-search"><span>⌕</span><input placeholder="搜索项目名称 / 项目编号 / 合作场景" /></div>
            <div class="wf-status-tabs cwt-tabs"><button class="active">全部 4</button><button>进行中 3</button><button>待启动 1</button></div>
          </div>
        </section>
        <section class="wf-list-card">
          <div class="wf-list-top"><div><strong>项目列表</strong><span>只展示影石 Insta360 旗下项目</span></div><span>按最近活动排序</span></div>
          <div class="wf-table-wrap"><table class="wf-table cwt-project-table"><thead><tr><th>项目</th><th>合作场景</th><th>项目周期</th><th>进行中需求</th><th>累计交付</th><th>负责人</th><th>状态</th><th>最近活动</th><th>操作</th></tr></thead><tbody>
            ${projectRow('PRJ-2024-0182','Insta360 内容音乐','运动相机 / UGC / 短视频','2024-06-01 ～ 长期','2','18 次 · 428 首','王小明','进行中','今天 16:42')}
            ${projectRow('PRJ-2026-0046','影石无人机音乐','无人机 / 户外 / 旅行','2026-08-15 ～ 长期','1','3 次 · 24 首','王小明','进行中','今天 14:21')}
            ${projectRow('PRJ-2025-0113','Ace Pro 内容音乐','运动 / 极限 / Vlog','2025-10-01 ～ 长期','0','6 次 · 160 首','李小雨','进行中','09-15 18:03')}
            ${projectRow('PRJ-2026-0058','移动端模板音乐','App 模板 / 快剪 / UGC','2026-09-01 ～ 待确认','0','0 次','王小明','待启动','09-12 11:20')}
          </tbody></table></div>
        </section>`;
    }

    if(requirements.dataset.workflowEnhanced!=='true'){
      requirements.dataset.workflowEnhanced='true';
      requirements.innerHTML=`
        <div class="cwt-summary">
          <div><span>累计需求</span><strong>12</strong><small>本月新增 5 条</small></div>
          <div><span>处理中</span><strong>2</strong><small>均在正常时限内</small></div>
          <div><span>待客户反馈</span><strong>2</strong><small>最近反馈：今天 14:21</small></div>
          <div><span>本月已完成</span><strong>7</strong><small>平均处理 2.4 天</small></div>
        </div>
        <div class="wf-status-tabs cwt-status-tabs"><button class="active">全部 <b>12</b></button><button>待处理 <b>1</b></button><button>处理中 <b>2</b></button><button>待客户反馈 <b>2</b></button><button>已完成 <b>7</b></button></div>
        <section class="wf-filter-card cwt-filter">
          <div class="cwt-filter-head"><div><strong>客户需求工单</strong><span>从原始需求、候选内容到反馈和最终交付全程留痕</span></div><div class="wf-actions"><button class="wf-btn" data-route="requirements">进入需求管理</button><button class="wf-btn primary">+ 新建需求</button></div></div>
          <div class="cwt-filter-row req">
            <div class="wf-search cwt-search"><span>⌕</span><input placeholder="搜索需求标题 / 需求 ID / 项目" /></div>
            <div class="cwt-filter-chip">项目：全部</div><div class="cwt-filter-chip">负责人：全部</div><div class="cwt-filter-chip">截止时间：全部</div>
          </div>
        </section>
        <section class="wf-list-card">
          <div class="wf-list-top"><div><strong>需求列表</strong><span>当前客户全部需求记录</span></div><span>按优先级和更新时间排序</span></div>
          <div class="wf-table-wrap"><table class="wf-table req-table cwt-requirement-table"><thead><tr><th>需求</th><th>所属项目</th><th>需求内容</th><th>目标数量</th><th>当前进度</th><th>负责人</th><th>截止时间</th><th>状态</th><th>最近更新</th></tr></thead><tbody>
            ${requirementRow('REQ-20260916-028','户外旅行音乐周更','Insta360 内容音乐','户外 / 旅行 / 高热 / 全球','7–8 首','已发 38 · 已选 8','王小明','09-18','处理中','今天 14:21')}
            ${requirementRow('REQ-20260915-024','无人机首发配乐','影石无人机音乐','大气 / 开阔 / 无人机航拍','20 首','已发 30 · 已选 6','王小明','09-20','待客户反馈','昨天 18:03')}
            ${requirementRow('REQ-20260910-017','Ace Pro 秋季运动内容','Ace Pro 内容音乐','运动 / 极限 / 强节奏 / 国际化','12 首','候选 24 · 已选 9','李小雨','09-17','待客户反馈','09-16 11:42')}
            ${requirementRow('REQ-20260909-015','中秋旅行内容','Insta360 内容音乐','旅行 / 温暖 / 节日 / 华人市场','8 首','发送 20 · 确认 7','王小明','09-12','已完成','09-12 16:06')}
            ${requirementRow('REQ-20260903-009','经典耳熟内容盘活','Insta360 内容音乐','经典 / 耳熟 / 抖音热歌','30 首','发送 55 · 确认 22','王小明','09-08','已完成','09-08 15:18')}
          </tbody></table></div>
        </section>`;
    }
  }

  const workspace=document.getElementById('workspace');
  if(workspace){
    new MutationObserver(enhance).observe(workspace,{childList:true,subtree:true});
  }
  document.addEventListener('DOMContentLoaded',enhance);
})();
