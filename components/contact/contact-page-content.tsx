"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Briefcase, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Contactez-nous
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Une <span className="text-primary">question</span> ?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Notre équipe est à votre écoute pour toute question sur la plongée,
              nos guides, partenariats ou suggestions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "contact@deepblue-diving.com",
                  description: "Réponse sous 48h",
                },
                {
                  icon: MapPin,
                  title: "Adresse",
                  value: "Marseille, France",
                  description: "Siège de la rédaction",
                },
                {
                  icon: MessageSquare,
                  title: "Réseaux sociaux",
                  value: "@deepbluediving",
                  description: "Instagram, YouTube, Facebook",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-primary text-sm">{item.value}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Quick topics */}
              <div className="bg-card rounded-xl border border-border/50 p-6">
                <h3 className="font-semibold mb-4">Sujets fréquents</h3>
                <div className="space-y-3">
                  {[
                    { icon: HelpCircle, label: "Questions sur un spot" },
                    { icon: Briefcase, label: "Partenariats & affiliation" },
                    { icon: MessageSquare, label: "Suggestion d'article" },
                    { icon: Mail, label: "Problème technique" },
                  ].map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <topic.icon className="h-4 w-4 text-primary" />
                      <span>{topic.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl border border-border/50 p-8"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message envoyé</h3>
                    <p className="text-muted-foreground">
                      Merci pour votre message. Nous vous répondrons sous 48
                      heures.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Nom complet
                        </label>
                        <Input
                          id="name"
                          placeholder="Jean Dupont"
                          required
                          className="bg-secondary/30 border-border/50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jean@exemple.com"
                          required
                          className="bg-secondary/30 border-border/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                      >
                        Sujet
                      </label>
                      <Select>
                        <SelectTrigger className="bg-secondary/30 border-border/50">
                          <SelectValue placeholder="Choisir un sujet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="question">
                            Question sur un spot
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partenariat / Affiliation
                          </SelectItem>
                          <SelectItem value="suggestion">
                            Suggestion d&apos;article
                          </SelectItem>
                          <SelectItem value="bug">Problème technique</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Votre message..."
                        required
                        rows={6}
                        className="bg-secondary/30 border-border/50"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Envoyer le message
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
