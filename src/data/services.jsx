import {
  IconSparkles,
  IconLeaf,
  IconWrench,
  IconTruck,
  IconKey,
  IconCar,
  IconSponge,
  IconAlertTriangle,
  IconSteeringWheel,
} from '../components/icons.jsx'

// The 3 core activities of the business, highlighted in their own section on the homepage.
export const featuredServices = [
  {
    id: 'nettoyage-auto',
    icon: IconSponge,
    title: 'Nettoyage automobile',
    summary:
      'Nettoyage automobile professionnel pour particuliers et professionnels : intérieur, extérieur ou complet.',
    details: ['Nettoyage intérieur', 'Nettoyage extérieur', 'Nettoyage complet', 'Entretien du véhicule'],
    ctaLabel: 'Demander un devis',
    ctaHref: '/contact?type=nettoyage-auto',
  },
  {
    id: 'sos-depannage',
    icon: IconAlertTriangle,
    title: 'SOS Dépannage',
    summary: 'Assistance et dépannage automobile pour panne de carburant, panne de batterie ou crevaison.',
    details: ['Panne carburant', 'Panne batterie', 'Crevaison'],
    note: 'Délai moyen d’intervention : 1h',
    ctaLabel: 'Demander une intervention',
    ctaHref: '/contact?type=sos-depannage',
    phoneCta: 'Appeler pour un dépannage',
  },
  {
    id: 'vtc',
    icon: IconSteeringWheel,
    title: 'VTC – Chauffeur privé',
    summary:
      'Transport avec chauffeur privé pour déplacements professionnels, transferts gare, aéroport ou trajets longue distance.',
    details: ['Déplacements professionnels', 'Transferts gare & aéroport', 'Trajets privés longue distance'],
    ctaLabel: 'Réserver un trajet',
    ctaHref: '/contact?type=vtc',
  },
]

export const otherServices = [
  {
    id: 'mecanique-auto-moto',
    icon: IconCar,
    title: 'Mécanique auto & moto',
    summary: 'Entretien courant et dépannage pour véhicules auto et moto, à domicile ou sur place.',
    details: ['Réparation de crevaison', 'Vidange et entretien courant', 'Dépannage rapide'],
    ctaLabel: 'Demander un devis',
    ctaHref: '/contact?type=mecanique-auto-moto',
  },
  {
    id: 'petits-travaux',
    icon: IconWrench,
    title: 'Petits travaux & bricolage',
    summary: 'Montage de meubles, petites réparations et travaux du quotidien.',
    details: [
      'Montage de mobilier',
      'Fixations, pose d’étagères, petites réparations',
      'Devis gratuit avant intervention',
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: '/contact?type=petits-travaux',
  },
  {
    id: 'demenagement',
    icon: IconTruck,
    title: 'Déménagement',
    summary: 'Aide au déménagement, transport et manutention pour particuliers et entreprises.',
    details: [
      'Chargement, transport et livraison',
      'Emballage et protection du mobilier',
      'Équipe expérimentée et assurée',
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: '/contact?type=demenagement',
  },
  {
    id: 'conciergerie',
    icon: IconKey,
    title: 'Conciergerie',
    summary: 'Gestion des clés, réception de colis et services sur mesure au quotidien.',
    details: [
      'Réception et garde de colis',
      'Gestion des accès et des clés',
      'Services personnalisés à la demande',
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: '/contact?type=conciergerie',
  },
  {
    id: 'espaces-verts',
    icon: IconLeaf,
    title: 'Entretien des espaces verts',
    summary: 'Tonte, taille et entretien de jardins pour particuliers et copropriétés.',
    details: [
      'Tonte de pelouse et taille de haies',
      'Entretien saisonnier des massifs',
      'Évacuation des déchets verts',
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: '/contact?type=espaces-verts',
  },
  {
    id: 'menage',
    icon: IconSparkles,
    title: 'Ménage & nettoyage',
    summary: 'Entretien régulier ou ponctuel de votre domicile ou de vos locaux professionnels.',
    details: [
      'Nettoyage résidentiel et bureaux',
      'Formules hebdomadaires ou mensuelles',
      'Produits et matériel fournis',
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: '/contact?type=menage',
  },
]

const services = [...featuredServices, ...otherServices]

export default services
