"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send to your newsletter service
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,200,0.1),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Restez <span className="text-primary">informé</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Recevez nos meilleurs conseils, les nouveaux spots et les offres
            exclusives directement dans votre boîte mail.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-card border-border/50 focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              disabled={submitted}
            >
              {submitted ? (
                <>
                  <Check className="h-5 w-5" />
                  Inscrit !
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  S&apos;inscrire
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            En vous inscrivant, vous acceptez notre politique de confidentialité.
            Pas de spam, désinscription facile.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
