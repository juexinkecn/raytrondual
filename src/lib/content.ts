// src/lib/content.ts
import type { Language } from '@/types';

/**
 * 从Markdown中提取摘要
 * @param content Markdown内容
 * @param maxLength 最大长度
 * @returns 摘要
 */
export function extractExcerpt(content: string, maxLength: number = 160): string {
  // 移除Markdown语法
  const plainText = content
    .replace(/^---[\s\S]*?---/, '') // 移除frontmatter
    .replace(/#{1,6}\s/g, '') // 移除标题标记
    .replace(/\*\*([^*]+)\*\*/g, '$1') // 移除加粗
    .replace(/\*([^*]+)\*/g, '$1') // 移除斜体
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 移除链接，保留文本
    .replace(/`([^`]+)`/g, '$1') // 移除代码标记
    .replace(/\n+/g, ' ') // 将换行转为空格
    .trim();

  // 截断并添加省略号
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength).trim() + '...';
}

/**
 * 计算阅读时间
 * @param content 内容
 * @param wordsPerMinute 每分钟字数
 * @param lang 语言
 * @returns 阅读时间（分钟）
 */
export function calculateReadingTime(
  content: string,
  wordsPerMinute: number = 200,
  lang: Language = 'en'
): number {
  let words: number;

  if (lang === 'cn') {
    // 中文：按字符数计算
    words = content.replace(/\s/g, '').length;
    wordsPerMinute = 300; // 中文阅读速度调整
  } else {
    // 英文：按单词数计算
    words = content.trim().split(/\s+/).length;
  }

  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes); // 至少1分钟
}

/**
 * 生成目录（Table of Contents）
 * @param content Markdown内容
 * @param maxDepth 最大深度
 * @returns 目录数组
 */
export function generateTableOfContents(
  content: string,
  maxDepth: number = 3
): Array<{ level: number; text: string; slug: string }> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: Array<{ level: number; text: string; slug: string }> = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    if (level <= maxDepth) {
      const text = match[2].trim();
      const slug = slugify(text);
      toc.push({ level, text, slug });
    }
  }

  return toc;
}

/**
 * 生成slug
 * @param text 文本
 * @returns slug
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-\u4e00-\u9fa5]+/g, '') // 支持中文
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * 高亮代码块
 * @param code 代码
 * @param language 语言
 * @returns 高亮后的HTML
 */
export function highlightCode(code: string, language: string): string {
  // 这里可以集成 Shiki 或 Prism.js
  // 简单实现：直接返回包装的代码
  return `<pre><code class="language-${language}">${escapeHtml(code)}</code></pre>`;
}

/**
 * 转义HTML
 * @param html HTML字符串
 * @returns 转义后的字符串
 */
export function escapeHtml(html: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return html.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

/**
 * 解析Markdown中的图片
 * @param content Markdown内容
 * @returns 图片数组
 */
export function extractImages(content: string): Array<{
  url: string;
  alt: string;
  title?: string;
}> {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+?)(?:\s+"([^"]+)")?\)/g;
  const images: Array<{ url: string; alt: string; title?: string }> = [];

  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    images.push({
      alt: match[1] || '',
      url: match[2],
      title: match[3],
    });
  }

  return images;
}

/**
 * 解析Markdown中的链接
 * @param content Markdown内容
 * @returns 链接数组
 */
export function extractLinks(content: string): Array<{
  text: string;
  url: string;
  title?: string;
}> {
  const linkRegex = /\[([^\]]+)\]\(([^)]+?)(?:\s+"([^"]+)")?\)/g;
  const links: Array<{ text: string; url: string; title?: string }> = [];

  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    // 排除图片链接
    if (!match[0].startsWith('![')) {
      links.push({
        text: match[1],
        url: match[2],
        title: match[3],
      });
    }
  }

  return links;
}

/**
 * 验证内部链接
 * @param url URL
 * @returns 是否为内部链接
 */
export function isInternalLink(url: string): boolean {
  return url.startsWith('/') || url.startsWith('#');
}

/**
 * 验证外部链接
 * @param url URL
 * @returns 是否为外部链接
 */
export function isExternalLink(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

/**
 * 格式化Markdown表格为HTML
 * @param markdown Markdown表格
 * @returns HTML表格
 */
export function markdownTableToHtml(markdown: string): string {
  const lines = markdown.trim().split('\n');
  if (lines.length < 3) return markdown; // 需要至少3行（表头、分隔符、内容）

  const headers = lines[0]
    .split('|')
    .map((h) => h.trim())
    .filter(Boolean);
  const rows = lines
    .slice(2)
    .map((line) =>
      line
        .split('|')
        .map((c) => c.trim())
        .filter(Boolean)
    );

  let html = '<table class="markdown-table">\n';
  html += '  <thead>\n    <tr>\n';
  headers.forEach((header) => {
    html += `      <th>${header}</th>\n`;
  });
  html += '    </tr>\n  </thead>\n';
  html += '  <tbody>\n';
  rows.forEach((row) => {
    html += '    <tr>\n';
    row.forEach((cell) => {
      html += `      <td>${cell}</td>\n`;
    });
    html += '    </tr>\n';
  });
  html += '  </tbody>\n</table>';

  return html;
}

/**
 * 统计内容字数
 * @param content 内容
 * @param lang 语言
 * @returns 字数
 */
export function countWords(content: string, lang: Language = 'en'): number {
  const cleanContent = content
    .replace(/^---[\s\S]*?---/, '')
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .trim();

  if (lang === 'cn') {
    return cleanContent.replace(/\s/g, '').length;
  } else {
    return cleanContent.split(/\s+/).length;
  }
}

/**
 * 搜索内容
 * @param content 内容
 * @param query 搜索词
 * @param maxResults 最大结果数
 * @returns 匹配的片段
 */
export function searchContent(
  content: string,
  query: string,
  maxResults: number = 3
): string[] {
  const sentences = content.split(/[.!?]\s+/);
  const results: string[] = [];

  const lowerQuery = query.toLowerCase();

  for (const sentence of sentences) {
    if (sentence.toLowerCase().includes(lowerQuery)) {
      results.push(sentence.trim());
      if (results.length >= maxResults) break;
    }
  }

  return results;
}

/**
 * 高亮搜索关键词
 * @param text 文本
 * @param query 搜索词
 * @returns 高亮后的文本
 */
export function highlightSearchTerm(text: string, query: string): string {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

/**
 * 验证Markdown语法
 * @param content Markdown内容
 * @returns 验证结果
 */
export function validateMarkdown(content: string): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 检查未闭合的链接
  const unclosedLinkRegex = /\[([^\]]*?)(?!\])/g;
  if (unclosedLinkRegex.test(content)) {
    errors.push('Found unclosed link brackets');
  }

  // 检查未闭合的代码块
  const codeBlockCount = (content.match(/```/g) || []).length;
  if (codeBlockCount % 2 !== 0) {
    errors.push('Found unclosed code block');
  }

  // 检查标题层级跳跃
  const headings = content.match(/^#{1,6}\s/gm);
  if (headings) {
    let prevLevel = 0;
    headings.forEach((heading) => {
      const level = heading.trim().split(/\s/)[0].length;
      if (level - prevLevel > 1) {
        warnings.push(`Heading level jumps from H${prevLevel} to H${level}`);
      }
      prevLevel = level;
    });
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * 转换相对路径为绝对路径
 * @param content 内容
 * @param baseUrl 基础URL
 * @returns 转换后的内容
 */
export function convertRelativeToAbsolute(content: string, baseUrl: string): string {
  // 转换图片路径
  content = content.replace(
    /!\[([^\]]*)\]\((?!http)([^)]+)\)/g,
    `![$1](${baseUrl}$2)`
  );

  // 转换链接路径
  content = content.replace(
    /\[([^\]]+)\]\((?!http|#)([^)]+)\)/g,
    `[$1](${baseUrl}$2)`
  );

  return content;
}

/**
 * 获取第一个图片
 * @param content Markdown内容
 * @returns 第一个图片URL
 */
export function getFirstImage(content: string): string | null {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/;
  const match = content.match(imageRegex);
  return match ? match[2] : null;
}

/**
 * 移除Markdown语法
 * @param content Markdown内容
 * @returns 纯文本
 */
export function stripMarkdown(content: string): string {
  return content
    .replace(/^---[\s\S]*?---/, '')
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/~~([^~]+)~~/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/>\s/g, '')
    .replace(/[-*+]\s/g, '')
    .replace(/\d+\.\s/g, '')
    .trim();
}
