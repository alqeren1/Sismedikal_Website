import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Shield, Check, ArrowLeft, Download } from "lucide-react";
import { useRouter } from "next/router";

const EmbryoGlueDisplay = () => {
  const router = useRouter();
  const documents = [
    {
      title: "EmbryoGlue®",
      type: "Package inserts",
      language: "English",
      description: "Package insert EmbryoGlue 10085 - Multi-language",
      ref: "REF 20441, version 12",
      image: "/EmbryoGlue_10.png",
      download: "/pdfs/PI_EmbryoGlue_10085.pdf",
    },
    {
      title: "EmbryoGlue®",
      type: "Package inserts",
      language: "English",
      description: "Package insert EmbryoGlue 10168 - Multi-language",
      ref: "REF 28232, version 03",
      image: "/embryoglue_patient.png",
      download: "/pdfs/PI_embryoglue_10168.pdf",
    },
  ];
  const documents2 = [
    {
      title: "EmbryoGlue®",
      type: "Safety data sheets (SDS)",
      language: "English",
      description: "SDS EmbryoGlue",
      ref: "Date Revised : 06/01/2023. Revision No : 6. Safety data sheet for EmbryoGlue",
      image: "/EmbryoGlue_10.png",
      download: "/pdfs/sds_embryoglue.pdf",
    },
  ];
  const documents3 = [
    {
      title: "EmbryoGlue®",
      type: "Scientific summaries",
      language: "English",
      description:
        "EmbryoGlue improves pregnancy and implantation rates. Results from a meta-analysis on almost 10,000 embryo transfers",
      ref: "A meta-analysis of Japanese studies, including almost 10,000 cycles shows that EmbryoGlue improves implantation resulting in increased pregnancy rates confirming findings from the Cochrane reports.",
      image: "/EmbryoGlue_10.png",
      download:
        "/pdfs/EmbryoGlue-improves-pregnancy-and-implantation-rates.pdf",
    },
  ];

  const documents4 = [
    {
      title: "EmbryoGlue®",
      type: "Short protocols",
      language: "English",
      description: "G-Series™ Embryo transfer - EmbryoGlue® 1x10 ml",
      ref: "REF 19182. Version 03. Date of issue 221216 This short protocol describes how to perform embryo transfer using EmbryoGlue® 1x10 ml.",
      image: "/EmbryoGlue_10.png",
      download: "/pdfs/sp_g_series_embryo_transfer_embryoglue_10ml.pdf",
    },
    {
      title: "EmbryoGlue®",
      type: "Short protocols",
      language: "English",
      description: "G-Series™ Embryo transfer - EmbryoGlue® 5x1.5 ml",
      ref: "REF 19187. Version 3. Date of issue 220923. This short protocol describes how to perform embryo transfer using EmbryoGlue® 5x1.5 ml.",
      image: "/embryoglue_patient.png",
      download: "/pdfs/sp_g_series_embryo_transfer_embryoglue_15ml.pdf",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto   py-8">
      {/* Geri Dön Butonu */}
      <div className="mb-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Geri Dön
        </button>
      </div>

      {/* Başlık */}
      <div className="text-center space-y-4 mt-12">
        <h1 className="text-4xl font-bold text-gray-900">EmbryoGlue®</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
          İmplantasyonu artırmak için gelişmiş transfer medyumu. Embriyo
          transferinde kullanıldığında klinik gebelik oranını ve canlı doğum
          oranını artırdığı kanıtlanmıştır.
        </p>
      </div>

      {/* Saklama Bilgisi */}
      <div className="bg-blue-50 p-4 mt-12 rounded-lg flex items-center gap-3">
        <Shield className="text-blue-600 w-6 h-6" />
        <p className="text-blue-800 font-medium">
          +2 ile +8°C arasında karanlıkta saklayın
        </p>
      </div>

      {/* Ürünler */}
      <div className="grid lg:grid-cols-2 gap-6 mt-4">
        {/* Ürün 1 */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  EmbryoGlue®
                </h2>
                <p className="text-gray-500">Kod: 10085</p>
                <p className="text-gray-500">1 x 10 mL</p>
                <div className="space-y-3 pt-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Açıklama</h3>
                    <p className="text-gray-600 text-sm">
                      Bikarbonat tamponlu medyum, hyaluronan ve rekombinant
                      insan albümini içerir.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Amacı</h3>
                    <p className="text-gray-600 text-sm">
                      Embriyo transferi için medyum.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Uygulama</h3>
                    <p className="text-gray-600 text-sm">
                      +37°C ve %6 CO2'de ön dengelemeden sonra kullanım için.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Saklama</h3>
                    <p className="text-gray-600 text-sm">
                      Karanlıkta +2 ile +8°C arasında saklayın.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-32 h-32 flex-shrink-0">
                <img
                  src="/EmbryoGlue_10.png"
                  alt="EmbryoGlue 10mL"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ürün 2 */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  EmbryoGlue®{" "}
                  <a className="ml-1 text-lg font-medium italic text-gray-500">
                    Patient Pack
                  </a>
                </h2>

                <p className="text-gray-500">Kod: 10168</p>
                <p className="text-gray-500">5 x 1.5 mL</p>
                <div className="space-y-3 pt-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Açıklama</h3>
                    <p className="text-gray-600 text-sm">
                      Bikarbonat tamponlu medyum, hyaluronan ve rekombinant
                      insan albümini içerir.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Amacı</h3>
                    <p className="text-gray-600 text-sm">
                      Embriyo transferi için medyum.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Uygulama</h3>
                    <p className="text-gray-600 text-sm">
                      +37°C ve %6 CO2'de ön dengelemeden sonra kullanım için.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Saklama</h3>
                    <p className="text-gray-600 text-sm">
                      Karanlıkta +2 ile +8°C arasında saklayın.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-32 h-32 flex-shrink-0">
                <img
                  src="/embryoglue_patient.png"
                  alt="EmbryoGlue Hasta Paketi"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* EmbryoGlue Başarıyla Transfer İçin */}
      <div className="grid lg:grid-cols-2 gap-6  mt-12 lg:mt-36">
        {/* EmbryoGlue Nedir? */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 ">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            EmbryoGlue Nedir?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            EmbryoGlue, yalnızca embriyo transferi için geliştirilmiş bir
            medyumdur ve kanıtlanmış implantasyon artırıcı etkisi olan tek
            mevcut transfer medyumudur. EmbryoGlue, zengin bir blastosist kültür
            medyumunun temel bileşimine sahiptir ve rekombinant albümin ile
            yüksek konsantrasyonda hyaluronan içerir. EmbryoGlue, tüm embriyo
            gelişim aşamalarının transferinde kullanılabilir. EmbryoGlue
            kullanımı, klinik gebelik oranını ve canlı doğum oranını
            artırabilir.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Başarılı Bir Transfer İçin EmbryoGlue
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Embriyo transferi, tüp bebek tedavisinde en hassas ve kritik
            işlemlerden biridir. Hyaluronan açısından zengin bir transfer
            medyumu olan EmbryoGlue®, embriyo implantasyonunu teşvik etmek için
            tasarlanmıştır. Klinik kanıtlara göre, embriyo transferinde
            EmbryoGlue kadar başarı oranını önemli ölçüde artıran müdahaleler
            azdır. EmbryoGlue, başarılı implantasyonu teşvik ettiği ve gebelik
            ile canlı doğum oranını artırdığı kanıtlanmıştır.
          </p>
        </div>
      </div>

      {/* EmbryoGlue'nun Kanıtlanmış Etkinliği */}
      <div className=" mt-20 lg:mt-36 px-2 lg:px-0">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-6 lg:mb-12">
          EmbryoGlue'nun Kanıtlanmış Efektifliği
        </h2>
        <div className="justfiy-center text-xl">
          <div className="w-full  flex justify-center">
            <p className="max-w-4xl text-justify ">
              EmbryoGlue'ün 2003 yılında piyasaya sürülmesinden bu yana,
              etkinliği hakkında birçok çalışma yayınlanmıştır. Transfer
              medyumlarında hyaluronanın etkisine dair üç inceleme, Cochrane
              Library tarafından 2010, 2014 ve 2020 yıllarında yayınlanmıştır.
            </p>{" "}
          </div>
          <div className="grid lg:grid-cols-2 text-justify gap-6 mt-8">
            {" "}
            <p>
              2020 yılında Heymann ve ekibi tarafından yapılan "Yardımlı üreme
              teknolojileri için embriyo transfer medyumlarında hiyaluronik
              asit" başlıklı Cochrane İncelemesi şu sonuca varmıştır:{" "}
              <p className="mt-4 italic">
                "Orta kalitede kanıtlar, hiyaluronik asidin embriyo transfer
                medyumlarındaki yapışma bileşeni olarak eklenmesiyle klinik
                gebelik ve canlı doğum oranlarının arttığını göstermektedir."
              </p>
            </p>{" "}
            <p>
              Düşük oranı bazı çalışmalarda azalmış ancak toplam veri setinde
              istatistiksel olarak anlamlı bir seviyeye ulaşmamıştır. İnceleme,
              IVF/ICSI tedavisi gören toplam 6704 hastayı içeren 26 randomize,
              prospektif, kontrollü denemeyi kapsamaktadır. Embriyo transferleri
              ya hiç ya da düşük hiyaluronan içeren bir transfer medyumunda veya
              yüksek hiyaluronan konsantrasyonuna sahip EmbryoGlue kullanılarak
              gerçekleştirilmiştir.
            </p>
          </div>
        </div>
      </div>

      {/* EmbryoGlue Nasıl Çalışır? */}
      <div className="mt-20 lg:mt-36 flex flex-col lg:flex-row lg:space-x-28 items-center lg:items-start">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            EmbryoGlue Nasıl Çalışır?
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed text-justify">
            EmbryoGlue, implantasyonu teşvik eden bir makromolekül olan
            hyaluronan içeren bir transfer medyumudur. Hyaluronan, foliküler,
            oviduktal ve uterin sıvılarda bulunan ana glikozaminoglikandır ve
            kadın üreme kanalının yüksek viskozite ortamına önemli ölçüde
            katkıda bulunabilir. Hyaluronan sentezi, implantasyonun başlatıldığı
            gün dramatik şekilde artar ve bu olayın önemi ile ilişkilidir.
          </p>
        </div>

        <div className="mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="/1712x1101_hatching_blastocyst.jpg"
            alt="EmbryoGlue 10mL"
            className="max-w-full lg:max-w-[500px] max-h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* EmbryoGlue Kullanımı Kolaydır */}
      <div className="mt-20 lg:mt-36  bg-gradient-to-r from-blue-50 to-white rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          EmbryoGlue'nun Kullanımı Kolaydır
        </h2>
        <p className="text-gray-700 leading-relaxed">
          EmbryoGlue kullanırken laboratuvar ve transfer süreçlerine dikkat
          etmek önemlidir. İyi çalışılmış bir transfer medyumu olan EmbryoGlue,
          diğer ürünlere kıyasla transfer optimizasyonu hakkında daha fazla
          veriye sahiptir. Transfer protokolleri için kapların hazırlanması,
          embriyo dengeleme süresi ve kateter yükleme gibi faktörler, sonuçları
          etkileyebilecek önemli unsurlardır.
        </p>
        <p className="font-semibold text-2xl text-gray-900 mt-8">
          Unutulmaması Gereken 3 Şey
        </p>
        <p className=" text-gray-700 mt-4">
          Kullanım talimatlarını takip ederek stabil ozmolalite, pH ve sıcaklığı
          sağlayın. Aşağıda takip edilmesi gereken üç önemli laboratuvar
          prosedür adımı bulunmaktadır. Klinik destek için lütfen Vitrolife
          temsilcinizle iletişime geçin.
        </p>
        <div className="flex justify-center">
          <div className="flex md:flex-row flex-col justify-between mt-8 w-full space-y-4 md:space-y-0">
            <div className="flex flex-row md:flex-col items-center justify-left ">
              <img
                src="/eglueicons-1.png"
                alt="EmbryoGlue 10mL"
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg"
              />
              <p className="w-full flex justify-left md:justify-center text-2xl ml-4 md:ml-0 md:text-base mt-2 font-semibold">
                Kap hacimleri
              </p>
            </div>
            <div className="flex flex-row md:flex-col items-center justify-left">
              <img
                src="/eglueicons-2.png"
                alt="EmbryoGlue 10mL"
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg"
              />
              <p className="w-full flex justify-left md:justify-center text-2xl ml-4 md:ml-0 md:text-base mt-2 font-semibold">
                Embriyo dengeleme
              </p>
            </div>
            <div className="flex flex-row md:flex-col items-center justify-left">
              <img
                src="/eglueicons-3.png"
                alt="EmbryoGlue 10mL"
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg"
              />
              <p className="w-full flex justify-left md:justify-center text-2xl ml-4 md:ml-0 md:text-base mt-2 font-semibold">
                Kateter yükleme
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center mt-20 lg:mt-36">
          Dökümanlar
        </h2>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-left">
          Paket İçerikleri
        </h1>
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <Card
              key={index}
              className="bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-6">
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600">{doc.type}</p>
                    <p className="text-sm text-gray-600">{doc.language}</p>
                    <p className="text-sm text-gray-800 mt-2">
                      {doc.description}
                    </p>
                    <p className="text-xs text-gray-500">{doc.ref}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={doc.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <Download className="w-6 h-6 text-gray-600" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mt-8  mb-2 text-left">
          Kısa Protokoller
        </h1>
        <div className="space-y-4">
          {documents4.map((doc, index) => (
            <Card
              key={index}
              className="bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-6">
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600">{doc.type}</p>
                    <p className="text-sm text-gray-600">{doc.language}</p>
                    <p className="text-sm text-gray-800 mt-2">
                      {doc.description}
                    </p>
                    <p className="text-xs text-gray-500">{doc.ref}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={doc.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <Download className="w-6 h-6 text-gray-600" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mt-8  mb-2 text-left">
          Güvenlik Bilgileri
        </h1>
        <div className="space-y-4">
          {documents2.map((doc, index) => (
            <Card
              key={index}
              className="bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-6">
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600">{doc.type}</p>
                    <p className="text-sm text-gray-600">{doc.language}</p>
                    <p className="text-sm text-gray-800 mt-2">
                      {doc.description}
                    </p>
                    <p className="text-xs text-gray-500">{doc.ref}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={doc.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <Download className="w-6 h-6 text-gray-600" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mt-8  mb-2 text-left">
          Bilimsel Sonuçlar
        </h1>
        <div className="space-y-4">
          {documents3.map((doc, index) => (
            <Card
              key={index}
              className="bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-6">
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600">{doc.type}</p>
                    <p className="text-sm text-gray-600">{doc.language}</p>
                    <p className="text-sm text-gray-800 mt-2">
                      {doc.description}
                    </p>
                    <p className="text-xs text-gray-500">{doc.ref}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={doc.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <Download className="w-6 h-6 text-gray-600" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmbryoGlueDisplay;
