import LegalLayout, { LegalSection } from '../components/LegalLayout.jsx'

export default function Confidentialite() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      updated="août 2026"
      seo={{
        title: 'Politique de confidentialité',
        description:
          'Politique de confidentialité et protection des données personnelles (RGPD) du site Nantes Services.',
        path: '/confidentialite',
      }}
    >
      <LegalSection title="1. Objet">
        <p>
          La présente Politique de confidentialité a pour objectif d’informer les utilisateurs du site Nantes
          Services sur la manière dont leurs données personnelles sont collectées, utilisées et protégées lorsqu’ils
          utilisent le formulaire de contact ou de demande de devis.
        </p>
        <p>
          Nantes Services accorde une importance particulière à la protection des données personnelles et s’engage
          à traiter celles-ci conformément au Règlement Général sur la Protection des Données (RGPD) et à la
          réglementation française applicable.
        </p>
      </LegalSection>

      <LegalSection title="2. Responsable du traitement">
        <p>Le responsable du traitement des données personnelles collectées via le site est&nbsp;:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Nantes Services</li>
          <li>Entrepreneur individuel&nbsp;: Riad Fatimi</li>
          <li>SIRET&nbsp;: 884 635 700 018</li>
        </ul>
        <p>
          Pour toute question relative à la protection des données personnelles, l’utilisateur peut contacter
          Nantes Services à l’adresse électronique indiquée sur le site.
        </p>
        <p>
          Les coordonnées professionnelles complètes du responsable du traitement sont disponibles dans la page{' '}
          <a href="/mentions-legales" className="text-primary underline">
            Mentions légales
          </a>{' '}
          du site.
        </p>
      </LegalSection>

      <LegalSection title="3. Données collectées">
        <p>
          Le site ne collecte des données personnelles que lorsque l’utilisateur choisit volontairement de remplir
          et d’envoyer le formulaire de contact ou de demande de devis.
        </p>
        <p>Selon la nature de la demande, les données susceptibles d’être collectées sont&nbsp;:</p>

        <div>
          <h3 className="font-heading text-base font-semibold text-slate-900">Données générales</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>nom&nbsp;;</li>
            <li>adresse e-mail&nbsp;;</li>
            <li>numéro de téléphone&nbsp;;</li>
            <li>contenu du message.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-slate-900">Demande SOS Dépannage</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>type de panne ou problème rencontré.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-slate-900">Demande VTC – Chauffeur privé</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>adresse ou lieu de départ&nbsp;;</li>
            <li>destination&nbsp;;</li>
            <li>date souhaitée&nbsp;;</li>
            <li>heure souhaitée&nbsp;;</li>
            <li>nombre de passagers.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-slate-900">Demande de nettoyage automobile</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>type de véhicule&nbsp;;</li>
            <li>prestation souhaitée.</li>
          </ul>
        </div>

        <p>Seules les informations nécessaires au traitement de la demande sont demandées.</p>
        <p>
          L’utilisateur est invité à ne pas communiquer, dans le champ libre du formulaire, de données personnelles
          sensibles ou d’informations qui ne seraient pas nécessaires au traitement de sa demande.
        </p>
      </LegalSection>

      <LegalSection title="4. Finalités du traitement">
        <p>Les données collectées sont utilisées exclusivement pour&nbsp;:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>répondre aux demandes de contact&nbsp;;</li>
          <li>répondre aux demandes de devis&nbsp;;</li>
          <li>comprendre la nature de la prestation demandée&nbsp;;</li>
          <li>organiser, lorsque cela est nécessaire, un échange avec l’utilisateur&nbsp;;</li>
          <li>préparer une éventuelle prestation à la suite d’une demande&nbsp;;</li>
          <li>assurer le suivi des échanges avec les prospects et clients.</li>
        </ul>
        <p>Les données ne sont pas utilisées à des fins de profilage ou de prise de décision automatisée.</p>
      </LegalSection>

      <LegalSection title="5. Base légale">
        <p>
          Le traitement des données transmises volontairement via le formulaire repose principalement sur les
          mesures précontractuelles prises à la demande de l’utilisateur lorsqu’il sollicite un renseignement, un
          devis ou une prestation.
        </p>
        <p>
          Lorsque le traitement repose sur une autre base légale prévue par le RGPD, celle-ci est appliquée
          conformément aux conditions légales correspondantes.
        </p>
      </LegalSection>

      <LegalSection title="6. Transmission des données">
        <p>Le site fonctionne sans serveur applicatif ni base de données propre à Nantes Services.</p>
        <p>
          Lorsqu’un utilisateur envoie le formulaire, les informations sont transmises depuis son navigateur au
          service tiers Web3Forms, utilisé pour assurer la transmission de la demande vers la messagerie
          professionnelle de Nantes Services.
        </p>
        <p>
          Les données peuvent ainsi être traitées par les prestataires techniques nécessaires au fonctionnement du
          site et à l’acheminement des demandes.
        </p>
        <p>
          Nantes Services ne vend pas les données personnelles des utilisateurs et ne les transmet pas à des tiers
          à des fins commerciales indépendantes de la demande effectuée.
        </p>
      </LegalSection>

      <LegalSection title="7. Hébergement et services techniques">
        <p>
          Le site est une application web développée avec React et déployée sur l’infrastructure d’hébergement
          utilisée pour sa mise en ligne.
        </p>
        <p>
          Le fonctionnement du formulaire repose sur un service tiers spécialisé dans la transmission des
          formulaires vers une adresse électronique professionnelle.
        </p>
        <p>
          Certains prestataires techniques utilisés pour le fonctionnement du site peuvent être établis ou traiter
          certaines données en dehors de l’Union européenne.
        </p>
        <p>
          Lorsque des transferts de données hors de l’Union européenne sont réalisés, ceux-ci doivent être encadrés
          conformément aux exigences du RGPD et aux garanties appropriées applicables. La CNIL recommande notamment
          de vérifier les lieux de traitement, les contrats conclus avec les prestataires et le mécanisme juridique
          encadrant les transferts.
        </p>
      </LegalSection>

      <LegalSection title="8. Durée de conservation">
        <p>
          Nantes Services conserve les données personnelles uniquement pendant la durée nécessaire aux finalités
          pour lesquelles elles ont été collectées.
        </p>
        <p>
          Les données transmises dans le cadre d’une simple demande de contact ou de devis sont conservées pendant
          le temps nécessaire au traitement de la demande et au suivi des échanges.
        </p>
        <p>
          Lorsqu’une demande n’aboutit à aucune relation commerciale, les données sont supprimées ou archivées
          conformément aux durées applicables aux données de prospects.
        </p>
        <p>
          Lorsqu’une demande aboutit à une prestation, certaines données peuvent être conservées pendant les durées
          nécessaires au respect des obligations légales, comptables, fiscales ou à la gestion de la relation
          commerciale.
        </p>
        <p>Les données personnelles ne sont pas conservées indéfiniment.</p>
      </LegalSection>

      <LegalSection title="9. Sécurité">
        <p>
          Nantes Services met en œuvre des mesures techniques et organisationnelles raisonnables afin de protéger
          les données personnelles contre les accès non autorisés, la perte, l’altération ou la divulgation.
        </p>
        <p>
          L’accès aux demandes transmises est limité aux personnes qui en ont besoin dans le cadre de l’activité de
          Nantes Services.
        </p>
        <p>Toutefois, aucun système informatique ou moyen de transmission sur Internet ne peut garantir une sécurité absolue.</p>
      </LegalSection>

      <LegalSection title="10. Cookies et outils de suivi">
        <p>
          Le site n’utilise pas, à la connaissance de Nantes Services, de cookies publicitaires, de solution de
          suivi comportemental ou de système de profilage destiné à suivre les utilisateurs à des fins commerciales.
        </p>
        <p>Aucun compte utilisateur n’est créé sur le site.</p>
        <p>
          Si de nouveaux outils nécessitant la collecte de données personnelles ou le dépôt de cookies sont
          ultérieurement intégrés au site, la présente Politique de confidentialité pourra être mise à jour et,
          lorsque cela est nécessaire, un mécanisme de consentement sera mis en place.
        </p>
      </LegalSection>

      <LegalSection title="11. Droits des utilisateurs">
        <p>
          Conformément à la réglementation applicable, chaque personne dispose, selon les conditions prévues par le
          RGPD, de droits sur ses données personnelles, notamment&nbsp;:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>droit d’accès&nbsp;;</li>
          <li>droit de rectification&nbsp;;</li>
          <li>droit d’effacement&nbsp;;</li>
          <li>droit à la limitation du traitement&nbsp;;</li>
          <li>droit d’opposition lorsque celui-ci est applicable&nbsp;;</li>
          <li>droit à la portabilité dans les cas prévus par la réglementation&nbsp;;</li>
          <li>droit de retirer son consentement lorsque le traitement repose sur celui-ci.</li>
        </ul>
        <p>
          Pour exercer ses droits, l’utilisateur peut contacter Nantes Services à l’adresse électronique
          professionnelle indiquée sur le site.
        </p>
        <p>
          Une demande peut être accompagnée d’informations permettant de vérifier raisonnablement l’identité du
          demandeur lorsque cela est nécessaire à la protection des données.
        </p>
        <p>
          La CNIL rappelle notamment que les personnes concernées doivent être informées de leurs droits et des
          modalités permettant de les exercer.
        </p>
      </LegalSection>

      <LegalSection title="12. Réclamation auprès de la CNIL">
        <p>
          Si un utilisateur estime que le traitement de ses données personnelles n’est pas conforme à la
          réglementation applicable, il peut contacter Nantes Services afin de rechercher une solution.
        </p>
        <p>
          Il dispose également du droit d’introduire une réclamation auprès de la Commission Nationale de
          l’Informatique et des Libertés (CNIL).
        </p>
      </LegalSection>

      <LegalSection title="13. Données concernant les mineurs">
        <p>Le site n’a pas vocation à collecter spécifiquement des données concernant des mineurs.</p>
        <p>
          Les utilisateurs sont invités à ne pas transmettre de données personnelles concernant un tiers, notamment
          un mineur, lorsqu’elles ne sont pas nécessaires au traitement de leur demande.
        </p>
      </LegalSection>

      <LegalSection title="14. Modification de la politique de confidentialité">
        <p>
          Nantes Services peut modifier la présente Politique de confidentialité afin de tenir compte de
          l’évolution du site, de ses services, de ses outils techniques ou de la réglementation applicable.
        </p>
        <p>La version publiée sur le site est la version en vigueur.</p>
      </LegalSection>

      <LegalSection title="15. Contact">
        <p>
          Pour toute question concernant la présente Politique de confidentialité ou le traitement des données
          personnelles, l’utilisateur peut contacter Nantes Services via les coordonnées professionnelles indiquées
          sur le site.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
