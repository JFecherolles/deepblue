import { Suspense } from "react";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedSpots } from "@/components/home/featured-spots";
import { FeaturedEquipment } from "@/components/home/featured-equipment";
import { LatestPosts } from "@/components/home/latest-posts";
import { StatsSection } from "@/components/home/stats-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { AdBanner } from "@/components/ads/ad-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <Suspense fallback={<div className="h-96 animate-shimmer" />}>
        <FeaturedSpots />
      </Suspense>
      
      <AdBanner position="home-mid-1" />
      
      <Suspense fallback={<div className="h-96 animate-shimmer" />}>
        <StatsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-shimmer" />}>
        <FeaturedEquipment />
      </Suspense>
      
      <AdBanner position="home-mid-2" />
      
      <Suspense fallback={<div className="h-96 animate-shimmer" />}>
        <LatestPosts />
      </Suspense>
      
      <NewsletterSection />
    </>
  );
}
