"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/mock-products";

interface ProductCardProps {
  product: Product;
  variant?: "standard" | "large" | "compact";
}

export default function ProductCard({ product, variant = "standard" }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <motion.div
        whileHover={{ y: -4 }}
        className="rounded-xl overflow-hidden border border-[var(--bg-muted)] bg-[var(--bg-surface)]"
      >
        <div className="relative overflow-hidden" data-cursor="view">
          <div
            className="relative"
            style={{ aspectRatio: variant === "large" ? "3/4" : variant === "compact" ? "1/1" : "4/5" }}
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            />
          </div>

          {product.isLimited && (
            <span className="absolute top-3 right-3 px-2 py-1 bg-[var(--brand-gold)] text-[10px] font-medium text-white rounded-full uppercase tracking-wider">
              Limited
            </span>
          )}

          <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm font-medium">by {product.seller.name}</span>
              <span className="text-white text-sm">View Details</span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-[15px] font-medium text-[var(--text-primary)] line-clamp-1 font-[var(--font-dm-sans)]">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <Image
                src={product.seller.avatar}
                alt={product.seller.name}
                width={20}
                height={20}
                className="object-cover"
              />
            </div>
            <span className="text-[12px] text-[var(--text-muted)]">by {product.seller.name}</span>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-[20px] font-[var(--font-instrument)] italic text-[var(--brand-terracotta)]">
              ${product.price}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-[var(--brand-gold)]">★</span>
              <span className="text-[13px] text-[var(--text-muted)]">{product.rating}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}