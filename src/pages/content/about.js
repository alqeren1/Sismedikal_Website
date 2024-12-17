import { useState } from "react";
import Highlighter from "react-highlight-words";

export default function About() {
  const [selectedTab, setSelectedTab] = useState("history");

  const tabs = {
    history: {
      title: "Tarihçemiz",
      content:
        "1997 yılından bu yana IVF sektörüne özel çözümler sunmaktayız. Kuruluşumuzdan bu yana, en yüksek kalite standartlarında ürün ve hizmet sağlayarak Türkiye'nin lider IVF ekipman tedarikçisi konumuna ulaştık.",
    },
    mission: {
      title: "Misyonumuz",
      content:
        "IVF laboratuvarlarına en yüksek kalitede ürün ve hizmet sağlayarak, başarı oranlarını artırmak ve hastaların hayallerine ulaşmalarına yardımcı olmak.",
    },
    vision: {
      title: "Vizyonumuz",
      content:
        "Türkiye ve çevre ülkelerde IVF sektörünün güvenilir çözüm ortağı olmaya devam ederken, global pazarda da söz sahibi olmak.",
    },
  };

  const stats = [
    { number: "25+", label: "Yıllık Deneyim" },
    { number: "200+", label: "Partner Klinik" },
    { number: "1000+", label: "Başarılı Proje" },
    { number: "50+", label: "Ürün Çeşidi" },
  ];

  return (
    <div className=" flex flex-col bg-blue-50 items-center w-full">
      {/* Hero Section - Fixed */}
      <div className="relative w-full bg-gradient-to-br from-blue-400 to-blue-500  h-[100px] xl:h-[200px] flex flex-col justify-center items-center">
        <div className="text-white text-center z-10">
          <h1 className="text-4xl xl:text-7xl font-bold ">Hakkımızda</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-7xl px-4 py-8">
        {/* Tabs Section - Keeping original */}
        <div className="flex justify-left xslg:justify-center mb-12  overflow-x-auto scrollbar-hide">
          {Object.entries(tabs).map(([key, { title }]) => (
            <button
              key={key}
              onClick={() => setSelectedTab(key)}
              className={`px-6 py-3 font-semibold ${
                selectedTab === key
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-blue-400"
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-center mb-36">
          <h2 className="text-3xl text-gray-800 font-bold mb-6">
            {tabs[selectedTab].title}
          </h2>
          <p className="text-gray-600 max-w-3xl min-h-[85px] mx-auto text-lg">
            {tabs[selectedTab].content}
          </p>
        </div>

        {/* Stats Section - Keeping original */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Section */}
      <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-gray-800 font-bold text-center mb-16">
            Kalite Politikamız
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Yüksek Kalite",
                content:
                  "En yüksek kalite standartlarında ürün ve hizmet sağlayarak müşterilerimizin güvenini kazanmak.",
                gradient: "from-blue-400 to-blue-500",
              },
              {
                title: "Sürekli İyileştirme",
                content:
                  "Süreçlerimizi sürekli gözden geçirerek ve iyileştirerek hizmet kalitemizi artırmak.",
                gradient: "from-blue-400 to-blue-500",
              },
              {
                title: "Müşteri Odaklılık",
                content:
                  "Müşterilerimizin ihtiyaçlarını en iyi şekilde anlayarak, beklentilerinin ötesinde çözümler sunmak.",
                gradient: "from-blue-400 to-blue-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative p-8 transition-colors duration-300 group-hover:text-white">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
