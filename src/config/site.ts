export const SITE = {
  name: 'SignalPaper',
  tagline: {
    en: 'A bilingual, content-first Astro theme for long-form writing, project archives, and AI-readable personal sites.',
    zh: '一个双语、内容优先、面向 Agent 可读性的 Astro 作者站主题。',
  },
  description: 'A bilingual, content-first Astro theme for long-form writing, project archives, and AI-readable personal sites.',
  url: 'https://example.com',
  repository: 'https://github.com/zhaobaizhou/signalpaper',
  keywords: [
    'Astro theme',
    'bilingual publishing',
    'author site',
    'project archive',
    'AI-readable website',
    'GEO',
    'llms.txt',
  ],
  author: {
    name: 'Demo Author',
    url: 'https://example.com/about',
    bio: {
      en: 'A demo author profile for SignalPaper.\n\nReplace this with your own introduction before publishing.',
      zh: 'SignalPaper 的示例作者信息。\n\n发布前请替换为你自己的介绍。',
    },
  },
  locale: {
    // If true, enables the language switcher in the navigation header
    multiLanguage: true,
    default: 'en' as const,
    alternate: 'zh' as const,
  },
  social: {
    now: '/now',
    github: '',
    x: '',
    email: '',
    rss: '/rss.xml',
  },
  postsPerPage: 10,
  comments: {
    enabled: false,
    provider: 'giscus', // 'giscus' | 'waline'
    giscus: {
      repo: '',
      repoId: '',
      category: 'Announcements',
      categoryId: '',
      mapping: 'pathname',
      reactionsEnabled: '1',
      emitMetadata: '0',
      theme: 'preferred_color_scheme',
      lang: 'en',
    }
  },
  analytics: {
    enabled: false,
    provider: 'google', // 'google' | 'umami' | 'plausible'
    google: {
      measurementId: '',
    },
    umami: {
      websiteId: '',
      src: 'https://us.umami.is/script.js',
    }
  },
  newsletter: {
    enabled: false,
    actionUrl: '',
  }
};

export type SiteConfig = typeof SITE;
