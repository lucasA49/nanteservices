import { IconSparkles, IconLeaf, IconWrench, IconTruck, IconKey, IconCar } from '../components/icons.jsx'

const services = [
  {
    id: 'mecanique-auto-moto',
    icon: IconCar,
    title: 'Mécanique auto & moto',
    summary: 'Entretien courant et dépannage pour véhicules auto et moto, à domicile ou sur place.',
    details: [
      'Réparation de crevaison',
      'Vidange et entretien courant',
      'Dépannage rapide',
    ],
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
  },
]

export default services
