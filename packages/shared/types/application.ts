// src/types/application.ts

/**
 * 应用领域分类
 */
export type ApplicationCategory =
  | 'photovoltaic-solar'      // 光伏太阳能
  | 'battery-storage'         // 电池储能
  | 'electric-vehicles'       // 电动汽车
  | 'cable-wire'              // 电缆线缆
  | 'electronics-pcb'         // 电子电路
  | 'welding'                 // 焊接
  | 'industrial-automation'   // 工业自动化
  | 'telecommunications';     // 通信

/**
 * 行业挑战
 */
export interface IndustryChallenge {
  title: string;               // 挑战标题
  description: string;         // 挑战描述
  icon?: string;              // 图标
}

/**
 * 解决方案
 */
export interface Solution {
  title: string;               // 解决方案标题
  description: string;         // 解决方案描述
  productSlug?: string;        // 推荐产品slug
  benefits?: string[];         // 优势列表
  icon?: string;              // 图标
}

/**
 * 案例研究
 */
export interface CaseStudy {
  title: string;               // 案例标题
  client?: string;            // 客户（可匿名）
  challenge: string;          // 挑战描述
  solution: string;           // 解决方案
  results: string[];          // 成果（量化指标）
  image?: string;             // 案例图片
  slug?: string;              // 详细案例链接
}

/**
 * 技术优势
 */
export interface TechnicalAdvantage {
  title: string;               // 优势标题
  description: string;         // 优势描述
  metrics?: {                  // 性能指标
    name: string;
    value: string;
    unit?: string;
  }[];
}

/**
 * 推荐产品
 */
export interface RecommendedProduct {
  slug: string;                // 产品slug
  title: string;               // 产品标题
  reason: string;              // 推荐理由
  keySpecs?: string[];         // 关键规格
}

/**
 * 应用图片
 */
export interface ApplicationImage {
  src: string;                 // 图片路径
  alt: string;                 // Alt文本
  caption?: string;            // 图片说明
}

/**
 * 应用SEO元数据
 */
export interface ApplicationSEO {
  title: string;               // SEO标题
  description: string;         // SEO描述
  keywords: string[];          // 关键词
  ogImage?: string;            // Open Graph图片
  canonicalUrl?: string;       // Canonical URL
}

/**
 * 应用前言数据（从Markdown frontmatter获取）
 */
export interface ApplicationFrontmatter {
  // 基本信息
  title: string;               // 应用标题
  slug: string;                // URL slug
  category: ApplicationCategory; // 应用分类
  lang: 'en' | 'cn';          // 语言
  
  // 描述
  shortDescription: string;    // 简短描述
  description: string;         // 详细描述
  
  // 关键词
  keywords: string[];          // 关键词
  tags?: string[];            // 标签
  
  // 图片
  featuredImage: string;       // 主要图片
  images?: ApplicationImage[]; // 图片列表
  
  // 行业挑战
  challenges?: IndustryChallenge[]; // 行业挑战
  
  // 解决方案
  solutions?: Solution[];      // 解决方案
  
  // 技术优势
  advantages?: TechnicalAdvantage[]; // 技术优势
  
  // 推荐产品
  recommendedProducts?: string[]; // 推荐产品slug列表
  
  // 案例研究
  caseStudies?: CaseStudy[];   // 案例研究
  
  // SEO
  seo: ApplicationSEO;         // SEO元数据
  
  // 状态
  featured?: boolean;          // 是否精选
  weight?: number;            // 权重（用于排序）
  publishedAt?: string;       // 发布日期
  updatedAt?: string;         // 更新日期
}

/**
 * 应用（包含内容）
 */
export interface Application {
  frontmatter: ApplicationFrontmatter; // 前言数据
  content: string;             // Markdown内容
  slug: string;                // URL slug
}

/**
 * 应用列表项（用于列表页面）
 */
export interface ApplicationListItem {
  slug: string;                // URL slug
  title: string;               // 应用标题
  category: ApplicationCategory; // 应用分类
  shortDescription: string;    // 简短描述
  featuredImage: string;       // 主要图片
  featured?: boolean;          // 是否精选
  lang: 'en' | 'cn';          // 语言
}

/**
 * 应用分类信息
 */
export interface ApplicationCategoryInfo {
  slug: ApplicationCategory;   // 分类slug
  name: string;                // 分类名称
  description: string;         // 分类描述
  icon?: string;              // 图标
  featured?: boolean;          // 是否精选
}
