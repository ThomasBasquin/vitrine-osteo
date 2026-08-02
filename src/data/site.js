// Toutes les infos à personnaliser sont centralisées ici.
// Les valeurs entre crochets [ ] sont des placeholders à remplacer
// (liste récapitulative dans INFOS-A-COMPLETER.md à la racine).

export const site = {
  praticienne: {
    nom: 'Marie Wach',
    titre: 'Ostéopathe D.O.',
    ecole: 'Collège Ostéopathique de Strasbourg',
    anneeDiplome: '2026',
    rpps: '10112237838',
  },

  cabinet: {
    nom: 'Marie Wach — Ostéopathe',
    adresse: '7 ZI Haechy',
    codePostal: '67220',
    ville: 'Dieffenbach-au-Val',
    telephone: '06 35 40 13 59',
    email: 'mariewach.osteo@gmail.com',
    siret: '10661350800014',
    parking: 'Parking à disposition',
    // Coordonnées GPS pour la carte et le SEO local
    latitude: 48.32319,
    longitude: 7.33155,
  },

  horaires: [
    { jours: 'Lundi', heures: '13h30 – 18h30' },
    { jours: 'Mardi – Vendredi', heures: '8h30 – 18h30' },
    { jours: 'Samedi', heures: '8h30 – 12h30' },
  ],

  tarifs: [
    { label: 'Consultation au cabinet', prix: '60 €' },
    { label: 'Consultation à domicile', prix: '70 €' },
  ],

  liens: {
    doctolib: 'https://www.doctolib.fr/', // [lien Doctolib à compléter]
    google: '', // [lien fiche Google]
    instagram: '', // [lien Instagram]
    facebook: '', // [lien Facebook]
  },
};

// Le téléphone est encore un placeholder entre crochets : on l'utilise pour
// masquer le numéro plutôt que d'afficher/publier une valeur bidon en prod.
export const hasPhone = !site.cabinet.telephone.startsWith('[');
