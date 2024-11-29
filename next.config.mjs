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
        destination: "/content/products", 
      },
      {
        source: "/urunlerimiz/:slug",
        destination: "/content/products-detail/:slug/page",
      },
      {
        source: "/referanslarimiz",
        destination: "/content/references", // Map /hakkimizda to the correct file
      },
      {
        source: "/iletisim",
        destination: "/content/contact", // Map /hakkimizda to the correct file
      },
    ];
  },
};

export default nextConfig;
