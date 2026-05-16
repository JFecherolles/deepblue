"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Thermometer, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { divingSpots } from "@/lib/data/spots";

export function FeaturedSpots() {
  const featuredSpots = divingSpots.filter((spot) => spot.featured).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary"
          >
            Destinations
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Les meilleurs spots de{" "}
            <span className="text-primary">plongée</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explorez notre sélection des destinations de plongée les plus
            extraordinaires au monde
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSpots.map((spot, index) => (
            <motion.article
              key={spot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/spots/${spot.id}`}>
                <div className="relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={spot.image}
                      alt={spot.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
                      {spot.difficulty}
                    </Badge>
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">{spot.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>
                        {spot.location}, {spot.country}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {spot.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {spot.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Thermometer className="h-4 w-4 text-primary" />
                        <span>
                          {spot.waterTemp.min}-{spot.waterTemp.max}°C
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Eye className="h-4 w-4 text-primary" />
                        <span>{spot.avgVisibility}m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/spots">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              Voir tous les spots
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
