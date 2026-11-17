/**
 * Menghasilkan aset brand X-VIBE ke public/assets/ (tanpa file desain).
 * Jalankan: `npm run assets` atau `node scripts/generate-assets.mjs`
 *
 * - logo.png : mark persegi membulat, latar transparan di sudut (untuk UI).
 * - ikon.png : app icon full-bleed + simbol di safe zone (untuk favicon/PWA maskable).
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "public", "assets");

const GRADIENT = `<linearGradient id="xv-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>`;

/** Simbol "</>" + huruf V, digambar pada kanvas 48x48. */
const GLYPH = `<g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 18 L9.5 24 L13 30" stroke-width="2.6"/>
      <path d="M16 18 L19.5 24 L16 30" stroke-width="2.6"/>
      <path d="M26 17 L33 31 M40 17 L33 31" stroke-width="3.4"/>
    </g>`;

const wrap = (body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="512" height="512"><defs>${GRADIENT}</defs>${body}</svg>`;

/** Logo mark: kotak membulat bergradien, sudut transparan. */
const logoMark = wrap(
  `<rect x="1" y="1" width="46" height="46" rx="13" fill="url(#xv-grad)"/>${GLYPH}`,
);

/** App icon: latar penuh (aman untuk maskable) + simbol diskalakan 0.8 di tengah. */
const appIcon = wrap(
  `<rect x="0" y="0" width="48" height="48" fill="url(#xv-grad)"/>
    <g transform="translate(24 24) scale(0.8) translate(-24 -24)">${GLYPH}</g>`,
);

const TARGETS = [
  { file: "logo.png", svg: logoMark, width: 512, height: 512 },
  { file: "ikon.png", svg: appIcon, width: 512, height: 512 },
];

async function main() {
  await mkdir(assetsDir, { recursive: true });

  for (const { file, svg, width, height } of TARGETS) {
    const png = await sharp(Buffer.from(svg))
      .resize(width, height)
      .png({ compressionLevel: 9 })
      .toBuffer();
    await writeFile(join(assetsDir, file), png);
    console.log(`✓ assets/${file} (${width}x${height}, ${(png.length / 1024).toFixed(1)} KB)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
