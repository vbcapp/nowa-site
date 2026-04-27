import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nowa.vibes.com.tw',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
