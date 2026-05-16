"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Anchor,
  Globe,
  Users,
  Award,
  Heart,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Marine Dubois",
    role: "Fondatrice & Rédactrice en chef",
    bio: "Instructrice PADI depuis 15 ans, Marine a plongé dans plus de 40 pays.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    name: "Thomas Mercier",
    role: "Biologiste marin & Photographe",
    bio: "Spécialiste des requins et photographe sous-marin primé internationalement.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    name: "Sophie Martin",
    role: "Testeuse équipement",
    bio: "Plus de 3000 plongées et des dizaines d'équipements testés en conditions réelles.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
  },
  {
    name: "Pierre Lambert",
    role: "Développeur & Plongeur tech",
    bio: "Ingénieur passionné qui développe les outils et la plateforme DeepBlue.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
];

const values = [
  {
    icon: Globe,
    title: "Exploration",
    description:
      "Nous parcourons le globe pour tester et documenter les meilleurs spots de plongée.",
  },
  {
    icon: Target,
    title: "Objectivité",
    description:
      "Nos tests et avis sont indépendants et basés sur l'expérience réelle de notre équipe.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Chaque article, guide et comparatif est rédigé par des plongeurs pour des plongeurs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Nous visons la plus haute qualité d'information pour vous accompagner sous l'eau.",
  },
];

export function AboutPageContent() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Notre histoire
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              À propos de <span className="text-primary">DeepBlue</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              DeepBlue Diving est né de la passion commune d&apos;une équipe de
              plongeurs pour le monde sous-marin. Depuis 2015, nous
              accompagnons les plongeurs de tous niveaux dans leurs aventures avec
              des guides experts, des comparatifs honnêtes et des informations
              fiables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Anchor, value: "10+", label: "Années d'expérience" },
              { icon: Globe, value: "50+", label: "Spots documentés" },
              { icon: Users, value: "100K+", label: "Lecteurs mensuels" },
              { icon: Award, value: "500+", label: "Articles publiés" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border border-border/50"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nos <span className="text-primary">valeurs</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border/50 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Notre <span className="text-primary">équipe</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des passionnés dévoués à partager leur amour du monde sous-marin
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border/50 overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
