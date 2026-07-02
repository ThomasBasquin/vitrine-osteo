# Site vitrine — Cabinet d'ostéopathie

Site statique construit avec [Astro](https://astro.build). Aucune dépendance à une plateforme
d'hébergement : le build produit du HTML/CSS pur dans `dist/`, servi par nginx sur le VPS.

## Commandes

```sh
npm install       # première fois
npm run dev       # serveur de dev sur http://localhost:5173
npm run build     # build statique dans dist/
./deploy.sh       # build + rsync vers le VPS (adapter VPS_HOST / VPS_PATH)
```

## Structure

- `src/data/site.js` — **toutes les infos du cabinet** (nom, adresse, tarifs, liens…)
- `src/pages/` — les pages (accueil, femme-enceinte, nourrisson, sportif, mentions légales, 404)
- `src/layouts/` — layout commun (header/footer/SEO) et layout des pages spécialités
- `src/styles/global.css` — palette et styles partagés
- `nginx.conf.example` — vhost nginx à installer sur le VPS
- `INFOS-A-COMPLETER.md` — liste des placeholders à remplacer avant mise en ligne
