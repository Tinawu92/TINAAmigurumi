import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

const testimonials = [
  {
    id: 1,
    quote: "The most adorable amigurumi I've ever received! The attention to detail is incredible, and you can tell it was made with so much love. My daughter hasn't put it down since we unboxed it.",
    author: "Sarah Mitchell",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    product: "Matcha Bear Plushie",
    productImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200",
  },
  {
    id: 2,
    quote: "I've been collecting amigurumi for years, and this is by far the highest quality I've found online. The packaging was beautiful, and the doll arrived even cuter than in the photos!",
    author: "James Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    product: "Rainbow Unicorn Doll",
    productImage: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=200",
  },
  {
    id: 3,
    quote: "Finding unique, handcrafted pieces is becoming rare these days. This marketplace is a game-changer. I bought three miniature sets as gifts, and everyone loved them!",
    author: "Elena Rodriguez",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200",
    product: "Tiny Cactus Friends Set",
    productImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200",
  },
];

export default function Testimonials() {
  return (
    <section className="section-gap px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
              What Collectors Say
            </span>
            <h2 className="mt-2 text-[clamp(24px,4vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
              Loved by Thousands
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <FadeUp key={testimonial.id} delay={i * 0.1}>
              <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-[var(--brand-gold)]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[18px] font-[var(--font-instrument)] italic text-[var(--text-secondary)] leading-[1.6]">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[14px] font-medium text-[var(--text-primary)]">
                      {testimonial.author}
                    </span>
                    <span className="block text-[11px] text-[var(--brand-sage)]">
                      Verified Buyer
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[var(--bg-muted)] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <Image
                      src={testimonial.productImage}
                      alt={testimonial.product}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <Link
                    href={`/shop/${testimonial.product.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--brand-terracotta)] transition-colors"
                  >
                    {testimonial.product}
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}