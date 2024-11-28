/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  async rewrites() {
    return [
      {
        source: "/hakkimizda",
        destination: "/content/about", // Map /hakkimizda to the correct file
      },
      {
        source: "/urunlerimiz",
        destination: "/content/products", // Map /hakkimizda to the correct file
      },
    ];
  },
};

export default nextConfig;
