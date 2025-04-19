// Script to create an Open Graph image from scratch with a solid background
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

console.log('Creating Open Graph image from scratch with solid background...');

// Define paths
const ogDir = path.join(__dirname, 'public', 'images', 'og');
const logoPath = path.join(__dirname, 'Link Picture No Bg.png'); // Use the logo with transparent background
const outputPath = path.join(ogDir, 'og-image-new.png');
const finalPath = path.join(ogDir, 'og-image.png');
const backupPath = path.join(ogDir, 'og-image-original.png');

// Brand colors
const WARM_TAUPE = '#D9C4A3'; // Warm Taupe color for consistent background
const WARM_TAUPE_RGB = { r: 217, g: 196, b: 163 }; // RGB values for Warm Taupe

// OG Image dimensions
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// Make sure the directory exists
if (!fs.existsSync(ogDir)) {
  console.log('Creating OG image directory...');
  fs.mkdirSync(ogDir, { recursive: true });
}

// Check if the logo file exists
if (!fs.existsSync(logoPath)) {
  console.error('❌ Error: Logo file not found at', logoPath);
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

// First, create a solid background with the Warm Taupe color
sharp({
  create: {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    channels: 3,
    background: WARM_TAUPE_RGB
  }
})
  .png()
  .toBuffer()
  .then(backgroundBuffer => {
    console.log('✅ Created solid background with Warm Taupe color');
    
    // Get logo dimensions to calculate proper positioning
    return sharp(logoPath)
      .metadata()
      .then(metadata => {
        console.log(`Logo dimensions: ${metadata.width}×${metadata.height}`);
        
        // Calculate the size for the logo (60% of the height)
        const logoHeight = Math.round(OG_HEIGHT * 0.6);
        const logoWidth = Math.round((logoHeight / metadata.height) * metadata.width);
        
        // Calculate position to center the logo
        const left = Math.round((OG_WIDTH - logoWidth) / 2);
        const top = Math.round((OG_HEIGHT - logoHeight) / 2);
        
        console.log(`Positioning logo at (${left}, ${top}) with size ${logoWidth}×${logoHeight}`);
        
        // Resize the logo and overlay it on the background
        return sharp(logoPath)
          .resize(logoWidth, logoHeight)
          .toBuffer()
          .then(logoBuffer => {
            return sharp(backgroundBuffer)
              .composite([
                {
                  input: logoBuffer,
                  top: top,
                  left: left
                }
              ])
              .toFile(outputPath);
          });
      });
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
    console.log('3. Use social media debugging tools to clear the cache for each platform:');
    console.log('   - Facebook: https://developers.facebook.com/tools/debug/');
    console.log('   - Twitter: https://cards-dev.twitter.com/validator');
    console.log('   - LinkedIn: https://www.linkedin.com/post-inspector/');
  })
  .catch(err => {
    console.error('❌ Error creating image:', err);
    process.exit(1);
  });
