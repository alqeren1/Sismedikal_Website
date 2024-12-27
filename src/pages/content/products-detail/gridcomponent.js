import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const normalizeText = (text) => {
  if (!text || typeof text !== "string") return "";
  const turkishMap = {
    ı: "i",
    ğ: "g",
    ü: "u",
    ş: "s",
    ö: "o",
    ç: "c",
    İ: "i",
    Ğ: "g",
    Ü: "u",
    Ş: "s",
    Ö: "o",
    Ç: "c",
  };
  const specialCharMap = {
    "+": "plus",
    "&": "and",
    "@": "at",
    "#": "hash",
  };

  const decodedText = decodeURIComponent(text);
  const normalized = decodedText
    .toLowerCase()
    .replace(/[™®©℠]/g, "")
    .replace(/[ığüşöçİĞÜŞÖÇ]/g, (char) => turkishMap[char] || char)
    .replace(/[+&@#]/g, (char) => specialCharMap[char] || "-")
    .replace(/\//g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return normalized;
};

const ProductGrid = ({
  products,
  title,
  subtitle,
  bgClass = "bg-gradient-to-b from-white to-blue-100",
}) => {
  const router = useRouter();
  const lastSegment = router.asPath.split("/").pop();
  const { t } = useTranslation();
  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500">No Products</p>
      </div>
    );
  }
  const getProductUrl = (product) => {
    if (product.webpath) {
      // Use webpath if available, removing leading slash if present
      const cleanWebpath = product.webpath.startsWith("/")
        ? product.webpath.slice(1)
        : product.webpath;
      console.log("--------------------------------------------yea webpath");
      console.log(`/urunlerimiz/${lastSegment}/${cleanWebpath}`);
      return `/urunlerimiz/${lastSegment}/${cleanWebpath}`;
    } else {
      // Fall back to normalized name if no webpath
      console.log("--------------------------------------------no webpath");
      const normalizedName = normalizeText(product.name);
      return `/urunlerimiz/${lastSegment}/${normalizedName}`;
    }
  };
  return (
    <div className={`${bgClass} min-h-screen relative px-4`}>
      <div className="max-w-7xl mx-auto py-16">
        <button
          onClick={() => router.push("/urunlerimiz")}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="">{t("grid.back")}</span>
        </button>

        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-xl text-gray-500">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.webpath || product.name}
              onClick={() => router.push(getProductUrl(product))}
              className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden group flex flex-col cursor-pointer"
            >
              <div className="relative pt-[100%]">
                <Image
                  src={
                    product.path
                      ? `/${product.path}`
                      : "/api/placeholder/300/300"
                  }
                  alt={product.name}
                  width={100}
                  height={100}
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.brand}</p>
                <div className="flex-1 flex flex-col justify-end">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300 hover:bg-blue-700 group">
                    <span>{t("grid.more")}</span>
                    <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
