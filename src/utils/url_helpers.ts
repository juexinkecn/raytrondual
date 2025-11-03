// src/utils/url-helpers.ts
import type { Language } from '../types/language';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './i18n';

/**
 * 从URL中提取语言代码
 */
export function extractLanguageFromPath(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (SUPPORTED_LANGUAGES.includes(firstSegment as Language)) {
    return firstSegment as Language;
  }
  
  return DEFAULT_LANGUAGE;
}

/**
 * 移除URL中的语言前缀
 */
export function removeLanguagePrefix(pathname: string): string {
  const lang = extractLanguageFromPath(pathname);
  
  if (lang === DEFAULT_LANGUAGE) {
    return pathname;
  }
  
  // 移除语言前缀
  return pathname.replace(`/${lang}`, '') || '/';
}

/**
 * 添加语言前缀到URL
 */
export function addLanguagePrefix(pathname: string, lang: Language): string {
  // 先移除可能存在的语言前缀
  const cleanPath = removeLanguagePrefix(pathname);
  
  // 如果是默认语言，不添加前缀
  if (lang === DEFAULT_LANGUAGE) {
    return cleanPath;
  }
  
  // 添加新的语言前缀
  return `/${lang}${cleanPath}`;
}

/**
 * 获取产品详情页URL
 */
export function getProductURL(slug: string, lang: Language): string {
  const basePath = '/products';
  const path = `${basePath}/${slug}`;
  return addLanguagePrefix(path, lang);
}

/**
 * 获取FAQ页面URL
 */
export function getFAQURL(lang: Language, category?: string): string {
  const basePath = '/faq';
  const path = category ? `${basePath}#${category}` : basePath;
  return addLanguagePrefix(path, lang);
}

/**
 * 获取联系页面URL
 */
export function getContactURL(lang: Language): string {
  return addLanguagePrefix('/contact', lang);
}

/**
 * 获取关于页面URL
 */
export function getAboutURL(lang: Language): string {
  return addLanguagePrefix('/about', lang);
}

/**
 * 构建查询字符串
 */
export function buildQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, String(value));
    }
  });
  
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
}

/**
 * 解析查询字符串
 */
export function parseQueryString(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  const result: Record<string, string> = {};
  
  params.forEach((value, key) => {
    result[key] = value;
  });
  
  return result;
}

/**
 * 向URL添加查询参数
 */
export function addQueryParams(
  url: string,
  params: Record<string, any>
): string {
  const [basePath, existingQuery] = url.split('?');
  const existingParams = existingQuery ? parseQueryString(`?${existingQuery}`) : {};
  
  const mergedParams = { ...existingParams, ...params };
  const queryString = buildQueryString(mergedParams);
  
  return queryString ? `${basePath}${queryString}` : basePath;
}

/**
 * 从URL中移除查询参数
 */
export function removeQueryParams(url: string, keys: string[]): string {
  const [basePath, existingQuery] = url.split('?');
  
  if (!existingQuery) return url;
  
  const params = parseQueryString(`?${existingQuery}`);
  
  keys.forEach(key => {
    delete params[key];
  });
  
  const queryString = buildQueryString(params);
  return queryString ? `${basePath}${queryString}` : basePath;
}

/**
 * 检查是否是外部链接
 */
export function isExternalLink(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.origin !== window.location.origin;
  } catch {
    // 如果URL无效或是相对路径，视为内部链接
    return false;
  }
}

/**
 * 规范化路径（移除多余的斜杠）
 */
export function normalizePath(path: string): string {
  return path
    .replace(/\/+/g, '/') // 多个斜杠合并为一个
    .replace(/\/$/, '') // 移除结尾斜杠
    || '/'; // 如果结果为空，返回根路径
}

/**
 * 组合路径片段
 */
export function joinPaths(...paths: string[]): string {
  const joined = paths
    .map(path => path.replace(/^\/|\/$/g, '')) // 移除开头和结尾的斜杠
    .filter(Boolean)
    .join('/');
  
  return `/${joined}`;
}

/**
 * 获取文件扩展名
 */
export function getFileExtension(filename: string): string {
  const parts = filename.split('.');
  return parts.length > 1 ? parts.pop()!.toLowerCase() : '';
}

/**
 * 获取不带扩展名的文件名
 */
export function getFilenameWithoutExtension(filename: string): string {
  return filename.replace(/\.[^/.]+$/, '');
}

/**
 * 生成安全的下载文件名
 */
export function generateSafeFilename(filename: string): string {
  return filename
    .replace(/[^a-zA-Z0-9.-]/g, '_') // 替换非法字符
    .replace(/_+/g, '_') // 合并多个下划线
    .replace(/^_|_$/g, ''); // 移除开头和结尾的下划线
}

/**
 * 构建完整的绝对URL
 */
export function buildAbsoluteURL(
  path: string,
  baseUrl: string = 'https://www.raytron.com'
): string {
  const cleanBase = baseUrl.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return `${cleanBase}/${cleanPath}`;
}

/**
 * 提取URL的域名
 */
export function extractDomain(url: string): string | null {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return null;
  }
}

/**
 * 检查路径是否匹配（支持通配符）
 */
export function matchPath(pattern: string, path: string): boolean {
  // 转义特殊字符并转换通配符
  const regexPattern = pattern
    .replace(/[.+^${}()|[\]\\]/g, '\\$&') // 转义正则特殊字符
    .replace(/\*/g, '.*') // * 转换为 .*
    .replace(/\?/g, '.'); // ? 转换为 .
  
  const regex = new RegExp(`^${regexPattern}$`);
  return regex.test(path);
}

/**
 * 获取面包屑路径数组
 */
export function getBreadcrumbSegments(pathname: string): Array<{
  name: string;
  path: string;
}> {
  const lang = extractLanguageFromPath(pathname);
  const cleanPath = removeLanguagePrefix(pathname);
  
  const segments = cleanPath.split('/').filter(Boolean);
  const breadcrumbs: Array<{ name: string; path: string }> = [];
  
  // 添加首页
  breadcrumbs.push({
    name: lang === 'zh' ? '首页' : 'Home',
    path: addLanguagePrefix('/', lang),
  });
  
  // 添加其他路径段
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // 格式化段名称（首字母大写，连字符转空格）
    const name = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
    
    breadcrumbs.push({
      name,
      path: addLanguagePrefix(currentPath, lang),
    });
  });
  
  return breadcrumbs;
}

/**
 * 生成分页URL
 */
export function getPaginationURL(
  basePath: string,
  page: number,
  lang: Language
): string {
  const path = page > 1 ? `${basePath}/page/${page}` : basePath;
  return addLanguagePrefix(path, lang);
}

/**
 * 从slug生成可读标题
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * 检查是否是资源文件路径
 */
export function isAssetPath(path: string): boolean {
  const assetExtensions = [
    'jpg', 'jpeg', 'png', 'gif', 'svg', 'webp',
    'pdf', 'doc', 'docx', 'xls', 'xlsx',
    'css', 'js', 'json', 'xml',
    'mp4', 'webm', 'mp3', 'wav',
  ];
  
  const ext = getFileExtension(path);
  return assetExtensions.includes(ext);
}

/**
 * 获取当前页面的规范URL（用于SEO）
 */
export function getCanonicalURL(
  pathname: string,
  baseUrl: string = 'https://www.raytron.com'
): string {
  const cleanPath = normalizePath(pathname);
  return buildAbsoluteURL(cleanPath, baseUrl);
}