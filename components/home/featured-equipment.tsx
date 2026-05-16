"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { equipment } from "@/lib/data/equipment";

export function FeaturedEquipment() {
  const featuredEquipment = equipment.filter((item) => item.featured).slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-card/50 relative overflow-hidden">
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
            Équipement
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Le meilleur <span className="text-primary">matériel</span> de
            plongée
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre sélection d&apos;équipements testés et approuvés par des
            professionnels
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEquipment.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary/30">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                    {item.categoryLabel}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">
                      {item.brand}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                    {item.description}
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="text-xl font-bold text-primary">
                      {item.price}€
                    </div>
                    <a
                      href={item.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Voir sur Amazon
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
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
          <Link href="/equipement">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 gap-2"
            >
              Voir tout l&apos;équipement
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
