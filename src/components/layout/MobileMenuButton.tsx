/**
 * MobileMenuButton Component - 移动端菜单按钮和菜单
 * 
 * 这是一个React客户端组件，用于处理移动端菜单的交互
 * 
 * 功能:
 * - 汉堡菜单按钮
 * - 滑出式菜单
 * - 动画效果
 * - 触摸优化
 * - 子菜单展开/收起
 * - 背景遮罩
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  children?: Array<{
    name: string;
    href: string;
    featured?: boolean;
  }>;
}

interface MobileMenuButtonProps {
  lang: 'en' | 'cn';
  navItems: NavItem[];
}

export default function MobileMenuButton({ lang, navItems }: MobileMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const siteUrl = lang === 'en' ? 'https://en.raytron.group' : 'https://cn.raytron.group';

  // 防止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ESC键关闭菜单
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setExpandedItems(new Set());
    }
  };

  const toggleSubmenu = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <>
      {/* 菜单按钮 */}
      <button
        type="button"
        onClick={toggleMenu}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label={isOpen ? (lang === 'en' ? 'Close menu' : '关闭菜单') : (lang === 'en' ? 'Open menu' : '打开菜单')}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* 背景遮罩 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fadeIn"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 滑出式菜单 */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50
          transform transition-transform duration-300 ease-out lg:hidden
          overflow-y-auto shadow-2xl
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* 菜单头部 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <img
            src="/images/logo.svg"
            alt="RAYTRON Logo"
            className="h-8 w-auto"
            width="120"
            height="32"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={lang === 'en' ? 'Close menu' : '关闭菜单'}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 菜单内容 */}
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              const isExpanded = expandedItems.has(index);
              const hasChildren = item.children && item.children.length > 0;

              return (
                <li key={index}>
                  {hasChildren ? (
                    <>
                      {/* 带子菜单的项目 */}
                      <button
                        type="button"
                        onClick={() => toggleSubmenu(index)}
                        className="
                          w-full flex items-center justify-between px-4 py-3
                          text-gray-700 hover:bg-gray-50 rounded-lg
                          transition-colors
                        "
                      >
                        <span className="font-medium">{item.name}</span>
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </button>

                      {/* 子菜单 */}
                      <div
                        className={`
                          overflow-hidden transition-all duration-300
                          ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                        `}
                      >
                        <ul className="ml-4 mt-1 space-y-1">
                          {item.children?.map((child, childIndex) => (
                            <li key={childIndex}>
                              <a
                                href={`${siteUrl}${child.href}`}
                                className={`
                                  block px-4 py-2.5 rounded-lg text-sm
                                  transition-colors
                                  ${child.featured
                                    ? 'bg-primary-50 text-primary-600 font-semibold hover:bg-primary-100'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                  }
                                `}
                                onClick={() => setIsOpen(false)}
                              >
                                {child.name}
                                {child.featured && (
                                  <span className="ml-2 text-xs bg-primary-600 text-white px-2 py-0.5 rounded-full">
                                    {lang === 'en' ? 'Featured' : '主打'}
                                  </span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    /* 没有子菜单的项目 */
                    <a
                      href={`${siteUrl}${item.href}`}
                      className="
                        block px-4 py-3 text-gray-700 font-medium
                        hover:bg-gray-50 rounded-lg transition-colors
                      "
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 菜单底部 CTA */}
        <div className="p-4 border-t border-gray-200 space-y-3">
          <a
            href={`${siteUrl}/quote`}
            className="
              block w-full px-6 py-3 text-center
              bg-primary-600 text-white rounded-lg
              hover:bg-primary-700 transition-colors
              font-medium shadow-sm
            "
            onClick={() => setIsOpen(false)}
          >
            {lang === 'en' ? 'Get Quote' : '获取报价'}
          </a>
          <a
            href={`${siteUrl}/sample`}
            className="
              block w-full px-6 py-3 text-center
              border-2 border-primary-600 text-primary-600 rounded-lg
              hover:bg-primary-50 transition-colors
              font-medium
            "
            onClick={() => setIsOpen(false)}
          >
            {lang === 'en' ? 'Request Sample' : '申请样品'}
          </a>
        </div>

        {/* 联系信息 */}
        <div className="p-4 bg-gray-50 text-sm text-gray-600">
          <p className="font-semibold text-gray-900 mb-2">
            {lang === 'en' ? 'Contact Us' : '联系我们'}
          </p>
          <p className="flex items-center mb-1">
            <span className="mr-2">📞</span>
            <a href="tel:+86-xxx-xxxx" className="hover:text-primary-600">
              +86-xxx-xxxx
            </a>
          </p>
          <p className="flex items-center">
            <span className="mr-2">📧</span>
            <a href="mailto:info@raytron.group" className="hover:text-primary-600">
              info@raytron.group
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
