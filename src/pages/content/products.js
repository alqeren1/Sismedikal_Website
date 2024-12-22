import { useState, useEffect } from "react";
import { Shield, Award, Heart, Search } from "lucide-react";
import { useRouter } from "next/router";

const categories = [
  {
    title: "VITROLIFE SOLÜSYON",
    subcategories: [
      {
        name: "G-SERİSİ KÜLTÜR MEDYUMLARI",
        path: "/urunlerimiz/g-serisi-kultur-medyumlari",
      },
      {
        name: "DİĞER KÜLTÜR MEDYUMLARI",
        path: "/urunlerimiz/diger-kultur-medyumlari",
      },
      {
        name: "SPERM YIKAMA VE DONDURMA",
        path: "/urunlerimiz/sperm-yikama-ve-dondurma",
      },
      { name: "OVOIL", path: "/urunlerimiz/ovoil" },
      {
        name: "MİKROMANİPÜLASYON MEDYUMLARI",
        path: "/urunlerimiz/mikromanipulasyon-medyumlari",
      },
      { name: "VİTRİFİKASYON", path: "/urunlerimiz/vitrifikasyon" },
    ],
  },
  {
    title: "VITROLIFE SARF",
    subcategories: [
      {
        name: "OOSİT TOPLAMA İĞNELERİ",
        path: "/urunlerimiz/oosit-toplama-igneleri",
      },
      {
        name: "MANİPÜLASYON PİPETLERİ",
        path: "/urunlerimiz/manipulasyon-pipetleri",
      },
      {
        name: "VITROLIFE KÜLTÜR KAPLARI",
        path: "/urunlerimiz/vitrolife-kultur-kaplari",
      },
    ],
  },
  {
    title: "VITROLIFE CİHAZ",
    subcategories: [
      { name: "EMBRYOSCOPE", path: "/urunlerimiz/embryoscope" },
      { name: "OCTAX LAZER", path: "/urunlerimiz/octax-lazer" },
    ],
  },
];

const productFeatures = [
  {
    icon: Shield,
    title: "Ürün Güvencesi",
    description: "Vitrolife kalite standartları",
  },
  {
    icon: Award,
    title: "Sertifikalı Ürünler",
    description: "Uluslararası kalite belgeleri",
  },
  {
    icon: Heart,
    title: "Klinik Başarı",
    description: "Kanıtlanmış klinik sonuçlar",
  },
  {
    icon: Search,
    title: "Ürün Desteği",
    description: "Teknik destek ve eğitim",
  },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [animateFeatures, setAnimateFeatures] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

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
            Ürünlerimiz
          </h1>
          <p className="text-base md:text-lg xl:text-xl text-white">
            Vitrolife&apos;ın yenilikçi çözümleri ile klinik başarınızı artırın
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
