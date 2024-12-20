import React from "react";
import { ExternalLink, ArrowLeft, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

const ProductDisplay = ({ product }) => {
  const router = useRouter();

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

  // Render composition details
  const renderComposition = (composition) => {
    if (!composition || composition.length === 0) return null;
    if (typeof composition[0] === "object") {
      return (
        <div className="mt-8 text-black">
          <h3 className="text-xl font-semibold mb-4">Components</h3>
          <div className="grid gap-4">
            {composition.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h4 className="font-medium text-lg">{item.name}</h4>
                {item.description && (
                  <p className="text-gray-600 mt-2">{item.description}</p>
                )}
                {item.ref && (
                  <p className="text-sm text-gray-500 mt-2">REF: {item.ref}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

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
      <div className="max-w-7xl mx-auto ">
        <button
          onClick={() => router.back()}
          className=" mb-8 flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 " />
          <span className="">Geri Dön</span>
        </button>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-8">
            <div className="flex gap-8 items-start pt-8">
              {/* Product Image */}
              <div className="relative w-[200px] h-[200px] flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDisplay;
