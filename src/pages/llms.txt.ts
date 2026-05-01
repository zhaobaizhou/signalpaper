import type { APIRoute } from 'astro';
import { getPosts, getProjects } from '../lib/content';
import { SITE } from '../config/site';

export const GET: APIRoute = async () => {
  const [enPosts, zhPosts, enProjects, zhProjects] = await Promise.all([
    getPosts('en'),
    getPosts('zh'),
    getProjects('en'),
    getProjects('zh'),
  ]);
  const contactLines = [
    SITE.social.github && `- GitHub: ${SITE.social.github}`,
    SITE.social.x && `- X / Twitter: ${SITE.social.x}`,
    SITE.social.email && `- Email: ${SITE.social.email}`,
    SITE.social.rss && `- RSS: ${SITE.url}${SITE.social.rss}`,
  ].filter(Boolean);

  const lines: string[] = [
    `# ${SITE.name}`,
    `> ${SITE.description}`,
    ``,
    `## About`,
    `Author: ${SITE.author.name}`,
    `Site: ${SITE.url}`,
    ``,
    `## Writings (English)`,
    ``,
    ...enPosts.map(p => {
      const slug = p.id.replace(/^en\//, '').replace(/\.(md|mdx)$/, '');
      return `- [${p.data.title}](${SITE.url}/posts/${slug}): ${p.data.description}`;
    }),
    ``,
    `## Writings (Chinese)`,
    ``,
    ...zhPosts.map(p => {
      const slug = p.id.replace(/^zh\//, '').replace(/\.(md|mdx)$/, '');
      return `- [${p.data.title}](${SITE.url}/zh/posts/${slug}): ${p.data.description}`;
    }),
    ``,
    `## Projects (English)`,
    ``,
    ...enProjects.map(p => {
      const slug = p.id.replace(/^en\//, '').replace(/\.(md|mdx)$/, '');
      const status = p.data.status ? ` [${p.data.status.toUpperCase()}]` : '';
      return `- [${p.data.title}](${SITE.url}/projects/${slug})${status}: ${p.data.description}`;
    }),
    ``,
    `## Projects (Chinese)`,
    ``,
    ...zhProjects.map(p => {
      const slug = p.id.replace(/^zh\//, '').replace(/\.(md|mdx)$/, '');
      const status = p.data.status ? ` [${p.data.status.toUpperCase()}]` : '';
      return `- [${p.data.title}](${SITE.url}/zh/projects/${slug})${status}: ${p.data.description}`;
    }),
    ...(contactLines.length > 0 ? [``, `## Contact`, ...contactLines] : []),
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
