import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { getAllContentEntries, getRouteEntries } from '../lib/discovery';

export const GET: APIRoute = async () => {
  const [contentEntries, routeEntries] = await Promise.all([
    getAllContentEntries(),
    getRouteEntries(),
  ]);

  const lines: string[] = [
    `# ${SITE.name} full machine-readable summary`,
    `Site: ${SITE.url}`,
    `Repository: ${SITE.repository}`,
    `Author: ${SITE.author.name}`,
    `Description: ${SITE.description}`,
    ``,
    `## Site purpose`,
    `SignalPaper is a bilingual Astro theme and demo site focused on long-form writing, project archives, static search, and machine-readable publishing.`,
    `The root path is English. Chinese content lives under /zh.`,
    ``,
    `## Preferred crawl order`,
    `1. /for-agents`,
    `2. /llms.txt`,
    `3. /docs`,
    `4. /features`,
    `5. /posts`,
    `6. /projects`,
    ``,
    `## Canonical machine endpoints`,
    `- ${SITE.url}/sitemap.xml`,
    `- ${SITE.url}/rss.xml`,
    `- ${SITE.url}/llms.txt`,
    `- ${SITE.url}/llms-full.txt`,
    ``,
    `## Important routes`,
  ];

  for (const route of routeEntries) {
    if (!['/', '/zh/', '/for-agents', '/zh/for-agents', '/docs', '/zh/docs', '/features', '/zh/features', '/faq', '/zh/faq', '/posts', '/zh/posts', '/projects', '/zh/projects'].includes(route.path)) {
      continue;
    }

    lines.push(`- ${route.url}: ${route.description}`);
  }

  lines.push('', '## Content inventory');

  for (const entry of contentEntries) {
    const summary = entry.summary ?? entry.description;
    const excerpt = entry.body.slice(0, 280).trim();
    lines.push(`### ${entry.title}`);
    lines.push(`- URL: ${entry.url}`);
    lines.push(`- Type: ${entry.kind}`);
    lines.push(`- Language: ${entry.lang}`);
    lines.push(`- Published: ${entry.pubDatetime.toISOString()}`);
    if (entry.modDatetime) lines.push(`- Updated: ${entry.modDatetime.toISOString()}`);
    if (entry.status) lines.push(`- Status: ${entry.status}`);
    if (entry.tags.length > 0) lines.push(`- Tags: ${entry.tags.join(', ')}`);
    lines.push(`- Summary: ${summary}`);
    if (excerpt) lines.push(`- Excerpt: ${excerpt}`);
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
