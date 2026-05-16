import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles du site DeepBlue Diving.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-16">
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">
            Politique de confidentialité
          </h1>
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p>
              <em>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</em>
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Collecte des données
              </h2>
              <p>
                Nous collectons les informations suivantes lorsque vous utilisez
                notre site :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Données de navigation (pages visitées, durée, appareil utilisé)
                  via Google Analytics
                </li>
                <li>
                  Adresse email si vous vous inscrivez à notre newsletter
                </li>
                <li>
                  Informations saisies dans le formulaire de contact (nom, email,
                  message)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Utilisation des cookies
              </h2>
              <p>Ce site utilise des cookies pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong className="text-foreground">
                    Google Analytics :
                  </strong>{" "}
                  Mesure d&apos;audience et statistiques de navigation
                </li>
                <li>
                  <strong className="text-foreground">Google AdSense :</strong>{" "}
                  Personnalisation des publicités affichées
                </li>
                <li>
                  <strong className="text-foreground">
                    Cookies fonctionnels :
                  </strong>{" "}
                  Mémorisation de vos préférences de navigation
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Liens d&apos;affiliation
              </h2>
              <p>
                Lorsque vous cliquez sur un lien d&apos;affiliation Amazon, un
                cookie de suivi est déposé par Amazon pour attribuer la
                commission. Ce cookie a une durée de vie de 24 heures. DeepBlue
                Diving ne collecte aucune donnée personnelle via ces liens.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Protection des données
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d&apos;un droit d&apos;accès, de
                rectification, de suppression et de portabilité de vos données
                personnelles. Pour exercer ces droits, contactez-nous à :
                contact@deepblue-diving.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Partage des données
              </h2>
              <p>
                Vos données ne sont jamais vendues à des tiers. Elles peuvent être
                partagées avec :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Google (Analytics et AdSense) pour le suivi statistique</li>
                <li>
                  Notre service d&apos;emailing pour la gestion de la newsletter
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Contact
              </h2>
              <p>
                Pour toute question relative à cette politique de confidentialité,
                contactez-nous à : contact@deepblue-diving.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
