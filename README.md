# SignalPaper

中文 / English

SignalPaper 是一个基于 Astro 的作者个人站模板，适合长期写作、项目归档和双语发布。它默认提供文章、项目、标签、RSS、站内搜索、`/about`、`/now` 等常见作者站能力，整体方向是内容优先，而不是营销首页。

SignalPaper is an Astro-based personal author site template for long-form writing, project archiving, and bilingual publishing. It ships with posts, projects, tags, RSS, on-site search, `/about`, `/now`, and other features expected from a writing-focused site. It is designed as a content-first author template, not a marketing landing page.

## 特性 / Features

- 双语内容结构（英文 / 中文）
- 文章与项目两套内容集合
- 标签归档与分页列表
- 文章目录、阅读时间、相关文章
- `Pagefind` 静态搜索
- RSS、sitemap、结构化元数据
- 暗色 / 亮色主题切换
- `/about` 与 `/now` 页面
- Newsletter、评论、统计脚本开关

- Bilingual content structure (English / Chinese)
- Separate collections for posts and projects
- Tag archives and paginated lists
- Table of contents, reading time, and related posts
- Static search powered by `Pagefind`
- RSS, sitemap, and structured metadata
- Light / dark theme toggle
- `/about` and `/now` pages
- Toggles for newsletter, comments, and analytics

## 适合谁 / Who It Is For

适合：
- 想搭建个人写作站或作品站的人
- 需要 Markdown 内容工作流的人
- 需要中英文双语发布的人
- 偏好内容优先、长期可维护主题的人

不适合：
- 需要营销型首页、产品展示页或复杂 CMS 后台的人
- 需要多作者编辑流或重度动态功能的人

Good fit for:
- People building a personal writing site or portfolio
- Markdown-first publishing workflows
- Bilingual English / Chinese publishing
- Content-first sites that should stay maintainable over time

Not a good fit for:
- Marketing landing pages or product showcase sites
- Multi-author editorial workflows
- Heavily dynamic applications

## 快速开始 / Quick Start

```bash
npm install
npm run dev
```

本地开发默认地址：

```text
http://localhost:4321
```

生产构建：

```bash
npm run build
npm run preview
```

说明：
- `npm run build` 会先执行 `astro build`，再运行 `Pagefind` 生成静态搜索索引
- 搜索功能在构建产物或 `preview` 环境下可用

Notes:
- `npm run build` runs `astro build` and then generates a static `Pagefind` index
- Search is available in the built output or preview environment

## 内容结构 / Content Structure

主要内容目录：

```text
src/content/posts/en/
src/content/posts/zh/
src/content/projects/en/
src/content/projects/zh/
```

页面路由目录：

```text
src/pages/
```

常见页面包括：
- 首页 `/`
- 文章列表 `/posts`
- 项目列表 `/projects`
- 标签页 `/tags`
- 关于页 `/about`
- 近况页 `/now`
- 中文版本位于 `/zh/*`

Main content directories:

```text
src/content/posts/en/
src/content/posts/zh/
src/content/projects/en/
src/content/projects/zh/
```

Main route directory:

```text
src/pages/
```

## 站点配置 / Site Configuration

核心站点配置位于：

[`src/config/site.ts`](/Users/baizhou/Documents/Projects/BaiSpace/signalpaper/src/config/site.ts:1)

这里可以修改：
- 站点名称、标语、描述
- 作者信息
- 默认语言与双语开关
- 社交链接
- 每页文章数量
- 评论配置
- 统计配置
- Newsletter 配置

Primary site configuration lives in:

[`src/config/site.ts`](/Users/baizhou/Documents/Projects/BaiSpace/signalpaper/src/config/site.ts:1)

Edit it to update:
- Site name, tagline, description
- Author profile
- Default locale and bilingual toggle
- Social links
- Posts per page
- Comments
- Analytics
- Newsletter settings

## 双语内容 / Bilingual Setup

这个模板默认使用两套语言目录：
- `en`
- `zh`

英文站点不带语言前缀，中文站点使用 `/zh` 前缀。

新增文章时，通常需要在两个语言目录中分别创建文件。例如：

```text
src/content/posts/en/my-post.md
src/content/posts/zh/my-post.md
```

This template uses two locale buckets by default:
- `en`
- `zh`

English routes are unprefixed. Chinese routes live under `/zh`.

When publishing bilingually, create matching files in both locale directories, for example:

```text
src/content/posts/en/my-post.md
src/content/posts/zh/my-post.md
```

## 内置功能开关 / Built-in Features

### 搜索 / Search

- 搜索由 `Pagefind` 提供
- 入口是头部搜索弹窗
- 搜索范围为公开的文章和项目详情页

### RSS

- RSS 路由位于 `/rss.xml`

### 评论 / Comments

- 评论组件默认关闭
- 可在 `SITE.comments` 中启用并配置 `giscus`

### Newsletter

- Newsletter 默认启用
- 默认使用 Buttondown 表单接口

### 统计 / Analytics

- 统计脚本可在 `SITE.analytics` 中开启或关闭
- 上线前请替换占位配置

### Search

- Search is powered by `Pagefind`
- The entry point is the header modal
- Search covers published post and project detail pages

### RSS

- RSS is exposed at `/rss.xml`

### Comments

- Comments are disabled by default
- Configure `SITE.comments` to enable `giscus`

### Newsletter

- Newsletter is enabled by default
- The default form target is Buttondown

### Analytics

- Analytics can be enabled or disabled in `SITE.analytics`
- Replace placeholder values before production

## 构建与部署 / Build and Deploy

推荐流程：

```bash
npm install
npm run build
npm run preview
```

生成产物位于：

```text
dist/
```

这是一个纯静态站点，可以部署到常见静态托管平台，例如：
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

Recommended workflow:

```bash
npm install
npm run build
npm run preview
```

Build output:

```text
dist/
```

This is a static site and can be deployed to common static hosts such as:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
