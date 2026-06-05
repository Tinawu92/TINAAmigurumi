"use client";
import { useState, useEffect } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";

interface TableColumn {
  key: string;
  label: string;
}

interface TableRow {
  id: string | number;
  [key: string]: string | number | boolean | undefined;
}

interface AdminTableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  searchPlaceholder?: string;
  onAdd?: () => void;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
  addLabel?: string;
}

export default function AdminTable({
  columns,
  data,
  searchPlaceholder = "搜索...",
  onAdd,
  onEdit,
  onDelete,
  addLabel = "添加",
}: AdminTableProps) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    if (!search) {
      setFiltered(data);
      return;
    }
    const q = search.toLowerCase();
    setFiltered(
      data.filter((item) =>
        columns.some((col) => String(item[col.key] ?? "").toLowerCase().includes(q))
      )
    );
  }, [search, data, columns]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-xs">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full h-11 pl-11 pr-4 border border-[var(--bg-muted)] rounded-full text-[14px] focus:outline-none focus:border-[var(--brand-terracotta)] bg-[var(--bg-surface)]"
          />
        </div>
        {onAdd && (
          <button
            onClick={onAdd}
            className="h-11 px-6 bg-[var(--brand-terracotta)] text-white rounded-full text-[14px] font-medium flex items-center gap-2 hover:brightness-90 transition-all"
          >
            <Plus size={16} />
            {addLabel}
          </button>
        )}
      </div>

      <div className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--bg-muted)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--bg-muted)]">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="text-left px-6 py-4 text-[12px] uppercase tracking-wider text-[var(--text-muted)] font-medium"
                  >
                    {col.label}
                  </th>
                ))}
                {(onEdit || onDelete) && (
                  <th className="text-right px-6 py-4 text-[12px] uppercase tracking-wider text-[var(--text-muted)] font-medium">
                    操作
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + 1} className="text-center py-12 text-[var(--text-muted)]">
                    暂无数据
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr
                    key={String(item.id)}
                    className="border-b border-[var(--bg-muted)] last:border-0 hover:bg-[var(--bg-muted)] hover:bg-opacity-30 transition-colors"
                  >
                    {columns.map((col) => (
                      <td key={col.key} className="px-6 py-4 text-[14px] text-[var(--text-primary)]">
                        {col.key === "image" || col.key === "avatar" ? (
                          item[col.key] ? (
                            <img
                              src={String(item[col.key])}
                              alt=""
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                          ) : (
                            <span className="text-[var(--text-muted)]">-</span>
                          )
                        ) : col.key === "isVerified" ? (
                          <span className={item[col.key] ? "text-green-500" : "text-gray-400"}>
                            {item[col.key] ? "是" : "否"}
                          </span>
                        ) : (
                          String(item[col.key] ?? "-")
                        )}
                      </td>
                    ))}
                    {(onEdit || onDelete) && (
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {onEdit && (
                            <button
                              onClick={() => onEdit(item)}
                              className="p-2 hover:bg-[var(--bg-muted)] rounded-lg transition-colors"
                              title="编辑"
                            >
                              <Pencil size={15} className="text-[var(--text-secondary)]" />
                            </button>
                          )}
                          {onDelete && (
                            <button
                              onClick={() => onDelete(item)}
                              className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                              title="删除"
                            >
                              <Trash2 size={15} className="text-red-400" />
                            </button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}