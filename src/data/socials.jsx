import { IconInstagram, IconTiktok, IconSnapchat } from '../components/icons.jsx'

// Réseaux sociaux Nantes Services — utilisés dans le Footer et la section « Suivez-nous » de la page d'accueil.
// `brandClass` porte les couleurs officielles de chaque réseau (fond + glyphe).
const socials = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@nantes.services',
    href: 'https://www.instagram.com/nantes.services',
    icon: IconInstagram,
    brandClass:
      'bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] text-white',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    handle: '@tout.services44',
    href: 'https://www.tiktok.com/@tout.services44',
    icon: IconTiktok,
    brandClass: 'bg-black text-white',
  },
  {
    id: 'snapchat',
    label: 'Snapchat',
    handle: '@nantes_services',
    href: 'https://www.snapchat.com/@nantes_services',
    icon: IconSnapchat,
    brandClass: 'bg-[#FFFC00] text-black',
  },
]

export default socials
