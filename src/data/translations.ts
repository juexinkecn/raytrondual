// src/data/translations.ts
import type { Language } from '@/types';

/**
 * 通用翻译
 */
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // 通用
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.close': 'Close',
    'common.submit': 'Submit',
    'common.send': 'Send',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.loading': 'Loading...',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.download': 'Download',
    'common.share': 'Share',
    'common.print': 'Print',

    // CTA
    'cta.getQuote': 'Get Quote',
    'cta.requestSample': 'Request Sample',
    'cta.contactUs': 'Contact Us',
    'cta.learnMore': 'Learn More',
    'cta.viewProducts': 'View Products',
    'cta.downloadDatasheet': 'Download Datasheet',
    'cta.viewSpecifications': 'View Specifications',

    // 表单
    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.company': 'Company',
    'form.country': 'Country',
    'form.message': 'Message',
    'form.required': 'Required',
    'form.optional': 'Optional',
    'form.submit': 'Submit',
    'form.sending': 'Sending...',
    'form.success': 'Thank you! We will contact you soon.',
    'form.error': 'Something went wrong. Please try again.',

    // 产品
    'product.specifications': 'Specifications',
    'product.features': 'Features',
    'product.applications': 'Applications',
    'product.relatedProducts': 'Related Products',
    'product.faq': 'Frequently Asked Questions',
    'product.downloadDatasheet': 'Download Datasheet',
    'product.requestQuote': 'Request Quote',
    'product.inStock': 'In Stock',
    'product.outOfStock': 'Out of Stock',

    // FAQ
    'faq.searchPlaceholder': 'Search FAQ...',
    'faq.noResults': 'No results found',
    'faq.wasHelpful': 'Was this helpful?',
    'faq.yes': 'Yes',
    'faq.no': 'No',
    'faq.thankYou': 'Thank you for your feedback!',
    'faq.relatedQuestions': 'Related Questions',
    'faq.categories': 'Categories',
    'faq.allCategories': 'All Categories',

    // 分页
    'pagination.previous': 'Previous',
    'pagination.next': 'Next',
    'pagination.page': 'Page',
    'pagination.of': 'of',
    'pagination.showing': 'Showing',
    'pagination.results': 'results',

    // 搜索
    'search.placeholder': 'Search products, FAQ, resources...',
    'search.noResults': 'No results found for',
    'search.tryAgain': 'Try different keywords',
    'search.suggestions': 'Suggested searches',
    'search.recent': 'Recent searches',
    'search.popular': 'Popular searches',

    // 导航
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.applications': 'Applications',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.language': 'Language',

    // 底部
    'footer.followUs': 'Follow Us',
    'footer.newsletter': 'Newsletter',
    'footer.subscribe': 'Subscribe',
    'footer.emailPlaceholder': 'Enter your email',
    'footer.allRightsReserved': 'All rights reserved',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',

    // 错误页面
    'error.404.title': 'Page Not Found',
    'error.404.message': 'The page you are looking for does not exist.',
    'error.404.backHome': 'Back to Home',
    'error.500.title': 'Server Error',
    'error.500.message': 'Something went wrong on our end.',

    // 联系
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team',
    'contact.info': 'Contact Information',
    'contact.form': 'Send us a message',
    'contact.hours': 'Business Hours',
    'contact.location': 'Location',
  },
  cn: {
    // 通用
    'common.readMore': '阅读更多',
    'common.learnMore': '了解更多',
    'common.viewAll': '查看全部',
    'common.back': '返回',
    'common.next': '下一页',
    'common.previous': '上一页',
    'common.close': '关闭',
    'common.submit': '提交',
    'common.send': '发送',
    'common.save': '保存',
    'common.cancel': '取消',
    'common.loading': '加载中...',
    'common.search': '搜索',
    'common.filter': '筛选',
    'common.sort': '排序',
    'common.download': '下载',
    'common.share': '分享',
    'common.print': '打印',

    // CTA
    'cta.getQuote': '获取报价',
    'cta.requestSample': '申请样品',
    'cta.contactUs': '联系我们',
    'cta.learnMore': '了解更多',
    'cta.viewProducts': '查看产品',
    'cta.downloadDatasheet': '下载数据表',
    'cta.viewSpecifications': '查看规格',

    // 表单
    'form.name': '姓名',
    'form.email': '邮箱',
    'form.phone': '电话',
    'form.company': '公司',
    'form.country': '国家',
    'form.message': '留言',
    'form.required': '必填',
    'form.optional': '选填',
    'form.submit': '提交',
    'form.sending': '发送中...',
    'form.success': '感谢您的留言！我们会尽快联系您。',
    'form.error': '出错了，请重试。',

    // 产品
    'product.specifications': '技术规格',
    'product.features': '产品特性',
    'product.applications': '应用领域',
    'product.relatedProducts': '相关产品',
    'product.faq': '常见问题',
    'product.downloadDatasheet': '下载数据表',
    'product.requestQuote': '询价',
    'product.inStock': '有货',
    'product.outOfStock': '缺货',

    // FAQ
    'faq.searchPlaceholder': '搜索常见问题...',
    'faq.noResults': '未找到结果',
    'faq.wasHelpful': '这个回答有帮助吗？',
    'faq.yes': '有帮助',
    'faq.no': '没帮助',
    'faq.thankYou': '感谢您的反馈！',
    'faq.relatedQuestions': '相关问题',
    'faq.categories': '分类',
    'faq.allCategories': '全部分类',

    // 分页
    'pagination.previous': '上一页',
    'pagination.next': '下一页',
    'pagination.page': '第',
    'pagination.of': '页，共',
    'pagination.showing': '显示',
    'pagination.results': '条结果',

    // 搜索
    'search.placeholder': '搜索产品、常见问题、资源...',
    'search.noResults': '未找到相关结果',
    'search.tryAgain': '尝试其他关键词',
    'search.suggestions': '推荐搜索',
    'search.recent': '最近搜索',
    'search.popular': '热门搜索',

    // 导航
    'nav.home': '首页',
    'nav.products': '产品中心',
    'nav.applications': '应用领域',
    'nav.resources': '资源中心',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    'nav.language': '语言',

    // 底部
    'footer.followUs': '关注我们',
    'footer.newsletter': '邮件订阅',
    'footer.subscribe': '订阅',
    'footer.emailPlaceholder': '输入您的邮箱',
    'footer.allRightsReserved': '版权所有',
    'footer.privacyPolicy': '隐私政策',
    'footer.termsOfService': '服务条款',

    // 错误页面
    'error.404.title': '页面未找到',
    'error.404.message': '您访问的页面不存在。',
    'error.404.backHome': '返回首页',
    'error.500.title': '服务器错误',
    'error.500.message': '服务器出错了。',

    // 联系
    'contact.title': '联系我们',
    'contact.subtitle': '与我们的团队取得联系',
    'contact.info': '联系信息',
    'contact.form': '发送消息',
    'contact.hours': '营业时间',
    'contact.location': '位置',
  },
};

/**
 * 获取翻译文本
 * @param key 翻译键
 * @param lang 语言
 * @returns 翻译文本
 */
export function t(key: string, lang: Language = 'en'): string {
  return translations[lang][key] || key;
}
