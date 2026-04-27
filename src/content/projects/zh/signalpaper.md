---
title: SignalPaper
description: 一个面向独立创作者的 Astro Creator OS 主题，适合有判断力地写作、构建和发布。
pubDatetime: 2026-01-01T10:00:00+08:00
draft: false
featured: true
categories: project
status: active
year: 2026
tags:
  - creator-os
  - astro
  - 主题
summary: 一个轻量极简的 Astro 主题，专为独立作家和构建者设计。支持双语（中英文）、深色/浅色模式，SEO + GEO 优化。
---

SignalPaper 就是你现在正在看的这个主题。

它为优先考虑判断而非数量的独立创作者而设计。目标是建立一个能揭示你如何思考的网站，而不仅仅是你发布了什么。

## 设计决策

**默认极简。** 没有侧边栏，不需要特色图片，没有评论区。内容即界面。

**双语优先。** 中文和英文内容并行存放，使用 Astro 的原生 i18n 路由。头部的语言切换器会保持当前页面的上下文。

**深色/浅色自动模式。** 主题在加载时读取本地时间（6点-20点 = 浅色，其余 = 深色），并将用户偏好存储在 localStorage 中。没有未样式化内容的闪烁。

**精选内容系统。** 在前置元数据中使用 `featured: true` 来在主页展示你的最佳作品。金点（◆）标记列表中的精选项目。

**项目状态徽章。** 使用 `status: active | paused | shipped | completed | archived | idea` 来显示每个项目的进展。

## 技术栈

- Astro 6 内容集合
- 纯 CSS 自定义属性
- 无 JavaScript 框架
- MDX 富文本内容
- @astrojs/sitemap、@astrojs/rss
- `/llms.txt` 用于 GEO（AI 代理可访问性）
