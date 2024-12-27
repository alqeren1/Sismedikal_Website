/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Ensures images work in a static export
  },
  reactStrictMode: true,
  transpilePackages: ["geist"],
  async rewrites() {
    return [
      {
        source: "/hakkimizda",
        destination: "/content/about",
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
        source: "/iletisim",
        destination: "/content/contact",
      },
      {
        source: "/protokoller",
        destination: "/content/protocols",
      },
      {
        source: "/urunlerimiz/:slug/:Pslug",
        destination: "/content/products-detail/individual-product",
      },
    ];
  },
};

export default nextConfig;
