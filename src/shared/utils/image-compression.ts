/**
 * High-performance client-side image compression utility.
 * Uses native HTML5 Canvas & WebP encoding to compress images
 * according to display context while maintaining crisp visual quality.
 */

export type ImagePreset =
  | "banner"
  | "product"
  | "gallery"
  | "avatar"
  | "default";

export interface ImageCompressionOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  preset?: ImagePreset;
}

const PRESET_CONFIGS: Record<
  ImagePreset,
  { maxWidth: number; maxHeight: number; quality: number }
> = {
  banner: { maxWidth: 1920, maxHeight: 1080, quality: 0.82 },
  product: { maxWidth: 1000, maxHeight: 1000, quality: 0.82 },
  gallery: { maxWidth: 1400, maxHeight: 1050, quality: 0.82 },
  avatar: { maxWidth: 512, maxHeight: 512, quality: 0.88 },
  default: { maxWidth: 1600, maxHeight: 1200, quality: 0.82 },
};

/**
 * Checks if a file is an image based on mime type or file extension.
 */
function isImageFile(file: File): boolean {
  if (!file) return false;
  if (file.type && file.type.startsWith("image/")) return true;
  const ext = file.name.split(".").pop()?.toLowerCase() || "";
  return ["jpg", "jpeg", "png", "webp", "bmp", "avif", "heic", "heif"].includes(ext);
}

/**
 * Compresses an image file client-side using HTML5 Canvas & WebP encoding.
 * Enforces progressive compression safety to ensure files stay well under serverless payload limits.
 */
export async function compressImage(
  file: File,
  options: ImageCompressionOptions | ImagePreset = "default",
): Promise<File> {
  // If not an image or is an animated GIF / SVG, preserve original file
  if (!file || !isImageFile(file) || file.type === "image/gif" || file.type === "image/svg+xml") {
    return file;
  }

  const opts: ImageCompressionOptions =
    typeof options === "string" ? { preset: options } : options;
  const preset = opts.preset || "default";
  const config = PRESET_CONFIGS[preset] || PRESET_CONFIGS.default;

  const maxWidth = opts.maxWidth || config.maxWidth;
  const maxHeight = opts.maxHeight || config.maxHeight;
  const initialQuality = opts.quality || config.quality;

  return new Promise((resolve) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(file);
    };

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);

      let { width, height } = img;

      // Scale down to fit max dimensions
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width = Math.max(1, Math.round(width * ratio));
        height = Math.max(1, Math.round(height * ratio));
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(file);
        return;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);

      const encode = (quality: number) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              resolve(file);
              return;
            }

            // If still > 1.5MB and quality > 0.55, retry with lower quality
            if (blob.size > 1.5 * 1024 * 1024 && quality > 0.55) {
              console.log(
                `[ImageCompression] Blob size ${(blob.size / 1024).toFixed(1)} KB is still large, reducing quality...`
              );
              encode(Math.max(0.55, quality - 0.15));
              return;
            }

            const baseName = file.name.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9_-]/g, "_");
            const compressedFile = new File([blob], `${baseName}.webp`, {
              type: "image/webp",
              lastModified: Date.now(),
            });

            console.log(
              `[ImageCompression] '${file.name}' (${(file.size / 1024).toFixed(1)} KB) -> '${compressedFile.name}' (${(compressedFile.size / 1024).toFixed(1)} KB, preset: ${preset})`,
            );

            resolve(compressedFile);
          },
          "image/webp",
          quality,
        );
      };

      encode(initialQuality);
    };

    img.src = objectUrl;
  });
}
