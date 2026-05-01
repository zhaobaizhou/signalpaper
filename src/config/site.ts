export const SITE = {
  name: 'SignalPaper',
  tagline: {
    en: 'A content-first Astro author theme.',
    zh: '一个内容优先的 Astro 作者站主题。',
  },
  description: 'A content-first Astro theme for writing, projects, tags, search, bilingual publishing, and long-form reading.',
  url: 'https://example.com',
  author: {
    name: 'Demo Author',
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
