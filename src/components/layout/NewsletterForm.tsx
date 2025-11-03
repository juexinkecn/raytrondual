/**
 * NewsletterForm Component - Newsletter订阅表单
 * 
 * React客户端组件，用于Footer中的邮件订阅功能
 * 
 * 功能:
 * - 邮箱验证
 * - 提交状态管理
 * - 成功/错误提示
 * - 加载动画
 */

import React, { useState } from 'react';
import { Mail, Check, AlertCircle, Loader2 } from 'lucide-react';

interface NewsletterFormProps {
  lang: 'en' | 'cn';
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterForm({ lang }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const text = {
    en: {
      placeholder: 'Enter your email',
      button: 'Subscribe',
      success: 'Successfully subscribed!',
      error: 'Something went wrong. Please try again.',
      invalidEmail: 'Please enter a valid email address',
    },
    cn: {
      placeholder: '请输入您的邮箱',
      button: '订阅',
      success: '订阅成功！',
      error: '出错了，请重试。',
      invalidEmail: '请输入有效的邮箱地址',
    },
  };

  const t = text[lang];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 验证邮箱
    if (!validateEmail(email)) {
      setState('error');
      setErrorMessage(t.invalidEmail);
      setTimeout(() => setState('idle'), 3000);
      return;
    }

    // 提交
    setState('loading');

    try {
      // TODO: 实际的API调用
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, lang }),
      });

      if (response.ok) {
        setState('success');
        setEmail('');
        setTimeout(() => setState('idle'), 5000);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setState('error');
      setErrorMessage(t.error);
      setTimeout(() => setState('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.placeholder}
            disabled={state === 'loading' || state === 'success'}
            className="
              w-full px-4 py-2.5 pr-10
              bg-gray-800 border border-gray-700
              text-white placeholder-gray-500
              rounded-lg
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all
            "
            required
          />
          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        </div>

        <button
          type="submit"
          disabled={state === 'loading' || state === 'success'}
          className="
            px-6 py-2.5 rounded-lg font-medium
            bg-primary-600 text-white
            hover:bg-primary-700
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors
            flex items-center justify-center
            min-w-[100px]
          "
        >
          {state === 'loading' && (
            <Loader2 className="w-5 h-5 animate-spin" />
          )}
          {state === 'success' && (
            <Check className="w-5 h-5" />
          )}
          {(state === 'idle' || state === 'error') && t.button}
        </button>
      </div>

      {/* 状态消息 */}
      {state === 'success' && (
        <div className="mt-2 flex items-center text-sm text-green-400 animate-fadeIn">
          <Check className="w-4 h-4 mr-1.5" />
          {t.success}
        </div>
      )}

      {state === 'error' && (
        <div className="mt-2 flex items-center text-sm text-red-400 animate-fadeIn">
          <AlertCircle className="w-4 h-4 mr-1.5" />
          {errorMessage}
        </div>
      )}
    </form>
  );
}
