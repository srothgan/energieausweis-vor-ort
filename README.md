# Energieausweis vor Ort - Professional Energy Certificate Service Website

> **⚠️ IMPORTANT NOTE:** This is a **clone/learning project** and **NOT the real website**. This repository was created solely for educational purposes to demonstrate modern web development techniques and performance optimization strategies. The actual business website is operated by the original company.

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC.svg)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB.svg)](https://reactjs.org/)

A high-performance Next.js website for professional energy certificate services in Germany. This project was developed to outperform WordPress-based competitors in terms of SEO, performance, and user experience.

## 🚀 Project Overview

**energieausweis-vor-ort.nrw** is a professional service website offering on-site energy certificate assessments for German real estate. The website provides comprehensive information about energy certificates, pricing, processes, and expert consultation services.

### 🎯 Performance Results

This Next.js implementation significantly outperforms the original WordPress version:

| Metric | WordPress | Next.js | Improvement |
|--------|-----------|---------|-------------|
| **Performance** | 49 | 89 | +81.6% |
| **Accessibility** | 95 | 94 | -1.1% |
| **Best Practices** | 96 | 100 | +4.2% |
| **SEO** | 100 | 100 | Maintained |

## 🏗️ Architecture & Features

### Core Technologies
- **Next.js 15.4.4** - Latest React framework with App Router
- **TypeScript 5.0** - Type-safe development
- **TailwindCSS 4.0** - Utility-first CSS framework
- **React 19.1.0** - Latest React with concurrent features

### Key Features

#### 🔍 SEO Optimization
- **Complete metadata management** with Open Graph and Twitter Cards
- **Dynamic sitemap generation** (`sitemap.ts`)
- **Robots.txt configuration** (`robots.ts`)
- **Structured data** for better search engine understanding
- **Server-side rendering** for optimal crawlability

#### 🚀 Performance Optimization
- **Image optimization** with Next.js Image component
- **WebP format** for all images
- **Font optimization** with Geist font family
- **Code splitting** and lazy loading
- **Compression enabled** in production
- **Security headers** configured

#### 🍪 GDPR Compliance
- **Vanilla Cookie Consent** integration
- **Granular consent management** for analytics and advertising
- **Google Tag Manager** with consent-aware tracking
- **Privacy-first approach** with default denied consent

#### 📱 User Experience
- **Responsive design** for all device sizes
- **Accessible components** with proper ARIA labels
- **Progressive Web App** capabilities
- **Fast page transitions** with optimized routing
- **Form validation** with Zod schema validation

#### 🛡️ Security
- **Content Security Policy** headers
- **XSS protection** configured
- **Frame protection** against clickjacking
- **Secure referrer policy**

## 📊 Analytics & Tracking

### Google Tag Manager Integration
- **Consent-aware tracking** with cookie preferences
- **Enhanced ecommerce** ready for future implementations
- **Privacy-compliant** data collection

### Vercel Analytics
- **Web Vitals** monitoring
- **Performance insights** for continuous optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/srothgan/energieausweis-vor-ort.git
   cd energieausweis-vor-ort
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure the following variables:
   ```env
   NEXT_PUBLIC_GTM_ID=your_google_tag_manager_id
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint checks
```
## 🛠️ Development

### Code Quality
- **TypeScript** for type safety
- **ESLint** with Next.js configuration
- **Prettier** code formatting (implicit via Next.js)
- **Strict mode** enabled for better error catching

### Performance Optimizations
- **Image optimization** with responsive sizes
- **Font loading optimization** with display swap
- **Bundle analysis** available with `@next/bundle-analyzer`
- **Production console removal** for cleaner builds

### Deployment
The project is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting platform**

## 🔧 Configuration

### Next.js Configuration
- **Compression enabled** for better performance
- **Security headers** configured for production
- **Console removal** in production builds

### TailwindCSS
- **Custom color palette** for brand consistency
- **Responsive breakpoints** configured
- **Animation utilities** included

### TypeScript
- **Strict mode** enabled
- **Path mapping** configured (`@/` for root)
- **Modern ES2017** target for optimal compatibility

## 📝 License

This project is private and proprietary. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and TailwindCSS**