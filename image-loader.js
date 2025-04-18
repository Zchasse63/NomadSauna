// This is a custom loader for Next.js images in static export mode
export default function myImageLoader({ src, width, quality }) {
  // For absolute URLs (external images), return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, ensure they're properly referenced
  // Remove any leading slash to make paths relative
  const path = src.startsWith('/') ? src.slice(1) : src;
  
  // Return the path as-is for static exports
  return path;
}
