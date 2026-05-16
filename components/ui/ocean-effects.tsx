"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function BubbleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createBubble = () => {
      const bubble = document.createElement("div");
      const size = Math.random() * 20 + 5;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 8;
      const delay = Math.random() * 5;

      bubble.className = "absolute rounded-full bg-primary/10 pointer-events-none";
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.bottom = "-20px";
      bubble.style.animation = `bubble ${duration}s ease-in-out ${delay}s infinite`;

      container.appendChild(bubble);

      setTimeout(() => {
        if (container.contains(bubble)) {
          container.removeChild(bubble);
        }
      }, (duration + delay) * 1000);
    };

    // Create initial bubbles
    for (let i = 0; i < 15; i++) {
      setTimeout(createBubble, i * 500);
    }

    // Continue creating bubbles
    const interval = setInterval(createBubble, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

export function WavePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 left-0 w-full h-32 text-primary/5"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
          fill="currentColor"
          animate={{
            d: [
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
              "M0,80 C360,20 720,100 1080,40 C1260,60 1380,80 1440,40 L1440,120 L0,120 Z",
              "M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full h-24 text-primary/3"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z"
          fill="currentColor"
          animate={{
            d: [
              "M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z",
              "M0,30 C480,0 960,100 1440,70 L1440,100 L0,100 Z",
              "M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </svg>
    </div>
  );
}

export function GlowEffect({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full bg-primary/20 blur-3xl pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

export function GridPattern() {
  return (
    <div
      className="absolute inset-0 bg-[linear-gradient(rgba(0,200,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,200,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"
      aria-hidden="true"
    />
  );
}
