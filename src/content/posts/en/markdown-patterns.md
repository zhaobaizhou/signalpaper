---
title: Markdown patterns for publishing
description: A compact specimen post that demonstrates the core Markdown and GFM elements SignalPaper is designed to present well.
pubDatetime: 2026-04-22T09:00:00+08:00
draft: false
featured: false
categories: post
tags:
  - markdown
  - documentation
  - writing
summary: Use this page to check headings, lists, quotes, tables, code, images, task lists, and footnotes in one place.
---

This page exists for one practical reason: a theme should ship with at least one article that exercises the common patterns authors actually use.

SignalPaper is built for calm long-form reading, but that only matters if the details hold up when prose gets mixed with links, code, quotes, lists, and notes.

## Headings and inline text

Good article typography starts with ordinary paragraphs. It should handle **strong text**, *emphasis*, inline `code`, and [links](/docs/content-model) without looking noisy.

Longer sections should also keep their hierarchy clear enough that readers can scan before they commit to reading line by line.

## Lists

Unordered lists are useful for grouping related points:

- Keep section titles short.
- Use metadata to support the article, not compete with it.
- Let navigation stay visible but restrained.

Ordered lists are useful when sequence matters:

1. Define the page clearly.
2. Remove visual friction.
3. Make the archive easier to revisit later.

Task lists are common in working notes and public build logs:

- [x] Reading progress
- [x] Related writings
- [x] Static search
- [ ] Your own content and editorial voice

## Quotes and callouts

> A good publishing theme should help readers stay oriented without making the interface the main event.

That rule applies to documentation as much as essays.

## Code

```ts
type DemoSection = {
  title: string;
  purpose: 'reading' | 'navigation' | 'documentation';
};

const sections: DemoSection[] = [
  { title: 'Markdown patterns', purpose: 'documentation' },
  { title: 'Long-form reading', purpose: 'reading' },
];
```

## Tables

| Element | Why it matters |
| --- | --- |
| Headings | Help readers scan structure |
| Lists | Break dense prose into steps |
| Code blocks | Support technical writing |
| Tables | Compare options compactly |

## Images

Images should feel integrated with the article instead of floating as unrelated decoration.

![SignalPaper default Open Graph preview](/og-default.png)

## Rules, notes, and endings

Sometimes an article needs a visual pause.

---

You can also include footnotes when a detail belongs nearby but not directly in the sentence.[^1]

[^1]: Footnotes are useful for sources, side notes, and implementation details that would otherwise interrupt the paragraph.
