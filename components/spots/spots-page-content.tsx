"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  MapPin,
  List,
  Map as MapIcon,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { divingSpots, regions, difficulties } from "@/lib/data/spots";
import { SpotCard } from "./spot-card";
import { SpotsMap } from "./spots-map";
import { AdSidebar } from "@/components/ads/ad-banner";

export function SpotsPageContent() {
  const [view, setView] = useState<"grid" | "map">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Tous");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Tous");
  const [showFilters, setShowFilters] = useState(false);

  const filteredSpots = useMemo(() => {
    return divingSpots.filter((spot) => {
      const matchesSearch =
        spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion =
        selectedRegion === "Tous" || spot.region === selectedRegion;
      const matchesDifficulty =
        selectedDifficulty === "Tous" || spot.difficulty === selectedDifficulty;

      return matchesSearch && matchesRegion && matchesDifficulty;
    });
  }, [searchQuery, selectedRegion, selectedDifficulty]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedRegion("Tous");
    setSelectedDifficulty("Tous");
  };

  const hasActiveFilters =
    searchQuery || selectedRegion !== "Tous" || selectedDifficulty !== "Tous";

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
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary"
            >
              {divingSpots.length} destinations
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Spots de <span className="text-primary">plongée</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorez les meilleurs sites de plongée au monde avec notre carte
              interactive et trouvez votre prochaine aventure sous-marine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un spot, pays, région..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border/50"
              />
            </div>

            {/* Desktop filters */}
            <div className="hidden lg:flex items-center gap-3">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-48 bg-card border-border/50">
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

              <Select
                value={selectedDifficulty}
                onValueChange={setSelectedDifficulty}
              >
                <SelectTrigger className="w-40 bg-card border-border/50">
                  <SelectValue placeholder="Difficulté" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground"
                >
                  <X className="h-4 w-4 mr-1" />
                  Effacer
                </Button>
              )}
            </div>

            {/* Mobile filter toggle */}
            <Button
              variant="outline"
              className="lg:hidden border-border/50"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtres
              {hasActiveFilters && (
                <Badge className="ml-2 bg-primary text-primary-foreground">
                  {
                    [
                      searchQuery,
                      selectedRegion !== "Tous",
                      selectedDifficulty !== "Tous",
                    ].filter(Boolean).length
                  }
                </Badge>
              )}
            </Button>

            {/* View toggle */}
            <div className="flex items-center gap-1 bg-card rounded-lg p-1 border border-border/50">
              <Button
                variant={view === "grid" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setView("grid")}
                className="gap-2"
              >
                <List className="h-4 w-4" />
                <span className="hidden sm:inline">Liste</span>
              </Button>
              <Button
                variant={view === "map" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setView("map")}
                className="gap-2"
              >
                <MapIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Carte</span>
              </Button>
            </div>
          </div>

          {/* Mobile filters panel */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden mt-4 space-y-3"
            >
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full bg-card border-border/50">
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

              <Select
                value={selectedDifficulty}
                onValueChange={setSelectedDifficulty}
              >
                <SelectTrigger className="w-full bg-card border-border/50">
                  <SelectValue placeholder="Difficulté" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="w-full"
                >
                  <X className="h-4 w-4 mr-1" />
                  Effacer les filtres
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>
              {filteredSpots.length} spot{filteredSpots.length !== 1 && "s"}{" "}
              trouvé{filteredSpots.length !== 1 && "s"}
            </span>
          </div>

          {view === "grid" ? (
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main content */}
              <div className="lg:col-span-3">
                {filteredSpots.length > 0 ? (
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredSpots.map((spot, index) => (
                      <SpotCard key={spot.id} spot={spot} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Aucun spot trouvé
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Essayez de modifier vos critères de recherche
                    </p>
                    <Button variant="outline" onClick={clearFilters}>
                      Effacer les filtres
                    </Button>
                  </div>
                )}
              </div>

              {/* Sidebar ads */}
              <div className="hidden lg:block">
                <AdSidebar position="spots-sidebar" />
              </div>
            </div>
          ) : (
            <div id="carte" className="h-[600px] rounded-xl overflow-hidden border border-border/50">
              <SpotsMap spots={filteredSpots} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
