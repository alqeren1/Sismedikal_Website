import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/router";
import { Shield, ArrowLeft, Info, Download } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const OVOILDisplay = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const handleBack = () => {
    router.back();
  };

  const products = [
    {
      name: "OVOIL™",
      code: "10029",
      volume: "1 x 100 mL",
      description: t("ovoil.products.ovoil.desc"),
      application: t("ovoil.products.ovoil.app"),
      image: "/ovoil-100-ml.png",
    },
    {
      name: "OVOIL HEAVY™",
      code: "10174",
      volume: "1 x 100 mL",
      description: t("ovoil.products.ovoilHeavy.desc"),
      application: t("ovoil.products.ovoilHeavy.app"),
      image: "/ovoil_heavy.jpeg",
    },
  ];
  const documents = [
    {
      title: "OVOIL™",
      type: "Package inserts",
      language: "English",
      description: "Package insert OVOIL",
      ref: "REF 20425, version 10",
      image: "/ovoil-100-ml.png",
      download: "/pdfs/PI_ovoil.pdf",
    },
    {
      title: "OVOIL HEAVY™",
      type: "Package inserts",
      language: "English",
      description: "Package insert OVOIL HEAVY - Multi-language",
      ref: "REF 26908, version 01",
      image: "/ovoil_heavy.jpeg",
      download: "/pdfs/PI_ovoil_heavy.pdf",
    },
  ];
  const documents2 = [
    {
      title: "OVOIL™",
      type: "Safety data sheets (SDS)",
      language: "English",
      description: "SDS OVOIL",
      ref: "Date Revised : 06/27/2023. Revision No : 6. Safety data sheet for OVOIL",
      image: "/ovoil-100-ml.png",
      download: "/pdfs/sds_ovoil.pdf",
    },
    {
      title: "OVOIL HEAVY™",
      type: "Safety data sheets (SDS)",
      language: "English",
      description: "SDS OVOIL HEAVY",
      ref: "Date Revised : 04/29/2024. Revision No : 2. Safety data sheet for OVOIL HEAVY",
      image: "/ovoil_heavy.jpeg",
      download: "/pdfs/sds_ovoil_heavy.pdf",
    },
  ];
  const documents3 = [
    {
      title: "OVOIL™",
      type: "Scientific summaries",
      language: "English",
      description:
        "Comparison of cover oils - OVOIL gives both more good and top quality embryos",
      ref: "In a study by Sifer et el, microdroplet embryo cultures covered with OVOIL from Vitrolife gave a significantly increased mean number of good and top quality embryos at day 3, compared to other commercial available oils. This difference may be explained by the origin of raw materials and the difference in quality tests performed by each company.",
      image: "/ovoil-group.jpeg",
      download:
        "/pdfs/comparison-of-cover-oils---ovoil-gives-both-more-good-and-top-quality-embryos.pdf",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-8">
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
      <div className="text-center  mt-12">
        <h1 className="text-4xl font-bold text-gray-900">OVOIL™</h1>
        <p className="text-lg font-medium text-gray-500 mb-4">
          {t("ovoil.t2")}
        </p>
        <p className="text-lg text-justify text-gray-600 max-w-3xl mx-auto">
          {t("ovoil.t3")}
        </p>
      </div>

      {/* Storage Information */}
      <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3 mt-12">
        <Shield className="text-blue-600 w-6 h-6" />
        <p className="text-blue-800 font-medium">{t("ovoil.storage")}</p>
      </div>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
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
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">
                    {t("embryoglue.t4")}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">
                    {" "}
                    {t("embryoglue.t6")}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.application}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Usage Information */}
      <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 mt-8">
        <div className="flex items-center gap-3 mb-6">
          <Info className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">{t("ovoil.t1")}</h2>
        </div>
        <p className="text-gray-700">{t("ovoil.usage")}</p>
      </div>

      {/* Choice is yours Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl overflow-hidden mt-20">
        <div className="  p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {" "}
                {t("ovoil.t4")}
              </h2>
            </div>
            <div className="prose text-gray-700">
              <p className="mb-4">{t("ovoil.t5")}</p>
              <p className="mb-4">{t("ovoil.t6")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Choice is yours Section */}
      <div className="bg-gradient-to-r to-white from-blue-50 rounded-xl overflow-hidden mt-10">
        <div className="  p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {t("ovoil.t7")}
              </h2>
            </div>
            <div className="prose text-gray-700">
              <p className="mb-4">{t("ovoil.t8")}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Documents Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center mt-36">
          {t("embryoglue.t26")}
        </h2>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-left">
          {t("embryoglue.t27")}
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
          {t("embryoglue.t28")}
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
          {t("embryoglue.t30")}
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

export default OVOILDisplay;
