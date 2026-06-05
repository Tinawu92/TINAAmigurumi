"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import AdminTable from "@/components/admin/AdminTable";

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  featured: boolean;
}

const INITIAL_ARTICLES: Article[] = [
  { id: 1, slug: "how-to-price-your-amigurumi", title: "How to Price Your Amigurumi", excerpt: "Pricing guide", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", category: "Business Tips", author: "Aiko Yamamoto", authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200", date: "May 28, 2026", readTime: "8 min read", featured: true },
  { id: 2, slug: "international-shipping-for-handmade-goods", title: "International Shipping Guide", excerpt: "Shipping tips", image: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=400", category: "Logistics", author: "Marcus Chen", authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200", date: "May 21, 2026", readTime: "6 min read", featured: false },
];

const STORAGE_KEY = "amigurumi_articles";

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Article | null>(null);
  const [form, setForm] = useState<Article>({ id: 0, slug: "", title: "", excerpt: "", image: "", category: "", author: "", authorAvatar: "", date: "", readTime: "", featured: false });
  const [deleteTarget, setDeleteTarget] = useState<Article | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setArticles(JSON.parse(stored));
    } else {
      setArticles(INITIAL_ARTICLES);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_ARTICLES));
    }
  }, []);

  const save = (updated: Article[]) => {
    setArticles(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleAdd = () => {
    setEditing(null);
    setForm({ id: 0, slug: "", title: "", excerpt: "", image: "", category: "", author: "", authorAvatar: "", date: "", readTime: "", featured: false });
    setShowForm(true);
  };

  const handleEdit = (item: Article) => {
    setEditing(item);
    setForm({ ...item });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.title) return;
    if (editing) {
      save(articles.map((a) => (a.id === editing.id ? form : a)));
    } else {
      save([...articles, { ...form, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const handleDelete = (item: Article) => setDeleteTarget(item);
  const confirmDelete = () => {
    save(articles.filter((a) => a.id !== deleteTarget!.id));
    setDeleteTarget(null);
  };

  const columns = [
    { key: "image", label: "封面" },
    { key: "title", label: "标题" },
    { key: "category", label: "分类" },
    { key: "author", label: "作者" },
    { key: "date", label: "日期" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[28px] font-[var(--font-playfair)] italic">文章管理</h1>
      </div>

      <AdminTable columns={columns} data={articles} searchPlaceholder="搜索文章..." onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} addLabel="添加文章" />

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
          <div className="bg-[var(--bg-surface)] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[var(--bg-muted)]">
              <h2 className="text-[18px] font-medium">{editing ? "编辑文章" : "添加文章"}</h2>
              <button onClick={() => setShowForm(false)} className="p-2 hover:bg-[var(--bg-muted)] rounded-lg"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-[13px] text-[var(--text-secondary)] mb-2">标题</label>
                <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
              </div>
              <div>
                <label className="block text-[13px] text-[var(--text-secondary)] mb-2">URL Slug</label>
                <input type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
              </div>
              <div>
                <label className="block text-[13px] text-[var(--text-secondary)] mb-2">分类</label>
                <input type="text" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
              </div>
              <div>
                <label className="block text-[13px] text-[var(--text-secondary)] mb-2">封面图 URL</label>
                <input type="text" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
              </div>
              <div>
                <label className="block text-[13px] text-[var(--text-secondary)] mb-2">摘要</label>
                <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={3} className="w-full px-4 py-3 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] text-[var(--text-secondary)] mb-2">作者</label>
                  <input type="text" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
                </div>
                <div>
                  <label className="block text-[13px] text-[var(--text-secondary)] mb-2">阅读时间</label>
                  <input type="text" value={form.readTime} onChange={(e) => setForm({ ...form, readTime: e.target.value })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
                </div>
              </div>
              <button onClick={handleSave} className="w-full h-12 bg-[var(--brand-terracotta)] text-white rounded-full text-[15px] font-medium hover:brightness-90 transition-all">保存</button>
            </div>
          </div>
        </div>
      )}

      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
          <div className="bg-[var(--bg-surface)] rounded-2xl w-full max-w-sm p-8">
            <h2 className="text-[18px] font-medium mb-2">确认删除</h2>
            <p className="text-[14px] text-[var(--text-muted)] mb-6">确定要删除「{deleteTarget.title}」吗？</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteTarget(null)} className="flex-1 h-12 border border-[var(--bg-muted)] rounded-full text-[14px]">取消</button>
              <button onClick={confirmDelete} className="flex-1 h-12 bg-red-500 text-white rounded-full text-[14px] font-medium">删除</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}