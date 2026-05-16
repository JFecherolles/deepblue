"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Calendar,
  ArrowLeft,
  Share2,
  Bookmark,
  ChevronRight,
  User,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdBanner, AdInArticle } from "@/components/ads/ad-banner";
import type { BlogPost } from "@/lib/data/blog";

interface BlogArticleContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogArticleContent({
  post,
  relatedPosts,
}: BlogArticleContentProps) {
  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-card/50 border-b border-border/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              {post.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {post.author.bio}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min de lecture
                </span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Partager
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-10">
            <div
              className="text-foreground leading-relaxed [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-foreground [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-foreground [&_p]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:pl-6 [&_li]:mb-1 [&_li]:text-muted-foreground [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^# (.+)$/gm, "<h1>$1</h1>")
                  .replace(/^## (.+)$/gm, "<h2>$1</h2>")
                  .replace(/^### (.+)$/gm, "<h3>$1</h3>")
                  .replace(/^\- (.+)$/gm, "<li>$1</li>")
                  .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/<\/li>\n<li>/g, "</li><li>"),
              }}
            />
          </div>

          <AdInArticle position="blog-article-mid" />

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap mb-10 pb-10 border-b border-border/50">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Back */}
          <Link href="/blog">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Button>
          </Link>

          {/* Related */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6">
                Articles similaires
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <Link key={rp.id} href={`/blog/${rp.slug}`} className="group">
                    <div className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={rp.image}
                          alt={rp.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {rp.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-2">
                          {rp.readTime} min de lecture
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <AdBanner position="blog-article-bottom" />
    </div>
  );
}
