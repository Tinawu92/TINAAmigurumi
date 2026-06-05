"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import AdminTable from "@/components/admin/AdminTable";

interface Seller {
  id: string;
  name: string;
  avatar: string;
  location: string;
  country: string;
  specialty: string;
  bio: string;
  rating: number;
  totalSales: number;
  isVerified: boolean;
}

const INITIAL_SELLERS: Seller[] = [
  { id: "1", name: "Miyuki Nakamura", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200", location: "Tokyo", country: "Japan", specialty: "Animals", bio: "Passionate doll maker", rating: 4.9, totalSales: 342, isVerified: true },
  { id: "2", name: "Emma Lindberg", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200", location: "Stockholm", country: "Sweden", specialty: "Characters", bio: "Creating since 2018", rating: 4.8, totalSales: 218, isVerified: true },
];

const STORAGE_KEY = "amigurumi_sellers";

export default function AdminSellersPage() {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Seller | null>(null);
  const [form, setForm] = useState<Seller>({ id: "", name: "", avatar: "", location: "", country: "", specialty: "", bio: "", rating: 0, totalSales: 0, isVerified: false });
  const [deleteTarget, setDeleteTarget] = useState<Seller | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setSellers(JSON.parse(stored));
    } else {
      setSellers(INITIAL_SELLERS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SELLERS));
    }
  }, []);

  const save = (updated: Seller[]) => {
    setSellers(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleAdd = () => {
    setEditing(null);
    setForm({ id: "", name: "", avatar: "", location: "", country: "", specialty: "", bio: "", rating: 0, totalSales: 0, isVerified: false });
    setShowForm(true);
  };

  const handleEdit = (item: Seller) => {
    setEditing(item);
    setForm({ ...item });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.name) return;
    if (editing) {
      save(sellers.map((s) => (s.id === editing.id ? form : s)));
    } else {
      save([...sellers, { ...form, id: Date.now().toString() }]);
    }
    setShowForm(false);
  };

  const handleDelete = (item: Seller) => setDeleteTarget(item);
  const confirmDelete = () => {
    save(sellers.filter((s) => s.id !== deleteTarget!.id));
    setDeleteTarget(null);
  };

  const columns = [
    { key: "avatar", label: "头像" },
    { key: "name", label: "名称" },
    { key: "location", label: "地区" },
    { key: "specialty", label: "专长" },
    { key: "rating", label: "评分" },
    { key: "totalSales", label: "销量" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[28px] font-[var(--font-playfair)] italic">卖家管理</h1>
      </div>

      <AdminTable columns={columns} data={sellers} searchPlaceholder="搜索卖家..." onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} addLabel="添加卖家" />

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
          <div className="bg-[var(--bg-surface)] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[var(--bg-muted)]">
              <h2 className="text-[18px] font-medium">{editing ? "编辑卖家" : "添加卖家"}</h2>
              <button onClick={() => setShowForm(false)} className="p-2 hover:bg-[var(--bg-muted)] rounded-lg"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] text-[var(--text-secondary)] mb-2">名称</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
                </div>
                <div>
                  <label className="block text-[13px] text-[var(--text-secondary)] mb-2">专长</label>
                  <input type="text" value={form.specialty} onChange={(e) => setForm({ ...form, specialty: e.target.value })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] text-[var(--text-secondary)] mb-2">城市</label>
                  <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
                </div>
                <div>
                  <label className="block text-[13px] text-[var(--text-secondary)] mb-2">国家</label>
                  <input type="text" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] text-[var(--text-secondary)] mb-2">头像 URL</label>
                <input type="text" value={form.avatar} onChange={(e) => setForm({ ...form, avatar: e.target.value })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
              </div>
              <div>
                <label className="block text-[13px] text-[var(--text-secondary)] mb-2">简介</label>
                <textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} rows={3} className="w-full px-4 py-3 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] resize-none" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-[13px] text-[var(--text-secondary)] mb-2">评分</label>
                  <input type="number" step="0.1" value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
                </div>
                <div>
                  <label className="block text-[13px] text-[var(--text-secondary)] mb-2">销量</label>
                  <input type="number" value={form.totalSales} onChange={(e) => setForm({ ...form, totalSales: Number(e.target.value) })} className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]" />
                </div>
                <div className="flex items-center pt-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={form.isVerified} onChange={(e) => setForm({ ...form, isVerified: e.target.checked })} className="w-5 h-5 rounded" />
                    <span className="text-[13px]">已认证</span>
                  </label>
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
            <p className="text-[14px] text-[var(--text-muted)] mb-6">确定要删除「{deleteTarget.name}」吗？</p>
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