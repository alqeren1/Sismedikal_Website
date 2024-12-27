import { useState } from "react";
import Highlighter from "react-highlight-words";
import Map from "./map";
import Map2 from "./map2";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col bg-blue-50 items-center w-full">
      {/* Hero Section - Fixed */}
      <div className="relative w-full bg-gradient-to-br from-blue-400 to-blue-500 h-[100px] xl:h-[200px] flex flex-col justify-center items-center">
        <div className="text-white text-center z-10">
          <h1 className="text-4xl xl:text-7xl font-bold">
            {t("contact.title")}
          </h1>
        </div>
      </div>

      <div className="hidden md:flex relative w-full ">
        <div className="  w-screen">
          <Map />
        </div>
      </div>
      {/* Contact Table Section */}
      <div className="w-full px-4 xl:px-16 mt-16">
        <h2 className="text-3xl xl:text-5xl text-gray-800 font-bold text-left mb-4 xl:mb-8">
          {t("contact.title1")}
        </h2>
        <div className="bg-white px-8 py-4 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap border-2 border-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="text-gray-800 border-b-2 border-gray-300 text-lg xl:text-2xl">
                  <th className="px-0 py-4 text-left border-r-2 border-gray-300">
                    {t("contact.tableTitles.0")}
                  </th>
                  <th className="px-4 py-4 text-left border-r-2 border-gray-300">
                    {t("contact.tableTitles.1")}
                  </th>
                  <th className="px-4 py-4 text-left border-r-2 border-gray-300">
                    {t("contact.tableTitles.2")}
                  </th>
                  <th className="px-4 py-4 text-left border-r-2 border-gray-300">
                    {t("contact.tableTitles.3")}
                  </th>
                  <th className="px-4 py-4 text-left">
                    {" "}
                    {t("contact.tableTitles.4")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-lg">
                {/* Ankara Office */}
                <tr className="border-b-2 text-base  xl:text-lg border-gray-300">
                  <td className="px-0 py-4 border-r-2 border-gray-300">
                    {t("contact.tablePositions.0")}
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    Fikret AYDIN
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 312) 426 06 63 – 64
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 312) 426 74 01
                  </td>
                  <td className="px-4 py-4">fikretaydin@sismed.com</td>
                </tr>
                <tr className="border-b-2 text-base  xl:text-lg border-gray-300">
                  <td className="px-0 py-4 pr-2 border-r-2 border-gray-300">
                    {t("contact.tablePositions.1")}
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    Metin GÜLEÇ
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 544) 672 16 39
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 312) 426 74 01
                  </td>
                  <td className="px-4 py-4">metingulec@sismed.com</td>
                </tr>
                <tr className="border-b-2 text-base  xl:text-lg border-gray-300">
                  <td className="px-0 py-4 border-r-2 border-gray-300">
                    {t("contact.tablePositions.2")}
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    Yener TOPA
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 533) 282 01 84
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 312) 426 74 01
                  </td>
                  <td className="px-4 py-4">yenertopa@sismed.com</td>
                </tr>
                <tr className="border-b-2 text-base  xl:text-lg border-gray-300">
                  <td className="px-0 py-4 border-r-2 border-gray-300">
                    {t("contact.tablePositions.3")}
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    Hilal AKGÜN
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 533) 465 80 08
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 312) 426 74 01
                  </td>
                  <td className="px-4 py-4">hilal@sismed.com</td>
                </tr>
                <tr className="border-b-2 text-base  xl:text-lg border-gray-300">
                  <td className="px-0 py-4 border-r-2 border-gray-300">
                    {t("contact.tablePositions.4")}
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    Serhat İŞLEYEN
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 532) 580 26 00
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 312) 426 74 01
                  </td>
                  <td className="px-4 py-4"></td>
                </tr>
                <tr className="border-b-2 text-base  xl:text-lg border-gray-300">
                  <td className="px-0 py-4 border-r-2 border-gray-300">
                    {t("contact.tablePositions.5")}
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    Buket AKKAYA
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 312) 426 06 63 – 64
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 312) 426 74 01
                  </td>
                  <td className="px-4 py-4">buketakkaya@sismed.com</td>
                </tr>
                <tr className="border-b-2 text-base xl:text-lg font-bold border-gray-300">
                  <td className="px-4 py-4 text-center" colSpan="5">
                    {t("contact.tableTitles.2")} : (+90 312) 426 06 63 – 64 /
                    Faks : (+90 312) 426 74 01
                  </td>
                </tr>
                <tr className="border-b-2 font-bold text-base xl:text-lg border-gray-300">
                  <td className="px-4 py-4 text-center" colSpan="5">
                    Cinnah Caddesi Gelibolu Sokak No:3/7 Kavaklıdere – Ankara /
                    Türkiye
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h2 className="text-3xl xl:text-5xl text-gray-800 font-bold text-left mb-4 xl:mb-8 mt-16">
          {t("contact.title2")}
        </h2>
        {/* Contact Table Section */}
        <div className="bg-white px-8 py-4 rounded-xl ">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap  border-2 border-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="text-gray-800 border-b-2 border-gray-300 pr-1 text-lg  xl:text-2xl">
                  <th className="px-0 py-4 text-left border-r-2 border-gray-300">
                    {t("contact.tableTitles.0")}
                  </th>
                  <th className="px-4 py-4 text-left border-r-2 border-gray-300">
                    {t("contact.tableTitles.1")}
                  </th>
                  <th className="px-4 py-4 text-left border-r-2 border-gray-300">
                    {t("contact.tableTitles.2")}
                  </th>
                  <th className="px-4 py-4 text-left border-r-2 border-gray-300">
                    {t("contact.tableTitles.3")}
                  </th>
                  <th className="px-4 py-4 text-left">
                    {" "}
                    {t("contact.tableTitles.4")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-lg">
                {/* Ankara Office */}
                <tr className="border-b-2 text-base  xl:text-lg border-gray-300">
                  <td className="px-0 py-4 border-r-2 border-gray-300">
                    {t("contact.tablePositions.2")}
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    Engin GEDİK
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 533) 433 00 80
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 216) 492 46 42
                  </td>
                  <td className="px-4 py-4"> engingedik@sismed.com</td>
                </tr>
                <tr className="border-b-2 text-base  xl:text-lg border-gray-300">
                  <td className="px-0 py-4 border-r-2 border-gray-300">
                    {t("contact.tablePositions.4")}
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    Samet AKAR
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 530) 173 87 85
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 216) 492 46 42
                  </td>
                  <td className="px-4 py-4">sametakar@sismed.com</td>
                </tr>
                <tr className="border-b-2  text-base  xl:text-lg border-gray-300">
                  <td className="px-0 py-4 pr-2 border-r-2 border-gray-300">
                    {t("contact.tablePositions.4")}
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    Ufuk TEKAY
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 533) 358 37 45
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 216) 492 46 42
                  </td>
                  <td className="px-4 py-4"> ufuk@sismed.com</td>
                </tr>
                <tr className="border-b-2 text-base  xl:text-lg border-gray-300">
                  <td className="px-0 py-4 border-r-2 border-gray-300">
                    {t("contact.tablePositions.5")}
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    Saadet ÖZEN
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 216) 492 46 20 – 21
                  </td>
                  <td className="px-4 py-4 border-r-2 border-gray-300">
                    (+90 216) 492 46 42
                  </td>
                  <td className="px-4 py-4"> saadetozen@sismed.com</td>
                </tr>

                <tr className="border-b-2 font-bold text-base xl:text-lg border-gray-300">
                  <td className="px-4 py-4 text-center" colSpan="5">
                    {t("contact.tableTitles.2")} : (+90 216) 492 46 20 – 21 /
                    Faks : (+90 216) 492 46 42
                  </td>
                </tr>
                <tr className="border-b-2 font-bold text-base xl:text-lg border-gray-300">
                  <td className="px-4 py-4 text-center" colSpan="5">
                    Murat Reis Mah. Selami Ali Efendi Cad. No:136/6 Üsküdar -
                    İSTANBUL
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white px-8 py-4 rounded-xl mt-16 mb-16">
          <div className="overflow-x-auto">
            <table className="w-full   whitespace-nowrap border-2 border-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="text-gray-800 border-b-2 border-gray-300 text-lg xl:text-2xl">
                  <th className="px-0 py-4 text-left border-r-2 border-gray-300"></th>
                  <th className="px-4 py-4 text-left border-r-2 border-gray-300">
                    {t("contact.tableTitles.1")}
                  </th>
                  <th className="px-4 py-4 text-left border-r-2 border-gray-300">
                    {t("contact.tableTitles.2")}
                  </th>
                  <th className="px-4 py-4 text-left border-r-2 border-gray-300">
                    {t("contact.tableTitles.3")}
                  </th>
                  <th className="px-4 py-4 text-left">
                    {" "}
                    {t("contact.tableTitles.4")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-lg">
                {/* Ankara Office */}

                <tr className="border-b-2 border-gray-300">
                  <td className="px-0 py-4 border-r-2 pr-1 text-lg  xl:text-2xl font-bold text-gray-800 border-gray-300">
                    {t("contact.title3")}
                  </td>
                  <td className="px-4 py-4 border-r-2 text-base xl:text-lg border-gray-300">
                    Murat Yalçın ŞEKER
                  </td>
                  <td className="px-4 py-4 border-r-2 text-base xl:text-lg border-gray-300">
                    (+90 532) 228 24 77
                  </td>
                  <td className="px-4 py-4 border-r-2 text-base xl:text-lg border-gray-300"></td>
                  <td className="px-4 text-base xl:text-lg py-4">
                    murat@sismed.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex md:hidden relative w-full ">
        <div className="  w-screen">
          <Map2 />
        </div>
      </div>
    </div>
  );
}
