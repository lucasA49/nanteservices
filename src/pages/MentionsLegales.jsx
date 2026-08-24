import LegalLayout, { LegalSection } from '../components/LegalLayout.jsx'

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" updated="25 août 2026">
      <LegalSection title="1. Éditeur du site">
        <p>Le site Nantes Services est édité par&nbsp;:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Nantes Services — [forme juridique à compléter]</li>
          <li>Siège social&nbsp;: 12 Rue de la Paix, 44000 Nantes</li>
          <li>SIRET&nbsp;: [à compléter]</li>
          <li>Directeur de la publication&nbsp;: [à compléter]</li>
          <li>
            Contact&nbsp;: <a href="mailto:nantes.services44@gmail.com" className="text-primary underline">nantes.services44@gmail.com</a>
            {' '}— 07 59 12 47 48
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Hébergement">
        <p>Le site est hébergé par&nbsp;:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Vercel Inc.</li>
          <li>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
          <li>
            <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-primary underline">
              vercel.com
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Propriété intellectuelle">
        <p>
          L’ensemble des contenus présents sur ce site (textes, logo, mise en page, éléments graphiques) est la
          propriété de Nantes Services, sauf mention contraire. Toute reproduction, représentation ou diffusion,
          totale ou partielle, sans autorisation préalable est interdite.
        </p>
      </LegalSection>

      <LegalSection title="4. Données personnelles">
        <p>
          Les informations collectées via le formulaire de contact font l’objet d’un traitement décrit dans notre{' '}
          <a href="/confidentialite" className="text-primary underline">
            politique de confidentialité
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="5. Limitation de responsabilité">
        <p>
          Nantes Services s’efforce d’assurer l’exactitude des informations publiées sur ce site, sans pouvoir en
          garantir l’exhaustivité. Les tarifs et prestations présentés sont indicatifs et confirmés lors de
          l’établissement d’un devis.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
