---
title: 排版和媒体演示
description: 一篇用于展示标题、图片、视频、音频、表格和代码示例的文章。
pubDatetime: 2026-04-20T10:00:00+08:00
draft: false
featured: false
categories: post
tags:
  - creator-os
  - 主题
summary: 检查主题是否可以妥善处理真实文章元素。
---

这篇文章用于测试排版和媒体渲染。使用它来验证主题是否优雅地处理所有常见文章元素。

## 标题

### H3 标题

#### H4 标题

## 正文

常规段落文本。这是一段正常的中文文字，用于测试字体渲染和行高是否合适。中文排版有其特殊的规范，需要特别注意字间距和行间距。

**粗体文本**和*斜体文本*以及`行内代码`。一个[链接到某处](#)带有悬停下划线。

## 引用块

> 主题应让重要内容装置需要内容装置，而不是等作者已经拥有巨大归档。
>
> — SignalPaper 设计原则

## 代码块

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

## 表格

| 字段 | 必填 | 用途 |
|:---|:---|:---|
| `title` | 是 | 人类可读的标题 |
| `description` | 是 | 列表和SEO的简短摘要 |
| `featured` | 否 | 标记用于突出显示的内容 |
| `tags` | 否 | 主题标签 |

## 列表

无序列表：

- 第一项
- 第二项，有一个较长的描述，会换行到第二行
- 第三项

有序列表：

1. 第一步
2. 第二步
3. 第三步

---

测试结束。
