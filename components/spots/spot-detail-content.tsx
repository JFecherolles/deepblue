"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  Thermometer,
  Eye,
  ArrowDown,
  Calendar,
  Fish,
  ArrowLeft,
  Share2,
  Bookmark,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdBanner, AdInArticle } from "@/components/ads/ad-banner";
import { SpotCard } from "./spot-card";
import type { DivingSpot } from "@/lib/data/spots";

interface SpotDetailContentProps {
  spot: DivingSpot;
  relatedSpots: DivingSpot[];
}

export function SpotDetailContent({
  spot,
  relatedSpots,
}: SpotDetailContentProps) {
  const difficultyColors = {
    Débutant: "bg-green-500/10 text-green-500 border-green-500/30",
    Intermédiaire: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    Avancé: "bg-orange-500/10 text-orange-500 border-orange-500/30",
    Expert: "bg-red-500/10 text-red-500 border-red-500/30",
  };

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-card/50 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/spots"
              className="hover:text-foreground transition-colors"
            >
              Spots
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{spot.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[50vh] min-h-[400px]">
          <Image
            src={spot.image}
            alt={spot.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge
                  variant="outline"
                  className={difficultyColors[spot.difficulty]}
                >
                  {spot.difficulty}
                </Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  {spot.region}
                </Badge>
                {spot.featured && (
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/30">
                    Spot vedette
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                {spot.name}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>
                    {spot.location}, {spot.country}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-medium text-foreground">
                    {spot.rating}
                  </span>
                  <span>({spot.reviewCount} avis)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Actions */}
              <div className="flex items-center gap-3">
                <Link href="/spots">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Retour aux spots
                  </Button>
                </Link>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Partager
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Bookmark className="h-4 w-4" />
                  Sauvegarder
                </Button>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  À propos de ce spot
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {spot.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Points forts</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {spot.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/50"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <AdInArticle position="spot-detail-mid" />

              {/* Marine Life */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Fish className="h-6 w-6 text-primary" />
                  Vie marine
                </h2>
                <div className="flex flex-wrap gap-2">
                  {spot.marineLife.map((animal, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm py-1.5 px-3"
                    >
                      {animal}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Conditions card */}
              <div className="bg-card rounded-xl border border-border/50 p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">
                  Conditions de plongée
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Thermometer className="h-5 w-5 text-primary" />
                      <span>Température eau</span>
                    </div>
                    <span className="font-semibold">
                      {spot.waterTemp.min}-{spot.waterTemp.max}°C
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Eye className="h-5 w-5 text-primary" />
                      <span>Visibilité moyenne</span>
                    </div>
                    <span className="font-semibold">{spot.avgVisibility}m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <ArrowDown className="h-5 w-5 text-primary" />
                      <span>Profondeur max</span>
                    </div>
                    <span className="font-semibold">{spot.maxDepth}m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>Meilleure saison</span>
                    </div>
                    <span className="font-semibold text-right text-sm">
                      {spot.bestSeason}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Voir les séjours plongée
                  </Button>
                </div>
              </div>

              {/* Ad */}
              <div className="bg-card/50 rounded-xl border border-border/50 p-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Espace publicitaire
                </p>
              </div>
            </div>
          </div>

          {/* Related spots */}
          {relatedSpots.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6">
                Spots similaires dans la région
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedSpots.map((relatedSpot, index) => (
                  <SpotCard key={relatedSpot.id} spot={relatedSpot} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <AdBanner position="spot-detail-bottom" />
    </div>
  );
}
