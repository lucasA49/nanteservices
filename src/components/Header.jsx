import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconMenu, IconClose, IconPhone } from './icons.jsx'
import Logo from './Logo.jsx'

const navLinks = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/#services', label: 'Services' },
  { to: '/#apropos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden md:flex md:items-center md:gap-8" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive ? 'text-primary' : 'text-slate-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+33759124748"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-primary"
          >
            <IconPhone className="h-5 w-5 text-primary" />
            07 59 12 47 48
          </a>
          <Link
            to="/contact"
            className="cursor-pointer rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-colors duration-200 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Demander un devis
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden" aria-label="Navigation mobile">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium transition-colors duration-200 ${
                    isActive ? 'bg-surface text-primary' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+33759124748"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              <IconPhone className="h-5 w-5 text-primary" />
              07 59 12 47 48
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 cursor-pointer rounded-lg bg-accent px-5 py-3 text-center text-base font-semibold text-ink shadow-sm transition-colors duration-200 hover:bg-accent-dark"
            >
              Demander un devis
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
