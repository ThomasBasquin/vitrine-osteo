# Infos à compléter avant mise en ligne

Presque tout se remplit dans **`src/data/site.js`** (un seul fichier).

## Dans `src/data/site.js`

- [x] Prénom et nom de la praticienne
- [x] Année de diplôme
- [x] Adresse du cabinet (rue, code postal, ville) + coordonnées GPS
- [ ] Téléphone
- [ ] E-mail
- [ ] Horaires d'ouverture
- [x] Tarifs (consultation au cabinet)
- [ ] Lien Doctolib (bouton « Prendre rendez-vous » — pointe encore vers doctolib.fr tout court)
- [ ] Liens Google / Instagram / Facebook (optionnels)

## Ailleurs

- [ ] **Photo** : remplacer `public/images/portrait-placeholder.svg` par une vraie photo
      (mettre le fichier dans `public/images/` et adapter les `src` dans
      `src/pages/index.astro`)
- [ ] **FAQ moyens de paiement** : réponse à préciser dans `src/pages/index.astro` (tableau `faq`)
- [ ] **Carte** : l'adresse est connue → intégrer une carte OpenStreetMap (pas de cookie)
      dans la section contact de `src/pages/index.astro`
- [x] **Mentions légales** (`src/pages/mentions-legales.astro`) : SIRET, n° RPPS
      (hébergeur : fait — Hetzner)
- [ ] **Domaine définitif** : une fois acheté, remplacer `osteo.thomasbasquin.fr` dans
      `astro.config.mjs`, `nginx/` et `deploy.sh`

## Après mise en ligne

- [x] Site en ligne sur https://osteo.thomasbasquin.fr (nginx + Let's Encrypt)
- [ ] Déclarer le site dans Google Search Console + créer la fiche Google Business Profile
      (essentiel pour la recherche locale)
- [ ] Ajouter un sitemap une fois le domaine définitif connu (`@astrojs/sitemap`)
