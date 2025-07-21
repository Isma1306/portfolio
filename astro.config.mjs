// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({

  site: 'https://www.icarrea.dev',
  integrations: [sitemap(), mdx()],
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  }
});