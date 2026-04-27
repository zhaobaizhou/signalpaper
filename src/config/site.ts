export const SITE = {
  name: 'SignalPaper',
  tagline: 'A creator OS homepage theme.',
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
};

export type SiteConfig = typeof SITE;
