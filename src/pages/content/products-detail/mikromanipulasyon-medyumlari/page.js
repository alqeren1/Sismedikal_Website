import React from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "../gridcomponent";
import { useTranslation } from "react-i18next";
const products = [
  { webpath: "/icsi", name: "ICSI™", brand: "Vitrolife", path: "ICSI.png" },
  {
    webpath: "/hyase-10x",
    name: "HYASE-10X™",
    brand: "Vitrolife",
    path: "HYASE.png",
  },
];

export default function Home() {
  const { t } = useTranslation();
  return (
    <ProductGrid
      products={products}
      title={t("micromanupilation.t1")}
      subtitle={t("otherculture.t2")}
    />
  );
}
