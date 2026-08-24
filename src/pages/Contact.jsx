import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { IconAlertTriangle, IconCheckCircle, IconClock, IconMail, IconMapPin, IconPhone } from '../components/icons.jsx'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

const NETTOYAGE_AUTO = 'Nettoyage automobile'
const SOS_DEPANNAGE = 'SOS Dépannage'
const VTC = 'VTC – Chauffeur privé'

const subjects = [
  'Ménage & nettoyage',
  'Entretien des espaces verts',
  'Petits travaux',
  'Déménagement',
  'Conciergerie',
  'Mécanique auto & moto',
  NETTOYAGE_AUTO,
  SOS_DEPANNAGE,
  VTC,
  'Autre demande',
]

const typeToSubject = {
  menage: 'Ménage & nettoyage',
  'espaces-verts': 'Entretien des espaces verts',
  'petits-travaux': 'Petits travaux',
  demenagement: 'Déménagement',
  conciergerie: 'Conciergerie',
  'mecanique-auto-moto': 'Mécanique auto & moto',
  'nettoyage-auto': NETTOYAGE_AUTO,
  'sos-depannage': SOS_DEPANNAGE,
  vtc: VTC,
}

const breakdownTypes = ['Panne carburant', 'Panne batterie', 'Crevaison']
const vehicleTypes = ['Citadine', 'Berline', 'SUV / 4x4', 'Utilitaire', 'Moto']
const carWashServices = ['Nettoyage intérieur', 'Nettoyage extérieur', 'Nettoyage complet']

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: subjects[0],
  message: '',
  breakdownType: breakdownTypes[0],
  pickupAddress: '',
  destination: '',
  date: '',
  time: '',
  passengers: '',
  vehicleType: vehicleTypes[0],
  service: carWashServices[0],
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const initialSubject = typeToSubject[searchParams.get('type')] ?? subjects[0]

  const [form, setForm] = useState(() => ({ ...initialForm, subject: initialSubject }))
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const isSOS = form.subject === SOS_DEPANNAGE
  const isVTC = form.subject === VTC
  const isNettoyageAuto = form.subject === NETTOYAGE_AUTO

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error')
      return
    }

    setStatus('sending')

    const body = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Nantes Services — ${form.subject}`,
      from_name: form.name,
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      replyto: form.email,
    }

    if (isSOS) {
      body['Type de panne'] = form.breakdownType
    }
    if (isVTC) {
      body['Adresse de départ'] = form.pickupAddress
      body['Destination'] = form.destination
      body['Date souhaitée'] = form.date
      body['Heure souhaitée'] = form.time
      body['Nombre de passagers'] = form.passengers
    }
    if (isNettoyageAuto) {
      body['Type de véhicule'] = form.vehicleType
      body['Prestation souhaitée'] = form.service
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      })
      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('sent')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">Contactez-nous</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Une question, un projet ? Notre équipe vous répond sous 24h ouvrées pour établir un devis gratuit.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-xl font-semibold text-slate-900">Nos coordonnées</h2>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-primary">
                  <IconMapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-slate-900">Siège social</p>
                  <p className="mt-1 text-sm text-slate-600">12 Rue de la Paix, 44000 Nantes</p>
                  <p className="text-sm text-slate-500">Nous intervenons chez vous — pas d’accueil sur place</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-primary">
                  <IconPhone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-slate-900">Téléphone</p>
                  <a href="tel:+33759124748" className="mt-1 block text-sm text-slate-600 hover:text-primary">
                    07 59 12 47 48
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-primary">
                  <IconMail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <a
                    href="mailto:nantes.services44@gmail.com"
                    className="mt-1 block text-sm text-slate-600 hover:text-primary"
                  >
                    nantes.services44@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-primary">
                  <IconClock className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-slate-900">Horaires</p>
                  <p className="mt-1 text-sm text-slate-600">Disponible 24h/24 et 7j/7</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-primary to-primary-light p-8 text-center shadow-md ring-1 ring-black/5">
              <span className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-2 shadow-sm">
                <img src="/nantesservices.png" alt="Nantes Services" className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="font-heading text-lg font-semibold text-white">Nantes Services</p>
                <p className="mt-2 text-sm leading-relaxed text-green-100">
                  Pas d’agence, pas de point de vente&nbsp;: nous intervenons directement chez vous, partout à Nantes
                  et sa métropole.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-accent ring-1 ring-white/20">
                <IconClock className="h-4 w-4" />
                Disponible 24h/24 · 7j/7
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="font-heading text-xl font-semibold text-slate-900">Envoyez-nous un message</h2>

              {status === 'sent' && (
                <div
                  role="status"
                  className="mt-6 flex items-start gap-3 rounded-lg bg-green-50 p-4 text-sm text-green-800 ring-1 ring-green-200"
                >
                  <IconCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <p>Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.</p>
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 rounded-lg bg-red-50 p-4 text-sm text-red-800 ring-1 ring-red-200"
                >
                  <IconAlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <p>
                    L’envoi a échoué. Vous pouvez réessayer, ou nous écrire directement à{' '}
                    <a href="mailto:nantes.services44@gmail.com" className="font-medium underline">
                      nantes.services44@gmail.com
                    </a>
                    .
                  </p>
                </div>
              )}

              <form className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Nom complet <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="jean.dupont@email.fr"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Téléphone <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="06 00 00 00 00"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                    Type de demande
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                {isSOS && (
                  <div className="animate-[fadeInUp_0.25s_ease-out] rounded-lg bg-surface p-4 sm:col-span-2">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        <IconClock className="h-4 w-4" />
                        Délai moyen d’intervention : 1h
                      </p>
                      <a
                        href="tel:+33759124748"
                        className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
                      >
                        <IconPhone className="h-4 w-4" />
                        Appeler pour un dépannage
                      </a>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="breakdownType" className="block text-sm font-medium text-slate-700">
                        Type de panne <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="breakdownType"
                        name="breakdownType"
                        required
                        value={form.breakdownType}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        {breakdownTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {isVTC && (
                  <div className="grid animate-[fadeInUp_0.25s_ease-out] grid-cols-1 gap-5 sm:col-span-2 sm:grid-cols-2">
                    <div>
                      <label htmlFor="pickupAddress" className="block text-sm font-medium text-slate-700">
                        Adresse de départ <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="pickupAddress"
                        name="pickupAddress"
                        type="text"
                        required
                        value={form.pickupAddress}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="Adresse, ville"
                      />
                    </div>
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-slate-700">
                        Destination <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="destination"
                        name="destination"
                        type="text"
                        required
                        value={form.destination}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="Adresse, ville, gare, aéroport..."
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-slate-700">
                        Date souhaitée
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-slate-700">
                        Heure souhaitée
                      </label>
                      <input
                        id="time"
                        name="time"
                        type="time"
                        value={form.time}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="passengers" className="block text-sm font-medium text-slate-700">
                        Nombre de passagers
                      </label>
                      <input
                        id="passengers"
                        name="passengers"
                        type="number"
                        min="1"
                        max="8"
                        value={form.passengers}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="1"
                      />
                    </div>
                  </div>
                )}

                {isNettoyageAuto && (
                  <div className="grid animate-[fadeInUp_0.25s_ease-out] grid-cols-1 gap-5 sm:col-span-2 sm:grid-cols-2">
                    <div>
                      <label htmlFor="vehicleType" className="block text-sm font-medium text-slate-700">
                        Type de véhicule
                      </label>
                      <select
                        id="vehicleType"
                        name="vehicleType"
                        value={form.vehicleType}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        {vehicleTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700">
                        Prestation souhaitée
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        {carWashServices.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    {isVTC || isNettoyageAuto ? 'Message complémentaire' : 'Message'}{' '}
                    {!isVTC && !isNettoyageAuto && <span className="text-red-600">*</span>}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required={!isVTC && !isNettoyageAuto}
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 block w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Décrivez votre besoin en quelques mots..."
                  />
                </div>

                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    aria-busy={status === 'sending'}
                    className="w-full cursor-pointer rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-ink shadow-sm transition-colors duration-200 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
