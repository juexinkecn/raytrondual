// src/pages/api/newsletter.ts
import type { APIRoute } from 'astro';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  language: z.enum(['en', 'zh']).default('en'),
  interests: z.array(z.string()).optional(),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const validatedData = newsletterSchema.parse(body);

    // TODO: 添加到邮件列表（如 Mailchimp, ConvertKit）
    console.log('Newsletter subscription:', validatedData);

    return new Response(
      JSON.stringify({
        success: true,
        message: validatedData.language === 'zh'
          ? '订阅成功！感谢您的关注。'
          : 'Successfully subscribed! Thank you for your interest.',
      }),
      { status: 200 }
    );
  } catch (error) {
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