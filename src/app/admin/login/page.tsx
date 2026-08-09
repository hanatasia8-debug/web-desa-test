"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/shared/ui/icon";
import { AdminAuthService } from "@/shared/lib/auth/admin-auth.service";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("admin@pringgodani.desa.id");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    let isSuccess = false;
    let loginMessage = "";

    try {
      const result = await AdminAuthService.login(username, password);
      isSuccess = result.success;
      loginMessage =
        result.message || "Gagal masuk. Periksa kembali kredensial Anda.";
    } catch {
      setErrorMsg("Terjadi kesalahan sistem saat mencoba masuk.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);

    if (isSuccess) {
      router.push("/admin/dashboard");
    } else {
      setErrorMsg(loginMessage);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center py-12">
      <div className="border-outline-variant/30 bg-surface-container-lowest text-on-surface w-full max-w-md rounded-[2.5rem] border p-8 shadow-2xl">
        <div className="space-y-4 text-center">
          <div className="bg-primary/10 text-primary mx-auto flex h-16 w-16 items-center justify-center rounded-2xl">
            <Icon name="admin_panel_settings" className="text-3xl" />
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-primary font-bold">
              Panel Admin Pringgodani
            </h2>
            <p className="font-body-base text-on-surface-variant mt-2 text-sm">
              Masuk untuk mengelola berita, UMKM, peta geospasial, dan pengajuan
              warga desa.
            </p>
          </div>
        </div>

        {errorMsg && (
          <div className="bg-error-container text-on-error-container mt-6 flex items-center gap-3 rounded-2xl p-4 text-sm font-medium">
            <Icon name="error" className="text-xl" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              className="font-label-sm text-on-surface-variant mb-2 block font-semibold"
              htmlFor="username"
            >
              Username / Email Admin
            </label>
            <div className="relative">
              <span className="text-on-surface-variant absolute inset-y-0 left-4 flex items-center">
                <Icon name="person" className="text-xl" />
              </span>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border py-3.5 pr-4 pl-12 transition outline-none"
                placeholder="admin@pringgodani.desa.id"
              />
            </div>
          </div>

          <div>
            <label
              className="font-label-sm text-on-surface-variant mb-2 block font-semibold"
              htmlFor="password"
            >
              Kata Sandi
            </label>
            <div className="relative">
              <span className="text-on-surface-variant absolute inset-y-0 left-4 flex items-center">
                <Icon name="lock" className="text-xl" />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-surface border-outline-variant text-on-surface focus:border-primary w-full rounded-2xl border py-3.5 pr-12 pl-12 transition outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-on-surface-variant hover:text-primary absolute inset-y-0 right-4 flex items-center transition"
                title={
                  showPassword
                    ? "Sembunyikan Kata Sandi"
                    : "Tampilkan Kata Sandi"
                }
              >
                <Icon
                  name={showPassword ? "visibility_off" : "visibility"}
                  className="text-xl"
                />
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-on-primary font-label-sm hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-bold shadow-md transition"
          >
            {isSubmitting ? (
              <>
                <Icon name="sync" className="animate-spin text-xl" />
                Memverifikasi...
              </>
            ) : (
              <>
                <Icon name="login" className="text-xl" />
                Masuk ke Admin Panel
              </>
            )}
          </button>
        </form>

        <div className="bg-primary-container/40 text-on-primary-container border-primary/20 mt-8 rounded-2xl border p-4 text-sm">
          <div className="flex items-center gap-2 font-bold">
            <Icon name="key" className="text-primary text-lg" />
            Kredensial Default Admin:
          </div>
          <ul className="mt-2 space-y-1 text-xs opacity-90">
            <li>
              • Username:{" "}
              <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono font-bold">
                admin@pringgodani.desa.id
              </code>{" "}
              (atau{" "}
              <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono font-bold">
                admin
              </code>
              )
            </li>
            <li>
              • Password:{" "}
              <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono font-bold">
                admin123
              </code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
