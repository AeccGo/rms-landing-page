# Hướng dẫn Setup Landing Page

## Yêu cầu hệ thống

- Node.js >= 18.0.0
- npm, pnpm, hoặc yarn

## Cài đặt

1. Di chuyển vào thư mục project:
```bash
cd rms-landing-page
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
pnpm install
# hoặc
yarn install
```

## Development

Chạy server development:
```bash
npm run dev
```

Truy cập: http://localhost:4321

## Build Production

```bash
npm run build
```

Output sẽ ở trong thư mục `dist/`

## Preview Production Build

```bash
npm run preview
```

## Cấu hình SEO

### 1. Cập nhật URL site

Sửa file `astro.config.mjs`:
```javascript
site: 'https://your-actual-domain.com',
```

### 2. Cập nhật robots.txt

Sửa file `public/robots.txt` với URL sitemap thực tế của bạn.

### 3. Tạo OG Image

Tạo file `public/og-image.jpg` với kích thước 1200x630px cho Open Graph.

### 4. Cập nhật Structured Data

Sửa các thông tin trong `src/layouts/BaseLayout.astro`:
- Tên công ty
- Đánh giá
- Thông tin liên hệ

## Tối ưu SEO đã được tích hợp

✅ Meta tags đầy đủ (title, description, keywords)
✅ Open Graph tags cho Facebook
✅ Twitter Card tags
✅ Structured Data (JSON-LD) - SoftwareApplication & Organization
✅ Sitemap tự động
✅ Robots.txt
✅ Canonical URLs
✅ Semantic HTML
✅ Mobile responsive
✅ Performance optimization

## Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Static Hosting
Build và upload thư mục `dist/` lên hosting của bạn.

