import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://asmithdigital.github.io',
  base: '/bass-coast-podiatry',
  trailingSlash: 'always',
  // Old WordPress pages that are not rebuilt send visitors to the closest new page.
  // Astro does not add `base` to redirect targets, so they include /bass-coast-podiatry/ in full.
  redirects: {
    '/appointments': '/bass-coast-podiatry/contact/',
    '/news': '/bass-coast-podiatry/',
  },
});
