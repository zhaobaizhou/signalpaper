---
title: Typography and media specimen
description: A future post that demonstrates headings, images, video, audio, tables, and code.
pubDatetime: 2026-04-20T10:00:00+08:00
draft: false
featured: false
categories: post
tags:
  - creator-os
  - theme
summary: Use this page when checking whether a theme handles real article elements.
---

This post exists to test typography and media rendering. Use it to verify that the theme handles all common article elements gracefully.

## Headings

### H3 heading

#### H4 heading

## Body text

Regular paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

**Bold text** and *italic text* and `inline code`. A [link to somewhere](#) with hover underline.

## Blockquote

> A theme should make the important work visible before the archive is large.
>
> — SignalPaper design principle

## Code block

```typescript
interface Post {
  title: string;
  description: string;
  pubDatetime: Date;
  featured: boolean;
  tags: string[];
}

function formatDate(date: Date, lang: 'en' | 'zh'): string {
  return date.toLocaleDateString(
    lang === 'zh' ? 'zh-CN' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );
}
```

## Table

| Field | Required | Purpose |
|:---|:---|:---|
| `title` | yes | Human-readable title |
| `description` | yes | Short summary for lists and SEO |
| `featured` | no | Marks content for highlighted placements |
| `tags` | no | Topic tags |

## List

Unordered:

- First item
- Second item with a longer description that wraps to a second line
- Third item

Ordered:

1. First step
2. Second step
3. Third step

## Horizontal rule

---

End of specimen.
