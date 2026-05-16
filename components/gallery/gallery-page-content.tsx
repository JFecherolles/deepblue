"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdBanner } from "@/components/ads/ad-banner";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80",
    title: "Recif corallien tropical",
    category: "Recifs",
    description: "Recif corallien aux couleurs vives dans les eaux chaudes du Pacifique Sud",
    location: "Raja Ampat, Indonesie",
    type: "photo" as const,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    title: "Plongeur en exploration",
    category: "Plongeurs",
    description: "Un plongeur explore un tombant spectaculaire dans les eaux cristallines",
    location: "Mer Rouge, Egypte",
    type: "photo" as const,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800&q=80",
    title: "Banc de poissons tropicaux",
    category: "Vie marine",
    description: "Un immense banc de poissons-chirurgiens tourbillonne autour du recif",
    location: "Sipadan, Malaisie",
    type: "photo" as const,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&q=80",
    title: "Grotte sous-marine",
    category: "Paysages",
    description: "Lumiere filtrant a travers une grotte calcaire immergee",
    location: "Cenotes, Mexique",
    type: "photo" as const,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=800&q=80",
    title: "Tortue verte",
    category: "Vie marine",
    description: "Une majestueuse tortue verte nage au-dessus du recif corallien",
    location: "Grande Barriere de Corail, Australie",
    type: "photo" as const,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800&q=80",
    title: "Requin de recif",
    category: "Vie marine",
    description: "Un requin a pointe blanche patrouille le long du tombant",
    location: "Fakarava, Polynesie francaise",
    type: "photo" as const,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?w=800&q=80",
    title: "Coucher de soleil tropical",
    category: "Paysages",
    description: "Coucher de soleil dore sur un site de plongee paradisiaque",
    location: "Maldives",
    type: "photo" as const,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
    title: "Coraux fluorescents",
    category: "Recifs",
    description: "Des coraux mous fluorescents illuminent le fond marin lors d'une plongee de nuit",
    location: "Lembeh, Indonesie",
    type: "photo" as const,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1621025155764-66e498be64c0?w=800&q=80",
    title: "Raie manta",
    category: "Vie marine",
    description: "Une raie manta oceanique deploie ses ailes majestueuses",
    location: "Komodo, Indonesie",
    type: "photo" as const,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1559600519-da03c9e0a1e3?w=800&q=80",
    title: "Epave du Thistlegorm",
    category: "Epaves",
    description: "L'epave mythique du Thistlegorm, navire de la Seconde Guerre mondiale",
    location: "Mer Rouge, Egypte",
    type: "photo" as const,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=800&q=80",
    title: "Meduse pelagique",
    category: "Vie marine",
    description: "Une meduse translucide danse dans le courant au large",
    location: "Monterey Bay, USA",
    type: "photo" as const,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80",
    title: "Blue Hole de Belize",
    category: "Paysages",
    description: "Vue aerienne du celebre Grand Trou Bleu, site UNESCO",
    location: "Belize",
    type: "photo" as const,
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=800&q=80",
    title: "Plongeur et banc de barracudas",
    category: "Plongeurs",
    description: "Un plongeur s'emerveille devant un immense banc de barracudas",
    location: "Sipadan, Malaisie",
    type: "photo" as const,
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=800&q=80",
    title: "Poisson-clown et anemone",
    category: "Vie marine",
    description: "Un poisson-clown se refugie dans les tentacules de son anemone protectrice",
    location: "Bunaken, Indonesie",
    type: "photo" as const,
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80",
    title: "Jardin de corail dur",
    category: "Recifs",
    description: "Un jardin pristine de coraux acropores en parfaite sante",
    location: "Tubbataha, Philippines",
    type: "photo" as const,
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    title: "Requin-baleine",
    category: "Vie marine",
    description: "Le plus grand poisson du monde filtre le plancton en surface",
    location: "Oslob, Philippines",
    type: "photo" as const,
  },
];

const categories = ["Tous", "Récifs", "Vie marine", "Paysages", "Plongeurs", "Épaves"];

export function GalleryPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "Tous"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  const goPrev = () =>
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredItems.length) % filteredItems.length
        : null
    );

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
              {galleryItems.length} photos et vidéos
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              <span className="text-primary">Galerie</span> sous-marine
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plongez dans notre collection de photographies et vidéos sous-marines
              capturées aux quatre coins du globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border-border/50"
                }
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="mb-4 break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: index % 3 === 0 ? "3/4" : index % 3 === 1 ? "4/3" : "1/1" }}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.category}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="h-5 w-5 text-foreground drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-card/80 hover:bg-card transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 p-2 rounded-full bg-card/80 hover:bg-card transition-colors cursor-pointer"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 p-2 rounded-full bg-card/80 hover:bg-card transition-colors cursor-pointer"
              aria-label="Photo suivante"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div
              className="relative w-full max-w-5xl mx-4 aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center p-4">
                <p className="font-semibold text-lg">
                  {filteredItems[lightboxIndex].title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {filteredItems[lightboxIndex].category} -{" "}
                  {lightboxIndex + 1} / {filteredItems.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AdBanner position="gallery-bottom" />
    </div>
  );
}
