export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  image: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "guide-complet-debutant-plongee",
    title: "Guide complet pour débuter la plongée sous-marine en 2025",
    excerpt: "Tout ce que vous devez savoir avant de vous lancer dans l'aventure de la plongée : formations, équipement, premiers spots et conseils d'experts.",
    content: `
# Guide complet pour débuter la plongée sous-marine

La plongée sous-marine est une activité extraordinaire qui ouvre les portes d'un monde fascinant. Ce guide vous accompagne dans vos premiers pas.

## Choisir sa formation

Le choix de l'organisme de formation est crucial. Les principales options sont :

### PADI (Professional Association of Diving Instructors)
- Organisation la plus répandue mondialement
- Certifications reconnues partout
- Approche modulaire progressive

### SSI (Scuba Schools International)
- Formation digitale innovante
- Matériel pédagogique de qualité
- Réseau mondial de centres

### FFESSM (France)
- Formation très complète
- Accent sur la théorie et la sécurité
- Clubs associatifs accessibles

## Premier équipement

Pour débuter, privilégiez :
- Un masque bien ajusté
- Des palmes souples
- Une combinaison adaptée à votre destination

## Premiers spots recommandés

- **Malte** : Eau claire, infrastructure excellente
- **Égypte** : Vie marine abondante, prix accessibles
- **Thaïlande** : Formations nombreuses, ambiance détendue
    `,
    category: "Formation",
    author: {
      name: "Marine Dubois",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      bio: "Instructrice PADI depuis 15 ans"
    },
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    publishedAt: "2025-01-15",
    readTime: 12,
    tags: ["débutant", "formation", "conseils", "équipement"],
    featured: true
  },
  {
    id: "2",
    slug: "meilleurs-spots-requins-baleines-2025",
    title: "Les 10 meilleurs spots pour observer les requins-baleines en 2025",
    excerpt: "Découvrez les destinations incontournables pour nager avec le plus grand poisson du monde, saison par saison.",
    content: `
# Observer les requins-baleines

Le requin-baleine, ce géant des mers pouvant atteindre 18 mètres, est l'une des rencontres les plus magiques pour un plongeur.

## Destinations par saison

### Janvier - Avril
- **Maldives (Ari Atoll)** : Concentrations importantes
- **Mozambique** : Tofo Beach, observations garanties
- **Honduras** : Utila, île du requin-baleine

### Mai - Septembre
- **Mexique (Isla Holbox)** : Centaines d'individus
- **Philippines (Donsol)** : Écotourisme responsable
- **Djibouti** : Juvéniles dans le golfe

### Octobre - Décembre
- **Galápagos** : Femelles enceintes
- **Thaïlande (Koh Tao)** : Observations régulières
- **Australie (Ningaloo)** : Après ponte des coraux
    `,
    category: "Destinations",
    author: {
      name: "Thomas Mercier",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      bio: "Biologiste marin et photographe"
    },
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80",
    publishedAt: "2025-01-10",
    readTime: 8,
    tags: ["requins-baleines", "destinations", "big animals", "snorkeling"],
    featured: true
  },
  {
    id: "3",
    slug: "comparatif-ordinateurs-plongee-2025",
    title: "Comparatif des meilleurs ordinateurs de plongée 2025",
    excerpt: "Notre analyse détaillée des ordinateurs de plongée du marché : Shearwater, Suunto, Garmin, Aqualung... Lequel choisir ?",
    content: `
# Guide des ordinateurs de plongée 2025

L'ordinateur de plongée est devenu un équipement indispensable. Voici notre comparatif détaillé.

## Critères de choix

1. **Type de plongée** : Loisir, technique, apnée
2. **Budget** : De 200€ à 1500€+
3. **Fonctionnalités** : Nitrox, multi-gaz, air integration
4. **Lisibilité** : Écran, rétroéclairage

## Nos recommandations

### Pour débuter : Cressi Leonardo (249€)
Simple, fiable, grand écran lisible.

### Polyvalent : Suunto D5 (699€)
Design élégant, app complète, polyvalent.

### Technique : Shearwater Perdix 2 (1299€)
La référence pour la plongée technique.

### Smartwatch : Garmin Descent Mk3 (1499€)
Pour les plongeurs sportifs au quotidien.
    `,
    category: "Équipement",
    author: {
      name: "Pierre Lambert",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      bio: "Testeur d'équipement de plongée"
    },
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80",
    publishedAt: "2025-01-05",
    readTime: 15,
    tags: ["ordinateur", "équipement", "comparatif", "tech"],
    featured: true
  },
  {
    id: "4",
    slug: "photographie-sous-marine-conseils",
    title: "10 conseils pour réussir vos photos sous-marines",
    excerpt: "De la composition à l'éclairage, découvrez les techniques des photographes sous-marins professionnels.",
    content: `
# Réussir ses photos sous-marines

La photographie sous-marine est un art exigeant mais gratifiant. Voici nos conseils pour progresser.

## Les fondamentaux

### 1. Maîtrisez votre flottabilité
Impossible de faire de bonnes photos si vous bougez dans tous les sens.

### 2. Rapprochez-vous
L'eau absorbe la lumière. Plus vous êtes proche, plus vos images seront nettes et colorées.

### 3. Tirez vers le haut
Photographier légèrement en contre-plongée donne du relief à vos sujets.

## L'éclairage

### Lumière naturelle
- Plongez entre 10h et 14h
- Restez dans les 15 premiers mètres
- Utilisez un filtre rouge si besoin

### Flash et phares
- Deux sources pour éliminer les ombres
- Bras longs pour éloigner le backscatter
- Puissance adaptée à la distance
    `,
    category: "Technique",
    author: {
      name: "Sophie Martin",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      bio: "Photographe sous-marine primée"
    },
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
    publishedAt: "2024-12-28",
    readTime: 10,
    tags: ["photographie", "technique", "conseils", "équipement"],
    featured: false
  },
  {
    id: "5",
    slug: "plongee-epaves-histoire",
    title: "Plongée sur épaves : les sites historiques à découvrir",
    excerpt: "Du Thistlegorm en Mer Rouge au SS President Coolidge au Vanuatu, explorez les épaves les plus fascinantes du monde.",
    content: `
# Les épaves mythiques de la plongée

Les épaves combinent histoire, mystère et vie marine. Voici les plus extraordinaires.

## Mer Rouge

### SS Thistlegorm (Égypte)
L'épave la plus célèbre au monde. Ce cargo britannique coulé en 1941 regorge de motos, camions et munitions.
- Profondeur : 30m
- Niveau : Intermédiaire

## Pacifique

### SS President Coolidge (Vanuatu)
Paquebot de luxe transformé en transport de troupes. L'une des plus grandes épaves accessibles.
- Profondeur : 21-70m
- Niveau : Tous niveaux (parties hautes)

## Micronésie

### Truk Lagoon
Plus de 60 navires japonais de la Seconde Guerre mondiale dans un lagon tropical.
- Profondeur : Variable
- Niveau : Intermédiaire à Avancé
    `,
    category: "Destinations",
    author: {
      name: "Marc Lefèvre",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      bio: "Explorateur d'épaves et historien"
    },
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&q=80",
    publishedAt: "2024-12-20",
    readTime: 9,
    tags: ["épaves", "histoire", "destinations", "technique"],
    featured: false
  },
  {
    id: "6",
    slug: "securite-plongee-regles-or",
    title: "Les règles d'or de la sécurité en plongée",
    excerpt: "Ne plongez jamais seul, respectez vos paliers... Rappel des règles essentielles pour plonger en toute sérénité.",
    content: `
# Sécurité en plongée : les règles d'or

La plongée est sûre quand on respecte les règles fondamentales. Les voici.

## Avant la plongée

### 1. Vérifiez votre équipement
Check-list complète à chaque plongée. BWRAF : BCD, Weights, Releases, Air, Final check.

### 2. Planifiez votre plongée
Profondeur max, temps de plongée, profil, consommation d'air estimée.

### 3. Briefing avec votre binôme
Communication, signaux, procédures d'urgence, point de rendez-vous.

## Pendant la plongée

### 4. Ne jamais bloquer sa respiration
Règle n°1 : respirez en continu, surtout à la remontée.

### 5. Respectez votre ordinateur
Pas d'improvisation avec les paliers de décompression.

### 6. Surveillez votre air
Remontée à 50 bar minimum, palier de sécurité à 5m.

## Après la plongée

### 7. Hydratez-vous
L'eau aide à éliminer l'azote dissous.

### 8. Pas d'avion avant 24h
Ni d'altitude significative après plusieurs plongées.
    `,
    category: "Formation",
    author: {
      name: "Dr. Claire Fontaine",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
      bio: "Médecin hyperbare et plongeuse"
    },
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    publishedAt: "2024-12-15",
    readTime: 7,
    tags: ["sécurité", "formation", "conseils", "débutant"],
    featured: false
  },
  {
    id: "7",
    slug: "meilleures-croisieres-plongee-2025",
    title: "Les meilleures croisières plongée pour 2025",
    excerpt: "Galápagos, Socorro, Raja Ampat... Notre sélection des liveaboards incontournables cette année.",
    content: `
# Croisières plongée 2025

Le liveaboard reste le meilleur moyen d'accéder aux sites les plus extraordinaires. Voici notre sélection.

## Big Animals

### Galápagos - Aggressor III
7 nuits pour explorer Darwin et Wolf, les îles aux requins-marteaux.
- Prix : ~5000€
- Niveau : Avancé

### Socorro - Nautilus Belle Amie
Les raies manta océaniques géantes du Pacifique mexicain.
- Prix : ~3500€
- Niveau : Intermédiaire

## Biodiversité

### Raja Ampat - Damai
L'épicentre mondial de la biodiversité marine dans le confort d'un yacht de luxe.
- Prix : ~6000€
- Niveau : Tous niveaux

### Komodo - Mermaid II
Dragons sur terre, raies manta sous l'eau.
- Prix : ~2500€
- Niveau : Intermédiaire

## Rapport qualité-prix

### Mer Rouge - Emperor Elite
Une semaine complète avec Brothers, Daedalus et Elphinstone.
- Prix : ~1500€
- Niveau : Intermédiaire
    `,
    category: "Destinations",
    author: {
      name: "Antoine Durand",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&q=80",
      bio: "Journaliste voyage et plongée"
    },
    image: "https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?w=800&q=80",
    publishedAt: "2024-12-10",
    readTime: 11,
    tags: ["croisière", "liveaboard", "destinations", "voyage"],
    featured: false
  },
  {
    id: "8",
    slug: "plongee-technique-nitrox-trimix",
    title: "Introduction à la plongée technique : Nitrox et Trimix",
    excerpt: "Comprendre les mélanges respiratoires pour aller plus loin et plus longtemps en toute sécurité.",
    content: `
# Plongée technique : les mélanges

Au-delà de l'air, découvrez les mélanges qui repoussent les limites.

## Le Nitrox

### Qu'est-ce que c'est ?
Un mélange enrichi en oxygène (21-40% O2) qui réduit la charge en azote.

### Avantages
- Paliers réduits ou supprimés
- Moins de fatigue post-plongée
- Intervalles surface plus courts

### Précautions
- Profondeur maximale limitée (toxicité O2)
- Formation obligatoire
- Analyse du mélange avant chaque plongée

## Le Trimix

### Composition
Oxygène + Azote + Hélium pour les grandes profondeurs.

### Pourquoi l'hélium ?
- Réduit la narcose
- Permet les plongées profondes lucides
- Moins dense que l'azote

### Formation
Cursus technique complet obligatoire (TDI, IANTD, FFESSM).
    `,
    category: "Technique",
    author: {
      name: "Guillaume Roche",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
      bio: "Instructeur technique Trimix"
    },
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    publishedAt: "2024-12-05",
    readTime: 13,
    tags: ["technique", "nitrox", "trimix", "formation"],
    featured: false
  }
];

export const blogCategories = [
  "Tous",
  "Formation",
  "Destinations",
  "Équipement",
  "Technique"
];
