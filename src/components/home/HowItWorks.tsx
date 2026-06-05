"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";

const steps = [
  {
    number: "01",
    title: "Browse & Discover",
    description: "Explore thousands of unique pieces from makers around the world. Filter by category, material, or maker location.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  },
  {
    number: "02",
    title: "Order Directly",
    description: "Purchase straight from the maker. No middlemen, no markup. Your money goes directly to the artist.",
    image: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=800",
  },
  {
    number: "03",
    title: "Receive with Care",
    description: "Every order is packed by hand with love. Track your shipment and unbox something truly special.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    steps.forEach((_, i) => {
      const trigger = `#step-${i}`;
      const stepEl = document.querySelector(trigger);
      if (stepEl) {
        ScrollTrigger.create({
          trigger: trigger,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => {
            gsap.to(`${trigger} .step-number`, {
              opacity: 1,
              color: "#C8603A",
              duration: 0.4,
            });
            gsap.to(`${trigger} .step-content`, {
              opacity: 1,
              duration: 0.4,
            });
          },
          onLeaveBack: () => {
            gsap.to(`${trigger} .step-number`, {
              opacity: 0.15,
              color: "#1A1612",
              duration: 0.4,
            });
            gsap.to(`${trigger} .step-content`, {
              opacity: 0.4,
              duration: 0.4,
            });
          },
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="h-[300vh] relative"
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-5 gap-12 items-center h-[60vh]">
            <div className="md:col-span-2 space-y-16">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  id={`step-${i}`}
                  className="space-y-4"
                >
                  <span className="step-number text-[120px] font-[var(--font-playfair)] opacity-15 leading-none text-[var(--text-primary)] transition-colors">
                    {step.number}
                  </span>
                  <div className="step-content opacity-40 transition-opacity">
                    <h3 className="text-[28px] font-[var(--font-playfair)] text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[18px] text-[var(--text-secondary)] leading-[1.7] max-w-[380px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:col-span-3 relative h-full flex items-center justify-center">
              <div className="relative w-full h-[500px]">
                {steps.map((step, i) => (
                  <div
                    key={step.number}
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: i === 0 ? 1 : 0 }}
                  >
                    <div
                      className="w-full h-full rounded-3xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${step.image})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}