# RAYTRON - High-Precision Metal Flat Wire & Strip Manufacturer

Official website for Raytron New Energy (Zhejiang) Co., Ltd. - A leading manufacturer of high-precision metal flat wire and bimetal composite materials.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) 4.15+
- **UI Components**: React 18.3+ (for interactive components)
- **Language**: TypeScript 5.6+
- **Styling**: Tailwind CSS 3.4+
- **Content**: Astro Content Collections
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📋 Features

- ✅ Dual-language support (English/Chinese)
- ✅ 36+ product pages with detailed specifications
- ✅ 1200+ FAQ system for GEO optimization
- ✅ SEO optimized (Lighthouse 90+)
- ✅ Zero JavaScript by default (Islands Architecture)
- ✅ Fast page loads (< 2.5s LCP)
- ✅ Fully responsive design
- ✅ Advanced search functionality
- ✅ Structured data for rich snippets
- ✅ Multi-language sitemaps

## 🏗️ Project Structure

```
raytron-astro/
├── public/                 # Static assets
│   ├── images/
│   ├── fonts/
│   └── robots.txt
├── src/
│   ├── assets/            # Processed assets
│   ├── components/        # UI components
│   │   ├── common/       # Reusable components
│   │   ├── layout/       # Layout components
│   │   ├── seo/          # SEO components
│   │   ├── home/         # Home page components
│   │   ├── product/      # Product components
│   │   ├── faq/          # FAQ components
│   │   └── forms/        # Form components (React)
│   ├── content/           # Content collections
│   │   ├── products/     # Product markdown files
│   │   ├── applications/ # Application pages
│   │   ├── faq/          # FAQ entries
│   │   └── blog/         # Blog posts
│   ├── data/              # Configuration data
│   ├── layouts/           # Layout templates
│   ├── lib/               # Utility functions
│   ├── pages/             # Route pages
│   │   ├── en/           # English site
│   │   ├── cn/           # Chinese site
│   │   └── api/          # API routes
│   ├── styles/            # Global styles
│   └── types/             # TypeScript types
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🛠️ Installation

### Prerequisites

- Node.js 18.17.1 or higher
- npm 9.0.0 or higher

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd raytron-astro
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`

5. Start development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type-check the project
- `npm run lint` - Lint code
- `npm run lint:fix` - Lint and fix code
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🌐 Site Structure

### English Site (`/en`)
- Homepage: `/en`
- Products: `/en/products/[category]/[slug]`
- Applications: `/en/applications/[slug]`
- FAQ: `/en/faq/[category]/[slug]`
- Blog: `/en/blog/[slug]`

### Chinese Site (`/cn`)
- Homepage: `/cn`
- Products: `/cn/products/[category]/[slug]`
- Applications: `/cn/applications/[slug]`
- FAQ: `/cn/faq/[category]/[slug]`
- Blog: `/cn/blog/[slug]`

## 📦 Content Management

### Adding a Product

1. Create a markdown file in `/src/content/products/[category]/`
2. Include required frontmatter:
```markdown
---
title: "Product Name"
slug: "product-slug"
category: "copper"
lang: "en"
description: "Product description"
keywords: ["keyword1", "keyword2"]
---

# Product Name

[Content here]
```

### Adding FAQ

1. Create markdown file in `/src/content/faq/[category]/`
2. Follow FAQ schema in `/src/content/config.ts`

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel Dashboard
3. Configure environment variables
4. Deploy

Or use Vercel CLI:
```bash
vercel --prod
```

### Custom Domains

Configure in Vercel Dashboard:
- English: `en.raytron.group`
- Chinese: `cn.raytron.group`

## 🔍 SEO Optimization

- All pages have unique meta titles and descriptions
- Structured data (JSON-LD) for products, FAQ, articles
- Automatic sitemap generation
- Hreflang tags for multilingual SEO
- Optimized images (WebP format)
- Fast loading times

## 📊 Performance Targets

- Lighthouse Performance: > 90
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## 🤝 Contributing

Internal project. Contact the development team for contribution guidelines.

## 📄 License

Copyright © 2025 Raytron New Energy (Zhejiang) Co., Ltd. All rights reserved.

## 📞 Support

For technical issues or questions:
- Email: dev@raytron.group
- Website: https://raytron.group

---

Built with ❤️ by RAYTRON Development Team
