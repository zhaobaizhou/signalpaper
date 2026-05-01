export const SITE = {
  name: 'SignalPaper',
  tagline: {
    en: 'A personal writing and project site.',
    zh: '一个个人写作与项目站。',
  },
  description: 'Writing about AI workflows, product judgment, and small systems for independent work.',
  url: 'https://baizhou.me',
  author: {
    name: 'Baizhou',
    bio: {
      en: 'I write about AI workflows, product judgment, and small systems for independent work.\n\nTurning pressure, experience, and judgment into reusable personal assets.',
      zh: '我写 AI 工作流、产品判断，以及面向独立工作的轻量系统。\n\n把压力、经验和判断，整理成可复用的个人资产。',
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
    github: 'https://github.com/baizhou',
    x: 'https://x.com/baizhou',
    email: 'mailto:hi@baizhou.me',
    rss: '/rss.xml',
  },
  postsPerPage: 10,
  comments: {
    enabled: false,
    provider: 'giscus', // 'giscus' | 'waline'
    giscus: {
      repo: 'baizhou/signalpaper-comments', // Replace with your repo
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
    enabled: true,
    provider: 'google', // 'google' | 'umami' | 'plausible'
    google: {
      measurementId: 'G-XXXXXXXXXX', // Replace with your Measurement ID
    },
    umami: {
      websiteId: '',
      src: 'https://us.umami.is/script.js',
    }
  },
  newsletter: {
    enabled: true,
    // By default, this uses Buttondown. You can use any provider that accepts standard form POST.
    actionUrl: 'https://buttondown.com/api/emails/embed-subscribe/baizhou',
  }
};

export type SiteConfig = typeof SITE;
