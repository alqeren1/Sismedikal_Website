import React from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "../gridcomponent";
import { useTranslation } from "react-i18next";
const products = [
  {
    webpath: "/micro-droplet-dish",
    name: "MICRO-DROPLET DISH",
    brand: "Vitrolife",
    path: "micro-droplet.png",
  },
  {
    webpath: "/centre-well-dish",
    name: "CENTRE-WELL DISH",
    brand: "Vitrolife",
    path: "centre-well.png",
  },
  {
    webpath: "/culture-dish-40-mm",
    name: "CULTURE DISH 40 MM",
    brand: "Vitrolife",
    path: "culture-dish.png",
  },
  {
    webpath: "/culture-dish-90-mm",
    name: "CULTURE DISH 90 MM",
    brand: "Vitrolife",
    path: "collection-dish.png",
  },
  {
    webpath: "/oocyte-collection-tube",
    name: "OOCYTE COLLECTION TUBE",
    brand: "Vitrolife",
    path: "oocyte-collection.png",
  },
  {
    webpath: "/serological-pipettes",
    name: "SEROLOGICAL PIPETTES",
    brand: "Vitrolife",
    path: "serological-pipet.png",
  },
  {
    webpath: "/5-well-dish",
    name: "5-WELL DISH",
    brand: "Vitrolife",
    path: "5well.png",
  },
  {
    webpath: "/icsi-dish",
    name: "ICSI DISH",
    brand: "Vitrolife",
    path: "icsi-kap.png",
  },
  {
    webpath: "/culture-dish-60-mm",
    name: "CULTURE DISH 60 MM",
    brand: "Vitrolife",
    path: "culture-dish60.png",
  },
  {
    webpath: "/centrifuge-tubes",
    name: "CENTRIFUGE TUBES",
    brand: "Vitrolife",
    path: "centrifuge.png",
  },
  {
    webpath: "/pasteur-pipettes",
    name: "PASTEUR PIPETTES",
    brand: "Vitrolife",
    path: "pasteur-pipet.png",
  },
];

export default function Home() {
  const { t } = useTranslation();
  return (
    <ProductGrid
      products={products}
      title={t("cultureDishes.t1")}
      subtitle=""
    />
  );
}
