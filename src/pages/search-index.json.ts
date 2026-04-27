import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const [enPosts, enProjects, zhPosts, zhProjects] = await Promise.all([
    getCollection('posts', ({ id, data }) => id.startsWith('en/') && !data.draft),
    getCollection('projects', ({ id, data }) => id.startsWith('en/') && !data.draft),
    getCollection('posts', ({ id, data }) => id.startsWith('zh/') && !data.draft),
    getCollection('projects', ({ id, data }) => id.startsWith('zh/') && !data.draft),
  ]);

  function makeSlug(id: string, prefix: string) {
    return id.replace(new RegExp(`^${prefix}/`), '').replace(/\.(md|mdx)$/, '');
  }

  const items = [
    ...enPosts.map(p => ({
      lang: 'en',
      type: 'post',
      title: p.data.title,
      description: p.data.description,
      summary: p.data.summary ?? '',
      body: (p as any).body ?? '',
      tags: p.data.tags ?? [],
      url: `/posts/${makeSlug(p.id, 'en')}`,
      pubDatetime: p.data.pubDatetime.toISOString(),
    })),
    ...enProjects.map(p => ({
      lang: 'en',
      type: 'project',
      title: p.data.title,
      description: p.data.description,
      summary: p.data.summary ?? '',
      body: (p as any).body ?? '',
      tags: p.data.tags ?? [],
      url: `/projects/${makeSlug(p.id, 'en')}`,
      pubDatetime: p.data.pubDatetime.toISOString(),
    })),
    ...zhPosts.map(p => ({
      lang: 'zh',
      type: 'post',
      title: p.data.title,
      description: p.data.description,
      summary: p.data.summary ?? '',
      body: (p as any).body ?? '',
      tags: p.data.tags ?? [],
      url: `/zh/posts/${makeSlug(p.id, 'zh')}`,
      pubDatetime: p.data.pubDatetime.toISOString(),
    })),
    ...zhProjects.map(p => ({
      lang: 'zh',
      type: 'project',
      title: p.data.title,
      description: p.data.description,
      summary: p.data.summary ?? '',
      body: (p as any).body ?? '',
      tags: p.data.tags ?? [],
      url: `/zh/projects/${makeSlug(p.id, 'zh')}`,
      pubDatetime: p.data.pubDatetime.toISOString(),
    })),
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
