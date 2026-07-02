// @ts-check
import { defineConfig } from 'astro/config';

// Sous-domaine provisoire ; à remplacer par le domaine définitif une fois acheté.
export default defineConfig({
  site: 'https://osteo.thomasbasquin.fr',
  server: { port: 5173 },
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
