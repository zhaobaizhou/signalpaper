---
title: SignalPaper
description: An Astro Creator OS theme for independent creators who write, build, and publish with judgment.
pubDatetime: 2026-01-01T10:00:00+08:00
draft: false
featured: true
categories: project
status: active
year: 2026
tags:
  - creator-os
  - astro
  - theme
summary: A lightweight, minimal Astro theme designed for independent writers and builders. Bilingual (EN/ZH), dark/light mode, SEO + GEO optimized.
---

SignalPaper is the theme you're currently looking at.

It was designed for independent creators who prioritize judgment over volume. The goal was a site that reveals how you think, not just what you've shipped.

## Design decisions

**Minimal by default.** No sidebars, no featured images required, no comment sections. The content is the interface.

**Bilingual first.** Chinese and English live in parallel content trees, with Astro's native i18n routing. The language switch in the header maintains your current page context.

**Dark/light auto-mode.** The theme reads local time on load (6am–8pm = light, rest = dark) and stores user preference in localStorage. No flash of unstyled content.

**Featured content system.** Use `featured: true` in frontmatter to surface your best work on the homepage. Gold dots (◆) mark featured items in the list.

**Status badges for projects.** Use `status: active | paused | shipped | completed | archived | idea` to show where each project stands.

## Stack

- Astro 6 with Content Collections
- Vanilla CSS with custom properties
- No JavaScript frameworks
- MDX for rich content
- @astrojs/sitemap, @astrojs/rss
- `/llms.txt` for GEO (AI agent accessibility)
