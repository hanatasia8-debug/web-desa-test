/**
 * AdminAuthService — client-side security session manager for Pringgodani Admin Panel.
 * Default Credentials:
 *   Email / Username: admin@pringgodani.desa.id (or admin)
 *   Password        : admin123
 */

const SESSION_KEY = "pringgodani_admin_session";

export interface AdminUser {
  name: string;
  email: string;
  role: string;
}

export const AdminAuthService = {
  login(
    usernameInput: string,
    passwordInput: string,
  ): { success: boolean; message?: string; user?: AdminUser } {
    const cleanUser = usernameInput.trim().toLowerCase();
    const cleanPass = passwordInput.trim();

    if (
      (cleanUser === "admin" || cleanUser === "admin@pringgodani.desa.id") &&
      cleanPass === "admin123"
    ) {
      const user: AdminUser = {
        name: "Admin Desa Pringgodani",
        email: "admin@pringgodani.desa.id",
        role: "SUPER_ADMIN",
      };

      if (typeof window !== "undefined") {
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
        document.cookie = `${SESSION_KEY}=true; path=/; max-age=86400; SameSite=Lax`;
      }

      return { success: true, user };
    }

    return {
      success: false,
      message:
        "Username atau password yang Anda masukkan salah. Gunakan admin@pringgodani.desa.id / admin123.",
    };
  },

  logout(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(SESSION_KEY);
      document.cookie = `${SESSION_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  },

  isAuthenticated(): boolean {
    if (typeof window === "undefined") return true; // allow SSR initial render, client hydration handles auth check
    const session = localStorage.getItem(SESSION_KEY);
    return !!session;
  },

  getAdminUser(): AdminUser | null {
    if (typeof window === "undefined") return null;
    try {
      const session = localStorage.getItem(SESSION_KEY);
      return session ? JSON.parse(session) : null;
    } catch {
      return null;
    }
  },
};
