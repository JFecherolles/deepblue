import { Metadata } from "next";
import { notFound } from "next/navigation";
import { divingSpots } from "@/lib/data/spots";
import { SpotDetailContent } from "@/components/spots/spot-detail-content";

interface SpotPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: SpotPageProps): Promise<Metadata> {
  const { id } = await params;
  const spot = divingSpots.find((s) => s.id === id);

  if (!spot) {
    return {
      title: "Spot non trouvé",
    };
  }

  return {
    title: `${spot.name} | Plongée ${spot.country}`,
    description: spot.description,
    keywords: [
      `plongée ${spot.name}`,
      `plongée ${spot.country}`,
      `diving ${spot.name}`,
      spot.difficulty,
      ...spot.marineLife,
    ],
    openGraph: {
      title: `${spot.name} - Spot de Plongée`,
      description: spot.description,
      images: [spot.image],
    },
  };
}

export async function generateStaticParams() {
  return divingSpots.map((spot) => ({
    id: spot.id,
  }));
}

export default async function SpotPage({ params }: SpotPageProps) {
  const { id } = await params;
  const spot = divingSpots.find((s) => s.id === id);

  if (!spot) {
    notFound();
  }

  const relatedSpots = divingSpots
    .filter((s) => s.id !== spot.id && s.region === spot.region)
    .slice(0, 3);

  return <SpotDetailContent spot={spot} relatedSpots={relatedSpots} />;
}
