// Script to resize the Open Graph image to optimal dimensions
const fs = require('fs');
const path = require('path');

console.log('Creating optimized Open Graph image...');

// Since we don't have Sharp installed and can't install it in this environment,
// we'll create a placeholder script that explains what needs to be done

const instructions = `
To resize the Open Graph image to optimal dimensions (1200×630 pixels):

1. Install Sharp:
   npm install sharp

2. Create a resize script (resize-og-image.js):
   const sharp = require('sharp');
   const fs = require('fs');
   const path = require('path');

   const inputPath = path.join(__dirname, 'public', 'images', 'og', 'og-image.png');
   const outputPath = path.join(__dirname, 'public', 'images', 'og', 'og-image-optimized.png');

   sharp(inputPath)
     .resize(1200, 630, {
       fit: 'contain',
       background: { r: 255, g: 255, b: 255, alpha: 1 }
     })
     .toFile(outputPath)
     .then(() => {
       console.log('✅ Open Graph image resized successfully!');
       // Replace the original with the optimized version
       fs.renameSync(outputPath, inputPath);
     })
     .catch(err => {
       console.error('Error resizing image:', err);
     });

3. Run the script:
   node resize-og-image.js

4. Update the Open Graph meta tags in app/layout.tsx to use the resized image.

For now, we'll continue using the original image, which will still work but might not display optimally on all platforms.
`;

console.log(instructions);

// Create a note file with the instructions
fs.writeFileSync(
  path.join(__dirname, 'og-image-resize-instructions.md'),
  instructions
);

console.log('✅ Created instructions for optimizing the Open Graph image.');
console.log('📝 See og-image-resize-instructions.md for details.');
