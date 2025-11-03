// src/components/forms/QuoteForm.tsx
import React, { useState } from 'react';

interface QuoteFormData {
  // 基本信息
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  
  // 产品信息
  productType: string;
  material: string;
  width: string;
  thickness: string;
  quantity: string;
  deliveryDate: string;
  
  // 其他需求
  application: string;
  specifications: string;
  message: string;
  
  // 附件
  drawingFile?: File;
}

interface QuoteFormProps {
  lang?: 'en' | 'zh';
}

export default function QuoteForm({ lang = 'en' }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    productType: '',
    material: '',
    width: '',
    thickness: '',
    quantity: '',
    deliveryDate: '',
    application: '',
    specifications: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string>('');

  const content = {
    en: {
      title: 'Request a Quote',
      subtitle: 'Get customized pricing for your flat wire requirements',
      
      // Basic Info
      basicInfo: 'Basic Information',
      name: 'Full Name',
      namePlaceholder: 'John Smith',
      email: 'Email Address',
      emailPlaceholder: 'john@company.com',
      phone: 'Phone Number',
      phonePlaceholder: '+1 234 567 8900',
      company: 'Company Name',
      companyPlaceholder: 'Your Company Ltd.',
      country: 'Country',
      countryPlaceholder: 'Select your country',
      
      // Product Info
      productInfo: 'Product Requirements',
      productType: 'Product Type',
      productTypePlaceholder: 'Select product type',
      material: 'Material',
      materialPlaceholder: 'Select material',
      width: 'Width (mm)',
      widthPlaceholder: 'e.g., 5.0',
      thickness: 'Thickness (mm)',
      thicknessPlaceholder: 'e.g., 0.2',
      quantity: 'Estimated Quantity',
      quantityPlaceholder: 'e.g., 1000 kg/month',
      deliveryDate: 'Target Delivery Date',
      application: 'Application Field',
      applicationPlaceholder: 'Select application',
      specifications: 'Special Specifications',
      specificationsPlaceholder: 'e.g., Specific conductivity, tensile strength, surface finish requirements...',
      
      // Additional
      additional: 'Additional Information',
      message: 'Additional Message',
      messagePlaceholder: 'Any other requirements or questions...',
      drawing: 'Technical Drawing',
      drawingLabel: 'Upload Drawing (Optional)',
      drawingHint: 'PDF, DWG, or image files, max 10MB',
      
      // Buttons
      submit: 'Submit Quote Request',
      submitting: 'Submitting...',
      
      // Status
      successTitle: 'Quote Request Submitted!',
      successMessage: 'Thank you! Our sales team will contact you within 24 hours with a detailed quotation.',
      errorTitle: 'Submission Failed',
      errorMessage: 'Please try again or contact us directly.',
      
      // Options
      productTypes: [
        'Copper Flat Wire/Ribbon',
        'Aluminum Flat Wire/Ribbon',
        'Bimetal Ribbon',
        'Coated Flat Wire',
        'Enameled Flat Wire',
        'Special Metal Strip',
      ],
      materials: [
        'Pure Copper (C11000)',
        'Oxygen-Free Copper (C10200)',
        'Tin-Plated Copper',
        'Silver-Plated Copper',
        'Aluminum (1060/1070)',
        'Copper-Aluminum Bimetal',
        'Other (Please specify)',
      ],
      applications: [
        'Solar PV Ribbon',
        'Battery Manufacturing',
        'Automotive Industry',
        'Cable Shielding',
        'Smart Home',
        'Aerospace',
        'Medical Engineering',
        'Industrial Electronics',
      ],
      countries: [
        'United States', 'China', 'Germany', 'Japan', 'South Korea',
        'United Kingdom', 'France', 'Italy', 'Canada', 'Australia',
        'India', 'Brazil', 'Mexico', 'Other',
      ],
    },
    zh: {
      title: '索取报价',
      subtitle: '为您的扁线需求获取定制化报价',
      
      // 基本信息
      basicInfo: '基本信息',
      name: '姓名',
      namePlaceholder: '张三',
      email: '电子邮箱',
      emailPlaceholder: 'zhangsan@company.com',
      phone: '电话号码',
      phonePlaceholder: '+86 138 0000 0000',
      company: '公司名称',
      companyPlaceholder: '您的公司有限公司',
      country: '国家/地区',
      countryPlaceholder: '请选择国家',
      
      // 产品信息
      productInfo: '产品需求',
      productType: '产品类型',
      productTypePlaceholder: '请选择产品类型',
      material: '材料',
      materialPlaceholder: '请选择材料',
      width: '宽度 (mm)',
      widthPlaceholder: '例如：5.0',
      thickness: '厚度 (mm)',
      thicknessPlaceholder: '例如：0.2',
      quantity: '预估数量',
      quantityPlaceholder: '例如：1000 kg/月',
      deliveryDate: '期望交期',
      application: '应用领域',
      applicationPlaceholder: '请选择应用领域',
      specifications: '特殊规格要求',
      specificationsPlaceholder: '例如：导电率、抗拉强度、表面处理等具体要求...',
      
      // 附加信息
      additional: '附加信息',
      message: '其他留言',
      messagePlaceholder: '其他需求或问题...',
      drawing: '技术图纸',
      drawingLabel: '上传图纸（可选）',
      drawingHint: 'PDF、DWG或图片文件，最大10MB',
      
      // 按钮
      submit: '提交询价',
      submitting: '提交中...',
      
      // 状态
      successTitle: '询价已提交！',
      successMessage: '感谢您的询价！我们的销售团队将在24小时内与您联系，提供详细报价。',
      errorTitle: '提交失败',
      errorMessage: '请重试或直接联系我们。',
      
      // 选项
      productTypes: [
        '铜扁线/带材',
        '铝扁线/带材',
        '双金属复合带',
        '涂层扁线',
        '漆包扁线',
        '特殊金属带材',
      ],
      materials: [
        '纯铜 (C11000)',
        '无氧铜 (C10200)',
        '镀锡铜',
        '镀银铜',
        '铝材 (1060/1070)',
        '铜铝复合',
        '其他（请注明）',
      ],
      applications: [
        '光伏组件',
        '电池制造',
        '汽车工业',
        '电缆屏蔽',
        '智能家居',
        '航空航天',
        '医疗工程',
        '工业电子',
      ],
      countries: [
        '中国', '美国', '德国', '日本', '韩国',
        '英国', '法国', '意大利', '加拿大', '澳大利亚',
        '印度', '巴西', '墨西哥', '其他',
      ],
    },
  };

  const t = content[lang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof QuoteFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, drawingFile: 'File size must be less than 10MB' }));
        return;
      }
      setFormData(prev => ({ ...prev, drawingFile: file }));
      setFileName(file.name);
      setErrors(prev => ({ ...prev, drawingFile: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    // Required fields
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    if (!formData.company.trim()) newErrors.company = 'Required';
    if (!formData.country) newErrors.country = 'Required';
    if (!formData.productType) newErrors.productType = 'Required';
    if (!formData.material) newErrors.material = 'Required';
    if (!formData.application) newErrors.application = 'Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus('loading');

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value && key !== 'drawingFile') {
          submitData.append(key, value.toString());
        }
      });
      if (formData.drawingFile) {
        submitData.append('drawing', formData.drawingFile);
      }

      // Replace with your actual API endpoint
      const response = await fetch('/api/quote', {
        method: 'POST',
        body: submitData,
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
          country: '',
          productType: '',
          material: '',
          width: '',
          thickness: '',
          quantity: '',
          deliveryDate: '',
          application: '',
          specifications: '',
          message: '',
        });
        setFileName('');
        setStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Header */}
      <div className="text-center mb-8">
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
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">
            {t.basicInfo}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
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

            {/* Email */}
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

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t.phone} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.phonePlaceholder}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                {t.company} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t.companyPlaceholder}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.company ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
            </div>

            {/* Country */}
            <div className="md:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                {t.country} <span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.country ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">{t.countryPlaceholder}</option>
                {t.countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country}</p>}
            </div>
          </div>
        </div>

        {/* Product Requirements */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">
            {t.productInfo}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Type */}
            <div>
              <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                {t.productType} <span className="text-red-500">*</span>
              </label>
              <select
                id="productType"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.productType ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">{t.productTypePlaceholder}</option>
                {t.productTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.productType && <p className="mt-1 text-sm text-red-500">{errors.productType}</p>}
            </div>

            {/* Material */}
            <div>
              <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">
                {t.material} <span className="text-red-500">*</span>
              </label>
              <select
                id="material"
                name="material"
                value={formData.material}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.material ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">{t.materialPlaceholder}</option>
                {t.materials.map(mat => (
                  <option key={mat} value={mat}>{mat}</option>
                ))}
              </select>
              {errors.material && <p className="mt-1 text-sm text-red-500">{errors.material}</p>}
            </div>

            {/* Width */}
            <div>
              <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
                {t.width}
              </label>
              <input
                type="text"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
                placeholder={t.widthPlaceholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Thickness */}
            <div>
              <label htmlFor="thickness" className="block text-sm font-medium text-gray-700 mb-1">
                {t.thickness}
              </label>
              <input
                type="text"
                id="thickness"
                name="thickness"
                value={formData.thickness}
                onChange={handleChange}
                placeholder={t.thicknessPlaceholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                {t.quantity}
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder={t.quantityPlaceholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Delivery Date */}
            <div>
              <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">
                {t.deliveryDate}
              </label>
              <input
                type="date"
                id="deliveryDate"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Application */}
            <div className="md:col-span-2">
              <label htmlFor="application" className="block text-sm font-medium text-gray-700 mb-1">
                {t.application} <span className="text-red-500">*</span>
              </label>
              <select
                id="application"
                name="application"
                value={formData.application}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.application ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">{t.applicationPlaceholder}</option>
                {t.applications.map(app => (
                  <option key={app} value={app}>{app}</option>
                ))}
              </select>
              {errors.application && <p className="mt-1 text-sm text-red-500">{errors.application}</p>}
            </div>

            {/* Specifications */}
            <div className="md:col-span-2">
              <label htmlFor="specifications" className="block text-sm font-medium text-gray-700 mb-1">
                {t.specifications}
              </label>
              <textarea
                id="specifications"
                name="specifications"
                value={formData.specifications}
                onChange={handleChange}
                placeholder={t.specificationsPlaceholder}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">
            {t.additional}
          </h3>
          
          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.drawingLabel}
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="drawing-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Upload a file</span>
                    <input
                      id="drawing-upload"
                      name="drawing-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">{t.drawingHint}</p>
                {fileName && (
                  <p className="text-sm text-blue-600 font-medium">✓ {fileName}</p>
                )}
              </div>
            </div>
            {errors.drawingFile && <p className="mt-1 text-sm text-red-500">{errors.drawingFile}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.submit}
              </>
            )}
          </button>
        </div>

        {/* Note */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>{lang === 'en' ? '🔒 Privacy Guarantee:' : '🔒 隐私保证：'}</strong>
            {lang === 'en' 
              ? ' Your information is secure. We respect your privacy and will never share your data with third parties.'
              : ' 您的信息是安全的。我们尊重您的隐私，绝不会与第三方共享您的数据。'
            }
          </p>
        </div>
      </form>
    </div>
  );
}
