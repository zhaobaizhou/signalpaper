// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { rehypeFigure } from './src/lib/rehype-figure.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://baizhou.me',
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
      defaultColor: false,
    },
    rehypePlugins: [rehypeFigure],
  },
});