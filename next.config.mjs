/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image optimization for static exports
  images: {
    unoptimized: true,
    // Disable the image optimization service
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  // Generate a static export
  output: 'export',
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
  // Ensure trailing slashes for better compatibility
  trailingSlash: true,
};

export default nextConfig;
