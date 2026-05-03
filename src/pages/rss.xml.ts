import rss from '@astrojs/rss';
import { getAllContentEntries } from '../lib/discovery';
import { SITE } from '../config/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const entries = await getAllContentEntries();

  return rss({
    title: `${SITE.name} — Full Site Feed`,
    description: 'Unified feed for SignalPaper posts and projects in English and Chinese.',
    site: context.site ?? SITE.url,
    items: entries.map((entry) => ({
      title: entry.kind === 'project' ? `[${entry.lang.toUpperCase()} Project] ${entry.title}` : `[${entry.lang.toUpperCase()}] ${entry.title}`,
      pubDate: entry.pubDatetime,
      description: entry.summary ?? entry.description,
      link: entry.path,
      categories: [
        ...entry.tags,
        `lang:${entry.lang}`,
        `type:${entry.kind}`,
        ...(entry.status ? [`status:${entry.status}`] : []),
      ],
    })),
    customData: `<language>en-us</language><atom:link href="${new URL('/rss.xml', context.site ?? SITE.url).href}" rel="self" type="application/rss+xml" xmlns:atom="http://www.w3.org/2005/Atom" />`,
    stylesheet: false,
  });
}
