# STARLINK 官网改版 V1

独立静态官网，无依赖。旧工作台不在本分支；原 main 历史仍保留。

## 本地预览

```bash
git fetch origin
git switch website-review-v1
python3 -m http.server 8080
```

访问 http://localhost:8080/ 。首页、5 个产品详情、曲库、解决方案、授权合作、开发者均为独立静态页面。曲库只提供分类筛选及跳转现有曲库，不伪造试听、全量搜索、价格、案例或授权。客户门户跳转现有官网。临时品牌标记需替换为正式资产；域名确认后配置 canonical、sitemap 及正式 robots 策略。上线前需商务/运营确认产品与授权信息并验证外部链接和真实浏览器交互。
