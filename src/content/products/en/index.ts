/**
 * 产品数据索引文件
 * 统一管理和访问所有产品数据
 */

import type { Product } from '@/types/product';
import copperProducts from './copperProducts';
import { 
  allProductsList,
  productCategories,
  getProductsByCategory,
  getFeaturedProducts,
  getProductsBySearchVolume,
  getProductStats,
  getProductUrl,
  searchProducts
} from './productRegistry';

/**
 * 产品数据存储
 * 注意:实际项目中,其他系列产品数据文件需要按照copperProducts.ts的格式创建
 */
export const productData = {
  // 铜系列 - 已完成详细数据
  copper: copperProducts,
  
  // 其他系列 - 待创建详细数据文件
  // aluminum: aluminumProducts,
  // copperCladAluminum: ccaProducts,
  // nickelCladCopper: nccProducts,
  // silverCladCopper: sccProducts,
  // bimetal: bimetalProducts,
};

/**
 * 获取所有产品数据
 */
export function getAllProducts(): Product[] {
  return Object.values(productData).flat();
}

/**
 * 根据ID获取产品
 */
export function getProductById(id: string): Product | undefined {
  const allProducts = getAllProducts();
  return allProducts.find(p => p.id === id);
}

/**
 * 根据slug获取产品
 */
export function getProductBySlug(slug: string): Product | undefined {
  const allProducts = getAllProducts();
  return allProducts.find(p => p.slug === slug);
}

/**
 * 根据SKU获取产品
 */
export function getProductBySKU(sku: string): Product | undefined {
  const allProducts = getAllProducts();
  return allProducts.find(p => p.sku === sku);
}

/**
 * 根据类别获取产品
 */
export function getProductsByCategorySlug(categorySlug: string): Product[] {
  const allProducts = getAllProducts();
  return allProducts.filter(p => p.categorySlug === categorySlug);
}

/**
 * 获取相关产品
 */
export function getRelatedProductsBySlug(slug: string, limit: number = 4): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  
  const allProducts = getAllProducts();
  
  // 优先返回同类别产品
  const sameCategory = allProducts.filter(p => 
    p.slug !== slug && p.categorySlug === product.categorySlug
  );
  
  // 如果同类别产品不够,添加有相同应用的产品
  if (sameCategory.length < limit) {
    const sameApplication = allProducts.filter(p =>
      p.slug !== slug &&
      p.categorySlug !== product.categorySlug &&
      p.applications?.some(app =>
        product.applications?.some(pApp => pApp.name === app.name)
      )
    );
    return [...sameCategory, ...sameApplication].slice(0, limit);
  }
  
  return sameCategory.slice(0, limit);
}

/**
 * 搜索产品(支持中英文)
 */
export function searchProductsAdvanced(
  query: string,
  options?: {
    category?: string;
    minSearchVolume?: number;
    featured?: boolean;
  }
): Product[] {
  const allProducts = getAllProducts();
  const lowerQuery = query.toLowerCase();
  
  let results = allProducts.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.nameCN?.includes(query) ||
    p.description?.toLowerCase().includes(lowerQuery) ||
    p.keywords?.some(k => k.toLowerCase().includes(lowerQuery)) ||
    p.keywordsCN?.some(k => k.includes(query))
  );
  
  // 应用过滤器
  if (options?.category) {
    results = results.filter(p => p.categorySlug === options.category);
  }
  
  if (options?.featured !== undefined) {
    results = results.filter(p => p.featured === options.featured);
  }
  
  return results;
}

/**
 * 获取热门产品(基于搜索量和特色标记)
 */
export function getPopularProducts(limit: number = 8): Product[] {
  const allProducts = getAllProducts();
  return allProducts
    .sort((a, b) => {
      // 特色产品优先
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      // 然后按评分排序
      const ratingA = a.rating?.value || 0;
      const ratingB = b.rating?.value || 0;
      return ratingB - ratingA;
    })
    .slice(0, limit);
}

/**
 * 获取新产品
 */
export function getNewProducts(limit: number = 6): Product[] {
  const allProducts = getAllProducts();
  return allProducts
    .filter(p => p.newProduct)
    .slice(0, limit);
}

/**
 * 获取库存产品
 */
export function getInStockProducts(): Product[] {
  const allProducts = getAllProducts();
  return allProducts.filter(p => p.inStock);
}

/**
 * 产品过滤器
 */
export function filterProducts(filters: {
  category?: string[];
  inStock?: boolean;
  featured?: boolean;
  minRating?: number;
  keywords?: string[];
}): Product[] {
  let results = getAllProducts();
  
  if (filters.category && filters.category.length > 0) {
    results = results.filter(p => filters.category?.includes(p.categorySlug));
  }
  
  if (filters.inStock !== undefined) {
    results = results.filter(p => p.inStock === filters.inStock);
  }
  
  if (filters.featured !== undefined) {
    results = results.filter(p => p.featured === filters.featured);
  }
  
  if (filters.minRating) {
    results = results.filter(p => (p.rating?.value || 0) >= filters.minRating!);
  }
  
  if (filters.keywords && filters.keywords.length > 0) {
    results = results.filter(p =>
      filters.keywords?.some(keyword =>
        p.keywords?.some(k => k.toLowerCase().includes(keyword.toLowerCase()))
      )
    );
  }
  
  return results;
}

/**
 * 获取产品面包屑路径
 */
export function getProductBreadcrumbs(
  productSlug: string,
  locale: 'en' | 'cn' = 'en'
) {
  const product = getProductBySlug(productSlug);
  if (!product) return [];
  
  const productsLabel = locale === 'en' ? 'Products' : '产品';
  const categoryLabel = locale === 'en' ? product.category : product.categoryCN;
  const productLabel = locale === 'en' ? product.name : product.nameCN;
  
  return [
    { label: productsLabel, href: '/products' },
    { label: categoryLabel, href: `/products/${product.categorySlug}` },
    { label: productLabel }
  ];
}

/**
 * 产品统计信息
 */
export function getProductStatistics() {
  const allProducts = getAllProducts();
  
  return {
    total: allProducts.length,
    byCategory: Object.entries(productCategories).map(([key, category]) => ({
      name: category.en,
      slug: category.slug,
      count: allProducts.filter(p => p.categorySlug === category.slug).length
    })),
    featured: allProducts.filter(p => p.featured).length,
    new: allProducts.filter(p => p.newProduct).length,
    inStock: allProducts.filter(p => p.inStock).length,
    averageRating: allProducts.reduce((sum, p) => sum + (p.rating?.value || 0), 0) / allProducts.length
  };
}

// 导出所有功能
export {
  // 产品数据
  allProductsList,
  productCategories,
  
  // 查询功能
  getProductsByCategory,
  getFeaturedProducts,
  getProductsBySearchVolume,
  getProductStats,
  getProductUrl,
  searchProducts
};

export default {
  // 数据访问
  getAllProducts,
  getProductById,
  getProductBySlug,
  getProductBySKU,
  getProductsByCategorySlug,
  getRelatedProductsBySlug,
  
  // 搜索和过滤
  searchProductsAdvanced,
  filterProducts,
  
  // 列表获取
  getPopularProducts,
  getNewProducts,
  getInStockProducts,
  
  // 工具函数
  getProductBreadcrumbs,
  getProductStatistics,
  
  // 从productRegistry导出
  allProductsList,
  productCategories,
  getProductsByCategory,
  getFeaturedProducts,
  getProductsBySearchVolume,
  getProductStats,
  getProductUrl,
  searchProducts
};
