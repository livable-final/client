/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['https://livable-final.s3.ap-northeast-2.amazonaws.com'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'livable-final.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // env 환경변수 load
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_URL,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    WEATHER_BASE_URL: process.env.WEATHER_BASE_URL,
    MEMBER_TOKEN: process.env.NEXT_MEMBER_TOKEN,
    VISITOR_TOKEN: process.env.NEXT_VISITOR_TOKEN,
  },
};

module.exports = nextConfig;
