import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";

export default function SellerCTA() {
  return (
    <section className="section-gap bg-gradient-to-br from-[var(--bg-canvas)] to-[var(--bg-muted)] px-6">
      <FadeUp>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
            For Makers
          </span>
          <h2 className="mt-4 text-[clamp(24px,4vw,48px)] font-[var(--font-playfair)] text-[var(--text-primary)]">
            Your Art Deserves a Global Stage
          </h2>
          <p className="mt-4 text-[16px] text-[var(--text-secondary)] max-w-[540px] mx-auto leading-relaxed">
            Join 180+ makers selling to customers in 40+ countries. We handle payments and disputes. You focus on creating.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-[var(--bg-surface)] rounded-lg px-6 py-3">
              <span className="text-[18px] font-medium text-[var(--text-primary)]">180+</span>
              <span className="block text-[12px] text-[var(--text-muted)]">Makers</span>
            </div>
            <div className="bg-[var(--bg-surface)] rounded-lg px-6 py-3">
              <span className="text-[18px] font-medium text-[var(--text-primary)]">2,400+</span>
              <span className="block text-[12px] text-[var(--text-muted)]">Sales</span>
            </div>
            <div className="bg-[var(--bg-surface)] rounded-lg px-6 py-3">
              <span className="text-[18px] font-medium text-[var(--text-primary)]">40</span>
              <span className="block text-[12px] text-[var(--text-muted)]">Countries</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/seller/apply"
              className="px-8 h-12 bg-[var(--brand-terracotta)] text-[var(--text-inverse)] rounded-full text-[15px] font-medium flex items-center hover:brightness-90 transition-all"
            >
              Apply to Sell
            </Link>
            <Link
              href="/#how-it-works"
              className="px-8 h-12 border border-[var(--text-primary)] rounded-full text-[15px] font-medium flex items-center hover:bg-[var(--bg-muted)] transition-all"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}