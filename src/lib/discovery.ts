import { SITE } from '../config/site';
import { getPosts, getProjects, getSlug, getTagsWithCount } from './content';
import { getLocalePath, type Lang } from '../i18n/utils';

export type ContentKind = 'post' | 'project';

export interface ContentDiscoveryEntry {
  kind: ContentKind;
  lang: Lang;
  slug: string;
  path: string;
  url: string;
  title: string;
  description: string;
  summary?: string;
  tags: string[];
  status?: string;
  pubDatetime: Date;
  modDatetime?: Date | null;
  body: string;
}

export interface RouteDiscoveryEntry {
  path: string;
  url: string;
  lang?: Lang;
  title: string;
  description: string;
  lastmod?: Date;
  alternates?: Partial<Record<Lang, string>>;
}

const STATIC_ROUTE_DEFS: Array<{
  path: string;
  lang?: Lang;
  title: string;
  description: string;
  altKey?: string;
}> = [
  { path: '/', lang: 'en', title: 'Home', description: 'SignalPaper home page for the English demo.', altKey: 'home' },
  { path: '/zh/', lang: 'zh', title: '首页', description: 'SignalPaper 中文首页。', altKey: 'home' },
  { path: '/about', lang: 'en', title: 'About', description: 'About the SignalPaper theme and its intended use.', altKey: 'about' },
  { path: '/zh/about', lang: 'zh', title: '关于', description: '关于 SignalPaper 主题及其适用场景。', altKey: 'about' },
  { path: '/now', lang: 'en', title: 'Now', description: 'Current priorities and demo focus for SignalPaper.', altKey: 'now' },
  { path: '/zh/now', lang: 'zh', title: '近况', description: 'SignalPaper 当前展示重点与说明。', altKey: 'now' },
  { path: '/features', lang: 'en', title: 'Features', description: 'Core product and publishing surfaces in SignalPaper.', altKey: 'features' },
  { path: '/zh/features', lang: 'zh', title: '功能', description: 'SignalPaper 的核心页面与发布能力。', altKey: 'features' },
  { path: '/faq', lang: 'en', title: 'FAQ', description: 'Frequently asked questions about SignalPaper.', altKey: 'faq' },
  { path: '/zh/faq', lang: 'zh', title: 'FAQ', description: 'SignalPaper 常见问题。', altKey: 'faq' },
  { path: '/docs', lang: 'en', title: 'Docs', description: 'Documentation index for configuring and shipping SignalPaper.', altKey: 'docs-index' },
  { path: '/zh/docs', lang: 'zh', title: '文档', description: 'SignalPaper 中文文档入口。', altKey: 'docs-index' },
  { path: '/docs/getting-started', lang: 'en', title: 'Getting Started', description: 'Install and prepare SignalPaper for production.' },
  { path: '/docs/configuration', lang: 'en', title: 'Configuration', description: 'Configure site metadata, URLs, and integrations in SignalPaper.' },
  { path: '/docs/content-model', lang: 'en', title: 'Content Model', description: 'How SignalPaper organizes posts, projects, and language folders.' },
  { path: '/docs/bilingual', lang: 'en', title: 'Bilingual Setup', description: 'How SignalPaper handles English and Chinese publishing.' },
  { path: '/docs/search', lang: 'en', title: 'Search', description: 'How SignalPaper builds static search with Pagefind.' },
  { path: '/posts', lang: 'en', title: 'Writings', description: 'English writing archive.', altKey: 'posts-index' },
  { path: '/zh/posts', lang: 'zh', title: '写作', description: '中文文章归档。', altKey: 'posts-index' },
  { path: '/projects', lang: 'en', title: 'Projects', description: 'English project archive.', altKey: 'projects-index' },
  { path: '/zh/projects', lang: 'zh', title: '项目', description: '中文项目归档。', altKey: 'projects-index' },
  { path: '/tags', lang: 'en', title: 'Tags', description: 'English tag index.', altKey: 'tags-index' },
  { path: '/zh/tags', lang: 'zh', title: '标签', description: '中文标签索引。', altKey: 'tags-index' },
  { path: '/for-agents', lang: 'en', title: 'For Agents', description: 'High-signal orientation page for AI agents.', altKey: 'for-agents' },
  { path: '/zh/for-agents', lang: 'zh', title: '给 Agent 的说明', description: '给 AI Agent 的高信号站点导览页。', altKey: 'for-agents' },
  { path: '/rss.xml', title: 'RSS Feed', description: 'Unified site feed for posts and projects in both languages.' },
  { path: '/llms.txt', title: 'LLMs Summary', description: 'High-level machine-readable site summary.' },
  { path: '/llms-full.txt', title: 'LLMs Full', description: 'Detailed machine-readable site summary.' },
  { path: '/sitemap.xml', title: 'Sitemap', description: 'Primary sitemap for search engines and agents.' },
];

const ALT_KEY_TO_PATHS: Record<string, Partial<Record<Lang, string>>> = {
  home: { en: '/', zh: '/zh/' },
  about: { en: '/about', zh: '/zh/about' },
  now: { en: '/now', zh: '/zh/now' },
  features: { en: '/features', zh: '/zh/features' },
  faq: { en: '/faq', zh: '/zh/faq' },
  'docs-index': { en: '/docs', zh: '/zh/docs' },
  'posts-index': { en: '/posts', zh: '/zh/posts' },
  'projects-index': { en: '/projects', zh: '/zh/projects' },
  'tags-index': { en: '/tags', zh: '/zh/tags' },
  'for-agents': { en: '/for-agents', zh: '/zh/for-agents' },
};

export function toAbsoluteUrl(path: string) {
  return new URL(path, SITE.url).href;
}

export function stripMarkdown(markdown: string) {
  return markdown
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^>\s?/gm, '')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_~]/g, '')
    .replace(/\n{2,}/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function getAllContentEntries(): Promise<ContentDiscoveryEntry[]> {
  const [enPosts, zhPosts, enProjects, zhProjects] = await Promise.all([
    getPosts('en'),
    getPosts('zh'),
    getProjects('en'),
    getProjects('zh'),
  ]);

  return [...enPosts, ...zhPosts, ...enProjects, ...zhProjects]
    .map((entry) => {
      const lang = entry.id.startsWith('zh/') ? 'zh' : 'en';
      const kind = entry.collection === 'projects' ? 'project' : 'post';
      const slug = getSlug(entry.id);
      const basePath = kind === 'post' ? `/posts/${slug}` : `/projects/${slug}`;
      const path = getLocalePath(lang, basePath);

      return {
        kind,
        lang,
        slug,
        path,
        url: toAbsoluteUrl(path),
        title: entry.data.title,
        description: entry.data.description,
        summary: entry.data.summary,
        tags: entry.data.tags ?? [],
        status: 'status' in entry.data ? entry.data.status : undefined,
        pubDatetime: entry.data.pubDatetime,
        modDatetime: entry.data.modDatetime,
        body: stripMarkdown((entry as any).body ?? ''),
      };
    })
    .sort((a, b) => b.pubDatetime.valueOf() - a.pubDatetime.valueOf());
}

export async function getContentAlternateMap() {
  const entries = await getAllContentEntries();
  const map = new Map<string, Partial<Record<Lang, string>>>();

  for (const entry of entries) {
    const key = `${entry.kind}:${entry.slug}`;
    const current = map.get(key) ?? {};
    current[entry.lang] = entry.path;
    map.set(key, current);
  }

  return map;
}

export async function getRouteEntries(): Promise<RouteDiscoveryEntry[]> {
  const [contentEntries, contentAlternateMap, enTags, zhTags] = await Promise.all([
    getAllContentEntries(),
    getContentAlternateMap(),
    getTagsWithCount('en'),
    getTagsWithCount('zh'),
  ]);

  const routes: RouteDiscoveryEntry[] = STATIC_ROUTE_DEFS.map((route) => ({
    ...route,
    url: toAbsoluteUrl(route.path),
    alternates: route.altKey ? ALT_KEY_TO_PATHS[route.altKey] : undefined,
  }));

  for (const entry of contentEntries) {
    routes.push({
      path: entry.path,
      url: entry.url,
      lang: entry.lang,
      title: entry.title,
      description: entry.description,
      lastmod: entry.modDatetime ?? entry.pubDatetime,
      alternates: contentAlternateMap.get(`${entry.kind}:${entry.slug}`),
    });
  }

  const pagesByLang: Record<Lang, number> = {
    en: Math.ceil(contentEntries.filter((entry) => entry.lang === 'en' && entry.kind === 'post').length / SITE.postsPerPage),
    zh: Math.ceil(contentEntries.filter((entry) => entry.lang === 'zh' && entry.kind === 'post').length / SITE.postsPerPage),
  };

  for (const lang of ['en', 'zh'] as const) {
    for (let page = 2; page <= pagesByLang[lang]; page += 1) {
      const path = getLocalePath(lang, `/posts/${page}`);
      routes.push({
        path,
        url: toAbsoluteUrl(path),
        lang,
        title: lang === 'en' ? `Writings Page ${page}` : `写作第 ${page} 页`,
        description: lang === 'en' ? `English writings archive page ${page}.` : `中文文章归档第 ${page} 页。`,
        alternates: { en: `/posts/${page}`, zh: `/zh/posts/${page}` },
      });
    }
  }

  for (const tag of enTags) {
    routes.push({
      path: `/tags/${tag.name}`,
      url: toAbsoluteUrl(`/tags/${tag.name}`),
      lang: 'en',
      title: `Tag: ${tag.name}`,
      description: `English tag archive for ${tag.name}.`,
    });
  }

  for (const tag of zhTags) {
    routes.push({
      path: `/zh/tags/${tag.name}`,
      url: toAbsoluteUrl(`/zh/tags/${tag.name}`),
      lang: 'zh',
      title: `标签：${tag.name}`,
      description: `${tag.name} 的中文标签归档。`,
    });
  }

  return routes;
}

export function getAlternateLinks(
  alternates?: Partial<Record<Lang, string>>,
): Array<{ hrefLang: string; href: string }> {
  if (!alternates) return [];

  const links: Array<{ hrefLang: string; href: string }> = [];

  if (alternates.en) {
    links.push({ hrefLang: 'en', href: toAbsoluteUrl(alternates.en) });
    links.push({ hrefLang: 'x-default', href: toAbsoluteUrl(alternates.en) });
  }

  if (alternates.zh) {
    links.push({ hrefLang: 'zh-CN', href: toAbsoluteUrl(alternates.zh) });
  }

  return links;
}
