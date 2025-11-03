// src/components/forms/ContactForm.tsx
import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  category: string;
  message: string;
  preferredContact: string;
}

interface ContactFormProps {
  lang?: 'en' | 'zh';
  defaultCategory?: string;
}

export default function ContactForm({ lang = 'en', defaultCategory = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    category: defaultCategory,
    message: '',
    preferredContact: 'email',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Have questions? Our team is here to help',
      
      // Fields
      name: 'Full Name',
      namePlaceholder: 'John Smith',
      email: 'Email Address',
      emailPlaceholder: 'john@company.com',
      phone: 'Phone Number',
      phonePlaceholder: '+1 234 567 8900',
      company: 'Company Name',
      companyPlaceholder: 'Your Company Ltd. (Optional)',
      
      subject: 'Subject',
      subjectPlaceholder: 'Brief description of your inquiry',
      
      category: 'Inquiry Category',
      categoryPlaceholder: 'Select category',
      categories: [
        'General Inquiry',
        'Technical Support',
        'Product Information',
        'Quality Issues',
        'Order Status',
        'Partnership Opportunities',
        'After-Sales Service',
        'Other',
      ],
      
      message: 'Your Message',
      messagePlaceholder: 'Please provide details about your inquiry...',
      
      preferredContact: 'Preferred Contact Method',
      contactEmail: 'Email',
      contactPhone: 'Phone',
      contactEither: 'Either',
      
      // Buttons
      submit: 'Send Message',
      submitting: 'Sending...',
      
      // Status
      successTitle: 'Message Sent Successfully!',
      successMessage: 'Thank you for contacting us. We will respond within 24 hours.',
      errorTitle: 'Failed to Send',
      errorMessage: 'Please try again or contact us directly at info@raytron.co',
      
      // Contact Info
      contactInfo: 'Other Ways to Reach Us',
      officeHours: 'Office Hours',
      officeHoursText: 'Monday - Friday: 8:00 AM - 6:00 PM (CST)',
      headquarters: 'Headquarters',
      headquartersText: 'Shenzhen, Guangdong, China',
    },
    zh: {
      title: '联系我们',
      subtitle: '有问题？我们的团队随时为您服务',
      
      // 字段
      name: '姓名',
      namePlaceholder: '张三',
      email: '电子邮箱',
      emailPlaceholder: 'zhangsan@company.com',
      phone: '电话号码',
      phonePlaceholder: '+86 138 0000 0000',
      company: '公司名称',
      companyPlaceholder: '您的公司有限公司（可选）',
      
      subject: '主题',
      subjectPlaceholder: '简要描述您的咨询',
      
      category: '咨询类别',
      categoryPlaceholder: '请选择类别',
      categories: [
        '一般咨询',
        '技术支持',
        '产品信息',
        '质量问题',
        '订单状态',
        '合作机会',
        '售后服务',
        '其他',
      ],
      
      message: '留言内容',
      messagePlaceholder: '请详细说明您的咨询内容...',
      
      preferredContact: '首选联系方式',
      contactEmail: '邮箱',
      contactPhone: '电话',
      contactEither: '均可',
      
      // 按钮
      submit: '发送消息',
      submitting: '发送中...',
      
      // 状态
      successTitle: '消息发送成功！',
      successMessage: '感谢您联系我们。我们将在24小时内回复。',
      errorTitle: '发送失败',
      errorMessage: '请重试或直接联系 info@raytron.co',
      
      // 联系信息
      contactInfo: '其他联系方式',
      officeHours: '办公时间',
      officeHoursText: '周一至周五：上午8:00 - 下午6:00（北京时间）',
      headquarters: '总部地址',
      headquartersText: '中国广东省深圳市',
    },
  };

  const t = content[lang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    // Required fields
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Required';
    if (!formData.category) newErrors.category = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';
    else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message too short (min 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus('loading');

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          category: defaultCategory,
          message: '',
          preferredContact: 'email',
        });
        setStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Form */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h2>
            <p className="text-gray-600">{t.subtitle}</p>
          </div>

          {/* Success Message */}
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">{t.successTitle}</h3>
                  <p className="mt-1 text-sm text-green-700">{t.successMessage}</p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{t.errorTitle}</h3>
                  <p className="mt-1 text-sm text-red-700">{t.errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.name} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            {/* Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phonePlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t.companyPlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                {t.category} <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.category ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">{t.categoryPlaceholder}</option>
                {t.categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                {t.subject} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.subjectPlaceholder}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.subject ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t.message} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                rows={6}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              <p className="mt-1 text-sm text-gray-500">
                {formData.message.length} characters
              </p>
            </div>

            {/* Preferred Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.preferredContact}
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t.contactEmail}</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t.contactPhone}</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="either"
                    checked={formData.preferredContact === 'either'}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{t.contactEither}</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {t.submitting}
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {t.submit}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Information Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-lg p-8 sticky top-8">
          <h3 className="text-2xl font-bold mb-6">{t.contactInfo}</h3>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-100">Email</p>
                <a href="mailto:info@raytron.co" className="text-white hover:text-blue-100 transition-colors">
                  info@raytron.co
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-100">Phone</p>
                <a href="tel:+8675512345678" className="text-white hover:text-blue-100 transition-colors">
                  +86 755 1234 5678
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-100">{t.officeHours}</p>
                <p className="text-white">{t.officeHoursText}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-100">{t.headquarters}</p>
                <p className="text-white">{t.headquartersText}</p>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-blue-50">
              {lang === 'en' 
                ? '⚡ Average response time: 24 hours'
                : '⚡ 平均响应时间：24小时'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
