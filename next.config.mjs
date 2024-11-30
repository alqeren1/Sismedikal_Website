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
        destination: "/content/references", // Map /hakkimizda to the correct file
      },
      {
        source: "/iletisim",
        destination: "/content/contact", // Map /hakkimizda to the correct file
      },
      {
        source: "/protokoller",
        destination: "/content/protocols", // Map /hakkimizda to the correct file
      },
    ];
  },
};

export default nextConfig;
