// next.config.mjs
import { createEnv } from '@t3-oss/env-nextjs';

import './src/env.mjs';

const nextConfig = {
  async rewrites() {
    return [
      // other rewrites
      {
        source: '/api/meta/:path*',
        destination: process.env.NEXT_PUBLIC_VERCEL_URL
          ? 'https://isomorphic-furyroad.vercel.app/:path*'
          : 'http://localhost:3000/:path*',
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        pathname: '/redqteam.com/isomorphic-furyroad/public/**',
      },
      {
        protocol: 'https',
        hostname: 'isomorphic-furyroad.s3.amazonaws.com',
      },
    ],
  },
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000',
  },
};


export default nextConfig;
