import { SITE } from '../config/site';
import { toAbsoluteUrl } from './discovery';

type SchemaRecord = Record<string, any>;

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): SchemaRecord {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function buildCollectionPageSchema({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: Array<{ name: string; path: string; description?: string }>;
}): SchemaRecord {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: toAbsoluteUrl(path),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: toAbsoluteUrl(item.path),
        name: item.name,
        description: item.description,
      })),
    },
  };
}

export function buildFaqSchema({
  path,
  questions,
}: {
  path: string;
  questions: Array<{ question: string; answer: string }>;
}): SchemaRecord {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: toAbsoluteUrl(path),
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
