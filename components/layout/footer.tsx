import Link from "next/link";
import {
  Waves,
  MapPin,
  Compass,
  BookOpen,
  Mail,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

const navigation = {
  explorer: [
    { name: "Spots de plongée", href: "/spots" },
    { name: "Carte interactive", href: "/spots#carte" },
    { name: "Conditions météo", href: "/conditions" },
    { name: "Galerie photo", href: "/galerie" },
  ],
  equipement: [
    { name: "Comparatif matériel", href: "/equipement" },
    { name: "Masques", href: "/equipement?category=mask" },
    { name: "Ordinateurs", href: "/equipement?category=computer" },
    { name: "Combinaisons", href: "/equipement?category=wetsuit" },
  ],
  ressources: [
    { name: "Blog", href: "/blog" },
    { name: "Guide débutant", href: "/blog/guide-complet-debutant-plongee" },
    { name: "Formation", href: "/blog?category=Formation" },
    { name: "Sécurité", href: "/blog?category=Technique" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/politique-confidentialite" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ],
};

const social = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "Facebook", href: "#", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Waves className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">
                Deep<span className="text-primary">Blue</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Votre guide complet pour explorer les fonds marins. Spots,
              équipement, conseils et inspiration pour vos aventures
              sous-marines.
            </p>
            <div className="flex items-center gap-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Explorer
            </h3>
            <ul className="space-y-3">
              {navigation.explorer.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Compass className="h-4 w-4 text-primary" />
              Équipement
            </h3>
            <ul className="space-y-3">
              {navigation.equipement.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              Ressources
            </h3>
            <ul className="space-y-3">
              {navigation.ressources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              Informations
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AdSense Placeholder */}
        <div className="mt-12 p-4 bg-secondary/50 rounded-lg border border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Espace publicitaire - Google AdSense
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DeepBlue Diving. Tous droits
              réservés.
            </p>
            <p className="text-xs text-muted-foreground">
              Ce site participe au Programme Partenaires d&apos;Amazon EU, un
              programme d&apos;affiliation permettant de percevoir une
              rémunération.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
