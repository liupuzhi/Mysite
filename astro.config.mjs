import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hj-portfolio.com',
  integrations: [tailwind(), sitemap()],
  vite: {
    cacheDir: '.cache/vite',
  },
});
