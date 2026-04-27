import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vbcapp.github.io',
  base: '/nowa-site',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
