import type { APIRoute } from 'astro';
import { getRouteEntries, toAbsoluteUrl } from '../lib/discovery';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const routes = await getRouteEntries();

  const body = `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">` +
    routes.map((route) => {
      const alternates = route.alternates
        ? Object.entries(route.alternates)
            .map(([lang, path]) => {
              const hrefLang = lang === 'zh' ? 'zh-CN' : 'en';
              return `<xhtml:link rel="alternate" hreflang="${hrefLang}" href="${escapeXml(toAbsoluteUrl(path!))}" />`;
            })
            .join('') +
          (route.alternates.en
            ? `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(toAbsoluteUrl(route.alternates.en))}" />`
            : '')
        : '';

      const lastmod = route.lastmod ? `<lastmod>${route.lastmod.toISOString()}</lastmod>` : '';

      return `<url><loc>${escapeXml(route.url)}</loc>${lastmod}${alternates}</url>`;
    }).join('') +
    `</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
