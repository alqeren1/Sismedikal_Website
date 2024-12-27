import React from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "../gridcomponent";
import { useTranslation } from "react-i18next";

const products = [
  { webpath: "/asp", name: "ASP™", brand: "Vitrolife", path: "ASP125.png" },
];

export default function Home() {
  const { t } = useTranslation();
  return (
    <ProductGrid
      products={products}
      title={t("otherculture.t1")}
      subtitle={t("otherculture.t2")}
    />
  );
}
