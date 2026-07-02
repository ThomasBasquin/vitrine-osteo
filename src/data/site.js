// Toutes les infos à personnaliser sont centralisées ici.
// Les valeurs entre crochets [ ] sont des placeholders à remplacer
// (liste récapitulative dans INFOS-A-COMPLETER.md à la racine).

export const site = {
  praticienne: {
    nom: 'Marie Wach',
    titre: 'Ostéopathe D.O.',
    ecole: 'Collège Ostéopathique de Strasbourg',
    anneeDiplome: '2026',
  },

  cabinet: {
    nom: 'Marie Wach — Ostéopathe',
    adresse: '7 ZI Haechy',
    codePostal: '67220',
    ville: 'Dieffenbach-au-Val',
    telephone: '[06 00 00 00 00]',
    email: 'mariewach.osteo@gmail.com',
    parking: 'Parking à disposition',
    // Coordonnées GPS pour la carte et le SEO local
    latitude: 48.32319,
    longitude: 7.33155,
  },

  horaires: [
    { jours: 'Lundi – Vendredi', heures: '[9h00 – 19h00]' },
    { jours: 'Samedi', heures: '[Sur rendez-vous]' },
  ],

  tarifs: [
    { label: 'Consultation au cabinet', prix: '60 €' },
  ],

  liens: {
    doctolib: 'https://www.doctolib.fr/', // [lien Doctolib à compléter]
    google: '', // [lien fiche Google]
    instagram: '', // [lien Instagram]
    facebook: '', // [lien Facebook]
  },
};
