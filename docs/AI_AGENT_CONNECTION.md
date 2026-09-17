# STARLINK AI Agent 连接方案

> 本文档是当前 AI Agent 接入模块的产品 + 研发终版设计。后续实现以本文档为准，不再维护独立的重复版本。

## 1. 目标与结论

STARLINK 内部员工可以把 ChatGPT、Claude、Codex、Cursor 等 Agent 连接到内部后台，让 Agent **以当前员工身份** 查询和操作 STARLINK。

核心原则只有四条：

1. **Agent 权限 = 当前员工账号权限**，不再维护第二套 Agent 权限。
2. **员工不接触长期 API Key**，正常连接通过 STARLINK 登录授权完成。
3. **所有 Agent 共用一套 STARLINK Remote MCP 服务**，不为每个 Agent 单独开发业务接口。
4. **MCP 只能调用 STARLINK 业务服务，不能直接访问数据库**。

员工侧只需要理解：连接、暂停、断开。

---

# Part A｜产品设计

## 2. 用户是谁

仅面向 STARLINK 内部员工，例如：

- 曲库运营
- 商务
- 版权运营
- 客户运营
- 管理员

不面向外部客户，不提供外部 API 接入能力。

## 3. 页面入口

入口：

`右上角头像 → AI 工具`

Demo 路由：

`/internal/#ai-access`

页面只展示：

- Agent 名称
- 是否已连接
- 是否允许访问后台
- 最近使用时间
- 连接 / 管理连接

不展示：

- 权限配置
- Scope
- API Key
- Token
- API 接口
- 开发者参数
- 独立 Agent 权限

## 4. 权限规则

Agent 不单独配置权限。

```text
Agent 有效权限 = 当前员工在 STARLINK 中的实时权限
```

例如：

- 员工只能查看客户，Agent 也只能查看客户。
- 员工可以创建歌单，Agent 可以创建歌单。
- 员工没有修改客户授权的权限，Agent 同样无法修改。
- 员工权限被管理员收回后，Agent 下一次调用立即失效，不需要重新连接。

如果 STARLINK 某个业务操作本身要求二次确认、审批或其他风控，Agent 必须遵守同样规则；这属于 STARLINK 原有业务规则，不属于单独的 Agent 权限。

## 5. 正常连接流程

以 Cursor 为例：

```text
员工点击「连接 Cursor」
        ↓
STARLINK 准备统一 MCP 连接地址
        ↓
打开 Cursor / 在 Cursor 中添加 STARLINK
        ↓
Cursor 请求访问 STARLINK MCP
        ↓
STARLINK 要求身份授权
        ↓
员工使用当前 STARLINK / 公司账号确认
        ↓
STARLINK 建立 用户 × Agent 连接关系
        ↓
Cursor 连接成功
        ↓
以后 Cursor 调用 MCP 时始终以该员工身份执行
```

员工正常流程中不需要复制 Key。

## 6. 手动连接兜底

如果目标 Agent 暂时不支持一键打开或 Deeplink，可以提供一个“手动连接”入口。

Demo 使用的示例地址：

```text
https://mcp.starlink.example/mcp
```

注意：该域名仅用于产品原型，生产环境域名由研发最终确定。

手动流程：

```text
复制 STARLINK MCP 地址
        ↓
到 Agent 的 MCP / Connector 设置中添加
        ↓
Agent 访问 STARLINK MCP
        ↓
仍然进入 STARLINK 登录授权
```

即使手动添加 MCP，也**不发放长期个人 Key**。

## 7. 管理连接

已连接 Agent 支持三个操作：

### 7.1 暂停访问

员工关闭“允许访问 STARLINK”后：

- 连接关系保留。
- Agent 的新请求全部拒绝。
- 再次开启后恢复使用。

### 7.2 重新授权

用于：

- Agent 侧登录态失效。
- 授权 Grant 失效。
- 连接异常。
- 员工主动重新绑定。

重新授权不改变员工业务权限，只刷新连接身份。

### 7.3 断开连接

断开后：

- 该 Agent 的连接 Grant 被撤销。
- 后续请求全部失效。
- 再使用时必须重新连接。

---

# Part B｜研发设计

## 8. 总体架构

```text
ChatGPT / Claude / Codex / Cursor
                │
                │ Remote MCP
                ▼
        STARLINK MCP Server
                │
      ┌─────────┼─────────┐
      │         │         │
   身份认证   权限校验   审计记录
      │         │         │
      └─────────┼─────────┘
                ▼
       STARLINK Application Services
                │
   ┌────────────┼────────────┐
   │            │            │
  曲库         客户        歌单/需求/交付
   │            │            │
   └────────────┴────────────┘
```

### 禁止架构

```text
Agent → MCP → Database
```

MCP Tool 必须调用现有业务 Service / Domain Logic，保证版权校验、客户权限、状态机、历史快照等现有规则不会被绕过。

## 9. 核心组件

### 9.1 STARLINK MCP Server

统一 Remote MCP 服务，负责：

- MCP transport
- Tool discovery
- Tool invocation
- 当前员工身份解析
- STARLINK 权限校验
- 调用应用服务
- 调用日志与审计
- 错误标准化

生产建议只维护一个 MCP 服务入口，例如：

```text
https://<production-domain>/mcp
```

具体域名由部署环境决定。

### 9.2 Auth / Connection Service

负责：

- 当前员工登录身份
- Agent Connection 创建
- OAuth / OIDC 授权 Grant
- Access Token / Refresh Token 生命周期
- 单连接撤销
- 暂停 / 恢复

员工页面不显示这些 Token。

### 9.3 Tool Registry

统一定义 Agent 可以调用的业务工具以及参数 Schema。

不要让 Agent 调泛化 CRUD，例如：

```text
update_database_record
execute_sql
call_internal_url
```

应提供业务语义明确的 Tool。

## 10. 推荐认证机制

目标方案：**公司登录 / STARLINK 登录 + OAuth 授权 + Remote MCP**。

推荐流程：

```text
1. Agent 保存 STARLINK MCP 地址
2. Agent 第一次请求 MCP
3. MCP 判断当前无有效用户授权
4. 返回需要登录授权
5. Agent 打开浏览器授权页面
6. 员工完成 STARLINK / 公司 SSO 登录
7. STARLINK 建立 user_id + agent_connection
8. Agent 获得短期访问凭证
9. 后续 MCP 请求携带凭证
10. MCP 每次请求重新读取当前员工权限
```

### Token 原则

- Access Token 短期有效。
- Refresh Token 支持轮换。
- Refresh Token 服务端只保存 Hash 或 Grant 关系，不保存可直接使用的明文长期密钥。
- 单个 Agent 连接可以单独撤销。
- 员工离职 / 禁用账号时所有 Agent 连接同时失效。

如果某一 Agent 的具体协议限制导致实现方式不同，可以在 Agent Adapter 层适配，但不能改变“员工无需管理长期 Key”的产品原则。

## 11. 权限校验

每一次 Tool 调用都必须执行 STARLINK 当前权限校验。

不要在连接时把员工权限复制一份长期保存到 Agent Connection。

正确模型：

```text
connection active
        AND
user active
        AND
current STARLINK permission allows action
        = allow
```

因此：

- 员工角色调整立即生效。
- 数据范围调整立即生效。
- 页面权限 / 操作权限变化不需要重新连接 Agent。

## 12. Agent Connection 数据模型

建议表：`ai_agent_connections`

| 字段 | 说明 |
|---|---|
| id | Connection ID |
| user_id | STARLINK 员工 ID |
| agent_type | chatgpt / claude / codex / cursor / other |
| external_client_id | Agent 侧连接标识，可空 |
| status | active / paused / revoked |
| auth_grant_id | 关联授权 Grant |
| connected_at | 首次连接时间 |
| last_used_at | 最近调用时间 |
| revoked_at | 撤销时间 |
| metadata | Agent 版本、客户端信息等非敏感扩展数据 |

如 OAuth 服务独立，可增加 `agent_auth_grants` 表或复用公司现有 OAuth / SSO 服务。

不建议在业务表保存明文 Access Token / Refresh Token。

## 13. 第一阶段 MCP Tools

第一阶段先覆盖最常见的曲库运营流程。

### 曲库

```text
search_tracks
get_track_detail
get_track_rights
```

### 歌单

```text
list_playlists
get_playlist
create_playlist
add_tracks_to_playlist
remove_tracks_from_playlist
```

### 客户

```text
search_customers
get_customer
get_customer_catalog
```

### 项目与需求

```text
get_project
list_requirements
get_requirement
create_requirement
update_requirement
```

### 交付

```text
list_deliveries
get_delivery
create_delivery
get_delivery_selection
```

后续再根据真实使用频率扩 Tool，不建议一开始把整个后台所有能力全部 Tool 化。

## 14. Tool 设计规范

每个 Tool 应包含：

- 明确业务语义
- JSON Schema 参数
- 必填字段
- 当前员工身份由服务端注入，Agent 不允许伪造 `user_id`
- 权限代码
- 数据范围校验
- 幂等策略
- 可审计 target ID
- 标准错误码

示例：

```json
{
  "name": "create_playlist",
  "description": "创建一个运营歌单",
  "input": {
    "name": "string",
    "description": "string",
    "category_id": "string|null"
  }
}
```

服务端实际执行：

```text
resolve current user
→ check playlist.create permission
→ validate category access
→ PlaylistService.create(...)
→ write audit log
→ return business result
```

## 15. 写操作安全

Agent 的写操作必须复用后台现有规则：

- 参数校验
- 状态机
- 版权检查
- 客户权限检查
- 历史交付快照
- 幂等
- 审计

不要因为来源是 Agent 就新增“超级权限”。

如果某个后台动作当前产品要求人工确认，则 Agent 调用也必须进入同样的确认 / 审批机制。

## 16. 审计日志

每次 MCP 调用至少记录：

| 字段 | 说明 |
|---|---|
| request_id | 唯一请求 ID |
| connection_id | Agent Connection |
| user_id | 实际员工 |
| agent_type | 来源 Agent |
| tool_name | 调用 Tool |
| target_type | customer / playlist / requirement / delivery 等 |
| target_id | 业务对象 ID |
| operation_type | read / write |
| result | success / denied / failed |
| latency_ms | 调用耗时 |
| created_at | 时间 |

业务日志展示建议：

```text
王小明 · via ChatGPT
创建歌单「影石 0917 户外候选」
```

Agent 不是独立员工，真实操作人仍然是员工本人。

## 17. 暂停与撤销

### Pause

`ai_agent_connections.status = paused`

MCP 鉴权阶段直接拒绝所有请求，但保留授权关系。

### Revoke

- `status = revoked`
- 撤销 OAuth Grant
- Refresh Token 失效
- 当前 Access Token 尽快进入 denylist 或依赖短 TTL 自然失效

## 18. 错误处理

Agent 应得到结构化业务错误，而不是数据库异常。

建议至少包括：

```text
AUTH_REQUIRED
CONNECTION_PAUSED
CONNECTION_REVOKED
USER_DISABLED
PERMISSION_DENIED
RESOURCE_NOT_FOUND
RIGHTS_NOT_AVAILABLE
INVALID_STATE
VALIDATION_ERROR
RATE_LIMITED
INTERNAL_ERROR
```

错误文案应该让 Agent 能向员工解释下一步，例如：

```text
PERMISSION_DENIED
当前员工没有修改客户授权的权限。
```

## 19. 研发阶段建议

### Phase 1｜可跑通连接

- Remote MCP Server 骨架
- 公司 SSO / STARLINK 登录授权
- `ai_agent_connections`
- 连接 / 暂停 / 撤销
- 3～5 个只读 Tool
- 基础审计日志

验收：Cursor 或一个内部 MCP Client 可以完成“连接 → 登录 → 搜曲”。

### Phase 2｜覆盖运营主链路

- 歌单 Tool
- 客户 / 项目 / 需求 Tool
- 交付 Tool
- 写操作权限校验
- 幂等与业务错误
- 完整审计

验收：Agent 可以在员工权限范围内完成“需求 → 找歌 → 建歌单 → 创建交付”。

### Phase 3｜多 Agent 正式接入

- ChatGPT
- Claude
- Codex
- Cursor
- 各 Agent 的 Deeplink / 安装体验适配
- 连接状态同步
- 使用监控与告警

不同 Agent 的连接能力可能不同，统一在 Adapter / 前端交互层适配，STARLINK 后端仍保持一套 MCP + Auth + Tool Registry。

## 20. 验收标准

### 产品验收

- 未连接 Agent 点击“连接”可以走完三步 Demo。
- 正常路径不要求员工填写 Key。
- 手动连接只需要复制 MCP 地址。
- 可以暂停、恢复、重新授权、断开。
- 页面不出现第二套权限配置。

### 研发验收

- 同一 MCP 地址可服务多个 Agent。
- 每个连接可以唯一映射到 STARLINK 员工。
- 员工权限变更在下一次调用立即生效。
- Agent 无法伪造其他员工身份。
- Agent 无法绕过 Application Service 直接读写数据库。
- 所有 Tool 调用可审计。
- 连接被暂停 / 撤销后请求立即或在可接受 Token TTL 内失效。

## 21. 当前原型对应关系

当前原型文件：

```text
internal/ai-access.js
internal/ai-access.css
```

Demo：

```text
/internal/#ai-access
```

当前未连接的 Cursor 可用于演示完整流程：

```text
连接
→ 打开 Cursor
→ Cursor 等待 STARLINK 授权
→ STARLINK 当前员工授权
→ 连接成功
```

“手动连接”会展示示例 MCP 地址，用于解释真实研发实现，不代表生产域名已经确定。
