// src/data/navigation.ts
import type { NavigationItem, Language } from '@/types';

/**
 * 主导航配置
 */
export const mainNavigation: Record<Language, NavigationItem[]> = {
  en: [
    {
      label: 'Home',
      href: '/en',
    },
    {
      label: 'Products',
      href: '/en/products',
      children: [
        {
          label: 'Copper Series',
          href: '/en/products?category=copper',
          icon: 'Cpu',
        },
        {
          label: 'Aluminum Series',
          href: '/en/products?category=aluminum',
          icon: 'Layers',
        },
        {
          label: 'Copper Clad Aluminum (CCA)',
          href: '/en/products?category=cca',
          icon: 'Zap',
          badge: 'Featured',
        },
        {
          label: 'Nickel Clad Copper (NCC)',
          href: '/en/products?category=ncc',
          icon: 'Shield',
          badge: 'Featured',
        },
        {
          label: 'Silver Clad Copper (SCC)',
          href: '/en/products?category=scc',
          icon: 'Star',
        },
        {
          label: 'Copper Clad Steel (CCS)',
          href: '/en/products?category=ccs',
          icon: 'HardDrive',
        },
        {
          label: 'Specialty Products',
          href: '/en/products?category=specialty',
          icon: 'Sparkles',
        },
        {
          label: 'View All Products',
          href: '/en/products',
          icon: 'Grid',
        },
      ],
    },
    {
      label: 'Applications',
      href: '/en/applications',
      children: [
        {
          label: 'Photovoltaic & Solar',
          href: '/en/applications/photovoltaic-solar',
          icon: 'Sun',
        },
        {
          label: 'Battery & Energy Storage',
          href: '/en/applications/battery-storage',
          icon: 'Battery',
        },
        {
          label: 'Electric Vehicles',
          href: '/en/applications/electric-vehicles',
          icon: 'Car',
        },
        {
          label: 'Cable & Wire',
          href: '/en/applications/cable-wire',
          icon: 'Cable',
        },
        {
          label: 'Electronics & PCB',
          href: '/en/applications/electronics-pcb',
          icon: 'Cpu',
        },
        {
          label: 'Welding',
          href: '/en/applications/welding',
          icon: 'Wrench',
        },
        {
          label: 'Industrial Automation',
          href: '/en/applications/industrial-automation',
          icon: 'Settings',
        },
        {
          label: 'Telecommunications',
          href: '/en/applications/telecommunications',
          icon: 'Radio',
        },
      ],
    },
    {
      label: 'Resources',
      href: '/en/resources',
      children: [
        {
          label: 'FAQ',
          href: '/en/faq',
          icon: 'HelpCircle',
        },
        {
          label: 'Blog',
          href: '/en/blog',
          icon: 'BookOpen',
        },
        {
          label: 'Resource Center',
          href: '/en/resources',
          icon: 'FolderOpen',
        },
        {
          label: 'Datasheets',
          href: '/en/resources#datasheets',
          icon: 'FileText',
        },
        {
          label: 'White Papers',
          href: '/en/resources#whitepapers',
          icon: 'File',
        },
        {
          label: 'Case Studies',
          href: '/en/resources#cases',
          icon: 'TrendingUp',
        },
      ],
    },
    {
      label: 'About',
      href: '/en/about',
      children: [
        {
          label: 'Company Profile',
          href: '/en/about',
          icon: 'Building',
        },
        {
          label: 'Manufacturing Facility',
          href: '/en/about#facility',
          icon: 'Factory',
        },
        {
          label: 'Quality Control',
          href: '/en/about#quality',
          icon: 'CheckCircle',
        },
        {
          label: 'Certifications',
          href: '/en/about#certifications',
          icon: 'Award',
        },
      ],
    },
    {
      label: 'Contact',
      href: '/en/contact',
    },
  ],
  cn: [
    {
      label: '首页',
      href: '/cn',
    },
    {
      label: '产品中心',
      href: '/cn/products',
      children: [
        {
          label: '铜系列',
          href: '/cn/products?category=copper',
          icon: 'Cpu',
        },
        {
          label: '铝系列',
          href: '/cn/products?category=aluminum',
          icon: 'Layers',
        },
        {
          label: '铜包铝系列 (CCA)',
          href: '/cn/products?category=cca',
          icon: 'Zap',
          badge: '主打',
        },
        {
          label: '镍包铜系列 (NCC)',
          href: '/cn/products?category=ncc',
          icon: 'Shield',
          badge: '主打',
        },
        {
          label: '银包铜系列 (SCC)',
          href: '/cn/products?category=scc',
          icon: 'Star',
        },
        {
          label: '铜包钢系列 (CCS)',
          href: '/cn/products?category=ccs',
          icon: 'HardDrive',
        },
        {
          label: '特种产品系列',
          href: '/cn/products?category=specialty',
          icon: 'Sparkles',
        },
        {
          label: '查看全部产品',
          href: '/cn/products',
          icon: 'Grid',
        },
      ],
    },
    {
      label: '应用领域',
      href: '/cn/applications',
      children: [
        {
          label: '光伏太阳能',
          href: '/cn/applications/photovoltaic-solar',
          icon: 'Sun',
        },
        {
          label: '电池储能',
          href: '/cn/applications/battery-storage',
          icon: 'Battery',
        },
        {
          label: '电动汽车',
          href: '/cn/applications/electric-vehicles',
          icon: 'Car',
        },
        {
          label: '电缆线缆',
          href: '/cn/applications/cable-wire',
          icon: 'Cable',
        },
        {
          label: '电子电路',
          href: '/cn/applications/electronics-pcb',
          icon: 'Cpu',
        },
        {
          label: '焊接',
          href: '/cn/applications/welding',
          icon: 'Wrench',
        },
        {
          label: '工业自动化',
          href: '/cn/applications/industrial-automation',
          icon: 'Settings',
        },
        {
          label: '通信',
          href: '/cn/applications/telecommunications',
          icon: 'Radio',
        },
      ],
    },
    {
      label: '资源中心',
      href: '/cn/resources',
      children: [
        {
          label: '常见问题',
          href: '/cn/faq',
          icon: 'HelpCircle',
        },
        {
          label: '博客',
          href: '/cn/blog',
          icon: 'BookOpen',
        },
        {
          label: '资源中心',
          href: '/cn/resources',
          icon: 'FolderOpen',
        },
        {
          label: '产品数据表',
          href: '/cn/resources#datasheets',
          icon: 'FileText',
        },
        {
          label: '白皮书',
          href: '/cn/resources#whitepapers',
          icon: 'File',
        },
        {
          label: '案例研究',
          href: '/cn/resources#cases',
          icon: 'TrendingUp',
        },
      ],
    },
    {
      label: '关于我们',
      href: '/cn/about',
      children: [
        {
          label: '公司简介',
          href: '/cn/about',
          icon: 'Building',
        },
        {
          label: '生产设施',
          href: '/cn/about#facility',
          icon: 'Factory',
        },
        {
          label: '质量控制',
          href: '/cn/about#quality',
          icon: 'CheckCircle',
        },
        {
          label: '认证证书',
          href: '/cn/about#certifications',
          icon: 'Award',
        },
      ],
    },
    {
      label: '联系我们',
      href: '/cn/contact',
    },
  ],
};

/**
 * 底部导航配置
 */
export const footerNavigation: Record<Language, { title: string; links: NavigationItem[] }[]> = {
  en: [
    {
      title: 'Products',
      links: [
        { label: 'Copper Series', href: '/en/products?category=copper' },
        { label: 'Aluminum Series', href: '/en/products?category=aluminum' },
        { label: 'CCA Series', href: '/en/products?category=cca' },
        { label: 'NCC Series', href: '/en/products?category=ncc' },
        { label: 'SCC Series', href: '/en/products?category=scc' },
        { label: 'All Products', href: '/en/products' },
      ],
    },
    {
      title: 'Applications',
      links: [
        { label: 'Photovoltaic & Solar', href: '/en/applications/photovoltaic-solar' },
        { label: 'Battery & Energy Storage', href: '/en/applications/battery-storage' },
        { label: 'Electric Vehicles', href: '/en/applications/electric-vehicles' },
        { label: 'Cable & Wire', href: '/en/applications/cable-wire' },
        { label: 'View All', href: '/en/applications' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'FAQ', href: '/en/faq' },
        { label: 'Blog', href: '/en/blog' },
        { label: 'Resource Center', href: '/en/resources' },
        { label: 'Datasheets', href: '/en/resources#datasheets' },
        { label: 'White Papers', href: '/en/resources#whitepapers' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/en/about' },
        { label: 'Contact', href: '/en/contact' },
        { label: 'Quality', href: '/en/about#quality' },
        { label: 'Certifications', href: '/en/about#certifications' },
      ],
    },
  ],
  cn: [
    {
      title: '产品中心',
      links: [
        { label: '铜系列', href: '/cn/products?category=copper' },
        { label: '铝系列', href: '/cn/products?category=aluminum' },
        { label: '铜包铝系列', href: '/cn/products?category=cca' },
        { label: '镍包铜系列', href: '/cn/products?category=ncc' },
        { label: '银包铜系列', href: '/cn/products?category=scc' },
        { label: '全部产品', href: '/cn/products' },
      ],
    },
    {
      title: '应用领域',
      links: [
        { label: '光伏太阳能', href: '/cn/applications/photovoltaic-solar' },
        { label: '电池储能', href: '/cn/applications/battery-storage' },
        { label: '电动汽车', href: '/cn/applications/electric-vehicles' },
        { label: '电缆线缆', href: '/cn/applications/cable-wire' },
        { label: '查看全部', href: '/cn/applications' },
      ],
    },
    {
      title: '资源中心',
      links: [
        { label: '常见问题', href: '/cn/faq' },
        { label: '博客', href: '/cn/blog' },
        { label: '资源中心', href: '/cn/resources' },
        { label: '产品数据表', href: '/cn/resources#datasheets' },
        { label: '白皮书', href: '/cn/resources#whitepapers' },
      ],
    },
    {
      title: '公司信息',
      links: [
        { label: '关于我们', href: '/cn/about' },
        { label: '联系我们', href: '/cn/contact' },
        { label: '质量控制', href: '/cn/about#quality' },
        { label: '认证证书', href: '/cn/about#certifications' },
      ],
    },
  ],
};

/**
 * CTA按钮配置
 */
export const ctaButtons: Record<Language, NavigationItem[]> = {
  en: [
    {
      label: 'Get Quote',
      href: '/en/contact?type=quote',
      icon: 'FileText',
    },
    {
      label: 'Request Sample',
      href: '/en/contact?type=sample',
      icon: 'Package',
    },
  ],
  cn: [
    {
      label: '获取报价',
      href: '/cn/contact?type=quote',
      icon: 'FileText',
    },
    {
      label: '申请样品',
      href: '/cn/contact?type=sample',
      icon: 'Package',
    },
  ],
};
