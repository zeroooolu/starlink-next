# STARLINK Next

纯 HTML 产品原型，用于规划下一代统一曲库访问与运营平台。

## Demo 入口

- `/index.html`：双产品入口
- `/internal/index.html`：内部曲库工作台
- `/customer/index.html`：外部 STARLINK 企业客户工作台

## 内部曲库工作台

面向曲库运营、商务、版权和客户运营等内部角色，围绕曲库查询、歌单、客户、项目、需求、交付和 AI 协作完成日常工作。

当前主要模块：

- 工作台（内置 AI 处理入口、待办、最近工作和曲库概览）
- 曲库
  - 曲库检索
  - 曲库看板
  - 标签管理
- 歌单与交付
  - 歌单管理
  - 分类管理
  - 交付记录
- 客户
  - 客户管理
  - 项目管理
  - 需求管理
- 系统设置
- 个人 AI 工具接入

AI 能力直接融入工作台和顶部全局入口，不再作为独立侧边栏模块。个人 AI 工具接入用于将 ChatGPT、Claude、Codex、Cursor、WorkBuddy 等 Agent 连接到 STARLINK，并自动继承当前员工账号权限。

## 外部 STARLINK 企业客户工作台

面向已授权的 To B 客户。前台不暴露内部版权运营和 CP 管理复杂度，而是围绕“发现 → 搜索 → 组织 → 获取 / 上架 → 系统接入”完成企业客户的日常内容工作。

当前 Demo 已搭建：

- 工作台：全局搜歌、项目进度、待处理事项、常用入口
- 曲库搜索：关键词检索、高级筛选、试听、收藏、加入项目、内容获取
- 分类浏览：按业务场景、情绪和曲风探索授权曲库
- AI 找歌：自然语言需求理解、搜索条件解释、推荐结果
- 我的项目：按业务线 / 产品组织候选内容与上架结果
- 歌单：项目歌单、协作歌单、智能歌单
- 我的内容：已上架、已获取、收藏三类内容视图
- 接入中心：Catalog Search API、Content API、AI Search、API Key / Webhook / 用量
- 管理：组织、授权能力、成员与配额

前台采用统一 Portal + Capability 的模型。客户实际可见菜单、按钮和操作能力，后续由后台客户 / 项目 / 授权配置动态控制。

## 方案文档

- [AI Agent 连接方案（产品 + 研发）](docs/AI_AGENT_CONNECTION.md)

## 本地预览

```bash
git pull origin main
python3 -m http.server 8080
```

内部工作台：

```text
http://localhost:8080/internal/
```

客户工作台：

```text
http://localhost:8080/customer/
```

AI 工具连接 Demo：

```text
http://localhost:8080/internal/#ai-access
```
