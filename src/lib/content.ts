import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/utils';

/** Get published posts for a given language, sorted newest first */
export async function getPosts(lang: Lang, includeDraft = false) {
  const all = await getCollection('posts', ({ id, data }) => {
    const isLang = id.startsWith(`${lang}/`);
    const isPublished = includeDraft || !data.draft;
    return isLang && isPublished;
  });
  return all.sort((a, b) => {
    if (a.data.featured && !b.data.featured) return -1;
    if (!a.data.featured && b.data.featured) return 1;
    return b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf();
  });
}

/** Get published projects for a given language, sorted newest first */
export async function getProjects(lang: Lang, includeDraft = false) {
  const all = await getCollection('projects', ({ id, data }) => {
    const isLang = id.startsWith(`${lang}/`);
    const isPublished = includeDraft || !data.draft;
    return isLang && isPublished;
  });

  const statusWeight: Record<string, number> = {
    active: 1,
    shipped: 2,
    completed: 3,
    idea: 4,
    paused: 5,
    archived: 6,
  };

  return all.sort((a, b) => {
    // 1. Featured first
    if (a.data.featured && !b.data.featured) return -1;
    if (!a.data.featured && b.data.featured) return 1;

    // 2. Sort by status
    const weightA = a.data.status ? statusWeight[a.data.status] || 99 : 99;
    const weightB = b.data.status ? statusWeight[b.data.status] || 99 : 99;
    if (weightA !== weightB) {
      return weightA - weightB;
    }

    // 3. Sort by date descending
    return b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf();
  });
}

/** Get featured posts */
export async function getFeaturedPosts(lang: Lang) {
  const posts = await getPosts(lang);
  return posts.filter(p => p.data.featured);
}

/** Aggregate all tags from posts + projects with counts */
export async function getTagsWithCount(lang: Lang): Promise<{ name: string; count: number }[]> {
  const [posts, projects] = await Promise.all([getPosts(lang), getProjects(lang)]);
  const tagMap = new Map<string, number>();

  for (const item of [...posts, ...projects]) {
    for (const tag of item.data.tags ?? []) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    }
  }

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/** Get slug from collection entry ID (strip lang prefix) */
export function getSlug(id: string): string {
  return id.replace(/^(en|zh)\//, '').replace(/\.(md|mdx)$/, '');
}
