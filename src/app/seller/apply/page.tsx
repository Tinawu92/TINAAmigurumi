"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Shield, TrendingUp, Heart, Star } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

const benefits = [
  {
    icon: TrendingUp,
    title: "Global Reach",
    description: "Your products reach buyers in 40+ countries worldwide",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "We handle transactions securely with buyer protection",
  },
  {
    icon: Heart,
    title: "12% Commission",
    description: "Only 12% platform fee — you keep 88% of every sale",
  },
  {
    icon: Star,
    title: "Premium Placement",
    description: "Featured placement in search results and collections",
  },
  {
    icon: Globe,
    title: "Multi-language",
    description: "Automatic translation to connect with international buyers",
  },
];

export default function SellerApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    shopName: "",
    country: "",
    email: "",
    instagram: "",
    twitter: "",
    website: "",
    description: "",
    specialty: "",
    agreeTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.shopName.trim()) newErrors.shopName = "Shop name is required";
    if (!formData.country) newErrors.country = "Please select your country";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.description.trim()) newErrors.description = "Please tell us about your craft";
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="mt-6 text-[32px] font-[var(--font-playfair)] italic">
            Application Submitted!
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
            Thank you for applying to sell on Amigumi Market. Our team will review your application within 2–3 business days and get back to you at <strong>{formData.email}</strong>.
          </p>
          <p className="mt-4 text-[14px] text-[var(--text-muted)]">
            In the meantime, feel free to prepare your product listings and shop profile.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
              Start Selling
            </span>
            <h1 className="mt-4 text-[clamp(36px,6vw,72px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
              Become a Maker
            </h1>
            <p className="mt-4 text-[18px] text-[var(--text-secondary)] max-w-[540px] mx-auto">
              Join our community of 180+ independent makers selling handcrafted pieces to collectors worldwide.
            </p>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-8"
            >
              <h2 className="text-[24px] font-[var(--font-playfair)] mb-6">Application Form</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] font-medium mb-2">
                      Your Name <span className="text-[var(--brand-terracotta)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Yuki Tanaka"
                      className={`w-full h-12 px-4 border rounded-lg text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors ${
                        errors.name ? "border-red-500" : "border-[var(--bg-muted)]"
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium mb-2">
                      Shop Name <span className="text-[var(--brand-terracotta)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="shopName"
                      value={formData.shopName}
                      onChange={handleChange}
                      placeholder="Tanaka Crafts"
                      className={`w-full h-12 px-4 border rounded-lg text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors ${
                        errors.shopName ? "border-red-500" : "border-[var(--bg-muted)]"
                      }`}
                    />
                    {errors.shopName && <p className="mt-1 text-[12px] text-red-500">{errors.shopName}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] font-medium mb-2">
                      Country <span className="text-[var(--brand-terracotta)]">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 border rounded-lg text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors appearance-none bg-white ${
                        errors.country ? "border-red-500" : "border-[var(--bg-muted)]"
                      }`}
                    >
                      <option value="">Select your country</option>
                      <option value="JP">Japan</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="ES">Spain</option>
                      <option value="IT">Italy</option>
                      <option value="KR">South Korea</option>
                      <option value="CN">China</option>
                      <option value="BR">Brazil</option>
                      <option value="MX">Mexico</option>
                      <option value="OTHER">Other</option>
                    </select>
                    {errors.country && <p className="mt-1 text-[12px] text-red-500">{errors.country}</p>}
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium mb-2">
                      Email <span className="text-[var(--brand-terracotta)]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yuki@example.com"
                      className={`w-full h-12 px-4 border rounded-lg text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors ${
                        errors.email ? "border-red-500" : "border-[var(--bg-muted)]"
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium mb-2">
                    What do you make? <span className="text-[var(--brand-terracotta)]">*</span>
                  </label>
                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-lg text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors appearance-none bg-white"
                  >
                    <option value="">Select your specialty</option>
                    <option value="animals">Animals & Plushies</option>
                    <option value="fantasy">Fantasy & Mythical Creatures</option>
                    <option value="food">Food & Everyday Items</option>
                    <option value="characters">Characters & Pop Culture</option>
                    <option value="seasonal">Seasonal & Holiday</option>
                    <option value="other">Other Handcrafted Items</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] font-medium mb-2">
                    Tell us about your craft <span className="text-[var(--brand-terracotta)]">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share your story, your craft, and what makes your pieces unique..."
                    className={`w-full px-4 py-3 border rounded-lg text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors resize-none ${
                      errors.description ? "border-red-500" : "border-[var(--bg-muted)]"
                    }`}
                  />
                  {errors.description && <p className="mt-1 text-[12px] text-red-500">{errors.description}</p>}
                </div>

                <div className="pt-4">
                  <h3 className="text-[14px] font-medium mb-4">Social Links (Optional)</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[12px] text-[var(--text-muted)] mb-1">Instagram</label>
                      <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="@yourprofile"
                        className="w-full h-11 px-3 border border-[var(--bg-muted)] rounded-lg text-[14px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] text-[var(--text-muted)] mb-1">Twitter / X</label>
                      <input
                        type="text"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleChange}
                        placeholder="@yourprofile"
                        className="w-full h-11 px-3 border border-[var(--bg-muted)] rounded-lg text-[14px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] text-[var(--text-muted)] mb-1">Website</label>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="www.yourshop.com"
                        className="w-full h-11 px-3 border border-[var(--bg-muted)] rounded-lg text-[14px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[14px] font-medium mb-4">Portfolio Images (Optional)</h3>
                  <div className="border-2 border-dashed border-[var(--bg-muted)] rounded-xl p-8 text-center hover:border-[var(--brand-terracotta)] transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-[var(--bg-muted)] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">📷</span>
                    </div>
                    <p className="text-[15px] text-[var(--text-secondary)]">
                      Drag and drop your images here, or
                    </p>
                    <p className="mt-1 text-[14px] text-[var(--brand-terracotta)]">
                      click to browse
                    </p>
                    <p className="mt-3 text-[12px] text-[var(--text-muted)]">
                      PNG, JPG up to 10MB each
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-[var(--bg-muted)] text-[var(--brand-terracotta)] focus:ring-[var(--brand-terracotta)]"
                    />
                    <span className="text-[14px] text-[var(--text-secondary)]">
                      I agree to the{" "}
                      <a href="#" className="text-[var(--brand-terracotta)] hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-[var(--brand-terracotta)] hover:underline">
                        Seller Guidelines
                      </a>
                      , and confirm that all items I sell are handcrafted by myself.
                    </span>
                  </label>
                  {errors.agreeTerms && <p className="mt-1 text-[12px] text-red-500">{errors.agreeTerms}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full h-14 bg-[var(--brand-terracotta)] text-white rounded-full text-[16px] font-medium hover:brightness-90 transition-all"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[var(--bg-ink)] to-[#2A2420] rounded-2xl p-8 text-[var(--text-inverse)] sticky top-28"
            >
              <h3 className="text-[20px] font-[var(--font-playfair)] italic">
                Why Sell on Amigumi?
              </h3>

              <div className="mt-8 space-y-6">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--brand-terracotta)] flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-medium">{benefit.title}</h4>
                      <p className="mt-1 text-[13px] text-[var(--text-inverse)] opacity-70">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--text-inverse)] border-opacity-20">
                <div className="text-center">
                  <span className="text-[48px] font-[var(--font-playfair)] italic text-[var(--brand-terracotta)]">
                    12%
                  </span>
                  <p className="mt-2 text-[14px] text-[var(--text-inverse)] opacity-70">
                    platform commission
                  </p>
                  <p className="mt-1 text-[12px] text-[var(--text-inverse)] opacity-50">
                    You keep 88% of every sale
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-[12px] text-[var(--text-inverse)] opacity-50">
                  Questions? Email us at{" "}
                  <span className="text-[var(--brand-terracotta)]">makers@amigumi.market</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}