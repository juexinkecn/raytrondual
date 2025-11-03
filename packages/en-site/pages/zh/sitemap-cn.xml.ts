// src/pages/zh/sitemap-cn.xml.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE_URL = 'https://cn.raytron.group';

function generateSitemap(urls: SitemapURL[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${url.loc.replace('cn.raytron.group', 'en.raytron.group')}" />
    <xhtml:link rel="alternate" hreflang="zh" href="${url.loc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${url.loc.replace('cn.raytron.group', 'en.raytron.group')}" />
  </url>`).join('\n')}
</urlset>`;
}

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];
  
  const urls: SitemapURL[] = [];

  // 1. 中文首页
  urls.push({
    loc: `${SITE_URL}/`,
    lastmod: today,
    changefreq: 'daily',
    priority: '1.0',
  });

  // 2. 主要页面
  const mainPages = [
    { path: '/products', priority: '0.9', changefreq: 'weekly' as const },
    { path: '/applications', priority: '0.9', changefreq: 'weekly' as const },
    { path: '/solutions', priority: '0.8', changefreq: 'monthly' as const },
    { path: '/faq', priority: '0.8', changefreq: 'weekly' as const },
    { path: '/about', priority: '0.7', changefreq: 'monthly' as const },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' as const },
    { path: '/blog', priority: '0.7', changefreq: 'weekly' as const },
  ];

  mainPages.forEach((page) => {
    urls.push({
      loc: `${SITE_URL}${page.path}`,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
    });
  });

  // 3. 产品页面
  try {
    const products = await getCollection('products');
    products.forEach((product) => {
      urls.push({
        loc: `${SITE_URL}/products/${product.slug}`,
        lastmod: product.data.updatedAt?.toISOString().split('T')[0] || today,
        changefreq: 'monthly',
        priority: '0.8',
      });
    });
  } catch (error) {
    console.error('Error loading products:', error);
  }

  // 4. FAQ 页面
  try {
    const faqs = await getCollection('faqs');
    const faqCategories = [...new Set(faqs.map(faq => faq.data.category))];
    
    faqCategories.forEach((category) => {
      urls.push({
        loc: `${SITE_URL}/faq/${category}`,
        lastmod: today,
        changefreq: 'weekly',
        priority: '0.7',
      });
    });
  } catch (error) {
    console.error('Error loading FAQs:', error);
  }

  // 5. 应用领域页面
  const applications = [
    'photovoltaic-solar',
    'battery-energy-storage',
    'electric-vehicles',
    'cable-wire',
    'electronics-pcb',
    'welding',
    'industrial-automation',
    'telecommunications',
  ];

  applications.forEach((app) => {
    urls.push({
      loc: `${SITE_URL}/applications/${app}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8',
    });
  });

  // 6. 博客文章
  try {
    const blogPosts = await getCollection('blog');
    blogPosts.forEach((post) => {
      urls.push({
        loc: `${SITE_URL}/blog/${post.slug}`,
        lastmod: post.data.publishedAt?.toISOString().split('T')[0] || today,
        changefreq: 'monthly',
        priority: '0.6',
      });
    });
  } catch (error) {
    console.log('Blog collection not found, skipping...');
  }

  const sitemap = generateSitemap(urls);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
