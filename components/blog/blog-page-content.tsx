"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Clock, Calendar, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { blogPosts, blogCategories } from "@/lib/data/blog";
import { AdBanner, AdSidebar } from "@/components/ads/ad-banner";

export function BlogPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "Tous" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogPosts.find((p) => p.featured);

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
              {blogPosts.length} articles
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Blog <span className="text-primary">plongée</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guides experts, conseils pratiques et dernières actualités du monde
              sous-marin pour enrichir vos aventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && (
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Article vedette
                    </Badge>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-card">
                    <Badge variant="outline" className="w-fit mb-4 border-primary/30 text-primary">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors text-balance">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                          <Image
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span>{featuredPost.author.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime} min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border/50"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {blogCategories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "border-border/50"
                  }
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdBanner position="blog-top" />

      {/* Articles grid */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link href={`/blog/${post.slug}`} className="group">
                        <div className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all h-full flex flex-col">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <Badge className="absolute top-3 left-3 bg-secondary/90 text-secondary-foreground backdrop-blur-sm">
                              {post.category}
                            </Badge>
                          </div>
                          <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 text-balance">
                              {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                              <div className="flex items-center gap-2">
                                <User className="h-3.5 w-3.5" />
                                <span>{post.author.name}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3.5 w-3.5" />
                                  {new Date(post.publishedAt).toLocaleDateString(
                                    "fr-FR",
                                    { day: "numeric", month: "short" }
                                  )}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3.5 w-3.5" />
                                  {post.readTime} min
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Aucun article trouvé
                  </h3>
                  <p className="text-muted-foreground">
                    Essayez d&apos;autres termes de recherche
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-6">
              <AdSidebar position="blog-sidebar" />

              {/* Tags */}
              <div className="bg-card rounded-xl border border-border/50 p-6">
                <h3 className="font-semibold mb-4">Tags populaires</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap((p) => p.tags)))
                    .slice(0, 12)
                    .map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
