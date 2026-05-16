import type { MetadataRoute } from "next";
import { divingSpots } from "@/lib/data/spots";
import { blogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://deepblue-diving.com";

  const staticPages = [
    "",
    "/spots",
    "/equipement",
    "/conditions",
    "/blog",
    "/galerie",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  const spotPages = divingSpots.map((spot) => ({
    url: `${baseUrl}/spots/${spot.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...spotPages, ...blogPages];
}
