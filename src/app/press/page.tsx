import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

export default function PressPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="section-gap px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeUp>
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
              Media & Press
            </span>
            <h1 className="mt-4 text-[clamp(36px,6vw,72px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
              Press & Media Kit
            </h1>
            <p className="mt-6 text-[18px] text-[var(--text-secondary)] max-w-[580px] mx-auto leading-relaxed">
              Amigumi Market is redefining how the world discovers and supports independent handmade artists. Find everything you need to tell our story.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="section-gap bg-[var(--bg-muted)] px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
                Resources
              </span>
              <h2 className="mt-2 text-[clamp(28px,4vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
                Brand Assets
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Logo Package",
                description: "Our logo in multiple formats and color variants for print and digital use.",
                cta: "Download ZIP",
                size: "12 MB",
              },
              {
                title: "Brand Guidelines",
                description: "Colors, typography, voice, and usage rules to represent Amigumi accurately.",
                cta: "Download PDF",
                size: "4 MB",
              },
              {
                title: "Product Photos",
                description: "High-resolution images of our platform, product detail shots, and lifestyle content.",
                cta: "Download ZIP",
                size: "85 MB",
              },
            ].map((asset, i) => (
              <FadeUp key={asset.title} delay={i * 0.1}>
                <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-8">
                  <div className="w-full h-40 bg-[var(--bg-muted)] rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-4xl opacity-30">📁</span>
                  </div>
                  <h3 className="text-[18px] font-medium text-[var(--text-primary)]">{asset.title}</h3>
                  <p className="mt-2 text-[14px] text-[var(--text-secondary)]">{asset.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[12px] text-[var(--text-muted)]">{asset.size}</span>
                    <button className="px-4 py-2 bg-[var(--brand-terracotta)] text-white rounded-full text-[13px] font-medium hover:brightness-90 transition-all">
                      {asset.cta}
                    </button>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="section-gap px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
                As Seen In
              </span>
              <h2 className="mt-2 text-[clamp(28px,4vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
                Press Coverage
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                outlet: "Crafts & Hobbies Weekly",
                date: "March 2025",
                headline: "Amigumi Market Named Top Marketplace for Independent Fiber Artists",
                excerpt: "The platform's commitment to fair wages and global accessibility sets a new standard for handmade marketplaces.",
              },
              {
                outlet: "The Japan Times",
                date: "January 2025",
                headline: "Tokyo-Based Amigumi Market Connects Global Makers with Collectors",
                excerpt: "Founded by a small team with a passion for preserving the art of amigurumi, the platform has grown to serve makers in 40+ countries.",
              },
              {
                outlet: "Indie Craft Hub",
                date: "November 2024",
                headline: "How Amigumi Market Is Changing the Game for Independent Artisans",
                excerpt: "With a flat 12% commission and hands-on seller support, Amigumi is attracting makers burned by Etsy and other large marketplaces.",
              },
              {
                outlet: "Handmade World Magazine",
                date: "September 2024",
                headline: "Amigumi Market Review: A Curated Paradise for Doll Collectors",
                excerpt: "Every piece on Amigumi feels intentional. The curation is tight, the quality is consistent, and the makers are genuinely passionate.",
              },
            ].map((article, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] text-[var(--brand-terracotta)] font-medium">{article.outlet}</span>
                    <span className="text-[12px] text-[var(--text-muted)]">{article.date}</span>
                  </div>
                  <h3 className="text-[17px] font-medium text-[var(--text-primary)] leading-snug">{article.headline}</h3>
                  <p className="mt-3 text-[14px] text-[var(--text-secondary)] line-clamp-2">{article.excerpt}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-gap bg-[var(--bg-ink)] px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeUp>
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-inverse)] opacity-60 font-[var(--font-dm-sans)]">
              Media Inquiries
            </span>
            <h2 className="mt-4 text-[clamp(28px,4vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-inverse)]">
              Get in Touch
            </h2>
            <p className="mt-6 text-[16px] text-[var(--text-inverse)] opacity-70 max-w-[480px] mx-auto">
              For press inquiries, interview requests, or media partnership opportunities, please reach out to our team.
            </p>
            <div className="mt-8">
              <a
                href="mailto:press@amigumi.market"
                className="inline-block px-8 h-12 bg-[var(--brand-terracotta)] text-white rounded-full text-[15px] font-medium hover:brightness-90 transition-all"
              >
                press@amigumi.market
              </a>
            </div>
            <p className="mt-6 text-[13px] text-[var(--text-inverse)] opacity-40">
              We typically respond within 24 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Back to Home */}
      <section className="section-gap px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/"
            className="text-[14px] text-[var(--text-muted)] hover:text-[var(--brand-terracotta)] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}