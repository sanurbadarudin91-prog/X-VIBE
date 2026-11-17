# AGENTS.md — X-VIBE

Panduan singkat untuk agen yang bekerja di repo ini.

## Perintah

```bash
npm install
npm run dev        # dev server (http://localhost:3000)
npm run build      # build produksi
npm run lint       # ESLint (next lint)
npm run typecheck  # tsc --noEmit
node scripts/generate-icons.mjs  # regenerasi ikon PWA
```

## Apa ini

Website portofolio single-page untuk jasa pembuatan web **X-VIBE**
(Next.js App Router + TypeScript + Tailwind + PWA). Tidak ada backend/database.

## Struktur

- `src/app/page.tsx` — susunan section halaman utama (Navbar → Hero → Portfolio →
  Services → WhyChooseMe → CallToAction → Footer).
- `src/app/layout.tsx` — font (Inter), metadata/SEO, splash screen, registrasi SW.
- `src/components/sections/` — tiap section halaman.
- `src/components/layout/` — navbar, footer, logo, splash, pwa-register.
- `src/components/ui/` — primitif (button, card, badge, reveal).
- `src/lib/site.ts` — **sumber tunggal konten** (teks, layanan, portofolio, tautan).
- `public/` — `manifest.json`, `sw.js`, ikon.

## Konvensi penting

- **Ubah konten lewat `src/lib/site.ts`**, jangan hardcode teks di komponen.
- Warna/theme memakai design token HSL di `src/app/globals.css`
  (`--background`, `--primary`, dst.) dan dipetakan di `tailwind.config.ts`.
  Gunakan kelas semantik (`bg-background`, `text-primary`, `border-border`),
  bukan nilai warna mentah.
- **Jangan manipulasi DOM React secara manual** (`element.remove()` pada node
  yang dirender React). Kelola visibilitas lewat state React — splash screen
  sudah menerapkan pola ini.
- Tautan WhatsApp dibangun lewat `whatsappLink()` / `waHero` / `waCta` di
  `src/lib/site.ts`.
- `Button` dengan `asChild` merender ke anak (mis. `<a>`/`<Link>`) agar tidak ada
  `<button>` bersarang di dalam `<a>`.
- Nomor WhatsApp asli diisi lewat env `NEXT_PUBLIC_WHATSAPP_NUMBER` saat deploy;
  nilai di repo hanya placeholder.
- Jangan commit `.env.local`; jangan tulis nilai kredensial ke file yang di-commit.

## PWA

- `public/manifest.json` + `public/sw.js` (network-first, fallback `/offline`).
- `src/components/layout/pwa-register.tsx` mendaftarkan SW setelah halaman siap.
- `next.config.ts` mengirim header `Cache-Control: no-cache` untuk `/sw.js` agar
  update service worker tidak tertahan cache.
- Ikon dibuat via `scripts/generate-icons.mjs` (sharp) — tidak ada file desain.

## Deploy

Konfigurasi Vercel di `vercel.json` (region `sin1`, framework `nextjs`). Deploy
mengandalkan integrasi Git Vercel. Ganti `NEXT_PUBLIC_WHATSAPP_NUMBER` dan
`NEXT_PUBLIC_SITE_URL` di env Vercel sebelum produksi.
