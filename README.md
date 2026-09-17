# STARLINK Next

纯 HTML 产品原型，用于规划下一代统一曲库访问与运营平台。

## Demo 入口

- `/index.html`：双产品入口
- `/internal/index.html`：内部曲库工作台
- `/customer/index.html`：外部 STARLINK 客户平台

## 内部曲库工作台

面向曲库运营、商务、版权和客户运营等内部角色，围绕曲库查询、歌单、客户、项目、需求、交付和 AI 协作完成日常工作。

当前主要模块：

- 工作台
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
- AI 曲库助手
- 系统设置
- 个人 AI 工具接入

AI 曲库助手用于直接用自然语言处理曲库运营工作；个人 AI 工具接入用于将 ChatGPT、Claude、Codex、Cursor 等 Agent 连接到 STARLINK，并自动继承当前员工账号权限。

## 外部 STARLINK 客户平台

面向授权客户。客户基于自己的授权范围访问曲库，自助完成搜索、试听、选歌、上架和内容获取。

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

AI 工具连接 Demo：

```text
http://localhost:8080/internal/#ai-access
```
