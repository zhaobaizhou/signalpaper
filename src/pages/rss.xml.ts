import rss from '@astrojs/rss';
import { getPosts } from '../lib/content';
import { SITE } from '../config/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPosts('en');

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDatetime,
      description: post.data.description,
      link: `/posts/${post.id.replace(/^en\//, '').replace(/\.(md|mdx)$/, '')}`,
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
    stylesheet: false,
  });
}
