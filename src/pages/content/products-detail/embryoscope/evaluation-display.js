import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/router";
import {
  LucideBeaker,
  Shield,
  Info,
  Microscope,
  AlertCircle,
  ArrowLeft,
  Clock,
  Flask,
  Check,
  Download,
  Brain,
} from "lucide-react";

const GXDisplay = () => {
  const router = useRouter(); // Initialize useRouter

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };
  const products = [
    {
      name: "iDAScore",
      description: "Yapay zeka kaynaklı otomatik analiz",
      image: "/idascore.jpeg",
      link: "https://www.vitrolife.com/products/time-lapse-systems/embryo-decision-support-tools#14931",
    },
    {
      name: "Guided Annotation",

      description: "Veri analizi",
      image: "/guided_annotation.jpeg",
      link: "https://www.vitrolife.com/products/time-lapse-systems/embryo-decision-support-tools#14936",
    },
    {
      name: "KIDScore",

      description: "Karar yardımı",
      image: "/kidscore.jpeg",
      link: "https://www.vitrolife.com/products/time-lapse-systems/embryo-decision-support-tools#14935",
    },
  ];

  const researchPoints = [
    {
      text: "Asetil-L-Karnitin, Alfa-Lipoik Asit ve N-Asetil-L-Sistein kombinasyon halinde embriyo gelişimi üzerinde oldukça faydalı bir etkiye sahiptir.",
      references: "1, 2",
      image: "/arastirma_bulgulari1.png",
    },
    {
      text: "Gelişmiş embriyo canlılığı.",
      references: "3, 4",
      image: "/arastirma_bulgulari2.png",
    },
    {
      text: "Faydalar %20 oksijende en yüksek seviyededir ancak %5 oksijende de mevcuttur.",
      references: "1, 2",
      image: "/arastirma_bulgulari3.png",
    },
    {
      text: "Üç antioksidan, gamet işleme medyumlarında, IVF medyumlarında ve kültür medyumlarında bulunmalıdır.",
      references: "1, 2, 3, 4, 5",
      image: "/arastirma_bulgulari4.png",
    },
    {
      text: "Sperm hazırlama, oosit toplama ve sonraki ICSI fertilizasyonu için kullanıldığında gelişmiş ICSI fertilizasyon oranları.",
      references: "4, 6",
      image: "/arastirma_bulgulari5.png",
    },
    {
      text: "IVF süreci boyunca sürekli kullanıldığında 35-40 yaş arası kadınlarda önemli ölçüde artmış gebelik oranları.",
      references: "3, 6",
      image: "/arastirma_bulgulari6.png",
    },
  ];

  const usageGuidelines = [
    "+37°C ve ortam atmosferinde ekilibrasyondan sonra kullanın",
    "Asla CO2 inkübatörüne koymayın veya CO2 ile ekilbre edilmiş yağ ile kapatmayın",
    "Kumulus-oosit komplekslerinin işlenmesi ve toplanması, denüdasyon, ICSI, embriyo biyopsisi için kullanılabilir",
    "Yağ örtüsü ile hazırlandıktan sonra 6 saate kadar kullanılabilir",
    "Nemlendirilmemiş ortamda yağ örtüsü olmadan 60 dakika içinde kullanın",
    "Oositler veya embriyolar medyumda 30 dakikadan fazla kalmamalıdır",
  ];

  const groupedResearchPoints = researchPoints.reduce(
    (resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 3);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    },
    []
  );

  return (
    <div className="max-w-7xl mx-auto  py-8">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Geri Dön
        </button>
      </div>
      {/* Header Section */}
      <div className="text-center space-y-4 mt-12">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-start space-x-0 space-y-4 md:space-y-0 md:space-x-8">
          <img
            src={"/degerlendirme.png"}
            alt={"degerlendirme araclari"}
            width={200}
            className=" rounded-lg"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-900 text-left mb-4">
              Değerlendirme Araçları
            </h1>
            <p className="text-lg  text-justify text-gray-600 max-w-3xl mx-auto">
              Embriyoların istatistiksel canlılıklarına göre puanlanmasını
              sağlamak amacıyla, çeşitli kriterler uygulayarak embriyoları
              detaylı bir şekilde değerlendiren ve bu süreçte kullanıcıya
              rehberlik eden gelişmiş karar destek araçları.
            </p>
          </div>
        </div>
      </div>

      {/* Storage Information */}
      <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3 mt-12">
        <Brain className="text-blue-600 w-6 h-6" />
        <p className="text-blue-600 font-medium">
          Embryo Analiz Yazılım Araçları
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-3 gap-6 mt-4">
        {products.map((product) => (
          <Card
            key={product.code}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardContent className="p-6 ">
              <div className="flex justify-center">
                <div className="w-52 h-52 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.text}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>{" "}
              </div>
              <div className="flex items-start justify-center mt-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h2>
                </div>
              </div>

              <div className="flex justify-center">
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
              <div className="flex justify-center mt-8 ">
                <a
                  href={product.link}
                  target="_blank"
                  className="px-4 py-2 bg-blue-200 text-gray-700 rounded-sm cursor-pointer "
                >
                  Daha Fazlası
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* idascore*/}
      <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl overflow-hidden mt-36">
        <div className="p-8">
          <div className="flex justify-between space-x-8 text-justify  items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                iDAScore
              </h2>
              <p className="mb-8">
                iDAScore, gelişmekte olan embriyoların tamamen otomatik
                analizlerini sağlamak için deep learning teknolojisinden
                faydalanır. Artık bir hastanın embriyolarının her birinin
                implantasyon olasılığına dayalı olarak objektif bir sıralamayı,
                tek bir dokunuşla aynı anda elde edebilirsiniz. Embriyo
                değerlendirmesinin geleceği burada başlıyor.
              </p>
            </div>
            <div className="hidden md:flex flex-shrink-0">
              <img
                src="/idascore2.png"
                alt="idascore"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className=" text-gray-700 text-justify ">
            <h2 className="text-2xl font-bold text-left text-gray-900 mb-2">
              Kısırlık tedavisinde yapay zeka
            </h2>
            <p className="mb-4">
              Tüp bebek (IVF) tedavisinde time-lapse teknolojisi, embriyo
              kültürü ve değerlendirmesini iyileştiren bir platform sunmanın
              yanı sıra embriyo gelişimi hakkında daha fazla bilgi edinilmesini
              sağlar. Görüntü analizi için yapay zeka (AI) yöntemlerindeki
              ilerlemeler, embriyo değerlendirmesini bir sonraki seviyeye
              taşımamıza olanak tanımaktadır.
            </p>

            <p className="">
              <a className="italic">Nature Medicine</a> dergisinde yayımlanan
              RCT çalışması, iDAScore'un standart manuel değerlendirmeye göre 10
              kat daha hızlı olduğunu ve benzer klinik sonuçlar sağladığını
              göstermektedir.
            </p>
          </div>
          <div className="md:hidden justify-center flex flex-shrink-0 w-full mt-8">
            <img
              src="/idascore2.png"
              alt="idascore"
              className="max-w-96 h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* guided anno */}
      <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl overflow-hidden mt-8">
        <div className="p-8">
          <div className="flex justify-between space-x-8 text-justify  items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Guided Annotation
              </h2>
              <p className="mb-8">
                EmbryoViewer yazılımında isteğe bağlı bir araç olarak sunulan bu
                özellik, daha sade bir anotasyon iş akışı sağlamak üzere
                tasarlanmıştır. Bu yazılım sayesinde, EmbryoScope+, EmbryoScope
                8 ve EmbryoScope Flex cihazlarından elde edilen verilerle
                seçilen embriyoların gelişimini inceleyebilir, notlar
                ekleyebilir ve karşılaştırabilirsiniz. Üç farklı inkübatör tipi
                için aynı EmbryoViewer yazılımı kullanılabilir. İnkübatörlerin
                çalışma koşulları hasta verileriyle birlikte otomatik olarak
                kaydedilir ve kalite güvencesi için EmbryoViewer yazılımında
                görüntülenebilir.
              </p>
            </div>
            <div className="hidden md:flex flex-shrink-0">
              <img
                src="/guided_annotation2.png"
                alt="idascore"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className=" text-gray-700 text-justify ">
            <h2 className="text-2xl text-left font-bold text-gray-900 mb-2">
              Embriyoların tutarlı değerlendirilmesi
            </h2>
            <p className="mb-4">
              EmbryoScope time-lapse sistemi tarafından elde edilen geniş
              kapsamlı görüntü bilgileri sayesinde, her bir embriyonun
              gelişiminin her aşaması ayrıntılı bir şekilde gözlemlenebilir.
              Guided Annotation, embriyoların transfer ve/veya dondurma için en
              uygun olanlarını değerlendirebilmeniz adına, tam olarak ihtiyaç
              duyduğunuz miktarda ve türde embriyo gelişim bilgisi toplamanızı
              sağlar.
            </p>

            <p className="">
              Akıllı yazılım araçları ve yapay zeka uygulamalarıyla Guided
              Annotation, embriyo anotasyonunu hızlı, verimli ve hassas hale
              getirir ve otomasyon seviyesini tamamen kontrol etmenizi sağlar.
              Güven tahmini, yüksek güven seviyesine sahip anotasyonları
              otomatikleştirmenize ve düşük güven seviyesine sahip
              anotasyonların doğrulanmasını önceliklendirmenize olanak tanır.
            </p>
          </div>
          <div className="md:hidden justify-center flex flex-shrink-0 w-full mt-8">
            <img
              src="/guided_annotation2.png"
              alt="idascore"
              className="max-w-96 h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* guided anno */}
      <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl overflow-hidden mt-8">
        <div className="p-8">
          <div className="flex justify-between space-x-8 text-justify  items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                KIDScore
              </h2>
              <p className="mb-8">
                KIDScore D3 & D5, seçim kriterlerinden ziyade kaçınma
                kriterlerini kullanarak güvenli bir ilk model sunar ve kendi
                modellerinizi tasarlayıp uygulamanıza olanak tanır. Guided
                Annotation, KIDScore ile sinerji içinde çalışarak embriyoların
                tutarlı bir şekilde değerlendirilme sürecini en iyi şekilde
                destekler.
              </p>
            </div>
            <div className="hidden md:flex flex-shrink-0">
              <img
                src="/kidscore2.png"
                alt="idascore"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className=" text-gray-700 text-justify ">
            <h2 className="text-2xl text-left font-bold text-gray-900 mb-2">
              Guided Annotation ve KIDScore
            </h2>
            <p className="mb-4">
              Guided Annotation, KIDScore ile sinerji içinde çalışarak embriyo
              değerlendirme sürecinizin tutarlılığını en iyi şekilde destekler.
            </p>

            <p className="mb-4">KIDScore'un avantajları:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Karar verme sürecini geliştirir</li>
              <li>Tutarlılığı artırır</li>
              <li>Daha iyi sonuçlar elde etmenize yardımcı olur</li>
            </ul>
          </div>
          <div className="md:hidden justify-center flex flex-shrink-0 w-full mt-8">
            <img
              src="/kidscore2.png"
              alt="idascore"
              className="max-w-96 h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GXDisplay;
