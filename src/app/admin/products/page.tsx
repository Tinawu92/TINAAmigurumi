"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import AdminTable from "@/components/admin/AdminTable";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  seller: string;
  description: string;
}

const INITIAL_PRODUCTS: Product[] = [
  { id: "1", name: "Forest Fox Amigurumi", price: 28, category: "Animals", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", seller: "1", description: "Handcrafted fox doll" },
  { id: "2", name: "Pastel Bunny", price: 25, category: "Animals", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400", seller: "2", description: "Soft bunny plush" },
];

const STORAGE_KEY = "amigurumi_products";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState<Product>({ id: "", name: "", price: 0, category: "", image: "", seller: "", description: "" });
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts(INITIAL_PRODUCTS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
    }
  }, []);

  const save = (updated: Product[]) => {
    setProducts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleAdd = () => {
    setEditing(null);
    setForm({ id: Date.now().toString(), name: "", price: 0, category: "", image: "", seller: "", description: "" });
    setShowForm(true);
  };

  const handleEdit = (item: Product) => {
    setEditing(item);
    setForm({ ...item });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.name || !form.price) return;
    if (editing) {
      save(products.map((p) => (p.id === editing.id ? form : p)));
    } else {
      save([...products, { ...form, id: Date.now().toString() }]);
    }
    setShowForm(false);
  };

  const handleDelete = (item: Product) => {
    setDeleteTarget(item);
  };

  const confirmDelete = () => {
    save(products.filter((p) => p.id !== deleteTarget!.id));
    setDeleteTarget(null);
  };

  const columns = [
    { key: "image", label: "图片" },
    { key: "name", label: "名称" },
    { key: "price", label: "价格" },
    { key: "category", label: "分类" },
    { key: "description", label: "描述" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[28px] font-[var(--font-playfair)] italic">商品管理</h1>
      </div>

      <AdminTable
        columns={columns}
        data={products}
        searchPlaceholder="搜索商品..."
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        addLabel="添加商品"
      />

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
          <div className="bg-[var(--bg-surface)] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[var(--bg-muted)]">
              <h2 className="text-[18px] font-medium">{editing ? "编辑商品" : "添加商品"}</h2>
              <button onClick={() => setShowForm(false)} className="p-2 hover:bg-[var(--bg-muted)] rounded-lg">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-[13px] text-[var(--text-secondary)] mb-2">商品名称</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] text-[var(--text-secondary)] mb-2">价格 ($)</label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                    className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-[var(--text-secondary)] mb-2">分类</label>
                  <input
                    type="text"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]"
                    placeholder="Animals"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[13px] text-[var(--text-secondary)] mb-2">图片 URL</label>
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-[13px] text-[var(--text-secondary)] mb-2">描述</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-[var(--bg-muted)] rounded-xl text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)] resize-none"
                />
              </div>
              <button
                onClick={handleSave}
                className="w-full h-12 bg-[var(--brand-terracotta)] text-white rounded-full text-[15px] font-medium hover:brightness-90 transition-all"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
          <div className="bg-[var(--bg-surface)] rounded-2xl w-full max-w-sm p-8">
            <h2 className="text-[18px] font-medium mb-2">确认删除</h2>
            <p className="text-[14px] text-[var(--text-muted)] mb-6">确定要删除「{deleteTarget.name}」吗？此操作无法撤销。</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 h-12 border border-[var(--bg-muted)] rounded-full text-[14px]"
              >
                取消
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 h-12 bg-red-500 text-white rounded-full text-[14px] font-medium"
              >
                删除
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}