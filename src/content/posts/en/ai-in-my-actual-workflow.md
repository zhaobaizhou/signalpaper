---
title: How I use AI in my actual workflow (not the hype version)
description: A realistic look at where AI tools add leverage and where they don't, based on a year of daily use.
pubDatetime: 2026-04-05T09:00:00+08:00
draft: false
featured: true
categories: post
tags:
  - ai-workflows
  - tools
  - independent-work
summary: I've used AI assistants every day for over a year. Here's the honest account of what helps and what doesn't.
---

A year ago I committed to integrating AI tools into everything I do, then keeping honest notes on what actually worked. This is that report.

The TL;DR: AI is genuinely useful in about six specific contexts, mediocre in another four, and actively harmful in two. The ratio is better than I expected, but the distribution is very different from the hype.

## Where AI actually helps

### 1. First draft generation from structure

My best use: I write a detailed outline or bullet structure, feed it to the AI, and get a workable first draft back. The output isn't publishable — it's usually too general, too hedged, and tonally off — but it's faster to edit a bad draft than to create from a blank page.

This works because I'm providing the structure and judgment. The AI is doing the transcription.

What doesn't work: asking the AI to come up with the structure. It will produce something plausible and deeply uninteresting.

### 2. Debugging and code explanation

Cursor (AI-powered VS Code fork) is excellent at this. I paste in an error, describe what I expect the code to do, and get accurate explanations 80%+ of the time.

For code I didn't write — legacy systems, unfamiliar frameworks — AI explanation is dramatically faster than documentation reading.

### 3. Research synthesis

Pasting several documents and asking for a synthesis across them. "What do these three product specs have in common, and what's in tension?" Works well when I've done the judgment about *which* documents to include.

### 4. Translation drafts

Chinese ↔ English technical content. AI translation is good enough to be a starting draft, but requires revision for nuance, register, and audience-specific vocabulary. The revision pass takes about 30% of the time that writing from scratch would.

### 5. Pattern-finding in data

Pasting structured data and asking for patterns, outliers, or groupings. Works better than I expected. The AI won't interpret *correctly*, but it surfaces things to look at.

### 6. Naming and headline generation

I describe the thing, ask for 20 name options, discard 18 immediately, and sometimes the remaining 2 spark what I actually use. Good as a generative input to judgment, not a replacement for it.

## Where AI is mediocre

### Strategy and prioritization

AI can enumerate options. It can't weigh them correctly for your specific context. When I ask "should I do X or Y first," the answer is always a sophisticated-sounding hedge that doesn't help.

### Editing for voice

AI editing makes text smoother and more generic simultaneously. It removes the idiosyncratic phrasings that make writing feel like it has an author. I've learned to not use it for editing — only for generation.

### Novel problem-solving

AI is a statistical prediction of what comes after what came before it in training. Genuinely novel problems don't have precedents in training data. The output looks confident but is often wrong in ways that are hard to detect.

### Long-form continuity

Across very long writing, AI loses the thread. Commitments made in paragraph 3 are forgotten by paragraph 15. This is improving with longer context windows but hasn't fully resolved.

## Where AI is harmful

### Judgment outsourcing

If you use AI to make decisions — which direction to take a project, which audience to write for, what to say in a difficult conversation — you erode your own judgment. You're not practicing. You're delegating.

Judgment requires reps. AI removes the reps.

### Creating the illusion of understanding

If you ask the AI to explain a concept, you might feel like you understand it. You don't. You understand the AI's explanation of it. These are very different. Real understanding comes from using the concept in novel situations. Explanations don't get you there alone.

---

## The actual workflow

Here's what a typical writing day looks like now:

1. I capture notes and rough thinking in Obsidian (no AI)
2. I structure an outline manually (no AI)
3. I generate a first draft from the outline (AI)
4. I heavily rewrite for voice, accuracy, and specificity (no AI)
5. I use AI to check for logical gaps I might have missed (AI)
6. Final read and publish (no AI)

AI is in steps 3 and 5. Not 1, 2, 4, or 6. The judgment is mine. The transcription and gap-check are delegated.

That ratio has stayed pretty stable for a year.

---

## What I'm watching

The context window improvements are the most interesting thing happening. When AI can reliably hold a whole project's worth of documents and reason across them without losing coherence, several of the "mediocre" categories might move to "helpful."

Until then: use it for generation, not judgment.
