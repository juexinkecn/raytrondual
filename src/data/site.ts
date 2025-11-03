// src/data/site.ts
import type { CompanyInfo, Language } from '@/types';

/**
 * 网站基础配置
 */
export const siteConfig = {
  // 网站基本信息
  name: 'RAYTRON',
  title: {
    en: 'RAYTRON - High-Precision Metal Flat Wire & Strip Manufacturer',
    cn: '锐创 - 高精度金属扁线带材制造商',
  },
  description: {
    en: 'Leading manufacturer of high-precision metal flat wire, strip, and bimetal composite materials using advanced clad & weld technology. Serving photovoltaic, battery, EV, and electronics industries.',
    cn: '采用先进的包覆焊接工艺生产高精度金属扁线、带材和双金属复合材料的领先制造商。服务于光伏、电池、电动汽车和电子行业。',
  },
  url: 'https://raytron.group',
  logoPath: '/images/logo/raytron-logo.svg',
  faviconPath: '/favicon.ico',

  // 多语言配置
  defaultLanguage: 'en' as Language,
  supportedLanguages: ['en', 'cn'] as Language[],

  // 联系信息
  contact: {
    email: 'info@raytron.group',
    salesEmail: 'sales@raytron.group',
    supportEmail: 'support@raytron.group',
    phone: '+86-xxx-xxxx-xxxx',
    fax: '+86-xxx-xxxx-xxxx',
    address: 'Zhejiang Province, China',
    city: 'Zhejiang',
    country: 'China',
    postalCode: 'XXXXXX',
  },

  // 社交媒体链接
  social: {
    linkedin: 'https://www.linkedin.com/company/raytron',
    youtube: 'https://www.youtube.com/@raytron',
    wechat: 'raytron_official',
    weibo: 'https://weibo.com/raytron',
  },

  // 业务时间
  businessHours: {
    en: 'Monday - Friday: 9:00 AM - 6:00 PM (UTC+8)',
    cn: '周一至周五：上午9:00 - 下午6:00 (UTC+8)',
  },

  // SEO默认配置
  seo: {
    defaultTitle: {
      en: 'RAYTRON - High-Precision Metal Flat Wire & Strip Manufacturer',
      cn: '锐创 - 高精度金属扁线带材制造商',
    },
    defaultDescription: {
      en: 'Leading manufacturer of high-precision metal flat wire, strip, and bimetal composite materials. Advanced clad & weld technology for photovoltaic, battery, EV industries.',
      cn: '高精度金属扁线、带材和双金属复合材料的领先制造商。先进的包覆焊接工艺，服务光伏、电池、电动汽车行业。',
    },
    keywords: {
      en: [
        'metal flat wire',
        'copper strip',
        'copper clad aluminum',
        'CCA wire',
        'nickel clad copper',
        'bimetal composite',
        'clad and weld',
        'photovoltaic ribbon',
        'battery tab wire',
      ],
      cn: [
        '金属扁线',
        '铜带',
        '铜包铝',
        'CCA线',
        '镍包铜',
        '双金属复合',
        '包覆焊接',
        '光伏焊带',
        '电池极耳线',
      ],
    },
    ogImage: '/images/og-image.jpg',
    twitterCard: 'summary_large_image',
  },

  // Google Analytics
  analytics: {
    gaTrackingId: process.env.PUBLIC_GA_TRACKING_ID || '',
    baiduAnalyticsId: process.env.PUBLIC_BAIDU_ANALYTICS_ID || '',
    gtmId: process.env.PUBLIC_GTM_ID || '',
  },

  // 功能开关
  features: {
    enableSearch: true,
    enableNewsletter: true,
    enableLiveChat: false,
    enableBlog: true,
    enableResourceCenter: true,
  },
};

/**
 * 公司信息
 */
export const companyInfo: CompanyInfo = {
  name: 'RAYTRON',
  legalName: 'Raytron New Energy (Zhejiang) Co., Ltd.',
  logo: siteConfig.logoPath,
  description: siteConfig.description.en,
  foundedYear: 2015,
  employees: '200-500',
  contact: siteConfig.contact,
  social: [
    { platform: 'linkedin', url: siteConfig.social.linkedin },
    { platform: 'youtube', url: siteConfig.social.youtube },
    { platform: 'wechat', url: siteConfig.social.wechat },
    { platform: 'weibo', url: siteConfig.social.weibo },
  ],
};

/**
 * 核心能力数据
 */
export const coreCapabilities = {
  en: [
    {
      icon: 'Factory',
      title: 'Advanced Manufacturing',
      value: '50,000+ tons',
      description: 'Annual production capacity',
    },
    {
      icon: 'Globe',
      title: 'Global Reach',
      value: '50+ countries',
      description: 'Customers worldwide',
    },
    {
      icon: 'Award',
      title: 'Quality Certified',
      value: 'ISO 9001',
      description: 'International standards',
    },
    {
      icon: 'Zap',
      title: 'Innovation',
      value: '20+ patents',
      description: 'Proprietary technologies',
    },
  ],
  cn: [
    {
      icon: 'Factory',
      title: '先进制造',
      value: '50,000+吨',
      description: '年产能',
    },
    {
      icon: 'Globe',
      title: '全球布局',
      value: '50+国家',
      description: '全球客户',
    },
    {
      icon: 'Award',
      title: '质量认证',
      value: 'ISO 9001',
      description: '国际标准',
    },
    {
      icon: 'Zap',
      title: '创新能力',
      value: '20+专利',
      description: '自主技术',
    },
  ],
};

/**
 * 信任徽章
 */
export const trustBadges = [
  {
    name: 'ISO 9001',
    logo: '/images/certifications/iso-9001.svg',
    description: 'Quality Management System',
  },
  {
    name: 'ISO 14001',
    logo: '/images/certifications/iso-14001.svg',
    description: 'Environmental Management',
  },
  {
    name: 'IATF 16949',
    logo: '/images/certifications/iatf-16949.svg',
    description: 'Automotive Quality',
  },
  {
    name: 'CE',
    logo: '/images/certifications/ce.svg',
    description: 'European Conformity',
  },
];
