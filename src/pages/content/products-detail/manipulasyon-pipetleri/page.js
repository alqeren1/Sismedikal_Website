import React from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "../gridcomponent";

const products = [
  {
    webpath: "/icsi-pipeti",
    name: "ICSI Pipeti",
    brand: "Vitrolife",
    path: "icsi-pipet.png",
  },
  {
    webpath: "/holding-pipeti",
    name: "HOLDING Pipeti",
    brand: "Vitrolife",
    path: "holding-pipet.png",
  },
  {
    webpath: "/transfer-pipeti",
    name: "DENUDASYON Pipeti",
    brand: "Vitrolife",
    path: "transfer-pipet.png",
  },
  {
    webpath: "/transfer-pipeti",
    name: "TRANSFER Pipeti",
    brand: "Vitrolife",
    path: "transfer-pipet.png",
  },
  {
    webpath: "/pzd-pipeti",
    name: "PZD Pipeti",
    brand: "Vitrolife",
    path: "pzd-pipet.png",
  },
  {
    webpath: "/biyopsi-pipeti",
    name: "BİYOPSİ Pipeti",
    brand: "Vitrolife",
    path: "biyopsi-pipet.png",
  },
  {
    webpath: "/hatching-pipeti",
    name: "HATCHING Pipeti",
    brand: "Vitrolife",
    path: "hatching-pipet.png",
  },
  {
    webpath: "/pipet-aksesuarlari",
    name: "PİPET AKSESUARLARI",
    brand: "Vitrolife",
    path: "pipet-aksesuar.png",
  },
];

export default function Home() {
  return (
    <ProductGrid
      products={products}
      title="MANİPÜLASYON PİPETLERİ"
      subtitle=""
    />
  );
}
