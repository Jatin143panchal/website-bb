const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/assets/brand_grid');

async function fixCorners() {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
  for (const f of files) {
    const filePath = path.join(dir, f);
    const image = sharp(filePath);
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

    // Let's inspect transparent pixels:
    // If a pixel is transparent (alpha < 250), fill it with the nearest solid pixel in the same row/col or corner
    // To ensure exact corner squareness:
    // Find the non-transparent pixel in top-left quadrant, top-right quadrant, etc.
    const w = info.width;
    const h = info.height;
    
    // For top-left corner (y in 0..150, x in 0..150):
    // If data[idx+3] < 255, we can fill from the closest solid pixel
    let changed = false;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = (y * w + x) * 4;
        if (data[idx + 3] < 255) {
          // Look inwards diagonally towards center
          let solidIdx = -1;
          for (let step = 1; step < 200; step++) {
            const ny = y < h / 2 ? y + step : y - step;
            const nx = x < w / 2 ? x + step : x - step;
            if (ny >= 0 && ny < h && nx >= 0 && nx < w) {
              const testIdx = (ny * w + nx) * 4;
              if (data[testIdx + 3] === 255) {
                solidIdx = testIdx;
                break;
              }
            }
          }
          if (solidIdx !== -1) {
            data[idx] = data[solidIdx];
            data[idx + 1] = data[solidIdx + 1];
            data[idx + 2] = data[solidIdx + 2];
            data[idx + 3] = 255;
            changed = true;
          }
        }
      }
    }

    if (changed) {
      console.log('Fixed rounded corners for:', f);
      // Save back as sharp rectangle PNG
      await sharp(data, { raw: { width: w, height: h, channels: 4 } })
        .png({ compressionLevel: 8 })
        .toFile(filePath + '.tmp');
      fs.renameSync(filePath + '.tmp', filePath);
    } else {
      console.log('No transparency in:', f);
    }
  }
  console.log('Done!');
}

fixCorners();
