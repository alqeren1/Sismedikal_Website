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
} from "lucide-react";
import { useTranslation } from "react-i18next";
const GXDisplay = () => {
  const { t } = useTranslation();
  const router = useRouter(); // Initialize useRouter

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };
  const products = [
    {
      name: "Gx-MOPS™ PLUS",
      code: "10173",
      volume: "1 x 125 mL",
      description: t("gx.products.mops.desc"),
      application: t("gx.products.mops.app"),
      image: "/gx-mops-plus.png",
    },
    {
      name: "Gx-IVF™",
      code: "10171",
      volume: "1 x 60 mL",
      description: t("gx.products.ivf.desc"),
      application: t("gx.products.ivf.app"),
      image: "/gx-ivf.png",
    },
    {
      name: "Gx-TL™",
      code: "10172",
      volume: "1 x 30 mL",
      description: t("gx.products.tl.desc"),
      application: t("gx.products.tl.app"),
      image: "/gx-tl.png",
    },
  ];

  const researchPoints = [
    {
      text: t("gx.research.0"),
      references: "1, 2",
      image: "/arastirma_bulgulari1.png",
    },
    {
      text: t("gx.research.1"),
      references: "3, 4",
      image: "/arastirma_bulgulari2.png",
    },
    {
      text: t("gx.research.2"),
      references: "1, 2",
      image: "/arastirma_bulgulari3.png",
    },
    {
      text: t("gx.research.3"),
      references: "1, 2, 3, 4, 5",
      image: "/arastirma_bulgulari4.png",
    },
    {
      text: t("gx.research.4"),
      references: "4, 6",
      image: "/arastirma_bulgulari5.png",
    },
    {
      text: t("gx.research.5"),
      references: "3, 6",
      image: "/arastirma_bulgulari6.png",
    },
  ];

  const documents = [
    {
      title: "Gx-MOPS™ PLUS",
      type: "Package inserts",
      language: "English",
      description: "Package insert Gx-MOPS PLUS - Multi-language",
      ref: "REF 26903 version 05",
      image: "/gx-mops-plus.png",
      download: "/pdfs/PI_gx_mops_plus.pdf",
    },
    {
      title: "Gx-IVF™",
      type: "Package inserts",
      language: "English",
      description: "Package insert Gx-IVF - Multi-language",
      ref: "REF 26901 version 05",
      image: "/gx-ivf.png",
      download: "/pdfs/PI_gx_ivf.pdf",
    },
    {
      title: "Gx-TL™",
      type: "Package inserts",
      language: "English",
      description: "Package insert GxTL - Multi-language",
      ref: "REF 26902, version 05",
      image: "/gx-tl.png",
      download: "/pdfs/PI_gx_tl.pdf",
    },
    // Add more documents here...
  ];
  const documents2 = [
    {
      title: "Gx-MOPS™ PLUS",
      type: "Safety data sheets (SDS)",
      language: "English",
      description: "SDS Gx-MOPS PLUS",
      ref: "Date Revised : 06/27/2023. Revision No : 2. Safety data sheet for Gx-MOPS PLUS",
      image: "/gx-mops-plus.png",
      download: "/pdfs/sds_gx_mops_plus.pdf",
    },
    {
      title: "Gx-IVF™",
      type: "Safety data sheets (SDS)",
      language: "English",
      description: "SDS Gx-IVF",
      ref: "Date Revised : 06/27/2023. Revision No : 2. Safety data sheet for Gx-IVF",
      image: "/gx-ivf.png",
      download: "/pdfs/sds_gx_ivf.pdf",
    },
    {
      title: "Gx-TL™",
      type: "Safety data sheets (SDS)",
      language: "English",
      description: "SDS Gx-TL",
      ref: "Date Revised : 06/27/2023. Revision No : 2. Safety data sheet for Gx-TL",
      image: "/gx-tl.png",
      download: "/pdfs/sds_gx_tl.pdf",
    },
    // Add more documents here...
  ];
  const documents3 = [
    {
      title: "Gx-MOPS™ PLUS",
      type: "SSCP",
      language: "English",
      description: "SSCP Gx-MOPS PLUS",
      ref: "REP-2367. Version 3.0, revised 2024.06.27",
      image: "/gx-mops-plus.png",
      download: "/pdfs/sscp_gx_mops_plus.pdf",
    },
    {
      title: "Gx-IVF™",
      type: "SSCP",
      language: "English",
      description: "SSCP Gx-IVF",
      ref: "REP-2361. Version 4.0, revised 2024.07.02",
      image: "/gx-ivf.png",
      download: "/pdfs/sscp_gx_ivf.pdf",
    },
    {
      title: "Gx-TL™",
      type: "SSCP",
      language: "English",
      description: "SSCP Gx-TL",
      ref: "REP-2364. Version 4.0, revised 2024.06.27",
      image: "/gx-tl.png",
      download: "/pdfs/sscp_gx_tl.pdf",
    },
    // Add more documents here...
  ];

  const usageGuidelines = [
    t("gx.usage.0"),
    t("gx.usage.1"),
    t("gx.usage.2"),
    t("gx.usage.3"),
    t("gx.usage.4"),
    t("gx.usage.5"),
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
          {t("grid.back")}
        </button>
      </div>
      {/* Header Section */}
      <div className="text-center space-y-4 mt-12">
        <h1 className="text-4xl font-bold text-gray-900">{t("gx.t1")}</h1>
        <p className="text-lg  text-justify text-gray-600 max-w-3xl mx-auto">
          {t("gx.t2")}
        </p>
      </div>

      {/* Storage Information */}
      <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3 mt-12">
        <Shield className="text-blue-600 w-6 h-6" />
        <p className="text-blue-800 font-medium">{t("gx.t3")}</p>
      </div>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-3 gap-6 mt-4">
        {products.map((product) => (
          <Card
            key={product.code}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h2>
                  <p className="text-gray-500">{product.code}</p>
                  <p className="text-gray-500">{product.volume}</p>
                </div>
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.text}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{t("gx.t4")}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{t("gx.t5")}</h3>
                  <p className="text-gray-600 text-sm">{product.application}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Oxidative Stress Section */}
      <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl overflow-hidden mt-36">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Microscope className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t("gx.t6")}</h2>
            </div>
            <div className="prose text-gray-700">
              <p className="mb-4">{t("gx.t7")}</p>
              <p className="mb-4">{t("gx.t8")}</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>{t("gx.t9")}</li>
                <li>{t("gx.t10")}</li>
                <li>{t("gx.t11")}</li>
                <li>{t("gx.t12")}</li>
              </ul>
              <p className="mb-4">{t("gx.t13")}</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/gx_gif.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Research Findings Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center mt-36">
          {t("gx.t20")}
        </h2>
        <div className="space-y-6">
          {groupedResearchPoints.map((group, groupIndex) => (
            <div key={groupIndex} className="grid xl:grid-cols-3 gap-6">
              {group.map((point, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className=" h-full items-center  flex">
                    <CardContent className="p-6 ">
                      <div className="flex space-x-4 items-center ">
                        <div className="w-32 h-32 flex-shrink-0">
                          <img
                            src={point.image}
                            alt={point.text}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <p className="text-gray-800 mb-2  ">{point.text}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Specifications Section 
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Check className="w-8 h-8 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">Ürün Özellikleri</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Kalite Standartları
              </h3>
              <ul className="space-y-3">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Güvenlik Bilgileri
              </h3>
              <ul className="space-y-3">
                {safetyInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{info}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div> */}

      {/* Usage Guidelines Section */}
      <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 mt-36">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">{t("gx.t14")}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {usageGuidelines.map((guideline, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{guideline}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-50 rounded-xl p-8 mt-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-600">{t("gx.t15")}</p>
          <p className="text-sm text-gray-600 mt-4">{t("gx.t16")}</p>
        </div>
      </div>

      {/* Documents Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center mt-36">
          {t("gx.t17")}
        </h2>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-left">
          {t("gx.t18")}{" "}
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
          {t("gx.t19")}
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
          SSCP
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

      {/* Footer Warning 
      <div className="bg-red-50 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
          <div className="space-y-2">
            <p className="text-sm text-red-800">
              Dikkat: Federal (ABD) yasası bu cihazın satışını, cihazın
              kullanımı konusunda eğitimli bir hekim veya uygulayıcı tarafından
              veya onun siparişi üzerine yapılacak şekilde kısıtlar (Yalnızca
              Reçete ile).
            </p>
            <p className="text-sm text-red-800">
              Enjeksiyon için değildir. İşlem bittiğinde ürünü standart klinik
              uygulamaya göre tıbbi tehlikeli atık olarak atın.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GXDisplay;
