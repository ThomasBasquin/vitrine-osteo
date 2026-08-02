# Infos à compléter avant mise en ligne

Presque tout se remplit dans **`src/data/site.js`** (un seul fichier).

## Dans `src/data/site.js`

- [x] Prénom et nom de la praticienne
- [x] Année de diplôme
- [x] Adresse du cabinet (rue, code postal, ville) + coordonnées GPS
- [x] Téléphone
- [x] E-mail
- [x] Horaires d'ouverture
- [x] Tarifs (consultation au cabinet)
- [x] Lien Doctolib
- [ ] Liens Google / Instagram / Facebook (optionnels)

## Ailleurs

- [x] **Photo** : vraie photo en place (`public/images/marie-wach-portrait.jpg`,
      `src/pages/index.astro`)
- [x] **FAQ moyens de paiement** : réponse à préciser dans `src/pages/seance.astro` (tableau `faq`)
- [x] **Carte** : carte OpenStreetMap/Leaflet intégrée (sans cookie) dans
      `src/pages/contact.astro`
- [x] **Mentions légales** (`src/pages/mentions-legales.astro`) : SIRET, n° RPPS
      (hébergeur : fait — Hetzner)
- [x] **Domaine définitif** : `mariewach.fr` acheté, remplacé dans `astro.config.mjs`,
      `nginx/` et `deploy.sh`

## Après mise en ligne

- [x] Site en ligne sur https://mariewach.fr (nginx + Let's Encrypt)
- [x] Sitemap (`@astrojs/sitemap`, référencé dans `robots.txt`)
- [x] Site déclaré dans Google Search Console, sitemap soumis
- [ ] Créer la fiche Google Business Profile (le téléphone est connu, ça peut se faire)
      (essentiel pour la recherche locale)
