import React from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

const ProductDisplay = ({ product }) => {
  const router = useRouter();

  // Pipette series data
  const seriesData = [
    {
      name: "A-series",
      wideImage: "/icsi_a_series.jpg", // Replace with actual image path
      table: [
        {
          id: "4 - 5.5",
          ref: "15405",
          angle: "30",
          tipLength: "11-16",
          packageSize: "10-pack",
        },
      ],
      secondImage: "/icsi_a_series_tip.jpg", // Replace with actual image path
      description: `Uçtan 500 μm mesafede bir eğim bulunur.
Kısa ve keskin bir bevel ile kısa bir spike içerir.
Oositlere daha az zarar verilmesini sağlamak için benzersiz bir daralma ile başlayıp genişleyen bir tasarıma sahiptir.`,
    },
    {
      name: "B-series",
      wideImage: "/icsi_b_series.jpg", // Replace with actual image path
      table: [
        {
          id: "4 - 5.5",
          ref: "15415",
          angle: "30",
          tipLength: "17-20",
          packageSize: "10-pack",
        },
      ],
      secondImage: "/icsi_b_series_tip.jpg", // Replace with actual image path
      description: `Uçtan 500 μm mesafede bir eğim bulunur.  
Kısa ve keskin bir bevel ile daha uzun bir spike içerir.  
Oositlere daha az zarar verilmesini sağlamak için benzersiz bir daralma ile başlayıp genişleyen bir tasarıma sahiptir.`,
    },
    {
      name: "C-series",
      wideImage: "/icsi_c_series.jpg", // Replace with actual image path
      table: [
        {
          id: "5 - 6",
          ref: "15409",
          angle: "30",
          tipLength: "12-15",
          packageSize: "10-pack",
        },
      ],
      secondImage: "/icsi_c_series_tip.jpg", // Replace with actual image path
      description: `Uçtan 400 μm mesafede bir eğim bulunur.
Kısa bir bevel ve çok kısa bir spike içerir.
Uçtan eğim yerine olan kısa mesafe nedeniyle PVP'de daha dayanıklı ve rijit bir kullanım sağlar.`,
    },
    {
      name: "D-series",
      wideImage: "/icsi_d_series.jpg", // Replace with actual image path
      table: [
        {
          id: "4 - 5",
          ref: "15430",
          angle: "30",
          tipLength: "13-16.5",
          packageSize: "10-pack",
        },
      ],
      secondImage: "/icsi_d_series_tip.jpg", // Replace with actual image path
      description: `Uçtan 1000 μm mesafede bir eğim bulunur.
Yüklenen sperm üzerinde daha fazla kontrol sağlamak için paralel duvarlara sahiptir.`,
    },
    {
      name: "E-series",
      wideImage: "/icsi_e_series.jpg", // Replace with actual image path
      table: [
        {
          id: "4 - 5",
          ref: "15444",
          angle: "30",
          tipLength: "13-16",
          packageSize: "10-pack",
        },
      ],
      secondImage: "/icsi_e_series_tip.jpg", // Replace with actual image path
      description: `Uçtan 400 μm mesafede bir eğim bulunur.
Orta uzunlukta bir bevel, kısa bir daralma ve paralel duvarlara sahiptir.`,
    },
    {
      name: "F-series",
      wideImage: "/icsi_f_series.jpg", // Replace with actual image path
      table: [
        {
          id: "4.2 - 5.2",
          ref: "15432",
          angle: "30",
          tipLength: "",
          packageSize: "10-pack",
        },
      ],
      secondImage: "/icsi_f_series_tip.jpg", // Replace with actual image path
      description: `
Uçtan 700 μm mesafede bir eğim bulunur.
Orta uzunlukta bir bevel, uzun bir daralma ve paralel duvarlara sahiptir.`,
    },
    {
      name: "T-series",
      wideImage: "/icsi_t_series.jpg", // Replace with actual image path
      table: [
        {
          id: "6.5 - 8",
          ref: "15451",
          angle: "30",
          tipLength: "15-20",
          packageSize: "10-pack",
        },
      ],
      secondImage: "/icsi_t_series_tip.jpg", // Replace with actual image path
      description: `Eğim, uçtan 500 μm mesafede bulunur.
Spike ile spermatid ICSI için uygundur.`,
    },
  ];

  const seriesData2 = [
    {
      wideImage: "/icsi_spikeless.jpg", // Replace with actual image path
      table: [
        {
          name: "Biopsy pipette",
          ref: "15133",
          id: "23 fluted",

          angle: "30",

          packageSize: "10-pack",
        },
        {
          name: "",
          ref: "15112",
          id: "20",

          angle: "30",

          packageSize: "10-pack",
        },
        {
          name: "",
          ref: "15115",
          id: "25",

          angle: "30",

          packageSize: "10-pack",
        },
        {
          name: "",
          ref: "15116",
          id: "30",

          angle: "0",

          packageSize: "10-pack",
        },
        {
          name: "",
          ref: "15117",
          id: "30",

          angle: "20",

          packageSize: "10-pack",
        },
        {
          name: "",
          ref: "15149",
          id: "30",

          angle: "25",

          packageSize: "10-pack",
        },
        {
          name: "",
          ref: "15118",
          id: "30",

          angle: "30",

          packageSize: "10-pack",
        },
        {
          name: "",
          ref: "15119",
          id: "30",

          angle: "35",

          packageSize: "10-pack",
        },
      ],
      secondImage: "/icsi_spikeless_tip.jpg", // Replace with actual image path
    },
  ];

  // Utility function to get the image URL or return a fallback
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return "/placeholder.png"; // Fallback to placeholder
    if (imageUrl.startsWith("http")) {
      return imageUrl; // Absolute URL
    }
    return `/${imageUrl}`; // Relative path
  };

  // Image component with fallback handling
  const ImageWithFallback = ({ src, alt, className }) => {
    const [imgSrc, setImgSrc] = React.useState(getImageUrl(src));

    return (
      <Image
        src={imgSrc}
        alt={alt || "Product Image"}
        className={className}
        onError={() => setImgSrc("/placeholder.png")} // Fallback to placeholder
        layout="fill"
        objectFit="cover"
      />
    );
  };

  // Render series data for pipettes
  const renderSeries = (series) => {
    return (
      <div className="mt-12" key={series.name}>
        <h2 className="text-xl font-bold text-gray-900 mb-6">{series.name}</h2>
        <div className="grid grid-rows lg:grid-cols-2 gap-6">
          {/* Wide Image */}
          <div className="overflow-x-auto">
            <div className="mb-6">
              <Image
                src={series.wideImage}
                alt={`${series.name} wide image`}
                width={800} // Adjust width and height as needed
                height={200}
                className="w-full object-cover rounded-lg"
              />
            </div>
            {/* Table */}
            <div>
              <table className="w-full whitespace-nowrap text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border-b">I.D. (μm)</th>
                    <th className="p-3 border-b">REF</th>
                    <th className="p-3 border-b">Angle</th>
                    <th className="p-3 border-b">Tip Length (μm)</th>
                    <th className="p-3 border-b">Package Size</th>
                  </tr>
                </thead>
                <tbody>
                  {series.table.map((row, index) => (
                    <tr key={index} className="odd:bg-white even:bg-gray-50">
                      <td className="p-3 border-b">{row.id}</td>
                      <td className="p-3 border-b">{row.ref}</td>
                      <td className="p-3 border-b">{row.angle}</td>
                      <td className="p-3 border-b">{row.tipLength}</td>
                      <td className="p-3 border-b">{row.packageSize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Second Image */}
          <div className="items-end">
            <h1 className="font-semibold text-lg text-gray-900">Uç Şekli</h1>
            <div className="flex justify-left items-center">
              <Image
                src={series.secondImage}
                alt={`${series.name} tip image`}
                width={300} // Adjust width and height as needed
                height={300}
                className="object-contain rounded-lg"
              />
            </div>
            {/* Description */}
            <div className="mt-6">
              <p className="text-gray-700">{series.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSeries2 = (series) => {
    return (
      <div className="mt-12" key={series.name}>
        <h2 className="text-xl font-bold text-gray-900 mb-6">{series.name}</h2>
        <div className="mb-6">
          <Image
            src={series.wideImage}
            alt={`${series.name} wide image`}
            width={800} // Adjust width and height as needed
            height={200}
            className="w-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col space-x-0 lg:space-x-4 justify-between lg:flex-row gap-0 ">
          {/* Wide Image */}
          {/* Second Image */}
          <div className="items-end">
            <h1 className="font-semibold text-lg text-gray-900">Uç Şekli</h1>
            <div className="flex justify-left items-center">
              <Image
                src={series.secondImage}
                alt={`${series.name} tip image`}
                width={300} // Adjust width and height as needed
                height={300}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            {/* Table */}
            <div className="min-w-[400px] lg:min-w-[800px] w-full">
              <table className="w-full whitespace-nowrap text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border-b">I.D. (μm)</th>
                    <th className="p-3 border-b">REF</th>
                    <th className="p-3 border-b">Angle</th>
                    <th className="p-3 border-b">Tip Length (μm)</th>
                    <th className="p-3 border-b">Package Size</th>
                  </tr>
                </thead>
                <tbody>
                  {series.table.map((row, index) => (
                    <tr key={index} className="odd:bg-white even:bg-gray-50">
                      <td className="p-3 border-b">{row.id}</td>
                      <td className="p-3 border-b">{row.ref}</td>
                      <td className="p-3 border-b">{row.angle}</td>
                      <td className="p-3 border-b">{row.tipLength}</td>
                      <td className="p-3 border-b">{row.packageSize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto whitespace-nowrap mt-8">
          <div className="min-w-[400px] lg:min-w-[800px] w-full">
            <table className="w-full whitespace-nowrap text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border-b">Product</th>
                  <th className="p-3 border-b">REF</th>

                  <th className="p-3 border-b">I.D. (μm)</th>
                  <th className="p-3 border-b">Angle</th>

                  <th className="p-3 border-b">Package Size</th>
                </tr>
              </thead>
              <tbody>
                {series.table.map((row, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border-b">{row.name}</td>
                    <td className="p-3 border-b">{row.ref}</td>
                    <td className="p-3 border-b">{row.id}</td>
                    <td className="p-3 border-b">{row.angle}</td>
                    <td className="p-3 border-b">{row.packageSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Render composition details
  const renderComposition = (composition) => {
    if (!composition || composition.length === 0) return null;
    return (
      <div className="mt-8 text-black">
        <h3 className="text-xl font-semibold mb-4">Kompozisyon</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {composition.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render product specifications
  const renderSpecifications = (specs) => {
    if (!specs || Object.keys(specs).length === 0) return null;
    return (
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Özellikler</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          {Object.entries(specs).map(([key, value]) => (
            <div
              key={key}
              className="flex p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium w-1/3 text-gray-700">{key}</span>
              <span className="text-gray-600 w-2/3">{value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render related products
  const renderProducts = (products) => {
    if (!products || products.length === 0) return null;
    return (
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Ürünler</h3>
        <div className="grid gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-6 items-start">
                <div className="relative w-[200px] h-[200px] flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-xl text-blue-800">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="text-gray-600 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-8 text-black">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Geri Dön
        </button>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start pt-8">
              <div className="relative w-[200px] h-[200px] flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1 }}
                  className="text-4xl font-bold"
                >
                  {product.name}
                </motion.h1>
                {product.subtitle && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-xl text-blue-100"
                  >
                    {product.subtitle}
                  </motion.p>
                )}
                {product.brand && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-2 text-blue-200"
                  >
                    Brand: {product.brand}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          <div className="px-8 py-12">
            {product.description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1 }}
                className="prose max-w-none"
              >
                <h3 className="text-xl font-semibold mb-4">Açıklama</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            )}
            {renderSpecifications(product.specifications)}
            {renderComposition(product.composition)}
            {renderProducts(product.products)}

            {/* Render headers and series only for "ICSI PİPETİ™" */}
            {product.name === "ICSI PİPETİ™" && (
              <>
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6 mt-16">
                  Pipet Serileri
                </h2>
                <h2 className="text-2xl font-bold text-gray-900 mb-12">
                  Spikelı ICSI Pipetleri
                </h2>
                {seriesData.map((series) => renderSeries(series))}
                <h2 className="text-2xl font-bold text-gray-900 mb-12 mt-16">
                  Spikesız ICSI Pipetleri
                </h2>
                {seriesData2.map((series) => renderSeries2(series))}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDisplay;
