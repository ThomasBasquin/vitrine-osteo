# Infos à compléter avant mise en ligne

Presque tout se remplit dans **`src/data/site.js`** (un seul fichier).

## Dans `src/data/site.js`

- [ ] Prénom et nom de la praticienne
- [ ] Année de diplôme
- [ ] Adresse du cabinet (rue, code postal, ville)
- [ ] Téléphone
- [ ] E-mail
- [ ] Horaires d'ouverture
- [ ] Tarifs (cabinet / domicile)
- [ ] Lien Doctolib (bouton « Prendre rendez-vous »)
- [ ] Liens Google / Instagram / Facebook (optionnels)

## Ailleurs

- [ ] **Photo** : remplacer `public/images/portrait-placeholder.svg` par une vraie photo
      (mettre le fichier dans `public/images/` et adapter les `src` dans
      `src/pages/index.astro`)
- [ ] **FAQ moyens de paiement** : réponse à préciser dans `src/pages/index.astro` (tableau `faq`)
- [ ] **Carte** : intégrer une carte (OpenStreetMap conseillé, pas de cookie) dans la section
      contact de `src/pages/index.astro` une fois l'adresse connue
- [ ] **Mentions légales** (`src/pages/mentions-legales.astro`) : SIRET, n° ADELI, hébergeur
- [ ] **Domaine** : remplacer `osteo.example.com` dans `astro.config.mjs` et
      `nginx.conf.example` par le sous-domaine réel (puis le domaine définitif)
- [ ] **Déploiement** : adapter `VPS_HOST` et `VPS_PATH` dans `deploy.sh`
- [ ] **Avis Google** (« + les commentaires » du PDF) : à intégrer plus tard, par exemple un
      simple lien vers la fiche Google, ou des citations copiées à la main (les widgets d'avis
      tiers ajoutent des cookies/scripts externes)

## Après mise en ligne

- [ ] Déclarer le site dans Google Search Console + créer la fiche Google Business Profile
      (essentiel pour la recherche locale)
- [ ] Ajouter un sitemap une fois le domaine définitif connu (`@astrojs/sitemap`)
