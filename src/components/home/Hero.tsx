"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/mock-products";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const leftElements = leftRef.current?.querySelectorAll(".animate-in");
    const rightElements = rightRef.current?.querySelectorAll(".animate-in");

    if (leftElements) {
      gsap.from(leftElements, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }

    if (rightElements) {
      gsap.from(rightElements, {
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.4,
        ease: "power3.out",
      });
    }
  }, { scope: containerRef });

  const heroProducts = products.slice(0, 3);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} className="max-w-xl">
            <div className="animate-in">
              <span className="text-[11px] tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)] uppercase">
                Handcrafted with Love · Est. 2025
              </span>
            </div>
            <h1 className="mt-6">
              <span className="animate-in block text-[clamp(52px,9vw,110px)] leading-[1.1] font-[var(--font-playfair)] text-[var(--text-primary)]">
                Where Every Stitch
              </span>
              <span className="animate-in block text-[clamp(52px,9vw,110px)] leading-[1.1] font-[var(--font-playfair)] italic text-[var(--brand-terracotta)]">
                Tells a Story
              </span>
            </h1>
            <p className="animate-in mt-6 text-[18px] text-[var(--text-secondary)] leading-[1.7] max-w-[420px] font-[var(--font-dm-sans)]">
              Discover one-of-a-kind Amigurumi dolls from independent makers worldwide. Each piece uniquely crafted, never mass-produced.
            </p>
            <div className="animate-in flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/shop"
                className="px-8 h-12 bg-[var(--brand-terracotta)] text-[var(--text-inverse)] rounded-full text-[15px] font-[var(--font-dm-sans)] font-medium flex items-center gap-2 hover:brightness-90 hover:scale-[1.02] transition-all"
              >
                Explore Collection
              </Link>
              <Link
                href="/seller/apply"
                className="text-[15px] font-[var(--font-dm-sans)] text-[var(--text-primary)] flex items-center gap-2 hover:gap-3 transition-all"
              >
                Become a Maker <ArrowRight size={16} />
              </Link>
            </div>
            <p className="animate-in mt-8 text-[12px] text-[var(--text-muted)] tracking-wide">
              2,400+ pieces · 180+ makers · Ships to 40 countries
            </p>
          </div>

          <div ref={rightRef} className="relative hidden md:flex justify-center items-center h-[500px]">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[var(--brand-blush)] opacity-40 blur-[80px]" />
            <div className="relative flex items-center justify-center">
              {heroProducts.map((product, i) => {
                const rotations = [-3, 2, -1.5];
                const delays = [0, 0.3, 0.6];
                return (
                  <div
                    key={product.id}
                    className="animate-in absolute w-[160px] h-[200px] rounded-xl overflow-hidden shadow-lg border border-[var(--bg-muted)]"
                    style={{
                      transform: `rotate(${rotations[i]}deg)`,
                      animationDelay: `${delays[i]}s`,
                    }}
                  >
                    <div className="w-full h-full" style={{ animation: `float 3s ease-in-out infinite`, animationDelay: `${delays[i]}s` }}>
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}