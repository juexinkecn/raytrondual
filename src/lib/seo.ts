// src/lib/seo.ts
import type { MetaData, OrganizationSchema, Language } from '@/types';
import { siteConfig } from '@/data/site';

/**
 * 生成页面Title
 * @param title 页面标题
 * @param lang 语言
 * @returns 完整的页面Title
 */
export function generateTitle(title: string, lang: Language = 'en'): string {
  const siteName = siteConfig.name;
  return `${title} | ${siteName}`;
}

/**
 * 生成Meta标签
 * @param metadata 元数据
 * @returns Meta标签对象
 */
export function generateMetaTags(metadata: Partial<MetaData>): MetaData {
  return {
    title: metadata.title || siteConfig.seo.defaultTitle.en,
    description: metadata.description || siteConfig.seo.defaultDescription.en,
    keywords: metadata.keywords || siteConfig.seo.keywords.en,
    author: metadata.author || 'RAYTRON',
    ogTitle: metadata.ogTitle || metadata.title || siteConfig.seo.defaultTitle.en,
    ogDescription: metadata.ogDescription || metadata.description || siteConfig.seo.defaultDescription.en,
    ogImage: metadata.ogImage || siteConfig.seo.ogImage,
    ogType: metadata.ogType || 'website',
    twitterCard: metadata.twitterCard || 'summary_large_image',
    canonical: metadata.canonical,
    robots: metadata.robots || 'index, follow',
  };
}

/**
 * 生成Organization结构化数据
 * @param lang 语言
 * @returns Organization Schema
 */
export function generateOrganizationSchema(lang: Language = 'en'): OrganizationSchema {
  const baseUrl = siteConfig.url;
  const contact = siteConfig.contact;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RAYTRON',
    url: `${baseUrl}/${lang}`,
    logo: `${baseUrl}${siteConfig.logoPath}`,
    description: siteConfig.description[lang],
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address || '',
      addressLocality: contact.city || '',
      addressRegion: contact.city || '',
      postalCode: contact.postalCode || '',
      addressCountry: contact.country || 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contact.phone || '',
      contactType: 'sales',
      email: contact.email || '',
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
      siteConfig.social.weibo,
    ].filter(Boolean),
  };
}

/**
 * 生成Product结构化数据
 * @param product 产品数据
 * @returns Product Schema
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  category?: string;
  url: string;
}) {
  const baseUrl = siteConfig.url;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image ? `${baseUrl}${product.image}` : undefined,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'RAYTRON',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Raytron New Energy (Zhejiang) Co., Ltd.',
      url: baseUrl,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      url: product.url,
    },
    url: product.url,
  };
}

/**
 * 生成FAQ结构化数据
 * @param faqs FAQ列表
 * @returns FAQPage Schema
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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
 * 生成Hreflang标签
 * @param path 当前页面路径
 * @param languages 支持的语言列表
 * @returns Hreflang链接数组
 */
export function generateHreflangLinks(path: string) {
  return [
    { hreflang: 'en', href: `https://en.raytron.group${path}` },
    { hreflang: 'zh-CN', href: `https://cn.raytron.group${path}` },
    { hreflang: 'x-default', href: `https://en.raytron.group${path}` }
  ];
}

/**
 * 生成Canonical URL
 * @param path 当前页面路径
 * @param lang 当前语言
 * @returns Canonical URL
 */
export function generateCanonicalUrl(path: string, lang: Language = 'en'): string {
  const baseUrl = siteConfig.url;
  return `${baseUrl}/${lang}${path}`;
}

/**
 * 清理和优化描述文本（用于Meta Description）
 * @param text 原始文本
 * @param maxLength 最大长度
 * @returns 优化后的描述
 */
export function optimizeDescription(text: string, maxLength: number = 160): string {
  let cleaned = text
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleaned.length > maxLength) {
    cleaned = cleaned.substring(0, maxLength - 3).trim() + '...';
  }

  return cleaned;
}
