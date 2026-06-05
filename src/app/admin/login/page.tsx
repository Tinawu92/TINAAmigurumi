"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      router.push("/admin/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-canvas)]">
      <div className="w-full max-w-sm bg-[var(--bg-surface)] rounded-2xl p-8 shadow-sm border border-[var(--bg-muted)]">
        <div className="text-center mb-8">
          <h1 className="text-[24px] font-[var(--font-playfair)] italic">Admin Login</h1>
          <p className="mt-2 text-[14px] text-[var(--text-muted)]">管理后台登录</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[13px] text-[var(--text-secondary)] mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-full text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-[13px] text-[var(--text-secondary)] mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 border border-[var(--bg-muted)] rounded-full text-[15px] focus:outline-none focus:border-[var(--brand-terracotta)]"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-[13px] text-red-500 text-center">用户名或密码错误</p>
          )}

          <button
            type="submit"
            className="w-full h-12 bg-[var(--brand-terracotta)] text-white rounded-full text-[15px] font-medium hover:brightness-90 transition-all"
          >
            登录
          </button>
        </form>
      </div>
    </div>
  );
}