// Toutes les infos à personnaliser sont centralisées ici.
// Les valeurs entre crochets [ ] sont des placeholders à remplacer
// (liste récapitulative dans INFOS-A-COMPLETER.md à la racine).

export const site = {
  praticienne: {
    nom: '[Prénom Nom]',
    titre: 'Ostéopathe D.O.',
    ecole: 'Collège Ostéopathique de Strasbourg',
    anneeDiplome: '[Année]',
  },

  cabinet: {
    nom: '[Prénom Nom] — Ostéopathe',
    adresse: '[N° et rue]',
    codePostal: '[Code postal]',
    ville: '[Ville]',
    telephone: '[06 00 00 00 00]',
    email: '[contact@exemple.fr]',
    parking: 'Parking à disposition',
    // Coordonnées GPS pour la carte et le SEO local
    latitude: null,
    longitude: null,
  },

  horaires: [
    { jours: 'Lundi – Vendredi', heures: '[9h00 – 19h00]' },
    { jours: 'Samedi', heures: '[Sur rendez-vous]' },
  ],

  tarifs: [
    { label: 'Consultation au cabinet', prix: '[60 €]' },
    { label: 'Consultation à domicile', prix: '[70 €]' },
  ],

  liens: {
    doctolib: 'https://www.doctolib.fr/', // [lien Doctolib à compléter]
    google: '', // [lien fiche Google]
    instagram: '', // [lien Instagram]
    facebook: '', // [lien Facebook]
  },
};
