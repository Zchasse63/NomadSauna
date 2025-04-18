// Script to verify image paths during build
const fs = require('fs');
const path = require('path');

// Check if public/images directory exists
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  console.error('❌ Error: public/images directory not found!');
  process.exit(1);
}

// Check if showcase directory exists
const showcaseDir = path.join(imagesDir, 'showcase');
if (!fs.existsSync(showcaseDir)) {
  console.error('❌ Error: public/images/showcase directory not found!');
  process.exit(1);
}

// Check for specific images
const requiredImages = [
  'IMG_7359.jpeg',
  'IMG_7362.jpeg',
  'IMG_7364.jpeg',
  'IMG_7366.jpeg'
];

let allImagesFound = true;
for (const image of requiredImages) {
  const imagePath = path.join(showcaseDir, image);
  if (!fs.existsSync(imagePath)) {
    console.error(`❌ Error: Image not found: ${imagePath}`);
    allImagesFound = false;
  }
}

if (allImagesFound) {
  console.log('✅ All required images found in public/images/showcase directory');
} else {
  process.exit(1);
}

// Check if images will be copied to the output directory
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.log('ℹ️ Note: out directory does not exist yet (will be created during build)');
} else {
  const outImagesDir = path.join(outDir, 'images');
  if (!fs.existsSync(outImagesDir)) {
    console.log('ℹ️ Note: out/images directory does not exist yet (will be created during build)');
  } else {
    console.log('✅ out/images directory exists');
  }
}

console.log('✅ Image verification completed successfully');
