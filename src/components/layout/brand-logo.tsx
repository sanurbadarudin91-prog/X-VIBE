import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Logo mark X-VIBE — memakai berkas gambar di `public/assets/logo.png`.
 * Dipakai di header, footer, splash, dan halaman offline.
 */
export function BrandMark({
  className,
  size = 34,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/assets/logo.png"
      alt="Logo X-VIBE"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
    />
  );
}

/** Logo lengkap: mark + wordmark "X-VIBE" (opsional tagline). */
export function BrandLogo({
  className,
  size = 34,
  showTagline = false,
}: {
  className?: string;
  size?: number;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BrandMark size={size} />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight">
          X<span className="text-primary">-</span>VIBE
        </span>
        {showTagline && (
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Web Development Studio
          </span>
        )}
      </span>
    </span>
  );
}
