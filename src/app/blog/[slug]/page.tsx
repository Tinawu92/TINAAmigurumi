"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import { articles } from "@/data/mock-articles";

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[32px] font-[var(--font-playfair)]">Article not found</h1>
          <Link href="/blog" className="mt-4 text-[var(--brand-terracotta)] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles.filter(
    (a) => a.category === article.category && a.slug !== article.slug
  ).slice(0, 2);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-canvas)] via-transparent to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        <FadeUp>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[14px] text-[var(--text-inverse)] opacity-70 hover:opacity-100 transition-opacity mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <span className="inline-block px-3 py-1 bg-[var(--brand-terracotta)] text-white text-[11px] font-medium rounded-full uppercase tracking-wider mb-4">
            {article.category}
          </span>

          <h1 className="text-[clamp(28px,5vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-primary)] leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={article.authorAvatar}
                  alt={article.author}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[14px] font-medium text-[var(--text-primary)]">{article.author}</p>
                <div className="flex items-center gap-3 text-[12px] text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Article Content */}
        <FadeUp delay={0.1}>
          <div className="mt-12 prose prose-lg max-w-none">
            <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-8 md:p-12">
              <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed">
                This is a placeholder article content. In a full implementation, this would contain the complete article body with multiple paragraphs, images, and helpful tips for the reader.
              </p>
              <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed mt-4">
                The article would cover topics related to "{article.title}" in depth, providing valuable insights and actionable advice for makers and collectors in the handmade community.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Share */}
        <FadeUp delay={0.2}>
          <div className="mt-12 pt-8 border-t border-[var(--bg-muted)] flex items-center justify-between">
            <span className="text-[14px] text-[var(--text-muted)]">Share this article</span>
            <div className="flex gap-3">
              {["Twitter", "Facebook", "Pinterest"].map((platform) => (
                <button
                  key={platform}
                  className="px-4 py-2 bg-[var(--bg-muted)] text-[13px] rounded-full hover:bg-[var(--bg-surface)] transition-colors"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <FadeUp delay={0.3}>
            <div className="mt-16">
              <h2 className="text-[24px] font-[var(--font-playfair)] italic mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="group flex gap-4 bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-xl p-4 hover:border-[var(--brand-terracotta)] transition-colors"
                  >
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] text-[var(--brand-sage)] uppercase tracking-wider">
                        {related.category}
                      </span>
                      <h3 className="mt-1 text-[15px] font-[var(--font-playfair)] line-clamp-2 group-hover:text-[var(--brand-terracotta)] transition-colors">
                        {related.title}
                      </h3>
                      <p className="mt-1 text-[12px] text-[var(--text-muted)]">{related.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </FadeUp>
        )}
      </div>
    </div>
  );
}