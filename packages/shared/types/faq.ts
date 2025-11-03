// src/types/faq.ts

/**
 * FAQ分类
 */
export type FAQCategory =
  | 'product-knowledge'     // 产品知识类
  | 'technical-specs'       // 技术规格类
  | 'applications'          // 应用场景类
  | 'buying-guide'          // 采购指南类
  | 'comparisons'           // 对比分析类
  | 'troubleshooting'       // 问题解决类
  | 'industry-insights';    // 行业洞察类

/**
 * FAQ优先级
 */
export type FAQPriority = 'high' | 'medium' | 'low';

/**
 * FAQ内容片段
 */
export interface FAQSection {
  heading: string;          // 小标题
  content: string;          // 内容
}

/**
 * FAQ相关问题
 */
export interface RelatedQuestion {
  slug: string;             // 问题slug
  question: string;         // 问题标题
}

/**
 * FAQ要点
 */
export interface KeyTakeaway {
  point: string;            // 要点内容
  icon?: string;           // 图标
}

/**
 * FAQ SEO元数据
 */
export interface FAQSEO {
  title: string;            // SEO标题
  description: string;      // SEO描述
  keywords: string[];       // 关键词
  canonicalUrl?: string;    // Canonical URL
}

/**
 * FAQ前言数据（从Markdown frontmatter获取）
 */
export interface FAQFrontmatter {
  // 基本信息
  question: string;         // 问题标题
  slug: string;             // URL slug
  category: FAQCategory;    // FAQ分类
  lang: 'en' | 'cn';       // 语言
  
  // 优先级和关键词
  priority?: FAQPriority;   // 优先级
  keywords: string[];       // 关键词
  tags?: string[];         // 标签
  
  // 快速答案（Featured Snippet优化）
  quickAnswer: string;      // 快速答案（50-80字）
  
  // 相关信息
  relatedQuestions?: string[]; // 相关问题slug列表
  relatedProducts?: string[];  // 相关产品slug列表
  
  // 内容结构
  sections?: FAQSection[];  // 内容片段
  keyTakeaways?: string[];  // 关键要点
  
  // SEO
  seo: FAQSEO;             // SEO元数据
  
  // 统计
  views?: number;          // 浏览次数
  helpful?: number;        // 有帮助次数
  notHelpful?: number;     // 无帮助次数
  
  // 状态
  featured?: boolean;      // 是否精选
  weight?: number;        // 权重（用于排序）
  publishedAt?: string;   // 发布日期
  updatedAt?: string;     // 更新日期
}

/**
 * FAQ（包含内容）
 */
export interface FAQ {
  frontmatter: FAQFrontmatter; // 前言数据
  content: string;          // Markdown内容
  slug: string;             // URL slug
}

/**
 * FAQ列表项（用于列表和搜索）
 */
export interface FAQListItem {
  slug: string;             // URL slug
  question: string;         // 问题标题
  quickAnswer: string;      // 快速答案
  category: FAQCategory;    // FAQ分类
  priority?: FAQPriority;   // 优先级
  keywords: string[];       // 关键词
  lang: 'en' | 'cn';       // 语言
  featured?: boolean;       // 是否精选
}

/**
 * FAQ分类信息
 */
export interface FAQCategoryInfo {
  slug: FAQCategory;        // 分类slug
  name: string;             // 分类名称
  description: string;      // 分类描述
  icon?: string;           // 图标
  questionCount?: number;   // 问题数量
}

/**
 * FAQ搜索结果
 */
export interface FAQSearchResult extends FAQListItem {
  score?: number;           // 相关度分数
  highlightedQuestion?: string; // 高亮问题
  highlightedAnswer?: string;   // 高亮答案
}

/**
 * FAQ统计
 */
export interface FAQStats {
  totalQuestions: number;   // 总问题数
  categoryBreakdown: {      // 分类统计
    category: FAQCategory;
    count: number;
  }[];
  topQuestions: FAQListItem[]; // 热门问题
  recentQuestions: FAQListItem[]; // 最新问题
}

/**
 * FAQ过滤选项
 */
export interface FAQFilter {
  categories?: FAQCategory[]; // 分类过滤
  priority?: FAQPriority[];   // 优先级过滤
  keywords?: string[];        // 关键词过滤
  featured?: boolean;         // 仅显示精选
  lang?: 'en' | 'cn';        // 语言过滤
}

/**
 * FAQ排序选项
 */
export type FAQSort =
  | 'relevance'              // 相关度
  | 'newest'                 // 最新
  | 'popular'                // 最受欢迎
  | 'helpful'                // 最有帮助
  | 'alphabetical';          // 字母顺序
