import type { Metadata } from "next";
import { ConditionsPageContent } from "@/components/conditions/conditions-page-content";

export const metadata: Metadata = {
  title: "Conditions de Plongée - Météo Marine, Température & Visibilité",
  description:
    "Consultez les conditions de plongée en temps réel : température de l'eau, visibilité, courants, météo marine et meilleure période pour chaque spot.",
  openGraph: {
    title: "Conditions de Plongée en Temps Réel",
    description:
      "Température de l'eau, visibilité, courants et météo marine pour les meilleurs spots de plongée du monde.",
  },
};

export default function ConditionsPage() {
  return <ConditionsPageContent />;
}
