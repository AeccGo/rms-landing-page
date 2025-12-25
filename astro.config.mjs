import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rms.io.vn',
  server: {
    host: true,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  output: 'static',
  compressHTML: true,
  vite: {
    preview: {
      allowedHosts: ['rms.io.vn', '.rms.io.vn'],
    },
    server: {
      allowedHosts: ['rms.io.vn', '.rms.io.vn'],
    },
  },
});
