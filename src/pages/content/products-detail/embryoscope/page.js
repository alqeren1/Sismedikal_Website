import React from "react";
import { useEffect } from "react";
import ProductGrid from "../gridcomponent";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const products = [
    {
      webpath: "/embryoscope-plus",
      name: t("embryoscope.t6"),
      brand: "Vitrolife",
      path: "embryoscope+.png",
    },
    {
      webpath: "/embryoscope-8",
      name: t("embryoscope.t2"),
      brand: "Vitrolife",
      path: "embryoscope8.png",
    },
    {
      webpath: "/embryoscope-flex",
      name: t("embryoscope.t3"),
      brand: "Vitrolife",
      path: "embryoscope-flex.png",
    },
    {
      id: "evaluation",
      webpath: "/eva",
      name: t("embryoscope.t4"),
      brand: "Vitrolife",
      path: "degerlendirme.png",
    },
    {
      webpath:
        i18n.language === "en"
          ? "/imaging-system-culture-dishes"
          : "/goruntuleme-sistemi-kultur-kaplari",
      name: t("embryoscope.t5"),
      brand: "Vitrolife",
      path: "imaging-system-culture.jpeg",
    },
  ];
  // Log current language for debugging

  return (
    <ProductGrid products={products} title={t("embryoscope.t1")} subtitle="" />
  );
}
