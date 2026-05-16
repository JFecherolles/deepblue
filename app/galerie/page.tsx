import type { Metadata } from "next";
import { GalleryPageContent } from "@/components/gallery/gallery-page-content";

export const metadata: Metadata = {
  title: "Galerie Photo & Vidéo Sous-Marine - Images de Plongée",
  description:
    "Explorez notre galerie de photographies et vidéos sous-marines époustouflantes : récifs coralliens, requins, épaves, vie marine et paysages des fonds marins.",
  openGraph: {
    title: "Galerie Photo Sous-Marine",
    description:
      "Les plus belles images du monde sous-marin capturées par nos photographes experts.",
  },
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
