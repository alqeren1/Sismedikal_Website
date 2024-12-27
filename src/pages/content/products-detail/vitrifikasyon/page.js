import React from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "../gridcomponent";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const products = [
    {
      webpath: "/rapidvit-omni",
      name: "RAPIDVIT™ OMNI",
      brand: "Vitrolife",
      path: "rapidvit-omni.jpeg",
    },
    {
      webpath: "/rapidwarm-omni",
      name: "RAPIDWARM™ OMNI",
      brand: "Vitrolife",
      path: "rapidwarm-omni.png",
    },
    {
      webpath: "/rapidvit-cleave",
      name: "RAPIDVIT™ CLEAVE",
      brand: "Vitrolife",
      path: "rapidvit-cleave.jpeg",
    },
    {
      webpath: "/rapidwarm-cleave",
      name: "RAPIDWARM™ CLEAVE",
      brand: "Vitrolife",
      path: "rapidwarm-cleave.png",
    },
    {
      webpath: "/rapidvit-blast",
      name: "RAPIDVIT™ BLAST",
      brand: "Vitrolife",
      path: "rapidvit-blast.png",
    },
    {
      webpath: "/rapidwarm-blast",
      name: "RAPIDWARM™ BLAST",
      brand: "Vitrolife",
      path: "rapidwarm-blast.png",
    },
    {
      webpath:
        i18n.language === "en"
          ? "/rapid-i-vitrification-system"
          : "/rapid-i-vitrifikasyon-sistemi",
      name: t("embryoscope.t5"),
      name: "RAPID-I™ VİTRİFİKASYON SİSTEMİ",
      brand: "Vitrolife",
      path: "the-rapid-i-vitrification-system.jpg",
    },
  ];
  return (
    <ProductGrid
      products={products}
      title={t("vitri.t1")}
      subtitle={t("otherculture.t2")}
    />
  );
}
