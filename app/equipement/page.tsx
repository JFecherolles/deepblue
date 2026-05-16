import type { Metadata } from "next";
import { EquipmentPageContent } from "@/components/equipment/equipment-page-content";

export const metadata: Metadata = {
  title: "Comparatif Matériel de Plongée 2025 - Masques, Palmes, Détendeurs",
  description:
    "Comparez les meilleurs équipements de plongée sous-marine : masques, palmes, gilets, détendeurs, ordinateurs et caméras. Avis experts et liens Amazon.",
  openGraph: {
    title: "Comparatif Matériel de Plongée 2025",
    description:
      "Notre sélection des meilleurs équipements de plongée testés et approuvés par des professionnels.",
  },
};

export default function EquipmentPage() {
  return <EquipmentPageContent />;
}
