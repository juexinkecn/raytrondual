// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 站点配置（默认英文站）
  site: 'https://en.raytron.group',
  
  // 集成
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // 使用自定义全局样式
    }),
    sitemap({
      filter: (page) => !page.includes('/api/'),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh',
        },
      },
    }),
  ],

  // i18n 配置
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false, // 英文不加前缀
      redirectToDefaultLocale: false,
    },
    domains: {
      zh: 'https://cn.raytron.group',
      en: 'https://en.raytron.group',
    },
  },

  // 图片优化
  image: {
    domains: ['en.raytron.group', 'cn.raytron.group'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.raytron.group',
      },
    ],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },

  // 输出配置
  output: 'static', // 或 'hybrid' 如果需要 SSR
  
  // 构建配置
  build: {
    format: 'directory', // 生成 /page/ 而非 /page.html
    inlineStylesheets: 'auto',
  },

  // Vite 配置
  vite: {
    optimizeDeps: {
      include: ['react', 'react-dom', 'lucide-react'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'form-vendor': ['react-hook-form', 'zod'],
          },
        },
      },
    },
  },

  // Markdown 配置
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  // 服务器配置
  server: {
    port: 3000,
    host: true,
  },

  // 预览配置
  preview: {
    port: 4321,
    host: true,
  },
});