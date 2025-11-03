// src/lib/i18n.ts
import type { Language } from '@/types';
import { translations } from '@/data/translations';

/**
 * 获取翻译文本
 */
export function t(key: string, lang: Language = 'en', fallback?: string): string {
  return translations[lang]?.[key] || fallback || key;
}

/**
 * 获取当前语言的路径前缀
 */
export function getLanguagePrefix(lang: Language): string {
  return `/${lang}`;
}

/**
 * 从路径中提取语言
 */
export function extractLanguageFromPath(path: string): Language {
  const match = path.match(/^\/(en|cn)(\/|$)/);
  return (match?.[1] as Language) || 'en';
}

/**
 * 切换语言路径
 */
export function switchLanguagePath(currentPath: string, targetLang: Language): string {
  const currentLang = extractLanguageFromPath(currentPath);
  return currentPath.replace(`/${currentLang}`, `/${targetLang}`);
}

/**
 * 获取本地化的路径
 */
export function getLocalizedPath(path: string, lang: Language): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${getLanguagePrefix(lang)}${cleanPath}`;
}

/**
 * 格式化日期（本地化）
 */
export function formatDate(
  date: string | Date,
  lang: Language,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const locale = lang === 'cn' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(locale, options).format(d);
}

/**
 * 格式化数字（本地化）
 */
export function formatNumber(
  num: number,
  lang: Language,
  options?: Intl.NumberFormatOptions
): string {
  const locale = lang === 'cn' ? 'zh-CN' : 'en-US';
  return new Intl.NumberFormat(locale, options).format(num);
}

/**
 * 获取语言显示名称
 */
export function getLanguageDisplayName(lang: Language, displayLang: Language = 'en'): string {
  const names: Record<Language, Record<Language, string>> = {
    en: { en: 'English', cn: '英语' },
    cn: { en: 'Chinese', cn: '中文' },
  };
  return names[lang][displayLang];
}
