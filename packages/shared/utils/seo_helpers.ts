// src/utils/seo-helpers.ts
import type { Language } from '../types/language';

/**
 * 网站基础信息
 */
export const SITE_INFO = {
  name: 'Raytron',
  fullName: 'Raytron New Energy Technology',
  url: 'https://www.raytron.com',
  description: {
    en: 'Leading manufacturer of high-precision flat wire and ribbon products for photovoltaic, battery, automotive, and industrial applications.',
    zh: '专业生产高精度金属扁线和带材，服务于光伏、电池、汽车和工业应用领域。',
  },
  keywords: {
    en: 'flat wire, ribbon, copper flat wire, aluminum ribbon, PV ribbon, battery tab, enameled flat wire, bimetal ribbon',
    zh: '扁线, 带材, 铜扁线, 铝带, 光伏焊带, 电池极耳, 漆包扁线, 双金属复合带',
  },
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@raytron',
};

/**
 * 生成页面标题
 */
export function generatePageTitle(
  pageTitle: string,
  lang: Language,
  includeSiteName: boolean = true
): string {
  if (!includeSiteName) {
    return pageTitle;
  }
  
  const separator = lang === 'zh' ? ' - ' : ' | ';
  return `${pageTitle}${separator}${SITE_INFO.name}`;
}

/**
 * 生成页面描述（自动截断）
 */
export function generateDescription(
  description: string,
  maxLength: number = 160
): string {
  if (description.length <= maxLength) {
    return description;
  }
  
  // 截断并添加省略号
  return description.substring(0, maxLength - 3).trim() + '...';
}

/**
 * 生成关键词字符串
 */
export function generateKeywords(keywords: string[]): string {
  return keywords.join(', ');
}

/**
 * 生成规范URL
 */
export function generateCanonicalURL(
  path: string,
  baseUrl: string = SITE_INFO.url
): string {
  // 移除开头的斜杠并确保baseUrl没有结尾斜杠
  const cleanPath = path.replace(/^\//, '');
  const cleanBase = baseUrl.replace(/\/$/, '');
  
  return `${cleanBase}/${cleanPath}`;
}

/**
 * 生成Open Graph图片URL
 */
export function generateOGImageURL(
  imagePath: string,
  baseUrl: string = SITE_INFO.url
): string {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  const cleanPath = imagePath.replace(/^\//, '');
  const cleanBase = baseUrl.replace(/\/$/, '');
  
  return `${cleanBase}/${cleanPath}`;
}

/**
 * 生成产品Schema标记
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  sku?: string;
  offers?: {
    price?: number;
    currency?: string;
    availability?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image || SITE_INFO.ogImage,
    brand: {
      '@type': 'Brand',
      name: product.brand || SITE_INFO.name,
    },
    sku: product.sku,
    offers: product.offers ? {
      '@type': 'Offer',
      price: product.offers.price,
      priceCurrency: product.offers.currency || 'USD',
      availability: product.offers.availability || 'https://schema.org/InStock',
    } : undefined,
  };
}

/**
 * 生成组织Schema标记
 */
export function generateOrganizationSchema(lang: Language = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_INFO.fullName,
    alternateName: SITE_INFO.name,
    url: SITE_INFO.url,
    logo: `${SITE_INFO.url}/images/logo.png`,
    description: SITE_INFO.description[lang],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-512-5512-3456',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Chinese'],
    },
    sameAs: [
      'https://www.linkedin.com/company/raytron',
      'https://twitter.com/raytron',
    ],
  };
}

/**
 * 生成Breadcrumb Schema标记
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{
  name: string;
  url: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * 生成FAQ Schema标记
 */
export function generateFAQSchema(faqs: Array<{
  question: string;
  answer: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * 生成Article Schema标记
 */
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image || SITE_INFO.ogImage,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author || SITE_INFO.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_INFO.url}/images/logo.png`,
      },
    },
  };
}

/**
 * 清理HTML标签（用于生成纯文本描述）
 */
export function stripHTML(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * 生成slug（URL友好的字符串）
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // 移除特殊字符
    .replace(/\s+/g, '-') // 空格转连字符
    .replace(/-+/g, '-') // 多个连字符合并
    .replace(/^-|-$/g, ''); // 移除开头和结尾的连字符
}

/**
 * 验证和清理URL
 */
export function cleanURL(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.href;
  } catch {
    // 如果不是完整URL，假定是相对路径
    return url.replace(/\/+/g, '/'); // 移除多余的斜杠
  }
}

/**
 * 生成robots meta标签内容
 */
export function generateRobotsMeta(options: {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
} = {}): string {
  const {
    index = true,
    follow = true,
    noarchive = false,
    nosnippet = false,
  } = options;
  
  const directives: string[] = [];
  
  directives.push(index ? 'index' : 'noindex');
  directives.push(follow ? 'follow' : 'nofollow');
  
  if (noarchive) directives.push('noarchive');
  if (nosnippet) directives.push('nosnippet');
  
  return directives.join(', ');
}

/**
 * 提取第一个段落作为描述
 */
export function extractFirstParagraph(content: string, maxLength: number = 160): string {
  // 移除HTML标签
  const text = stripHTML(content);
  
  // 分割段落
  const paragraphs = text.split('\n').filter(p => p.trim().length > 0);
  
  if (paragraphs.length === 0) return '';
  
  // 获取第一个段落并截断
  return generateDescription(paragraphs[0], maxLength);
}