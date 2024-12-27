import React from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "../gridcomponent";
import { useTranslation } from "react-i18next";
const products = [
  {
    webpath: "/spermgrad-30-125",
    name: "SPERMGRAD™ 30/125",
    brand: "Vitrolife",
    path: "spermgrad125.png",
  },
  {
    webpath: "/spermrinse",
    name: "SPERMRINSE™",
    brand: "Vitrolife",
    path: "SpermRinse.png",
  },
  {
    webpath: "/spermfreeze-solution",
    name: "SPERMFREEZE SOLUTION™",
    brand: "Vitrolife",
    path: "SpermFreeze_Solution.png",
  },
];

export default function Home() {
  const { t } = useTranslation();
  return (
    <ProductGrid
      products={products}
      title={t("sperm.t1")}
      subtitle={t("otherculture.t2")}
    />
  );
}
