export const languages = {
  en: 'EN',
  zh: 'ZH',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    'nav.search': 'SEARCH',
    'nav.home': 'Home',
    'nav.now': 'NOW',
    'nav.about': 'ABOUT',

    // Sections
    'section.writings': 'Writings',
    'section.tags': 'Tags',
    'section.projects': 'Projects',

    // Arrows / see all
    'link.seeAll': '→',
    'link.allWritings': 'All writings',
    'link.allProjects': 'All projects',

    // Homepage hero links
    'hero.now': 'Now',
    'hero.github': 'GitHub',
    'hero.x': 'X',
    'hero.email': 'Email',
    'hero.rss': 'RSS',

    // Post/article meta
    'post.readingTime': '{n} min read',
    'post.updatedOn': 'Updated on',
    'post.publishedOn': 'Published on',
    'post.tags': 'Tags',
    'post.backToWritings': '← Back to writings',
    'post.toc': 'Contents',

    // Project meta
    'project.status.idea': 'IDEA',
    'project.status.active': 'ACTIVE',
    'project.status.completed': 'COMPLETED',
    'project.status.archived': 'ARCHIVED',
    'project.status.paused': 'PAUSED',
    'project.status.shipped': 'SHIPPED',
    'project.backToProjects': '← Back to projects',

    // Tags page
    'tags.title': 'Tags',
    'tags.postCount': '{n} posts',

    // Search
    'search.placeholder': 'Search writings and projects…',
    'search.noResults': 'No results found.',

    // Footer
    'footer.tagline': 'SignalPaper is an Astro Creator OS theme.',

    // Newsletter
    'newsletter.title': 'Follow Me',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.button': 'Sign Up',

    // SEO fallbacks
    'meta.description': 'Personal site and writing archive.',

    // 404
    '404.title': 'Page not found',
    '404.body': 'The page you\'re looking for doesn\'t exist.',
    '404.home': 'Go home',
  },
  zh: {
    // Navigation
    'nav.search': 'SEARCH',
    'nav.home': '首页',
    'nav.now': '近况',
    'nav.about': '关于我',

    // Sections
    'section.writings': '写作',
    'section.tags': '标签',
    'section.projects': '项目',

    // Arrows / see all
    'link.seeAll': '→',
    'link.allWritings': '全部文章',
    'link.allProjects': '全部项目',

    // Homepage hero links
    'hero.now': 'NOW',
    'hero.github': 'GitHub',
    'hero.x': 'X',
    'hero.email': 'Email',
    'hero.rss': 'RSS',

    // Post/article meta
    'post.readingTime': '约 {n} 分钟',
    'post.updatedOn': '更新于',
    'post.publishedOn': '发布于',
    'post.tags': '标签',
    'post.backToWritings': '← 返回写作列表',
    'post.toc': '目录',

    // Project meta
    'project.status.idea': '构想',
    'project.status.active': '进行中',
    'project.status.completed': '已完成',
    'project.status.archived': '已归档',
    'project.status.paused': '暂停',
    'project.status.shipped': '已发布',
    'project.backToProjects': '← 返回项目列表',

    // Tags page
    'tags.title': '标签',
    'tags.postCount': '{n} 篇',

    // Search
    'search.placeholder': '搜索文章和项目…',
    'search.noResults': '没有找到相关内容。',

    // Footer
    'footer.tagline': 'SignalPaper 是一个 Astro Creator OS 主题。',

    // Newsletter
    'newsletter.title': '关注我',
    'newsletter.placeholder': '输入你的邮箱地址',
    'newsletter.button': '邮件订阅',

    // SEO fallbacks
    'meta.description': '个人网站与写作存档。',

    // 404
    '404.title': '页面未找到',
    '404.body': '您访问的页面不存在。',
    '404.home': '返回首页',
  },
} as const;

export type UIKey = keyof typeof ui.en;
