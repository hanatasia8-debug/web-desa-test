type PossibleApiError = {
  response?: { status?: number; data?: Record<string, unknown> };
  message?: string;
};

export function mapApiError(err: unknown) {
  const e = err as PossibleApiError;
  // Default fallback
  const result: {
    userMessage: string;
    fieldErrors?: Record<string, string>;
    backendDependency?: boolean;
  } = { userMessage: "Terjadi kesalahan. Silakan coba lagi." };

  if (!e) return result;

  // Axios-like error with response
  if (e.response) {
    const status = e.response.status;
    type ServerData =
      | { message?: string; errors?: Record<string, string> }
      | Record<string, unknown>;
    const data = (e.response.data as ServerData) || {};

    // Map common statuses
    if (status === 400) {
      result.userMessage =
        data.message || "Data tidak valid. Periksa kembali input Anda.";
      // If API returned field-level errors as { errors: { field: msg } }
      if (data.errors && typeof data.errors === "object") {
        result.fieldErrors = data.errors;
      }
      return result;
    }

    if (status === 401) {
      result.userMessage = "Sesi Anda telah berakhir. Silakan login kembali.";
      return result;
    }

    if (status === 403) {
      result.userMessage =
        "Anda tidak memiliki izin untuk melakukan tindakan ini.";
      return result;
    }

    if (status === 404) {
      result.userMessage = data.message || "Data tidak ditemukan.";
      return result;
    }

    if (status >= 500) {
      result.userMessage =
        "Terjadi masalah pada server. Silakan coba lagi beberapa saat kemudian.";
      result.backendDependency = true;
      return result;
    }

    // Generic server-provided message
    if (data && data.message) {
      result.userMessage = data.message;
      return result;
    }
  }

  // Network error
  if (err.message && err.message.toLowerCase().includes("network")) {
    result.userMessage =
      "Koneksi ke server bermasalah. Periksa koneksi internet Anda lalu coba lagi.";
    return result;
  }

  // Fallback to message if available
  if (err.message) result.userMessage = err.message;

  return result;
}
