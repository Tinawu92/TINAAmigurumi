"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { sellers } from "@/data/mock-sellers";
import FadeUp from "@/components/animations/FadeUp";

export default function SellersPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
              The Makers
            </span>
            <h1 className="mt-2 text-[clamp(36px,6vw,72px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
              Meet Our Makers
            </h1>
            <p className="mt-4 text-[16px] text-[var(--text-secondary)] max-w-[540px] mx-auto">
              Every piece in our marketplace is handcrafted by talented independent makers from around the world. Get to know the artists behind your favorite dolls.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sellers.map((seller, i) => (
            <FadeUp key={seller.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-6"
              >
                <div className="relative">
                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                    <Image
                      src={seller.avatar}
                      alt={seller.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  {seller.isVerified && (
                    <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>

                <h3 className="mt-4 text-[18px] font-medium text-[var(--text-primary)] font-[var(--font-dm-sans)]">
                  {seller.name}
                </h3>
                <p className="mt-1 text-[14px] text-[var(--text-muted)]">
                  {seller.flag} {seller.location}, {seller.country}
                </p>

                <span className="inline-block mt-3 px-3 py-1 bg-[var(--brand-sage)] text-white text-[12px] rounded-full">
                  {seller.specialty}
                </span>

                <p className="mt-4 text-[14px] text-[var(--text-secondary)] line-clamp-2">
                  {seller.bio}
                </p>

                <div className="flex flex-wrap gap-4 mt-4 text-[13px] text-[var(--text-muted)]">
                  <span>★ {seller.rating}</span>
                  <span>·</span>
                  <span>{seller.totalSales} sales</span>
                  <span>·</span>
                  <span>{seller.totalProducts} products</span>
                </div>

                <Link
                  href={`/sellers/${seller.id}`}
                  className="inline-block mt-6 text-[14px] text-[var(--brand-terracotta)] hover:underline"
                >
                  Visit Shop →
                </Link>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}