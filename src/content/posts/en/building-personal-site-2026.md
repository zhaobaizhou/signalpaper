---
title: "Building a personal site in 2026: what actually matters"
description: A practical guide to the decisions that matter when building and maintaining a personal website in the current landscape.
pubDatetime: 2026-02-01T09:00:00+08:00
draft: false
featured: false
categories: post
tags:
  - publishing
  - tools
summary: Frameworks have gotten better. The fundamental questions haven't changed.
---

Personal websites have gotten easier to build and harder to maintain meaningfully. Here's how I think about the decisions that actually matter.

## The decisions that actually matter

### 1. Will you write for it?

The technology question is irrelevant if the answer is no.

Before you choose a framework or design a layout, ask: do you have a writing habit, or are you hoping the tool will create one? It won't. The tool will enable an existing habit, or it'll be a beautiful ghost town.

If you don't have a writing habit yet, start with something simple — even a Notion page or a Google Doc shared publicly — and prove to yourself that you'll write. Then build the site.

### 2. What is the site actually for?

Personal sites serve different purposes for different people. Be clear about yours:

- **A writing archive**: The site is a durable home for your thinking. You write, you publish, you let it accumulate.
- **A professional presence**: The site demonstrates your work and makes it easy to understand what you do.
- **A project hub**: The site documents and links to your projects, which live elsewhere.
- **A combination**: Most sites are some combination, but you need to know which function comes first.

The purpose determines the structure. A writing archive prioritizes readability and findability. A professional presence prioritizes the right first impression for the right visitors.

### 3. What do you want to be findable?

SEO is not primarily a technical problem. It's a question of what you want to rank for and whether you're actually writing about it.

The technical basics are easy with any modern framework: semantic HTML, proper meta tags, reasonable load time, mobile-responsive. Those take an afternoon.

What takes years is establishing authority on a topic through consistent, substantive writing. That's the hard part, and no framework helps with it.

### 4. How much do you want to own versus delegate?

The spectrum runs from:
- **Full ownership**: Self-hosted server, custom code, complete control and complete maintenance burden
- **Managed hosting**: Vercel/Netlify with a framework like Astro or Next.js — you own the code but delegate infrastructure
- **Hosted builder**: Squarespace, Webflow, Cargo — you own the content but delegate everything else
- **Platform**: Substack, Medium — you own basically nothing but get their distribution

More ownership = more control + more maintenance cost. Choose based on how much time you want to spend on the infrastructure vs. the content.

For most people who want to write: managed hosting with a static site framework is the sweet spot. Low maintenance, full content ownership, reasonable customization.

## What I use

For this site: Astro, deployed to Vercel, content in Markdown files in the repo. I own the content, own the code, and don't have to think about servers. Deployment takes about 30 seconds when I push new content.

The setup took a week to build. Ongoing maintenance is maybe an hour a month.

## What doesn't matter

- Which JavaScript framework you use (they're all fine for content sites)
- Whether you use a CMS or Markdown files (both work)
- Whether the design is custom or from a theme (readers don't care)
- The exact shade of the accent color

What matters: you publish things worth reading, on a site you'll maintain, with URLs that work.

The rest is preference.
