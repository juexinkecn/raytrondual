// src/types/common.ts

/**
 * 语言类型
 */
export type Language = 'en' | 'cn';

/**
 * 导航项
 */
export interface NavigationItem {
  label: string;            // 显示文本
  href: string;             // 链接地址
  icon?: string;           // 图标
  children?: NavigationItem[]; // 子菜单
  external?: boolean;       // 是否外部链接
  badge?: string;          // 徽章文本
}

/**
 * 面包屑项
 */
export interface BreadcrumbItem {
  label: string;            // 显示文本
  href?: string;            // 链接地址（最后一项可以没有）
}

/**
 * 链接
 */
export interface Link {
  text: string;             // 链接文本
  href: string;             // 链接地址
  external?: boolean;       // 是否外部链接
  icon?: string;           // 图标
}

/**
 * 图片
 */
export interface Image {
  src: string;              // 图片路径
  alt: string;              // Alt文本
  width?: number;           // 宽度
  height?: number;          // 高度
  caption?: string;         // 图片说明
  credit?: string;          // 图片来源
}

/**
 * 视频
 */
export interface Video {
  src: string;              // 视频路径
  poster?: string;          // 封面图
  title: string;            // 标题
  description?: string;     // 描述
  duration?: string;        // 时长
}

/**
 * 社交媒体链接
 */
export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'youtube' | 'wechat' | 'weibo';
  url: string;              // 链接地址
  icon?: string;           // 图标
}

/**
 * 联系信息
 */
export interface ContactInfo {
  email?: string;           // 邮箱
  phone?: string;           // 电话
  fax?: string;            // 传真
  address?: string;         // 地址
  city?: string;           // 城市
  state?: string;          // 省/州
  country?: string;        // 国家
  postalCode?: string;     // 邮编
}

/**
 * 公司信息
 */
export interface CompanyInfo {
  name: string;             // 公司名称
  legalName?: string;       // 法定名称
  logo: string;             // Logo
  description: string;      // 公司描述
  foundedYear?: number;     // 成立年份
  employees?: string;       // 员工数量
  contact: ContactInfo;     // 联系信息
  social?: SocialLink[];    // 社交媒体
}

/**
 * 元数据（SEO）
 */
export interface MetaData {
  title: string;            // 页面标题
  description: string;      // 页面描述
  keywords?: string[];      // 关键词
  author?: string;          // 作者
  ogTitle?: string;         // Open Graph标题
  ogDescription?: string;   // Open Graph描述
  ogImage?: string;         // Open Graph图片
  ogType?: string;          // Open Graph类型
  twitterCard?: string;     // Twitter卡片类型
  canonical?: string;       // Canonical URL
  robots?: string;          // Robots指令
}

/**
 * 结构化数据基类
 */
export interface StructuredDataBase {
  '@context': string;
  '@type': string;
}

/**
 * Organization结构化数据
 */
export interface OrganizationSchema extends StructuredDataBase {
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  description?: string;
  address?: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];        // 社交媒体链接
}

/**
 * 博客文章前言
 */
export interface BlogFrontmatter {
  title: string;            // 标题
  slug: string;             // URL slug
  description: string;      // 描述
  lang: Language;           // 语言
  author?: string;          // 作者
  date: string;             // 发布日期
  updated?: string;         // 更新日期
  tags?: string[];          // 标签
  category?: string;        // 分类
  featuredImage?: string;   // 特色图片
  excerpt?: string;         // 摘要
  readingTime?: number;     // 阅读时间（分钟）
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

/**
 * 分页信息
 */
export interface Pagination {
  page: number;             // 当前页
  pageSize: number;         // 每页数量
  total: number;            // 总数
  totalPages: number;       // 总页数
  hasNext: boolean;         // 是否有下一页
  hasPrev: boolean;         // 是否有上一页
  nextPage?: number;        // 下一页页码
  prevPage?: number;        // 上一页页码
}

/**
 * 表单字段
 */
export interface FormField {
  name: string;             // 字段名
  label: string;            // 标签
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'number';
  placeholder?: string;     // 占位符
  required?: boolean;       // 是否必填
  pattern?: string;         // 正则验证
  min?: number;            // 最小值
  max?: number;            // 最大值
  options?: {              // 选项（用于select/radio）
    value: string;
    label: string;
  }[];
  helperText?: string;      // 帮助文本
  errorMessage?: string;    // 错误提示
}

/**
 * 表单配置
 */
export interface FormConfig {
  id: string;               // 表单ID
  title: string;            // 表单标题
  description?: string;     // 表单描述
  fields: FormField[];      // 字段列表
  submitText?: string;      // 提交按钮文本
  action?: string;          // 提交地址
  method?: 'POST' | 'GET';  // 提交方法
  multiStep?: boolean;      // 是否多步骤
}

/**
 * API响应
 */
export interface ApiResponse<T = any> {
  success: boolean;         // 是否成功
  data?: T;                // 数据
  message?: string;         // 消息
  error?: string;           // 错误信息
  code?: number;           // 状态码
}

/**
 * 错误信息
 */
export interface ErrorInfo {
  code: string;             // 错误代码
  message: string;          // 错误消息
  details?: string;         // 详细信息
  field?: string;           // 相关字段
}

/**
 * 搜索结果
 */
export interface SearchResult<T = any> {
  items: T[];               // 结果项
  total: number;            // 总数
  query: string;            // 查询词
  took?: number;            // 耗时（ms）
  facets?: {               // 过滤器
    [key: string]: {
      label: string;
      count: number;
    }[];
  };
}

/**
 * 通知消息
 */
export interface NotificationMessage {
  id: string;               // 消息ID
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;           // 标题
  message: string;          // 消息内容
  duration?: number;        // 持续时间（ms）
  dismissible?: boolean;    // 是否可关闭
}

/**
 * 下载资源
 */
export interface DownloadResource {
  title: string;            // 标题
  description?: string;     // 描述
  type: 'pdf' | 'doc' | 'xls' | 'zip' | 'other';
  url: string;              // 下载链接
  size?: string;            // 文件大小
  language?: Language;      // 语言
  thumbnail?: string;       // 缩略图
}
