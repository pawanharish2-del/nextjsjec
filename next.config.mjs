/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // 👈 THIS LINE FIXES YOUR ERROR
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
};

export default nextConfig;