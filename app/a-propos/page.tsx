import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-page-content";

export const metadata: Metadata = {
  title: "À Propos - DeepBlue Diving, Votre Guide Plongée",
  description:
    "Découvrez l'équipe DeepBlue Diving : passionnés de plongée sous-marine, experts en équipement et explorateurs des fonds marins depuis plus de 10 ans.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
