"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    router.push("/admin/dashboard");
  };

  return (
    <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
      <div className="space-y-4 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950">
          <Icon name="admin_panel_settings" className="text-2xl" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Masuk Admin</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Ini adalah halaman login admin dasar. Autentikasi penuh akan
            ditambahkan di Tahap 5.
          </p>
        </div>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label
            className="block text-sm font-medium text-slate-200"
            htmlFor="email"
          >
            Email admin
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-50 transition outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            placeholder="admin@pringgodani.id"
          />
        </div>

        <div className="space-y-4">
          <label
            className="block text-sm font-medium text-slate-200"
            htmlFor="password"
          >
            Kata sandi
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-50 transition outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            placeholder="••••••••"
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Memproses..." : "Masuk"}
        </Button>
      </form>

      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-4 text-sm text-slate-400">
        <p className="font-medium text-slate-200">Catatan:</p>
        <p className="mt-1">
          Autentikasi belum terhubung ke backend. Halaman ini hanya menavigasi
          ke dashboard sebagai demonstrasi awal Tahap 5.
        </p>
      </div>
    </div>
  );
}
