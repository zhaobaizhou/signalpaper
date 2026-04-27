import type { APIRoute } from 'astro';
import { getPosts, getProjects } from '../lib/content';
import { SITE } from '../config/site';

export const GET: APIRoute = async () => {
  const [enPosts, enProjects] = await Promise.all([
    getPosts('en'),
    getProjects('en'),
  ]);

  const items = [
    ...enPosts.map(p => ({
      title: p.data.title,
      description: p.data.description,
      url: `/posts/${p.id.replace(/^en\//, '').replace(/\.(md|mdx)$/, '')}`,
      tags: p.data.tags ?? [],
    })),
    ...enProjects.map(p => ({
      title: p.data.title,
      description: p.data.description,
      url: `/projects/${p.id.replace(/^en\//, '').replace(/\.(md|mdx)$/, '')}`,
      tags: p.data.tags ?? [],
    })),
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
};
