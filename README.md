# X-VIBE — Jasa Pembuatan Website Modern

Website portofolio satu halaman (single-page, multi-section) untuk layanan jasa
pembuatan web **X-VIBE**. Dibangun dengan Next.js App Router, TypeScript, dan
Tailwind CSS, serta dilengkapi **PWA** (bisa di-install ke HP).

## ✨ Fitur

- **Clean futuristic tech-look** — tema terang bersih dengan aksen navy + oranye
  brand, menyatu dengan logo.
- **Responsive mobile-first** — nyaman dari layar HP sampai desktop.
- **Smooth scrolling** antar section + animasi reveal saat discroll.
- **Section lengkap:** Hero, Featured Portfolio (X-VIBE-SHOP), Services,
  Why Choose Me, CTA, dan Footer.
- **PWA** — `manifest.json` + service worker (network-first, fallback offline),
  tombol install di browser pendukung.

## 🧱 Tech Stack

| Bagian | Teknologi |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Bahasa | TypeScript |
| Styling | Tailwind CSS + design token HSL |
| Ikon | lucide-react |
| Font | Inter (Google Fonts via `next/font`) |
| PWA | manifest + service worker + ikon PNG |

## 🚀 Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build produksi
npm run lint       # ESLint (next lint)
npm run typecheck  # tsc --noEmit
```

## ⚙️ Konfigurasi

Nilai dinamis dibaca dari env (opsional; ada nilai default di `src/lib/site.ts`):

| Env | Kegunaan |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Nomor WhatsApp tujuan (format `628xxx`, tanpa `+`). |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email kontak di footer. |
| `NEXT_PUBLIC_SITE_URL` | URL kanonik untuk metadata/Open Graph. |

> **Penting:** ganti `NEXT_PUBLIC_WHATSAPP_NUMBER` dengan nomor bisnis Anda
> sebelum deploy — nilai default hanya placeholder.

## ✏️ Mengubah Konten

Semua teks, daftar layanan, portofolio, dan tautan terpusat di
[`src/lib/site.ts`](src/lib/site.ts). Ubah di satu tempat, seluruh halaman ikut
berubah.

## 🖼️ Aset Brand

Aset brand dihasilkan dari berkas desain di `brand-src/`:

| Sumber | Hasil | Dipakai untuk |
| --- | --- | --- |
| `brand-src/logo.png` | `public/assets/logo.png` | Lockup lengkap (wordmark + tagline): footer, splash, halaman offline |
| `brand-src/ikon.png` | `public/assets/ikon.png` | Wordmark horizontal: logo di navbar |
| `brand-src/ikon.png` | `public/assets/ikon-512.png` | Wordmark di kanvas persegi 512×512: favicon, apple-touch-icon, ikon PWA |

Skrip `npm run assets` memangkas (trim) margin latar, **mempertahankan rasio
asli** (tidak gepeng), lalu mengekspor PNG teroptimasi (palet):

- `logo.png` — lockup, lebar 600 px (rasio asli ~1.0).
- `ikon.png` — wordmark, lebar 600 px (rasio asli ~1.4).
- `ikon-512.png` — mark dipusatkan pada kanvas persegi (konten ±80%) agar aman
  sebagai favicon dan ikon PWA `maskable`.

Hasil direferensikan di `src/components/layout/brand-logo.tsx`,
`src/app/layout.tsx`, dan `public/manifest.json`.

**Mengganti logo/ikon:** timpa berkas di `brand-src/`, lalu jalankan:

```bash
npm run assets
```

## 🎨 Tema

Warna didefinisikan sebagai design token HSL di `src/app/globals.css` dan
mengikuti palet logo:

| Token | Nilai | Warna |
| --- | --- | --- |
| `--background` | `#ffffff` | Latar terang, menyatu dengan logo |
| `--primary` | `#0e3155` | Navy brand (teks utama, tombol) |
| `--accent` | `#c2410c` | Oranye brand (versi gelap agar kontras WCAG AA) |
| `--ring` | `#178ad2` | Biru brand (fokus/outline) |

Ubah token di `src/app/globals.css` untuk menyesuaikan tema.

## 📁 Struktur

```
src/
  app/
    layout.tsx        # font, metadata, splash, registrasi SW
    page.tsx          # susunan section halaman utama
    globals.css       # design token + utilitas
    offline/page.tsx  # fallback offline
  components/
    layout/           # navbar, footer, logo, splash, pwa-register
    sections/         # hero, portfolio, services, why, cta
    ui/               # button, card, badge, reveal
  lib/
    site.ts           # sumber konten tunggal
    utils.ts          # helper cn()
brand-src/            # berkas desain sumber (logo.png, ikon.png)
scripts/
  prepare-assets.mjs  # trim + resize aset brand -> public/assets
public/
  assets/           # logo.png, ikon.png, ikon-512.png (hasil generate)
  manifest.json, sw.js
```

## ☁️ Deploy

Konfigurasi Vercel ada di `vercel.json` (region `sin1`). Framework terdeteksi
otomatis sebagai Next.js — cukup hubungkan repo ke Vercel.

---

© 2026 SNRB Nova Development. All rights reserved.

## 🔗 Live

**https://x-vibe-portfolio.vercel.app**

Deploy otomatis via Vercel setiap push ke `main`.
