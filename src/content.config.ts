import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sharedSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDatetime: z.coerce.date(),
  modDatetime: z.coerce.date().optional().nullable(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  // categories: 'post' or 'project' — matches frontmatter-guide.md
  categories: z.union([
    z.enum(['post', 'project']),
    // Legacy Obsidian array format
    z.array(z.string()).transform(arr => arr[0] as 'post' | 'project'),
  ]),
  tags: z.array(z.string()).default([]),
  summary: z.string().optional(),
  canonicalURL: z.string().url().optional(),
  ogImage: z.string().optional(),
  timezone: z.string().optional(),
  hideEditPost: z.boolean().optional(),
  author: z.string().optional(),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: sharedSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: sharedSchema.extend({
    status: z
      .enum(['idea', 'active', 'completed', 'archived', 'paused', 'shipped'])
      .optional(),
    year: z.number().optional(),
  }),
});

export const collections = { posts, projects };
