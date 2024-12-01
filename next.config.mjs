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
        source: "/referanslarimiz",
        destination: "/content/references", 
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
        source: "/urunlerimiz/:slug/:Pslug",
        destination: "/content/products-detail/individual-product",
      },
    ];
  },
};

export default nextConfig;
