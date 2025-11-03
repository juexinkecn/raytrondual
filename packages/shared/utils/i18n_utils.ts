// src/utils/i18n.ts
import type { Language } from '../types/language';

/**
 * 支持的语言列表
 */
export const SUPPORTED_LANGUAGES: Language[] = ['en', 'zh'];

/**
 * 默认语言
 */
export const DEFAULT_LANGUAGE: Language = 'en';

/**
 * 语言显示名称
 */
export const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  zh: '中文',
};

/**
 * 语言标签（用于HTML lang属性）
 */
export const LANGUAGE_TAGS: Record<Language, string> = {
  en: 'en-US',
  zh: 'zh-CN',
};

/**
 * 从URL路径中提取语言
 */
export function getLanguageFromURL(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (SUPPORTED_LANGUAGES.includes(firstSegment as Language)) {
    return firstSegment as Language;
  }
  
  return DEFAULT_LANGUAGE;
}

/**
 * 生成本地化的URL路径
 */
export function getLocalizedPath(path: string, lang: Language): string {
  // 移除开头的斜杠
  const cleanPath = path.replace(/^\//, '');
  
  // 如果是默认语言（英文），不添加语言前缀
  if (lang === DEFAULT_LANGUAGE) {
    return `/${cleanPath}`;
  }
  
  // 其他语言添加语言前缀
  return `/${lang}/${cleanPath}`;
}

/**
 * 从当前路径切换语言
 */
export function switchLanguage(currentPath: string, targetLang: Language): string {
  const currentLang = getLanguageFromURL(currentPath);
  
  // 移除当前语言前缀
  let pathWithoutLang = currentPath;
  if (currentLang !== DEFAULT_LANGUAGE) {
    pathWithoutLang = currentPath.replace(`/${currentLang}`, '');
  }
  
  // 添加新语言前缀
  return getLocalizedPath(pathWithoutLang, targetLang);
}

/**
 * 获取语言切换器的URL映射
 */
export function getLanguageAlternates(currentPath: string): Record<Language, string> {
  const alternates: Record<Language, string> = {} as Record<Language, string>;
  
  SUPPORTED_LANGUAGES.forEach(lang => {
    alternates[lang] = switchLanguage(currentPath, lang);
  });
  
  return alternates;
}

/**
 * 翻译字典类型
 */
type TranslationDict = Record<string, string | Record<string, string>>;

/**
 * 简单的翻译函数（用于静态文本）
 */
export function t(
  key: string,
  lang: Language,
  translations: Record<Language, TranslationDict>
): string {
  const langTranslations = translations[lang] || translations[DEFAULT_LANGUAGE];
  const value = langTranslations[key];
  
  if (typeof value === 'string') {
    return value;
  }
  
  return key; // 如果找不到翻译，返回key本身
}

/**
 * 获取嵌套翻译
 */
export function tn(
  keys: string[],
  lang: Language,
  translations: Record<Language, TranslationDict>
): string {
  const langTranslations = translations[lang] || translations[DEFAULT_LANGUAGE];
  
  let current: any = langTranslations;
  for (const key of keys) {
    if (current && typeof current === 'object') {
      current = current[key];
    } else {
      return keys.join('.'); // 找不到，返回完整key路径
    }
  }
  
  return typeof current === 'string' ? current : keys.join('.');
}

/**
 * 格式化日期（根据语言）
 */
export function formatDate(date: Date, lang: Language): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  const locale = LANGUAGE_TAGS[lang];
  return new Intl.DateTimeFormat(locale, options).format(date);
}

/**
 * 格式化数字（根据语言）
 */
export function formatNumber(num: number, lang: Language): string {
  const locale = LANGUAGE_TAGS[lang];
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * 格式化货币（根据语言）
 */
export function formatCurrency(
  amount: number,
  currency: string,
  lang: Language
): string {
  const locale = LANGUAGE_TAGS[lang];
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * 检查是否是RTL语言（从右到左）
 */
export function isRTL(lang: Language): boolean {
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
  return rtlLanguages.includes(lang);
}

/**
 * 获取文本方向
 */
export function getTextDirection(lang: Language): 'ltr' | 'rtl' {
  return isRTL(lang) ? 'rtl' : 'ltr';
}

/**
 * 常用翻译（可以在各个页面导入使用）
 */
export const commonTranslations = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
    },
    common: {
      learnMore: 'Learn More',
      getQuote: 'Get Quote',
      contactUs: 'Contact Us',
      readMore: 'Read More',
      viewAll: 'View All',
      backToTop: 'Back to Top',
      loading: 'Loading...',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      previous: 'Previous',
      next: 'Next',
    },
    footer: {
      companyInfo: 'Company Information',
      quickLinks: 'Quick Links',
      products: 'Products',
      support: 'Support',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved',
    },
  },
  zh: {
    nav: {
      home: '首页',
      products: '产品',
      about: '关于我们',
      faq: '常见问题',
      contact: '联系我们',
    },
    common: {
      learnMore: '了解更多',
      getQuote: '获取报价',
      contactUs: '联系我们',
      readMore: '阅读更多',
      viewAll: '查看全部',
      backToTop: '返回顶部',
      loading: '加载中...',
      search: '搜索',
      filter: '筛选',
      sort: '排序',
      previous: '上一页',
      next: '下一页',
    },
    footer: {
      companyInfo: '公司信息',
      quickLinks: '快速链接',
      products: '产品',
      support: '支持',
      followUs: '关注我们',
      allRightsReserved: '版权所有',
    },
  },
};