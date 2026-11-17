"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

/**
 * Menampilkan screenshot proyek di dalam frame browser.
 *
 * Kalau berkas gambar belum ada / gagal dimuat, komponen menampilkan
 * `fallback` (mockup CSS) supaya bagian ini tidak pernah tampak rusak.
 * Berkasnya cukup ditaruh di `public/assets/` dengan nama sesuai
 * `project.image` — tanpa perlu mengubah kode lagi.
 */
export function ProjectShot({
  src,
  alt,
  fallback,
  sizes = "(min-width: 1024px) 45vw, 90vw",
}: {
  src?: string;
  alt: string;
  fallback: ReactNode;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return <>{fallback}</>;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="object-cover object-top"
      onError={() => setFailed(true)}
    />
  );
}
