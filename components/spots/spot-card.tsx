"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Thermometer, Eye, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { DivingSpot } from "@/lib/data/spots";

interface SpotCardProps {
  spot: DivingSpot;
  index: number;
}

export function SpotCard({ spot, index }: SpotCardProps) {
  const difficultyColors = {
    Débutant: "bg-green-500/10 text-green-500 border-green-500/30",
    Intermédiaire: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    Avancé: "bg-orange-500/10 text-orange-500 border-orange-500/30",
    Expert: "bg-red-500/10 text-red-500 border-red-500/30",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.5) }}
      className="group"
    >
      <Link href={`/spots/${spot.id}`}>
        <div className="relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-44 overflow-hidden">
            <Image
              src={spot.image}
              alt={spot.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            <Badge
              variant="outline"
              className={`absolute top-3 left-3 ${difficultyColors[spot.difficulty]}`}
            >
              {spot.difficulty}
            </Badge>
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md">
              <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
              <span className="text-sm font-medium">{spot.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({spot.reviewCount})
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="truncate">
                {spot.location}, {spot.country}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              {spot.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
              {spot.description}
            </p>

            {/* Stats */}
            <div className="flex items-center justify-between text-sm pt-3 border-t border-border/50">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Thermometer className="h-3.5 w-3.5 text-primary" />
                  <span>
                    {spot.waterTemp.min}-{spot.waterTemp.max}°C
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Eye className="h-3.5 w-3.5 text-primary" />
                  <span>{spot.avgVisibility}m</span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
