/**
 * Menghasilkan ikon PWA dari SVG monogram X-VIBE (tanpa dependensi desain).
 * Jalankan: `node scripts/generate-icons.mjs`
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

/** SVG monogram: kotak gradien cyan→biru + ikon kode </> dan huruf V. */
function logoSvg(size) {
  const stroke = size * 0.075;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="${size}" height="${size}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="512" height="512" rx="112" fill="url(#g)"/>
  <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="${stroke}">
    <path d="M150 190 L104 256 L150 322"/>
    <path d="M190 190 L236 256 L190 322"/>
    <path d="M300 182 L376 330"/>
    <path d="M452 182 L376 330"/>
  </g>
</svg>`;
}

async function main() {
  await mkdir(publicDir, { recursive: true });
  const targets = [
    { name: "icon-192.png", size: 192 },
    { name: "icon-512.png", size: 512 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "favicon.png", size: 64 },
  ];

  for (const { name, size } of targets) {
    const svg = Buffer.from(logoSvg(size));
    const png = await sharp(svg).resize(size, size).png().toBuffer();
    await writeFile(join(publicDir, name), png);
    console.log(`✓ ${name} (${size}x${size})`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
