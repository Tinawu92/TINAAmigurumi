"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/sellers", label: "Makers" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(247,243,238,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-[20px] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
            AMIGUMI
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-[var(--font-dm-sans)] text-[var(--text-primary)] relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1px] bg-[var(--brand-terracotta)] transition-all duration-300 w-0 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-[var(--bg-muted)] rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-[var(--bg-muted)] rounded-full transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--brand-terracotta)] rounded-full text-[10px] text-white flex items-center justify-center">
                3
              </span>
            </button>
            <Link
              href="/seller/apply"
              className="px-5 py-2 border border-[var(--text-primary)] rounded-full text-[14px] font-[var(--font-dm-sans)] hover:bg-[var(--bg-muted)] transition-colors"
            >
              Start Selling
            </Link>
            <button className="w-9 h-9 rounded-full bg-[var(--brand-blush)] flex items-center justify-center text-[14px] font-medium">
              T
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-[var(--bg-canvas)]"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-6">
                <button onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1 flex flex-col items-center justify-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[24px] font-[var(--font-playfair)] text-[var(--text-primary)]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    href="/seller/apply"
                    onClick={() => setMobileOpen(false)}
                    className="px-6 py-3 bg-[var(--brand-terracotta)] text-white rounded-full text-[16px] font-medium"
                  >
                    Start Selling
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}