---
title: The tools I actually use, and why I stopped chasing new ones
description: A curated list of the software stack I've settled on after years of switching, and the philosophy behind stopping.
pubDatetime: 2026-04-15T09:00:00+08:00
draft: false
featured: true
categories: post
tags:
  - tools
  - systems
  - independent-work
summary: After five years of chasing the perfect setup, I stopped optimizing my tools and started using them. Here's what survived.
---

There's a productivity trap that catches almost everyone who works independently. It goes like this: you discover a new tool, it solves one problem beautifully, so you start wondering if it can solve *all* your problems. You migrate everything. Six months later, you're doing it again.

I spent four years in that loop. Then I stopped.

This is not a gear review. It's more like a post-mortem on why I finally stopped switching, and what the stable stack looks like now.

## The philosophy shift

The tools I use aren't the best tools available. They're the tools I've used long enough to *think in*. There's a difference.

When you know a tool deeply — when the interface disappears and you're just working — you get leverage. That leverage doesn't transfer. Every migration costs it.

> The goal is not to have the best tools. The goal is to have tools you've stopped noticing.

I now evaluate tools on one primary axis: **will I still be using this in three years?** If the answer is probably not, I don't start.

## Writing: Obsidian + iA Writer

**Obsidian** handles everything that needs to link together: notes, research, project tracking, decision logs. I use it as a second brain, not a writing app. The graph view is mostly useless for me. The local-first, plain Markdown storage is not.

**iA Writer** is where I write for publication. It has exactly one mode: focused text. No plugins, no graph, no database. It opens fast and disappears.

The handoff is simple: when something from Obsidian is ready to become a real piece, it goes into iA Writer. When it's done, it goes into the site's content folder.

## Task management: Plain text

I tried Things, Linear, Notion, Craft, Todoist. I now use a single Markdown file called `now.md` that lives in Obsidian. It has three sections:

```markdown
## This week
- [ ] Write the tools post
- [ ] Review signalpaper theme

## This month
- ...

## Parking lot
- ...
```

This sounds too simple to work. It works.

The reason is that task managers optimized for capture are terrible for decision-making. When you have 200 tasks and infinite views, you spend your energy organizing, not executing.

## Communication: Email only

I killed Slack. I killed WhatsApp notifications. I check email twice a day.

This is the highest-leverage change I've made. The cognitive cost of context-switching for messages was eating 20-30% of my productive capacity.

Async by default changes everything.

## Development: Terminal + VS Code + Cursor

Nothing novel here. I use VS Code for most editing, Cursor when I want AI help inline, and the terminal for everything else. `zsh` with a minimal config.

I tried switching to Neovim twice. Decided the setup cost wasn't worth it for my work.

## What I cut

The more interesting list is what I removed:

- **Notion**: Too slow, too flexible, too easy to build elaborate systems that don't get used
- **Roam Research**: Bidirectional links are genuinely useful but Roam's web-only, proprietary storage killed it for me
- **Superhuman**: Great product, not worth the subscription cost for how I use email
- **Raycast**: Useful, but I found myself opening it to find things I should have remembered
- **Any habit tracker**: Once tracking a habit becomes the habit, you've lost the plot

## The stable set

The criterion for something making the stable set: it must be locally hosted (or export to open formats), it must be cheap or free, and I must have used it for at least two years.

| Tool | Category | Years |
|:---|:---|:---|
| Obsidian | Notes / knowledge | 3 |
| iA Writer | Long-form writing | 4 |
| VS Code | Code editing | 5 |
| Terminal (zsh) | System work | 10+ |
| Fantastical | Calendar | 3 |
| Backblaze | Backup | 5 |

That's it. Six tools. Everything else is on a trial period.

## The real takeaway

The tool isn't the bottleneck. Your attention is.

Once you accept that, the question stops being "what's the best tool for X" and becomes "how do I spend less time managing tools and more time using them?"

The answer, in my case, was: **stop switching**.

---

## Media Display Tests

Here is a test for our new image caption and zoom feature:
![A minimalist desk setup](https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop)

Here is a YouTube responsive embed test:
<iframe width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Here is a Twitter embed test:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Design is not just what it looks like and feels like. Design is how it works.</p>&mdash; Steve Jobs (@stevejobs_bot) <a href="https://twitter.com/stevejobs_bot/status/123456789">January 9, 2007</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
