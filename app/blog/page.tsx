import type { Metadata } from "next";
import { BlogPageContent } from "@/components/blog/blog-page-content";

export const metadata: Metadata = {
  title: "Blog Plongée Sous-Marine - Guides, Conseils & Destinations",
  description:
    "Articles experts sur la plongée sous-marine : guides débutants, destinations, équipement, techniques de photographie sous-marine et sécurité.",
  openGraph: {
    title: "Blog Plongée - DeepBlue Diving",
    description:
      "Guides experts, conseils et dernières actualités du monde de la plongée sous-marine.",
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
