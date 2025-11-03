// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import { z } from 'zod';

// 表单验证 Schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  country: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  language: z.enum(['en', 'zh']).default('en'),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    // 解析请求体
    const body = await request.json();
    
    // 验证数据
    const validatedData = contactSchema.parse(body);

    // TODO: 发送邮件（集成 Resend/SendGrid）
    // await sendEmail({
    //   to: 'info@raytron.group',
    //   subject: `New Contact Form Submission from ${validatedData.name}`,
    //   html: generateEmailTemplate(validatedData),
    // });

    // TODO: 保存到数据库或 Google Sheets
    // await saveToDatabase(validatedData);

    // 模拟延迟
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Contact form submission:', validatedData);

    return new Response(
      JSON.stringify({
        success: true,
        message: validatedData.language === 'zh' 
          ? '感谢您的留言！我们会尽快回复。' 
          : 'Thank you for your message! We will get back to you soon.',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Validation failed',
          errors: error.errors,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: 'An error occurred. Please try again later.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};