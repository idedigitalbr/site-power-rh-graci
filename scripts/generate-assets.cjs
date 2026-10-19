const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = 'C:/Users/willi/.gemini/antigravity/brain/8729a4c7-4e5d-4dcd-965f-eae44444a8af/.user_uploaded/media_1792444599052_597a5989.png';
const cropSymbol = { left: 45, top: 60, width: 220, height: 220 };
const cropFull = { left: 42, top: 50, width: 939, height: 240 };

async function buildAll() {
  console.log('Processing full logo...');
  const rawObj = await sharp(src).extract(cropFull).raw().toBuffer({ resolveWithObject: true });
  const { data, info } = rawObj;

  // 1. Save standard logo (transparent bg)
  await sharp(data, { raw: info })
    .png({ compressionLevel: 9 })
    .toFile('public/assets/imagens-diversas/logo-powerrh.png');
  console.log('Saved logo-powerrh.png');

  // 2. Save white logo (for dark backgrounds)
  const whiteData = Buffer.from(data);
  for (let i = 0; i < whiteData.length; i += info.channels) {
    const a = whiteData[i + 3];
    if (a > 0) {
      const r = whiteData[i];
      const g = whiteData[i + 1];
      const b = whiteData[i + 2];
      const isGold = (r > 70 && r > b * 1.2);
      if (!isGold) {
        whiteData[i] = 255;
        whiteData[i + 1] = 255;
        whiteData[i + 2] = 255;
      }
    }
  }
  await sharp(whiteData, { raw: info })
    .png({ compressionLevel: 9 })
    .toFile('public/assets/imagens-diversas/logo-powerrh-white.png');
  console.log('Saved logo-powerrh-white.png');

  // 3. Process emblem / symbol
  console.log('Processing symbol and favicons...');
  const baseImg = sharp(src).extract(cropSymbol);

  // 512x512 master symbol
  const buf512 = await baseImg.clone().resize(512, 512, { kernel: 'lanczos3' }).png({ compressionLevel: 9 }).toBuffer();
  fs.writeFileSync('public/assets/imagens-diversas/logo-powerrh-symbol.png', buf512);
  fs.writeFileSync('public/android-chrome-512x512.png', buf512);

  // 192x192
  const buf192 = await sharp(buf512).resize(192, 192).png({ compressionLevel: 9 }).toBuffer();
  fs.writeFileSync('public/android-chrome-192x192.png', buf192);

  // 180x180 Apple touch icon
  const buf180 = await sharp(buf512).resize(180, 180).png({ compressionLevel: 9 }).toBuffer();
  fs.writeFileSync('public/apple-touch-icon.png', buf180);

  // 48x48
  const buf48 = await sharp(buf512).resize(48, 48).png({ compressionLevel: 9 }).toBuffer();
  fs.writeFileSync('public/favicon-48x48.png', buf48);

  // 32x32
  const buf32 = await sharp(buf512).resize(32, 32).png({ compressionLevel: 9 }).toBuffer();
  fs.writeFileSync('public/favicon-32x32.png', buf32);
  fs.writeFileSync('public/favicon.png', buf32);

  // 16x16
  const buf16 = await sharp(buf512).resize(16, 16).png({ compressionLevel: 9 }).toBuffer();
  fs.writeFileSync('public/favicon-16x16.png', buf16);

  // 4. Create favicon.ico containing 16, 32, 48
  const images = [
    { width: 16, height: 16, data: buf16 },
    { width: 32, height: 32, data: buf32 },
    { width: 48, height: 48, data: buf48 }
  ];

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(images.length, 4); // Number of images

  let offset = 6 + images.length * 16;
  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width === 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height === 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // Palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.data.length, 8); // Image size
    entry.writeUInt32LE(offset, 12); // Offset
    dirEntries.push(entry);
    offset += img.data.length;
  }

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...images.map(img => img.data)]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('Saved favicon.ico');

  // 5. Create favicon.svg
  const b64 = buf512.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image width="512" height="512" href="data:image/png;base64,${b64}" />
</svg>`;
  fs.writeFileSync('public/favicon.svg', svgContent.trim());
  console.log('Saved favicon.svg');

  // 6. Also create site.webmanifest
  const manifest = {
    name: "PowerRH — Consultoria Estratégica em Pessoas",
    short_name: "PowerRH",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#01243E",
    background_color: "#01243E",
    display: "standalone"
  };
  fs.writeFileSync('public/site.webmanifest', JSON.stringify(manifest, null, 2));
  console.log('Saved site.webmanifest');

  console.log('All image and favicon assets successfully generated!');
}

buildAll().catch(err => {
  console.error(err);
  process.exit(1);
});
