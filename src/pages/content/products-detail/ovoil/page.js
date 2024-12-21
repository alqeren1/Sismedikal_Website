import React from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "../gridcomponent";

const products = [
  {
    webpath: "/ovoil",
    name: "OVOIL™",
    brand: "Vitrolife",
    path: "ovoil-group.jpeg",
  },
];

export default function Home() {
  return <ProductGrid products={products} title="OVOIL" subtitle="" />;
}
