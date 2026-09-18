(() => {
  const v2 = {
    selectedTracks: new Set(['ST-310284','ST-401237','ST-229850']),
    authorizedFromSimilar: new Set(),
    trackDetailId: 'ST-310284',
    trackDetailMode: 'authorized',
    previewTrackId: null,
    previewPaused: false,
    discoverCategoryKey: 'healing',
    discoverPlaylistId: 'healing-city',
  };

  const requests = [
    {id:'REQ-20260916-028',title:'户外旅行音乐周更',type:'API 增量',project:'Insta360 内容音乐',target:'8 首',progress:'已上架 8 首',pct:100,status:'已完成',updated:'今天 14:21',delivery:'DEL-20260916-028'},
    {id:'REQ-20260915-024',title:'无人机首发配乐',type:'选曲',project:'影石无人机音乐',target:'20 首',progress:'候选 30 · 已选 6',pct:55,status:'待我确认',updated:'昨天 18:03',delivery:'2 次试听'},
    {id:'REQ-20260910-017',title:'Ace Pro 秋季运动内容',type:'选曲',project:'Ace Pro 内容音乐',target:'12 首',progress:'候选 24 · 已选 9',pct:76,status:'待我确认',updated:'09-16 11:42',delivery:'1 次试听'},
    {id:'REQ-20260909-015',title:'中秋旅行内容',type:'文件交付',project:'Insta360 内容音乐',target:'8 首',progress:'已交付 7 首',pct:100,status:'已完成',updated:'09-12 16:06',delivery:'DEL-20260912-015'},
    {id:'REQ-20260903-009',title:'经典耳熟内容盘活',type:'API 增量',project:'Insta360 内容音乐',target:'30 首',progress:'已上架 22 首',pct:100,status:'已完成',updated:'09-08 15:18',delivery:'DEL-20260908-009'}
  ];

  const deliveries = [
    {id:'DEL-20260916-028',name:'9 月户外旅行增量',request:'户外旅行音乐周更',type:'API 上架',count:'8 首',date:'2026-09-16',status:'已完成'},
    {id:'DEL-20260915-024-A',name:'无人机首发第一轮',request:'无人机首发配乐',type:'试听选曲',count:'30 首',date:'2026-09-15',status:'待选择'},
    {id:'DEL-20260912-015',name:'中秋旅行内容',request:'中秋旅行内容',type:'文件交付',count:'7 首',date:'2026-09-12',status:'已交付'},
    {id:'DEL-20260908-009',name:'经典内容盘活',request:'经典耳熟内容盘活',type:'API 上架',count:'22 首',date:'2026-09-08',status:'已完成'},
    {id:'DEL-20260301-001',name:'首批 API 曲库',request:'初始合作',type:'API 上架',count:'120,000 首',date:'2026-03-01',status:'已完成'}
  ];

  const customerCatalog = [
    ['Never Stop Moving','Neon Avenue','ST-310284','9 月户外旅行增量','2026-09-16','Insta360 内容音乐','全球 · 数字内容','可使用'],
    ['Forward Motion','Northline','ST-401237','9 月户外旅行增量','2026-09-16','Insta360 内容音乐','全球 · 数字内容','可使用'],
    ['Open Road','Atlas Weekend','ST-229850','无人机首发第一轮','2026-09-15','影石无人机音乐','全球 · 试听选曲','候选中'],
    ['Pulse Theory','Lumen Club','ST-381092','首批 API 曲库','2026-03-01','Insta360 内容音乐','全球 · API','可使用'],
    ['Skyline Stories','June Harbor','ST-338610','首批 API 曲库','2026-03-01','Insta360 内容音乐','全球 · API','可使用'],
    ['Quiet Momentum','Paper Satellites','ST-390771','经典内容盘活','2026-09-08','Insta360 内容音乐','全球 · 数字内容','可使用']
  ];

  const similarPool = [
    {id:'ST-510101',title:'Electric Horizon',artist:'Nova Lane',genre:'Electronic · Pop',mood:['未来','明亮'],bpm:122,duration:'03:08',vocal:'纯音乐',cover:'c2'},
    {id:'ST-510102',title:'Motion Lines',artist:'Vela North',genre:'Electronic',mood:['活力','科技'],bpm:120,duration:'02:54',vocal:'纯音乐',cover:'c3'},
    {id:'ST-510103',title:'Daybreak Circuit',artist:'Mono Atlas',genre:'Indie Electronic',mood:['积极','开阔'],bpm:118,duration:'03:21',vocal:'弱人声',cover:'c4'},
    {id:'ST-510104',title:'Into The Current',artist:'Echo Harbor',genre:'Pop · Electronic',mood:['运动','明亮'],bpm:124,duration:'02:47',vocal:'女声',cover:'c5'},
    {id:'ST-510105',title:'Open Frequency',artist:'Arc Runner',genre:'Electronic',mood:['科技','坚定'],bpm:121,duration:'03:14',vocal:'纯音乐',cover:'c1'},
    {id:'ST-510106',title:'Golden Momentum',artist:'Northfield',genre:'Indie Pop',mood:['积极','自由'],bpm:116,duration:'03:02',vocal:'男声',cover:'c2'},
    {id:'ST-510107',title:'Bright Machines',artist:'Signal Coast',genre:'Electronic · Ambient',mood:['未来','高级'],bpm:112,duration:'03:38',vocal:'纯音乐',cover:'c3'},
    {id:'ST-510108',title:'Run With Light',artist:'Mira Avenue',genre:'Pop · Dance',mood:['活力','运动'],bpm:126,duration:'02:58',vocal:'女声',cover:'c4'},
    {id:'ST-510109',title:'Vector Bloom',artist:'Satellite Club',genre:'Electronic',mood:['科技','积极'],bpm:119,duration:'03:11',vocal:'纯音乐',cover:'c5'},
    {id:'ST-510110',title:'Higher Motion',artist:'Atlas Neon',genre:'Indie Electronic',mood:['开阔','激励'],bpm:123,duration:'03:26',vocal:'弱人声',cover:'c1'}
  ];

  const detailTags = {
    genre:['Electronic','Pop','Dance Pop'],
    mood:['活力','积极','明亮','激励'],
    scene:['运动健身','户外旅行','品牌广告','短视频'],
    instrument:['Synth','Electronic Drums','Bass','Pad'],
    vocal:['女声','英文','人声较弱'],
    energy:['中高能量','124 BPM','稳定律动']
  };

  const searchFilterTaxonomy = {
    '风格':[
      ['流行',['Pop','Dance Pop','Indie Pop','Synth Pop','K-Pop','J-Pop']],
      ['电子',['Electronic','House','Techno','EDM','Ambient Electronic','Future Bass']],
      ['摇滚',['Rock','Indie Rock','Alternative','Punk','Metal']],
      ['嘻哈 / R&B',['Hip-Hop','Trap','R&B','Soul','Funk']],
      ['原声 / 古典',['Acoustic','Folk','Classical','Orchestral','Jazz']]
    ],
    '情绪':[
      ['正向',['快乐','明亮','积极','激励','活力','温暖']],
      ['放松',['放松','平静','舒缓','梦幻','治愈']],
      ['强烈',['紧张','热血','史诗','神秘','黑暗']],
      ['质感',['高级','科技','时尚','浪漫','怀旧']]
    ],
    '场景':[
      ['品牌营销',['广告品牌','产品发布','企业宣传','活动会展']],
      ['内容创作',['短视频','Vlog','直播','播客','教程']],
      ['生活方式',['运动健身','户外旅行','美食','时尚','儿童']],
      ['娱乐媒体',['影视氛围','游戏电竞','综艺','预告片']]
    ]
  };

  const languageOptions=['中文','英文','日文','韩文','西班牙语','法语','德语','葡萄牙语','意大利语','俄语','阿拉伯语','泰语','越南语'];

  const officialPlaylistSections = [
    {
      key:'healing',title:'疗愈音乐',count:99,
      description:'围绕放松、助眠、专注与身心疗愈整理的专业场景曲库。',
      playlists:[
        {id:'healing-city',group:'氛围音景',title:'氛围音景｜城市环境模拟',count:60},
        {id:'healing-rural',group:'氛围音景',title:'氛围音景｜乡野田园',count:51},
        {id:'healing-lake',group:'氛围音景',title:'氛围音景｜湖泊岸堤',count:16},
        {id:'healing-deepsea',group:'氛围音景',title:'氛围音景｜深海环境',count:10},
        {id:'healing-forest',group:'氛围音景',title:'氛围音景｜森林音景',count:71},
        {id:'healing-cat',group:'动物白噪音',title:'动物白噪音｜猫呼噜',count:5},
        {id:'healing-cicada',group:'动物白噪音',title:'动物白噪音｜蝉声迎夏',count:154},
        {id:'healing-frog',group:'动物白噪音',title:'动物白噪音｜蛙鸣幽涧',count:11},
        {id:'healing-fire',group:'自然白噪音',title:'自然白噪音｜幽火静心',count:19}
      ]
    },
    {
      key:'drama-music',title:'短剧配乐',count:83,
      description:'覆盖甜宠、古风、悬疑、都市与轻喜等剧情类型的短剧专属配乐。',
      playlists:[
        {id:'drama-memory',group:'女频情感',title:'回忆',count:83},
        {id:'drama-coldwar',group:'女频情感',title:'情感冷战',count:81},
        {id:'drama-cute',group:'女频情感',title:'美好可爱',count:142},
        {id:'drama-firstmeet',group:'女频情感',title:'恋人初遇',count:70},
        {id:'drama-accident',group:'女频情感',title:'遭遇意外',count:7},
        {id:'drama-breakup',group:'女频情感',title:'分手',count:63},
        {id:'drama-suspense',group:'逆袭重生',title:'错综悬疑',count:139},
        {id:'drama-win',group:'逆袭重生',title:'胜利结局',count:78},
        {id:'drama-awaken',group:'逆袭重生',title:'人物觉醒',count:136},
        {id:'drama-guofeng',group:'古装仙侠',title:'优雅国风',count:66},
        {id:'drama-future',group:'奇异科幻',title:'未来科幻',count:96},
        {id:'drama-funny',group:'喜剧沙雕',title:'搞笑逗趣',count:100}
      ]
    },
    {
      key:'drama-sfx',title:'短剧音效',count:277,
      description:'从自然环境、人声到转场、动作与特效，覆盖剧情制作中的常用声音素材。',
      playlists:[
        {id:'sfx-forest',group:'自然环境音效',title:'音效-森林环境',count:5},
        {id:'sfx-suburb',group:'自然环境音效',title:'音效-郊外环境',count:32},
        {id:'sfx-volcano',group:'自然灾害音效',title:'音效-火山喷发',count:74},
        {id:'sfx-thunder',group:'天气音效',title:'音效-雷',count:965},
        {id:'sfx-street',group:'城市环境音效',title:'音效-城市街头',count:147},
        {id:'sfx-subway',group:'载具音效',title:'音效-地铁',count:464},
        {id:'sfx-helicopter',group:'载具音效',title:'音效-直升机',count:810},
        {id:'sfx-footsteps',group:'人类音效',title:'音效-脚步声',count:5426},
        {id:'sfx-laugh',group:'人类音效',title:'音效-笑声',count:1218},
        {id:'sfx-applause',group:'人类音效',title:'音效-掌声',count:1096},
        {id:'sfx-whoosh',group:'转场音效',title:'嗖声 Whoosh',count:379},
        {id:'sfx-sword',group:'武器音效',title:'音效-剑',count:1288}
      ]
    },
    {
      key:'game',title:'游戏配乐',count:33,
      description:'面向不同游戏类型、世界观与玩法节奏整理的可商用游戏音乐。',
      playlists:[
        {id:'game-rhythm-pop',group:'音乐节奏类游戏',title:'节奏流行类',count:399},
        {id:'game-light-electronic',group:'音乐节奏类游戏',title:'轻电子类',count:51},
        {id:'game-strong-electronic',group:'音乐节奏类游戏',title:'强力电子类',count:184},
        {id:'game-expedition',group:'建造生存类游戏',title:'远征开辟类',count:54},
        {id:'game-space',group:'建造生存类游戏',title:'宇宙星球类',count:151},
        {id:'game-fantasy',group:'建造生存类游戏',title:'奇幻冒险类',count:137},
        {id:'game-city',group:'模拟经营类游戏',title:'城市建造类',count:50},
        {id:'game-farm',group:'模拟经营类游戏',title:'农场建造类',count:65},
        {id:'game-puzzle',group:'休闲卡牌类游戏',title:'解谜推理类',count:64},
        {id:'game-racing',group:'体育竞技类游戏',title:'赛车类',count:24},
        {id:'game-cyberpunk',group:'世界观',title:'赛博朋克',count:6},
        {id:'game-loopable',group:'Loopable游戏配乐',title:'Loopable',count:6890}
      ]
    },
    {
      key:'fitness',title:'运动健身',count:32,
      description:'覆盖骑行、跑步、瑜伽、舞蹈与健体等运动场景的高适配度音乐。',
      playlists:[
        {id:'fitness-fast-ride',group:'动感单车',title:'速度骑行（踏频150以上）',count:67},
        {id:'fitness-rhythm-ride',group:'动感单车',title:'节奏骑行（踏频110-150）',count:740},
        {id:'fitness-climb',group:'动感单车',title:'爬坡骑行（踏频80-110）',count:108},
        {id:'fitness-easy-ride',group:'动感单车',title:'舒缓骑行（踏频80-110）',count:254},
        {id:'fitness-warmup',group:'动感单车',title:'热身阶段（80-110）',count:15},
        {id:'fitness-recovery',group:'动感单车',title:'恢复阶段（踏频80-110）',count:28},
        {id:'fitness-energy',group:'动感单车',title:'能量骑行（踏频110-150）',count:494},
        {id:'fitness-run',group:'跑步行走',title:'跑步节奏训练',count:386},
        {id:'fitness-walk',group:'跑步行走',title:'轻快行走',count:224},
        {id:'fitness-yoga',group:'冥想瑜伽',title:'舒缓瑜伽',count:182},
        {id:'fitness-dance',group:'舞蹈健身',title:'有氧舞蹈',count:312},
        {id:'fitness-taichi',group:'太极&气功',title:'太极舒缓',count:96}
      ]
    },
    {
      key:'scene',title:'场景配乐',count:17,
      description:'围绕综艺、有声书、节日、公播与企业内容制作整理的通用场景配乐。',
      playlists:[
        {id:'scene-regret',group:'综艺配乐',title:'悲伤童话｜成为遗憾的话，是不是会记得很久',count:678},
        {id:'scene-romance',group:'综艺配乐',title:'烂漫氛围｜与你私奔于浪漫黄昏',count:1796},
        {id:'scene-happy',group:'综艺配乐',title:'快乐节奏｜愉悦心情，连呼吸都是甜蜜',count:606},
        {id:'scene-calm',group:'综艺配乐',title:'清浅流年｜日子平淡，好在我喜欢',count:261},
        {id:'scene-xianxia',group:'有声书配乐',title:'仙侠剧里的神仙配乐',count:810},
        {id:'scene-piano',group:'有声书配乐',title:'治愈钢琴｜心灵解压催眠曲',count:3234},
        {id:'scene-nature',group:'有声书配乐',title:'自然纯音｜在音符与广袤森林之间',count:7319},
        {id:'scene-halloween',group:'节日音乐',title:'万圣节｜拿去吓唬别的小朋友吧',count:1534},
        {id:'scene-valentine',group:'节日音乐',title:'情人节｜如果没有月亮，你就是我的星光',count:608},
        {id:'scene-christmas',group:'节日音乐',title:'圣诞节｜我想要的圣诞礼物就是你呀',count:355},
        {id:'scene-corporate-light',group:'企业宣传',title:'企业宣传｜轻松活力的律动BGM',count:68},
        {id:'scene-corporate-epic',group:'企业宣传',title:'企业宣传｜史诗大气的配乐BGM',count:73}
      ]
    }
  ];

  function statusPill(status){
    const cls=status.includes('待')?'wait':status.includes('候选')?'blue':status.includes('完成')||status.includes('交付')||status.includes('使用')?'':'neutral';
    return `<span class="v2-pill ${cls}">${status}</span>`;
  }

  function homeV2(){
    return `${pageHead('工作台','查看当前可用曲库、待处理内容需求和最近交付。',`<button class="btn" data-route="requirements">${icon('list-music')}查看内容需求</button>`)}
      <div class="hero-card"><div class="hero-copy"><div class="eyebrow">STARLINK · CUSTOMER CATALOG</div><h2>你的音乐内容，都在这里</h2><p>搜索可用内容、处理选曲需求，并查看每一次正式交付。</p><div class="hero-search">${icon('search')}<input id="heroSearchInput" placeholder="搜索全曲库，或描述你想找的音乐"/><button class="btn btn-primary" id="heroSearchBtn">搜索音乐</button></div></div></div>
      <section class="section"><div class="v2-kpi-grid">
        ${kpi('library','我的曲库','182,381','近 30 天新增 4,812 首')}
        ${kpi('list-music','进行中需求','3','其中 2 个待你确认')}
        ${kpi('download','累计交付','27 次','累计交付 612 首内容')}
        ${kpi('check','累计选曲','486 首','来自 48 次选曲记录')}
      </div></section>
      <section class="section v2-home-grid">
        <div class="v2-table-card"><div class="v2-table-head"><div class="v2-table-head-copy"><strong>待我处理</strong><small>需要你试听、选择或确认的内容</small></div><button class="section-link" data-route="requirements">查看全部</button></div><div class="v2-focus-list">
          ${focus('sparkles','无人机首发配乐','已提供 30 首候选 · 已选择 6 首','待确认','09-20 前')}
          ${focus('music','Ace Pro 秋季运动内容','已提供 24 首候选 · 已选择 9 首','待确认','今天到期')}
        </div></div>
        <div class="v2-table-card"><div class="v2-table-head"><div class="v2-table-head-copy"><strong>最近交付</strong><small>最近收到的正式内容</small></div><button class="section-link" data-route="deliveries">全部记录</button></div><div class="activity-list">
          ${deliveryMini('9 月户外旅行增量','API 上架 · 8 首','今天')}
          ${deliveryMini('中秋旅行内容','文件交付 · 7 首','09-12')}
          ${deliveryMini('经典内容盘活','API 上架 · 22 首','09-08')}
        </div></div>
      </section>`;
  }

  function kpi(iconName,label,value,sub){return `<div class="v2-kpi"><div class="v2-kpi-top"><span>${label}</span><span class="v2-kpi-icon">${icon(iconName)}</span></div><div class="v2-kpi-value">${value}</div><div class="v2-kpi-sub">${sub}</div></div>`}
  function focus(iconName,title,sub,status,due){return `<div class="v2-focus-item" data-route="requirement-detail" style="cursor:pointer"><span class="v2-focus-icon">${icon(iconName)}</span><span class="v2-focus-main"><strong>${title}</strong><small>${sub}</small></span><span class="v2-focus-side"><strong>${status}</strong><small>${due}</small></span></div>`}
  function deliveryMini(title,sub,date){return `<div class="activity-item"><span class="activity-icon">${icon('download')}</span><span class="activity-copy"><strong>${title}</strong><small>${sub}</small></span><span class="activity-side">${date}</span></div>`}

  function catalogWave(track,index=0){
    const seed=track.id.split('').reduce((sum,ch)=>sum+ch.charCodeAt(0),index*17);
    const bars=Array.from({length:36},(_,i)=>{
      const h=24+((seed+i*19+(i%5)*11)%68);
      return `<i style="--h:${h}%"></i>`;
    }).join('');
    return `<div class="v2-catalog-wave" aria-hidden="true">${bars}</div>`;
  }

  function initials(name='Music'){
    return name.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase();
  }

  function myCatalogTrackRow(track,meta,index){
    const tags=[track.genre.split(' · ')[0],track.mood[0],track.mood[1],`${track.bpm} BPM`].filter(Boolean);
    return `<div class="v2-catalog-track-wrap" data-v2-track-wrap="${track.id}">
      <div class="v2-catalog-track" data-catalog-search="${(track.title+' '+track.artist+' '+track.id+' '+track.genre+' '+track.mood.join(' ')).toLowerCase()}">
        <div class="v2-catalog-track-main">
          <div class="v2-catalog-cover">${cover(track,index)}</div>
          <div class="v2-catalog-copy">
            <div class="v2-catalog-title-row"><button class="v2-title-link" data-v2-detail="${track.id}">${track.title}</button><span>${track.duration}</span></div>
            <small>${track.artist} · ${track.id}</small>
            <div class="v2-catalog-tags">${tags.map(tag=>`<span>${tag}</span>`).join('')}</div>
          </div>
        </div>
        <div class="v2-wave-cell">
          ${catalogWave(track,index)}
          <small>${meta?.source||'首批 API 曲库'} · ${meta?.date||'2026-03-01'}</small>
        </div>
        <div class="v2-catalog-actions">
          <button class="v2-track-action play-track" data-track="${track.id}" title="${state.playing===track.id?'暂停':'播放'}">${icon(state.playing===track.id?'pause':'play')}</button>
          <button class="v2-track-action" data-v2-download="${track.id}" title="下载">${icon('download')}</button>
          <button class="v2-track-action" data-v2-similar="${track.id}" data-track-title="${track.title}" title="找相似">${icon('sparkles')}</button>
          <button class="v2-track-action" data-v2-detail="${track.id}" title="歌曲详情">${icon('more-horizontal')}</button>
        </div>
      </div>
      <div class="v2-similar-slot" data-v2-similar-slot="${track.id}"></div>
    </div>`;
  }

  function similarResultsPanel(sourceId,sourceTitle){
    return `<section class="v2-similar-panel">
      <div class="v2-similar-head">
        <div><strong>与「${sourceTitle}」相似</strong><small>根据曲风、情绪、节奏、编曲和标签匹配的 10 首候选歌曲</small></div>
        <button class="v2-similar-close" data-v2-similar-close="${sourceId}">${icon('x')}收起</button>
      </div>
      <div class="v2-similar-list">
        ${similarPool.map((track,index)=>similarResultRow(track,index)).join('')}
      </div>
    </section>`;
  }

  function similarResultRow(track,index){
    const added=v2.authorizedFromSimilar.has(track.id);
    return `<div class="v2-similar-row">
      <div class="v2-sim-cover ${track.cover||''}"><span>${initials(track.artist)}</span></div>
      <div class="v2-sim-copy"><strong>${track.title}</strong><small>${track.artist} · ${track.id}</small></div>
      <div class="v2-sim-tags"><span>${track.genre.split(' · ')[0]}</span><span>${track.mood[0]}</span><span>${track.bpm} BPM</span></div>
      <span class="v2-sim-duration">${track.duration}</span>
      <button class="v2-add-auth ${added?'done':''}" data-v2-add-auth="${track.id}" ${added?'disabled':''}>${added?'已加入':'加入授权曲库'}</button>
    </div>`;
  }

  function catalogSearchTrackRow(track,index){
    const tags=[track.genre.split(' · ')[0],track.mood[0],track.mood[1],track.vocal].filter(Boolean);
    return `<div class="v2-catalog-track-wrap" data-v2-track-wrap="${track.id}">
      <div class="v2-catalog-track v2-search-track" data-catalog-search="${(track.title+' '+track.artist+' '+track.id+' '+track.genre+' '+track.mood.join(' ')+' '+track.vocal).toLowerCase()}">
        <div class="v2-catalog-track-main">
          <div class="v2-catalog-cover">${cover(track,index)}</div>
          <div class="v2-catalog-copy">
            <div class="v2-catalog-title-row"><button class="v2-title-link" data-v2-detail="${track.id}">${track.title}</button><span>${track.duration}</span></div>
            <small>${track.artist} · ${track.id}</small>
            <div class="v2-catalog-tags">${tags.map(tag=>`<span>${tag}</span>`).join('')}</div>
          </div>
        </div>
        <div class="v2-wave-cell">
          ${catalogWave(track,index)}
          <small>${track.genre} · ${track.bpm} BPM</small>
        </div>
        <div class="v2-catalog-actions">
          <button class="v2-track-action play-track" data-track="${track.id}" title="${state.playing===track.id?'暂停':'试听'}">${icon(state.playing===track.id?'pause':'play')}</button>
          <button class="v2-track-action v2-add-search" data-v2-add-search="${track.id}" title="加入曲库">${icon('plus')}</button>
          <button class="v2-track-action" data-v2-similar="${track.id}" data-track-title="${track.title}" title="找相似">${icon('sparkles')}</button>
          <button class="v2-track-action" data-v2-detail="${track.id}" title="歌曲详情">${icon('more-horizontal')}</button>
        </div>
      </div>
      <div class="v2-similar-slot" data-v2-similar-slot="${track.id}"></div>
    </div>`;
  }

  function searchFilterButton(label,kind='simple'){
    return `<button class="v2-search-filter-chip" data-v2-search-filter="${label}" data-filter-kind="${kind}"><span>${label}</span>${icon('chevron-down')}</button>`;
  }

  function hierarchicalFilterHtml(label){
    const groups=searchFilterTaxonomy[label]||[];
    return `<div class="v2-filter-popover v2-filter-popover-large" data-filter-panel="${label}">
      <div class="v2-filter-popover-head"><strong>${label}</strong><span>可多选</span></div>
      <div class="v2-filter-search">${icon('search')}<input data-v2-filter-search="${label}" placeholder="搜索${label}标签" autocomplete="off" /></div>
      <div class="v2-filter-groups">
        ${groups.map(([group,items])=>`<section class="v2-filter-group" data-filter-group="${group}">
          <label>${group}</label>
          <div>${items.map(item=>`<button class="v2-filter-option" data-v2-search-filter-value="${item}" data-filter-parent="${label}"><span class="v2-filter-check"></span><span>${item}</span></button>`).join('')}</div>
        </section>`).join('')}
      </div>
    </div>`;
  }

  function languageFilterHtml(){
    return `<div class="v2-filter-popover v2-filter-popover-language" data-filter-panel="语言">
      <div class="v2-filter-popover-head"><strong>语言</strong><span>可多选</span></div>
      <div class="v2-filter-search">${icon('search')}<input data-v2-filter-search="语言" placeholder="搜索语言" autocomplete="off" /></div>
      <div class="v2-language-options">
        ${languageOptions.map(item=>`<button class="v2-filter-option" data-v2-search-filter-value="${item}" data-filter-parent="语言"><span class="v2-filter-check"></span><span>${item}</span></button>`).join('')}
      </div>
    </div>`;
  }

  function bpmFilterHtml(){
    return `<div class="v2-filter-popover v2-filter-popover-range" data-filter-panel="BPM">
      <div class="v2-filter-popover-head"><strong>BPM 区间</strong><span>40–220</span></div>
      <div class="v2-bpm-range">
        <label><span>最小 BPM</span><input id="v2BpmMin" type="number" min="40" max="220" value="80" /></label>
        <span class="v2-range-sep">—</span>
        <label><span>最大 BPM</span><input id="v2BpmMax" type="number" min="40" max="220" value="140" /></label>
      </div>
      <div class="v2-range-actions"><button class="btn btn-sm" data-v2-bpm-clear>清空</button><button class="btn btn-sm btn-primary" data-v2-bpm-apply>应用</button></div>
    </div>`;
  }

  function catalogV2Page(){
    const query=state.query||'';
    return `${pageHead('全曲库搜索','搜索当前客户可发现的全部音乐内容。搜索结果已经符合当前客户的授权条件。',`<button class="btn btn-soft" data-route="ai">${icon('sparkles')}AI 找歌</button>`)}
      <section class="v2-search-panel">
        <div class="v2-search-main-row">
          <div class="v2-search-main-input">${icon('search')}<input id="catalogSearchInput" value="${query}" autocomplete="off" placeholder="搜索歌曲、艺人、ISRC、Track ID、标签或场景描述" /><button class="v2-search-clear" id="clearCatalogSearch" title="清空">${icon('x')}</button></div>
          <button class="btn btn-primary" id="catalogSearchBtn">搜索</button>
        </div>
        <div class="v2-search-filter-grid">
          ${searchFilterButton('风格','hierarchical')}
          ${searchFilterButton('情绪','hierarchical')}
          ${searchFilterButton('场景','hierarchical')}
          ${searchFilterButton('语言','language')}
          ${searchFilterButton('人声','vocal')}
          ${searchFilterButton('BPM','range')}
          ${searchFilterButton('时长','duration')}
        </div>
        <div class="v2-filter-meta-row">
          <div class="v2-active-filters" id="v2ActiveFilters">
            <span class="v2-active-filter" data-filter-value="Electronic">Electronic <button data-v2-remove-filter="Electronic">${icon('x')}</button></span>
            <span class="v2-active-filter" data-filter-value="活力">活力 <button data-v2-remove-filter="活力">${icon('x')}</button></span>
          </div>
          <button class="v2-search-reset" data-v2-search-reset>清空筛选</button>
        </div>
      </section>

      <section class="v2-search-results">
        <div class="v2-search-results-head">
          <div><strong>${query?`“${query}”`:'全部可发现音乐'}</strong><span>48,392 首结果</span></div>
          <button class="v2-sort-button">推荐排序 ${icon('chevron-down')}</button>
        </div>
        <div class="v2-catalog-browser v2-search-browser">
          <div class="v2-catalog-list-head">
            <span>歌曲</span><span>波形 / 音乐信息</span><span>操作</span>
          </div>
          <div class="v2-catalog-track-list" id="catalogSearchTrackList">
            ${tracks.map((track,index)=>catalogSearchTrackRow(track,index)).join('')}
          </div>
          <div class="v2-catalog-empty" id="catalogSearchEmpty" hidden>没有找到匹配的歌曲</div>
          <button class="v2-load-more">加载更多搜索结果</button>
        </div>
      </section>`;
  }

  function playlistArt(sectionIndex,itemIndex){
    const n=(sectionIndex*6+itemIndex)%8+1;
    return `<div class="v2-playlist-art art-${n}">
      <span class="v2-playlist-art-mark">${icon(itemIndex%3===0?'music':itemIndex%3===1?'sparkles':'headphones')}</span>
      <span class="v2-playlist-art-wave"><i></i><i></i><i></i><i></i><i></i></span>
    </div>`;
  }

  function findDiscoverCategory(key){
    return officialPlaylistSections.find(section=>section.key===key)||officialPlaylistSections[0];
  }

  function findDiscoverPlaylist(id){
    for(const section of officialPlaylistSections){
      const playlist=section.playlists.find(item=>item.id===id);
      if(playlist) return {section,playlist};
    }
    return {section:officialPlaylistSections[0],playlist:officialPlaylistSections[0].playlists[0]};
  }

  function officialPlaylistCard(section,item,sectionIndex,itemIndex){
    return `<article class="v2-official-playlist" data-v2-playlist="${item.id}">
      ${playlistArt(sectionIndex,itemIndex)}
      <div class="v2-official-playlist-copy">
        <strong>${item.title}</strong>
        <small>${item.group} · ${item.count.toLocaleString()} 首</small>
      </div>
      <span class="v2-playlist-open">${icon('arrow-up-right')}</span>
    </article>`;
  }

  function officialPlaylistSection(section,sectionIndex){
    return `<section class="v2-official-section clean">
      <div class="v2-official-section-head">
        <div class="v2-official-section-title simple">
          <div><h2>${section.title}</h2><p>${section.description}</p></div>
        </div>
        <button class="v2-official-more" data-v2-category="${section.key}">查看全部 ${section.count} 个曲库 ${icon('arrow-up-right')}</button>
      </div>
      <div class="v2-official-grid">
        ${section.playlists.slice(0,6).map((item,itemIndex)=>officialPlaylistCard(section,item,sectionIndex,itemIndex)).join('')}
      </div>
    </section>`;
  }

  function discoverV2Page(){
    return `${pageHead('分类浏览','浏览 STARLINK 官方整理的专业歌单与场景曲库。','')}
      <section class="v2-discover-hero">
        <div class="v2-discover-feature" data-v2-playlist="${officialPlaylistSections[4].playlists[0].id}">
          <div class="v2-discover-feature-copy">
            <span class="v2-discover-eyebrow">EDITOR'S PICK · 本周精选</span>
            <h2>运动与户外精选</h2>
            <p>为跑步、训练、户外视频和运动产品整理的一组高能量音乐，覆盖明亮、激励与稳定节奏。</p>
            <button class="btn">浏览精选歌单 ${icon('arrow-up-right')}</button>
          </div>
          <div class="v2-discover-feature-art"><span>STARLINK</span><strong>MOVE<br/>OUTSIDE</strong></div>
        </div>
        <div class="v2-discover-side">
          <button class="v2-discover-mini new" data-route="catalog">
            <span class="v2-mini-icon">${icon('music')}</span>
            <span><small>本周新增</small><strong>2,143 首新音乐</strong><em>查看最近上新</em></span>
            ${icon('arrow-up-right')}
          </button>
          <button class="v2-discover-mini ai" data-route="ai">
            <span class="v2-mini-icon">${icon('sparkles')}</span>
            <span><small>描述使用场景</small><strong>不知道怎么找？直接告诉 AI</strong><em>用一句话开始找歌</em></span>
            ${icon('arrow-up-right')}
          </button>
        </div>
      </section>

      <div class="v2-official-heading">
        <div><span>OFFICIAL COLLECTIONS</span><h2>官方歌单</h2><p>按官方专业曲库分类浏览，进入分类后可查看该分类下的全部歌单。</p></div>
      </div>

      ${officialPlaylistSections.map(officialPlaylistSection).join('')}`;
  }

  function discoverCategoryPage(){
    const section=findDiscoverCategory(v2.discoverCategoryKey);
    const sectionIndex=officialPlaylistSections.indexOf(section);
    return `<div class="v2-library-breadcrumb"><button data-route="discover">分类浏览</button><span>/</span><strong>${section.title}</strong></div>
      <section class="v2-category-hero">
        <div>
          <span>OFFICIAL COLLECTION</span>
          <h1>${section.title}</h1>
          <p>${section.description}</p>
        </div>
        <div class="v2-category-count"><strong>${section.count}</strong><small>个官方曲库</small></div>
      </section>
      <div class="v2-category-list-head">
        <div><h2>全部歌单</h2><p>官网同分类下的歌单内容，在这里以客户可访问曲库的形式统一浏览。</p></div>
        <button class="btn" data-route="catalog">${icon('search')}搜索该分类</button>
      </div>
      <div class="v2-category-playlist-grid">
        ${section.playlists.map((item,itemIndex)=>officialPlaylistCard(section,item,sectionIndex,itemIndex)).join('')}
      </div>`;
  }

  function playlistDescription(section,playlist){
    const map={
      '音效-笑声':'欢笑的魔力，尽在这个音效歌单。收录不同场景与人群的笑声，用声音快速建立愉悦、温馨或俏皮的剧情氛围。',
      '速度骑行（踏频150以上）':'面向高踏频骑行训练整理的高能量歌单，以稳定强拍和持续推进感帮助保持训练节奏。',
      '回忆':'围绕回忆、情感回溯与人物内心变化整理的短剧配乐，适合回闪、旁白与情绪铺垫。'
    };
    return map[playlist.title]||`来自「${section.title} / ${playlist.group}」的官方歌单，围绕具体使用场景精选适配音乐，可直接试听并加入客户曲库。`;
  }

  function playlistTracksFor(id){
    const pool=[...tracks,...similarPool];
    const offset=id.split('').reduce((sum,ch)=>sum+ch.charCodeAt(0),0)%pool.length;
    return Array.from({length:10},(_,index)=>pool[(offset+index)%pool.length]);
  }

  function playlistDetailPage(){
    const {section,playlist}=findDiscoverPlaylist(v2.discoverPlaylistId);
    const sectionIndex=officialPlaylistSections.indexOf(section);
    const songs=playlistTracksFor(playlist.id);
    const recommendations=section.playlists.filter(item=>item.id!==playlist.id).slice(0,6);
    return `<div class="v2-library-breadcrumb">
        <button data-route="discover">分类浏览</button><span>/</span>
        <button data-v2-category="${section.key}">${section.title}</button><span>/</span>
        <strong>${playlist.title}</strong>
      </div>
      <section class="v2-playlist-detail-hero">
        <div class="v2-playlist-detail-art">${playlistArt(sectionIndex,section.playlists.indexOf(playlist))}</div>
        <div class="v2-playlist-detail-copy">
          <span>官方歌单 · ${playlist.group}</span>
          <h1>${playlist.title}</h1>
          <p>${playlistDescription(section,playlist)}</p>
          <div><strong>${playlist.count.toLocaleString()}</strong> 首音乐</div>
        </div>
      </section>

      <section class="v2-playlist-song-section">
        <div class="v2-playlist-song-head">
          <div><h2>歌曲列表</h2><p>展示歌单中的可访问音乐，操作与全曲库搜索保持一致。</p></div>
          <span>共 ${playlist.count.toLocaleString()} 首</span>
        </div>
        <div class="v2-catalog-browser">
          <div class="v2-catalog-list-head"><span>歌曲</span><span>波形 / 音乐信息</span><span>操作</span></div>
          <div class="v2-catalog-track-list">${songs.map((track,index)=>catalogSearchTrackRow(track,index)).join('')}</div>
          <button class="v2-load-more">加载更多歌曲</button>
        </div>
      </section>

      <section class="v2-playlist-recommend">
        <div class="v2-category-list-head"><div><h2>推荐歌单</h2><p>继续浏览「${section.title}」下的其他官方歌单。</p></div></div>
        <div class="v2-official-grid">${recommendations.map((item,index)=>officialPlaylistCard(section,item,sectionIndex,index+2)).join('')}</div>
      </section>`;
  }

  function myCatalogPage(){
    const metaById=Object.fromEntries(customerCatalog.map(c=>[c[2],{source:c[3],date:c[4],status:c[7]}]));
    return `${pageHead('我的曲库','查看已经授权并可直接使用的音乐内容。','')}
      <div class="v2-catalog-overview">
        <div class="v2-catalog-overview-card primary" data-route="catalog" role="button" tabindex="0">
          <div><span>当前可用音乐</span><strong>182,381</strong><small>查看当前可访问的完整曲库</small></div>
          <span class="v2-overview-arrow">${icon('arrow-up-right')}</span>
        </div>
        <div class="v2-catalog-overview-card">
          <div><span>已授权</span><strong>176,204</strong><small>当前列表结果 · API 已上架</small></div>
          <span class="v2-overview-icon">${icon('shield')}</span>
        </div>
        <div class="v2-catalog-overview-card">
          <div><span>近 30 天新增</span><strong>4,812</strong><small>来自 6 个交付批次</small></div>
          <span class="v2-overview-icon">${icon('plus')}</span>
        </div>
      </div>

      <div class="v2-catalog-browser">
        <div class="v2-catalog-toolbar">
          <div class="v2-catalog-query">
            <div class="v2-catalog-keyword">${icon('search')}<input id="myCatalogKeyword" autocomplete="off" placeholder="搜索歌曲、艺人、Track ID 或标签" /></div>
            <button class="v2-catalog-filter" data-v2-catalog-filter="source">来源批次 ${icon('chevron-down')}</button>
            <button class="v2-catalog-filter" data-v2-date-range>加入时间 ${icon('chevron-down')}</button>
          </div>
          <div class="v2-catalog-count"><strong>176,204</strong> 首已授权</div>
        </div>

        <div class="v2-catalog-list-head">
          <span>歌曲</span><span>波形 / 来源</span><span>操作</span>
        </div>
        <div class="v2-catalog-track-list" id="myCatalogTrackList">
          ${tracks.slice(0,8).map((track,index)=>myCatalogTrackRow(track,metaById[track.id],index)).join('')}
        </div>
        <div class="v2-catalog-empty" id="myCatalogEmpty" hidden>没有找到匹配的已授权歌曲</div>
        <button class="v2-load-more">加载更多已授权音乐</button>
      </div>`;
  }

  function trackDetailPage(){
    const track=tracks.find(t=>t.id===v2.trackDetailId)||tracks[0];
    const meta=customerCatalog.find(c=>c[2]===track.id);
    const source=meta?.[3]||'首批 API 曲库';
    const joined=meta?.[4]||'2026-03-01';
    const groups=[
      ['曲风',detailTags.genre],['情绪',detailTags.mood],['适用场景',detailTags.scene],
      ['乐器 / 编曲',detailTags.instrument],['人声 / 语言',detailTags.vocal],['节奏 / 能量',detailTags.energy]
    ];
    return `<div class="v2-track-detail-page">
      <button class="v2-back" data-route="my-catalog">← 返回我的曲库</button>
      <section class="v2-track-hero">
        <div class="v2-track-detail-cover">${cover(track)}</div>
        <div class="v2-track-detail-main">
          <span class="v2-track-detail-kicker">${v2.trackDetailMode==='search'?'可加入曲库':'已授权歌曲'}</span>
          <h1>${track.title}</h1>
          <p>${track.artist} · ${track.id}</p>
          <div class="v2-track-detail-actions">
            <button class="btn btn-primary play-track" data-track="${track.id}">${icon(state.playing===track.id?'pause':'play')}${state.playing===track.id?'暂停':'试听'}</button>
            ${v2.trackDetailMode==='search'
              ? `<button class="btn" data-v2-add-search="${track.id}">${icon('plus')}加入曲库</button>`
              : `<button class="btn" data-v2-download="${track.id}">${icon('download')}下载</button>`}
            <button class="btn" data-v2-detail-similar="${track.id}" data-track-title="${track.title}">${icon('sparkles')}找相似</button>
          </div>
        </div>
        <div class="v2-track-wave-card">
          ${catalogWave(track,2)}
          <small>${track.duration} · ${track.bpm} BPM</small>
        </div>
      </section>

      <div class="v2-track-detail-grid">
        <section class="v2-detail-card">
          <div class="v2-detail-card-head"><strong>基本信息</strong><small>歌曲与授权曲库中的基础元数据</small></div>
          <div class="v2-basic-info-grid">
            ${detailInfo('歌曲名称',track.title)}
            ${detailInfo('艺人',track.artist)}
            ${detailInfo('Track ID',track.id)}
            ${detailInfo('时长',track.duration)}
            ${detailInfo('BPM',String(track.bpm))}
            ${detailInfo('人声',track.vocal)}
            ${detailInfo('曲风',track.genre)}
            ${v2.trackDetailMode==='authorized'?detailInfo('来源批次',source):detailInfo('曲库状态','可加入我的曲库')}
            ${v2.trackDetailMode==='authorized'?detailInfo('加入时间',joined):detailInfo('授权范围','符合当前客户搜索授权')}
          </div>
        </section>
        <section class="v2-detail-card">
          <div class="v2-detail-card-head"><strong>标签信息</strong><small>按标签维度分组展示歌曲特征</small></div>
          <div class="v2-tag-groups">
            ${groups.map(([name,tags])=>`<div class="v2-tag-group"><label>${name}</label><div>${tags.map(tag=>`<span>${tag}</span>`).join('')}</div></div>`).join('')}
          </div>
        </section>
      </div>
      <div id="v2DetailSimilar"></div>
    </div>`;
  }

  function detailInfo(label,value){return `<div class="v2-detail-info"><small>${label}</small><strong>${value}</strong></div>`}

  function requirementsPage(){
    return `${pageHead('内容需求','查看每一次内容需求从提出、候选、反馈到最终交付的处理进度。','')}
      <div class="v2-kpi-grid">
        ${kpi('list-music','累计需求','12','本月新增 5 个需求')}${kpi('clock','处理中','2','均在正常处理时限内')}${kpi('check','待我确认','2','最近更新：昨天 18:03')}${kpi('download','本月已完成','7','平均处理 2.4 天')}
      </div>
      <section class="section"><div class="v2-request-tabs"><button class="v2-request-tab active">全部 12</button><button class="v2-request-tab">待我处理 2</button><button class="v2-request-tab">处理中 2</button><button class="v2-request-tab">已完成 7</button></div>
      <div class="v2-table-card"><div class="v2-table-head"><div class="v2-filter-row"><div class="v2-search">${icon('search')}<input placeholder="搜索需求名称 / 需求编号"/></div><button class="v2-filter">需求类型 ${icon('chevron-down')}</button><button class="v2-filter">所属项目 ${icon('chevron-down')}</button></div><span class="result-meta">按最近更新排序</span></div><div class="v2-table-wrap"><table class="v2-table"><thead><tr><th>需求</th><th>类型</th><th>所属项目</th><th>目标</th><th>当前进度</th><th>状态</th><th>关联交付</th><th>更新时间</th></tr></thead><tbody>${requests.map(r=>requestRow(r)).join('')}</tbody></table></div></div></section>`;
  }

  function requestRow(r){return `<tr class="v2-clickable" data-route="requirement-detail"><td><span class="v2-primary">${r.title}</span><span class="v2-secondary">${r.id}</span></td><td>${r.type}</td><td>${r.project}</td><td>${r.target}</td><td><div class="v2-request-progress"><strong>${r.progress}</strong><div class="v2-progress-line"><span style="width:${r.pct}%"></span></div></div></td><td>${statusPill(r.status)}</td><td>${r.delivery}</td><td>${r.updated}</td></tr>`}

  function requirementDetailPage(){
    const list=tracks.slice(0,6);
    return `<div class="v2-detail-head"><button class="v2-back" data-route="requirements">← 返回内容需求</button><div class="v2-detail-title"><div><h1>无人机首发配乐</h1><p>REQ-20260915-024 · 影石无人机音乐</p></div>${statusPill('待我确认')}</div><div class="v2-detail-meta"><div class="v2-meta-block"><small>需求类型</small><strong>试听选曲</strong></div><div class="v2-meta-block"><small>目标数量</small><strong>20 首</strong></div><div class="v2-meta-block"><small>当前候选</small><strong>30 首</strong></div><div class="v2-meta-block"><small>反馈截止</small><strong>2026-09-20</strong></div></div></div>
      <div class="v2-detail-grid"><section class="v2-table-card"><div class="v2-table-head"><div class="v2-table-head-copy"><strong>候选音乐</strong><small>试听后选择你希望保留的歌曲；最终确认后会形成正式选曲记录。</small></div><span class="result-meta">第一轮 · 30 首</span></div><div>${list.map((t,i)=>selectTrackRow(t,i)).join('')}</div><div class="v2-select-summary"><span>当前已选择 <strong id="v2SelectedCount">${v2.selectedTracks.size}</strong> / 30 首</span><button class="btn btn-primary" data-v2-action="confirm-selection">确认本轮选择</button></div></section>
      <aside><div class="panel"><div class="panel-head"><h3>需求说明</h3></div><div class="panel-body"><div class="v2-brief-list"><div class="v2-brief"><small>使用场景</small><strong>无人机首发 / 航拍</strong></div><div class="v2-brief"><small>内容方向</small><strong>大气 / 开阔 / 户外</strong></div><div class="v2-brief"><small>偏好</small><strong>国际化、弱人声</strong></div><div class="v2-brief"><small>交付目标</small><strong>约 20 首</strong></div></div></div></div><div class="panel section"><div class="panel-head"><h3>处理记录</h3></div><div class="panel-body"><div class="v2-timeline"><div class="v2-timeline-item"><strong>第一轮候选已发送</strong><small>09-15 18:03 · 30 首</small></div><div class="v2-timeline-item"><strong>客户开始试听</strong><small>09-16 09:24</small></div><div class="v2-timeline-item"><strong>当前已选择 6 首</strong><small>等待最终确认</small></div></div></div></div></aside></div>`;
  }

  function selectTrackRow(t,index){
    const selected=v2.selectedTracks.has(t.id);
    return `<div class="v2-track-select ${selected?'selected':''}" data-v2-track-row="${t.id}"><div>${cover(t)}</div><div class="track-main"><div class="track-title">${t.title}</div><div class="track-sub">${t.artist} · ${t.genre}</div></div><div class="track-cell">${t.bpm} BPM</div><div class="track-cell">${t.duration}</div><button class="v2-select-btn" data-v2-select="${t.id}">${selected?'已选择':'选择'}</button></div>`;
  }

  function deliveriesPage(){
    return `${pageHead('交付记录','查看所有已经收到或正在处理的内容批次，包括 API 上架、试听选曲和文件交付。','')}
      <div class="v2-kpi-grid">${kpi('download','累计交付','27 次','共计 612 首正式内容')}${kpi('code','API 上架','18 次','当前 API 曲库 176,204 首')}${kpi('music','试听选曲','6 次','累计确认 486 首')}${kpi('folder','文件交付','3 次','最近一次 09-12')}</div>
      <section class="section"><div class="v2-table-card"><div class="v2-table-head"><div class="v2-filter-row"><div class="v2-search">${icon('search')}<input placeholder="搜索交付名称 / 交付编号"/></div><button class="v2-filter">交付方式 ${icon('chevron-down')}</button><button class="v2-filter">所属项目 ${icon('chevron-down')}</button></div><span class="result-meta">共 27 次交付</span></div><div class="v2-table-wrap"><table class="v2-table"><thead><tr><th>交付</th><th>关联需求</th><th>交付方式</th><th>内容数量</th><th>交付时间</th><th>状态</th></tr></thead><tbody>${deliveries.map(deliveryRow).join('')}</tbody></table></div></div></section>`;
  }

  function deliveryRow(d){
    const typeIcon=d.type.includes('API')?'code':d.type.includes('试听')?'music':'download';
    return `<tr class="v2-clickable" data-route="delivery-detail"><td><span class="v2-primary">${d.name}</span><span class="v2-secondary">${d.id}</span></td><td>${d.request}</td><td><span class="v2-delivery-type"><span class="v2-type-icon">${icon(typeIcon)}</span>${d.type}</span></td><td>${d.count}</td><td>${d.date}</td><td>${statusPill(d.status)}</td></tr>`;
  }

  function deliveryDetailPage(){
    return `<div class="v2-detail-head"><button class="v2-back" data-route="deliveries">← 返回交付记录</button><div class="v2-detail-title"><div><h1>9 月户外旅行增量</h1><p>DEL-20260916-028 · 关联需求：户外旅行音乐周更</p></div>${statusPill('已完成')}</div><div class="v2-detail-meta"><div class="v2-meta-block"><small>交付方式</small><strong>API 上架</strong></div><div class="v2-meta-block"><small>内容数量</small><strong>8 首</strong></div><div class="v2-meta-block"><small>交付时间</small><strong>2026-09-16 14:21</strong></div><div class="v2-meta-block"><small>结果</small><strong>已加入我的曲库</strong></div></div></div>
      <div class="v2-detail-grid"><section class="v2-table-card"><div class="v2-table-head"><div class="v2-table-head-copy"><strong>本次交付内容</strong><small>本批内容已经正式进入你的客户曲库。</small></div><button class="btn btn-sm" data-route="my-catalog">查看我的曲库</button></div><div class="v2-table-wrap"><table class="v2-table"><thead><tr><th>歌曲</th><th>艺人</th><th>Track ID</th><th>结果</th></tr></thead><tbody>${tracks.slice(0,5).map(t=>`<tr><td class="v2-primary">${t.title}</td><td>${t.artist}</td><td>${t.id}</td><td>${statusPill('已上架')}</td></tr>`).join('')}</tbody></table></div></section><aside><div class="panel"><div class="panel-head"><h3>交付过程</h3></div><div class="panel-body"><div class="v2-timeline"><div class="v2-timeline-item"><strong>内容准备完成</strong><small>09-16 11:42</small></div><div class="v2-timeline-item"><strong>授权校验完成</strong><small>09-16 13:06 · 8 / 8 首通过</small></div><div class="v2-timeline-item"><strong>API 上架完成</strong><small>09-16 14:21 · 已同步到客户曲库</small></div></div></div></div></aside></div>`;
  }

  function managementPage(){
    return `${pageHead('管理','管理你的账号与团队；合作信息仅作为只读参考。','')}
      <div class="v2-manage-layout"><aside class="v2-manage-nav"><button class="active">${icon('users')}账号与成员</button><button>${icon('lock')}安全设置</button><button class="weak" data-v2-action="show-cooperation">${icon('briefcase-business')}合作信息</button></aside><section class="v2-manage-panel" id="v2ManagePanel">
        <div class="v2-manage-section"><h3>账号与成员</h3><p>查看当前企业下可以访问 STARLINK 的成员账号。</p>${[['KH','客户管理员','admin@kanjian.com','管理员'],['LS','李思','lisi@company.com','内容成员'],['CY','陈雨','chenyu@company.com','内容成员'],['WW','王维','wangwei@company.com','开发者']].map(m=>`<div class="member-row"><div class="member-info"><span class="avatar-sm">${m[0]}</span><span><strong>${m[1]}</strong><small>${m[2]}</small></span></div><div class="data-cell">${m[3]}</div><div class="data-cell">正常</div><span></span></div>`).join('')}</div>
        <div class="v2-manage-section"><h3>登录与安全</h3><p>用于当前账号的基础安全设置。</p><div class="info-grid"><div class="info-block"><small>最近登录</small><strong>今天 16:42</strong></div><div class="info-block"><small>登录保护</small><strong>已开启</strong></div></div></div>
      </section></div>`;
  }

  function cooperationPanel(){
    return `<div class="v2-manage-section"><h3>合作信息</h3><p>这些信息由 STARLINK 后台维护，仅作为当前合作范围的只读参考。</p><div class="info-grid"><div class="info-block"><small>客户名称</small><strong>影石 Insta360</strong></div><div class="info-block"><small>合作开始</small><strong>2024-06-01</strong></div></div><div class="v2-coop-card"><strong>Insta360 内容音乐</strong><small>运动相机 / UGC / 短视频 · 2024-06-01 ～ 长期 · 合作中</small></div><div class="v2-coop-card"><strong>影石无人机音乐</strong><small>无人机 / 户外 / 旅行 · 2026-08-15 ～ 长期 · 合作中</small></div><div class="v2-coop-card"><strong>授权结果</strong><small>当前可使用 182,381 首 · 全球 · 支持在线试听、文件获取与 API 调用</small></div></div>`;
  }

  navGroups.splice(0,navGroups.length,
    {label:'工作区',items:[{id:'home',label:'工作台',icon:'home'}]},
    {label:'内容',items:[{id:'my-catalog',label:'我的曲库',icon:'library',badge:'18.2万'},{id:'catalog',label:'全曲库搜索',icon:'search'},{id:'discover',label:'分类浏览',icon:'compass'},{id:'ai',label:'AI 找歌',icon:'sparkles',badge:'AI'}]},
    {label:'服务',items:[{id:'requirements',label:'内容需求',icon:'list-music',badge:'2'},{id:'deliveries',label:'交付记录',icon:'download'}]},
    {label:'开发者',items:[{id:'developer',label:'接入中心',icon:'code'}]},
    {label:'系统',items:[{id:'settings',label:'管理',icon:'settings'}]}
  );

  pages.home=homeV2;
  pages.catalog=catalogV2Page;
  pages.discover=discoverV2Page;
  pages['discover-category']=discoverCategoryPage;
  pages['playlist-detail']=playlistDetailPage;
  pages['my-catalog']=myCatalogPage;
  pages.requirements=requirementsPage;
  pages['requirement-detail']=requirementDetailPage;
  pages.deliveries=deliveriesPage;
  pages['delivery-detail']=deliveryDetailPage;
  pages['track-detail']=trackDetailPage;
  pages.settings=managementPage;

  const oldMap={projects:'settings',playlists:'requirements',content:'my-catalog'};
  if(oldMap[state.route]){
    state.route=oldMap[state.route];
    history.replaceState(null,'',`#/${state.route}`);
  }

  function previewTrackById(id){
    return tracks.find(t=>t.id===id)||similarPool.find(t=>t.id===id)||tracks[0];
  }

  function playerCover(track){
    const cls=track.cover==='c1'?'':track.cover||'';
    return `<div class="v2-player-cover ${cls}"><span>${initials(track.artist)}</span></div>`;
  }

  function syncPreviewButtons(){
    document.querySelectorAll('.play-track[data-track]').forEach(btn=>{
      const active=btn.dataset.track===v2.previewTrackId;
      const paused=v2.previewPaused;
      if(btn.classList.contains('btn')){
        btn.innerHTML=`${icon(active&&!paused?'pause':'play')}${active&&!paused?'暂停':'播放'}`;
      }else{
        btn.innerHTML=icon(active&&!paused?'pause':'play');
      }
      btn.classList.toggle('is-playing',active&&!paused);
    });
  }

  function renderPreviewPlayer(track){
    let node=document.getElementById('v2PreviewPlayer');
    if(!node){
      node=document.createElement('div');
      node.id='v2PreviewPlayer';
      node.className='v2-preview-player';
      document.body.appendChild(node);
    }
    const playing=!v2.previewPaused;
    node.innerHTML=`
      <div class="v2-player-track">
        ${playerCover(track)}
        <div class="v2-player-copy">
          <strong>${track.title}</strong>
          <small>${track.artist} · ${track.id}</small>
        </div>
      </div>
      <div class="v2-player-center">
        <div class="v2-player-controls">
          <button class="v2-player-icon" data-v2-player-prev title="上一首">${icon('chevron-down')}</button>
          <button class="v2-player-main" data-v2-player-toggle title="${playing?'暂停':'播放'}">${icon(playing?'pause':'play')}</button>
          <button class="v2-player-icon next" data-v2-player-next title="下一首">${icon('chevron-down')}</button>
        </div>
        <div class="v2-player-progress">
          <span>01:14</span>
          <input type="range" min="0" max="100" value="38" aria-label="试听进度" />
          <span>${track.duration}</span>
        </div>
      </div>
      <div class="v2-player-side">
        <div class="v2-player-volume">
          <span class="v2-volume-icon">◖</span>
          <input type="range" min="0" max="100" value="72" aria-label="音量" />
        </div>
        <button class="v2-player-icon" data-v2-download="${track.id}" title="下载">${icon('download')}</button>
        <button class="v2-player-icon" data-v2-player-close title="关闭播放器">${icon('x')}</button>
      </div>`;
    document.body.classList.add('v2-player-open');
    syncPreviewButtons();
  }

  function openPreviewPlayer(id){
    v2.previewTrackId=id;
    v2.previewPaused=false;
    state.playing=id;
    renderPreviewPlayer(previewTrackById(id));
  }

  function togglePreviewPlayer(){
    if(!v2.previewTrackId) return;
    v2.previewPaused=!v2.previewPaused;
    state.playing=v2.previewPaused?null:v2.previewTrackId;
    renderPreviewPlayer(previewTrackById(v2.previewTrackId));
  }

  function stepPreviewPlayer(direction){
    const currentIndex=Math.max(0,tracks.findIndex(t=>t.id===v2.previewTrackId));
    const nextIndex=(currentIndex+direction+tracks.length)%tracks.length;
    openPreviewPlayer(tracks[nextIndex].id);
  }

  function closePreviewPlayer(){
    document.getElementById('v2PreviewPlayer')?.remove();
    document.body.classList.remove('v2-player-open');
    v2.previewTrackId=null;
    v2.previewPaused=false;
    state.playing=null;
    syncPreviewButtons();
  }

  function openAuthorizationConfirm(track){
    closeAuthorizationConfirm();
    const node=document.createElement('div');
    node.className='v2-confirm-modal';
    node.id='v2ConfirmModal';
    node.innerHTML=`<div class="v2-confirm-backdrop"></div><div class="v2-confirm-dialog">
      <span class="v2-confirm-icon">${icon('plus')}</span>
      <h3>加入授权曲库？</h3>
      <p>确认将《${track.title}》加入当前客户的授权曲库。确认后该歌曲会进入已授权结果，并按当前配置同步到可用范围。</p>
      <div class="v2-confirm-track"><strong>${track.title}</strong><small>${track.artist} · ${track.id}</small></div>
      <div class="v2-confirm-actions"><button class="btn" data-v2-cancel-auth>取消</button><button class="btn btn-primary" data-v2-confirm-auth="${track.id}">确认加入</button></div>
    </div>`;
    document.body.appendChild(node);
  }
  function closeAuthorizationConfirm(){document.getElementById('v2ConfirmModal')?.remove()}

  function openCatalogAddConfirm(track){
    closeAuthorizationConfirm();
    const node=document.createElement('div');
    node.className='v2-confirm-modal';
    node.id='v2ConfirmModal';
    node.innerHTML=`<div class="v2-confirm-backdrop"></div><div class="v2-confirm-dialog">
      <span class="v2-confirm-icon">${icon('plus')}</span>
      <h3>加入曲库？</h3>
      <p>确认将《${track.title}》加入当前客户的已授权曲库。加入后该歌曲会出现在“我的曲库”中。</p>
      <div class="v2-confirm-track"><strong>${track.title}</strong><small>${track.artist} · ${track.id}</small></div>
      <div class="v2-confirm-actions"><button class="btn" data-v2-cancel-auth>取消</button><button class="btn btn-primary" data-v2-confirm-search="${track.id}">确认加入</button></div>
    </div>`;
    document.body.appendChild(node);
  }

  document.addEventListener('click',e=>{
    const playButton=e.target.closest('.play-track[data-track]');
    if(playButton){
      e.preventDefault();e.stopImmediatePropagation();
      const id=playButton.dataset.track;
      if(v2.previewTrackId===id) togglePreviewPlayer(); else openPreviewPlayer(id);
      return;
    }
    if(e.target.closest('[data-v2-player-toggle]')){
      e.preventDefault();e.stopImmediatePropagation();togglePreviewPlayer();return;
    }
    if(e.target.closest('[data-v2-player-prev]')){
      e.preventDefault();e.stopImmediatePropagation();stepPreviewPlayer(-1);return;
    }
    if(e.target.closest('[data-v2-player-next]')){
      e.preventDefault();e.stopImmediatePropagation();stepPreviewPlayer(1);return;
    }
    if(e.target.closest('[data-v2-player-close]')){
      e.preventDefault();e.stopImmediatePropagation();closePreviewPlayer();return;
    }

    const select=e.target.closest('[data-v2-select]');
    if(select){
      e.preventDefault();e.stopPropagation();
      const id=select.dataset.v2Select;
      if(v2.selectedTracks.has(id)) v2.selectedTracks.delete(id); else v2.selectedTracks.add(id);
      const row=document.querySelector(`[data-v2-track-row="${id}"]`);
      row?.classList.toggle('selected',v2.selectedTracks.has(id));
      select.textContent=v2.selectedTracks.has(id)?'已选择':'选择';
      const count=document.getElementById('v2SelectedCount');if(count) count.textContent=v2.selectedTracks.size;
      return;
    }
    const categoryLink=e.target.closest('[data-v2-category]');
    if(categoryLink){
      e.preventDefault();e.stopPropagation();
      v2.discoverCategoryKey=categoryLink.dataset.v2Category;
      routeTo('discover-category');
      return;
    }
    const playlistLink=e.target.closest('[data-v2-playlist]');
    if(playlistLink){
      e.preventDefault();e.stopPropagation();
      v2.discoverPlaylistId=playlistLink.dataset.v2Playlist;
      routeTo('playlist-detail');
      return;
    }

    const searchFilter=e.target.closest('[data-v2-search-filter]');
    if(searchFilter){
      e.preventDefault();e.stopPropagation();
      const label=searchFilter.dataset.v2SearchFilter;
      const kind=searchFilter.dataset.filterKind;
      let html='';
      if(kind==='hierarchical') html=hierarchicalFilterHtml(label);
      else if(kind==='language') html=languageFilterHtml();
      else if(kind==='range') html=bpmFilterHtml();
      else {
        const options=kind==='vocal'?['纯音乐','女声','男声','合唱','弱人声']:['< 1 分钟','1–2 分钟','2–3 分钟','3–5 分钟','> 5 分钟'];
        html=`<div class="v2-filter-popover"><div class="v2-filter-popover-head"><strong>${label}</strong><span>可多选</span></div><div class="v2-language-options">${options.map(item=>`<button class="v2-filter-option" data-v2-search-filter-value="${item}" data-filter-parent="${label}"><span class="v2-filter-check"></span><span>${item}</span></button>`).join('')}</div></div>`;
      }
      const box=showDropdown(searchFilter,html);
      box.classList.add('v2-search-dropdown');
      if(['hierarchical','language'].includes(kind)){
        box.style.width=kind==='hierarchical'?'560px':'330px';
      }else if(kind==='range'){
        box.style.width='340px';
      }else{
        box.style.width='300px';
      }
      requestAnimationFrame(()=>{
        const rect=box.getBoundingClientRect();
        if(rect.right>window.innerWidth-12) box.style.left=`${Math.max(12,window.innerWidth-rect.width-12)}px`;
      });
      return;
    }
    const searchFilterValue=e.target.closest('[data-v2-search-filter-value]');
    if(searchFilterValue){
      e.preventDefault();e.stopPropagation();
      const host=document.getElementById('v2ActiveFilters');
      const value=searchFilterValue.dataset.v2SearchFilterValue;
      const exists=host && [...host.querySelectorAll('.v2-active-filter')].some(x=>x.dataset.filterValue===value);
      if(exists){
        host.querySelector(`[data-filter-value="${value}"]`)?.remove();
        searchFilterValue.classList.remove('selected');
      }else{
        host?.insertAdjacentHTML('beforeend',`<span class="v2-active-filter" data-filter-value="${value}">${value} <button data-v2-remove-filter="${value}">${icon('x')}</button></span>`);
        searchFilterValue.classList.add('selected');
      }
      return;
    }
    const removeSearchFilter=e.target.closest('[data-v2-remove-filter]');
    if(removeSearchFilter){
      e.preventDefault();e.stopPropagation();
      const value=removeSearchFilter.dataset.v2RemoveFilter;
      removeSearchFilter.closest('.v2-active-filter')?.remove();
      document.querySelectorAll(`[data-v2-search-filter-value="${value}"]`).forEach(btn=>btn.classList.remove('selected'));
      return;
    }
    if(e.target.closest('[data-v2-search-reset]')){
      e.preventDefault();e.stopPropagation();
      const host=document.getElementById('v2ActiveFilters');if(host) host.innerHTML='';
      document.querySelectorAll('[data-v2-search-filter-value]').forEach(btn=>btn.classList.remove('selected'));
      return;
    }
    if(e.target.closest('[data-v2-bpm-clear]')){
      e.preventDefault();e.stopPropagation();
      const min=document.getElementById('v2BpmMin'),max=document.getElementById('v2BpmMax');
      if(min) min.value='';if(max) max.value='';
      return;
    }
    if(e.target.closest('[data-v2-bpm-apply]')){
      e.preventDefault();e.stopPropagation();
      const min=document.getElementById('v2BpmMin')?.value;
      const max=document.getElementById('v2BpmMax')?.value;
      if(!min||!max){toast('请输入完整的 BPM 区间');return}
      if(Number(min)>Number(max)){toast('最小 BPM 不能大于最大 BPM');return}
      const host=document.getElementById('v2ActiveFilters');
      host?.querySelector('[data-filter-type="bpm"]')?.remove();
      host?.insertAdjacentHTML('beforeend',`<span class="v2-active-filter" data-filter-type="bpm" data-filter-value="BPM ${min}–${max}">BPM ${min}–${max} <button data-v2-remove-filter="BPM ${min}–${max}">${icon('x')}</button></span>`);
      document.querySelectorAll('.dropdown').forEach(node=>node.remove());
      return;
    }

    const addSearch=e.target.closest('[data-v2-add-search]');
    if(addSearch){
      e.preventDefault();e.stopPropagation();
      const track=tracks.find(t=>t.id===addSearch.dataset.v2AddSearch)||similarPool.find(t=>t.id===addSearch.dataset.v2AddSearch);
      if(track) openCatalogAddConfirm(track);
      return;
    }
    const confirmSearch=e.target.closest('[data-v2-confirm-search]');
    if(confirmSearch){
      e.preventDefault();e.stopPropagation();
      const id=confirmSearch.dataset.v2ConfirmSearch;
      const track=tracks.find(t=>t.id===id)||similarPool.find(t=>t.id===id);
      closeAuthorizationConfirm();
      document.querySelectorAll(`[data-v2-add-search="${id}"]`).forEach(btn=>{btn.disabled=true;btn.classList.add('done');btn.innerHTML=icon('check');btn.title='已加入曲库'});
      toast(`《${track?.title||'歌曲'}》已加入我的曲库`);
      return;
    }

    const catalogFilter=e.target.closest('[data-v2-catalog-filter]');
    if(catalogFilter){
      e.preventDefault();e.stopPropagation();
      const items=['全部来源批次','9 月户外旅行增量','无人机首发第一轮','经典内容盘活','首批 API 曲库'];
      showDropdown(catalogFilter,`<div class="dropdown-title">来源批次</div>${items.map((item,i)=>`<button class="dropdown-item ${i===0?'active':''}" data-v2-filter-value="${item}">${item}</button>`).join('')}`);
      return;
    }
    const dateRange=e.target.closest('[data-v2-date-range]');
    if(dateRange){
      e.preventDefault();e.stopPropagation();
      showDropdown(dateRange,`<div class="dropdown-title">加入时间</div>
        <div class="v2-date-range-pop">
          <label><span>开始日期</span><input id="v2DateStart" type="date" value="2026-08-18"></label>
          <span class="v2-date-sep">至</span>
          <label><span>结束日期</span><input id="v2DateEnd" type="date" value="2026-09-18"></label>
        </div>
        <div class="v2-date-actions"><button class="btn btn-sm" data-v2-date-clear>清空</button><button class="btn btn-sm btn-primary" data-v2-date-apply>应用</button></div>`);
      return;
    }
    const filterValue=e.target.closest('[data-v2-filter-value]');
    if(filterValue){
      e.preventDefault();e.stopPropagation();
      document.querySelectorAll('.dropdown').forEach(node=>node.remove());
      toast(`已选择：${filterValue.dataset.v2FilterValue}`);
      return;
    }
    if(e.target.closest('[data-v2-date-clear]')){
      e.preventDefault();e.stopPropagation();
      const s=document.getElementById('v2DateStart');const ed=document.getElementById('v2DateEnd');
      if(s) s.value='';if(ed) ed.value='';
      return;
    }
    if(e.target.closest('[data-v2-date-apply]')){
      e.preventDefault();e.stopPropagation();
      const s=document.getElementById('v2DateStart')?.value;
      const ed=document.getElementById('v2DateEnd')?.value;
      if(!s||!ed){toast('请选择完整的开始和结束日期');return}
      if(s>ed){toast('开始日期不能晚于结束日期');return}
      document.querySelectorAll('.dropdown').forEach(node=>node.remove());
      toast(`已筛选加入时间：${s} ～ ${ed}`);
      return;
    }
    const download=e.target.closest('[data-v2-download]');
    if(download){
      e.preventDefault();e.stopPropagation();
      toast('已开始准备下载，可选择 MP3 / WAV');
      return;
    }
    const similar=e.target.closest('[data-v2-similar]');
    if(similar){
      e.preventDefault();e.stopPropagation();
      const id=similar.dataset.v2Similar;
      const slot=document.querySelector(`[data-v2-similar-slot="${id}"]`);
      document.querySelectorAll('.v2-similar-slot').forEach(node=>{if(node!==slot) node.innerHTML=''});
      if(slot){
        const opened=slot.dataset.open==='1';
        slot.innerHTML=opened?'':similarResultsPanel(id,similar.dataset.trackTitle);
        slot.dataset.open=opened?'0':'1';
        slot.scrollIntoView?.({behavior:'smooth',block:'nearest'});
      }
      return;
    }
    const similarClose=e.target.closest('[data-v2-similar-close]');
    if(similarClose){
      e.preventDefault();e.stopPropagation();
      const slot=document.querySelector(`[data-v2-similar-slot="${similarClose.dataset.v2SimilarClose}"]`);
      if(slot){slot.innerHTML='';slot.dataset.open='0'}
      return;
    }
    const detailSimilar=e.target.closest('[data-v2-detail-similar]');
    if(detailSimilar){
      e.preventDefault();e.stopPropagation();
      const host=document.getElementById('v2DetailSimilar');
      if(host){
        host.innerHTML=similarResultsPanel(detailSimilar.dataset.v2DetailSimilar,detailSimilar.dataset.trackTitle);
        host.scrollIntoView?.({behavior:'smooth',block:'start'});
      }
      return;
    }
    const detail=e.target.closest('[data-v2-detail]');
    if(detail){
      e.preventDefault();e.stopPropagation();
      v2.trackDetailId=detail.dataset.v2Detail;
      v2.trackDetailMode=state.route==='catalog'?'search':'authorized';
      routeTo('track-detail');
      return;
    }
    const addAuth=e.target.closest('[data-v2-add-auth]');
    if(addAuth){
      e.preventDefault();e.stopPropagation();
      const track=similarPool.find(t=>t.id===addAuth.dataset.v2AddAuth);
      if(track) openAuthorizationConfirm(track);
      return;
    }
    const confirmAuth=e.target.closest('[data-v2-confirm-auth]');
    if(confirmAuth){
      e.preventDefault();e.stopPropagation();
      const id=confirmAuth.dataset.v2ConfirmAuth;
      const track=similarPool.find(t=>t.id===id);
      v2.authorizedFromSimilar.add(id);
      document.querySelectorAll(`[data-v2-add-auth="${id}"]`).forEach(btn=>{btn.textContent='已加入';btn.disabled=true;btn.classList.add('done')});
      closeAuthorizationConfirm();
      toast(`《${track?.title||'歌曲'}》已加入授权曲库`);
      return;
    }
    if(e.target.closest('[data-v2-cancel-auth]')||e.target.closest('.v2-confirm-backdrop')){
      e.preventDefault();e.stopPropagation();closeAuthorizationConfirm();return;
    }
    const action=e.target.closest('[data-v2-action]')?.dataset.v2Action;
    if(action==='confirm-selection'){e.preventDefault();e.stopPropagation();toast(`已确认本轮选择，共 ${v2.selectedTracks.size} 首`);return}
    if(action==='show-cooperation'){
      e.preventDefault();e.stopPropagation();
      document.querySelectorAll('.v2-manage-nav button').forEach(b=>b.classList.remove('active'));e.target.closest('button').classList.add('active');
      const panel=document.getElementById('v2ManagePanel');if(panel) panel.innerHTML=cooperationPanel();
    }
  },true);

  document.addEventListener('input',e=>{
    if(e.target?.matches('[data-v2-filter-search]')){
      const q=e.target.value.trim().toLowerCase();
      const panel=e.target.closest('.v2-filter-popover');
      panel?.querySelectorAll('.v2-filter-option').forEach(option=>{
        option.hidden=!!q && !option.textContent.toLowerCase().includes(q);
      });
      panel?.querySelectorAll('.v2-filter-group').forEach(group=>{
        group.hidden=[...group.querySelectorAll('.v2-filter-option')].every(option=>option.hidden);
      });
      return;
    }
    if(!['myCatalogKeyword','catalogSearchInput'].includes(e.target?.id)) return;
    const q=e.target.value.trim().toLowerCase();
    let visible=0;
    document.querySelectorAll('[data-catalog-search]').forEach(row=>{
      const show=!q||row.dataset.catalogSearch.includes(q);
      row.hidden=!show;
      if(show) visible++;
    });
    const empty=document.getElementById(e.target.id==='catalogSearchInput'?'catalogSearchEmpty':'myCatalogEmpty');
    if(empty) empty.hidden=visible>0;
  });

  renderNav();
  renderPage();
  syncPreviewButtons();
})();
