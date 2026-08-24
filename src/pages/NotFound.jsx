import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { IconArrowRight } from '../components/icons.jsx'

export default function NotFound() {
  return (
    <section className="bg-surface">
      <Seo title="Page non trouvée" description="Cette page n’existe pas ou plus." path="/404" noindex />
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="font-heading text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-slate-900 sm:text-3xl">Page introuvable</h1>
        <p className="mt-4 max-w-md text-slate-600">
          La page que vous cherchez n’existe pas ou a été déplacée. Retournez à l’accueil ou contactez-nous
          directement.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-ink shadow-sm transition-colors duration-200 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Retour à l’accueil
            <IconArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-primary shadow-sm ring-1 ring-slate-200 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  )
}
