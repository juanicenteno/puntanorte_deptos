// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: cambiar por el dominio real cuando esté definido
export default defineConfig({
  site: 'https://puntanorte.com.ar',
  integrations: [sitemap()],
});
