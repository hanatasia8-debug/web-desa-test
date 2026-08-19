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
    const reader = new FileReader();
    reader.onerror = () => resolve(file); // fallback on error
    reader.onload = (event) => {
      const img = new Image();
      img.onerror = () => resolve(file);
      img.onload = () => {
        let { width, height } = img;

        // Calculate aspect ratio preserving dimensions
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(file);
          return;
        }

        // Use high quality image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);

        // Helper to encode canvas to blob with progressive compression safety
        const encodeBlob = (quality: number) => {
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                resolve(file);
                return;
              }

              // Progressive safety: If output is still > 1.8MB, reduce quality once more
              if (blob.size > 1.8 * 1024 * 1024 && quality > 0.65) {
                console.log(
                  `[ImageCompression] Output ${(blob.size / 1024).toFixed(1)} KB is still large, applying secondary compression...`
                );
                encodeBlob(Math.max(0.65, quality - 0.15));
                return;
              }

              const newExtension = "webp";
              const originalBase = file.name.replace(/\.[^/.]+$/, "");
              const newFileName = `${originalBase}.${newExtension}`;

              const compressedFile = new File([blob], newFileName, {
                type: "image/webp",
                lastModified: Date.now(),
              });

              console.log(
                `[ImageCompression] '${file.name}' (${(file.size / 1024).toFixed(1)} KB) -> '${newFileName}' (${(compressedFile.size / 1024).toFixed(1)} KB, preset: ${preset})`,
              );

              resolve(compressedFile);
            },
            "image/webp",
            quality,
          );
        };

        encodeBlob(initialQuality);
      };

      if (event.target?.result) {
        img.src = event.target.result as string;
      } else {
        resolve(file);
      }
    };

    reader.readAsDataURL(file);
  });
}
