import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import services, { featuredServices, otherServices } from '../data/services.jsx'
import socials from '../data/socials.jsx'
import {
  IconArrowRight,
  IconBadge,
  IconCheckCircle,
  IconClock,
  IconPhone,
  IconShield,
  IconSparkles,
} from '../components/icons.jsx'

const stats = [
  { value: '4 ans', label: "d'expérience à Nantes" },
  { value: '500+', label: 'clients satisfaits' },
  { value: '1h', label: "délai d'intervention moyen" },
  { value: '4.8/5', label: 'note moyenne clients' },
]

const trustPoints = [
  {
    icon: IconShield,
    title: 'Professionnels vérifiés',
    text: 'Une équipe qualifiée, assurée et sélectionnée pour son sérieux.',
  },
  {
    icon: IconCheckCircle,
    title: 'Devis gratuit',
    text: "Un devis clair et sans engagement avant chaque intervention.",
  },
  {
    icon: IconClock,
    title: 'Intervention rapide',
    text: "Une équipe disponible et réactive, souvent sous 48h.",
  },
  {
    icon: IconBadge,
    title: 'Satisfaction garantie',
    text: 'Un service soigné, ré-évalué à chaque mission pour progresser.',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Nantes Services — Nettoyage auto, SOS Dépannage & VTC à Nantes"
        description="Nettoyage automobile, SOS dépannage (panne batterie, panne carburant, crevaison) et VTC chauffeur privé à Nantes, ainsi que ménage, entretien des espaces verts, petits travaux, déménagement et conciergerie."
        path="/"
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm ring-1 ring-slate-200">
              <IconSparkles className="h-4 w-4 text-accent" />
              Services du quotidien à Nantes
            </span>
            <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
Des services fiables pour simplifier votre quotidien.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Nettoyage automobile, SOS Dépannage, VTC avec chauffeur privé, ménage, entretien des espaces verts,
              petits travaux, déménagement, conciergerie&nbsp;: Nantes Services réunit des professionnels de
              confiance pour simplifier votre quotidien.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-ink shadow-sm transition-colors duration-200 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Demander un devis gratuit
                <IconArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#services"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-primary shadow-sm ring-1 ring-slate-200 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Découvrir nos services
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-2xl font-bold text-primary">{stat.value}</dd>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative" aria-hidden="true">
            <div className="grid grid-cols-2 gap-4">
              {services.slice(0, 4).map((service, i) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.id}
                    className={`rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100 ${i % 2 === 1 ? 'mt-8' : ''}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-4 font-heading text-sm font-semibold text-slate-900">{service.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured activities */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-primary">
              Nos 3 pôles d’activité
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Nettoyage auto, dépannage &amp; VTC
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Trois expertises dédiées à votre véhicule et à vos déplacements, avec un même engagement de sérieux et
              de réactivité.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredServices.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="group scroll-mt-24 flex flex-col rounded-2xl border border-slate-200 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary-light/50 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-accent transition-transform duration-200 group-hover:scale-105">
                      <Icon className="h-7 w-7" />
                    </div>
                    {service.priceFrom && (
                      <span className="inline-flex shrink-0 items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">
                        {service.priceFrom.toLowerCase().includes('devis')
                          ? service.priceFrom
                          : `à partir de ${service.priceFrom}`}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-slate-600">
                        <IconCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {service.note && (
                    <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-primary">
                      <IconClock className="h-3.5 w-3.5" />
                      {service.note}
                    </p>
                  )}

                  <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
                    <Link
                      to={service.ctaHref}
                      className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-ink shadow-sm transition-colors duration-200 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {service.ctaLabel}
                      <IconArrowRight className="h-4 w-4" />
                    </Link>
                    {service.phoneCta && (
                      <a
                        href="tel:+33759124748"
                        className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-surface"
                      >
                        <IconPhone className="h-4 w-4" />
                        {service.phoneCta}
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => {
              const Icon = point.icon
              return (
                <div key={point.title} className="flex flex-col items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-slate-900">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-16 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Nos autres services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Une gamme complète de services pour votre domicile et vos locaux professionnels, assurée par des
              équipes de confiance.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24 rounded-2xl border border-slate-200 p-8 transition-colors duration-200 hover:border-primary-light/50 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    {service.priceFrom && (
                      <span className="inline-flex shrink-0 items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">
                        {service.priceFrom.toLowerCase().includes('devis')
                          ? service.priceFrom
                          : `à partir de ${service.priceFrom}`}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-slate-600">
                        <IconCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.ctaHref}
                    className="mt-6 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-light"
                  >
                    {service.ctaLabel}
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="apropos" className="scroll-mt-16 bg-surface py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">À propos de nous</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
  Fondée à Nantes en 2022, Nantes Services accompagne les particuliers et les professionnels dans l’entretien et la gestion de leur quotidien. <br /> Notre mission : proposer des prestations fiables, soignées et adaptées à chaque besoin, réalisées par des équipes formées, sérieuses et de confiance.
</p>

<p className="mt-4 text-lg leading-relaxed text-slate-600">
  Basée à Nantes, notre équipe intervient dans toute la métropole nantaise et plus largement dans le Grand Ouest, pour des prestations ponctuelles ou régulières. Grâce à notre mobilité et à notre savoir-faire, nous pouvons également nous déplacer au-delà de notre zone d’intervention habituelle, en France et à l’international, afin de répondre aux besoins de nos clients.
</p>


            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-100">
            <h3 className="font-heading text-lg font-semibold text-slate-900">Nos valeurs</h3>
            <ul className="mt-6 space-y-5">
              {[
                {
                  title: 'Fiabilité',
                  text: 'Des équipes ponctuelles et un travail soigné, à chaque intervention.',
                },
                {
                  title: 'Proximité',
                  text: 'Une équipe locale qui connaît Nantes et ses environs.',
                },
                {
                  title: 'Transparence',
                  text: 'Des devis clairs, sans frais cachés ni surprise.',
                },
              ].map((value) => (
                <li key={value.title} className="flex items-start gap-3">
                  <IconCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <p className="font-medium text-slate-900">{value.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{value.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Réseaux sociaux */}
      <section id="reseaux" className="scroll-mt-16 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-primary">
              Nos réseaux sociaux
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Suivez Nantes Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Retrouvez nos réalisations, nos conseils et nos actualités au quotidien sur Instagram, TikTok et
              Snapchat.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary-light/50 hover:shadow-lg"
                >
                  <span className={`flex h-14 w-14 items-center justify-center rounded-xl ${social.brandClass} shadow-sm transition-transform duration-200 group-hover:scale-105`}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="font-heading text-base font-semibold text-slate-900">{social.label}</span>
                  <span className="text-sm text-slate-600">{social.handle}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Besoin d’un service ? Parlons-en.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
            Contactez-nous dès aujourd’hui pour un devis gratuit et sans engagement.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-ink shadow-sm transition-colors duration-200 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Nous contacter
            <IconArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
