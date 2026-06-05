"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

import { articles } from "@/data/mock-articles";

const categories = ["All", "Business Tips", "Logistics", "Branding", "Trends", "Inspiration"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
              The Amigumi Blog
            </span>
            <h1 className="mt-4 text-[clamp(36px,6vw,72px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
              Stories & Insights
            </h1>
            <p className="mt-4 text-[18px] text-[var(--text-secondary)] max-w-[540px] mx-auto">
              Tips, tutorials, and inspiration for makers and collectors in the handmade community.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full h-12 pl-12 pr-4 border border-[var(--bg-muted)] rounded-full text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 h-11 rounded-full text-[14px] font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-[var(--brand-terracotta)] text-white"
                      : "bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:bg-[var(--bg-muted)] hover:brightness-95"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {featuredArticle && (
          <FadeUp delay={0.2}>
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group block mb-12 bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[var(--brand-terracotta)] text-white text-[11px] font-medium rounded-full uppercase tracking-wider">
                    Featured
                  </span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-[11px] uppercase tracking-wider text-[var(--brand-sage)] font-medium">
                    {featuredArticle.category}
                  </span>
                  <h2 className="mt-3 text-[24px] md:text-[32px] font-[var(--font-playfair)] leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-4 text-[15px] text-[var(--text-secondary)] line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={featuredArticle.authorAvatar}
                        alt={featuredArticle.author}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium">{featuredArticle.author}</p>
                      <div className="flex items-center gap-3 text-[12px] text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {featuredArticle.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {featuredArticle.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </FadeUp>
        )}

        {regularArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, i) => (
              <FadeUp key={article.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-xl overflow-hidden"
                >
                  <Link href={`/blog/${article.slug}`} className="group block">
                    <div className="relative h-[200px] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <span className="absolute top-3 left-3 px-2 py-1 bg-[var(--bg-surface)] text-[11px] font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-[18px] font-[var(--font-playfair)] leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-[14px] text-[var(--text-secondary)] line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                          <Image
                            src={article.authorAvatar}
                            alt={article.author}
                            width={24}
                            height={24}
                            className="object-cover"
                          />
                        </div>
                        <span className="text-[12px] text-[var(--text-muted)]">
                          {article.author} · {article.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[var(--text-muted)]">No articles found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-[var(--brand-terracotta)] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        <FadeUp delay={0.4}>
          <div className="mt-16 bg-[var(--bg-ink)] rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-[24px] font-[var(--font-playfair)] italic text-[var(--text-inverse)]">
              Never Miss a Story
            </h3>
            <p className="mt-3 text-[15px] text-[var(--text-inverse)] opacity-70 max-w-[400px] mx-auto">
              Subscribe to our newsletter for weekly tips, maker spotlights, and handmade inspiration.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-12 px-4 border border-[var(--text-inverse)] border-opacity-20 rounded-full text-[15px] bg-transparent text-[var(--text-inverse)] placeholder:text-[var(--text-inverse)] placeholder:opacity-50 focus:outline-none focus:border-opacity-50"
              />
              <button className="h-12 px-6 bg-[var(--brand-terracotta)] text-white rounded-full text-[15px] font-medium hover:brightness-90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}