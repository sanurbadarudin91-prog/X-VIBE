/**
 * Menyiapkan aset brand X-VIBE dari berkas desain di `brand-src/`.
 * Jalankan: `npm run assets`
 *
 * Sumber (jangan diubah oleh skrip ini):
 *   brand-src/logo.png — lockup: mark + wordmark "XVIBE" + tagline (rasio ~1.0)
 *   brand-src/ikon.png — wordmark "XVIBE" saja (rasio ~1.47)
 *
 * Hasil di `public/assets/`:
 *   logo.png      — lockup, rasio asli  (navbar? tidak — footer/splash/offline)
 *   ikon.png      — wordmark, rasio asli (navbar)
 *   ikon-512.png  — wordmark dipusatkan di kanvas persegi (favicon/PWA)
 *
 * Semua langkah mempertahankan rasio asli — tidak ada peregangan/gepeng.
 *
 * Catatan sharp: `resize()` pada instance utama dijalankan SEBELUM
 * `composite()`, jadi kanvas dibuat & di-resize lebih dulu, baru overlay
 * ditempel. Untuk sekadar menambah padding, pakai `extend()` (tanpa composite).
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "brand-src");
const outDir = join(root, "public", "assets");

const BG = { r: 255, g: 255, b: 255 };
const PAD_RATIO = 0.04; // padding tipis di sekeliling artwork
const LOGO_WIDTH = 600; // lebar akhir lockup (rasio asli)
const IKON_WIDTH = 600; // lebar akhir wordmark (rasio asli)
const ICON_SIZE = 512; // kanvas persegi untuk favicon/PWA
const ICON_CONTENT = 0.8; // konten 80% kanvas, sisa jadi safe-zone maskable

/** Kotak pembatas (bbox) piksel yang berbeda dari warna latar. */
function contentBox(data, width, height, channels) {
  const bg = [data[0], data[1], data[2]];
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const diff =
        Math.abs(data[i] - bg[0]) +
        Math.abs(data[i + 1] - bg[1]) +
        Math.abs(data[i + 2] - bg[2]);
      if (diff <= 28) continue;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
  if (maxX < 0) return { left: 0, top: 0, width, height };
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

/**
 * Hilangkan latar putih yang menyambung ke tepi gambar (flood-fill),
 * sehingga logo menyatu di latar apa pun. Putih yang terkurung di dalam
 * desain (mis. counter huruf) dibiarkan utuh.
 */
async function cutout(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: ch } = info;
  const seen = new Uint8Array(w * h);
  const stack = [];
  for (let x = 0; x < w; x++) {
    stack.push(x, 0, x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    stack.push(0, y, w - 1, y);
  }
  while (stack.length) {
    const y = stack.pop();
    const x = stack.pop();
    if (x < 0 || y < 0 || x >= w || y >= h) continue;
    const p = y * w + x;
    if (seen[p]) continue;
    const i = p * ch;
    if (data[i] < 238 || data[i + 1] < 238 || data[i + 2] < 238) continue;
    seen[p] = 1;
    data[i + 3] = 0;
    stack.push(x + 1, y, x - 1, y, x, y + 1, x, y - 1);
  }
  return sharp(data, { raw: { width: w, height: h, channels: ch } })
    .png()
    .toBuffer();
}

/** Artwork tanpa margin latar & tanpa latar putih, rasio asli. */
async function trimmedBuffer(file) {
  const { data, info } = await sharp(file)
    .flatten({ background: BG })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const box = contentBox(data, info.width, info.height, info.channels);
  const cropped = await sharp(file)
    .flatten({ background: BG })
    .extract(box)
    .png()
    .toBuffer();
  return cutout(cropped);
}

/** Simpan PNG teroptimasi (palet) dan kembalikan ukurannya. */
async function save(name, input) {
  const out = await sharp(input).png({ palette: true, compressionLevel: 9 }).toBuffer();
  await writeFile(join(outDir, name), out);
  const m = await sharp(out).metadata();
  console.log(
    `✓ assets/${name}  ${m.width}x${m.height}  (${(out.length / 1024).toFixed(0)} KB)`,
  );
  return m;
}

/** Rasio asli + padding tipis. */
async function padded(file, width) {
  const base = await trimmedBuffer(file);
  const { width: w, height: h } = await sharp(base).metadata();
  const pad = Math.round(Math.max(w, h) * PAD_RATIO);
  return sharp(base)
    .extend({
      top: pad,
      bottom: pad,
      left: pad,
      right: pad,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize({ width })
    .png()
    .toBuffer();
}

/** Wordmark dipusatkan pada kanvas persegi (favicon/PWA maskable). */
async function squareIcon(file) {
  const base = await trimmedBuffer(file);
  const { width, height } = await sharp(base).metadata();
  const scale = (ICON_SIZE * ICON_CONTENT) / Math.max(width, height);
  const w = Math.round(width * scale);
  const h = Math.round(height * scale);
  const scaled = await sharp(base).resize(w, h).png().toBuffer();
  const canvas = await sharp({
    create: {
      width: ICON_SIZE,
      height: ICON_SIZE,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .png()
    .toBuffer();
  return sharp(canvas)
    .composite([
      {
        input: scaled,
        left: Math.round((ICON_SIZE - w) / 2),
        top: Math.round((ICON_SIZE - h) / 2),
      },
    ])
    .png()
    .toBuffer();
}

async function main() {
  await mkdir(outDir, { recursive: true });
  await save("logo.png", await padded(join(srcDir, "logo.png"), LOGO_WIDTH));
  await save("ikon.png", await padded(join(srcDir, "ikon.png"), IKON_WIDTH));
  await save("ikon-512.png", await squareIcon(join(srcDir, "ikon.png")));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
