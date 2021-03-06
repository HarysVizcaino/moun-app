/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', 'image.tmdb.org'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ['en-US', 'es-ES'],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: 'en-US',
  },
};

module.exports = nextConfig;
