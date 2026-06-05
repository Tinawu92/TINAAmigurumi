import Link from "next/link";
import { Package, Users, FileText, ArrowRight } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-[28px] font-[var(--font-playfair)] italic mb-8">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { href: "/admin/products", label: "商品管理", desc: "添加、编辑、删除商品", icon: Package },
          { href: "/admin/sellers", label: "卖家管理", desc: "管理卖家信息", icon: Users },
          { href: "/admin/articles", label: "文章管理", desc: "博客文章CRUD", icon: FileText },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl p-8 hover:border-[var(--brand-terracotta)] transition-colors group"
          >
            <div className="w-12 h-12 bg-[var(--brand-blush)] rounded-full flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-[var(--brand-terracotta)]" />
            </div>
            <h2 className="text-[18px] font-medium">{item.label}</h2>
            <p className="mt-1 text-[14px] text-[var(--text-muted)]">{item.desc}</p>
            <div className="mt-4 text-[var(--brand-terracotta)] flex items-center gap-1 text-[13px] group-hover:gap-2 transition-all">
              管理 <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}