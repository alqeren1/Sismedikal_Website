import React from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "../gridcomponent";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const products = [
    {
      webpath: i18n.language === "tr" ? "/icsi-pipeti" : "/icsi-pipette",
      name: t("pipette.p.0"),
      brand: "Vitrolife",
      path: "icsi-pipet.png",
    },
    {
      webpath: i18n.language === "tr" ? "/holding-pipeti" : "/holding-pipette",
      name: t("pipette.p.1"),
      brand: "Vitrolife",
      path: "holding-pipet.png",
    },
    {
      webpath:
        i18n.language === "tr" ? "/denudasyon-pipeti" : "/handling-pipette",
      name: t("pipette.p.2"),
      brand: "Vitrolife",
      path: "transfer-pipet.png",
    },
    {
      webpath:
        i18n.language === "tr" ? "/transfer-pipeti" : "/transfer-pipette",
      name: t("pipette.p.3"),
      brand: "Vitrolife",
      path: "transfer-pipet.png",
    },
    {
      webpath: i18n.language === "tr" ? "/pzd-pipeti" : "/pzd-pipette",
      name: t("pipette.p.4"),
      brand: "Vitrolife",
      path: "pzd-pipet.png",
    },
    {
      webpath: i18n.language === "tr" ? "/biyopsi-pipeti" : "/biopsy-pipette",
      name: t("pipette.p.5"),
      brand: "Vitrolife",
      path: "biyopsi-pipet.png",
    },
    {
      webpath:
        i18n.language === "tr" ? "/hatching-pipeti" : "/hatching-pipette",
      name: t("pipette.p.6"),
      brand: "Vitrolife",
      path: "hatching-pipet.png",
    },
    {
      webpath:
        i18n.language === "tr" ? "/pipet-aksesuarlari" : "/pipette-accessories",
      name: t("pipette.p.7"),
      brand: "Vitrolife",
      path: "pipet-aksesuar.png",
    },
  ];

  return (
    <ProductGrid products={products} title={t("pipette.t1")} subtitle="" />
  );
}
