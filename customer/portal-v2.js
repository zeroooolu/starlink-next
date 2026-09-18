(() => {
  const v2 = {
    selectedTracks: new Set(['ST-310284','ST-401237','ST-229850']),
    authorizedFromSimilar: new Set(),
    trackDetailId: 'ST-310284',
    trackDetailMode: 'authorized',
    trackDetailReturnRoute: 'my-catalog',
    trackDetailReturnLabel: '我的曲库',
    previewTrackId: null,
    previewPaused: false,
    discoverCategoryKey: 'healing',
    discoverSubcategory: '白噪音疗愈',
    discoverPlaylistId: 'healing-city',
    aiStage: 'idle',
    aiQuery: '',
    aiSearchToken: 0,
    activeRequirementId: 'REQ-20260915-024',
    activeDeliveryId: 'DLV-20260915-0176',
    deliverySelections: {
      'DLV-20260915-0176': new Set(['ST-310284','ST-284911','ST-401237','ST-229850','ST-376612','ST-194720'])
    },
    developerSecretVisible: false,
    agentConnections: new Set(['chatgpt','claude']),
    agentStep: {},
  };

  const requests = [
    {
      id:'REQ-20260916-028',title:'户外旅行音乐周更',project:'Insta360 内容音乐',
      brief:'每周补充适合户外、旅行、运动相机视频的音乐，优先热门、耳熟、节奏感强的内容。',
      tags:['户外','旅行','运动','热门优先','全球可用'],target:'7–8 首',due:'2026-09-18',
      submitted:'2026-09-16 09:15',status:'处理中',stage:3,updated:'今天 14:21',
      deliveries:['DLV-20260916-0182'],note:'本周优先补骑行与山野画面，女声占比可以少一些。'
    },
    {
      id:'REQ-20260915-024',title:'无人机首发配乐',project:'影石无人机音乐',
      brief:'为无人机首发内容准备一批大气、开阔、有空间感的航拍配乐，整体国际化，避免过强人声。',
      tags:['无人机','航拍','大气','开阔','弱人声'],target:'20 首',due:'2026-09-20',
      submitted:'2026-09-15 10:42',status:'待我处理',stage:4,updated:'昨天 18:03',
      deliveries:['DLV-20260915-0176'],note:'希望首轮先提供 30 首左右候选，确认方向后再补第二轮。'
    },
    {
      id:'REQ-20260910-017',title:'Ace Pro 秋季运动内容',project:'Ace Pro 内容音乐',
      brief:'秋季运动内容使用，偏极限运动、速度和户外氛围，节奏明显、国际化。',
      tags:['运动','极限','强节奏','国际化'],target:'12 首',due:'2026-09-19',
      submitted:'2026-09-10 11:08',status:'待我处理',stage:4,updated:'09-16 11:42',
      deliveries:['DLV-20260914-0149'],note:'优先无明显歌词内容。'
    },
    {
      id:'REQ-20260909-015',title:'中秋旅行内容',project:'Insta360 内容音乐',
      brief:'中秋假期旅行内容配乐，温暖、有节日氛围但不过于传统。',
      tags:['旅行','温暖','节日','华人市场'],target:'8 首',due:'2026-09-12',
      submitted:'2026-09-09 09:31',status:'已完成',stage:5,updated:'09-12 16:06',
      deliveries:['DLV-20260912-015'],note:''
    },
    {
      id:'REQ-20260903-009',title:'经典耳熟内容盘活',project:'Insta360 内容音乐',
      brief:'补一批经典、耳熟、适合短视频的成熟内容，优先平台高热歌曲。',
      tags:['经典','耳熟','短视频','高热'],target:'30 首',due:'2026-09-08',
      submitted:'2026-09-03 14:20',status:'已完成',stage:5,updated:'09-08 15:18',
      deliveries:['DLV-20260908-009'],note:''
    }
  ];

  const deliveries = [
    {
      id:'DLV-20260915-0176',name:'无人机首发第一轮',requirementId:'REQ-20260915-024',requirement:'无人机首发配乐',
      mode:'selection',type:'试听选曲',round:'第 1 轮',count:30,listened:24,selected:6,rejected:8,
      date:'2026-09-15 18:03',due:'2026-09-20',status:'待我处理',result:'等待提交本轮选择',
      songIds:['ST-310284','ST-284911','ST-401237','ST-229850','ST-376612','ST-194720','ST-451083','ST-338107','ST-510101','ST-510102']
    },
    {
      id:'DLV-20260916-0182',name:'9 月户外旅行增量',requirementId:'REQ-20260916-028',requirement:'户外旅行音乐周更',
      mode:'api',type:'API 上架',round:'正式交付',count:8,listened:0,selected:8,rejected:0,
      date:'2026-09-16 14:21',due:'',status:'已完成',result:'8 首已上架至我的曲库',
      songIds:['ST-310284','ST-401237','ST-376612','ST-229850','ST-510103','ST-510105','ST-510107','ST-510109']
    },
    {
      id:'DLV-20260914-0149',name:'Ace Pro 秋季运动候选',requirementId:'REQ-20260910-017',requirement:'Ace Pro 秋季运动内容',
      mode:'selection',type:'试听选曲',round:'第 1 轮',count:24,listened:19,selected:9,rejected:6,
      date:'2026-09-14 18:03',due:'2026-09-19',status:'待我处理',result:'等待提交本轮选择',
      songIds:['ST-376612','ST-338107','ST-310284','ST-284911','ST-401237','ST-510104','ST-510106','ST-510108','ST-510110']
    },
    {
      id:'DLV-20260912-015',name:'中秋旅行正式交付',requirementId:'REQ-20260909-015',requirement:'中秋旅行内容',
      mode:'file',type:'文件交付',round:'正式交付',count:7,listened:7,selected:7,rejected:0,
      date:'2026-09-12 16:06',due:'',status:'已完成',result:'7 首正式文件已交付',
      songIds:['ST-194720','ST-229850','ST-451083','ST-510103','ST-510106','ST-510107','ST-510110']
    },
    {
      id:'DLV-20260908-009',name:'经典内容盘活',requirementId:'REQ-20260903-009',requirement:'经典耳熟内容盘活',
      mode:'api',type:'API 上架',round:'正式交付',count:22,listened:0,selected:22,rejected:0,
      date:'2026-09-08 15:18',due:'',status:'已完成',result:'22 首已上架至我的曲库',
      songIds:['ST-310284','ST-284911','ST-401237','ST-229850','ST-376612','ST-194720','ST-451083','ST-338107']
    }
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
      subcategories:['白噪音疗愈','乐音疗愈','状态唤醒与专注','助眠与休憩','冥想与身心灵疗愈','情绪与压力调节','禅乐','赫兹频率音乐','关系修复','脑波音乐','胎教音乐','ASMR','宠物疗愈'],
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
        {id:'healing-fire',group:'自然白噪音',title:'自然白噪音｜幽火静心',count:19},
        {id:'healing-flute',group:'器乐疗愈',subcategory:'乐音疗愈',title:'乐音疗愈｜清韵笛音',count:255},
        {id:'healing-zheng',group:'器乐疗愈',subcategory:'乐音疗愈',title:'乐音疗愈｜筝韵',count:23},
        {id:'healing-handpan',group:'器乐疗愈',subcategory:'乐音疗愈',title:'乐音疗愈｜手碟之音',count:92},
        {id:'healing-meditation',group:'冥想',subcategory:'冥想与身心灵疗愈',title:'冥想音乐',count:2865},
        {id:'healing-yoga',group:'冥想',subcategory:'冥想与身心灵疗愈',title:'瑜伽音乐',count:1931},
        {id:'healing-chakra',group:'冥想',subcategory:'冥想与身心灵疗愈',title:'脉轮音乐',count:588},
        {id:'healing-zen',group:'冥想',subcategory:'冥想与身心灵疗愈',title:'禅修音乐',count:787}
      ]
    },
    {
      key:'drama-music',title:'短剧配乐',count:83,
      subcategories:['逆袭重生','古装仙侠','女频情感','家庭治愈','奇异科幻','喜剧沙雕'],
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
        {id:'drama-family-life',group:'家庭治愈',title:'日常生活铺垫',count:206},
        {id:'drama-family-romance',group:'家庭治愈',title:'爱情与浪漫',count:80},
        {id:'drama-family-soft',group:'家庭治愈',title:'柔情治愈',count:156},
        {id:'drama-future',group:'奇异科幻',title:'未来科幻',count:96},
        {id:'drama-funny',group:'喜剧沙雕',title:'搞笑逗趣',count:100}
      ]
    },
    {
      key:'drama-sfx',title:'短剧音效',count:277,
      subcategories:['自然环境音效','城市环境音效','载具音效','人类音效','合成音效','体育运动音效','动物音效','武器音效'],
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
        {id:'sfx-whoosh',group:'转场音效',subcategory:'合成音效',title:'嗖声 Whoosh',count:379},
        {id:'sfx-hit',group:'转场音效',subcategory:'合成音效',title:'重音 Hit',count:442},
        {id:'sfx-scifi',group:'风格化音效',subcategory:'合成音效',title:'科幻音效',count:183},
        {id:'sfx-football',group:'球类运动',subcategory:'体育运动音效',title:'音效-足球',count:876},
        {id:'sfx-basketball',group:'球类运动',subcategory:'体育运动音效',title:'音效-篮球',count:796},
        {id:'sfx-ski',group:'冰雪运动',subcategory:'体育运动音效',title:'音效-滑雪',count:386},
        {id:'sfx-cricket',group:'昆虫类',subcategory:'动物音效',title:'音效-蟋蟀',count:208},
        {id:'sfx-cat',group:'哺乳动物',subcategory:'动物音效',title:'音效-猫',count:330},
        {id:'sfx-lion',group:'哺乳动物',subcategory:'动物音效',title:'音效-狮',count:323},
        {id:'sfx-sword',group:'武器音效',title:'音效-剑',count:1288}
      ]
    },
    {
      key:'game',title:'游戏配乐',count:33,
      subcategories:['音乐节奏类游戏','建造生存类游戏','模拟经营类游戏','休闲卡牌类游戏','体育竞技类游戏','其他类型游戏配乐','世界观','人物曲','Loopable游戏配乐'],
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
        {id:'game-task',group:'其他类型游戏配乐',title:'任务行动 BGM',count:51},
        {id:'game-romance',group:'其他类型游戏配乐',title:'恋爱类游戏',count:20},
        {id:'game-cyberpunk',group:'世界观',title:'赛博朋克',count:6},
        {id:'game-loopable',group:'Loopable游戏配乐',title:'Loopable',count:6890}
      ]
    },
    {
      key:'fitness',title:'运动健身',count:32,
      subcategories:['动感单车','跑步行走','冥想瑜伽','舞蹈健身','太极&气功','中老年健体'],
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
      subcategories:['综艺配乐','有声书配乐','节日音乐','企业宣传'],
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

  function aiResultTrackRow(track,index){
    const tags=[track.genre.split(' · ')[0],track.mood[0],track.mood[1],track.vocal].filter(Boolean);
    return `<div class="v2-catalog-track-wrap" data-v2-track-wrap="${track.id}">
      <div class="v2-catalog-track v2-search-track v2-ai-track-row">
        <div class="v2-catalog-track-main">
          <div class="v2-catalog-cover">${cover(track,index)}</div>
          <div class="v2-catalog-copy">
            <div class="v2-catalog-title-row"><strong>${track.title}</strong><span>${track.duration}</span></div>
            <small>${track.artist} · ${track.id}</small>
            <div class="v2-catalog-tags">${tags.map(tag=>`<span>${tag}</span>`).join('')}</div>
          </div>
        </div>
        <div class="v2-wave-cell">
          ${catalogWave(track,index)}
          <small><strong class="v2-ai-match">${track.match||'88%'} 匹配</strong> · ${track.genre} · ${track.bpm} BPM</small>
        </div>
        <div class="v2-catalog-actions">
          <button class="v2-track-action play-track" data-track="${track.id}" title="${state.playing===track.id?'暂停':'播放'}">${icon(state.playing===track.id?'pause':'play')}</button>
          <button class="v2-track-action v2-add-search" data-v2-add-search="${track.id}" title="加入授权">${icon('plus')}</button>
          <button class="v2-track-action" data-v2-similar="${track.id}" data-track-title="${track.title}" title="找相似">${icon('sparkles')}</button>
        </div>
      </div>
      <div class="v2-similar-slot" data-v2-similar-slot="${track.id}"></div>
    </div>`;
  }

  function aiGuideContent(){
    const examples=[
      ['产品发布','适合新能源车发布会，科技感、未来感，不要太激烈，100–120 BPM，纯音乐'],
      ['运动短视频','跑步短视频用，节奏明显、有能量，120 BPM 左右，不要太吵'],
      ['品牌广告','高级、克制、有质感的品牌广告配乐，希望有钢琴和轻电子元素'],
      ['疗愈空间','适合冥想和放松空间，慢速、柔和、纯音乐，避免明显鼓点']
    ];
    return `<div class="v2-ai-guide">
      <div class="v2-ai-guide-icon">${icon('sparkles')}</div>
      <h2>描述你想找的音乐</h2>
      <p>不用记标签，像和音乐编辑沟通一样说清楚需求。描述得越具体，结果越准确。</p>
      <div class="v2-ai-guide-dimensions">
        <span><strong>场景</strong>发布会、短视频、运动、游戏…</span>
        <span><strong>感觉</strong>高级、轻松、热血、治愈…</span>
        <span><strong>节奏</strong>慢速、120 BPM、不要太激烈…</span>
        <span><strong>声音</strong>纯音乐、女声、钢琴、电子…</span>
      </div>
      <div class="v2-ai-example-title">试试这样描述</div>
      <div class="v2-ai-example-list">
        ${examples.map(([label,text])=>`<button data-ai-prompt="${text}"><span>${label}</span><p>${text}</p>${icon('arrow-up-right')}</button>`).join('')}
      </div>
    </div>`;
  }

  function aiConversationContent(){
    const loading=v2.aiStage==='searching';
    return `<div class="v2-ai-conversation">
      <div class="message">
        <span class="message-avatar">KH</span>
        <div class="message-bubble">${v2.aiQuery}</div>
      </div>
      <div class="message ai">
        <span class="message-avatar">${icon('sparkles')}</span>
        <div class="message-bubble">
          ${loading
            ? `正在理解你的描述并查找合适的音乐<span class="v2-thinking-dots"><i></i><i></i><i></i></span>`
            : `找到了一批更接近你描述的结果。你可以继续补充要求，我会基于当前结果继续调整。<div class="query-logic"><span class="tag">场景 · 品牌/内容</span><span class="tag">情绪 · 未来/高级</span><span class="tag">节奏 · 中速</span><span class="tag">优先纯音乐</span></div>`}
        </div>
      </div>
    </div>`;
  }

  function aiEmptyResults(){
    return `<div class="v2-ai-empty-state">
      <span class="v2-ai-empty-icon">${icon('search')}</span>
      <h2>描述需求后开始找歌</h2>
      <p>AI 会理解你的场景、情绪、节奏、人声和参考方向，再从当前可访问曲库中推荐结果。</p>
      <div class="v2-ai-empty-hint"><span>${icon('shield')}</span>搜索范围自动遵循当前客户授权条件</div>
    </div>`;
  }

  function aiSearchingResults(){
    const steps=[
      ['理解需求','识别使用场景、情绪和声音偏好'],
      ['转换条件','映射到曲风、标签、BPM、人声等搜索条件'],
      ['搜索曲库','从当前客户可访问内容中召回候选歌曲'],
      ['匹配排序','结合语义与音乐特征重新排序结果']
    ];
    return `<div class="v2-ai-searching-state">
      <div class="v2-ai-search-orbit"><span>${icon('sparkles')}</span><i></i><i></i></div>
      <span class="v2-ai-search-kicker">CATALOG AI</span>
      <h2>正在为你查找合适的音乐</h2>
      <p>“${v2.aiQuery}”</p>
      <div class="v2-ai-search-steps">
        ${steps.map(([title,desc],index)=>`<div class="v2-ai-search-step" style="--delay:${index*180}ms"><span class="v2-ai-step-status">${index<2?icon('check'):'<i></i>'}</span><div><strong>${title}</strong><small>${desc}</small></div></div>`).join('')}
      </div>
      <div class="v2-ai-searching-note">通常很快即可完成，请保持当前页面</div>
    </div>`;
  }

  function aiResultsContent(){
    return `<div class="v2-ai-result-summary">
        <span>${icon('sparkles')}</span>
        <p>AI 已结合你的描述完成语义匹配，并从当前可访问曲库中筛出 <strong>32 首</strong> 推荐结果。</p>
      </div>
      <div class="v2-catalog-browser v2-ai-result-browser">
        <div class="v2-catalog-list-head">
          <span>歌曲</span><span>波形 / 匹配信息</span><span>操作</span>
        </div>
        <div class="v2-catalog-track-list">
          ${tracks.slice(0,8).map((track,index)=>aiResultTrackRow(track,index)).join('')}
        </div>
        <button class="v2-load-more">加载更多推荐结果</button>
      </div>`;
  }

  function aiV2Page(){
    const idle=v2.aiStage==='idle';
    const searching=v2.aiStage==='searching';
    return `${pageHead('AI 找歌','用自然语言描述需求，让 AI 从当前可访问曲库中帮你找到更合适的音乐。','')}
      <div class="v2-ai-layout ${idle?'is-idle':''}">
        <section class="v2-ai-chat">
          <div class="v2-ai-chat-head">
            <div><strong>${idle?'AI 找歌':'找歌会话'}</strong><small>${idle?'先描述你的使用场景和音乐感觉':'可以继续补充条件调整结果'}</small></div>
            <span class="ai-badge">${icon('sparkles')} Catalog AI</span>
          </div>
          <div class="ai-thread v2-ai-thread ${idle?'is-guide':''}" id="aiThread">
            ${idle?aiGuideContent():aiConversationContent()}
          </div>
          ${idle?'':`<div class="ai-prompts v2-ai-prompts">
            <button class="prompt-chip" data-ai-prompt="再轻一点，不要电子感那么强">再轻一点</button>
            <button class="prompt-chip" data-ai-prompt="只要纯音乐，适合 15 秒短视频">适合 15 秒视频</button>
            <button class="prompt-chip" data-ai-prompt="节奏再明显一些，但不要更吵">加强节奏</button>
          </div>`}
          <div class="ai-compose v2-ai-compose ${idle?'is-primary':''}">
            <textarea id="aiInput" placeholder="${idle?'例如：适合新能源车发布会，未来感、有科技感，100–120 BPM，纯音乐':'继续补充，例如：更轻一点、加入钢琴、只要纯音乐……'}"></textarea>
            <div class="compose-actions">
              <div class="compose-left"><span class="v2-ai-input-tip">${idle?'可以直接描述，不需要填写筛选条件':'基于当前结果继续调整'}</span></div>
              <button class="btn btn-primary" id="aiSend" ${searching?'disabled':''}>${searching?'查找中':'开始找歌'} ${searching?'<span class="v2-button-loader"></span>':icon('send')}</button>
            </div>
          </div>
        </section>

        <section class="v2-ai-results ${idle?'is-empty':''} ${searching?'is-searching':''}">
          <div class="v2-ai-results-head">
            <div>
              <strong>${searching?'正在查找':idle?'推荐结果':'推荐结果'}</strong>
              <small>${searching?'正在分析你的描述':idle?'结果会显示在这里':'32 首 · 按匹配度排序'}</small>
            </div>
            ${v2.aiStage==='results'? `<button class="v2-sort-button">匹配度 ${icon('chevron-down')}</button>` : ''}
          </div>
          <div class="v2-ai-results-body">
            ${idle?aiEmptyResults():searching?aiSearchingResults():aiResultsContent()}
          </div>
        </section>
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

  function playlistSubcategory(section,item){
    if(item.subcategory) return item.subcategory;
    if(section.key==='healing') return '白噪音疗愈';
    return item.group;
  }

  function officialSubcategoryCard(section,subcategory,sectionIndex,itemIndex){
    return `<article class="v2-official-playlist v2-subcategory-card" data-v2-subcategory-open="${subcategory}" data-v2-category-key="${section.key}">
      ${playlistArt(sectionIndex,itemIndex)}
      <div class="v2-official-playlist-copy">
        <strong>${subcategory}</strong>
        <small>${section.title} · 二级分类</small>
      </div>
      <span class="v2-playlist-open">${icon('arrow-up-right')}</span>
    </article>`;
  }

  function officialPlaylistCard(section,item,sectionIndex,itemIndex){
    return `<article class="v2-official-playlist" data-v2-playlist="${item.id}">
      ${playlistArt(sectionIndex,itemIndex)}
      <div class="v2-official-playlist-copy">
        <strong>${item.title}</strong>
        <small>${item.group||playlistSubcategory(section,item)} · ${item.count.toLocaleString()} 首</small>
      </div>
      <span class="v2-playlist-open">${icon('arrow-up-right')}</span>
    </article>`;
  }

  function secondaryItems(section,subcategory){
    return section.playlists.filter(item=>playlistSubcategory(section,item)===subcategory);
  }

  function secondarySection(section,subcategory,sectionIndex){
    const items=secondaryItems(section,subcategory);
    if(!items.length) return '';
    return `<section class="v2-secondary-section">
      <div class="v2-secondary-head">
        <div><h2>${subcategory}</h2><p>${section.title} · ${items.length} 个示例歌单</p></div>
        <button class="v2-official-more" data-v2-subcategory-open="${subcategory}" data-v2-category-key="${section.key}">查看全部 ${icon('arrow-up-right')}</button>
      </div>
      <div class="v2-official-grid">
        ${items.slice(0,6).map((item,itemIndex)=>officialPlaylistCard(section,item,sectionIndex,itemIndex)).join('')}
      </div>
    </section>`;
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
        ${section.subcategories.slice(0,6).map((subcategory,itemIndex)=>officialSubcategoryCard(section,subcategory,sectionIndex,itemIndex)).join('')}
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

      ${officialPlaylistSections.map(officialPlaylistSection).join('')}`;
  }

  function discoverCategoryPage(){
    const section=findDiscoverCategory(v2.discoverCategoryKey);
    const sectionIndex=officialPlaylistSections.indexOf(section);
    const sections=(section.subcategories||[]).map(name=>secondarySection(section,name,sectionIndex)).filter(Boolean).join('');
    return `<div class="v2-library-breadcrumb"><button data-route="discover">分类浏览</button><span>/</span><strong>${section.title}</strong></div>
      <section class="v2-category-hero">
        <div>
          <span>OFFICIAL COLLECTION</span>
          <h1>${section.title}</h1>
          <p>${section.description}</p>
        </div>
        <div class="v2-category-count"><strong>${section.count}</strong><small>个官方曲库</small></div>
      </section>
      <div class="v2-secondary-index">
        ${(section.subcategories||[]).map(name=>`<button data-v2-subcategory-open="${name}" data-v2-category-key="${section.key}">${name}</button>`).join('')}
      </div>
      ${sections}`;
  }

  function discoverSubcategoryPage(){
    const section=findDiscoverCategory(v2.discoverCategoryKey);
    const sectionIndex=officialPlaylistSections.indexOf(section);
    const subcategory=v2.discoverSubcategory;
    const items=secondaryItems(section,subcategory);
    return `<div class="v2-library-breadcrumb">
        <button data-route="discover">分类浏览</button><span>/</span>
        <button data-v2-category="${section.key}">${section.title}</button><span>/</span>
        <strong>${subcategory}</strong>
      </div>
      <section class="v2-subcategory-hero">
        <div><span>${section.title}</span><h1>${subcategory}</h1><p>浏览「${section.title}」下「${subcategory}」分类的全部官方歌单。</p></div>
        <div class="v2-category-count"><strong>${items.length}</strong><small>个示例歌单</small></div>
      </section>
      <div class="v2-category-list-head">
        <div><h2>全部歌单</h2><p>点击任意歌单进入歌曲列表。</p></div>
      </div>
      <div class="v2-category-playlist-grid">
        ${items.map((item,itemIndex)=>officialPlaylistCard(section,item,sectionIndex,itemIndex)).join('')}
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
    const subcategory=playlistSubcategory(section,playlist);
    const songs=playlistTracksFor(playlist.id);
    const recommendations=section.playlists.filter(item=>item.id!==playlist.id && playlistSubcategory(section,item)===subcategory).slice(0,6);
    return `<div class="v2-library-breadcrumb">
        <button data-route="discover">分类浏览</button><span>/</span>
        <button data-v2-category="${section.key}">${section.title}</button><span>/</span>
        <button data-v2-subcategory-open="${subcategory}" data-v2-category-key="${section.key}">${subcategory}</button><span>/</span>
        <strong>${playlist.title}</strong>
      </div>
      <section class="v2-playlist-detail-hero">
        <div class="v2-playlist-detail-art">${playlistArt(sectionIndex,section.playlists.indexOf(playlist))}</div>
        <div class="v2-playlist-detail-copy">
          <span>官方歌单 · ${section.title} / ${subcategory}</span>
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
        <div class="v2-category-list-head"><div><h2>推荐歌单</h2><p>继续浏览「${subcategory}」下的其他官方歌单。</p></div></div>
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
      <button class="v2-back" data-route="${v2.trackDetailReturnRoute}">← 返回${v2.trackDetailReturnLabel}</button>
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

  function requirementStatusPill(status){
    const cls=status==='已完成'?'done':status==='待我处理'?'action':status==='待受理'?'new':'doing';
    return `<span class="v2-workflow-status ${cls}">${status}</span>`;
  }

  function requirementNextAction(r){
    if(r.status==='待我处理') return '<strong>需要你处理交付</strong><small>试听、挑选或确认本轮内容</small>';
    if(r.status==='处理中') return '<strong>STARLINK 正在处理</strong><small>有新交付后会在这里通知你</small>';
    if(r.status==='待受理') return '<strong>等待受理</strong><small>需求已提交</small>';
    return '<strong>已完成</strong><small>相关交付已形成结果</small>';
  }

  function requirementsPage(){
    const actionCount=requests.filter(r=>r.status==='待我处理').length;
    const doingCount=requests.filter(r=>['处理中','待受理'].includes(r.status)).length;
    const doneCount=requests.filter(r=>r.status==='已完成').length;
    return `${pageHead('内容需求','向 STARLINK 发起内容需求，并跟踪从受理、处理到交付完成的全过程。',`<button class="btn btn-primary" data-v2-new-requirement>${icon('plus')}发起内容需求</button>`)}
      <div class="v2-workflow-summary">
        <div><span>待我处理</span><strong>${actionCount}</strong><small>已有交付等待试听或确认</small></div>
        <div><span>处理中</span><strong>${doingCount}</strong><small>STARLINK 正在准备内容</small></div>
        <div><span>已完成</span><strong>${doneCount}</strong><small>需求已经形成最终交付</small></div>
      </div>

      <section class="v2-workflow-card">
        <div class="v2-workflow-toolbar">
          <div class="v2-request-tabs">
            <button class="v2-request-tab active">全部 ${requests.length}</button>
            <button class="v2-request-tab">待我处理 ${actionCount}</button>
            <button class="v2-request-tab">处理中 ${doingCount}</button>
            <button class="v2-request-tab">已完成 ${doneCount}</button>
          </div>
          <div class="v2-search compact">${icon('search')}<input placeholder="搜索需求名称 / 需求编号" /></div>
        </div>
        <div class="v2-requirement-list">
          ${requests.map(requirementListItem).join('')}
        </div>
      </section>`;
  }

  function requirementListItem(r){
    const deliveryText=r.deliveries.length?`${r.deliveries.length} 次交付`:'尚未产生交付';
    return `<article class="v2-requirement-item" data-v2-requirement="${r.id}">
      <div class="v2-requirement-main">
        <div class="v2-requirement-title"><strong>${r.title}</strong>${requirementStatusPill(r.status)}</div>
        <small>${r.id} · ${r.project} · 提交于 ${r.submitted}</small>
        <p>${r.brief}</p>
        <div class="v2-requirement-tags">${r.tags.slice(0,4).map(x=>`<span>${x}</span>`).join('')}</div>
      </div>
      <div class="v2-requirement-meta"><span>目标</span><strong>${r.target}</strong><small>期望 ${r.due}</small></div>
      <div class="v2-requirement-meta"><span>关联交付</span><strong>${deliveryText}</strong><small>最近更新 ${r.updated}</small></div>
      <div class="v2-requirement-next">${requirementNextAction(r)}</div>
      <button class="v2-row-arrow" title="查看需求">${icon('arrow-up-right')}</button>
    </article>`;
  }

  function requirementProgress(stage){
    const steps=['需求已提交','已受理','准备内容','客户处理','完成交付'];
    return `<div class="v2-customer-flow">${steps.map((name,index)=>{
      const n=index+1,done=n<stage,current=n===stage;
      return `<div class="${done?'done':''} ${current?'current':''}"><span>${done?icon('check'):n}</span><strong>${name}</strong></div>${index<steps.length-1?'<i></i>':''}`;
    }).join('')}</div>`;
  }

  function requirementDeliveryCard(d){
    const needsAction=d.status==='待我处理';
    return `<div class="v2-linked-delivery" data-v2-delivery="${d.id}">
      <span class="v2-linked-icon">${icon(d.mode==='api'?'code':d.mode==='file'?'download':'music')}</span>
      <div class="v2-linked-main">
        <div><strong>${d.name}</strong><span>${d.type}</span></div>
        <small>${d.round} · ${d.count} 首 · ${d.date}</small>
      </div>
      <div class="v2-linked-result"><strong>${d.result}</strong><small>${needsAction?'需要你处理':'无需处理'}</small></div>
      <button class="btn btn-sm ${needsAction?'btn-primary':''}">${needsAction?'去处理':'查看交付'}</button>
    </div>`;
  }

  function requirementDetailPage(){
    const r=requests.find(x=>x.id===v2.activeRequirementId)||requests[0];
    const linked=deliveries.filter(d=>r.deliveries.includes(d.id));
    return `<div class="v2-library-breadcrumb"><button data-route="requirements">内容需求</button><span>/</span><strong>${r.title}</strong></div>
      <section class="v2-workflow-detail-hero">
        <div>
          <div class="v2-detail-title-line"><h1>${r.title}</h1>${requirementStatusPill(r.status)}</div>
          <p>${r.id} · ${r.project}</p>
        </div>
        ${r.status==='待我处理'&&linked[0]?`<button class="btn btn-primary" data-v2-delivery="${linked[0].id}">${icon('music')}处理最新交付</button>`:''}
      </section>

      <section class="v2-progress-card">
        ${requirementProgress(r.stage)}
      </section>

      <div class="v2-workflow-detail-grid">
        <section class="v2-workflow-panel">
          <div class="v2-panel-title"><div><h2>我的需求</h2><p>你提交给 STARLINK 的原始内容需求。</p></div><button class="btn btn-sm" data-v2-add-requirement-note>补充说明</button></div>
          <div class="v2-requirement-brief">${r.brief}</div>
          <div class="v2-requirement-tags large">${r.tags.map(x=>`<span>${x}</span>`).join('')}</div>
          <div class="v2-detail-kv-grid">
            <div><span>目标数量</span><strong>${r.target}</strong></div>
            <div><span>期望完成</span><strong>${r.due}</strong></div>
            <div><span>提交时间</span><strong>${r.submitted}</strong></div>
            <div><span>关联交付</span><strong>${linked.length} 次</strong></div>
          </div>
          ${r.note?`<div class="v2-requirement-note"><span>补充说明</span><p>${r.note}</p></div>`:''}
        </section>

        <aside class="v2-workflow-panel">
          <div class="v2-panel-title"><div><h2>处理动态</h2><p>只展示与你相关的关键进展。</p></div></div>
          <div class="v2-customer-timeline">
            <div class="done"><i></i><div><strong>需求已提交</strong><small>${r.submitted}</small></div></div>
            <div class="done"><i></i><div><strong>STARLINK 已受理</strong><small>正在按需求准备内容</small></div></div>
            ${linked.length?`<div class="current"><i></i><div><strong>已创建 ${linked.length} 次交付</strong><small>最新：${linked[0].name}</small></div></div>`:''}
            ${r.status==='已完成'?'<div class="done"><i></i><div><strong>需求已完成</strong><small>最终交付结果已确认</small></div></div>':''}
          </div>
        </aside>
      </div>

      <section class="v2-workflow-panel v2-linked-section">
        <div class="v2-panel-title"><div><h2>关联交付</h2><p>STARLINK 会在处理需求过程中创建一到多次交付；试听和挑选都在交付中完成。</p></div><span>${linked.length} 次</span></div>
        <div class="v2-linked-delivery-list">
          ${linked.length?linked.map(requirementDeliveryCard).join(''):'<div class="v2-workflow-empty small">当前还没有交付，STARLINK 处理后会显示在这里。</div>'}
        </div>
      </section>`;
  }

  function deliveryStatusPill(status){
    const cls=status==='已完成'?'done':status==='待我处理'?'action':status==='已提交'?'submitted':'doing';
    return `<span class="v2-workflow-status ${cls}">${status}</span>`;
  }

  function deliveriesPage(){
    const actionCount=deliveries.filter(d=>d.status==='待我处理').length;
    const doneCount=deliveries.filter(d=>d.status==='已完成').length;
    return `${pageHead('交付记录','查看 STARLINK 基于内容需求提供的试听歌单、API 上架和正式文件交付。','')}
      <div class="v2-workflow-summary delivery">
        <div><span>待我处理</span><strong>${actionCount}</strong><small>需要试听、挑选或提交反馈</small></div>
        <div><span>已完成</span><strong>${doneCount}</strong><small>已经形成正式交付结果</small></div>
        <div><span>累计交付</span><strong>${deliveries.length}</strong><small>包含试听、API 与文件交付</small></div>
      </div>

      <section class="v2-workflow-card">
        <div class="v2-workflow-toolbar">
          <div class="v2-request-tabs"><button class="v2-request-tab active">全部</button><button class="v2-request-tab">待我处理 ${actionCount}</button><button class="v2-request-tab">已完成 ${doneCount}</button></div>
          <div class="v2-filter-row"><div class="v2-search compact">${icon('search')}<input placeholder="搜索交付名称 / 需求名称" /></div><button class="v2-filter">交付类型 ${icon('chevron-down')}</button></div>
        </div>
        <div class="v2-delivery-list">${deliveries.map(deliveryListItem).join('')}</div>
      </section>`;
  }

  function deliveryListItem(d){
    const needsAction=d.status==='待我处理';
    const modeIcon=d.mode==='api'?'code':d.mode==='file'?'download':'music';
    const progress=d.mode==='selection'
      ?`${d.count} 首候选 · 已试听 ${d.listened} · 已选 ${d.selected}`
      :d.result;
    return `<article class="v2-delivery-item" data-v2-delivery="${d.id}">
      <span class="v2-delivery-mode ${d.mode}">${icon(modeIcon)}</span>
      <div class="v2-delivery-main">
        <div class="v2-delivery-title"><strong>${d.name}</strong>${deliveryStatusPill(d.status)}</div>
        <small>${d.id} · 来自需求「${d.requirement}」</small>
        <div class="v2-delivery-progress-text">${progress}</div>
      </div>
      <div class="v2-delivery-meta"><span>交付类型</span><strong>${d.type}</strong><small>${d.round}</small></div>
      <div class="v2-delivery-meta"><span>${needsAction?'处理截止':'交付时间'}</span><strong>${needsAction?d.due:d.date.split(' ')[0]}</strong><small>更新 ${d.date}</small></div>
      <div class="v2-delivery-result"><strong>${needsAction?'等待你的处理':d.result}</strong><small>${needsAction?'完成后结果会回到关联需求':'交付闭环已记录'}</small></div>
      <button class="btn btn-sm ${needsAction?'btn-primary':''}">${needsAction?'去处理':'查看'}</button>
    </article>`;
  }

  function deliverySongPool(d){
    const pool=[...tracks,...similarPool];
    return (d.songIds||[]).map(id=>pool.find(t=>t.id===id)).filter(Boolean);
  }

  function selectionDeliveryRow(track,index,d){
    const set=v2.deliverySelections[d.id]||(v2.deliverySelections[d.id]=new Set());
    const selected=set.has(track.id);
    const tags=[track.genre.split(' · ')[0],track.mood[0],track.mood[1],`${track.bpm} BPM`].filter(Boolean);
    return `<div class="v2-delivery-song ${selected?'selected':''}" data-v2-delivery-song="${track.id}">
      <div class="v2-catalog-track-main">
        <div class="v2-catalog-cover">${cover(track,index)}</div>
        <div class="v2-catalog-copy">
          <div class="v2-catalog-title-row"><strong>${track.title}</strong><span>${track.duration}</span></div>
          <small>${track.artist} · ${track.id}</small>
          <div class="v2-catalog-tags">${tags.map(x=>`<span>${x}</span>`).join('')}</div>
        </div>
      </div>
      <div class="v2-wave-cell">${catalogWave(track,index)}<small>${track.genre} · ${track.vocal}</small></div>
      <div class="v2-delivery-song-actions">
        <button class="v2-track-action play-track" data-track="${track.id}" title="播放">${icon(state.playing===track.id?'pause':'play')}</button>
        <button class="v2-select-delivery ${selected?'selected':''}" data-v2-delivery-select="${track.id}" data-delivery-id="${d.id}" ${d.status==='待我处理'?'':'disabled'}>${selected?icon('check'):''}<span>${selected?'已选择':d.status==='待我处理'?'选择':'未选择'}</span></button>
      </div>
    </div>`;
  }

  function readonlyDeliveryRow(track,index,d){
    const tags=[track.genre.split(' · ')[0],track.mood[0],`${track.bpm} BPM`].filter(Boolean);
    return `<div class="v2-delivery-song readonly">
      <div class="v2-catalog-track-main"><div class="v2-catalog-cover">${cover(track,index)}</div><div class="v2-catalog-copy"><div class="v2-catalog-title-row"><strong>${track.title}</strong><span>${track.duration}</span></div><small>${track.artist} · ${track.id}</small><div class="v2-catalog-tags">${tags.map(x=>`<span>${x}</span>`).join('')}</div></div></div>
      <div class="v2-wave-cell">${catalogWave(track,index)}<small>${track.genre} · ${track.vocal}</small></div>
      <div class="v2-delivery-song-actions"><button class="v2-track-action play-track" data-track="${track.id}" title="播放">${icon(state.playing===track.id?'pause':'play')}</button><span class="v2-result-check">${icon('check')}${d.mode==='api'?'已上架':'已交付'}</span></div>
    </div>`;
  }

  function deliveryDetailPage(){
    const d=deliveries.find(x=>x.id===v2.activeDeliveryId)||deliveries[0];
    const req=requests.find(x=>x.id===d.requirementId);
    const songs=deliverySongPool(d);
    if(!v2.deliverySelections[d.id] && d.mode==='selection') v2.deliverySelections[d.id]=new Set(songs.slice(0,d.selected).map(x=>x.id));
    const set=v2.deliverySelections[d.id]||new Set();
    const isSelection=d.mode==='selection';
    const canSelect=isSelection&&d.status==='待我处理';
    return `<div class="v2-library-breadcrumb"><button data-route="deliveries">交付记录</button><span>/</span><button data-v2-requirement="${d.requirementId}">${d.requirement}</button><span>/</span><strong>${d.name}</strong></div>
      <section class="v2-delivery-detail-hero">
        <div>
          <div class="v2-detail-title-line"><h1>${d.name}</h1>${deliveryStatusPill(d.status)}</div>
          <p>${d.id} · ${d.type} · ${d.round}</p>
        </div>
        <button class="btn" data-v2-requirement="${d.requirementId}">查看来源需求</button>
      </section>

      <div class="v2-delivery-detail-summary">
        <div><span>内容数量</span><strong>${d.count} 首</strong><small>本次交付快照</small></div>
        ${isSelection?`<div><span>已试听</span><strong>${d.listened} 首</strong><small>当前试听进度</small></div><div><span>已选择</span><strong id="v2DeliverySelectedCount">${set.size} 首</strong><small>可继续调整</small></div><div><span>处理截止</span><strong>${d.due}</strong><small>提交本轮结果</small></div>`
        :`<div><span>交付方式</span><strong>${d.type}</strong><small>${d.mode==='api'?'自动同步':'正式文件'}</small></div><div><span>交付时间</span><strong>${d.date.split(' ')[0]}</strong><small>${d.date.split(' ')[1]||''}</small></div><div><span>结果</span><strong>${d.mode==='api'?'已上架':'已完成'}</strong><small>无需你处理</small></div>`}
      </div>

      ${canSelect
        ?`<div class="v2-delivery-action-banner"><span>${icon('music')}</span><div><strong>请完成本轮试听和挑选</strong><p>这是需求「${d.requirement}」的${d.round}内容。选好后提交本轮结果，STARLINK 会根据你的选择继续处理需求。</p></div><span class="v2-banner-deadline">截止 ${d.due}</span></div>`
        :isSelection
          ?`<div class="v2-delivery-result-banner"><span>${icon('check')}</span><div><strong>本轮选择已提交</strong><p>你已经提交 ${set.size} 首选择，STARLINK 正在基于本轮结果继续处理关联需求。</p></div><button class="btn btn-sm" data-v2-requirement="${d.requirementId}">查看需求进度</button></div>`
          :`<div class="v2-delivery-result-banner"><span>${icon(d.mode==='api'?'code':'check')}</span><div><strong>${d.result}</strong><p>${d.mode==='api'?'这批歌曲已经自动同步到你的授权曲库，无需额外确认。':'正式交付已经完成，你可以查看本次交付内容。'}</p></div>${d.mode==='api'?'<button class="btn btn-sm" data-route="my-catalog">查看我的曲库</button>':'<button class="btn btn-sm" data-v2-download-delivery>获取交付文件</button>'}</div>`}

      <section class="v2-workflow-panel v2-delivery-content-panel">
        <div class="v2-panel-title"><div><h2>${isSelection?'本轮试听歌单':'本次交付内容'}</h2><p>${isSelection?'播放并选择你希望保留的歌曲；未提交前可以反复调整。':'本次交付已经形成固定内容快照。'}</p></div><span>${d.count} 首</span></div>
        <div class="v2-delivery-song-head"><span>歌曲</span><span>波形 / 音乐信息</span><span>${isSelection?'我的选择':'结果'}</span></div>
        <div class="v2-delivery-song-list">${songs.map((track,index)=>isSelection?selectionDeliveryRow(track,index,d):readonlyDeliveryRow(track,index,d)).join('')}</div>
        ${canSelect?`<div class="v2-selection-submit">
          <div><strong>已选择 <span id="v2DeliverySelectedCountBottom">${set.size}</span> 首</strong><small>提交后 STARLINK 会收到本轮选取结果</small></div>
          <textarea id="v2DeliveryFeedback" placeholder="可选：补充本轮反馈，例如“方向对，再补几首更适合山野画面的”"></textarea>
          <button class="btn btn-primary" data-v2-submit-delivery="${d.id}">提交本轮选择</button>
        </div>`:''}
      </section>

      <section class="v2-workflow-panel v2-delivery-history">
        <div class="v2-panel-title"><div><h2>交付记录</h2><p>本次交付的重要动作会在这里留痕。</p></div></div>
        <div class="v2-customer-timeline horizontalish">
          <div class="done"><i></i><div><strong>交付已创建</strong><small>${d.date}</small></div></div>
          ${isSelection?`<div class="current"><i></i><div><strong>等待你提交选择</strong><small>当前已选择 ${set.size} 首</small></div></div>`:`<div class="done"><i></i><div><strong>${d.type}完成</strong><small>${d.result}</small></div></div>`}
        </div>
      </section>`;
  }

  function openDeliverySubmitConfirm(d,count,feedback){
    document.getElementById('v2DeliverySubmitModal')?.remove();
    const node=document.createElement('div');
    node.className='v2-confirm-modal';node.id='v2DeliverySubmitModal';
    node.innerHTML=`<div class="v2-confirm-backdrop"></div><div class="v2-confirm-dialog">
      <span class="v2-confirm-icon">${icon('check')}</span>
      <h3>提交本轮选择？</h3>
      <p>你将提交「${d.name}」的本轮选取结果，共选择 <strong>${count} 首</strong>。提交后 STARLINK 会收到结果并继续处理关联需求。</p>
      ${feedback?`<div class="v2-confirm-track"><small>本轮反馈</small><strong>${feedback}</strong></div>`:''}
      <div class="v2-confirm-actions"><button class="btn" data-v2-cancel-delivery-submit>继续调整</button><button class="btn btn-primary" data-v2-confirm-delivery-submit="${d.id}">确认提交</button></div>
    </div>`;
    document.body.appendChild(node);
  }

  function openNewRequirementModal(){
    document.getElementById('v2RequirementModal')?.remove();
    const node=document.createElement('div');
    node.className='v2-confirm-modal';node.id='v2RequirementModal';
    node.innerHTML=`<div class="v2-confirm-backdrop"></div><div class="v2-requirement-modal">
      <div class="v2-modal-head"><div><h2>发起内容需求</h2><p>描述清楚你要用在什么场景、希望是什么感觉，以及大概需要多少内容。</p></div><button data-v2-close-requirement>${icon('x')}</button></div>
      <div class="v2-requirement-form">
        <label><span>需求名称</span><input id="v2ReqTitle" placeholder="例如：10 月户外旅行内容" /></label>
        <label class="full"><span>需求描述</span><textarea id="v2ReqBrief" placeholder="例如：用于户外旅行短视频，希望明亮、有推进感、国际化，不要太慢，纯音乐优先。"></textarea></label>
        <label><span>目标数量</span><input id="v2ReqTarget" placeholder="例如：20 首" /></label>
        <label><span>期望时间</span><input id="v2ReqDue" type="date" /></label>
        <label class="full"><span>参考链接 / 补充说明 <em>选填</em></span><input id="v2ReqNote" placeholder="参考视频、歌曲链接，或其它说明" /></label>
      </div>
      <div class="v2-modal-actions"><button class="btn" data-v2-close-requirement>取消</button><button class="btn btn-primary" data-v2-submit-requirement>提交需求</button></div>
    </div>`;
    document.body.appendChild(node);
  }

  function submitNewRequirement(){
    const title=document.getElementById('v2ReqTitle')?.value.trim();
    const brief=document.getElementById('v2ReqBrief')?.value.trim();
    if(!title||!brief){toast('请填写需求名称和需求描述');return}
    const id=`REQ-20260918-${String(30+requests.length).padStart(3,'0')}`;
    requests.unshift({id,title,project:'当前合作',brief,tags:['新需求'],target:document.getElementById('v2ReqTarget')?.value.trim()||'待确认',due:document.getElementById('v2ReqDue')?.value||'待确认',submitted:'今天',status:'待受理',stage:1,updated:'刚刚',deliveries:[],note:document.getElementById('v2ReqNote')?.value.trim()||''});
    document.getElementById('v2RequirementModal')?.remove();
    toast('内容需求已提交');
    renderPage();
  }

  const developerCredentials={
    key:'slk_live_demo_insta360_01',
    secret:'slk_secret_demo_••••••••••••9F2K',
    rawSecret:'slk_secret_demo_insta360_9F2K'
  };
  const agentCatalog=[
    {id:'chatgpt',name:'ChatGPT',icon:'https://chatgpt.com/favicon.ico',method:'Connector / MCP',desc:'直接查询曲库、查找内容和读取当前账号可访问的业务信息。'},
    {id:'claude',name:'Claude',icon:'https://claude.ai/favicon.ico',method:'Connector / MCP',desc:'通过 Claude Connector 接入 STARLINK 曲库与业务能力。'},
    {id:'codex',name:'Codex',icon:'https://openai.com/favicon.ico',method:'MCP',desc:'在开发工作流中查询曲库、内容元数据和业务信息。'},
    {id:'cursor',name:'Cursor',icon:'https://cursor.com/favicon.ico',method:'MCP',desc:'在 Cursor 中添加 STARLINK MCP，开发时直接调用音乐内容能力。'},
    {id:'workbuddy',name:'WorkBuddy',icon:'https://www.workbuddy.cn/favicon.ico',method:'MCP / 企业 Agent',desc:'将 STARLINK 接入企业 Agent 的日常业务工作流。'}
  ];
  const STARLINK_MCP='https://mcp.starlink.example/mcp';

  function agentLogo(agent){
    return `<span class="v2-agent-logo ${agent.id}"><img src="${agent.icon}" alt="${agent.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span class="v2-agent-fallback">${agent.name.slice(0,2).toUpperCase()}</span></span>`;
  }

  function agentStatus(id){
    return v2.agentConnections.has(id)
      ? '<span class="v2-agent-status connected"><i></i>已连接</span>'
      : '<span class="v2-agent-status"><i></i>未连接</span>';
  }

  function developerV2Page(){
    return `${pageHead('接入中心','使用 API 凭据或连接常用 AI Agent，让 STARLINK 能力进入你的产品和工作流。','')}
      <section class="v2-access-credentials">
        <div class="v2-access-section-head">
          <div><span>API ACCESS</span><h2>API 凭据</h2><p>用于你的系统调用 STARLINK。请妥善保管 Secret，不要暴露在前端代码或公开仓库中。</p></div>
        </div>
        <div class="v2-credential-grid">
          <div class="v2-credential-row">
            <div><small>Key</small><code>${developerCredentials.key}</code></div>
            <button class="v2-credential-action" data-v2-copy-credential="key">${icon('copy')}复制</button>
          </div>
          <div class="v2-credential-row">
            <div><small>Secret</small><code id="v2DeveloperSecret">${v2.developerSecretVisible?developerCredentials.rawSecret:developerCredentials.secret}</code></div>
            <div class="v2-credential-actions">
              <button class="v2-credential-action" data-v2-toggle-secret>${icon('lock')}${v2.developerSecretVisible?'隐藏':'显示'}</button>
              <button class="v2-credential-action" data-v2-copy-credential="secret">${icon('copy')}复制</button>
            </div>
          </div>
        </div>
      </section>

      <section class="v2-agent-access-section">
        <div class="v2-agent-access-head">
          <div><span>AI AGENT</span><h2>连接 AI Agent</h2><p>连接后，在常用 AI 工具里直接使用 STARLINK。权限自动跟随当前客户账号，不需要为每个 Agent 单独配置业务权限。</p></div>
        </div>
        <div class="v2-agent-list">
          <div class="v2-agent-list-head"><span>Agent</span><span>接入方式</span><span>状态</span><span>操作</span></div>
          ${agentCatalog.map(agent=>`<div class="v2-agent-row">
            <div class="v2-agent-main">
              ${agentLogo(agent)}
              <div><strong>${agent.name}</strong><small>${agent.desc}</small></div>
            </div>
            <div class="v2-agent-method"><span>${agent.method}</span><small>使用当前 STARLINK 账号授权</small></div>
            <div class="v2-agent-state">${agentStatus(agent.id)}</div>
            <div class="v2-agent-actions">
              <button class="btn ${v2.agentConnections.has(agent.id)?'':'btn-primary'}" data-v2-agent-connect="${agent.id}">
                ${v2.agentConnections.has(agent.id)?'查看接入':'开始接入'} ${icon('arrow-up-right')}
              </button>
            </div>
          </div>`).join('')}
        </div>
      </section>`;
  }

  function agentFlowModal(agentId,step=1){
    const agent=agentCatalog.find(x=>x.id===agentId)||agentCatalog[0];
    const connected=v2.agentConnections.has(agent.id);
    const steps=[
      {n:1,title:`打开 ${agent.name}`,desc:`进入 ${agent.name} 的 Connector / MCP / 外部工具设置。`},
      {n:2,title:'添加 STARLINK',desc:'添加 STARLINK MCP 地址，Agent 会识别可用能力并发起连接。'},
      {n:3,title:'授权并完成',desc:'使用当前 STARLINK 客户账号确认授权，完成后即可在 Agent 中直接调用。'}
    ];
    document.getElementById('v2AgentModal')?.remove();
    const node=document.createElement('div');
    node.className='v2-confirm-modal';node.id='v2AgentModal';
    node.innerHTML=`<div class="v2-confirm-backdrop"></div><div class="v2-agent-modal">
      <div class="v2-modal-head">
        <div class="v2-agent-modal-title">${agentLogo(agent)}<div><h2>${connected?`${agent.name} 接入方式`:`连接 ${agent.name}`}</h2><p>按下面步骤将 STARLINK 接入 ${agent.name}。</p></div></div>
        <button data-v2-close-agent>${icon('x')}</button>
      </div>
      <div class="v2-agent-modal-body">
        <div class="v2-agent-steps">
          ${steps.map(s=>`<div class="${step>s.n?'done':step===s.n?'active':''}"><span>${step>s.n?icon('check'):s.n}</span><div><strong>${s.title}</strong><small>${s.desc}</small></div></div>`).join('')}
        </div>
        <div class="v2-agent-connect-box">
          <span>STARLINK MCP 地址</span>
          <div><code>${STARLINK_MCP}</code><button data-v2-copy-mcp>${icon('copy')}复制</button></div>
          <p>${agent.name} 支持 MCP / Connector 时，直接添加该地址即可；授权时使用当前 STARLINK 账号完成确认。</p>
        </div>
        ${step===3||connected?`<div class="v2-agent-ready"><span>${icon('check')}</span><div><strong>${agent.name} ${connected?'已连接':'可以完成连接'}</strong><small>连接后可在 Agent 中直接查询曲库、搜索歌曲和读取当前账号可访问的业务信息。</small></div></div>`:''}
      </div>
      <div class="v2-modal-actions">
        <button class="btn" data-v2-close-agent>关闭</button>
        ${connected?'':step<3?`<button class="btn btn-primary" data-v2-agent-next="${agent.id}" data-agent-step="${step+1}">下一步</button>`:`<button class="btn btn-primary" data-v2-agent-finish="${agent.id}">完成连接</button>`}
      </div>
    </div>`;
    document.body.appendChild(node);
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
  pages.ai=aiV2Page;
  pages.discover=discoverV2Page;
  pages['discover-category']=discoverCategoryPage;
  pages['discover-subcategory']=discoverSubcategoryPage;
  pages['playlist-detail']=playlistDetailPage;
  pages['my-catalog']=myCatalogPage;
  pages.requirements=requirementsPage;
  pages['requirement-detail']=requirementDetailPage;
  pages.deliveries=deliveriesPage;
  pages['delivery-detail']=deliveryDetailPage;
  pages['track-detail']=trackDetailPage;
  pages.developer=developerV2Page;
  pages.settings=managementPage;

  const oldMap={projects:'settings',playlists:'requirements',content:'my-catalog'};
  if(oldMap[state.route]){
    state.route=oldMap[state.route];
    history.replaceState(null,'',`#/${state.route}`);
  }

  function startAiSearch(value){
    const query=(value||'').trim();
    if(!query){toast('先描述一下你想找什么样的音乐');return}
    v2.aiQuery=query;
    v2.aiStage='searching';
    const token=++v2.aiSearchToken;
    renderPage();
    setTimeout(()=>{
      if(token!==v2.aiSearchToken) return;
      v2.aiStage='results';
      if(state.route==='ai') renderPage();
    },1800);
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
    const fromAI=state.route==='ai';
    const node=document.createElement('div');
    node.className='v2-confirm-modal';
    node.id='v2ConfirmModal';
    node.innerHTML=`<div class="v2-confirm-backdrop"></div><div class="v2-confirm-dialog">
      <span class="v2-confirm-icon">${icon('plus')}</span>
      <h3>${fromAI?'加入授权？':'加入曲库？'}</h3>
      <p>${fromAI?`确认将《${track.title}》加入当前客户授权曲库，确认后会同步进入“我的曲库”。`:`确认将《${track.title}》加入当前客户的已授权曲库。加入后该歌曲会出现在“我的曲库”中。`}</p>
      <div class="v2-confirm-track"><strong>${track.title}</strong><small>${track.artist} · ${track.id}</small></div>
      <div class="v2-confirm-actions"><button class="btn" data-v2-cancel-auth>取消</button><button class="btn btn-primary" data-v2-confirm-search="${track.id}">确认加入</button></div>
    </div>`;
    document.body.appendChild(node);
  }

  document.addEventListener('click',e=>{
    const aiPrompt=e.target.closest('[data-ai-prompt]');
    if(aiPrompt && state.route==='ai'){
      e.preventDefault();e.stopImmediatePropagation();
      const input=document.getElementById('aiInput');
      if(input){input.value=aiPrompt.dataset.aiPrompt;input.focus()}
      return;
    }
    const aiSend=e.target.closest('#aiSend');
    if(aiSend && state.route==='ai'){
      e.preventDefault();e.stopImmediatePropagation();
      startAiSearch(document.getElementById('aiInput')?.value||'');
      return;
    }

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

    const copyCredential=e.target.closest('[data-v2-copy-credential]');
    if(copyCredential){
      e.preventDefault();e.stopPropagation();
      const value=copyCredential.dataset.v2CopyCredential==='key'?developerCredentials.key:developerCredentials.rawSecret;
      if(navigator.clipboard?.writeText) navigator.clipboard.writeText(value).catch(()=>{});
      toast(copyCredential.dataset.v2CopyCredential==='key'?'Key 已复制':'Secret 已复制');
      return;
    }
    if(e.target.closest('[data-v2-toggle-secret]')){
      e.preventDefault();e.stopPropagation();
      v2.developerSecretVisible=!v2.developerSecretVisible;
      renderPage();
      return;
    }
    const agentConnect=e.target.closest('[data-v2-agent-connect]');
    if(agentConnect){
      e.preventDefault();e.stopPropagation();
      const agentId=agentConnect.dataset.v2AgentConnect;
      agentFlowModal(agentId,v2.agentConnections.has(agentId)?3:1);
      return;
    }
    const agentNext=e.target.closest('[data-v2-agent-next]');
    if(agentNext){
      e.preventDefault();e.stopPropagation();
      agentFlowModal(agentNext.dataset.v2AgentNext,Number(agentNext.dataset.agentStep)||2);
      return;
    }
    const agentFinish=e.target.closest('[data-v2-agent-finish]');
    if(agentFinish){
      e.preventDefault();e.stopPropagation();
      v2.agentConnections.add(agentFinish.dataset.v2AgentFinish);
      document.getElementById('v2AgentModal')?.remove();
      toast('Agent 已连接 STARLINK');
      renderPage();
      return;
    }
    if(e.target.closest('[data-v2-copy-mcp]')){
      e.preventDefault();e.stopPropagation();
      if(navigator.clipboard?.writeText) navigator.clipboard.writeText(STARLINK_MCP).catch(()=>{});
      toast('MCP 地址已复制');
      return;
    }
    if(e.target.closest('[data-v2-close-agent]') || (e.target.closest('.v2-confirm-backdrop')&&e.target.closest('#v2AgentModal'))){
      e.preventDefault();e.stopPropagation();document.getElementById('v2AgentModal')?.remove();return;
    }

    const newRequirement=e.target.closest('[data-v2-new-requirement]');
    if(newRequirement){e.preventDefault();e.stopPropagation();openNewRequirementModal();return}
    if(e.target.closest('[data-v2-close-requirement]') || (e.target.closest('.v2-confirm-backdrop')&&e.target.closest('#v2RequirementModal'))){
      e.preventDefault();e.stopPropagation();document.getElementById('v2RequirementModal')?.remove();return;
    }
    if(e.target.closest('[data-v2-submit-requirement]')){e.preventDefault();e.stopPropagation();submitNewRequirement();return}
    const requirementLink=e.target.closest('[data-v2-requirement]');
    if(requirementLink){
      e.preventDefault();e.stopPropagation();v2.activeRequirementId=requirementLink.dataset.v2Requirement;routeTo('requirement-detail');return;
    }
    const deliveryLink=e.target.closest('[data-v2-delivery]');
    if(deliveryLink){
      e.preventDefault();e.stopPropagation();v2.activeDeliveryId=deliveryLink.dataset.v2Delivery;routeTo('delivery-detail');return;
    }
    const deliverySelect=e.target.closest('[data-v2-delivery-select]');
    if(deliverySelect){
      e.preventDefault();e.stopPropagation();
      const deliveryId=deliverySelect.dataset.deliveryId,id=deliverySelect.dataset.v2DeliverySelect;
      const set=v2.deliverySelections[deliveryId]||(v2.deliverySelections[deliveryId]=new Set());
      set.has(id)?set.delete(id):set.add(id);
      const row=deliverySelect.closest('.v2-delivery-song');
      row?.classList.toggle('selected',set.has(id));
      deliverySelect.classList.toggle('selected',set.has(id));
      deliverySelect.innerHTML=`${set.has(id)?icon('check'):''}<span>${set.has(id)?'已选择':'选择'}</span>`;
      const top=document.getElementById('v2DeliverySelectedCount');if(top) top.textContent=`${set.size} 首`;
      const bottom=document.getElementById('v2DeliverySelectedCountBottom');if(bottom) bottom.textContent=set.size;
      return;
    }
    const submitDelivery=e.target.closest('[data-v2-submit-delivery]');
    if(submitDelivery){
      e.preventDefault();e.stopPropagation();
      const d=deliveries.find(x=>x.id===submitDelivery.dataset.v2SubmitDelivery);
      const set=v2.deliverySelections[d.id]||new Set();
      const feedback=document.getElementById('v2DeliveryFeedback')?.value.trim();
      openDeliverySubmitConfirm(d,set.size,feedback);
      return;
    }
    const confirmDelivery=e.target.closest('[data-v2-confirm-delivery-submit]');
    if(confirmDelivery){
      e.preventDefault();e.stopPropagation();
      const d=deliveries.find(x=>x.id===confirmDelivery.dataset.v2ConfirmDeliverySubmit);
      if(d){
        d.status='已提交';
        d.selected=(v2.deliverySelections[d.id]||new Set()).size;
        d.result=`已提交 ${d.selected} 首选择，等待 STARLINK 继续处理`;
        const req=requests.find(r=>r.id===d.requirementId);
        if(req){req.status='处理中';req.stage=3;req.updated='刚刚'}
      }
      document.getElementById('v2DeliverySubmitModal')?.remove();
      toast('本轮选择已提交');
      renderPage();
      return;
    }
    if(e.target.closest('[data-v2-cancel-delivery-submit]') || (e.target.closest('.v2-confirm-backdrop')&&e.target.closest('#v2DeliverySubmitModal'))){document.getElementById('v2DeliverySubmitModal')?.remove();return}
    if(e.target.closest('[data-v2-download-delivery]')){e.preventDefault();e.stopPropagation();toast('正在准备本次正式交付文件');return}
    if(e.target.closest('[data-v2-add-requirement-note]')){e.preventDefault();e.stopPropagation();toast('补充说明入口已打开，可继续接入消息/备注能力');return}

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
    const subcategoryOpen=e.target.closest('[data-v2-subcategory-open]');
    if(subcategoryOpen){
      e.preventDefault();e.stopPropagation();
      v2.discoverCategoryKey=subcategoryOpen.dataset.v2CategoryKey;
      v2.discoverSubcategory=subcategoryOpen.dataset.v2SubcategoryOpen;
      routeTo('discover-subcategory');
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
      v2.trackDetailMode=state.route==='my-catalog'?'authorized':'search';
      if(state.route==='playlist-detail'){
        v2.trackDetailReturnRoute='playlist-detail';
        v2.trackDetailReturnLabel='歌单';
      }else if(state.route==='catalog'){
        v2.trackDetailReturnRoute='catalog';
        v2.trackDetailReturnLabel='全曲库搜索';
      }else if(state.route==='ai'){
        v2.trackDetailReturnRoute='ai';
        v2.trackDetailReturnLabel='AI 找歌';
      }else{
        v2.trackDetailReturnRoute='my-catalog';
        v2.trackDetailReturnLabel='我的曲库';
      }
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

  document.addEventListener('keydown',e=>{
    if(state.route==='ai' && e.target?.id==='aiInput' && (e.metaKey||e.ctrlKey) && e.key==='Enter'){
      e.preventDefault();
      startAiSearch(e.target.value);
    }
  });

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
