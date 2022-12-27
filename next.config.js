/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/shop/all",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/shop/all",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/shop/all",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/shop/all",
        permanent: true,
      },
      {
        source: "/product",
        destination: "/shop/all",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
