import React from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "../gridcomponent";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const products = [
    {
      webpath: i18n.language === "en" ? "/octax-laser" : "/octax-lazer",
      name: t("laser.p1"),
      brand: "Vitrolife",
      path: "octax-productimg.png",
    },
  ];
  return <ProductGrid products={products} title={t("laser.t1")} subtitle="" />;
}
