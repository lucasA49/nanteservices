import LegalLayout, { LegalSection } from '../components/LegalLayout.jsx'

export default function CGU() {
  return (
    <LegalLayout title="Conditions générales d’utilisation" updated="25 août 2026">
      <LegalSection title="1. Objet">
        <p>
          Les présentes conditions générales d’utilisation (CGU) régissent l’accès et l’utilisation du site Nantes
          Services. En consultant ce site, vous acceptez sans réserve les présentes conditions.
        </p>
      </LegalSection>

      <LegalSection title="2. Accès au site">
        <p>
          Le site est accessible gratuitement à tout utilisateur disposant d’un accès à internet. Nantes Services
          met tout en œuvre pour assurer l’accès au site, sans obligation de résultat, et peut interrompre le site
          pour maintenance sans préavis.
        </p>
      </LegalSection>

      <LegalSection title="3. Services présentés">
        <p>
          Les prestations décrites sur ce site (ménage, entretien des espaces verts, petits travaux, déménagement,
          conciergerie, mécanique auto & moto) sont présentées à titre indicatif. Un devis est établi avant toute
          intervention et précise le détail, le tarif et les conditions de la prestation.
        </p>
      </LegalSection>

      <LegalSection title="4. Formulaire de contact">
        <p>
          L’utilisation du formulaire de contact implique l’exactitude des informations fournies. Le traitement des
          données saisies est décrit dans notre{' '}
          <a href="/confidentialite" className="text-primary underline">
            politique de confidentialité
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="5. Propriété intellectuelle">
        <p>
          Les contenus du site (textes, logo, éléments graphiques) sont protégés au titre du droit d’auteur. Toute
          reproduction sans autorisation préalable est interdite. Voir nos{' '}
          <a href="/mentions-legales" className="text-primary underline">
            mentions légales
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Droit applicable">
        <p>
          Les présentes CGU sont soumises au droit français. Tout litige relatif à leur interprétation ou leur
          exécution relève de la compétence des tribunaux français.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
