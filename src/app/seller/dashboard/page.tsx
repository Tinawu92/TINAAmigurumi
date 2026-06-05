"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  DollarSign,
  ShoppingBag,
  Package,
  Star,
  TrendingUp,
  Clock,
  Edit,
  Plus,
  Eye,
  MessageCircle,
  Bell,
  ChevronRight,
} from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

const stats = [
  { label: "Total Sales", value: "$2,340", change: "+12%", icon: DollarSign, color: "terracotta" },
  { label: "Orders", value: "23", change: "+5", icon: ShoppingBag, color: "sage" },
  { label: "Products", value: "8", change: "Active", icon: Package, color: "gold" },
  { label: "Rating", value: "4.9", change: "★", icon: Star, color: "terracotta" },
];

const recentOrders = [
  {
    id: "ORD-2847",
    product: "Matcha Bear Plushie",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100",
    buyer: "Sarah M.",
    country: "🇺🇸 USA",
    price: 45,
    status: "Completed",
    date: "2 hours ago",
  },
  {
    id: "ORD-2846",
    product: "Rainbow Unicorn Doll",
    image: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=100",
    buyer: "Emma K.",
    country: "🇬🇧 UK",
    price: 68,
    status: "Shipped",
    date: "5 hours ago",
  },
  {
    id: "ORD-2845",
    product: "Tiny Cactus Friends",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100",
    buyer: "Luca R.",
    country: "🇮🇹 Italy",
    price: 28,
    status: "Processing",
    date: "1 day ago",
  },
  {
    id: "ORD-2844",
    product: "Forest Fox Plushie",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100",
    buyer: "Yuki T.",
    country: "🇯🇵 Japan",
    price: 48,
    status: "Completed",
    date: "2 days ago",
  },
  {
    id: "ORD-2843",
    product: "Moon Rabbit Doll",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=100",
    buyer: "Sophie C.",
    country: "🇺🇸 USA",
    price: 55,
    status: "Completed",
    date: "3 days ago",
  },
];

const quickActions = [
  { label: "Add New Product", icon: Plus, href: "/seller/products/new", color: "terracotta" },
  { label: "View Shop", icon: Eye, href: "/sellers/1", color: "sage" },
  { label: "Messages", icon: MessageCircle, href: "/seller/messages", color: "gold" },
  { label: "Notifications", icon: Bell, href: "/seller/notifications", color: "blush" },
];

const statusColors: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function SellerDashboardPage() {
  const [activeTab, setActiveTab] = useState<"orders" | "products" | "settings">("orders");

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-[32px] font-[var(--font-playfair)] italic">Seller Dashboard</h1>
              <p className="mt-1 text-[15px] text-[var(--text-muted)]">Welcome back, Yuki Tanaka</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/seller/products/new"
                className="h-11 px-5 bg-[var(--brand-terracotta)] text-white rounded-full text-[14px] font-medium flex items-center gap-2 hover:brightness-90 transition-all"
              >
                <Plus size={16} />
                Add Product
              </Link>
              <Link
                href="/seller/shop"
                className="h-11 px-5 border border-[var(--text-primary)] rounded-full text-[14px] font-medium flex items-center gap-2 hover:bg-[var(--bg-muted)] transition-all"
              >
                <Edit size={16} />
                Edit Shop
              </Link>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[12px] text-[var(--text-muted)] uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-[28px] font-medium text-[var(--text-primary)]">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      stat.color === "terracotta"
                        ? "bg-[var(--brand-blush)]"
                        : stat.color === "sage"
                        ? "bg-[var(--brand-sage)]"
                        : stat.color === "gold"
                        ? "bg-[var(--brand-gold)]"
                        : "bg-[var(--brand-blush)]"
                    } bg-opacity-20`}
                  >
                    <stat.icon
                      className={`w-5 h-5 ${
                        stat.color === "terracotta"
                          ? "text-[var(--brand-terracotta)]"
                          : stat.color === "sage"
                          ? "text-[var(--brand-sage)]"
                          : stat.color === "gold"
                          ? "text-[var(--brand-gold)]"
                          : "text-[var(--brand-blush)]"
                      }`}
                    />
                  </div>
                </div>
                <p className="mt-2 text-[12px] text-green-600 font-medium">{stat.change}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <FadeUp delay={0.2}>
              <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-xl overflow-hidden">
                <div className="flex border-b border-[var(--bg-muted)]">
                  {[
                    { key: "orders", label: "Recent Orders" },
                    { key: "products", label: "My Products" },
                    { key: "settings", label: "Settings" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as typeof activeTab)}
                      className={`flex-1 py-4 text-[14px] font-medium transition-colors ${
                        activeTab === tab.key
                          ? "text-[var(--brand-terracotta)] border-b-2 border-[var(--brand-terracotta)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[var(--bg-muted)]">
                        <th className="text-left py-3 px-4 text-[12px] uppercase tracking-wider text-[var(--text-muted)]">
                          Order
                        </th>
                        <th className="text-left py-3 px-4 text-[12px] uppercase tracking-wider text-[var(--text-muted)]">
                          Product
                        </th>
                        <th className="text-left py-3 px-4 text-[12px] uppercase tracking-wider text-[var(--text-muted)]">
                          Buyer
                        </th>
                        <th className="text-left py-3 px-4 text-[12px] uppercase tracking-wider text-[var(--text-muted)]">
                          Price
                        </th>
                        <th className="text-left py-3 px-4 text-[12px] uppercase tracking-wider text-[var(--text-muted)]">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 text-[12px] uppercase tracking-wider text-[var(--text-muted)]">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, i) => (
                        <motion.tr
                          key={order.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="border-t border-[var(--bg-muted)] hover:bg-[var(--bg-muted)] transition-colors"
                        >
                          <td className="py-4 px-4">
                            <span className="text-[14px] font-medium">{order.id}</span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={order.image}
                                  alt={order.product}
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              </div>
                              <span className="text-[14px]">{order.product}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <p className="text-[14px]">{order.buyer}</p>
                              <p className="text-[12px] text-[var(--text-muted)]">{order.country}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-[14px] font-medium">${order.price}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-[11px] font-medium ${
                                statusColors[order.status]
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-[13px] text-[var(--text-muted)]">{order.date}</span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 border-t border-[var(--bg-muted)]">
                  <Link
                    href="/seller/orders"
                    className="flex items-center justify-center gap-2 text-[14px] text-[var(--brand-terracotta)] hover:underline"
                  >
                    View All Orders
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-1">
            <FadeUp delay={0.3}>
              <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-xl p-6 sticky top-28">
                <h3 className="text-[16px] font-medium mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="flex items-center gap-3 p-3 rounded-lg border border-[var(--bg-muted)] hover:border-[var(--brand-terracotta)] hover:bg-[var(--bg-muted)] transition-all"
                    >
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center ${
                          action.color === "terracotta"
                            ? "bg-[var(--brand-blush)]"
                            : action.color === "sage"
                            ? "bg-[var(--brand-sage)]"
                            : action.color === "gold"
                            ? "bg-[var(--brand-gold)]"
                            : "bg-[var(--brand-blush)]"
                        } bg-opacity-20`}
                      >
                        <action.icon
                          className={`w-4 h-4 ${
                            action.color === "terracotta"
                              ? "text-[var(--brand-terracotta)]"
                              : action.color === "sage"
                              ? "text-[var(--brand-sage)]"
                              : action.color === "gold"
                              ? "text-[var(--brand-gold)]"
                              : "text-[var(--brand-blush)]"
                          }`}
                        />
                      </div>
                      <span className="text-[14px]">{action.label}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--bg-muted)]">
                  <div className="flex items-center gap-2 text-[12px] text-[var(--text-muted)]">
                    <Clock size={14} />
                    <span>Last login: Today, 2:34 PM</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        <FadeUp delay={0.4}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-[var(--brand-terracotta)] to-[#D4734A] rounded-xl p-6 text-white">
              <TrendingUp className="w-6 h-6 mb-3" />
              <h4 className="text-[16px] font-medium">Sales Report</h4>
              <p className="mt-1 text-[13px] opacity-80">View detailed analytics for your shop</p>
              <Link
                href="/seller/analytics"
                className="inline-flex items-center gap-1 mt-3 text-[13px] font-medium hover:underline"
              >
                View Report →
              </Link>
            </div>
            <div className="bg-[var(--bg-ink)] rounded-xl p-6 text-[var(--text-inverse)]">
              <Package className="w-6 h-6 mb-3" />
              <h4 className="text-[16px] font-medium">Low Stock Alert</h4>
              <p className="mt-1 text-[13px] opacity-70">2 products are running low</p>
              <Link
                href="/seller/inventory"
                className="inline-flex items-center gap-1 mt-3 text-[13px] font-medium text-[var(--brand-terracotta)] hover:underline"
              >
                Manage Inventory →
              </Link>
            </div>
            <div className="bg-[var(--brand-sage)] rounded-xl p-6 text-white">
              <MessageCircle className="w-6 h-6 mb-3" />
              <h4 className="text-[16px] font-medium">3 New Messages</h4>
              <p className="mt-1 text-[13px] opacity-80">You have unread buyer messages</p>
              <Link
                href="/seller/messages"
                className="inline-flex items-center gap-1 mt-3 text-[13px] font-medium hover:underline"
              >
                Read Messages →
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}