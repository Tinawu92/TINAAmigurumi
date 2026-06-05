"use client";
import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Minus, Plus, ShoppingBag, Heart, Package } from "lucide-react";
import { products } from "@/data/mock-products";
import ProductCard from "@/components/shop/ProductCard";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-[var(--font-playfair)]">Product not found</h1>
          <Link href="/shop" className="mt-4 text-[var(--brand-terracotta)] hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const seller = { id: product.seller.id, name: product.seller.name, avatar: product.seller.avatar, location: product.seller.location, country: product.seller.country, rating: product.seller.rating, totalSales: product.seller.totalSales, isVerified: product.seller.rating >= 4.9 };
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="text-[12px] text-[var(--text-muted)] mb-8 flex items-center gap-2">
          <Link href="/shop">Shop</Link>
          <ChevronRight size={12} />
          <Link href={`/shop?category=${product.category}`}>{product.category}</Link>
          <ChevronRight size={12} />
          <span>{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[4/5] rounded-2xl overflow-hidden mb-4"
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-[var(--brand-terracotta)]" : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 border border-[var(--brand-gold)] text-[var(--brand-gold)] text-[12px] rounded-full uppercase tracking-wider">
                One of a Kind
              </span>
              <span className="px-3 py-1 bg-[var(--brand-sage)] text-white text-[12px] rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-[36px] font-[var(--font-playfair)] text-[var(--text-primary)]">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <Link
                href={`/sellers/${product.seller.id}`}
                className="text-[14px] hover:text-[var(--brand-terracotta)] transition-colors"
              >
                by {product.seller.name}
              </Link>
              <span className="text-[var(--text-muted)]">·</span>
              <span className="text-[14px] text-[var(--text-muted)]">
                ★ {product.rating} · {product.reviewCount} reviews
              </span>
            </div>

            <p className="text-[32px] font-[var(--font-instrument)] italic text-[var(--brand-terracotta)] mt-6">
              ${product.price}
            </p>

            <p className="mt-6 text-[16px] text-[var(--text-secondary)] leading-[1.7]">
              {showFullDescription ? product.description : product.description.slice(0, 100) + "..."}
            </p>
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="mt-2 text-[14px] text-[var(--brand-terracotta)] hover:underline"
            >
              {showFullDescription ? "Read less" : "Read more"}
            </button>

            <div className="mt-8 pt-6 border-t border-[var(--bg-muted)]">
              <div className="mb-4">
                <span className="text-[12px] uppercase tracking-wider text-[var(--text-muted)]">
                  Materials
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.materials.map((mat) => (
                    <span
                      key={mat}
                      className="px-3 py-1 bg-[var(--bg-muted)] text-[12px] rounded-full"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[var(--bg-muted)] rounded-lg">
                  <span className="block text-[20px] mb-1">📏</span>
                  <span className="text-[11px] text-[var(--text-muted)]">Height</span>
                  <span className="block text-[14px] font-medium">{product.dimensions.height}</span>
                </div>
                <div className="text-center p-4 bg-[var(--bg-muted)] rounded-lg">
                  <span className="block text-[20px] mb-1">↔</span>
                  <span className="text-[11px] text-[var(--text-muted)]">Width</span>
                  <span className="block text-[14px] font-medium">{product.dimensions.width}</span>
                </div>
                <div className="text-center p-4 bg-[var(--bg-muted)] rounded-lg">
                  <span className="block text-[20px] mb-1">⚖</span>
                  <span className="text-[11px] text-[var(--text-muted)]">Weight</span>
                  <span className="block text-[14px] font-medium">{product.dimensions.weight}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full h-14 bg-[var(--brand-terracotta)] text-white rounded-full text-[15px] font-medium flex items-center justify-center gap-2 hover:brightness-90 transition-all">
                <ShoppingBag size={20} />
                Add to Cart
              </button>
              <button className="w-full h-14 border border-[var(--text-primary)] rounded-full text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-[var(--bg-muted)] transition-all">
                <Heart size={20} />
                Save to Wishlist
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--bg-muted)]">
              <button
                onClick={() => setShippingOpen(!shippingOpen)}
                className="w-full flex items-center justify-between"
              >
                <span className="flex items-center gap-2 text-[15px] font-medium">
                  <Package size={18} />
                  Shipping & Returns
                </span>
                {shippingOpen ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              <AnimatePresence>
                {shippingOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2 text-[14px] text-[var(--text-secondary)] space-y-2">
                      <p>Estimated delivery: 7–14 business days</p>
                      <p>Free returns within 14 days</p>
                      <p>Ships from {product.seller.location}, {product.seller.country}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-[var(--bg-muted)]">
          <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] font-[var(--font-playfair)]">{product.seller.name}</h3>
                <p className="mt-1 text-[14px] text-[var(--text-secondary)]">
                  {product.seller.location}, {product.seller.country}
                </p>
                <div className="flex flex-wrap gap-4 mt-3 text-[13px] text-[var(--text-muted)]">
                  <span>★ {product.seller.rating} rating</span>
                  <span>·</span>
                  <span>{product.seller.totalSales} sales</span>
                  <span>·</span>
                  <span>{seller.isVerified ? "Verified" : "Unverified"}</span>
                </div>
                <Link
                  href={`/sellers/${product.seller.id}`}
                  className="inline-block mt-4 text-[14px] text-[var(--brand-terracotta)] hover:underline"
                >
                  Visit Shop →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-[28px] font-[var(--font-playfair)] italic mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}