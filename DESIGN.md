# Design

Système visuel du site vitrine de Marie Wach, ostéopathe. Registre : brand.
Style inspiré de seanhalpin.xyz : typographie ronde généreuse, palette beige/vert émeraude, thème circadien jour/nuit.

## Theme

**Double thème circadien.** Clair (beige/vert émeraude) entre le lever et le coucher du soleil, sombre (vert profond/menthe) la nuit. Les heures de lever/coucher sont calculées côté client pour les coordonnées GPS du cabinet (`src/scripts/theme.js`, formule NOAA avec équation du temps, inliné dans le `<head>` avant le premier rendu — pas de FOUC). Bascule manuelle via la bulle soleil/lune de l'indicateur circadien (persistée en `sessionStorage`). La classe `.light`/`.dark` est posée sur `<html>`.

## Colors

Tous les rôles sont des custom properties redéfinies par `.dark:root` (voir `src/styles/global.css`).

| Token | Jour | Nuit |
|---|---|---|
| `--color-primary` (fond) | beige `hsla(36,31%,90%)` | vert profond `hsla(158,23%,18%)` |
| `--color-text-primary` | émeraude `hsla(172,95%,18%)` | menthe `hsla(160,52%,71%)` |
| `--color-text-secondary` | `hsla(171,15%,35%)` | `hsla(159,42%,88%)` |
| `--color-primary-accent` (boutons, bulle, traits) | émeraude | menthe |
| `--color-text-tertiary` (texte sur accent) | beige | vert profond |

**Pastels fixes** (identiques jour et nuit, texte toujours `--color-green500`) : `--color-mint`, `--color-lilac`, `--color-babyblue`, `--color-rust` — classes `.pastel .pastel-*`. Attribution : Adultes = mint, Femme enceinte = lilac, Nourrisson = babyblue, Sportif = rust (cartes d'accueil **et** panneaux motifs des sections profil de la page Pour qui).

## Typography

- **Titres** : `Baloo 2 Variable` (rond, joufflu — équivalent libre d'Acorn). Toujours via `--titleFont` : si un jour la licence Acorn est achetée, une seule ligne à changer.
- **Corps, UI** : `Figtree Variable` via `--bodyFont` (équivalent libre de GT Walsheim), graisse 500 par défaut comme la référence.
- Échelle fluide copiée de la référence : `--font-h1` jusqu'à 9.75rem (h1 centré, letter-spacing -2/-4px, line-height 100%), `--font-h2-display`, `--font-body`, `--font-link`, `--font-mini`.
- Les h1 de pages sont courts et suivis d'un point : « La séance. », « Tarifs. », « Contact. », « Marie Wach. »

## Signature moves

- **Nav pilule flottante** (`src/components/Nav.astro`) : fixe, centrée, item actif sur fond `--color-white50`, backdrop-blur (`.blur`) après 40px de scroll, CTA « Rendez-vous » en pilule accent (masqué < 640px). Pas de burger, pas de dropdown : 4 liens simples (Accueil, La séance, Pour qui, Contact).
- **Aura** (`src/components/Aura.astro`) : trois blobs radiaux (`--aura-1/2/3`) en dérive lente derrière chaque hero, fondus vers le fond par `--color-gradient`. Masquée < 768px : sur mobile le fond reste uni, comme la référence.
- **Indicateur circadien** (`src/components/Circadian.astro`, en bas de chaque page) : 24 traits (opacité 0.2 la nuit, 0.45 le jour, 1 pour l'heure courante), bulle soleil/lune positionnée sur l'heure courante = bouton de bascule de thème. Pas de texte d'heures de lever/coucher. Traits animés par `transform` dans un conteneur `overflow:hidden` (courbe `--curve`, l'overshoot copié de la référence).
- **Cartes pastel** : grandes cartes arrondies (`--radius-card` 1.5rem), carte entière cliquable (lien étiré).
- **Arche** : le portrait (page d'accueil) garde le masque en arche (`border-radius: 999px 999px 1.5rem 1.5rem`).
- **Hairlines** : listes (tarifs, FAQ, expériences, contact) structurées par filets 1px `--color-light-border`, pas de cartes ombrées.
- **Séparateur de section** : petit trait de 2.5rem/3px en `--color-primary-accent` à 30% d'opacité, centré sur la jointure entre deux sections (`Pour qui`, `Contact`), plutôt qu'un kicker ou une carte.
- Carte Leaflet : tuiles inversées en thème sombre (`.dark .leaflet-tile { filter: invert(1) hue-rotate(180deg) … }`).

## Structure

4 pages dans la nav : Accueil (`/`), La séance (`/seance` — déroulement, tarifs `#tarifs`, FAQ), Pour qui (`/pour-qui` — bienfaits généraux puis une section par profil : Adultes, Femme enceinte, Nourrisson, Sportif, chacune ancrée `#adultes` etc.), Contact (`/contact` — coordonnées, horaires, carte, **puis** diplôme, philosophie de pratique et expériences cliniques de la praticienne, sans photo) + mentions légales + 404. Les pages `/a-propos`, `/femme-enceinte`, `/nourrisson` et `/sportif` ont été fusionnées (dans Contact et Pour qui respectivement) ; `astro.config.mjs` garde une redirection pour chacune. Première section de chaque page : classe `.page-hero` (passe sous la nav fixe, contient l'Aura).

## Motion

- Entrée du hero : keyframes `hero-in` staggerées (accueil).
- Reveals au scroll : `.reveal` + IntersectionObserver (Base.astro), gatés par `html.js`.
- `prefers-reduced-motion: reduce` neutralise tout (règle globale).

## Anti-patterns (à ne pas réintroduire)

- Kickers uppercase au-dessus des sections.
- Cartes blanches identiques avec ombre portée.
- Thème unique : le jour/nuit fait partie de l'identité.
