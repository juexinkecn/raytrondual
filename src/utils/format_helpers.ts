// src/utils/format-helpers.ts
import type { Language } from '../types/language';

/**
 * 格式化日期
 */
export function formatDate(
  date: Date | string,
  lang: Language = 'en',
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  const locale = lang === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(locale, options || defaultOptions).format(dateObj);
}

/**
 * 格式化短日期
 */
export function formatShortDate(date: Date | string, lang: Language = 'en'): string {
  return formatDate(date, lang, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * 格式化相对时间（例如：2天前）
 */
export function formatRelativeTime(date: Date | string, lang: Language = 'en'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - dateObj.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);
  
  const translations = {
    en: {
      justNow: 'just now',
      secondsAgo: 'seconds ago',
      minuteAgo: 'minute ago',
      minutesAgo: 'minutes ago',
      hourAgo: 'hour ago',
      hoursAgo: 'hours ago',
      dayAgo: 'day ago',
      daysAgo: 'days ago',
      monthAgo: 'month ago',
      monthsAgo: 'months ago',
      yearAgo: 'year ago',
      yearsAgo: 'years ago',
    },
    zh: {
      justNow: '刚刚',
      secondsAgo: '秒前',
      minuteAgo: '分钟前',
      minutesAgo: '分钟前',
      hourAgo: '小时前',
      hoursAgo: '小时前',
      dayAgo: '天前',
      daysAgo: '天前',
      monthAgo: '个月前',
      monthsAgo: '个月前',
      yearAgo: '年前',
      yearsAgo: '年前',
    },
  };
  
  const t = translations[lang];
  
  if (diffSec < 10) return t.justNow;
  if (diffMin < 1) return `${diffSec} ${t.secondsAgo}`;
  if (diffMin === 1) return `1 ${t.minuteAgo}`;
  if (diffHour < 1) return `${diffMin} ${t.minutesAgo}`;
  if (diffHour === 1) return `1 ${t.hourAgo}`;
  if (diffDay < 1) return `${diffHour} ${t.hoursAgo}`;
  if (diffDay === 1) return `1 ${t.dayAgo}`;
  if (diffMonth < 1) return `${diffDay} ${t.daysAgo}`;
  if (diffMonth === 1) return `1 ${t.monthAgo}`;
  if (diffYear < 1) return `${diffMonth} ${t.monthsAgo}`;
  if (diffYear === 1) return `1 ${t.yearAgo}`;
  return `${diffYear} ${t.yearsAgo}`;
}

/**
 * 格式化数字（添加千分位分隔符）
 */
export function formatNumber(num: number, lang: Language = 'en'): string {
  const locale = lang === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * 格式化货币
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  lang: Language = 'en'
): string {
  const locale = lang === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * 格式化百分比
 */
export function formatPercentage(
  value: number,
  decimals: number = 0,
  lang: Language = 'en'
): string {
  const locale = lang === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value / 100);
}

/**
 * 格式化文件大小
 */
export function formatFileSize(bytes: number, lang: Language = 'en'): string {
  const units = lang === 'zh' 
    ? ['字节', 'KB', 'MB', 'GB', 'TB']
    : ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  if (bytes === 0) return `0 ${units[0]}`;
  
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);
  
  return `${value.toFixed(2)} ${units[i]}`;
}

/**
 * 格式化电话号码（中国格式）
 */
export function formatPhoneNumber(phone: string): string {
  // 移除所有非数字字符
  const cleaned = phone.replace(/\D/g, '');
  
  // 中国手机号格式：138-1234-5678
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7)}`;
  }
  
  // 中国座机格式：0512-1234-5678
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 8)}-${cleaned.slice(8)}`;
  }
  
  // 其他格式保持原样
  return phone;
}

/**
 * 截断文本（添加省略号）
 */
export function truncate(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.substring(0, maxLength - suffix.length).trim() + suffix;
}

/**
 * 首字母大写
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * 标题格式化（每个单词首字母大写）
 */
export function titleCase(text: string): string {
  const smallWords = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'of', 'on', 'or', 'the', 'to', 'via'];
  
  return text
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      // 第一个单词或不在小词列表中的单词都大写
      if (index === 0 || !smallWords.includes(word)) {
        return capitalize(word);
      }
      return word;
    })
    .join(' ');
}

/**
 * 驼峰转连字符
 */
export function camelToKebab(text: string): string {
  return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * 连字符转驼峰
 */
export function kebabToCamel(text: string): string {
  return text.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

/**
 * 格式化规格参数（添加单位）
 */
export function formatSpec(value: number | string, unit: string): string {
  return `${value}${unit}`;
}

/**
 * 格式化温度范围
 */
export function formatTemperatureRange(
  min: number,
  max: number,
  unit: 'C' | 'F' = 'C',
  lang: Language = 'en'
): string {
  const symbol = unit === 'C' ? '°C' : '°F';
  const separator = lang === 'zh' ? '至' : 'to';
  return `${min}${symbol} ${separator} ${max}${symbol}`;
}

/**
 * 格式化尺寸范围
 */
export function formatDimensionRange(
  min: number,
  max: number,
  unit: string,
  lang: Language = 'en'
): string {
  const separator = lang === 'zh' ? '至' : 'to';
  return `${min}${unit} ${separator} ${max}${unit}`;
}

/**
 * 格式化列表（用逗号分隔，最后一项用"和"）
 */
export function formatList(items: string[], lang: Language = 'en'): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  
  const conjunction = lang === 'zh' ? '和' : 'and';
  const lastItem = items[items.length - 1];
  const otherItems = items.slice(0, -1);
  
  return `${otherItems.join(', ')} ${conjunction} ${lastItem}`;
}

/**
 * 移除HTML标签
 */
export function stripHTML(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

/**
 * 高亮关键词（包裹<mark>标签）
 */
export function highlightKeywords(text: string, keywords: string[]): string {
  let result = text;
  
  keywords.forEach(keyword => {
    if (!keyword) return;
    
    const regex = new RegExp(`(${keyword})`, 'gi');
    result = result.replace(regex, '<mark>$1</mark>');
  });
  
  return result;
}

/**
 * 格式化时长（秒转为时:分:秒）
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  const parts: string[] = [];
  
  if (hours > 0) {
    parts.push(hours.toString().padStart(2, '0'));
  }
  
  parts.push(minutes.toString().padStart(2, '0'));
  parts.push(secs.toString().padStart(2, '0'));
  
  return parts.join(':');
}

/**
 * 格式化邮政编码
 */
export function formatPostalCode(code: string, country: string = 'CN'): string {
  const cleaned = code.replace(/\s/g, '');
  
  if (country === 'CN') {
    // 中国邮政编码：6位数字
    return cleaned.replace(/(\d{3})(\d{3})/, '$1 $2');
  }
  
  return cleaned;
}

/**
 * 生成缩写（取每个单词的首字母）
 */
export function generateAcronym(text: string): string {
  return text
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase())
    .join('');
}

/**
 * 格式化JSON（美化输出）
 */
export function formatJSON(obj: any, indent: number = 2): string {
  return JSON.stringify(obj, null, indent);
}

/**
 * 格式化产品编码（例如：RTC-001 → RTC 001）
 */
export function formatProductCode(code: string): string {
  return code.replace(/([A-Z]+)-?(\d+)/, '$1 $2');
}