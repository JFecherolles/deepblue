"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Search,
  Star,
  ExternalLink,
  Check,
  X,
  SlidersHorizontal,
  ShoppingCart,
  Filter,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { equipment, equipmentCategories } from "@/lib/data/equipment";
import type { Equipment } from "@/lib/data/equipment";
import { AdBanner, AdSidebar } from "@/components/ads/ad-banner";

function EquipmentCard({ item, index }: { item: Equipment; index: number }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-secondary/30">
          <Image
            src={item.image}
            alt={`${item.brand} ${item.name} - ${item.categoryLabel} de plongée`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge className="bg-secondary/90 text-secondary-foreground backdrop-blur-sm">
              {item.categoryLabel}
            </Badge>
          </div>
          <Badge
            variant="outline"
            className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm"
          >
            {item.level}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground font-medium">
              {item.brand}
            </span>
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
              <span className="text-sm font-semibold">{item.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({item.reviewCount})
              </span>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {item.name}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {item.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.features.slice(0, 3).map((feature, i) => (
              <span
                key={i}
                className="text-xs px-2 py-0.5 bg-secondary/50 rounded-full text-secondary-foreground"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Expandable Pros/Cons */}
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="mb-4 space-y-3"
            >
              <div>
                <p className="text-xs font-semibold text-green-400 mb-1.5">
                  Avantages
                </p>
                {item.pros.map((pro, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1"
                  >
                    <Check className="h-3 w-3 text-green-400 mt-0.5 shrink-0" />
                    <span>{pro}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold text-red-400 mb-1.5">
                  Inconvénients
                </p>
                {item.cons.map((con, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1"
                  >
                    <X className="h-3 w-3 text-red-400 mt-0.5 shrink-0" />
                    <span>{con}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">Idéal pour :</strong>{" "}
                {item.bestFor}
              </p>
            </motion.div>
          )}

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-primary hover:underline mb-4 text-left cursor-pointer"
          >
            {showDetails ? "Masquer les détails" : "Voir les avantages / inconvénients"}
          </button>

          {/* Price & CTA */}
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
            <div className="text-2xl font-bold text-primary">{item.price}€</div>
            <a
              href={item.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              <Button
                size="sm"
                className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-black gap-1.5 font-semibold"
              >
                <ShoppingCart className="h-3.5 w-3.5" />
                Amazon
                <ExternalLink className="h-3 w-3" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function EquipmentPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const filteredEquipment = useMemo(() => {
    let filtered = equipment.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "all" || item.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

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
              {equipment.length} produits testés
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Comparatif <span className="text-primary">matériel</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trouvez l&apos;équipement de plongée idéal avec nos tests experts,
              comparatifs détaillés et liens directs vers Amazon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un équipement..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border/50"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-44 bg-card border-border/50">
                  <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {equipmentCategories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-40 bg-card border-border/50">
                  <SelectValue placeholder="Niveau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous niveaux</SelectItem>
                  <SelectItem value="Débutant">Débutant</SelectItem>
                  <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                  <SelectItem value="Avancé">Avancé</SelectItem>
                  <SelectItem value="Professionnel">Professionnel</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-card border-border/50">
                  <SlidersHorizontal className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Trier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Meilleures notes</SelectItem>
                  <SelectItem value="reviews">Plus populaires</SelectItem>
                  <SelectItem value="price-asc">Prix croissant</SelectItem>
                  <SelectItem value="price-desc">Prix décroissant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <AdBanner position="equipment-top" />

      {/* Content */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-8"
          >
            <TabsList className="bg-card border border-border/50 h-auto flex-wrap gap-1 p-1">
              {equipmentCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            <span>
              {filteredEquipment.length} produit
              {filteredEquipment.length !== 1 && "s"} trouvé
              {filteredEquipment.length !== 1 && "s"}
            </span>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {filteredEquipment.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredEquipment.map((item, index) => (
                    <EquipmentCard key={item.id} item={item} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <SlidersHorizontal className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Aucun équipement trouvé
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Modifiez vos critères de recherche
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setSelectedLevel("all");
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}
            </div>

            <div className="hidden lg:block">
              <AdSidebar position="equipment-sidebar" />
            </div>
          </div>
        </div>
      </section>

      <AdBanner position="equipment-bottom" />
    </div>
  );
}
