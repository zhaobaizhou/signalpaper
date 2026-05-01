# SignalPaper

中文 / English

SignalPaper 是一个内容优先的 Astro 作者站主题，适合长期写作、项目归档、标签浏览、站内搜索和双语发布。它的默认体验面向作者站和个人知识库，而不是营销落地页。

SignalPaper is a content-first Astro author theme for long-form writing, project archives, tags, on-site search, and bilingual publishing. It is designed for author sites and personal knowledge archives, not marketing landing pages.

## 特性 / Features

- Astro 静态站点
- 英文 / 中文双语路由
- 文章与项目两套内容集合
- 标签归档与分页列表
- 文章目录、阅读进度、相关文章
- Pagefind 静态搜索
- RSS、sitemap、canonical、Open Graph、JSON-LD
- 暗色 / 亮色主题切换
- `/about` 与 `/now` 默认页面
- 评论、统计、Newsletter 功能开关

- Static Astro site
- English / Chinese routes
- Separate post and project collections
- Tag archives and paginated lists
- Table of contents, reading progress, and related posts
- Static search powered by Pagefind
- RSS, sitemap, canonical URLs, Open Graph, and JSON-LD
- Light / dark theme toggle
- Default `/about` and `/now` pages
- Feature toggles for comments, analytics, and newsletter

## 适合谁 / Who It Is For

适合：

- 想搭建作者站、写作站或项目归档站的人
- 需要 Markdown / MDX 内容工作流的人
- 需要中英文双语发布的人
- 想要安静、可维护、内容优先界面的人

不适合：

- 营销型产品官网
- 多作者 CMS
- 重度动态应用

Good fit for:

- Authors, builders, and independent creators
- Markdown / MDX publishing workflows
- Bilingual English / Chinese publishing
- Quiet, maintainable, content-first sites

Not a good fit for:

- Marketing-heavy product sites
- Multi-author CMS workflows
- Highly dynamic applications

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

`npm run build` 会先执行 `astro build`，再运行 `Pagefind` 生成静态搜索索引。搜索功能需要在构建产物或 preview 环境中使用。

`npm run build` runs `astro build` and then generates the static Pagefind index. Search is available in the built output or preview environment.

## 内容结构 / Content Structure

主要内容目录：

```text
src/content/posts/en/
src/content/posts/zh/
src/content/projects/en/
src/content/projects/zh/
```

常见页面：

- `/`
- `/posts`
- `/projects`
- `/tags`
- `/about`
- `/now`
- `/zh/*`

Main content directories:

```text
src/content/posts/en/
src/content/posts/zh/
src/content/projects/en/
src/content/projects/zh/
```

Common routes:

- `/`
- `/posts`
- `/projects`
- `/tags`
- `/about`
- `/now`
- `/zh/*`

## 站点配置 / Site Configuration

核心配置位于 `src/config/site.ts`。

发布前至少需要替换：

- `SITE.url`
- `SITE.author`
- `SITE.social`
- `SITE.description`
- `SITE.tagline`
- Newsletter、comments、analytics 配置

默认情况下，newsletter、comments 和 analytics 都是关闭的，避免主题开箱后误触发第三方请求。

Primary configuration lives in `src/config/site.ts`.

Before publishing, replace at least:

- `SITE.url`
- `SITE.author`
- `SITE.social`
- `SITE.description`
- `SITE.tagline`
- Newsletter, comments, and analytics settings

Newsletter, comments, and analytics are disabled by default so the theme does not trigger third-party requests out of the box.

## 双语内容 / Bilingual Setup

SignalPaper 默认使用两套语言目录：

- `en`
- `zh`

英文路由不带语言前缀，中文路由位于 `/zh`。

新增双语文章时，通常创建一组同名文件：

```text
src/content/posts/en/my-post.md
src/content/posts/zh/my-post.md
```

SignalPaper uses two locale buckets by default:

- `en`
- `zh`

English routes are unprefixed. Chinese routes live under `/zh`.

For bilingual publishing, create matching files:

```text
src/content/posts/en/my-post.md
src/content/posts/zh/my-post.md
```

## 内置功能 / Built-in Features

Search:
Search is powered by Pagefind and exposed through the header modal. It covers published post and project detail pages.

RSS:
RSS is available at `/rss.xml`.

Comments:
Comments are disabled by default. Configure `SITE.comments` to enable Giscus.

Newsletter:
Newsletter is disabled by default. Set `SITE.newsletter.enabled` and `SITE.newsletter.actionUrl` to enable a form provider.

Analytics:
Analytics is disabled by default. Set `SITE.analytics.enabled` and provider credentials before production.

SEO / GEO:
SignalPaper ships with canonical URLs, Open Graph, Twitter cards, sitemap, robots, RSS, JSON-LD, and `llms.txt`. Replace the default URL and content before publishing.

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

这是一个纯静态站点，可以部署到：

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

This is a static site and can be deployed to:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

