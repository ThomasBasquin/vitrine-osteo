# Site vitrine — Cabinet d'ostéopathie

Site statique construit avec [Astro](https://astro.build). Aucune dépendance à une plateforme
d'hébergement : le build produit du HTML/CSS pur dans `dist/`, servi par nginx sur le VPS.

## Commandes

```sh
npm install       # première fois
npm run dev       # serveur de dev sur http://localhost:5173
npm run build     # build statique dans dist/
./deploy.sh       # build + copie vers /var/www/osteo.thomasbasquin.fr (le repo vit sur le VPS)
```

## Structure

- `src/data/site.js` — **toutes les infos du cabinet** (nom, adresse, tarifs, liens…)
- `src/pages/` — les pages (accueil, séance, pour-qui, contact, mentions légales, 404)
- `src/layouts/` — layout commun (header/footer/SEO)
- `src/styles/global.css` — palette et styles partagés
- `nginx/osteo.thomasbasquin.fr` — vhost nginx à installer sur le VPS
- `INFOS-A-COMPLETER.md` — liste des placeholders à remplacer avant mise en ligne
