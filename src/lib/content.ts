import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { getLocalePath } from '../i18n/utils';
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

/** Get posts for a given language, sorted by publish date descending */
async function getPostsByDate(lang: Lang, includeDraft = false) {
  const all = await getCollection('posts', ({ id, data }) => {
    const isLang = id.startsWith(`${lang}/`);
    const isPublished = includeDraft || !data.draft;
    return isLang && isPublished;
  });

  return all.sort((a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf());
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

export async function getRelatedPosts(
  currentPost: CollectionEntry<'posts'>,
  lang: Lang,
  limit = 3
) {
  const posts = await getPostsByDate(lang);
  const others = posts.filter(post => post.id !== currentPost.id);
  const currentTags = new Set(currentPost.data.tags ?? []);

  const toCard = (post: CollectionEntry<'posts'>) => ({
    title: post.data.title,
    description: post.data.description,
    pubDatetime: post.data.pubDatetime,
    url: getLocalePath(lang, `/posts/${getSlug(post.id)}`),
  });

  if (currentTags.size === 0) {
    return others.slice(0, limit).map(toCard);
  }

  const ranked = others
    .map((post) => {
      const sharedTags = (post.data.tags ?? []).filter(tag => currentTags.has(tag)).length;
      return { post, sharedTags };
    })
    .filter(({ sharedTags }) => sharedTags > 0)
    .sort((a, b) => {
      if (a.sharedTags !== b.sharedTags) {
        return b.sharedTags - a.sharedTags;
      }
      return b.post.data.pubDatetime.valueOf() - a.post.data.pubDatetime.valueOf();
    })
    .map(({ post }) => post);

  return (ranked.length > 0 ? ranked : others).slice(0, limit).map(toCard);
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
