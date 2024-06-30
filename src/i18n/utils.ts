import { ui, defaultLocale } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLocale;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLocale]) {
    // @ts-ignore
    return ui[lang][key] || ui[defaultLocale][key];
  };
}

export function translateUrl(url: URL, slug: string): string {
  const lang = getLangFromUrl(url);
  const currentUrl = new URL(url);
  currentUrl.pathname = lang == defaultLocale ? `${slug}` : `/${lang}/${slug}`;
  currentUrl.pathname += currentUrl.pathname.endsWith("/") ? "" : "/";
  return currentUrl.toString();
}
