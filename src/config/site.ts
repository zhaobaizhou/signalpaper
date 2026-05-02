export const SITE = {
  name: 'SignalPaper',
  tagline: {
    en: 'A minimalist Astro theme for builders, writers, and AI-native personal sites.',
    zh: '为创造者与长期写作者打造的极简 Astro 主题。',
  },
  description: 'A minimalist Astro theme for builders, writers, and AI-native personal sites.',
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
