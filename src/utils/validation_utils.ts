// src/utils/validation.ts

/**
 * 验证结果接口
 */
export interface ValidationResult {
  valid: boolean;
  message?: string;
}

/**
 * 验证邮箱地址
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { valid: false, message: 'Email is required' };
  }
  
  // RFC 5322 简化版正则
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { valid: false, message: 'Invalid email format' };
  }
  
  // 检查长度
  if (email.length > 254) {
    return { valid: false, message: 'Email is too long' };
  }
  
  return { valid: true };
}

/**
 * 验证电话号码（支持中国和国际格式）
 */
export function validatePhone(phone: string, country: string = 'CN'): ValidationResult {
  if (!phone) {
    return { valid: false, message: 'Phone number is required' };
  }
  
  // 移除所有非数字字符
  const cleaned = phone.replace(/\D/g, '');
  
  if (country === 'CN') {
    // 中国手机号：11位，以1开头
    const mobileRegex = /^1[3-9]\d{9}$/;
    // 中国座机：带区号，如 0512-12345678
    const landlineRegex = /^0\d{2,3}\d{7,8}$/;
    
    if (mobileRegex.test(cleaned) || landlineRegex.test(cleaned)) {
      return { valid: true };
    }
    
    return { valid: false, message: 'Invalid Chinese phone number' };
  }
  
  // 国际号码：至少7位
  if (cleaned.length >= 7 && cleaned.length <= 15) {
    return { valid: true };
  }
  
  return { valid: false, message: 'Invalid phone number' };
}

/**
 * 验证姓名
 */
export function validateName(name: string, lang: string = 'en'): ValidationResult {
  if (!name) {
    return { valid: false, message: 'Name is required' };
  }
  
  const trimmed = name.trim();
  
  if (trimmed.length < 2) {
    return { valid: false, message: 'Name is too short' };
  }
  
  if (trimmed.length > 50) {
    return { valid: false, message: 'Name is too long' };
  }
  
  if (lang === 'zh') {
    // 中文名：2-4个字符，可以包含中文
    const chineseRegex = /^[\u4e00-\u9fa5]{2,4}$/;
    if (chineseRegex.test(trimmed)) {
      return { valid: true };
    }
  }
  
  // 英文名：至少包含字母，可以有空格、连字符、撇号
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (nameRegex.test(trimmed)) {
    return { valid: true };
  }
  
  return { valid: false, message: 'Invalid name format' };
}

/**
 * 验证公司名称
 */
export function validateCompanyName(name: string): ValidationResult {
  if (!name) {
    return { valid: false, message: 'Company name is required' };
  }
  
  const trimmed = name.trim();
  
  if (trimmed.length < 2) {
    return { valid: false, message: 'Company name is too short' };
  }
  
  if (trimmed.length > 100) {
    return { valid: false, message: 'Company name is too long' };
  }
  
  return { valid: true };
}

/**
 * 验证邮政编码
 */
export function validatePostalCode(code: string, country: string = 'CN'): ValidationResult {
  if (!code) {
    return { valid: false, message: 'Postal code is required' };
  }
  
  const cleaned = code.replace(/\s/g, '');
  
  if (country === 'CN') {
    // 中国邮政编码：6位数字
    const cnRegex = /^\d{6}$/;
    if (cnRegex.test(cleaned)) {
      return { valid: true };
    }
    return { valid: false, message: 'Invalid Chinese postal code (6 digits required)' };
  }
  
  // 美国邮政编码：5位或5+4位
  if (country === 'US') {
    const usRegex = /^\d{5}(-\d{4})?$/;
    if (usRegex.test(cleaned)) {
      return { valid: true };
    }
    return { valid: false, message: 'Invalid US ZIP code' };
  }
  
  // 其他国家：3-10位字母数字
  if (cleaned.length >= 3 && cleaned.length <= 10) {
    return { valid: true };
  }
  
  return { valid: false, message: 'Invalid postal code' };
}

/**
 * 验证URL
 */
export function validateURL(url: string): ValidationResult {
  if (!url) {
    return { valid: false, message: 'URL is required' };
  }
  
  try {
    const urlObj = new URL(url);
    
    // 检查协议
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return { valid: false, message: 'URL must use http or https protocol' };
    }
    
    return { valid: true };
  } catch {
    return { valid: false, message: 'Invalid URL format' };
  }
}

/**
 * 验证文件类型
 */
export function validateFileType(
  filename: string,
  allowedTypes: string[]
): ValidationResult {
  if (!filename) {
    return { valid: false, message: 'Filename is required' };
  }
  
  const extension = filename.split('.').pop()?.toLowerCase();
  
  if (!extension) {
    return { valid: false, message: 'File has no extension' };
  }
  
  if (!allowedTypes.includes(extension)) {
    return {
      valid: false,
      message: `File type .${extension} is not allowed. Allowed: ${allowedTypes.join(', ')}`,
    };
  }
  
  return { valid: true };
}

/**
 * 验证文件大小
 */
export function validateFileSize(
  fileSize: number,
  maxSizeMB: number
): ValidationResult {
  const maxBytes = maxSizeMB * 1024 * 1024;
  
  if (fileSize > maxBytes) {
    return {
      valid: false,
      message: `File size exceeds maximum of ${maxSizeMB}MB`,
    };
  }
  
  return { valid: true };
}

/**
 * 验证数字范围
 */
export function validateNumberRange(
  value: number,
  min?: number,
  max?: number
): ValidationResult {
  if (isNaN(value)) {
    return { valid: false, message: 'Value must be a number' };
  }
  
  if (min !== undefined && value < min) {
    return { valid: false, message: `Value must be at least ${min}` };
  }
  
  if (max !== undefined && value > max) {
    return { valid: false, message: `Value must be at most ${max}` };
  }
  
  return { valid: true };
}

/**
 * 验证字符串长度
 */
export function validateLength(
  text: string,
  min?: number,
  max?: number
): ValidationResult {
  const length = text.trim().length;
  
  if (min !== undefined && length < min) {
    return { valid: false, message: `Text must be at least ${min} characters` };
  }
  
  if (max !== undefined && length > max) {
    return { valid: false, message: `Text must be at most ${max} characters` };
  }
  
  return { valid: true };
}

/**
 * 验证必填字段
 */
export function validateRequired(value: any, fieldName: string = 'Field'): ValidationResult {
  if (value === null || value === undefined || value === '') {
    return { valid: false, message: `${fieldName} is required` };
  }
  
  // 检查空格字符串
  if (typeof value === 'string' && value.trim() === '') {
    return { valid: false, message: `${fieldName} cannot be empty` };
  }
  
  return { valid: true };
}

/**
 * 验证密码强度
 */
export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { valid: false, message: 'Password is required' };
  }
  
  if (password.length < 8) {
    return { valid: false, message: 'Password must be at least 8 characters' };
  }
  
  if (password.length > 128) {
    return { valid: false, message: 'Password is too long' };
  }
  
  // 检查是否包含数字
  if (!/\d/.test(password)) {
    return { valid: false, message: 'Password must contain at least one number' };
  }
  
  // 检查是否包含字母
  if (!/[a-zA-Z]/.test(password)) {
    return { valid: false, message: 'Password must contain at least one letter' };
  }
  
  return { valid: true };
}

/**
 * 验证数量（正整数）
 */
export function validateQuantity(quantity: number): ValidationResult {
  if (!Number.isInteger(quantity)) {
    return { valid: false, message: 'Quantity must be a whole number' };
  }
  
  if (quantity < 1) {
    return { valid: false, message: 'Quantity must be at least 1' };
  }
  
  if (quantity > 999999) {
    return { valid: false, message: 'Quantity is too large' };
  }
  
  return { valid: true };
}

/**
 * 验证日期（不能是过去的日期）
 */
export function validateFutureDate(date: Date | string): ValidationResult {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    return { valid: false, message: 'Invalid date' };
  }
  
  const now = new Date();
  now.setHours(0, 0, 0, 0); // 重置到当天开始
  
  if (dateObj < now) {
    return { valid: false, message: 'Date cannot be in the past' };
  }
  
  return { valid: true };
}

/**
 * 验证信用卡号（Luhn算法）
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
  const cleaned = cardNumber.replace(/\s/g, '');
  
  if (!/^\d+$/.test(cleaned)) {
    return { valid: false, message: 'Card number must contain only digits' };
  }
  
  if (cleaned.length < 13 || cleaned.length > 19) {
    return { valid: false, message: 'Invalid card number length' };
  }
  
  // Luhn算法
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  if (sum % 10 !== 0) {
    return { valid: false, message: 'Invalid card number' };
  }
  
  return { valid: true };
}

/**
 * 批量验证
 */
export function validateAll(
  validators: Array<() => ValidationResult>
): ValidationResult {
  for (const validator of validators) {
    const result = validator();
    if (!result.valid) {
      return result;
    }
  }
  
  return { valid: true };
}

/**
 * 验证表单数据
 */
export function validateForm(
  data: Record<string, any>,
  rules: Record<string, (value: any) => ValidationResult>
): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  let valid = true;
  
  for (const [field, validator] of Object.entries(rules)) {
    const result = validator(data[field]);
    if (!result.valid) {
      errors[field] = result.message || 'Invalid value';
      valid = false;
    }
  }
  
  return { valid, errors };
}

/**
 * 清理和验证HTML内容（防止XSS）
 */
export function sanitizeHTML(html: string): string {
  // 移除script标签
  let cleaned = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // 移除事件处理器属性
  cleaned = cleaned.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
  
  // 移除javascript:协议
  cleaned = cleaned.replace(/javascript:/gi, '');
  
  return cleaned;
}

/**
 * 验证经纬度坐标
 */
export function validateCoordinates(lat: number, lng: number): ValidationResult {
  if (isNaN(lat) || isNaN(lng)) {
    return { valid: false, message: 'Coordinates must be numbers' };
  }
  
  if (lat < -90 || lat > 90) {
    return { valid: false, message: 'Latitude must be between -90 and 90' };
  }
  
  if (lng < -180 || lng > 180) {
    return { valid: false, message: 'Longitude must be between -180 and 180' };
  }
  
  return { valid: true };
}