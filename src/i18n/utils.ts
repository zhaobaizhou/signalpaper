import { ui, languages, type Lang, type UIKey } from './ui';

export function getLang(url: URL): Lang {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment in languages) {
    return firstSegment as Lang;
  }
  return 'en';
}

export function getLangFromSlug(slug: string): Lang {
  const prefix = slug.split('/')[0];
  if (prefix in languages) {
    return prefix as Lang;
  }
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string | number>): string {
    let str: string = ui[lang][key] ?? ui['en'][key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(`{${k}}`, String(v));
      }
    }
    return str;
  };
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'zh' : 'en';
}

export function getLocalePath(lang: Lang, path: string): string {
  if (lang === 'en') return path.startsWith('/') ? path : `/${path}`;
  return `/zh${path.startsWith('/') ? path : `/${path}`}`;
}

export function getAlternatePath(currentLang: Lang, currentPath: string): string {
  const altLang = getAlternateLang(currentLang);
  if (currentLang === 'en') {
    // en → zh: prepend /zh
    return `/zh${currentPath}`;
  } else {
    // zh → en: strip /zh prefix
    return currentPath.replace(/^\/zh/, '') || '/';
  }
}

export { languages };
export type { Lang };
