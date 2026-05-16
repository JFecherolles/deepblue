"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MapPin, Compass, Users, Globe } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: 50,
    suffix: "+",
    label: "Spots de plongée",
    description: "Dans le monde entier",
  },
  {
    icon: Compass,
    value: 30,
    suffix: "+",
    label: "Équipements testés",
    description: "Par des professionnels",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Plongeurs satisfaits",
    description: "Nous font confiance",
  },
  {
    icon: Globe,
    value: 25,
    suffix: "",
    label: "Régions couvertes",
    description: "Sur tous les continents",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-card/50 border-y border-border/50 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Une communauté <span className="text-primary">passionnée</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des milliers de plongeurs nous font confiance pour préparer leurs
            aventures sous-marines
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
