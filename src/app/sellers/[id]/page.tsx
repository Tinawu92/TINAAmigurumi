"use client";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Star, Globe, Clock, MessageCircle, UserPlus, Heart } from "lucide-react";
import { sellers } from "@/data/mock-sellers";
import { products } from "@/data/mock-products";
import ProductCard from "@/components/shop/ProductCard";
import FadeUp from "@/components/animations/FadeUp";

export default function SellerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const seller = sellers.find((s) => s.id === id);
  const sellerProducts = products.filter((p) => p.seller.id === id);

  if (!seller) {
    return (
      <div className="min-h-screen pt-24 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-[var(--font-playfair)] italic">Maker Not Found</h1>
          <p className="mt-4 text-[var(--text-muted)]">This maker doesn't exist in our community.</p>
          <Link href="/sellers" className="mt-6 inline-block text-[var(--brand-terracotta)] hover:underline">
            ← Back to Makers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="text-[12px] text-[var(--text-muted)] mb-8 flex items-center gap-2">
          <Link href="/sellers">Makers</Link>
          <ChevronRight size={12} />
          <span>{seller.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-8"
            >
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src={seller.avatar}
                    alt={seller.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                {seller.isVerified && (
                  <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                )}
              </div>

              <h1 className="mt-6 text-[28px] font-[var(--font-playfair)]">{seller.name}</h1>
              <p className="mt-2 text-[15px] text-[var(--text-muted)]">
                {seller.flag} {seller.location}, {seller.country}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[var(--brand-sage)] text-white text-[12px] rounded-full">
                  {seller.specialty}
                </span>
                {seller.isVerified && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-[12px] rounded-full">
                    Verified Seller
                  </span>
                )}
              </div>

              <p className="mt-6 text-[15px] text-[var(--text-secondary)] leading-relaxed">
                {seller.bio}
              </p>

              <div className="mt-6 pt-6 border-t border-[var(--bg-muted)] space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-[var(--brand-gold)]" />
                  <div>
                    <span className="text-[18px] font-medium">{seller.rating}</span>
                    <span className="text-[14px] text-[var(--text-muted)] ml-1">rating</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-[var(--brand-terracotta)]" />
                  <div>
                    <span className="text-[18px] font-medium">{seller.totalSales}</span>
                    <span className="text-[14px] text-[var(--text-muted)] ml-1">pieces sold</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[var(--brand-sage)]" />
                  <span className="text-[14px]">Responds {seller.responseTime.toLowerCase()}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[var(--text-muted)]" />
                  <span className="text-[14px]">{seller.languages.join(", ")}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--bg-muted)]">
                <p className="text-[12px] text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Member Since
                </p>
                <span className="text-[16px] font-medium">{seller.joinedYear}</span>
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--bg-muted)] flex flex-col gap-3">
                <button className="w-full h-12 bg-[var(--brand-terracotta)] text-white rounded-full text-[15px] font-medium flex items-center justify-center gap-2 hover:brightness-90 transition-all">
                  <UserPlus size={18} />
                  Follow Maker
                </button>
                <button className="w-full h-12 border border-[var(--text-primary)] rounded-full text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-[var(--bg-muted)] transition-all">
                  <MessageCircle size={18} />
                  Message
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-[28px] font-[var(--font-playfair)] italic">
                {seller.name}&apos;s Collection
              </h2>
              <p className="mt-2 text-[15px] text-[var(--text-muted)]">
                {sellerProducts.length} handcrafted pieces available
              </p>
            </div>

            {sellerProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sellerProducts.map((product, i) => (
                  <FadeUp key={product.id} delay={i * 0.1}>
                    <ProductCard product={product} />
                  </FadeUp>
                ))}
              </div>
            ) : (
              <div className="bg-[var(--bg-muted)] rounded-2xl p-12 text-center">
                <p className="text-[var(--text-muted)]">No products listed yet.</p>
                <p className="mt-2 text-[14px] text-[var(--text-muted)]">
                  Check back soon — this maker is preparing something special!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}