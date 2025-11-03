export const DOMAIN_CONFIG = {
  en: {
    domain: 'https://en.raytron.group',
    lang: 'en',
    hreflang: 'en',
    alternate: {
      domain: 'https://cn.raytron.group',
      hreflang: 'zh-CN'
    }
  },
  cn: {
    domain: 'https://cn.raytron.group',
    lang: 'zh',
    hreflang: 'zh-CN',
    alternate: {
      domain: 'https://en.raytron.group',
      hreflang: 'en'
    }
  }
} as const;

export function getDomainConfig(lang: 'en' | 'cn') {
  return DOMAIN_CONFIG[lang];
}