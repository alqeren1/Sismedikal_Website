import { useState } from "react";

export default function About() {
  const [selectedTab, setSelectedTab] = useState("history");

  const tabs = {
    history: {
      title: "Tarihçemiz",
      content:
        "Sis Medikal Ltd., Türkiye’de **IVF sektörünün ilk ve öncü firmasıdır**. IVF merkezlerinin ihtiyaçlarının karşılanmasına yönelik çalışmaları doğrultusunda, **Vitrolife ürünlerinin Türkiye yetkili distribütörlüğünü** sürdürmektedir. Sis Medikal Ltd. IVF sektöründe faaliyet gösteren hastane ve kliniklere hizmet vermek amacıyla **1994 yılında kurulmuştur**. Sektörün büyümesi ile birlikte yurt genelinde sayıları giderek artan IVF merkezlerine, Ankara ve İstanbul ofisleri ile hizmet vermektedir. Etik prensiplerden taviz vermeksizin sürdürdüğü hizmetleri ve işbirligi yaptığı kliniklerle **“çözüm ortağı”** anlayışını her an hissettiren yaklaşımı ile Sis Medikal Ltd, kurumsal kimliğini kısa zamanda tüm sektöre kabul ettirmiş ve IVF sahasının vazgeçilmez unsurları arasındaki yerini almıştır.",
    },
    mission: {
      title: "Misyonumuz",
      content:
        "IVF sektöründe, **en yüksek kalite standartlarını** benimseyerek, etik değerlerden ödün vermeksizin, inovatif ürünler ve üstün hizmet anlayışıyla sektördeki tüm partnerlerimiz için en güvenilir çözüm ortağı olmak.",
    },
    vision: {
      title: "Vizyonumuz",
      content:
        "Kalite, bilimsellik ve etik prensipleri temel alarak, sektördeki liderlik konumumuzu sürdürülebilir yeniliklerle pekiştirmek ve müşterilerimize en iyi hizmeti sunmak. Hedefimiz, IVF alanında ulusal ve uluslararası düzeyde güvenilir, saygın ve öncü bir marka olarak sektöre yön vermektir.",
    },
  };

  const stats = [
    { number: "30+", label: "Yıllık Deneyim" },
    { number: "200+", label: "Partner Klinik" },

    { number: "50+", label: "Ürün Çeşidi" },
  ];

  // Function to process content with bold markers
  const processContent = (content) => {
    const parts = content.split(/(\*\*.*?\*\*)/); // Split on **...**
    return parts.map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex flex-col bg-blue-50 items-center w-full">
      {/* Hero Section - Fixed */}
      <div className="relative w-full bg-gradient-to-br from-blue-400 to-blue-500 h-[100px] xl:h-[200px] flex flex-col justify-center items-center">
        <div className="text-white text-center z-10">
          <h1 className="text-4xl xl:text-7xl font-bold">Hakkımızda</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full  max-w-7xl px-4 py-8">
        {/* Tabs Section */}
        <div className="flex justify-left xslg:justify-center mb-12 overflow-x-auto scrollbar-hide">
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
        <div className="text-center mb-20   min-h-[320px]">
          <h2 className="text-3xl text-gray-800 font-bold mb-6">
            {tabs[selectedTab].title}
          </h2>
          <p className="text-gray-600 max-w-3xl text-justify min-h-[85px] mx-auto text-lg">
            {processContent(tabs[selectedTab].content)}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ">
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
