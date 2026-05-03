import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { getAllContentEntries } from '../lib/discovery';

export const GET: APIRoute = async () => {
  const entries = await getAllContentEntries();
  const enPosts = entries.filter((entry) => entry.lang === 'en' && entry.kind === 'post');
  const zhPosts = entries.filter((entry) => entry.lang === 'zh' && entry.kind === 'post');
  const enProjects = entries.filter((entry) => entry.lang === 'en' && entry.kind === 'project');
  const zhProjects = entries.filter((entry) => entry.lang === 'zh' && entry.kind === 'project');
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
    `## Identity`,
    `SignalPaper is a bilingual Astro theme and demo site maintained by ${SITE.author.name}.`,
    `It is built for long-form writing, project archives, static search, and AI-readable personal publishing.`,
    `Site: ${SITE.url}`,
    `Repository: ${SITE.repository}`,
    `Author: ${SITE.author.name} (${SITE.author.url})`,
    ``,
    `## Best entry points for agents`,
    `- [For Agents](${SITE.url}/for-agents): Highest-signal orientation page for machine readers.`,
    `- [For Agents (Chinese)](${SITE.url}/zh/for-agents): Chinese orientation page.`,
    `- [LLMs Full](${SITE.url}/llms-full.txt): Expanded machine-readable summary of content and routes.`,
    `- [Features](${SITE.url}/features): Core theme capabilities and default surfaces.`,
    `- [Docs](${SITE.url}/docs): Configuration, content model, bilingual setup, and search.`,
    `- [Getting Started](${SITE.url}/docs/getting-started): Install, build, and replace the demo content.`,
    `- [Configuration](${SITE.url}/docs/configuration): Site config, production URL, and integration settings.`,
    `- [Content Model](${SITE.url}/docs/content-model): Posts, projects, and language folders.`,
    `- [Bilingual Setup](${SITE.url}/docs/bilingual): English and Chinese route structure.`,
    `- [Search](${SITE.url}/docs/search): Pagefind search behavior and preview notes.`,
    `- [FAQ](${SITE.url}/faq): Common questions about using the theme.`,
    ``,
    `## Language policy`,
    `- English is the default language at the root path.`,
    `- Chinese lives under /zh.`,
    `- Posts and projects usually have language counterparts with the same logical slug.`,
    `- Tag detail pages are language-specific and should not be assumed to be one-to-one translations.`,
    ``,
    `## Machine endpoints`,
    `- Sitemap: ${SITE.url}/sitemap.xml`,
    `- RSS: ${SITE.url}/rss.xml`,
    `- llms.txt: ${SITE.url}/llms.txt`,
    `- llms-full.txt: ${SITE.url}/llms-full.txt`,
    ``,
    `## Demo writings (English)`,
    ``,
    ...enPosts.map((entry) => `- [${entry.title}](${entry.url}): ${entry.description}`),
    ``,
    `## Demo writings (Chinese)`,
    ``,
    ...zhPosts.map((entry) => `- [${entry.title}](${entry.url}): ${entry.description}`),
    ``,
    `## Demo projects (English)`,
    ``,
    ...enProjects.map((entry) => {
      const status = entry.status ? ` [${entry.status.toUpperCase()}]` : '';
      return `- [${entry.title}](${entry.url})${status}: ${entry.description}`;
    }),
    ``,
    `## Demo projects (Chinese)`,
    ``,
    ...zhProjects.map((entry) => {
      const status = entry.status ? ` [${entry.status.toUpperCase()}]` : '';
      return `- [${entry.title}](${entry.url})${status}: ${entry.description}`;
    }),
    ...(contactLines.length > 0 ? [``, `## Contact`, ...contactLines] : []),
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
