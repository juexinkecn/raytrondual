/**
 * 产品数据生成工具
 * 用于生成SEO优化的产品数据
 */

import type { Product, ProductSpecifications, ProductApplication, ProductFAQ } from '@/types/product';

/**
 * 生成产品结构化数据 (Schema.org Product)
 */
export function generateProductSchema(product: Product, locale: 'en' | 'cn') {
  const baseUrl = locale === 'en' ? 'https://en.raytron.group' : 'https://cn.raytron.group';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': product.description,
    'sku': product.sku,
    'mpn': product.sku,
    'brand': {
      '@type': 'Brand',
      'name': 'RAYTRON',
      'logo': `${baseUrl}/images/logo.png`
    },
    'manufacturer': {
      '@type': 'Organization',
      'name': 'RAYTRON',
      'url': baseUrl,
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'CN',
        'addressRegion': 'Guangdong',
        'addressLocality': 'Shenzhen'
      }
    },
    'offers': {
      '@type': 'AggregateOffer',
      'availability': 'https://schema.org/InStock',
      'priceCurrency': 'USD',
      'url': `${baseUrl}/products/${product.categorySlug}/${product.slug}`,
      'seller': {
        '@type': 'Organization',
        'name': 'RAYTRON'
      }
    },
    'aggregateRating': product.rating ? {
      '@type': 'AggregateRating',
      'ratingValue': product.rating.value,
      'reviewCount': product.rating.count
    } : undefined,
    'image': product.images?.map(img => `${baseUrl}${img}`) || [],
    'category': product.category,
    'additionalProperty': Object.entries(product.specifications).map(([key, value]) => ({
      '@type': 'PropertyValue',
      'name': key,
      'value': value
    }))
  };
}

/**
 * 生成产品Meta标签
 */
export function generateProductMeta(product: Product, locale: 'en' | 'cn') {
  const baseUrl = locale === 'en' ? 'https://en.raytron.group' : 'https://cn.raytron.group';
  const productUrl = `${baseUrl}/products/${product.categorySlug}/${product.slug}`;
  
  return {
    title: `${product.name} | ${product.tagline} - RAYTRON`,
    description: product.metaDescription || product.description.substring(0, 155),
    keywords: product.keywords?.join(', ') || '',
    canonical: productUrl,
    openGraph: {
      title: `${product.name} - RAYTRON`,
      description: product.description.substring(0, 200),
      url: productUrl,
      type: 'product',
      images: product.images?.map(img => ({
        url: `${baseUrl}${img}`,
        width: 1200,
        height: 630,
        alt: product.name
      })) || []
    },
    alternates: {
      languages: {
        'en': `https://en.raytron.group/products/${product.categorySlug}/${product.slug}`,
        'zh-CN': `https://cn.raytron.group/products/${product.categorySlug}/${product.slug}`
      }
    }
  };
}

/**
 * 生成产品FAQ结构化数据
 */
export function generateFAQSchema(faqs: ProductFAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

/**
 * 生成产品面包屑结构化数据
 */
export function generateBreadcrumbSchema(product: Product, locale: 'en' | 'cn') {
  const baseUrl = locale === 'en' ? 'https://en.raytron.group' : 'https://cn.raytron.group';
  const homeLabel = locale === 'en' ? 'Home' : '首页';
  const productsLabel = locale === 'en' ? 'Products' : '产品';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': homeLabel,
        'item': `${baseUrl}/`
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': productsLabel,
        'item': `${baseUrl}/products`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': product.category,
        'item': `${baseUrl}/products/${product.categorySlug}`
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': product.name,
        'item': `${baseUrl}/products/${product.categorySlug}/${product.slug}`
      }
    ]
  };
}

/**
 * 生成关键词优化的产品描述
 */
export function generateSEODescription(
  productName: string,
  keywords: string[],
  features: string[],
  applications: string[]
): string {
  const mainKeyword = keywords[0];
  const secondaryKeywords = keywords.slice(1, 3);
  
  return `${productName} by RAYTRON - ${mainKeyword} with ${features.slice(0, 2).join(' and ')}. ` +
    `Perfect for ${applications.slice(0, 2).join(', ')}. ` +
    `Our ${secondaryKeywords.join(' and ')} products feature ISO 9001 certified quality. ` +
    `MOQ as low as 200kg. Fast delivery in 2-7 days. Get a quote today!`;
}

/**
 * 生成相关产品推荐
 */
export function getRelatedProducts(
  currentProduct: Product,
  allProducts: Product[],
  count: number = 4
): Product[] {
  // 按类别和应用匹配相关产品
  const related = allProducts.filter(p => 
    p.slug !== currentProduct.slug && (
      p.category === currentProduct.category ||
      p.applications.some(app => 
        currentProduct.applications.some(cApp => cApp.name === app.name)
      )
    )
  );
  
  return related.slice(0, count);
}

/**
 * 生成产品URL slug
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * 生成产品SKU
 */
export function generateSKU(category: string, productName: string, index: number): string {
  const categoryCode = category.substring(0, 3).toUpperCase();
  const productCode = productName.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 3);
  const sequenceNumber = String(index).padStart(3, '0');
  
  return `RT-${categoryCode}-${productCode}-${sequenceNumber}`;
}

/**
 * 验证产品数据完整性
 */
export function validateProductData(product: Partial<Product>): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  if (!product.name) errors.push('Product name is required');
  if (!product.description || product.description.length < 100) {
    errors.push('Product description must be at least 100 characters');
  }
  if (!product.category) errors.push('Product category is required');
  if (!product.specifications) errors.push('Product specifications are required');
  if (!product.features || product.features.length < 3) {
    errors.push('At least 3 product features are required');
  }
  if (!product.applications || product.applications.length < 2) {
    errors.push('At least 2 applications are required');
  }
  if (!product.faqs || product.faqs.length < 5) {
    errors.push('At least 5 FAQs are required');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * 产品数据导出工具
 */
export function exportProductToJSON(product: Product): string {
  return JSON.stringify(product, null, 2);
}

/**
 * 批量导出产品数据
 */
export function exportProductsToJSON(products: Product[]): string {
  return JSON.stringify(products, null, 2);
}

/**
 * 生成产品数据表内容 (Datasheet)
 */
export function generateDatasheetContent(product: Product, locale: 'en' | 'cn') {
  const content = {
    en: {
      title: 'Technical Datasheet',
      productName: 'Product Name',
      specifications: 'Technical Specifications',
      features: 'Key Features',
      applications: 'Typical Applications',
      quality: 'Quality Standards',
      packaging: 'Packaging Information',
      contact: 'Contact Information'
    },
    cn: {
      title: '技术数据表',
      productName: '产品名称',
      specifications: '技术规格',
      features: '主要特点',
      applications: '典型应用',
      quality: '质量标准',
      packaging: '包装信息',
      contact: '联系信息'
    }
  };
  
  const t = content[locale];
  
  return {
    title: `${product.name} - ${t.title}`,
    sections: {
      productInfo: {
        title: t.productName,
        content: {
          name: product.name,
          sku: product.sku,
          category: product.category,
          description: product.description
        }
      },
      specifications: {
        title: t.specifications,
        content: product.specifications
      },
      features: {
        title: t.features,
        content: product.features
      },
      applications: {
        title: t.applications,
        content: product.applications.map(app => app.name)
      },
      quality: {
        title: t.quality,
        content: product.certifications || ['ISO 9001:2015']
      }
    }
  };
}

export default {
  generateProductSchema,
  generateProductMeta,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateSEODescription,
  getRelatedProducts,
  generateSlug,
  generateSKU,
  validateProductData,
  exportProductToJSON,
  exportProductsToJSON,
  generateDatasheetContent
};
