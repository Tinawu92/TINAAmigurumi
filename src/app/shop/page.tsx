"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/mock-products";

const categories = [
  { id: "all", label: "All", count: products.length },
  { id: "animals", label: "Animals", count: products.filter((p) => p.category === "animals").length },
  { id: "fantasy", label: "Fantasy", count: products.filter((p) => p.category === "fantasy").length },
  { id: "food", label: "Food", count: products.filter((p) => p.category === "food").length },
  { id: "seasonal", label: "Seasonal", count: products.filter((p) => p.category === "seasonal").length },
  { id: "characters", label: "Characters", count: products.filter((p) => p.category === "characters").length },
];

const sortOptions = [
  { id: "newest", label: "Newest" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "popular", label: "Most Popular" },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (minPrice) {
      result = result.filter((p) => p.price >= Number(minPrice));
    }

    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice));
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [search, selectedCategory, sortBy, minPrice, maxPrice]);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-[260px] flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              <div>
                <h2 className="text-[14px] font-medium mb-4">Filter</h2>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 h-10 border border-[var(--bg-muted)] rounded-lg text-[14px] focus:outline-none focus:border-[var(--brand-terracotta)]"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-[12px] uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center justify-between cursor-pointer hover:text-[var(--brand-terracotta)] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat.id}
                          onChange={() => setSelectedCategory(cat.id)}
                          className="sr-only"
                        />
                        <span className={`text-[14px] ${selectedCategory === cat.id ? "text-[var(--brand-terracotta)]" : ""}`}>
                          {cat.label}
                        </span>
                      </div>
                      <span className="text-[12px] text-[var(--text-muted)]">{cat.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[12px] uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  Price Range
                </h3>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full h-9 px-3 border border-[var(--bg-muted)] rounded-lg text-[13px] focus:outline-none focus:border-[var(--brand-terracotta)]"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full h-9 px-3 border border-[var(--bg-muted)] rounded-lg text-[13px] focus:outline-none focus:border-[var(--brand-terracotta)]"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-[12px] uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  Sort By
                </h3>
                <div className="space-y-2">
                  {sortOptions.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-center gap-2 cursor-pointer hover:text-[var(--brand-terracotta)] transition-colors"
                    >
                      <input
                        type="radio"
                        name="sort"
                        checked={sortBy === opt.id}
                        onChange={() => setSortBy(opt.id)}
                        className="sr-only"
                      />
                      <span className={`text-[14px] ${sortBy === opt.id ? "text-[var(--brand-terracotta)]" : ""}`}>
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {(search || selectedCategory !== "all" || minPrice || maxPrice) && (
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("all");
                    setMinPrice("");
                    setMaxPrice("");
                  }}
                  className="text-[13px] text-[var(--brand-terracotta)] hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          <main className="flex-1">
            <p className="text-[14px] text-[var(--text-muted)] mb-6">
              Showing {filteredProducts.length} handmade pieces
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[var(--text-muted)]">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("all");
                    setMinPrice("");
                    setMaxPrice("");
                  }}
                  className="mt-4 text-[var(--brand-terracotta)] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}