/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // 👈 THIS LINE FIXES YOUR ERROR
  typescript: {
    ignoreBuildErrors: true,
  },
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
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'wsrv.nl',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  
  // 👇 ADD THIS NEW SECTION BELOW IMAGES 👇
  async redirects() {
    return [
      {
        // If anyone visits the non-www version...
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'jeckukas.org.in',
          },
        ],
        // ...instantly forward them to the official www version!
        destination: 'https://www.jeckukas.org.in/:path*',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;