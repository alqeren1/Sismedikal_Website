import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, Users } from "lucide-react";
import { useRouter } from "next/router";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const products = [
    {
      image: "/hero_images/1.png",
      name: "RAPİD WARM™ CLEAVE",
      description: "Klivaj Vitrifikasyon Çözme Medyumu",
    },
    {
      image: "/hero_images/2.png",
      name: "Vitrolife G-RINSE",
      description: "Durulama Solüsyonu",
    },
    {
      image: "/hero_images/3.png",
      name: "MICRO-DROPLET DISH",
      description: "Kültür Kabı",
    },
    {
      image: "/hero_images/4.png",
      name: "Vitrolife EMBRYO GLUE®™",
      description: "Transfer Medyumu",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full [height:calc(100vh-85px)] bg-gradient-to-br from-blue-50 to-white flex items-center justify-center mb-[450px]  md:mb-96 lg:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mb-0 lg:mb-28 mt-96 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-4 lg:space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <a
              href="https://www.vitrolife.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mt-10 sm:mt-0"
            >
              <img
                src="/vitrolife.svg"
                alt="vitrolife"
                width={100}
                height={100}
                objectFit="contain"
              />
              <span className="text-blue-800 font-medium ml-2">
                Türkiye Ana Distribütörü
              </span>
            </a>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-600"> IVF Sektöründe Lider </span>
              Çözüm Ortağınız
            </h1>

            <div className="space-y-4">
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-xl text-gray-700">
                  500+ Referans ve İş Ortağı
                </span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-xl text-gray-700">
                  Profesyonel Teknik Destek
                </span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-xl text-gray-700">
                  25+ Yıllık Tecrübe
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => router.push("/iletisim")}
              >
                Bize Ulaşın
              </button>
              <button
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                onClick={() => router.push("/urunlerimiz")}
              >
                Ürünleri İncele
              </button>
            </div>
          </div>

          {/* Right Content - Product Grid */}
          <div
            className={`grid grid-cols-2 gap-4 mt-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl overflow-hidden bg-white group border-2 border-blue-100"
              >
                <div className="relative h-36 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-xl"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
