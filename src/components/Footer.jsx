import { Link } from 'react-router-dom'
import services from '../data/services.jsx'
import { IconPhone, IconMail, IconMapPin, IconClock } from './icons.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo textClassName="text-white" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Des professionnels de confiance pour l’entretien de votre domicile et de vos locaux, à Nantes et ses
              environs.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/#${service.id}`}
                    className="text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Entreprise</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/#apropos" className="text-slate-400 transition-colors duration-200 hover:text-white">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 transition-colors duration-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-slate-400">12 Rue de la Paix, 44000 Nantes</span>
              </li>
              <li className="flex items-center gap-2">
                <IconPhone className="h-5 w-5 shrink-0 text-accent" />
                <a href="tel:+33759124748" className="text-slate-400 transition-colors duration-200 hover:text-white">
                  07 59 12 47 48
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IconMail className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href="mailto:nantes.services44@gmail.com"
                  className="text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  nantes.services44@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IconClock className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-slate-400">Disponible 24h/24 et 7j/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>© {year} Nantes Services — Site fictif à titre de démonstration. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
