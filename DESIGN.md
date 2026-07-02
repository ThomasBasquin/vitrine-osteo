# Design

Système visuel du site vitrine de Marie Wach, ostéopathe. Registre : brand, « éditorial apaisant ».

## Theme

Clair uniquement. Fond sable très doux (`--sand-50`), sections alternées blanc / vert d'eau, footer drenché en vert profond. Le calme est le message : beaucoup d'air, rythme lent, aucun élément criard.

## Colors

Palette verte sauge du moodboard (identité conservée — ne pas remplacer).

| Token | Valeur | Usage |
|---|---|---|
| `--green-900` | `#2e4632` | Titres, footer (fond) |
| `--green-800` | `#375441` | Prix, hairline du footer |
| `--green-700` | `#3f6b4a` | Liens, bouton primaire, kickers |
| `--green-600` | `#4a7c59` | Accents italiques dans les titres, labels |
| `--green-500` | `#5f936d` | Focus ring, ornements |
| `--green-200` | `#c8dbc8` | Hairlines sur fond teinté, anneau décoratif |
| `--green-100` | `#dce8dc` | Hairlines sur fond clair, guillemet décoratif |
| `--green-50` | `#eef4ee` | Bandes de section teintées |
| `--sand-100` / `--sand-50` | `#f2efe6` / `#faf8f2` | Fond de page, header |
| `--ink` / `--ink-soft` | `#263129` / `#46554b` | Corps de texte / texte secondaire |

Contrastes vérifiés WCAG AA (corps ≥ 7:1 ; accents larges ≥ 4.3:1).

## Typography

- **Titres, marque, citations, chiffres d'étapes** : `Alegreya Variable` (serif humaniste calligraphique — écho du geste manuel). Poids 500–650, italique pour le mot accentué d'un titre (`h2 em` → vert `--green-600`).
- **Corps, UI, boutons** : `Alegreya Sans` (400/500/700).
- Échelle fluide : h1 `clamp(2.4rem, 6vw, 3.9rem)`, h2 `clamp(1.9rem, 4vw, 2.7rem)`, corps `1.125rem/1.65`.
- `text-wrap: balance` sur les titres, `pretty` sur les paragraphes.

## Signature moves

- **Arche** : les portraits sont masqués en arche (`border-radius: 999px 999px 20px 20px`), doublés d'un anneau décalé `--green-200` (aspect-ratio 4/5, jamais plus haut que la photo).
- **Galets** : les panneaux « Pour qui » (`.pebble .public-N`) ont chacun un coin très arrondi différent (4.5rem) — pas de grille de cartes uniformes.
- **Hairlines plutôt qu'ombres** : listes, FAQ, tarifs et contact sont structurés par filets 1px (`--green-100`/`--green-200`), pas par des cartes ombrées.
- **Timeline earned** : le déroulement de séance est une vraie séquence → numéros serif dans des pastilles reliées par un filet vertical, en-tête sticky à gauche.
- **Lignes fluides** : ornement SVG de courbes fines (`.hero-lines`, `--green-500` à 35 %) évoquant tissus/mouvement, uniquement dans les bandeaux.
- **Bande CTA drenchée** : le footer ouvre sur « Prendre soin de vous *commence ici* » sur `--green-900`, bouton clair `btn-light`.

## Components

- `.btn-primary` (vert 700, pill, lift au hover) / `.btn-outline` / `.btn-light` (sur fond vert profond). Attention : dans le footer, les couleurs de liens excluent `.btn` (`.site-footer a:not(.btn)`).
- FAQ : `<details>` avec icône plus/moins en pseudo-éléments, filets horizontaux.
- Carte Leaflet dans un cadre au radius organique (`--radius-organic: 2rem 2rem 2rem 5rem`).

## Motion

- Entrée du hero : keyframes `hero-in` (fade + translation 28px), stagger 0.05–0.3s.
- Reveals au scroll : classe `.reveal` + IntersectionObserver (dans `Base.astro`). Gatés par `html.js` → sans JS tout est visible. Stagger via `--reveal-delay`.
- Courbes : `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`. Pas de bounce.
- `prefers-reduced-motion: reduce` neutralise animations, transitions et smooth scroll.

## Anti-patterns (à ne pas réintroduire)

- Grilles de cartes blanches identiques avec ombre portée.
- Eyebrows uppercase au-dessus de chaque section (un seul kicker : le hero).
- Dégradés de texte, side-stripes, glassmorphism.
