/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['it','en'],
    defaultLocale: 'it',
  }
}

module.exports = nextConfig
