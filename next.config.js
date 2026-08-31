/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Security headers ficam em vercel.json: com output: 'export' o Next ignora headers().
};

module.exports = nextConfig;
