// Script to create an optimized Open Graph image using the Link Picture No Bg
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

console.log('Creating optimized Open Graph image...');

// Define paths
const ogDir = path.join(__dirname, 'public', 'images', 'og');
const linkPicturePath = path.join(__dirname, 'public', 'Link Picture No Bg.png'); // Use the Link Picture No Bg from public directory
const outputPath = path.join(ogDir, 'og-image-optimized.png');
const finalPath = path.join(ogDir, 'og-image.png');
const backupPath = path.join(ogDir, 'og-image-original.png');

// Brand colors
const DESERT_BEIGE = '#E6D3AF';
const WARM_TAUPE = '#D9C4A3'; // Warm Taupe color for consistent background

// Make sure the directory exists
if (!fs.existsSync(ogDir)) {
  console.log('Creating OG image directory...');
  fs.mkdirSync(ogDir, { recursive: true });
}

// Check if the Link Picture No Bg file exists
if (!fs.existsSync(linkPicturePath)) {
  console.error('❌ Error: Link Picture No Bg not found at', linkPicturePath);
  process.exit(1);
}

// Create a backup of the original image if it exists
if (fs.existsSync(finalPath)) {
  try {
    fs.copyFileSync(finalPath, backupPath);
    console.log('✅ Created backup of original image at', backupPath);
  } catch (err) {
    console.error('❌ Error creating backup:', err);
    process.exit(1);
  }
}

// Get Link Picture info
sharp(linkPicturePath)
  .metadata()
  .then(metadata => {
    console.log(`Link Picture dimensions: ${metadata.width}×${metadata.height}`);

    // Resize the Link Picture to fit properly in the OG image
    return sharp(linkPicturePath)
      .resize({
        width: 1200,
        height: 630,
        fit: 'contain',
        background: { r: 217, g: 196, b: 163, alpha: 1 } // Warm Taupe color (#D9C4A3) for consistent background
      })
      .toFile(outputPath);
  })
  .then(() => {
    console.log('✅ Open Graph image created successfully!');

    // Replace or create the final image
    fs.renameSync(outputPath, finalPath);
    console.log('✅ OG image saved at', finalPath);

    // Add a version query parameter to the image URL in layout.tsx
    const timestamp = Date.now();
    console.log(`\nTo force cache refresh, update your OG image URL to include a version parameter:`);
    console.log(`/images/og/og-image.png?v=${timestamp}`);

    return sharp(finalPath).metadata();
  })
  .then(metadata => {
    console.log(`\nNew image dimensions: ${metadata.width}×${metadata.height}`);
    console.log('\nNext steps:');
    console.log('1. Update your Open Graph meta tags in app/layout.tsx to include a version parameter');
    console.log('2. Deploy your site to Netlify');
    console.log('3. Use social media debugging tools to clear the cache for each platform');
  })
  .catch(err => {
    console.error('❌ Error creating image:', err);
    process.exit(1);
  });
