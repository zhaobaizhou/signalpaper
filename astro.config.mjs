// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import { rehypeFigure } from './src/lib/rehype-figure.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://signalpaper-demo.vercel.app',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'one-dark-pro',
      },
      wrap: true,
      defaultColor: false,
    },
    rehypePlugins: [rehypeFigure],
  },
});
