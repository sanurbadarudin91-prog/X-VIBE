/**
 * Sumber tunggal konten situs X-VIBE.
 *
 * Ubah nilai di sini untuk memperbarui teks, layanan, portofolio, dan tautan
 * tanpa menyentuh komponen. Nomor WhatsApp & tautan sosial sebaiknya diisi
 * lewat env saat deploy produksi.
 */

/** Nomor WhatsApp bisnis dalam format internasional tanpa "+" (mis. 62812xxxxxxx). */
export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6285882097467";

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@x-vibe.dev";

/** Bangun tautan wa.me dengan pesan awal yang sudah terisi. */
export function whatsappLink(
  message = "Hai X-VIBE! Saya mau diskusi soal pembuatan website.",
) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "X-VIBE",
  brand: "X-VIBE",
  owner: "SNRB Nova Development",
  tagline: "Web Development Studio",
  description:
    "Jasa pembuatan website modern — landing page, company profile, e-commerce, dan web app PWA yang cepat, responsif, dan siap pakai.",
  github: "https://github.com/sanurbadarudin91-prog",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  badge: "Available for Freelance Projects",
  heading: "Membangun Solusi Digital & Web Modern untuk Bisnis Anda.",
  subheading:
    "Self-taught web developer yang fokus pada performa, PWA, dan skalabilitas — membantu UMKM hingga klien global tampil profesional di dunia digital.",
  stats: [
    { value: "PWA", label: "Install-ready" },
    { value: "100%", label: "Mobile first" },
    { value: "Fast", label: "Core Web Vitals" },
  ],
};

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "X-VIBE-SHOP",
    category: "E-commerce PWA Ready",
    description:
      "Toko online modern dengan sistem integrasi pembayaran, autentikasi pengguna, katalog varian produk (warna & ukuran), dan bisa diinstal langsung ke HP.",
    stack: ["Node.js", "Express", "Next.js", "PWA", "Midtrans"],
    demoUrl: "https://x-vibe-shop.vercel.app",
    featured: true,
  },
];

export type Service = {
  icon: "layout" | "shopping" | "smartphone";
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "layout",
    title: "Landing Page & Company Profile",
    description:
      "Website cepat, estetik, dan mobile-friendly untuk memperkenalkan bisnis Anda secara profesional.",
    points: ["Desain custom", "SEO dasar", "Copywriting rapi"],
  },
  {
    icon: "shopping",
    title: "E-Commerce & Storefront",
    description:
      "Toko online siap jualan lengkap dengan katalog produk, keranjang, dan sistem transaksi.",
    points: ["Integrasi pembayaran", "Manajemen produk", "Halaman pesanan"],
  },
  {
    icon: "smartphone",
    title: "Web Apps & PWA Integration",
    description:
      "Website yang bisa di-install jadi aplikasi di HP, lengkap dengan dukungan offline.",
    points: ["Installable", "Offline-ready", "Push notification"],
  },
];

export type Advantage = {
  icon: "code" | "smartphone" | "zap" | "search" | "shield" | "rocket";
  title: string;
  description: string;
};

export const advantages: Advantage[] = [
  {
    icon: "code",
    title: "Clean Code & Performance",
    description:
      "Kode bersih, terstruktur, dan cepat diakses — fokus pada Core Web Vitals dan kemudahan maintenance.",
  },
  {
    icon: "smartphone",
    title: "Mobile First Approach",
    description:
      "Tampilan dijamin responsif dan nyaman dipakai di semua ukuran layar, dari HP sampai desktop.",
  },
  {
    icon: "zap",
    title: "PWA Ready",
    description:
      "Website bisa di-install layaknya aplikasi native dan tetap bisa diakses saat koneksi lemah.",
  },
  {
    icon: "search",
    title: "SEO Friendly",
    description:
      "Struktur semantik dan metadata yang benar agar website mudah ditemukan di mesin pencari.",
  },
  {
    icon: "shield",
    title: "Aman & Terpercaya",
    description:
      "Praktik keamanan standar: validasi input, HTTPS, dan konfigurasi header yang aman.",
  },
  {
    icon: "rocket",
    title: "Skalabel",
    description:
      "Arsitektur yang siap berkembang seiring bertambahnya fitur dan jumlah pengunjung.",
  },
];

export const cta = {
  heading: "Punya ide atau proyek digital yang mau diwujudkan?",
  subheading: "Mari diskusikan sekarang — konsultasi awal gratis, tanpa komitmen.",
};

/** Tautan WhatsApp siap pakai untuk tombol-tombol utama. */
export const waHero = whatsappLink(
  "Hai X-VIBE! Saya lihat portofolio Anda dan mau diskusi soal pembuatan website.",
);
export const waCta = whatsappLink(
  "Hai X-VIBE! Saya punya ide proyek digital yang mau diwujudkan. Bisa dibantu?",
);
