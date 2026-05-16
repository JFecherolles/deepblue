"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Star, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { DivingSpot } from "@/lib/data/spots";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface SpotsMapProps {
  spots: DivingSpot[];
}

export function SpotsMap({ spots }: SpotsMapProps) {
  const [selectedSpot, setSelectedSpot] = useState<DivingSpot | null>(null);
  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 });

  const handleMoveEnd = (position: { coordinates: [number, number]; zoom: number }) => {
    setPosition(position);
  };

  return (
    <div className="relative w-full h-full bg-ocean-deep">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 140,
        }}
        className="w-full h-full"
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates as [number, number]}
          onMoveEnd={handleMoveEnd}
          minZoom={1}
          maxZoom={8}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="hsl(var(--secondary))"
                  stroke="hsl(var(--border))"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "hsl(var(--muted))" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {spots.map((spot) => (
            <Marker
              key={spot.id}
              coordinates={[spot.coordinates.lng, spot.coordinates.lat]}
              onClick={() => setSelectedSpot(spot)}
            >
              <g
                className="cursor-pointer"
                style={{ transform: `scale(${1 / position.zoom})` }}
              >
                <circle
                  r={8}
                  fill="hsl(var(--primary))"
                  stroke="hsl(var(--background))"
                  strokeWidth={2}
                  className="transition-all hover:r-10"
                />
                {spot.featured && (
                  <circle
                    r={12}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth={1}
                    opacity={0.5}
                  />
                )}
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Zoom controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() =>
            setPosition((prev) => ({
              ...prev,
              zoom: Math.min(prev.zoom * 1.5, 8),
            }))
          }
        >
          +
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() =>
            setPosition((prev) => ({
              ...prev,
              zoom: Math.max(prev.zoom / 1.5, 1),
            }))
          }
        >
          -
        </Button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border/50">
        <p className="text-xs text-muted-foreground mb-2">Légende</p>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span>Spot de plongée</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-primary ring-2 ring-primary/50" />
            <span>Spot vedette</span>
          </div>
        </div>
      </div>

      {/* Selected spot popup */}
      <AnimatePresence>
        {selectedSpot && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 right-4 w-80 bg-card rounded-xl border border-border/50 shadow-xl overflow-hidden"
          >
            <div className="relative h-32">
              <img
                src={selectedSpot.image}
                alt={selectedSpot.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <button
                onClick={() => setSelectedSpot(null)}
                className="absolute top-2 right-2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <Badge className="absolute bottom-2 left-2 bg-primary/90 text-primary-foreground">
                {selectedSpot.difficulty}
              </Badge>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>
                  {selectedSpot.location}, {selectedSpot.country}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">{selectedSpot.name}</h3>
              <div className="flex items-center gap-1 mb-3">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="text-sm font-medium">{selectedSpot.rating}</span>
                <span className="text-xs text-muted-foreground">
                  ({selectedSpot.reviewCount} avis)
                </span>
              </div>
              <Link href={`/spots/${selectedSpot.id}`}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Voir les détails
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
