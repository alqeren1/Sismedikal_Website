import React from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "../gridcomponent";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const products = [
    {
      webpath: "/sense",
      name: "SENSE",
      brand: "Vitrolife",
      path: "SENSE-2.png",
    },
    {
      webpath: "/single-lumen",
      name: "SINGLE LUMEN™",
      brand: "Vitrolife",
      path: "single-lumen.png",
    },
    {
      webpath: "/double-lumen",
      name: "DOUBLE LUMEN™",
      brand: "Vitrolife",
      path: "double-lumen.png",
    },
    {
      webpath:
        i18n.language === "en" ? "/needle-accessories" : "/igne-aksesuarlari",
      name: t("oosit.p1"),
      brand: "Vitrolife",
      path: "aksesuar.png",
    },
  ];
  return <ProductGrid products={products} title={t("oosit.t1")} subtitle="" />;
}
