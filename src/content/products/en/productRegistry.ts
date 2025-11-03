/**
 * RAYTRON 全系列产品数据汇总
 * 包含36+产品的完整清单和关键信息
 */

import type { Product } from '@/types/product';

/**
 * 产品系列清单
 */
export const productCategories = {
  copper: {
    en: 'Copper Series',
    cn: '铜系列',
    slug: 'copper',
    count: 5,
    icon: '🟧'
  },
  aluminum: {
    en: 'Aluminum Series',
    cn: '铝系列',
    slug: 'aluminum',
    count: 4,
    icon: '⬜'
  },
  copperCladAluminum: {
    en: 'Copper Clad Aluminum',
    cn: '铜包铝系列',
    slug: 'copper-clad-aluminum',
    count: 6,
    icon: '🟨'
  },
  nickelCladCopper: {
    en: 'Nickel Clad Copper',
    cn: '镍包铜系列',
    slug: 'nickel-clad-copper',
    count: 6,
    icon: '⚪'
  },
  silverCladCopper: {
    en: 'Silver Clad Copper',
    cn: '银包铜系列',
    slug: 'silver-clad-copper',
    count: 5,
    icon: '⚫'
  },
  bimetal: {
    en: 'Bimetal & Specialty',
    cn: '双金属与特种系列',
    slug: 'bimetal',
    count: 10,
    icon: '🔷'
  }
};

/**
 * 完整产品清单 - 36个产品
 */
export const allProductsList = [
  // ==================== 铜系列 (5个) ====================
  {
    id: 1,
    sku: 'RT-COP-CFW-001',
    slug: 'copper-flat-wire',
    name: 'Copper Flat Wire',
    nameCN: '铜扁线',
    category: 'copper',
    priority: 5, // 最高优先级
    featured: true,
    keywords: ['copper flat wire', 'flat copper wire', 'precision copper flat wire'],
    monthlySearchVolume: 3600
  },
  {
    id: 2,
    sku: 'RT-COP-CST-002',
    slug: 'copper-strip',
    name: 'Copper Strip',
    nameCN: '铜带',
    category: 'copper',
    priority: 5,
    featured: true,
    keywords: ['copper strip', 'copper tape', 'copper conductor strip'],
    monthlySearchVolume: 12000
  },
  {
    id: 3,
    sku: 'RT-COP-CFO-003',
    slug: 'copper-foil',
    name: 'Copper Foil',
    nameCN: '铜箔',
    category: 'copper',
    priority: 5,
    featured: true,
    keywords: ['copper foil', 'thin copper foil', 'rolled copper foil'],
    monthlySearchVolume: 22000
  },
  {
    id: 4,
    sku: 'RT-COP-CRW-004',
    slug: 'copper-ribbon-wire',
    name: 'Copper Ribbon Wire',
    nameCN: '铜微扁线',
    category: 'copper',
    priority: 4,
    featured: false,
    keywords: ['copper ribbon wire', 'copper ribbon', 'ribbon conductor'],
    monthlySearchVolume: 880
  },
  {
    id: 5,
    sku: 'RT-COP-CRO-005',
    slug: 'copper-round-wire',
    name: 'Copper Round Wire',
    nameCN: '铜圆线',
    category: 'copper',
    priority: 4,
    featured: false,
    keywords: ['copper round wire', 'copper wire', 'bare copper wire'],
    monthlySearchVolume: 8100
  },

  // ==================== 铝系列 (4个) ====================
  {
    id: 6,
    sku: 'RT-ALU-AST-006',
    slug: 'aluminum-strip',
    name: 'Aluminum Strip',
    nameCN: '铝带',
    category: 'aluminum',
    priority: 5,
    featured: true,
    keywords: ['aluminum strip', 'aluminium strip', 'aluminum tape'],
    monthlySearchVolume: 18000
  },
  {
    id: 7,
    sku: 'RT-ALU-AFO-007',
    slug: 'aluminum-foil',
    name: 'Aluminum Foil',
    nameCN: '铝箔',
    category: 'aluminum',
    priority: 5,
    featured: true,
    keywords: ['aluminum foil', 'aluminium foil', 'industrial aluminum foil'],
    monthlySearchVolume: 135000
  },
  {
    id: 8,
    sku: 'RT-ALU-AFW-008',
    slug: 'aluminum-flat-wire',
    name: 'Aluminum Flat Wire',
    nameCN: '铝扁线',
    category: 'aluminum',
    priority: 4,
    featured: false,
    keywords: ['aluminum flat wire', 'aluminium flat wire', 'aluminum rectangular wire'],
    monthlySearchVolume: 1600
  },
  {
    id: 9,
    sku: 'RT-ALU-ARW-009',
    slug: 'aluminum-ribbon-wire',
    name: 'Aluminum Ribbon Wire',
    nameCN: '铝微扁线',
    category: 'aluminum',
    priority: 3,
    featured: false,
    keywords: ['aluminum ribbon wire', 'aluminium ribbon', 'aluminum bonding wire'],
    monthlySearchVolume: 320
  },

  // ==================== 铜包铝系列 (6个) ====================
  {
    id: 10,
    sku: 'RT-CCA-RWI-010',
    slug: 'copper-clad-aluminum-round-wire',
    name: 'Copper Clad Aluminum Round Wire',
    nameCN: '铜包铝圆线',
    category: 'copperCladAluminum',
    priority: 5,
    featured: true,
    keywords: ['copper clad aluminum wire', 'CCA wire', 'copper clad aluminium'],
    monthlySearchVolume: 8100
  },
  {
    id: 11,
    sku: 'RT-CCA-FWI-011',
    slug: 'copper-clad-aluminum-flat-wire',
    name: 'Copper Clad Aluminum Flat Wire',
    nameCN: '铜包铝扁线',
    category: 'copperCladAluminum',
    priority: 4,
    featured: true,
    keywords: ['CCA flat wire', 'copper clad aluminum flat wire', 'lightweight flat wire'],
    monthlySearchVolume: 210
  },
  {
    id: 12,
    sku: 'RT-CCA-STR-012',
    slug: 'copper-clad-aluminum-strip',
    name: 'Copper Clad Aluminum Strip',
    nameCN: '铜包铝带',
    category: 'copperCladAluminum',
    priority: 5,
    featured: true,
    keywords: ['copper clad aluminum strip', 'CCA strip', 'copper aluminium tape'],
    monthlySearchVolume: 480
  },
  {
    id: 13,
    sku: 'RT-CCA-FOI-013',
    slug: 'copper-clad-aluminum-foil',
    name: 'Copper Clad Aluminum Foil',
    nameCN: '铜包铝箔',
    category: 'copperCladAluminum',
    priority: 4,
    featured: false,
    keywords: ['copper clad aluminum foil', 'CCA foil', 'bimetal foil'],
    monthlySearchVolume: 140
  },
  {
    id: 14,
    sku: 'RT-CCA-RIB-014',
    slug: 'copper-clad-aluminum-ribbon-wire',
    name: 'Copper Clad Aluminum Ribbon Wire',
    nameCN: '铜包铝微扁线',
    category: 'copperCladAluminum',
    priority: 3,
    featured: false,
    keywords: ['CCA ribbon wire', 'copper clad aluminum ribbon', 'photovoltaic ribbon'],
    monthlySearchVolume: 90
  },
  {
    id: 15,
    sku: 'RT-CCA-BUS-015',
    slug: 'copper-clad-aluminum-busbar',
    name: 'Copper Clad Aluminum Busbar',
    nameCN: '铜包铝汇流条',
    category: 'copperCladAluminum',
    priority: 4,
    featured: false,
    keywords: ['CCA busbar', 'copper clad aluminum busbar', 'lightweight busbar'],
    monthlySearchVolume: 110
  },

  // ==================== 镍包铜系列 (6个) ====================
  {
    id: 16,
    sku: 'RT-NCC-ROD-016',
    slug: 'nickel-clad-copper-wire-rod',
    name: 'Nickel Clad Copper Wire Rod',
    nameCN: '镍包铜线材',
    category: 'nickelCladCopper',
    priority: 5,
    featured: true,
    keywords: ['nickel clad copper wire', 'NCC wire', 'nickel plated copper'],
    monthlySearchVolume: 1300
  },
  {
    id: 17,
    sku: 'RT-NCC-FWI-017',
    slug: 'nickel-clad-copper-flat-wire',
    name: 'Nickel Clad Copper Flat Wire',
    nameCN: '镍包铜扁线',
    category: 'nickelCladCopper',
    priority: 4,
    featured: true,
    keywords: ['nickel clad copper flat wire', 'NCC flat wire', 'corrosion resistant wire'],
    monthlySearchVolume: 110
  },
  {
    id: 18,
    sku: 'RT-NCC-STR-018',
    slug: 'nickel-plated-copper-strip',
    name: 'Nickel Plated Copper Strip',
    nameCN: '镀镍铜带',
    category: 'nickelCladCopper',
    priority: 5,
    featured: true,
    keywords: ['nickel plated copper strip', 'nickel copper strip', 'NCC strip'],
    monthlySearchVolume: 2900
  },
  {
    id: 19,
    sku: 'RT-NCC-FOI-019',
    slug: 'nickel-copper-foil',
    name: 'Nickel Copper Foil',
    nameCN: '镍铜箔',
    category: 'nickelCladCopper',
    priority: 4,
    featured: false,
    keywords: ['nickel copper foil', 'nickel plated foil', 'battery foil'],
    monthlySearchVolume: 720
  },
  {
    id: 20,
    sku: 'RT-NCC-RIB-020',
    slug: 'nickel-clad-copper-ribbon-wire',
    name: 'Nickel Clad Copper Ribbon Wire',
    nameCN: '镍包铜微扁线',
    category: 'nickelCladCopper',
    priority: 3,
    featured: false,
    keywords: ['nickel clad copper ribbon', 'NCC ribbon', 'battery tab material'],
    monthlySearchVolume: 85
  },
  {
    id: 21,
    sku: 'RT-NCC-BUS-021',
    slug: 'nickel-plated-copper-busbar',
    name: 'Nickel Plated Copper Busbar',
    nameCN: '镀镍铜汇流条',
    category: 'nickelCladCopper',
    priority: 4,
    featured: false,
    keywords: ['nickel plated busbar', 'NCC busbar', 'corrosion resistant busbar'],
    monthlySearchVolume: 320
  },

  // ==================== 银包铜系列 (5个) ====================
  {
    id: 22,
    sku: 'RT-SCC-WIR-022',
    slug: 'silver-clad-copper-wire',
    name: 'Silver Clad Copper Wire',
    nameCN: '银包铜线',
    category: 'silverCladCopper',
    priority: 5,
    featured: true,
    keywords: ['silver clad copper wire', 'silver plated copper', 'SCC wire'],
    monthlySearchVolume: 880
  },
  {
    id: 23,
    sku: 'RT-SCC-FWI-023',
    slug: 'silver-clad-copper-flat-wire',
    name: 'Silver Clad Copper Flat Wire',
    nameCN: '银包铜扁线',
    category: 'silverCladCopper',
    priority: 4,
    featured: true,
    keywords: ['silver clad copper flat wire', 'silver plated flat wire', 'high conductivity wire'],
    monthlySearchVolume: 95
  },
  {
    id: 24,
    sku: 'RT-SCC-STR-024',
    slug: 'silver-plated-copper-strip',
    name: 'Silver Plated Copper Strip',
    nameCN: '镀银铜带',
    category: 'silverCladCopper',
    priority: 5,
    featured: true,
    keywords: ['silver plated copper strip', 'silver copper strip', 'high performance strip'],
    monthlySearchVolume: 1200
  },
  {
    id: 25,
    sku: 'RT-SCC-RIB-025',
    slug: 'silver-clad-copper-ribbon',
    name: 'Silver Clad Copper Ribbon',
    nameCN: '银包铜微扁线',
    category: 'silverCladCopper',
    priority: 4,
    featured: false,
    keywords: ['silver clad copper ribbon', 'silver ribbon wire', 'premium ribbon'],
    monthlySearchVolume: 72
  },
  {
    id: 26,
    sku: 'RT-SCC-BUS-026',
    slug: 'silver-plated-copper-busbar',
    name: 'Silver Plated Copper Busbar',
    nameCN: '镀银铜汇流条',
    category: 'silverCladCopper',
    priority: 4,
    featured: false,
    keywords: ['silver plated busbar', 'silver copper busbar', 'premium busbar'],
    monthlySearchVolume: 210
  },

  // ==================== 双金属与特种产品系列 (10个) ====================
  {
    id: 27,
    sku: 'RT-BIM-CCS-027',
    slug: 'copper-clad-steel-wire',
    name: 'Copper Clad Steel Wire',
    nameCN: '铜包钢线',
    category: 'bimetal',
    priority: 5,
    featured: true,
    keywords: ['copper clad steel wire', 'CCS wire', 'high strength wire'],
    monthlySearchVolume: 5400
  },
  {
    id: 28,
    sku: 'RT-BIM-CCS-FW-028',
    slug: 'copper-clad-steel-flat-wire',
    name: 'Copper Clad Steel Flat Wire',
    nameCN: '铜包钢扁线',
    category: 'bimetal',
    priority: 4,
    featured: false,
    keywords: ['copper clad steel flat wire', 'CCS flat wire', 'grounding wire'],
    monthlySearchVolume: 140
  },
  {
    id: 29,
    sku: 'RT-BIM-CCS-ST-029',
    slug: 'copper-clad-steel-strip',
    name: 'Copper Clad Steel Strip',
    nameCN: '铜包钢带',
    category: 'bimetal',
    priority: 4,
    featured: false,
    keywords: ['copper clad steel strip', 'CCS strip', 'bimetal strip'],
    monthlySearchVolume: 320
  },
  {
    id: 30,
    sku: 'RT-SPE-PVR-030',
    slug: 'photovoltaic-ribbon',
    name: 'Photovoltaic Ribbon',
    nameCN: '光伏焊带',
    category: 'bimetal',
    priority: 5,
    featured: true,
    keywords: ['photovoltaic ribbon', 'solar ribbon', 'PV busbar ribbon', 'solar tabbing wire'],
    monthlySearchVolume: 3200
  },
  {
    id: 31,
    sku: 'RT-SPE-BTC-031',
    slug: 'battery-tab-connector',
    name: 'Battery Tab Connector',
    nameCN: '电池极耳连接片',
    category: 'bimetal',
    priority: 5,
    featured: true,
    keywords: ['battery tab', 'battery connector', 'lithium battery tab', 'EV battery tab'],
    monthlySearchVolume: 2800
  },
  {
    id: 32,
    sku: 'RT-SPE-TIN-ST-032',
    slug: 'tinned-copper-strip',
    name: 'Tinned Copper Strip',
    nameCN: '镀锡铜带',
    category: 'bimetal',
    priority: 4,
    featured: false,
    keywords: ['tinned copper strip', 'tin plated copper', 'solder coated strip'],
    monthlySearchVolume: 1100
  },
  {
    id: 33,
    sku: 'RT-SPE-TIN-FW-033',
    slug: 'tinned-copper-flat-wire',
    name: 'Tinned Copper Flat Wire',
    nameCN: '镀锡铜扁线',
    category: 'bimetal',
    priority: 4,
    featured: false,
    keywords: ['tinned copper flat wire', 'tin plated flat wire', 'soldercoated wire'],
    monthlySearchVolume: 650
  },
  {
    id: 34,
    sku: 'RT-SPE-ENA-FW-034',
    slug: 'enameled-copper-flat-wire',
    name: 'Enameled Copper Flat Wire',
    nameCN: '漆包铜扁线',
    category: 'bimetal',
    priority: 4,
    featured: false,
    keywords: ['enameled copper flat wire', 'magnet wire', 'insulated flat wire', 'motor winding wire'],
    monthlySearchVolume: 980
  },
  {
    id: 35,
    sku: 'RT-SPE-COP-BUS-035',
    slug: 'copper-busbar',
    name: 'Copper Busbar',
    nameCN: '铜汇流条',
    category: 'bimetal',
    priority: 5,
    featured: true,
    keywords: ['copper busbar', 'busbar copper', 'electrical busbar', 'power distribution busbar'],
    monthlySearchVolume: 4100
  },
  {
    id: 36,
    sku: 'RT-SPE-FLE-BUS-036',
    slug: 'flexible-busbar',
    name: 'Flexible Busbar',
    nameCN: '柔性汇流条',
    category: 'bimetal',
    priority: 4,
    featured: false,
    keywords: ['flexible busbar', 'laminated busbar', 'flex busbar', 'multilayer busbar'],
    monthlySearchVolume: 820
  }
];

/**
 * 按类别获取产品列表
 */
export function getProductsByCategory(categorySlug: string) {
  return allProductsList.filter(p => p.category === categorySlug);
}

/**
 * 获取特色产品
 */
export function getFeaturedProducts(limit: number = 6) {
  return allProductsList
    .filter(p => p.featured)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
}

/**
 * 按搜索量排序产品
 */
export function getProductsBySearchVolume(limit: number = 10) {
  return [...allProductsList]
    .sort((a, b) => b.monthlySearchVolume - a.monthlySearchVolume)
    .slice(0, limit);
}

/**
 * 获取产品统计信息
 */
export function getProductStats() {
  return {
    totalProducts: allProductsList.length,
    totalCategories: Object.keys(productCategories).length,
    featuredProducts: allProductsList.filter(p => p.featured).length,
    totalSearchVolume: allProductsList.reduce((sum, p) => sum + p.monthlySearchVolume, 0),
    categoryBreakdown: Object.entries(productCategories).map(([key, cat]) => ({
      category: cat.en,
      slug: cat.slug,
      count: getProductsByCategory(cat.slug).length
    }))
  };
}

/**
 * 产品URL生成器
 */
export function getProductUrl(product: typeof allProductsList[0], locale: 'en' | 'cn' = 'en') {
  const baseUrl = locale === 'en' ? 'https://en.raytron.group' : 'https://cn.raytron.group';
  const category = Object.values(productCategories).find(c => c.slug === product.category);
  return `${baseUrl}/products/${category?.slug}/${product.slug}`;
}

/**
 * 搜索产品
 */
export function searchProducts(query: string) {
  const lowerQuery = query.toLowerCase();
  return allProductsList.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.nameCN.includes(query) ||
    p.keywords.some(k => k.toLowerCase().includes(lowerQuery))
  );
}

export default {
  productCategories,
  allProductsList,
  getProductsByCategory,
  getFeaturedProducts,
  getProductsBySearchVolume,
  getProductStats,
  getProductUrl,
  searchProducts
};
