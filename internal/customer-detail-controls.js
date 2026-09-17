(() => {
  function page(){return document.querySelector('.customer-detail-page');}
  function toast(message){
    let node=document.getElementById('cdaToast');
    if(!node){node=document.createElement('div');node.id='cdaToast';node.className='cda-toast';document.body.appendChild(node);}
    node.textContent=message;node.classList.add('show');clearTimeout(window.__cdaControlToast);window.__cdaControlToast=setTimeout(()=>node.classList.remove('show'),1600);
  }
  function filterRows(table,q,extra=()=>true){
    table?.querySelectorAll('tbody tr').forEach(tr=>{const ok=(!q||tr.textContent.toLowerCase().includes(q.toLowerCase()))&&extra(tr);tr.style.display=ok?'':'none';});
  }
  document.addEventListener('click',e=>{
    const p=page();if(!p||!p.contains(e.target))return;
    const capability=e.target.closest('[data-cd-panel="entitlement"] .cd-switch');
    if(capability){e.preventDefault();capability.classList.toggle('on');toast(capability.classList.contains('on')?'能力授权已开启':'能力授权已关闭');return;}

    const activityBtn=e.target.closest('[data-cd-panel="overview"] .cd-card-head .cd-mini-actions .cd-icon-btn');
    if(activityBtn){
      const card=activityBtn.closest('.cd-card');if(card?.querySelector('h3')?.textContent.trim()!=='最近使用活动')return;
      card.querySelectorAll('.cd-icon-btn').forEach(x=>x.classList.remove('active'));activityBtn.classList.add('active');
      const type=activityBtn.textContent.trim();card.querySelectorAll('tbody tr').forEach(tr=>tr.style.display=type==='全部'||tr.children[1]?.textContent.trim()===type?'':'none');return;
    }

    const projectStatus=e.target.closest('[data-cd-panel="projects"] .cwt-tabs button');
    if(projectStatus){
      projectStatus.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('active'));projectStatus.classList.add('active');
      const status=projectStatus.textContent.trim().replace(/\s*\d+$/,'');const table=p.querySelector('[data-cd-panel="projects"] .cwt-project-table');
      filterRows(table,p.querySelector('[data-cd-panel="projects"] .cwt-search input')?.value||'',tr=>status==='全部'||tr.textContent.includes(status));return;
    }

    const reqStatus=e.target.closest('[data-cd-panel="requirements"] .cwt-status-tabs button');
    if(reqStatus){
      reqStatus.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('active'));reqStatus.classList.add('active');
      const status=reqStatus.textContent.trim().replace(/\s*\d+$/,'');const table=p.querySelector('[data-cd-panel="requirements"] .cwt-requirement-table');
      filterRows(table,p.querySelector('[data-cd-panel="requirements"] .cwt-search input')?.value||'',tr=>status==='全部'||tr.textContent.includes(status));return;
    }

    const catalogButton=e.target.closest('[data-cd-panel="catalog"] .cd-searchbar .cd-btn');
    if(catalogButton){
      const text=catalogButton.textContent.trim();
      if(text==='查询'){
        const panel=catalogButton.closest('[data-cd-panel="catalog"]');const q=panel.querySelector('.cd-input')?.value||'';filterRows(panel.querySelector('.cd-table'),q);toast(q?'已按关键词筛选客户曲库':'已显示全部客户曲库');return;
      }
      const cycles={
        '授权场景：全部':['授权场景：影视同步','授权场景：数字发行','授权场景：全部'],
        '授权场景：影视同步':['授权场景：数字发行','授权场景：全部','授权场景：影视同步'],
        '授权场景：数字发行':['授权场景：全部','授权场景：影视同步','授权场景：数字发行'],
        'API 状态：全部':['API 状态：已上架','API 状态：全部'],
        'API 状态：已上架':['API 状态：全部','API 状态：已上架'],
        '到期状态：全部':['到期状态：30 天内到期','到期状态：全部'],
        '到期状态：30 天内到期':['到期状态：全部','到期状态：30 天内到期']
      };
      if(cycles[text]){catalogButton.textContent=cycles[text][0];return;}
    }

    const apiStatus=e.target.closest('[data-cd-panel="api"] .cd-card-head .cd-searchbar .cd-btn');
    if(apiStatus){
      const panel=apiStatus.closest('.cd-card');const current=apiStatus.textContent.trim();apiStatus.textContent=current==='状态：全部'?'状态：异常':'状态：全部';
      const abnormal=apiStatus.textContent.includes('异常');filterRows(panel.querySelector('.cd-table'),panel.querySelector('.cd-input')?.value||'',tr=>!abnormal||!tr.textContent.includes('200'));return;
    }

    const accountFilter=e.target.closest('[data-cd-panel="accounts"] .cd-searchbar .cd-btn');
    if(accountFilter){
      const isRole=accountFilter.textContent.includes('角色');
      accountFilter.textContent=isRole?(accountFilter.textContent==='角色：全部'?'角色：管理员':'角色：全部'):(accountFilter.textContent==='状态：全部'?'状态：正常':'状态：全部');
      const panel=accountFilter.closest('[data-cd-panel="accounts"]');const role=[...panel.querySelectorAll('.cd-searchbar .cd-btn')].find(x=>x.textContent.includes('角色'))?.textContent.replace('角色：','')||'全部';const status=[...panel.querySelectorAll('.cd-searchbar .cd-btn')].find(x=>x.textContent.includes('状态'))?.textContent.replace('状态：','')||'全部';const q=panel.querySelector('.cd-input')?.value||'';
      filterRows(panel.querySelector('.cd-table'),q,tr=>(role==='全部'||tr.textContent.includes(role))&&(status==='全部'||tr.textContent.includes(status)));return;
    }
  });

  document.addEventListener('input',e=>{
    const p=page();if(!p||!p.contains(e.target))return;
    if(e.target.matches('[data-cd-panel="projects"] .cwt-search input')){
      const active=p.querySelector('[data-cd-panel="projects"] .cwt-tabs button.active')?.textContent.trim().replace(/\s*\d+$/,'')||'全部';filterRows(p.querySelector('[data-cd-panel="projects"] .cwt-project-table'),e.target.value,tr=>active==='全部'||tr.textContent.includes(active));
    }
    if(e.target.matches('[data-cd-panel="requirements"] .cwt-search input')){
      const active=p.querySelector('[data-cd-panel="requirements"] .cwt-status-tabs button.active')?.textContent.trim().replace(/\s*\d+$/,'')||'全部';filterRows(p.querySelector('[data-cd-panel="requirements"] .cwt-requirement-table'),e.target.value,tr=>active==='全部'||tr.textContent.includes(active));
    }
    if(e.target.matches('[data-cd-panel="api"] .cd-card-head .cd-input')){
      const panel=e.target.closest('.cd-card');const abnormal=[...panel.querySelectorAll('.cd-btn')].some(x=>x.textContent.includes('异常'));filterRows(panel.querySelector('.cd-table'),e.target.value,tr=>!abnormal||!tr.textContent.includes('200'));
    }
  });
})();