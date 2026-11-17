import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Aset brand di `public/assets/` (dihasilkan oleh `npm run assets`).
 *
 * - `ikon.png` — wordmark "XVIBE" horizontal (rasio ~1.4). Cocok untuk navbar.
 * - `logo.png` — lockup lengkap: wordmark + tagline (rasio ~1). Cocok untuk
 *   footer, splash, dan halaman offline yang punya ruang vertikal.
 * - `ikon-512.png` — wordmark di kanvas persegi 512×512 untuk favicon/PWA.
 *
 * Semua sudah dipangkas dan rasionya dipertahankan, jadi lebar selalu
 * dihitung dari tinggi agar gambar tidak gepeng.
 */
const IKON = { src: "/assets/ikon.png", width: 662, height: 470 };
const LOGO = { src: "/assets/logo.png", width: 668, height: 662 };

/** Wordmark horizontal X-VIBE — dipakai di navbar. */
export function BrandMark({
  className,
  height = 32,
}: {
  className?: string;
  height?: number;
}) {
  const width = Math.round((height * IKON.width) / IKON.height);
  return (
    <Image
      src={IKON.src}
      alt="X-VIBE"
      width={width}
      height={height}
      priority
      className={cn("w-auto shrink-0", className)}
    />
  );
}

/** Lockup lengkap (wordmark + tagline) — dipakai di footer, splash, offline. */
export function BrandLogo({
  className,
  height = 72,
}: {
  className?: string;
  height?: number;
}) {
  const width = Math.round((height * LOGO.width) / LOGO.height);
  return (
    <Image
      src={LOGO.src}
      alt="X-VIBE — Digital Solutions"
      width={width}
      height={height}
      className={cn("w-auto shrink-0", className)}
    />
  );
}
