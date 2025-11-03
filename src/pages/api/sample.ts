// src/pages/api/sample.ts
import type { APIRoute } from 'astro';
import { z } from 'zod';

const sampleSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string(),
  
  // 样品信息
  productName: z.string(),
  sampleQuantity: z.string(),
  sampleType: z.enum(['standard', 'custom']),
  
  // 收货地址
  shippingAddress: z.string().min(10),
  city: z.string(),
  state: z.string().optional(),
  country: z.string(),
  postalCode: z.string(),
  
  // 附加信息
  purposeOfSample: z.string(),
  urgency: z.enum(['normal', 'urgent']).default('normal'),
  
  language: z.enum(['en', 'zh']).default('en'),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const validatedData = sampleSchema.parse(body);

    // TODO: 发送样品申请邮件
    console.log('Sample request:', validatedData);

    return new Response(
      JSON.stringify({
        success: true,
        message: validatedData.language === 'zh'
          ? '样品申请已提交！我们会尽快安排发货。'
          : 'Sample request submitted! We will arrange shipment soon.',
        sampleId: `SP-${Date.now()}`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Sample form error:', error);

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ success: false, errors: error.errors }),
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
};