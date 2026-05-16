import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/contact-page-content";

export const metadata: Metadata = {
  title: "Contact - DeepBlue Diving",
  description:
    "Contactez l'équipe DeepBlue Diving pour toute question sur la plongée, nos guides, partenariats ou suggestions de contenu.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
