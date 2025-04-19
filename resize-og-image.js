// Script to create an optimized Open Graph image with proper background color
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

console.log('Creating optimized Open Graph image...');

// Define paths
const ogDir = path.join(__dirname, 'public', 'images', 'og');
const logoPath = path.join(__dirname, 'public', 'logo-no-bg.png'); // Use the logo without background
const outputPath = path.join(ogDir, 'og-image-optimized.png');
const finalPath = path.join(ogDir, 'og-image.png');
const backupPath = path.join(ogDir, 'og-image-original.png');

// Brand colors
const DESERT_BEIGE = '#E6D3AF';

// Make sure the directory exists
if (!fs.existsSync(ogDir)) {
  console.log('Creating OG image directory...');
  fs.mkdirSync(ogDir, { recursive: true });
}

// Check if the logo file exists
if (!fs.existsSync(logoPath)) {
  console.error('❌ Error: Logo image not found at', logoPath);
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

// Get logo info
sharp(logoPath)
  .metadata()
  .then(metadata => {
    console.log(`Logo dimensions: ${metadata.width}×${metadata.height}`);

    // Resize the logo to fit nicely in the OG image (max 500px height)
    return sharp(logoPath)
      .resize({
        height: 400,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
      })
      .toBuffer();
  })
  .then(resizedLogo => {
    console.log('✅ Logo resized successfully');

    // Create a new image with Desert Beige background
    return sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 230, g: 211, b: 175, alpha: 1 } // Desert Beige in RGBA
      }
    })
      .composite([
        {
          input: resizedLogo,
          gravity: 'center'
        }
      ])
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
