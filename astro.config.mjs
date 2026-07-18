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
  redirects: {
    '/a-propos': '/contact',
    '/femme-enceinte': '/pour-qui#femme-enceinte',
    '/nourrisson': '/pour-qui#nourrisson',
    '/sportif': '/pour-qui#sportif',
  },
  // La nav est toujours visible : la précharger dès l'affichage évite un délai
  // au clic (le survol seul ne sert à rien sur mobile, public majoritaire du site).
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
