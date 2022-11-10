/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  async redirects() {
    return [
      {
        source: "/threads",
        destination: "/forum",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
