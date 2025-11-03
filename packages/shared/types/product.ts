// src/types/product.ts

/**
 * 产品分类
 */
export type ProductCategory =
  | 'copper'          // 铜系列
  | 'aluminum'        // 铝系列
  | 'nickel'          // 镍系列
  | 'silver'          // 银系列
  | 'cca'             // 铜包铝系列 (主打)
  | 'ccs'             // 铜包钢系列
  | 'ncc'             // 镍包铜系列
  | 'scc'             // 银包铜系列
  | 'specialty';      // 特种产品系列

/**
 * 产品类型
 */
export type ProductType =
  | 'wire'            // 线材
  | 'flat-wire'       // 扁线
  | 'strip'           // 带材
  | 'foil'            // 箔材
  | 'ribbon'          // 微扁线
  | 'rod';            // 线坯

/**
 * 表面处理
 */
export type SurfaceTreatment =
  | 'bare'            // 裸线
  | 'tinned'          // 镀锡
  | 'silver-plated'   // 镀银
  | 'nickel-plated';  // 镀镍

/**
 * 回火状态
 */
export type TemperCondition =
  | 'soft'            // 软态
  | 'half-hard'       // 半硬
  | 'hard';           // 硬态

/**
 * 规格参数
 */
export interface Specification {
  name: string;                    // 规格名称
  value: string | number;          // 规格值
  unit?: string;                   // 单位
  range?: string;                  // 范围
  tolerance?: string;              // 公差
}

/**
 * 规格组（用于分组显示）
 */
export interface SpecificationGroup {
  groupName: string;               // 组名
  specs: Specification[];          // 规格列表
}

/**
 * 产品特性
 */
export interface ProductFeature {
  icon?: string;                   // 图标
  title: string;                   // 标题
  description: string;             // 描述
}

/**
 * 产品应用
 */
export interface ProductApplication {
  name: string;                    // 应用名称
  slug: string;                    // 应用slug
  description: string;             // 应用描述
  icon?: string;                   // 图标
}

/**
 * 产品图片
 */
export interface ProductImage {
  src: string;                     // 图片路径
  alt: string;                     // Alt文本
  caption?: string;                // 图片说明
  width?: number;                  // 宽度
  height?: number;                 // 高度
}

/**
 * 产品数据表
 */
export interface ProductDatasheet {
  title: string;                   // 标题
  url: string;                     // PDF链接
  size?: string;                   // 文件大小
  language: 'en' | 'cn';           // 语言
}

/**
 * 产品认证
 */
export interface ProductCertification {
  name: string;                    // 认证名称
  logo?: string;                   // 认证logo
  number?: string;                 // 证书编号
  validUntil?: string;             // 有效期
}

/**
 * 产品SEO元数据
 */
export interface ProductSEO {
  title: string;                   // SEO标题
  description: string;             // SEO描述
  keywords: string[];              // 关键词
  ogImage?: string;                // Open Graph图片
  canonicalUrl?: string;           // Canonical URL
}

/**
 * 产品核心数据（从Markdown frontmatter获取）
 */
export interface ProductFrontmatter {
  // 基本信息
  title: string;                   // 产品标题
  slug: string;                    // URL slug
  category: ProductCategory;       // 产品分类
  productType: ProductType;        // 产品类型
  lang: 'en' | 'cn';              // 语言
  
  // 描述
  shortDescription: string;        // 简短描述（用于列表）
  description: string;             // 详细描述
  
  // 标签和关键词
  keywords: string[];              // 关键词
  tags?: string[];                 // 标签
  
  // 图片
  featuredImage: string;           // 主要图片
  images?: ProductImage[];         // 图片列表
  
  // 规格
  specifications?: SpecificationGroup[]; // 规格参数
  
  // 特性
  features?: ProductFeature[];     // 产品特性
  
  // 应用
  applications?: string[];         // 应用领域slug列表
  
  // 相关产品
  relatedProducts?: string[];      // 相关产品slug列表
  
  // 下载
  datasheets?: ProductDatasheet[]; // 数据表
  
  // 认证
  certifications?: ProductCertification[]; // 认证
  
  // SEO
  seo: ProductSEO;                 // SEO元数据
  
  // 状态
  featured?: boolean;              // 是否精选
  inStock?: boolean;              // 是否有货
  weight?: number;                // 权重（用于排序）
  publishedAt?: string;           // 发布日期
  updatedAt?: string;             // 更新日期
}

/**
 * 产品（包含内容）
 */
export interface Product {
  frontmatter: ProductFrontmatter; // 前言数据
  content: string;                 // Markdown内容
  slug: string;                    // URL slug
}

/**
 * 产品列表项（用于列表页面）
 */
export interface ProductListItem {
  slug: string;                    // URL slug
  title: string;                   // 产品标题
  category: ProductCategory;       // 产品分类
  shortDescription: string;        // 简短描述
  featuredImage: string;           // 主要图片
  featured?: boolean;              // 是否精选
  lang: 'en' | 'cn';              // 语言
}

/**
 * 产品分类信息
 */
export interface ProductCategoryInfo {
  slug: ProductCategory;           // 分类slug
  name: string;                    // 分类名称
  description: string;             // 分类描述
  icon?: string;                   // 图标
  featured?: boolean;              // 是否精选
  productCount?: number;           // 产品数量
}
