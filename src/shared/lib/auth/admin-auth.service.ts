import { apiClient } from "@/shared/api/axios-instance";

/**
 * AdminAuthService — client-side security session manager for Pringgodani Admin Panel.
 */

const SESSION_KEY = "pringgodani_admin_session";

export interface AdminUser {
  name: string;
  email: string;
  role: string;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export const AdminAuthService = {
  async login(
    usernameInput: string,
    passwordInput: string,
  ): Promise<{ success: boolean; message?: string; user?: AdminUser }> {
    const cleanUser = usernameInput.trim().toLowerCase();
    const cleanPass = passwordInput.trim();

    try {
      const { data } = await apiClient.post("/auth/login", {
        email: cleanUser,
        password: cleanPass,
      });

      if (data?.success && data?.data) {
        const backendUser = data.data;
        const user: AdminUser = {
          name:
            backendUser.user_metadata?.name || backendUser.name || "Admin Desa",
          email: backendUser.email,
          role: "ADMIN",
        };

        if (typeof window !== "undefined") {
          // Store serialized user inside cookie with 3-hour limit (10800 seconds)
          const serialized = encodeURIComponent(JSON.stringify(user));
          const isSecure = window.location.protocol === "https:";
          // In production HTTPS, use SameSite=None to ensure cross-origin/redirection compatibility
          const sameSite = isSecure ? "None" : "Lax";
          document.cookie = `${SESSION_KEY}=${serialized}; path=/; max-age=10800; SameSite=${sameSite}${isSecure ? "; Secure" : ""}`;
        }

        return { success: true, user };
      }

      return {
        success: false,
        message:
          "Email atau kata sandi salah atau akun Anda tidak memiliki hak akses admin.",
      };
    } catch (err) {
      const axiosError = err as {
        response?: { status?: number; data?: { message?: string } };
      };

      // Determine error message based on response status/message
      const rawMessage = axiosError.response?.data?.message || "";
      const status = axiosError.response?.status;

      let message =
        "Gagal menghubungi server autentikasi. Silakan periksa jaringan Anda atau coba beberapa saat lagi.";

      if (
        status === 400 ||
        status === 401 ||
        rawMessage.includes("Invalid login credentials") ||
        rawMessage.includes("credentials")
      ) {
        message =
          "Email atau kata sandi salah atau akun Anda tidak memiliki hak akses admin.";
      } else if (status === 403) {
        message =
          "Akun Anda tidak memiliki izin untuk mengakses halaman admin.";
      }

      return {
        success: false,
        message,
      };
    }
  },

  async logout(): Promise<void> {
    try {
      await apiClient.post("/auth/logout");
    } catch (err) {
      console.error("Logout API error:", err);
    } finally {
      if (typeof window !== "undefined") {
        document.cookie = `${SESSION_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      }
    }
  },

  isAuthenticated(): boolean {
    if (typeof window === "undefined") return true;
    return !!getCookie(SESSION_KEY);
  },

  getAdminUser(): AdminUser | null {
    if (typeof window === "undefined") return null;
    try {
      const val = getCookie(SESSION_KEY);
      return val ? JSON.parse(decodeURIComponent(val)) : null;
    } catch {
      return null;
    }
  },
};
