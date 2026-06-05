"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Users, Heart, Sparkles } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

const teamMembers = [
  {
    name: "Aiko Yamamoto",
    role: "Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    location: "Tokyo, Japan",
  },
  {
    name: "Marcus Chen",
    role: "Head of Product",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    location: "San Francisco, USA",
  },
  {
    name: "Sofia Rodriguez",
    role: "Community Manager",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400",
    location: "Barcelona, Spain",
  },
  {
    name: "James Kim",
    role: "Engineering Lead",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    location: "Seoul, South Korea",
  },
];

const values = [
  {
    icon: Heart,
    title: "Handmade with Love",
    description: "Every piece in our marketplace represents hours of careful craftsmanship. We celebrate the human touch in every stitch.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Our makers are our family. We listen to their feedback, support their growth, and champion their success at every step.",
  },
  {
    icon: Sparkles,
    title: "Quality Over Quantity",
    description: "We'd rather have 1,000 truly special pieces than 1 million generic ones. Curation is at the heart of what we do.",
  },
];

export default function AboutPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="section-gap px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center max-w-[640px] mx-auto">
              <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
                Our Story
              </span>
              <h1 className="mt-4 text-[clamp(36px,6vw,72px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
                Connecting Hearts Through Handcraft
              </h1>
              <p className="mt-6 text-[18px] text-[var(--text-secondary)] leading-relaxed">
                Amigumi Market was born from a simple belief: every handmade doll carries a piece of its maker's soul. We built this marketplace to give independent artisans a global stage while helping collectors discover pieces that will be treasured for generations.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-gap bg-[var(--bg-ink)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-inverse)] opacity-60 font-[var(--font-dm-sans)]">
                  Our Mission
                </span>
                <h2 className="mt-4 text-[clamp(28px,4vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-inverse)]">
                  Preserve the Art of Handmaking
                </h2>
                <p className="mt-4 text-[16px] text-[var(--text-inverse)] opacity-70 leading-relaxed">
                  In a world of mass production, we champion the slow, intentional craft of amigurumi-making. Each doll in our marketplace represents hours of meticulous work, creativity, and passion. We're committed to keeping this art form alive by ensuring makers earn fair wages and find appreciative collectors worldwide.
                </p>
                <p className="mt-4 text-[16px] text-[var(--text-inverse)] opacity-70 leading-relaxed">
                  We believe that when you buy handmade, you're not just purchasing an object — you're investing in a story, supporting a dream, and keeping a tradition alive.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                  alt="Handcrafted amigurumi dolls"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-gap px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
                What We Believe
              </span>
              <h2 className="mt-2 text-[clamp(28px,4vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
                Our Core Values
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <FadeUp key={value.title} delay={i * 0.1}>
                <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-[var(--brand-blush)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-[var(--brand-terracotta)]" />
                  </div>
                  <h3 className="text-[20px] font-[var(--font-playfair)]">{value.title}</h3>
                  <p className="mt-3 text-[15px] text-[var(--text-secondary)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap bg-[var(--bg-muted)] px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
                The Team
              </span>
              <h2 className="mt-2 text-[clamp(28px,4vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
                Meet the People Behind Amigumi
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center"
                >
                  <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-[16px] font-medium text-[var(--text-primary)]">
                    {member.name}
                  </h4>
                  <p className="mt-1 text-[13px] text-[var(--brand-terracotta)]">
                    {member.role}
                  </p>
                  <p className="mt-1 text-[12px] text-[var(--text-muted)]">
                    {member.location}
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
                By the Numbers
              </span>
              <h2 className="mt-2 text-[clamp(28px,4vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
                A Growing Community
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2,400+", label: "Handmade Pieces" },
              { number: "180+", label: "Independent Makers" },
              { number: "40+", label: "Countries Shipped" },
              { number: "12%", label: "Platform Commission" },
            ].map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="text-[clamp(32px,5vw,56px)] font-[var(--font-playfair)] italic text-[var(--brand-terracotta)]">
                    {stat.number}
                  </span>
                  <p className="mt-2 text-[14px] text-[var(--text-muted)]">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap bg-[var(--bg-ink)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeUp>
              <div>
                <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-inverse)] opacity-60 font-[var(--font-dm-sans)]">
                  Get in Touch
                </span>
                <h2 className="mt-4 text-[clamp(28px,4vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-inverse)]">
                  Contact Us
                </h2>
                <p className="mt-4 text-[16px] text-[var(--text-inverse)] opacity-70 leading-relaxed">
                  Have a question, feedback, or just want to say hello? We'd love to hear from you.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--brand-terracotta)] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-medium text-[var(--text-inverse)]">Email</h4>
                      <p className="mt-1 text-[15px] text-[var(--text-inverse)] opacity-70">
                        hello@amigumi.market
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--brand-terracotta)] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-medium text-[var(--text-inverse)]">Office</h4>
                      <p className="mt-1 text-[15px] text-[var(--text-inverse)] opacity-70">
                        123 Craft Street, Shibuya<br />
                        Tokyo, Japan 150-0001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--brand-terracotta)] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-medium text-[var(--text-inverse)]">Support Hours</h4>
                      <p className="mt-1 text-[15px] text-[var(--text-inverse)] opacity-70">
                        Monday – Friday: 9am – 6pm JST<br />
                        Saturday: 10am – 2pm JST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-[var(--bg-surface)] rounded-2xl p-8">
                <h3 className="text-[20px] font-[var(--font-playfair)]">Stay Updated</h3>
                <p className="mt-2 text-[15px] text-[var(--text-secondary)]">
                  Subscribe to our newsletter for maker spotlights, new features, and handmade inspiration.
                </p>

                {subscribed ? (
                  <div className="mt-6 text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">✨</span>
                    </div>
                    <p className="text-[18px] font-medium text-[var(--text-primary)]">
                      You're subscribed!
                    </p>
                    <p className="mt-2 text-[14px] text-[var(--text-muted)]">
                      Welcome to the Amigumi family.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="mt-6">
                    <div className="flex gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="flex-1 h-12 px-4 border border-[var(--bg-muted)] rounded-full text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]"
                      />
                      <button
                        type="submit"
                        className="h-12 px-6 bg-[var(--brand-terracotta)] text-white rounded-full text-[15px] font-medium hover:brightness-90 transition-all"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p className="mt-3 text-[12px] text-[var(--text-muted)]">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-gap bg-gradient-to-br from-[var(--bg-canvas)] to-[var(--bg-muted)] px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-[clamp(28px,4vw,48px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
              Ready to Join Our Community?
            </h2>
            <p className="mt-4 text-[16px] text-[var(--text-secondary)] max-w-[480px] mx-auto">
              Whether you're a maker looking to share your craft or a collector seeking unique pieces, there's a place for you at Amigumi Market.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/seller/apply"
                className="px-8 h-12 bg-[var(--brand-terracotta)] text-white rounded-full text-[15px] font-medium flex items-center hover:brightness-90 transition-all"
              >
                Apply to Sell
              </Link>
              <Link
                href="/shop"
                className="px-8 h-12 border border-[var(--text-primary)] rounded-full text-[15px] font-medium flex items-center hover:bg-[var(--bg-surface)] transition-all"
              >
                Browse Collection
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}