// src/pages/api/quote.ts
import type { APIRoute } from 'astro';
import { z } from 'zod';

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string(),
  country: z.string(),
  
  // 产品信息
  productType: z.string(),
  productName: z.string().optional(),
  
  // 规格要求
  material: z.string().optional(),
  thickness: z.string().optional(),
  width: z.string().optional(),
  quantity: z.string(),
  quantityUnit: z.enum(['kg', 'ton', 'meter', 'piece']),
  
  // 附加信息
  application: z.string().optional(),
  requirements: z.string().optional(),
  timeline: z.string().optional(),
  
  language: z.enum(['en', 'zh']).default('en'),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const validatedData = quoteSchema.parse(body);

    // TODO: 发送报价请求邮件
    console.log('Quote request:', validatedData);

    // TODO: 保存到 CRM 系统

    return new Response(
      JSON.stringify({
        success: true,
        message: validatedData.language === 'zh'
          ? '报价请求已提交！我们的销售团队将在24小时内与您联系。'
          : 'Quote request submitted! Our sales team will contact you within 24 hours.',
        quoteId: `QT-${Date.now()}`, // 生成报价单号
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote form error:', error);

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          success: false,
          errors: error.errors,
        }),
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({ success: false, message: 'Server error' }),
      { status: 500 }
    );
  }
};