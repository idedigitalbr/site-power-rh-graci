import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://idedigitalbr.github.io',
  base: '/site-power-rh-graci',
  vite: {
    plugins: [tailwindcss()],
  },
});
