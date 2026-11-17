# X-VIBE — Jasa Pembuatan Website Modern

Website portofolio satu halaman (single-page, multi-section) untuk layanan jasa
pembuatan web **X-VIBE**. Dibangun dengan Next.js App Router, TypeScript, dan
Tailwind CSS, serta dilengkapi **PWA** (bisa di-install ke HP).

## ✨ Fitur

- **Dark futuristic tech-look** — background pekat, aksen cyan/biru elektrik.
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

## 🖼️ Aset Brand (`public/assets/`)

Logo & ikon web disimpan sebagai berkas gambar, jadi bisa diganti kapan saja
tanpa menyentuh kode:

| Berkas | Dipakai untuk |
| --- | --- |
| `public/assets/logo.png` | Logo web di navbar, footer, splash screen, halaman offline |
| `public/assets/ikon.png` | Ikon web: favicon, apple-touch-icon, ikon PWA (manifest) |

Keduanya direferensikan di `src/components/layout/brand-logo.tsx`,
`src/app/layout.tsx`, dan `public/manifest.json`.

Untuk mengganti logo/ikon: cukup timpa berkasnya (mis. desain sendiri, ukuran
512×512 PNG), lalu commit. Tidak perlu ubah kode.

Regenerasi dari generator bawaan (opsional, butuh `sharp`):

```bash
npm run assets   # atau: node scripts/generate-assets.mjs
```

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
public/
  assets/           # logo.png + ikon.png (aset brand)
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
