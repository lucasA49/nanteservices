import LegalLayout, { LegalSection } from '../components/LegalLayout.jsx'

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" updated="25 août 2026">
      <LegalSection title="1. Responsable du traitement">
        <p>
          Nantes Services, 12 Rue de la Paix, 44000 Nantes, est responsable du traitement des données collectées sur
          ce site.
        </p>
      </LegalSection>

      <LegalSection title="2. Données collectées">
        <p>
          Le formulaire de contact collecte les données que vous saisissez volontairement&nbsp;: nom, email,
          téléphone, sujet et message. Aucune autre donnée personnelle n’est collectée sur ce site, et aucun cookie
          de suivi ou de mesure d’audience n’est utilisé.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalité et base légale">
        <p>
          Ces données sont utilisées uniquement pour répondre à votre demande de contact ou de devis. Le traitement
          repose sur votre consentement, exprimé en soumettant le formulaire.
        </p>
      </LegalSection>

      <LegalSection title="4. Destinataires des données">
        <p>
          Les messages sont transmis directement à Nantes Services par l’intermédiaire du prestataire technique{' '}
          <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="text-primary underline">
            Web3Forms
          </a>
          , qui achemine le formulaire vers notre boîte email sans conserver ni exploiter les données à d’autres
          fins. Vos données ne sont ni vendues, ni cédées à des tiers.
        </p>
      </LegalSection>

      <LegalSection title="5. Durée de conservation">
        <p>
          Les données transmises via le formulaire sont conservées le temps nécessaire au traitement de votre
          demande, puis supprimées.
        </p>
      </LegalSection>

      <LegalSection title="6. Vos droits">
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès,
          de rectification, d’effacement et d’opposition concernant vos données. Pour l’exercer, contactez-nous à{' '}
          <a href="mailto:nantes.services44@gmail.com" className="text-primary underline">
            nantes.services44@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
