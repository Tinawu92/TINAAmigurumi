"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Package, Users, FileText, LogOut, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/admin/login");
    }
  }, [isLoading, isLoggedIn, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-canvas)]">
        <p className="text-[var(--text-muted)]">Loading...</p>
      </div>
    );
  }

  if (!isLoggedIn) return null;

  const navItems = [
    { href: "/admin/products", label: "商品管理", icon: Package },
    { href: "/admin/sellers", label: "卖家管理", icon: Users },
    { href: "/admin/articles", label: "文章管理", icon: FileText },
  ];

  return (
    <div className="min-h-screen flex bg-[var(--bg-canvas)]">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--bg-ink)] text-[var(--text-inverse)] flex flex-col">
        <div className="p-6 border-b border-[var(--text-inverse)] border-opacity-10">
          <Link href="/" className="text-[20px] font-[var(--font-playfair)] italic">
            AMIGUMI
          </Link>
          <p className="mt-1 text-[12px] opacity-50">Admin Dashboard</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-[14px] hover:bg-[var(--text-inverse)] hover:bg-opacity-10 transition-colors"
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[var(--text-inverse)] border-opacity-10">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-[14px] hover:bg-[var(--text-inverse)] hover:bg-opacity-10 transition-colors mb-2"
          >
            <X size={18} />
            返回网站
          </Link>
          <button
            onClick={() => { logout(); router.push("/admin/login"); }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[14px] hover:bg-red-500 hover:bg-opacity-20 hover:text-red-400 transition-colors"
          >
            <LogOut size={18} />
            退出登录
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}