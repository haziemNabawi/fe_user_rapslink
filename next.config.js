/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '8000',
          pathname: '/storage/**',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '8000',
          pathname: '/storage/**',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '/**',
        }
      ],
    },
  }
  
  module.exports = nextConfig