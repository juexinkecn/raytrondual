// src/types/index.ts
// 统一导出所有类型定义

// 产品相关类型
export type {
  ProductCategory,
  ProductType,
  SurfaceTreatment,
  TemperCondition,
  Specification,
  SpecificationGroup,
  ProductFeature,
  ProductApplication,
  ProductImage,
  ProductDatasheet,
  ProductCertification,
  ProductSEO,
  ProductFrontmatter,
  Product,
  ProductListItem,
  ProductCategoryInfo,
} from './product';

// 应用领域相关类型
export type {
  ApplicationCategory,
  IndustryChallenge,
  Solution,
  CaseStudy,
  TechnicalAdvantage,
  RecommendedProduct,
  ApplicationImage,
  ApplicationSEO,
  ApplicationFrontmatter,
  Application,
  ApplicationListItem,
  ApplicationCategoryInfo,
} from './application';

// FAQ相关类型
export type {
  FAQCategory,
  FAQPriority,
  FAQSection,
  RelatedQuestion,
  KeyTakeaway,
  FAQSEO,
  FAQFrontmatter,
  FAQ,
  FAQListItem,
  FAQCategoryInfo,
  FAQSearchResult,
  FAQStats,
  FAQFilter,
  FAQSort,
} from './faq';

// 通用类型
export type {
  Language,
  NavigationItem,
  BreadcrumbItem,
  Link,
  Image,
  Video,
  SocialLink,
  ContactInfo,
  CompanyInfo,
  MetaData,
  StructuredDataBase,
  OrganizationSchema,
  BlogFrontmatter,
  Pagination,
  FormField,
  FormConfig,
  ApiResponse,
  ErrorInfo,
  SearchResult,
  NotificationMessage,
  DownloadResource,
} from './common';
