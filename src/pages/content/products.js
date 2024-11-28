import { useState, useEffect } from 'react';
import { ChevronRight, Activity, Shield, Clock, Zap } from 'lucide-react';

const categories = [
  {
    title: 'VITROLIFE SOLÜSYON',
    subcategories: ['G-SERİSİ KÜLTÜR MEDYUMLARI', 'ALTERNATİF KÜLTÜR MEDYUMLARI', 'SPERM YIKAMA VE DONDURMA']
  },
  {
    title: 'VITROLIFE SARF',
    subcategories: ['OOSİT TOPLAMA İĞNELERİ', 'MANİPÜLASYON PİPETLERİ', 'VITROLIFE KÜLTÜR KAPLARI']
  },
  {
    title: 'VITROLIFE CİHAZ',
    subcategories: ['EMBRYOSCOPE', 'OCTAX LAZER']
  }
];

const features = [
  { icon: Activity, title: 'Yüksek Performans', description: 'En son teknoloji ile güçlendirilmiş çözümler' },
  { icon: Shield, title: 'Güvenilirlik', description: 'ISO sertifikalı kalite standartları' },
  { icon: Clock, title: 'Hızlı Teslimat', description: '24 saat içinde sevkiyat garantisi' },
  { icon: Zap, title: 'Teknik Destek', description: '7/24 uzman teknik destek hizmeti' }
];

export default function ProductsSection() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [animateFeatures, setAnimateFeatures] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById('features-section');
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setAnimateFeatures(true);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-6xl mx-auto px-8 py-40">
        <h2 className="text-4xl font-bold text-blue-800 mb-16 text-center">
          Ürünlerimiz
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg  "
              onMouseEnter={() => setHoveredCategory(idx)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-8 text-center">{category.title}</h3>
              <ul className="space-y-6">
                {category.subcategories.map((sub, subIdx) => (
                  <li
                    key={subIdx}
                    className={`
                      flex items-center transition-all duration-500 cursor-pointer
                      ${hoveredCategory === idx ? 'text-blue-500' : 'text-gray-700'}
                      hover:translate-x-2
                    `}
                  >
                    <ChevronRight 
                      className={`
                        h-5 w-5 mr-2 transition-all duration-500
                        ${hoveredCategory === idx ? 'translate-x-2 text-blue-500' : 'text-blue-300'}
                      `} 
                    />
                    <span className="font-medium">{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div id="features-section" className="py-16">
          <h3 className="text-3xl font-bold text-blue-800 mb-12 text-center">
            Neden Bizi Tercih Etmelisiniz?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`
                  bg-white p-6 rounded-xl shadow-lg transform transition-all duration-800
                  ${animateFeatures ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
                  hover:shadow-2xl hover:-translate-y-2 border border-blue-100
                `}
                
              >
                <div className="flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h4 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h4>
                  <p className="text-blue-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}