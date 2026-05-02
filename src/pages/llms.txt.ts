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
    `## What this is`,
    `SignalPaper is a minimalist Astro theme for builders, writers, and AI-native personal sites.`,
    `Site: ${SITE.url}`,
    `Repository: replace this with the public theme repository URL after release.`,
    ``,
    `## High-value entry points`,
    `- [Features](${SITE.url}/features): Core theme capabilities and default surfaces.`,
    `- [Docs](${SITE.url}/docs): Configuration, content model, bilingual setup, and search.`,
    `- [Getting Started](${SITE.url}/docs/getting-started): Install, build, and replace the demo content.`,
    `- [Configuration](${SITE.url}/docs/configuration): Site config, production URL, and integration settings.`,
    `- [Content Model](${SITE.url}/docs/content-model): Posts, projects, and language folders.`,
    `- [Bilingual Setup](${SITE.url}/docs/bilingual): English and Chinese route structure.`,
    `- [Search](${SITE.url}/docs/search): Pagefind search behavior and preview notes.`,
    `- [FAQ](${SITE.url}/faq): Common questions about using the theme.`,
    ``,
    `## Demo writings (English)`,
    ``,
    ...enPosts.map(p => {
      const slug = p.id.replace(/^en\//, '').replace(/\.(md|mdx)$/, '');
      return `- [${p.data.title}](${SITE.url}/posts/${slug}): ${p.data.description}`;
    }),
    ``,
    `## Demo writings (Chinese)`,
    ``,
    ...zhPosts.map(p => {
      const slug = p.id.replace(/^zh\//, '').replace(/\.(md|mdx)$/, '');
      return `- [${p.data.title}](${SITE.url}/zh/posts/${slug}): ${p.data.description}`;
    }),
    ``,
    `## Demo projects (English)`,
    ``,
    ...enProjects.map(p => {
      const slug = p.id.replace(/^en\//, '').replace(/\.(md|mdx)$/, '');
      const status = p.data.status ? ` [${p.data.status.toUpperCase()}]` : '';
      return `- [${p.data.title}](${SITE.url}/projects/${slug})${status}: ${p.data.description}`;
    }),
    ``,
    `## Demo projects (Chinese)`,
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
