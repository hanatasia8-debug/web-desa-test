import { cn } from "@/shared/utils/cn";

interface IconProps {
  /** Material Symbols ligature name, e.g. "storefront", "calendar_today". */
  name: string;
  className?: string;
  /** Matches the prototype's `data-weight="fill"` usage (filled icon style). */
  filled?: boolean;
}

/**
 * Renders a Material Symbols Outlined icon. The font is loaded globally via
 * a <link> in `app/layout.tsx` (next/font doesn't support icon fonts).
 */
export function Icon({ name, className, filled = false }: IconProps) {
  return (
    <span
      className={cn("material-symbols-outlined", className)}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
