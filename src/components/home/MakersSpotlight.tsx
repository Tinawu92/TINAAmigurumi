"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sellers } from "@/data/mock-sellers";
import FadeUp from "@/components/animations/FadeUp";

export default function MakersSpotlight() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="makers" className="section-gap bg-[var(--bg-ink)] px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-inverse)] opacity-60 font-[var(--font-dm-sans)]">
            The People Behind the Craft
          </span>
          <h2 className="mt-2 text-[clamp(36px,6vw,72px)] font-[var(--font-playfair)] italic text-[var(--text-inverse)]">
            Meet the Makers
          </h2>
        </FadeUp>

        <div className="relative mt-12">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-[var(--bg-surface)] rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--bg-muted)] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-[var(--bg-surface)] rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--bg-muted)] transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {sellers.map((seller) => (
              <motion.div
                key={seller.id}
                whileHover={{ borderColor: "rgba(200,96,58,0.5)" }}
                className="flex-shrink-0 w-[260px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 transition-colors"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative">
                  <div className="w-[72px] h-[72px] rounded-full overflow-hidden">
                    <Image
                      src={seller.avatar}
                      alt={seller.name}
                      width={72}
                      height={72}
                      className="object-cover"
                    />
                  </div>
                  {seller.isVerified && (
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[var(--bg-ink)]" />
                  )}
                </div>

                <h3 className="mt-4 text-[16px] font-medium text-[var(--text-inverse)] font-[var(--font-dm-sans)]">
                  {seller.name}
                </h3>
                <p className="mt-1 text-[13px] text-[var(--text-inverse)] opacity-60">
                  {seller.flag} {seller.location}
                </p>

                <span className="inline-block mt-3 px-2 py-1 bg-[var(--brand-sage)] text-[11px] text-white rounded-full">
                  {seller.specialty}
                </span>

                <div className="flex items-center gap-3 mt-4 text-[12px] text-[var(--text-inverse)] opacity-70">
                  <span>★ {seller.rating}</span>
                  <span>·</span>
                  <span>{seller.totalSales} sales</span>
                </div>

                <Link
                  href={`/sellers/${seller.id}`}
                  className="inline-block mt-4 text-[13px] text-[var(--brand-terracotta)] hover:underline"
                >
                  Visit Shop →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}