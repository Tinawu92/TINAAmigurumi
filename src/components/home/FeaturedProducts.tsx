"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/mock-products";
import FadeUp from "@/components/animations/FadeUp";

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 7);

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll(".product-card");
    if (cards) {
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          delay: i * 0.1,
        });
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-gap px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <FadeUp>
              <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
                Curated Selection
              </span>
              <h2 className="mt-2 text-[clamp(24px,4vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
                Our Finest Pieces
              </h2>
            </FadeUp>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-2 text-[14px] font-[var(--font-dm-sans)] text-[var(--text-primary)] hover:gap-3 transition-all"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="product-card md:col-span-2 md:row-span-2">
            <ProductCard product={featuredProducts[0]} variant="large" />
          </div>
          {featuredProducts.slice(1, 7).map((product, i) => (
            <div key={product.id} className="product-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[14px] font-[var(--font-dm-sans)] text-[var(--text-primary)]"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}