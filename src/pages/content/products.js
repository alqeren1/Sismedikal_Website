import { useState, useEffect } from 'react';
import { ChevronRight, Shield, Award, Heart, Search } from 'lucide-react';
import { useRouter } from "next/router";

const categories = [
  {
    title: 'VITROLIFE SOLÜSYON',
    subcategories: [
     { name: 'G-SERİSİ KÜLTÜR MEDYUMLARI', path: '/urunlerimiz/g-serisi-kultur-medyumlari' },
     { name: 'ALTERNATİF KÜLTÜR MEDYUMLARI', path: '/urunlerimiz/alternatif-kultur-medyumlari' },
     { name: 'SPERM YIKAMA VE DONDURMA', path: '/urunlerimiz/sperm-yikama-ve-dondurma' },
     { name: 'OVOIL', path: '/urunlerimiz/ovoil' },
     { name: 'MİKROMANİPÜLASYON MEDYUMLARI', path: '/urunlerimiz/mikromanipulasyon-medyumlari' },
     { name: 'VİTRİFİKASYON', path: '/urunlerimiz/vitrifikasyon' },
    ]
  },
  {
    title: 'VITROLIFE SARF',
    subcategories: [
     { name: 'OOSİT TOPLAMA İĞNELERİ', path: '/urunlerimiz/oosit-toplama-igneleri' },
     { name: 'MANİPÜLASYON PİPETLERİ', path: '/urunlerimiz/manipulasyon-pipetleri' },
     { name: 'VITROLIFE KÜLTÜR KAPLARI', path: '/urunlerimiz/vitrolife-kultur-kaplari' }
    ]
  },
  {
    title: 'VITROLIFE CİHAZ',
    subcategories: [
     { name: 'EMBRYOSCOPE', path: '/urunlerimiz/embryoscope' },
     { name: 'OCTAX LAZER', path: '/urunlerimiz/octax-lazer' }
    ]
  }
];

const productFeatures = [
  { icon: Shield, title: 'Ürün Güvencesi', description: 'Vitrolife kalite standartları' },
  { icon: Award, title: 'Sertifikalı Ürünler', description: 'Uluslararası kalite belgeleri' },
  { icon: Heart, title: 'Klinik Başarı', description: 'Kanıtlanmış klinik sonuçlar' },
  { icon: Search, title: 'Ürün Desteği', description: 'Teknik destek ve eğitim' }
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [animateFeatures, setAnimateFeatures] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById('features-section');
      if (featuresSection?.getBoundingClientRect().top < window.innerHeight * 0.75) {
        setAnimateFeatures(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h3 className="text-4xl mb-10 text-center text-blue-500">Ürünlerimiz</h3>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-2 inline-flex">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap
                  ${activeTab === idx 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid gap-6">
            {categories[activeTab].subcategories.map((sub, idx) => (
              <div
                key={idx}
                onClick={() => router.push(sub.path)}
                className="group bg-gray-50 hover:bg-blue-50 rounded-xl p-6 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800 group-hover:text-blue-800">
                    {sub.name}
                  </span>
                  <ChevronRight className="h-5 w-5 text-blue-500 transform group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Features */}
        <div id="features-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`
                  bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500
                  ${animateFeatures ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
                  hover:shadow-2xl hover:-translate-y-2
                `}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-blue-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}