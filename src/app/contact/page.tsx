"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, HelpCircle, MessageCircle, Send, CheckCircle2, MapPin, Phone } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 7–14 business days for international orders. Domestic orders usually arrive within 3–5 business days.",
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 14 days of delivery for unused items. Handmade pieces may have slight variations from photos, which we consider part of their unique charm.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can also check your order status in your account dashboard.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer: "Orders can be modified within 24 hours of placement. After that, your maker may have already begun crafting. Contact us and we'll do our best to help.",
  },
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@amigumi.market",
    subtext: "We reply within 24 hours",
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "Monday – Friday: 9am – 6pm JST",
    subtext: "Saturday: 10am – 2pm JST",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    content: "Quick answers to common questions",
    subtext: "Browse our help center →",
    href: "#faq",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
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

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--brand-sage)] font-[var(--font-dm-sans)]">
              Get in Touch
            </span>
            <h1 className="mt-4 text-[clamp(36px,6vw,72px)] font-[var(--font-playfair)] italic text-[var(--text-primary)]">
              Contact Us
            </h1>
            <p className="mt-4 text-[18px] text-[var(--text-secondary)] max-w-[540px] mx-auto">
              Have a question, feedback, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <FadeUp>
              <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-8 sticky top-28">
                <h2 className="text-[20px] font-[var(--font-playfair)] mb-6">Contact Information</h2>

                <div className="space-y-6">
                  {contactInfo.map((info, i) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-[var(--brand-blush)] rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-[var(--brand-terracotta)]" />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-medium">{info.title}</h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-[15px] text-[var(--brand-terracotta)] hover:underline"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-[15px] text-[var(--text-secondary)]">{info.content}</p>
                        )}
                        <p className="mt-1 text-[13px] text-[var(--text-muted)]">{info.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-[var(--bg-muted)]">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-[var(--bg-muted)] rounded-full flex items-center justify-center text-[18px] hover:bg-[var(--brand-terracotta)] hover:text-white transition-all"
                    >
                      📷
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[var(--bg-muted)] rounded-full flex items-center justify-center text-[18px] hover:bg-[var(--brand-terracotta)] hover:text-white transition-all"
                    >
                      📌
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[var(--bg-muted)] rounded-full flex items-center justify-center text-[18px] hover:bg-[var(--brand-terracotta)] hover:text-white transition-all"
                    >
                      ▶️
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-2">
            <FadeUp delay={0.1}>
              <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="mt-6 text-[24px] font-[var(--font-playfair)]">
                      Message Sent!
                    </h3>
                    <p className="mt-3 text-[var(--text-secondary)] max-w-[400px] mx-auto">
                      Thank you for reaching out. We'll get back to you at{" "}
                      <strong>{formData.email}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="mt-6 text-[var(--brand-terracotta)] hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-[20px] font-[var(--font-playfair)] mb-6">
                      Send us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[14px] font-medium mb-2">
                            Name <span className="text-[var(--brand-terracotta)]">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className={`w-full h-12 px-4 border rounded-lg text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors ${
                              errors.name
                                ? "border-red-500"
                                : "border-[var(--bg-muted)]"
                            }`}
                          />
                          {errors.name && (
                            <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>
                          )}
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
                            placeholder="your@email.com"
                            className={`w-full h-12 px-4 border rounded-lg text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors ${
                              errors.email
                                ? "border-red-500"
                                : "border-[var(--bg-muted)]"
                            }`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[14px] font-medium mb-2">
                          Subject <span className="text-[var(--brand-terracotta)]">*</span>
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full h-12 px-4 border rounded-lg text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors appearance-none bg-white ${
                            errors.subject
                              ? "border-red-500"
                              : "border-[var(--bg-muted)]"
                          }`}
                        >
                          <option value="">Select a topic</option>
                          <option value="order">Order Inquiry</option>
                          <option value="product">Product Question</option>
                          <option value="seller">Selling on Amigumi</option>
                          <option value="bug">Report a Bug</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.subject && (
                          <p className="mt-1 text-[12px] text-red-500">{errors.subject}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[14px] font-medium mb-2">
                          Message <span className="text-[var(--brand-terracotta)]">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="How can we help you?"
                          className={`w-full px-4 py-3 border rounded-lg text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] transition-colors resize-none ${
                            errors.message
                              ? "border-red-500"
                              : "border-[var(--bg-muted)]"
                          }`}
                        />
                        {errors.message && (
                          <p className="mt-1 text-[12px] text-red-500">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full h-14 bg-[var(--brand-terracotta)] text-white rounded-full text-[16px] font-medium flex items-center justify-center gap-2 hover:brightness-90 transition-all"
                      >
                        <Send size={18} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div id="faq" className="mt-12">
                <h2 className="text-[24px] font-[var(--font-playfair)] italic mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedFaq(expandedFaq === i ? null : i)
                        }
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="text-[15px] font-medium pr-4">{faq.question}</span>
                        <span
                          className={`text-[var(--brand-terracotta)] text-[20px] transition-transform ${
                            expandedFaq === i ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                      {expandedFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}