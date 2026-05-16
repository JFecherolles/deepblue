"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Thermometer,
  Eye,
  Wind,
  Waves,
  CloudSun,
  ArrowDown,
  Calendar,
  Search,
  Droplets,
  Compass,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { divingSpots, regions } from "@/lib/data/spots";
import type { DivingSpot } from "@/lib/data/spots";
import { AdBanner } from "@/components/ads/ad-banner";
import Link from "next/link";

function getSeasonalConditions(spot: DivingSpot) {
  const month = new Date().getMonth();
  const isBestSeason =
    spot.bestSeason.toLowerCase().includes("toute") ||
    [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ].some(
      (m, i) => i === month && spot.bestSeason.toLowerCase().includes(m.slice(0, 3))
    );

  const tempRange = spot.waterTemp.max - spot.waterTemp.min;
  const currentTemp = Math.round(
    spot.waterTemp.min + tempRange * (0.4 + Math.random() * 0.4)
  );
  const currentVis = Math.round(
    spot.avgVisibility * (0.7 + Math.random() * 0.5)
  );
  const windSpeed = Math.round(5 + Math.random() * 20);
  const waveHeight = +(0.3 + Math.random() * 2).toFixed(1);
  const currentStrength = ["Faible", "Modéré", "Fort"][
    Math.floor(Math.random() * 3)
  ];

  return {
    currentTemp,
    currentVis,
    windSpeed,
    waveHeight,
    currentStrength,
    isBestSeason,
    airTemp: currentTemp + Math.round(2 + Math.random() * 5),
    humidity: Math.round(60 + Math.random() * 30),
    weather: ["Ensoleillé", "Partiellement nuageux", "Nuageux", "Légère pluie"][
      Math.floor(Math.random() * 4)
    ],
  };
}

function getConditionColor(
  value: number,
  type: "temp" | "vis" | "wind"
): string {
  if (type === "temp") {
    if (value >= 27) return "text-green-400";
    if (value >= 22) return "text-blue-400";
    if (value >= 17) return "text-yellow-400";
    return "text-red-400";
  }
  if (type === "vis") {
    if (value >= 25) return "text-green-400";
    if (value >= 15) return "text-blue-400";
    if (value >= 8) return "text-yellow-400";
    return "text-red-400";
  }
  if (value <= 10) return "text-green-400";
  if (value <= 20) return "text-yellow-400";
  return "text-red-400";
}

function ConditionCard({ spot }: { spot: DivingSpot }) {
  const conditions = useMemo(() => getSeasonalConditions(spot), [spot]);

  return (
    <Link href={`/spots/${spot.id}`}>
      <div className="group bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all p-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              {spot.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {spot.location}, {spot.country}
            </p>
          </div>
          {conditions.isBestSeason ? (
            <Badge className="bg-green-500/10 text-green-400 border-green-500/30 shrink-0">
              Bonne saison
            </Badge>
          ) : (
            <Badge variant="outline" className="shrink-0 text-muted-foreground">
              Hors saison
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 p-2.5 bg-secondary/30 rounded-lg">
            <Thermometer className="h-4 w-4 text-primary shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Eau</p>
              <p
                className={`font-semibold text-sm ${getConditionColor(conditions.currentTemp, "temp")}`}
              >
                {conditions.currentTemp}°C
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 bg-secondary/30 rounded-lg">
            <Eye className="h-4 w-4 text-primary shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Visibilité</p>
              <p
                className={`font-semibold text-sm ${getConditionColor(conditions.currentVis, "vis")}`}
              >
                {conditions.currentVis}m
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 bg-secondary/30 rounded-lg">
            <Wind className="h-4 w-4 text-primary shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Vent</p>
              <p
                className={`font-semibold text-sm ${getConditionColor(conditions.windSpeed, "wind")}`}
              >
                {conditions.windSpeed} km/h
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 bg-secondary/30 rounded-lg">
            <Waves className="h-4 w-4 text-primary shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Vagues</p>
              <p className="font-semibold text-sm">{conditions.waveHeight}m</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 bg-secondary/30 rounded-lg">
            <Compass className="h-4 w-4 text-primary shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Courant</p>
              <p className="font-semibold text-sm">{conditions.currentStrength}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 bg-secondary/30 rounded-lg">
            <CloudSun className="h-4 w-4 text-primary shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Météo</p>
              <p className="font-semibold text-sm text-foreground truncate">
                {conditions.weather}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <ArrowDown className="h-3.5 w-3.5" />
            <span>Prof. max {spot.maxDepth}m</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{spot.bestSeason}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ConditionsPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Tous");

  const filteredSpots = useMemo(() => {
    return divingSpots.filter((spot) => {
      const matchesSearch =
        spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.country.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion =
        selectedRegion === "Tous" || spot.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Conditions en temps réel
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Conditions de <span className="text-primary">plongée</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consultez la température de l&apos;eau, la visibilité, les courants
              et la météo marine pour chaque spot de plongée.
            </p>
          </motion.div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-muted-foreground">Excellent</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <span className="text-muted-foreground">Bon</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="text-muted-foreground">Modéré</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <span className="text-muted-foreground">Difficile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un spot..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border/50"
              />
            </div>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-full sm:w-48 bg-card border-border/50">
                <SelectValue placeholder="Région" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <AdBanner position="conditions-top" />

      {/* Grid */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground mb-6">
            {filteredSpots.length} spot{filteredSpots.length !== 1 && "s"}{" "}
            - Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpots.map((spot) => (
              <ConditionCard key={spot.id} spot={spot} />
            ))}
          </div>
        </div>
      </section>

      <AdBanner position="conditions-bottom" />
    </div>
  );
}
