// @ts-check

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        // Rewrite everything else to use `pages/index`
        source: "/:path*",
        destination: "/",
      },
    ];
  },
  poweredByHeader: false,
};
