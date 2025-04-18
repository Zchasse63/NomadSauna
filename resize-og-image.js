// Script to resize the Open Graph image to optimal dimensions (1200×630 pixels)
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

console.log('Creating optimized Open Graph image...');

// Define paths
const ogDir = path.join(__dirname, 'public', 'images', 'og');
const inputPath = path.join(ogDir, 'og-image.png');
const outputPath = path.join(ogDir, 'og-image-optimized.png');
const backupPath = path.join(ogDir, 'og-image-original.png');

// Make sure the directory exists
if (!fs.existsSync(ogDir)) {
  console.log('Creating OG image directory...');
  fs.mkdirSync(ogDir, { recursive: true });
}

// Check if the input file exists
if (!fs.existsSync(inputPath)) {
  console.error('❌ Error: Original OG image not found at', inputPath);
  process.exit(1);
}

// Create a backup of the original image
try {
  fs.copyFileSync(inputPath, backupPath);
  console.log('✅ Created backup of original image at', backupPath);
} catch (err) {
  console.error('❌ Error creating backup:', err);
  process.exit(1);
}

// Get image info before resizing
sharp(inputPath)
  .metadata()
  .then(metadata => {
    console.log(`Original image dimensions: ${metadata.width}×${metadata.height}`);

    // Resize the image
    return sharp(inputPath)
      .resize(1200, 630, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFile(outputPath);
  })
  .then(() => {
    console.log('✅ Open Graph image resized successfully!');

    // Replace the original with the optimized version
    fs.renameSync(outputPath, inputPath);
    console.log('✅ Original image replaced with optimized version');

    // Add a version query parameter to the image URL in layout.tsx
    const timestamp = Date.now();
    console.log(`\nTo force cache refresh, update your OG image URL to include a version parameter:`);
    console.log(`/images/og/og-image.png?v=${timestamp}`);

    return sharp(inputPath).metadata();
  })
  .then(metadata => {
    console.log(`\nNew image dimensions: ${metadata.width}×${metadata.height}`);
    console.log('\nNext steps:');
    console.log('1. Update your Open Graph meta tags in app/layout.tsx to include a version parameter');
    console.log('2. Deploy your site to Netlify');
    console.log('3. Use social media debugging tools to clear the cache for each platform');
  })
  .catch(err => {
    console.error('❌ Error resizing image:', err);
    process.exit(1);
  });
