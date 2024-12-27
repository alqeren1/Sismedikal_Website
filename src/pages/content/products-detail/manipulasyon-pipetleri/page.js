import React from "react";
import { ArrowRight } from "lucide-react";
import ProductGrid from "../gridcomponent";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const products = [
    {
      webpath: i18n.language === "en" ? "/icsi-pipette" : "/icsi-pipeti",
      name: t("pipette.p.0"),
      brand: "Vitrolife",
      path: "icsi-pipet.png",
    },
    {
      webpath: i18n.language === "en" ? "/holding-pipette" : "/holding-pipeti",
      name: t("pipette.p.1"),
      brand: "Vitrolife",
      path: "holding-pipet.png",
    },
    {
      webpath:
        i18n.language === "en" ? "/handling-pipette" : "/denudasyon-pipeti",
      name: t("pipette.p.2"),
      brand: "Vitrolife",
      path: "transfer-pipet.png",
    },
    {
      webpath:
        i18n.language === "en" ? "/transfer-pipette" : "/transfer-pipeti",
      name: t("pipette.p.3"),
      brand: "Vitrolife",
      path: "transfer-pipet.png",
    },
    {
      webpath: i18n.language === "en" ? "/pzd-pipette" : "/pzd-pipeti",
      name: t("pipette.p.4"),
      brand: "Vitrolife",
      path: "pzd-pipet.png",
    },
    {
      webpath: i18n.language === "en" ? "/biopsy-pipette" : "/biyopsi-pipeti",
      name: t("pipette.p.5"),
      brand: "Vitrolife",
      path: "biyopsi-pipet.png",
    },
    {
      webpath:
        i18n.language === "en" ? "/hatching-pipette" : "/hatching-pipeti",
      name: t("pipette.p.6"),
      brand: "Vitrolife",
      path: "hatching-pipet.png",
    },
    {
      webpath:
        i18n.language === "en" ? "/pipette-accessories" : "/pipet-aksesuarlari",
      name: t("pipette.p.7"),
      brand: "Vitrolife",
      path: "pipet-aksesuar.png",
    },
  ];

  return (
    <ProductGrid products={products} title={t("pipette.t1")} subtitle="" />
  );
}
