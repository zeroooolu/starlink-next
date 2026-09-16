const categoryTreeData = [
  {name:'库音歌单', count:18, children:[{name:'品牌精选',count:5},{name:'热门推荐',count:8},{name:'编辑精选',count:5}]},
  {name:'疗愈音乐', count:9, children:[{name:'助眠放松',count:4},{name:'冥想呼吸',count:3},{name:'自然疗愈',count:2}]},
  {name:'短剧配乐', count:31, children:[{name:'都市情感',count:12},{name:'悬疑剧情',count:8},{name:'古装剧情',count:11}]},
  {name:'短剧音效', count:24, children:[{name:'环境音效',count:8},{name:'人物音效',count:7},{name:'转场音效',count:9}]},
  {name:'合作案例', count:12, children:[{name:'品牌合作',count:6},{name:'平台合作',count:6}]},
  {name:'游戏配乐', count:31, children:[{name:'战斗',count:8},{name:'休闲',count:10},{name:'剧情',count:13}]},
  {name:'运动健身', count:18, children:[{name:'跑步',count:7},{name:'燃脂',count:6},{name:'力量训练',count:5}]},
  {name:'场景配乐', count:22, children:[{name:'旅行',count:6},{name:'Vlog',count:7},{name:'门店',count:9}]},
  {name:'流派音乐', count:35, children:[{name:'流行',count:10},{name:'电子',count:9},{name:'摇滚',count:8},{name:'爵士',count:8}]},
  {name:'语种', count:16, expanded:true, children:[{name:'Test歌单',count:1},{name:'堆糖音效',count:3},{name:'自拍合作项目',count:5},{name:'智能歌单',count:7}]},
  {name:'疗愈 AI', count:8, children:[{name:'AI 睡眠',count:3},{name:'AI 白噪音',count:2},{name:'AI 冥想',count:3}]}
];

let categorySelected = '库音歌单';

Page.categories = () => `
  <div class="category-page">
    <div class="category-head">
      <div>
        <h1>分类管理</h1>
        <p>管理歌单分类层级和 STARLINK 展示信息，用于官网及客户平台内容导航。</p>
      </div>
      <div class="actions">
        <button class="btn" id="categoryExpandAll">展开全部</button>
        <button class="btn primary" id="categoryCreate">+ 新增分类</button>
      </div>
    </div>

    <section class="category-layout">
      <aside class="category-tree-panel">
        <div class="category-tree-toolbar">
          <div class="category-search">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            <input id="categorySearchInput" placeholder="搜索分类" />
          </div>
          <div class="category-tree-actions">
            <span>分类树</span>
            <button class="category-add" id="categoryAddRoot">＋ 新增一级分类</button>
          </div>
        </div>
        <div class="drag-hint">拖拽可调整同级分类排序；展开分类后可继续管理子分类。</div>
        <div class="category-tree" id="categoryTree">${renderCategoryTree(categoryTreeData)}</div>
        <div class="category-tree-footer">11 个一级分类 · 29 个子分类</div>
      </aside>

      <section class="category-detail-panel">
        <div class="category-detail-head">
          <div class="category-title-wrap">
            <h2 id="categoryDetailTitle">库音歌单</h2>
            <span class="category-status">已上架</span>
          </div>
          <div class="category-detail-actions">
            <button class="btn">预览</button>
            <button class="btn primary">保存修改</button>
          </div>
        </div>

        <div class="category-detail-body">
          <div class="category-form-grid">
            <div class="category-form-section">
              <div class="category-section-title">基础信息</div>
              <div class="category-fields">
                <div class="category-field">
                  <label>中文名称 <span class="required">*</span></label>
                  <input class="category-input" id="categoryNameInput" value="库音歌单" />
                  <div class="category-help">用于内部管理和中文界面展示。</div>
                </div>
                <div class="category-field">
                  <label>英文名称</label>
                  <input class="category-input" value="Kanjian Picks" placeholder="请输入英文名称" />
                </div>
                <div class="category-field">
                  <label>简介</label>
                  <textarea class="category-textarea" placeholder="请输入分类简介">看见音乐精选优质商用音乐内容，覆盖多种场景和使用需求。</textarea>
                  <div class="category-help">展示在 STARLINK 分类页，可简要说明该分类的内容范围。</div>
                </div>
                <div class="category-row-fields">
                  <div class="category-field">
                    <label>父级分类</label>
                    <input class="category-input" value="一级分类" readonly />
                  </div>
                  <div class="category-field">
                    <label>排序</label>
                    <input class="category-input" value="1" />
                  </div>
                </div>
                <div class="category-field">
                  <label>分类 Icon</label>
                  <div class="icon-upload-row">
                    <div class="category-icon-preview">
                      <svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="m8 13 2-2 3 3 2-2 3 3"/><circle cx="9" cy="9" r="1.5"/></svg>
                    </div>
                    <div class="icon-upload-actions"><button class="btn small">上传 Icon</button><button class="btn small">移除</button></div>
                  </div>
                  <div class="category-help">建议使用 SVG 或透明 PNG，推荐 1:1。</div>
                </div>
              </div>

              <div class="category-save-bar">
                <button class="btn">取消</button>
                <button class="btn primary">保存修改</button>
              </div>
            </div>

            <div class="category-form-section">
              <div class="category-section-title">展示配置</div>
              <div class="media-card">
                <div class="media-card-head"><strong>背景图 / 视频</strong><span>分类头图</span></div>
                <div class="upload-box">
                  <div class="upload-inner">
                    <svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="m8 13 2-2 3 3 2-2 3 3"/><path d="M12 3v6M9 6l3-3 3 3"/></svg>
                    <strong>上传背景图或视频</strong>
                    <span>支持 JPG / PNG / MP4</span>
                  </div>
                </div>
              </div>

              <div class="category-switch-row">
                <div class="category-switch-copy"><strong>在 STARLINK 展示</strong><span>关闭后分类不会出现在客户平台</span></div>
                <div class="switch-control" title="展示状态"></div>
              </div>

              <div class="category-meta-card">
                <div class="category-meta-row"><span>分类层级</span><strong>一级分类</strong></div>
                <div class="category-meta-row"><span>包含歌单</span><strong>18 个</strong></div>
                <div class="category-meta-row"><span>创建时间</span><strong>2025-11-18 14:20</strong></div>
                <div class="category-meta-row"><span>最后更新</span><strong>今天 16:42</strong></div>
                <div class="category-meta-row"><span>更新人</span><strong>曲库运营</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
`;

function renderCategoryTree(items, keyword=''){
  const q = keyword.trim().toLowerCase();
  return items.map((item, idx) => {
    const children = item.children || [];
    const childMatch = children.filter(c => !q || c.name.toLowerCase().includes(q));
    const selfMatch = !q || item.name.toLowerCase().includes(q);
    if (!selfMatch && !childMatch.length) return '';
    const expanded = q ? true : !!item.expanded;
    return `<div class="category-node ${expanded?'expanded':''}" data-index="${idx}">
      <div class="category-row ${item.name===categorySelected?'active':''}" data-category="${item.name}">
        <button class="tree-toggle" data-tree-toggle="${idx}" ${children.length?'':'style="visibility:hidden"'}>
          <svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>
        </button>
        <span class="tree-dot">${children.length?'▦':'•'}</span>
        <span class="category-name">${item.name}</span>
        <span class="category-count">${item.count||0}</span>
        <button class="tree-more" title="更多">···</button>
      </div>
      ${children.length?`<div class="category-children">${childMatch.map(c=>`<div class="category-row ${c.name===categorySelected?'active':''}" data-category="${c.name}"><span class="tree-toggle" style="visibility:hidden"></span><span class="tree-dot">•</span><span class="category-name">${c.name}</span><span class="category-count">${c.count||0}</span><button class="tree-more" title="更多">···</button></div>`).join('')}</div>`:''}
    </div>`;
  }).join('');
}

if (routes && routes.categories) routes.categories.render = Page.categories;

document.addEventListener('click', (e) => {
  const row = e.target.closest('.category-row[data-category]');
  if (row && !e.target.closest('.tree-toggle') && !e.target.closest('.tree-more')) {
    categorySelected = row.dataset.category;
    document.querySelectorAll('.category-row').forEach(x=>x.classList.remove('active'));
    row.classList.add('active');
    const title = document.getElementById('categoryDetailTitle');
    const input = document.getElementById('categoryNameInput');
    if (title) title.textContent = categorySelected;
    if (input) input.value = categorySelected;
    return;
  }
  const toggle = e.target.closest('[data-tree-toggle]');
  if (toggle) {
    const node = toggle.closest('.category-node');
    if (node) node.classList.toggle('expanded');
    return;
  }
  if (e.target.closest('#categoryExpandAll')) {
    document.querySelectorAll('.category-node').forEach(n=>n.classList.add('expanded'));
  }
});

document.addEventListener('input', (e) => {
  if (e.target.id === 'categorySearchInput') {
    const tree = document.getElementById('categoryTree');
    if (tree) tree.innerHTML = renderCategoryTree(categoryTreeData, e.target.value);
  }
  if (e.target.id === 'categoryNameInput') {
    const title = document.getElementById('categoryDetailTitle');
    if (title) title.textContent = e.target.value || '未命名分类';
  }
});
