import { useState, useEffect } from "react";
import { Shield, Award, Heart, Search } from "lucide-react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [animateFeatures, setAnimateFeatures] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();
  const { t } = useTranslation();

  const categories = [
    {
      title: t("products.tabs.0"),
      subcategories: [
        {
          name: t("products.tab1.0"),
          path: "/urunlerimiz/g-serisi-kultur-medyumlari",
        },
        {
          name: t("products.tab1.1"),
          path: "/urunlerimiz/diger-kultur-medyumlari",
        },
        {
          name: t("products.tab1.2"),
          path: "/urunlerimiz/sperm-yikama-ve-dondurma",
        },
        { name: t("products.tab1.3"), path: "/urunlerimiz/ovoil" },
        {
          name: t("products.tab1.4"),
          path: "/urunlerimiz/mikromanipulasyon-medyumlari",
        },
        { name: t("products.tab1.5"), path: "/urunlerimiz/vitrifikasyon" },
      ],
    },
    {
      title: t("products.tabs.1"),
      subcategories: [
        {
          name: t("products.tab2.0"),
          path: "/urunlerimiz/oosit-toplama-igneleri",
        },
        {
          name: t("products.tab2.1"),
          path: "/urunlerimiz/manipulasyon-pipetleri",
        },
        {
          name: t("products.tab2.2"),
          path: "/urunlerimiz/vitrolife-kultur-kaplari",
        },
      ],
    },
    {
      title: t("products.tabs.2"),
      subcategories: [
        { name: t("products.tab3.0"), path: "/urunlerimiz/embryoscope" },
        { name: t("products.tab3.1"), path: "/urunlerimiz/octax-lazer" },
      ],
    },
  ];

  const productFeatures = [
    {
      icon: Shield,
      title: t("products.featurestitle.0"),
      description: t("products.featurescon.0"),
    },
    {
      icon: Award,
      title: t("products.featurestitle.1"),
      description: t("products.featurescon.1"),
    },
    {
      icon: Heart,
      title: t("products.featurestitle.2"),
      description: t("products.featurescon.2"),
    },
    {
      icon: Search,
      title: t("products.featurestitle.3"),
      description: t("products.featurescon.3"),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById("features-section");
      if (
        featuresSection?.getBoundingClientRect().top <
        window.innerHeight * 0.75
      ) {
        setAnimateFeatures(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 ">
      <div className="relative w-full bg-gradient-to-br from-blue-400 to-blue-500 h-[100px] xl:h-[200px] flex flex-col justify-center items-center ">
        <div className="text-white text-center z-10">
          <h1 className="text-4xl xl:text-7xl font-bold md:mb-2 ">
            {t("products.title")}
          </h1>
          <p className="text-base md:text-lg xl:text-xl text-white">
            {t("products.title2")}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <div className="flex justify-center mb-8 overflow-x-auto scrollbar-hide">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 font-semibold transition-colors duration-200 ${
                activeTab === idx
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-blue-400"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="p-8  pb-36 xl:pb-0 xl:h-[370px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories[activeTab].subcategories.map((sub, idx) => (
              <div
                key={idx}
                onClick={() => router.push(sub.path)}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  group bg-white/90 rounded-xl py-8 px-4 cursor-pointer
             
                  
                `}
                style={{
                  animation: `fadeIn 0.5s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="flex items-center justify-center h-full relative overflow-hidden rounded-xl">
                  <span className="font-medium text-lg text-gray-800   group-hover:text-blue-600 z-10 text-center">
                    {sub.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="features-section" className="pb-8 px-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`
                  bg-white/80 backdrop-blur p-8 rounded-2xl
                  transform transition-all duration-500
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
                  ${
                    animateFeatures
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                  }
                  hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50
                `}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center ">
                  <div className="bg-blue-100 p-4 rounded-2xl transform transition-transform duration-300 hover:scale-110 hover:rotate-3 mb-4">
                    <feature.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-500">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
