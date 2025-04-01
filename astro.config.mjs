// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  site: 'https://www.icarrea.dev',
  integrations: [sitemap()],
  adapter: cloudflare(),
});