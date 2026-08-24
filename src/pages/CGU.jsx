import LegalLayout, { LegalSection } from '../components/LegalLayout.jsx'

export default function CGU() {
  return (
    <LegalLayout
      title="Conditions générales d’utilisation"
      updated="25 août 2026"
      seo={{
        title: 'Conditions générales d’utilisation (CGU)',
        description: 'Conditions générales d’utilisation (CGU) du site Nantes Services.',
        path: '/cgu',
      }}
    >
      <LegalSection title="1. Objet">
        <p>
          Les présentes Conditions Générales d’Utilisation (CGU) ont pour objet de définir les conditions d’accès et
          d’utilisation du site internet de Nantes Services.
        </p>
        <p>
          Le site est un site vitrine destiné à présenter les activités et services proposés par Nantes Services et
          à permettre aux particuliers et aux professionnels de prendre contact avec l’entreprise ou d’effectuer une
          demande de devis.
        </p>
      </LegalSection>

      <LegalSection title="2. Présentation des services">
        <p>Nantes Services présente notamment les services suivants&nbsp;:</p>

        <div>
          <h3 className="font-heading text-base font-semibold text-slate-900">Nettoyage automobile</h3>
          <p className="mt-1">Prestations de nettoyage et d’entretien esthétique de véhicules.</p>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-slate-900">SOS Dépannage</h3>
          <p className="mt-1">Services d’assistance en cas de&nbsp;:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>panne de carburant&nbsp;;</li>
            <li>panne de batterie&nbsp;;</li>
            <li>crevaison.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-slate-900">VTC – Chauffeur privé</h3>
          <p className="mt-1">Prestations de transport de personnes, notamment&nbsp;:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>déplacements professionnels&nbsp;;</li>
            <li>transferts vers les gares et aéroports&nbsp;;</li>
            <li>trajets longue distance.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-slate-900">Autres services</h3>
          <p className="mt-1">Nantes Services propose également&nbsp;:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>mécanique automobile et moto&nbsp;;</li>
            <li>ménage et nettoyage&nbsp;;</li>
            <li>entretien des espaces verts&nbsp;;</li>
            <li>petits travaux et bricolage&nbsp;;</li>
            <li>déménagement&nbsp;;</li>
            <li>conciergerie.</li>
          </ul>
        </div>

        <p>
          Les prestations effectivement proposées peuvent être soumises à des conditions particulières selon leur
          nature, leur localisation, leur disponibilité et les obligations légales ou réglementaires applicables.
        </p>
      </LegalSection>

      <LegalSection title="3. Demandes de contact et de devis">
        <p>Le site permet à l’utilisateur d’adresser une demande de contact ou de devis.</p>
        <p>
          Les informations communiquées doivent être exactes, à jour et suffisamment précises pour permettre à
          Nantes Services de traiter la demande.
        </p>
        <p>
          L’envoi d’une demande via le formulaire de contact ne constitue pas une réservation ferme, une commande ou
          une acceptation automatique d’une prestation.
        </p>
        <p>
          Toute prestation fait l’objet d’un échange préalable avec Nantes Services et, lorsque cela est nécessaire,
          d’une confirmation des conditions, du prix, de la disponibilité et des modalités d’intervention.
        </p>
      </LegalSection>

      <LegalSection title="4. Disponibilité des prestations">
        <p>
          Les prestations sont proposées sous réserve de disponibilité et de la possibilité pour Nantes Services
          d’intervenir dans la zone géographique concernée.
        </p>
        <p>
          Les délais d’intervention ou de réponse communiqués sur le site sont indicatifs et peuvent varier selon la
          situation, la localisation, les conditions de circulation, la disponibilité des intervenants et la nature
          de la demande.
        </p>
      </LegalSection>

      <LegalSection title="5. Activités soumises à réglementation">
        <p>
          Certaines prestations présentées sur le site peuvent être soumises à des conditions, qualifications,
          autorisations, assurances ou réglementations particulières.
        </p>
        <p>
          Les prestations concernées sont réalisées dans le respect des obligations légales et réglementaires
          applicables à leur nature.
        </p>
      </LegalSection>

      <LegalSection title="6. Utilisation du site">
        <p>
          L’utilisateur s’engage à utiliser le site de manière loyale et conforme aux lois et règlements en vigueur.
        </p>
        <p>Il est notamment interdit d’utiliser le site&nbsp;:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>à des fins frauduleuses ou illicites&nbsp;;</li>
          <li>pour transmettre volontairement des informations fausses ou trompeuses&nbsp;;</li>
          <li>pour perturber ou tenter de perturber le fonctionnement du site&nbsp;;</li>
          <li>pour porter atteinte aux droits de Nantes Services ou de tiers.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Informations présentes sur le site">
        <p>
          Nantes Services s’efforce de fournir des informations fiables et actualisées concernant ses activités et
          ses services.
        </p>
        <p>
          Toutefois, les informations présentées sur le site sont susceptibles d’évoluer et ne constituent pas, à
          elles seules, un engagement contractuel concernant la disponibilité, le prix ou les modalités d’une
          prestation.
        </p>
        <p>
          Les informations définitives sont communiquées lors de l’échange avec Nantes Services et, lorsque cela est
          nécessaire, dans le cadre d’un devis ou d’une confirmation de prestation.
        </p>
      </LegalSection>

      <LegalSection title="8. Propriété intellectuelle">
        <p>
          L’ensemble des éléments présents sur le site, notamment les textes, photographies, logos, illustrations,
          éléments graphiques, contenus et éléments visuels, est protégé par les dispositions applicables en matière
          de propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification, adaptation ou utilisation, totale ou partielle, des
          contenus du site sans autorisation préalable est interdite.
        </p>
      </LegalSection>

      <LegalSection title="9. Responsabilité">
        <p>
          Nantes Services ne peut être tenue responsable des dommages résultant d’une utilisation inappropriée du
          site par l’utilisateur.
        </p>
        <p>
          Nantes Services ne garantit pas que le site sera disponible de manière continue, sans interruption ou
          exempt d’erreurs.
        </p>
        <p>L’utilisateur reste responsable de son équipement, de sa connexion internet et de l’utilisation qu’il fait du site.</p>
      </LegalSection>

      <LegalSection title="10. Liens vers des sites tiers">
        <p>Le site peut éventuellement contenir des liens vers des sites ou services exploités par des tiers.</p>
        <p>
          Nantes Services n’exerce aucun contrôle sur ces sites et ne peut être tenue responsable de leur contenu,
          de leur disponibilité ou de leurs pratiques.
        </p>
      </LegalSection>

      <LegalSection title="11. Modification des CGU">
        <p>
          Nantes Services se réserve le droit de modifier les présentes CGU à tout moment afin de tenir compte de
          l’évolution du site, de ses services ou de la réglementation applicable.
        </p>
        <p>La version applicable est celle publiée sur le site au moment de l’utilisation de celui-ci.</p>
      </LegalSection>

      <LegalSection title="12. Droit applicable">
        <p>Les présentes CGU sont soumises au droit français.</p>
        <p>
          En cas de litige, les parties rechercheront en priorité une solution amiable avant toute procédure
          judiciaire, sous réserve des dispositions légales applicables.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>
          Pour toute question concernant le site ou les présentes CGU, l’utilisateur peut contacter Nantes Services
          via les coordonnées indiquées sur le site, ou consulter notre{' '}
          <a href="/confidentialite" className="text-primary underline">
            politique de confidentialité
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
