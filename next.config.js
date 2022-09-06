/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'en',
    localeDetection: false,
  },
}