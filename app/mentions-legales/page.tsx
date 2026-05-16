import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site DeepBlue Diving.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-16">
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Éditeur du site
              </h2>
              <p>
                Le site deepblue-diving.com est édité par DeepBlue Diving, société
                enregistrée en France.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Raison sociale : DeepBlue Diving SAS</li>
                <li>Siège social : Marseille, France</li>
                <li>Email : contact@deepblue-diving.com</li>
                <li>Directeur de la publication : Marine Dubois</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Hébergement
              </h2>
              <p>
                Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, vidéos,
                graphismes, logo, icônes) est protégé par le droit d&apos;auteur.
                Toute reproduction, même partielle, est soumise à autorisation
                préalable de l&apos;éditeur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Liens d&apos;affiliation
              </h2>
              <p>
                Ce site participe au Programme Partenaires d&apos;Amazon EU, un
                programme d&apos;affiliation conçu pour permettre aux sites de
                percevoir une rémunération grâce à la création de liens vers
                Amazon.fr. Les liens vers Amazon sont des liens affiliés et nous
                percevons une commission sur les achats effectués via ces liens,
                sans surcoût pour vous.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Publicité
              </h2>
              <p>
                Ce site utilise Google AdSense pour afficher des publicités
                pertinentes. Google peut utiliser des cookies pour personnaliser
                les annonces affichées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Limitation de responsabilité
              </h2>
              <p>
                Les informations fournies sur ce site le sont à titre indicatif.
                La plongée sous-marine est une activité à risques. DeepBlue Diving
                ne saurait être tenu responsable de tout accident survenu lors
                d&apos;activités de plongée. Consultez toujours un professionnel
                certifié avant de plonger.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
