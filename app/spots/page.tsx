import { Metadata } from "next";
import { SpotsPageContent } from "@/components/spots/spots-page-content";

export const metadata: Metadata = {
  title: "Spots de Plongée | Les Meilleurs Sites au Monde",
  description:
    "Explorez notre carte interactive des 50+ meilleurs spots de plongée dans le monde. Filtrez par région, difficulté et conditions pour trouver votre destination idéale.",
  keywords: [
    "spots plongée",
    "sites plongée",
    "destinations plongée",
    "carte plongée",
    "Maldives plongée",
    "Mer Rouge plongée",
    "Raja Ampat",
    "Grande Barrière de Corail",
  ],
  openGraph: {
    title: "Spots de Plongée | Les Meilleurs Sites au Monde",
    description:
      "Explorez notre carte interactive des 50+ meilleurs spots de plongée dans le monde.",
    images: ["/og-spots.jpg"],
  },
};

export default function SpotsPage() {
  return <SpotsPageContent />;
}
