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
import { useTranslation } from "react-i18next";
const GXDisplay = () => {
  const router = useRouter(); // Initialize useRouter
  const { t } = useTranslation();
  const handleBack = () => {
    router.back(); // Go back to the previous page
  };
  const products = [
    {
      name: "iDAScore",
      description: t("gxmon.products.idascore.desc"),
      image: "/idascore.jpeg",
      link: "https://www.vitrolife.com/products/time-lapse-systems/embryo-decision-support-tools#14931",
    },
    {
      name: "Guided Annotation",

      description: t("gxmon.products.guidedAnnotation.desc"),
      image: "/guided_annotation.jpeg",
      link: "https://www.vitrolife.com/products/time-lapse-systems/embryo-decision-support-tools#14936",
    },
    {
      name: "KIDScore",

      description: t("gxmon.products.kidscore.desc"),
      image: "/kidscore.jpeg",
      link: "https://www.vitrolife.com/products/time-lapse-systems/embryo-decision-support-tools#14935",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  py-8">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          {t("gxmon.back")}
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
              {t("gxmon.header.title")}
            </h1>
            <p className="text-lg  text-justify text-gray-600 max-w-3xl mx-auto">
              {t("gxmon.header.desc")}
            </p>
          </div>
        </div>
      </div>

      {/* Storage Information */}
      <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3 mt-12">
        <Brain className="text-blue-600 w-6 h-6" />
        <p className="text-blue-600 font-medium">{t("gxmon.storageInfo")}</p>
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
                  {t("gxmon.products.guidedAnnotation.linkText")}
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
              <p className="mb-8">{t("gxmon.idascore.desc")}</p>
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
              {t("gxmon.idascore.aiTitle")}
            </h2>
            <p className="mb-4">{t("gxmon.idascore.aiDesc")}</p>

            <p className="">
              <a className="italic">Nature Medicine</a>{" "}
              {t("gxmon.idascore.study")}
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
              <p className="mb-8">{t("gxmon.guidedAnnotation.desc")}</p>
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
              {t("gxmon.guidedAnnotation.evaluationTitle")}
            </h2>
            <p className="mb-4">{t("gxmon.guidedAnnotation.evaluationDesc")}</p>

            <p className="">{t("gxmon.guidedAnnotation.smartTools")}</p>
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
              <p className="mb-8">{t("gxmon.kidscore.desc")}</p>
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
              {t("gxmon.kidscore.synergyTitle")}
            </h2>
            <p className="mb-4">{t("gxmon.kidscore.synergyDesc")}</p>

            <p className="mb-4"> {t("gxmon.kidscore.advantagesTitle")}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>{t("gxmon.kidscore.advantages.0")}</li>
              <li>{t("gxmon.kidscore.advantages.1")}</li>
              <li>{t("gxmon.kidscore.advantages.2")}</li>
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
