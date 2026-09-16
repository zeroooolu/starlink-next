Page.smartPlaylistCreate = () => `
  <div class="smart-create-page">
    <div class="smart-create-head">
      <div>
        <h1>新建智能歌单</h1>
        <p>通过权利范围和内容条件生成动态歌单，系统可按规则自动更新。</p>
      </div>
      <button class="smart-back" data-route="playlists">返回歌单管理</button>
    </div>

    <div class="smart-steps">
      <div class="smart-step active" id="smartStepOne"><span class="smart-step-circle">1</span><span>智能筛歌</span></div>
      <div class="smart-step-line" id="smartStepLine"></div>
      <div class="smart-step" id="smartStepTwo"><span class="smart-step-circle">2</span><span>歌单信息</span></div>
    </div>

    <div class="smart-step-pane active" data-smart-step="1">
      <div class="smart-layout">
        <div class="smart-main">
          <section class="smart-panel">
            <div class="smart-panel-head">
              <div class="smart-panel-title">
                <div class="smart-panel-icon"><svg viewBox="0 0 24 24"><path d="M4 20h16M6 16l3-3 3 2 6-7"/><path d="M17 8h1v1"/></svg></div>
                <div><h3>权利范围</h3><p>先限定这份歌单实际可使用的版权范围。</p></div>
              </div>
              <span class="required-note">必填</span>
            </div>
            <div class="smart-panel-body">
              <div class="smart-block">
                <div class="smart-label">使用场景</div>
                <div class="smart-choice-grid" data-smart-choice-group="scene">
                  ${smartChoice('配乐使用','视频 / 产品 / UGC','music',true)}
                  ${smartChoice('数字发行','DSP / 平台发行','cloud')}
                  ${smartChoice('公播使用','门店 / 空间 / 公共场所','radio')}
                  ${smartChoice('翻唱','演唱 / KTV / Cover','mic')}
                  ${smartChoice('改编','改词 / 改曲 / 二创','edit')}
                  ${smartChoice('其他','其他商业授权场景','more')}
                </div>
              </div>

              <div class="smart-block">
                <div class="smart-label">所属权利</div>
                <div class="smart-radio-row" data-smart-radio-group="rights">
                  <button class="smart-radio active" type="button">默认权利</button>
                  <button class="smart-radio" type="button">自定义权利</button>
                </div>
              </div>

              <div class="smart-two">
                <div class="smart-field">
                  <label>授权区域</label>
                  ${smartSelect(['全球','中国大陆','中国大陆及港澳台','东南亚','俄语区','自定义区域'],'全球')}
                </div>
                <div class="smart-field">
                  <label>授权时间</label>
                  ${smartSelect(['大于当前','永久授权','未来 1 年内有效','未来 2 年内有效','自定义时间'],'大于当前')}
                </div>
              </div>
            </div>
          </section>

          <section class="smart-panel">
            <div class="smart-panel-head">
              <div class="smart-panel-title">
                <div class="smart-panel-icon"><svg viewBox="0 0 24 24"><path d="M4 7h10M4 12h16M4 17h8"/><circle cx="18" cy="7" r="2"/><circle cx="14" cy="17" r="2"/></svg></div>
                <div><h3>内容筛选</h3><p>描述音乐需求，或使用标签和数值条件组合筛选。</p></div>
              </div>
              <span class="required-note">支持组合条件</span>
            </div>
            <div class="smart-panel-body">
              <div class="smart-block">
                <div class="smart-label">音乐需求描述 <small>AI 可自动转成筛选条件</small></div>
                <div class="smart-prompt">
                  <textarea class="smart-textarea" id="smartPrompt">高能量、适合跑步和健身的欧美电子流行音乐，节奏明显，不要太舒缓。</textarea>
                  <button class="ai-parse" type="button" id="smartAiParse" title="AI 解析"><svg viewBox="0 0 24 24"><path d="m12 3-1 2.8A5.6 5.6 0 0 1 7.8 9L5 10l2.8 1a5.6 5.6 0 0 1 3.2 3.2L12 17l1-2.8A5.6 5.6 0 0 1 16.2 11L19 10l-2.8-1A5.6 5.6 0 0 1 13 5.8L12 3Z"/></svg></button>
                </div>
                <div class="field-help" id="smartAiHint">AI 解析后会自动匹配情绪、BPM、流派、乐器等条件。</div>
              </div>

              <div class="smart-block">
                <div class="smart-label">情绪</div>
                <div class="smart-chips" data-smart-chips="mood">
                  ${['欢快','放松','温馨','浪漫','励志','积极','治愈','温柔','伤感','激情','平静','梦幻','动感','紧张','清新','热血'].map((x,i)=>`<button class="smart-chip ${[0,4,5,12,15].includes(i)?'active':''}" type="button">${x}</button>`).join('')}
                </div>
              </div>

              <div class="smart-block">
                <div class="smart-label">BPM 范围</div>
                <div class="bpm-box">
                  <div class="bpm-values"><input class="bpm-value" value="100" aria-label="最低 BPM"><span>至</span><input class="bpm-value" value="160" aria-label="最高 BPM"></div>
                  <div class="bpm-track"><span class="bpm-fill"></span><i class="bpm-knob left"></i><i class="bpm-knob right"></i></div>
                  <div class="bpm-scale"><span>40 BPM · 慢</span><span>120 BPM · 中速</span><span>220 BPM · 极快</span></div>
                </div>
              </div>

              <div class="smart-two smart-block">
                <div class="smart-field"><label>流派</label>${smartSelect(['电子流行 Electronic Pop','流行 Pop','摇滚 Rock','Hip-Hop','影视管弦 Cinematic','独立流行 Indie Pop'],'电子流行 Electronic Pop')}</div>
                <div class="smart-field"><label>乐器</label>${smartSelect(['不限乐器','合成器 Synth','鼓组 Drums','钢琴 Piano','吉他 Guitar','管弦乐 Orchestra'],'合成器 Synth')}</div>
              </div>

              <div class="smart-two smart-block">
                <div class="smart-field"><label>歌曲语言</label>${smartSelect(['不限语言','英文','中文','日文','俄语','纯音乐'],'英文')}</div>
                <div class="smart-field"><label>热度</label>${smartSelect(['不限热度','高热度 Top 10%','中高热度 Top 30%','热度 ≥ 60','热度 ≥ 80'],'中高热度 Top 30%')}</div>
              </div>

              <button class="smart-add-filter" type="button">＋ 添加更多筛选条件</button>
            </div>
          </section>

          <div class="smart-footer">
            <div class="smart-footer-left">规则可随时修改，智能歌单会在下一次刷新时按新规则重新计算。</div>
            <div class="smart-footer-actions"><button class="smart-btn" data-route="playlists">取消</button><button class="smart-btn primary" type="button" id="smartNext">下一步</button></div>
          </div>
        </div>

        <aside class="smart-side">
          <div class="smart-preview">
            <h3>规则预览</h3>
            <div class="preview-help">当前条件预计可匹配</div>
            <div class="match-number" id="smartMatchNumber">12,842</div>
            <div class="match-label">首歌曲</div>
            <div class="rule-summary">
              <div class="rule-summary-title">已选条件</div>
              <div class="rule-summary-list" id="smartRuleSummary">
                ${smartRule('使用场景','配乐使用')}
                ${smartRule('授权区域','全球')}
                ${smartRule('情绪','欢快 / 励志 / 动感')}
                ${smartRule('BPM','100–160')}
                ${smartRule('流派','电子流行')}
                ${smartRule('语言','英文')}
              </div>
            </div>
            <div class="preview-tracks">
              <div class="rule-summary-title">结果示例</div>
              ${previewTrack('Midnight Drive','Nova Lane')}
              ${previewTrack('Run With Me','Atlas North')}
              ${previewTrack('Momentum','Violet Echo')}
            </div>
            <button class="smart-preview-btn" type="button">预览更多结果</button>
          </div>
        </aside>
      </div>
    </div>

    <div class="smart-step-pane" data-smart-step="2">
      <div class="smart-info-grid">
        <div class="smart-form-card">
          <h3 class="smart-form-title">完善歌单信息</h3>
          <p class="smart-form-sub">这些信息只属于运营歌单本身；官网展示配置将在后续发布时单独维护。</p>
          <div class="smart-form">
            <div class="smart-field"><label>歌单名称 *</label><input class="smart-input" id="smartPlaylistName" value="欧美高热运动音乐"></div>
            <div class="smart-field"><label>分类</label>${smartSelect(['运动健身','旅行户外','疗愈音乐','游戏配乐','短剧配乐','其他'],'运动健身')}</div>
            <div class="smart-field"><label>简介</label><textarea class="smart-textarea" id="smartPlaylistDesc">面向运动、跑步和健身场景的高热度欧美电子流行音乐池，由规则自动更新。</textarea></div>
            <div class="smart-two">
              <div class="smart-field"><label>歌曲数量上限</label><input class="smart-input" value="3000"></div>
              <div class="smart-field"><label>初始状态</label>${smartSelect(['启用','暂停'],'启用')}</div>
            </div>
            <div class="smart-block">
              <div class="smart-label">自动更新</div>
              <div class="smart-radio-row" data-smart-radio-group="auto-update"><button class="smart-radio active" type="button">开启</button><button class="smart-radio" type="button">关闭</button></div>
            </div>
            <div class="smart-block">
              <div class="smart-label">更新频率</div>
              <div class="update-frequency"><button class="frequency-btn" type="button">每 6 小时</button><button class="frequency-btn active" type="button">每日</button><button class="frequency-btn" type="button">每周</button><button class="frequency-btn" type="button">手动</button></div>
            </div>
            <div class="smart-field"><label>封面 <span style="font-weight:500;color:#9ca3ad">（可选）</span></label><div class="smart-upload"><svg viewBox="0 0 24 24"><path d="M4 16v3h16v-3M12 4v10M8 8l4-4 4 4"/></svg><strong>点击上传封面</strong><small>JPG / PNG，建议 1000 × 1000</small></div></div>
          </div>
        </div>

        <aside class="create-summary">
          <h3>创建预览</h3>
          <div class="summary-cover">♫</div>
          <div class="summary-name" id="smartSummaryName">欧美高热运动音乐</div>
          <div class="summary-meta">智能歌单 · 自动更新</div>
          <div class="summary-divider"></div>
          ${summaryRow('预计匹配','12,842 首')}
          ${summaryRow('歌曲上限','3,000 首')}
          ${summaryRow('分类','运动健身')}
          ${summaryRow('更新方式','每日自动更新')}
          ${summaryRow('权利范围','全球 · 配乐使用')}
        </aside>
      </div>
      <div class="smart-footer">
        <div class="smart-footer-left">创建后可在歌单详情中查看规则、更新记录和当前歌曲。</div>
        <div class="smart-footer-actions"><button class="smart-btn" type="button" id="smartPrev">上一步</button><button class="smart-btn primary" type="button" data-route="playlists">创建智能歌单</button></div>
      </div>
    </div>
  </div>
`;

function smartChoice(title, desc, icon, active=false){
  const icons={music:'<path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',cloud:'<path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6.2 8.4 4.5 4.5 0 0 0 7 18Z"/>',radio:'<rect x="4" y="8" width="16" height="11" rx="2"/><path d="m7 8 9-4M8 12h5M8 15h3"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4"/>',edit:'<path d="M4 20h4l11-11-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>',more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>'};
  return `<button class="smart-choice ${active?'active':''}" type="button"><span class="smart-choice-icon"><svg viewBox="0 0 24 24">${icons[icon]}</svg></span><span><strong>${title}</strong><span>${desc}</span></span></button>`;
}
function smartSelect(options, selected){
  return `<div class="smart-select"><button class="smart-select-trigger" type="button"><span>${selected}</span><svg viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg></button><div class="smart-select-menu">${options.map(x=>`<button class="smart-option ${x===selected?'selected':''}" type="button">${x}</button>`).join('')}</div></div>`;
}
function smartRule(k,v){return `<div class="rule-summary-item"><span>${k}</span><span>${v}</span></div>`;}
function previewTrack(title,artist){return `<div class="preview-track"><div class="preview-cover">♪</div><div><strong>${title}</strong><small>${artist}</small></div></div>`;}
function summaryRow(k,v){return `<div class="summary-row"><span>${k}</span><span>${v}</span></div>`;}

routes['smart-playlist-create']={title:'歌单与交付 / 歌单管理 / 新建智能歌单',render:Page.smartPlaylistCreate,parent:'playlists'};

document.addEventListener('click', (e) => {
  const choice=e.target.closest('.smart-choice');
  if(choice){
    const group=choice.closest('[data-smart-choice-group]');
    if(group) group.querySelectorAll('.smart-choice').forEach(x=>x.classList.remove('active'));
    choice.classList.add('active');
    updateSmartEstimate();
    return;
  }
  const radio=e.target.closest('.smart-radio');
  if(radio){
    const group=radio.closest('[data-smart-radio-group]');
    if(group) group.querySelectorAll('.smart-radio').forEach(x=>x.classList.remove('active'));
    radio.classList.add('active');
    return;
  }
  const chip=e.target.closest('.smart-chip');
  if(chip){chip.classList.toggle('active');updateSmartEstimate();return;}
  const trigger=e.target.closest('.smart-select-trigger');
  if(trigger){
    const current=trigger.closest('.smart-select');
    document.querySelectorAll('.smart-select.open').forEach(x=>{if(x!==current)x.classList.remove('open')});
    current.classList.toggle('open');return;
  }
  const option=e.target.closest('.smart-option');
  if(option){
    const select=option.closest('.smart-select');
    select.querySelectorAll('.smart-option').forEach(x=>x.classList.remove('selected'));
    option.classList.add('selected');
    select.querySelector('.smart-select-trigger span').textContent=option.textContent;
    select.classList.remove('open');
    updateSmartEstimate();
    return;
  }
  const freq=e.target.closest('.frequency-btn');
  if(freq){freq.parentElement.querySelectorAll('.frequency-btn').forEach(x=>x.classList.remove('active'));freq.classList.add('active');return;}
  if(e.target.closest('#smartAiParse')){
    document.querySelectorAll('[data-smart-chips="mood"] .smart-chip').forEach(x=>x.classList.remove('active'));
    ['欢快','励志','积极','动感','热血'].forEach(label=>{
      const el=[...document.querySelectorAll('[data-smart-chips="mood"] .smart-chip')].find(x=>x.textContent===label);if(el)el.classList.add('active');
    });
    const hint=document.getElementById('smartAiHint');if(hint)hint.textContent='已识别：高能量 / 运动健身 / 欧美 / 电子流行 / BPM 100–160 / 中高热度';
    updateSmartEstimate();return;
  }
  if(e.target.closest('#smartNext')){setSmartStep(2);return;}
  if(e.target.closest('#smartPrev')){setSmartStep(1);return;}
  if(!e.target.closest('.smart-select')) document.querySelectorAll('.smart-select.open').forEach(x=>x.classList.remove('open'));
});

document.addEventListener('input',(e)=>{
  if(e.target.id==='smartPlaylistName'){
    const summary=document.getElementById('smartSummaryName');if(summary)summary.textContent=e.target.value||'未命名智能歌单';
  }
});

function setSmartStep(step){
  document.querySelectorAll('.smart-step-pane').forEach(x=>x.classList.toggle('active',x.dataset.smartStep===String(step)));
  const one=document.getElementById('smartStepOne'),two=document.getElementById('smartStepTwo'),line=document.getElementById('smartStepLine');
  if(!one||!two)return;
  one.classList.toggle('active',step===1);one.classList.toggle('done',step===2);
  two.classList.toggle('active',step===2);line.classList.toggle('active',step===2);
  window.scrollTo({top:0,behavior:'smooth'});
}
function updateSmartEstimate(){
  const number=document.getElementById('smartMatchNumber');if(!number)return;
  const active=document.querySelectorAll('.smart-chip.active').length;
  const base=12842+(active-5)*317;
  number.textContent=Math.max(1280,base).toLocaleString('en-US');
}
