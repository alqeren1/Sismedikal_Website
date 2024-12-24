import { useState, useRef } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Highlighter from "react-highlight-words";
import Arrowleft from "../../../svgs/arrow";
import Arrowdown from "../../../svgs/arrowdown";
import Hero from "./hero";
import Hero2 from "./hero2";
export default function Main() {
  const router = useRouter();

  const steps = [
    { src: "/ivf-1.png", label: "Oosit toplama" },
    { src: "/ivf-2.png", label: "Sperm hazırlama" },
    { src: "/ivf-3.png", label: "Fertilizasyon" },
    { src: "/ivf-4.png", label: "Kültür" },
    { src: "/ivf-5.png", label: "Değerlendirme" },
    { src: "/ivf-6.png", label: "Embriyo transferi" },
    { src: "/ivf-7.png", label: "Dondurarak saklama" },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <Hero2></Hero2>
      {/* Hero Image Section */}
      {/* Steps Section */}
      <div className="block xllg:hidden bg-blue-50 py-8 sm:py-16 w-full">
        <div className="flex flex-col items-center w-full">
          {/* Title */}
          <h2 className="text-gray-800 font-bold text-3xl sm:text-5xl mb-8 sm:mb-16 text-left px-4">
            <Highlighter
              highlightClassName="bg-blue-500 text-white  px-1 md:px-2  "
              searchWords={["Sismedikal"]}
              autoEscape={true}
              textToHighlight="IVF yolculuğunu Sismedikal ile keşfedin"
            />
          </h2>

          {/* Steps */}
          <div className="block md:flex  justify-center flex-wrap gap-2 px-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col text-center text-gray-700 items-center"
              >
                {/* Step Image */}
                <div className="flex  items-center">
                  <div className="hidden 2xl:flex">
                    <Image
                      src={step.src}
                      alt={step.label}
                      width={160}
                      height={160}
                    />
                  </div>
                  <div className="flex 2xl:hidden">
                    <Image
                      src={step.src}
                      alt={step.label}
                      width={122}
                      height={122}
                    />
                  </div>
                  <div className="hidden md:flex">
                    {index < steps.length - 1 && (
                      <div className="ml-2  w-12">
                        <Arrowleft />
                      </div>
                    )}{" "}
                  </div>
                </div>

                {/* Step Label */}
                <div className="flex justify-left w-full">
                  <div className="flex justify-center  w-[122px] 2xl:w-[160px]  font-semibold mt-2">
                    {step.label}
                  </div>{" "}
                </div>
                {/* phone mode arrow */}
                <div className="flex md:hidden">
                  {index < steps.length - 1 && (
                    <div className="  w-12">
                      <Arrowdown />
                    </div>
                  )}{" "}
                </div>

                {/* Arrow Icon (except for the last step) */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-blue-100 py-8 sm:py-16 w-full">
        <div className="flex flex-col px-1 sm:px-8 lg:px-16 xl:px-48 items-center w-full">
          <div className="hidden md:flex  justify-center w-full text-right items-top space-x-4 md:space-x-12">
            <div>
              <div className="text-5xl text-gray-800 mb-1 sm:mb-4 font-bold">
                eWitness Sistemi
              </div>

              <div className="space-y-2 text-2xl text-gray-700 ml-1">
                <div className=" ">Tüm iş akışının otomasyonu</div>
                <div className=" ">Tüm işlemlerin takibi</div>
                <div className=" ">
                  Barkodlar ve yazdırılabilir etiketlerde RFID
                </div>
                <div className=" ">Elektronik çift kontrol</div>
              </div>
            </div>
            <div className="items-center flex">
              <div className="flex flex-shrink-0 ">
                <Image
                  src={"/ewitness2.png"}
                  alt={"lazer"}
                  width={250}
                  height={250}
                  layout="intrinsic" // Ensures the image does not shrink
                  className="object-contain "
                />
              </div>
              <div className="xl:flex hidden flex-shrink-0  mt-[7px] ml-4">
                <Image
                  src={"/hero_images/ewitness.jpg"}
                  alt={"lazer"}
                  width={250}
                  height={250}
                  layout="intrinsic" // Ensures the image does not shrink
                  className="object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden justify-center w-full items-top overflow-x-auto whitespace-nowrap ">
            <div className="flex w-full justify-center text-center">
              <div className="flex-col justify-center space-x-4">
                {" "}
                <div className="flex justify-center flex-shrink-0 mb-4">
                  <Image
                    src={"/ewitness2.png"}
                    alt={"lazer"}
                    width={200}
                    height={200}
                    layout="intrinsic" // Ensures the image does not shrink
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl text-gray-800   font-bold">
                    eWitness Sistemi
                  </div>

                  <div className=" text-xl text-gray-700 ml-1">
                    <div className=" ">Tüm iş akışının otomasyonu</div>
                    <div className=" ">Tüm işlemlerin takibi</div>
                    <div className=" ">
                      Barkodlar ve yazdırılabilir etiketlerde RFID
                    </div>
                    <div className=" ">Elektronik çift kontrol</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-59 py-8 sm:py-16 w-full">
        <div className="flex flex-col px-1 sm:px-8 lg:px-16 xl:px-48 items-center w-full">
          <div className="hidden md:flex justify-center w-full items-top space-x-4 md:space-x-12">
            <div className="hidden lg:flex flex-shrink-0">
              <Image
                src={"/octax_parca.png"}
                alt={"lazer"}
                width={300}
                height={300}
                layout="intrinsic" // Ensures the image does not shrink
                className="object-contain"
              />
            </div>
            <div className="flex flex-shrink-0">
              <Image
                src={"/octaxlazer.png"}
                alt={"lazer"}
                width={200}
                height={200}
                layout="intrinsic" // Ensures the image does not shrink
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-5xl text-gray-800 mb-1 sm:mb-4 font-bold">
                Octax Lazer Sistemleri
              </div>
              <div className="space-y-2 text-2xl text-gray-700 ml-1">
                <div className=" ">Modüler ve Kullanıcı Dostu</div>
                <div className=" ">Yüksek Performanslı Lazerler</div>
                <div className=" ">Gelişmiş Uygulamalar </div>
                <div className=" ">Üstün Görüntüleme Teknolojisi </div>
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden justify-center w-full items-top overflow-x-auto whitespace-nowrap ">
            <div className="flex-col justify-left xslg:justify-center text-center space-x-4">
              {" "}
              <div className="flex justify-center flex-shrink-0 mb-4">
                <Image
                  src={"/octaxlazer.png"}
                  alt={"lazer"}
                  width={200}
                  height={200}
                  layout="intrinsic" // Ensures the image does not shrink
                  className="object-contain"
                />
              </div>
              <div>
                <div className="sm:text-4xl text-3xl text-gray-800   font-bold">
                  Octax Lazer Sistemleri
                </div>
                <div className="space-y-0 sm:text-2xl text-xl text-gray-700 ">
                  <div className=" ">Modüler ve Kullanıcı Dostu</div>
                  <div className=" ">Yüksek Performanslı Lazerler</div>
                  <div className=" ">Gelişmiş Uygulamalar </div>
                  <div className=" ">Üstün Görüntüleme Teknolojisi </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 py-8 sm:py-16 w-full">
        <div className="flex flex-col px-1 sm:px-8 lg:px-16 xl:px-48 items-center w-full">
          <div className="hidden md:flex  justify-center w-full text-right items-top space-x-4 md:space-x-12">
            <div>
              <div className="text-5xl text-gray-800 mb-1 sm:mb-4 font-bold">
                Embryoscope+
              </div>
              <div className="text-5xl text-gray-800 mb-1 sm:mb-4 font-bold">
                Time-lapse Sistemi
              </div>
              <div className="space-y-2 text-2xl text-gray-700 ml-1">
                <div className=" ">Embriyo Gelişimi İçin Özel Tasarım</div>
                <div className=" ">Time-Lapse Teknolojisi</div>
                <div className=" ">Kesintisiz ve Güvenli Gözlem</div>
                <div className=" ">
                  Optimizasyon Sağlayan İnkübasyon Tasarımı
                </div>
              </div>
            </div>
            <div className="items-start flex">
              <div className="flex flex-shrink-0 ">
                <Image
                  src={"/embryoscope.png"}
                  alt={"lazer"}
                  width={300}
                  height={300}
                  layout="intrinsic" // Ensures the image does not shrink
                  className="object-contain"
                />
              </div>
              <div className="xl:flex hidden flex-shrink-0  mt-[7px] ml-4">
                <Image
                  src={"/embryoscope1.png"}
                  alt={"lazer"}
                  width={290}
                  height={290}
                  layout="intrinsic" // Ensures the image does not shrink
                  className="object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden justify-center w-full items-top overflow-x-auto whitespace-nowrap ">
            <div className="flex w-full justify-center text-center">
              <div className="flex-col justify-center space-x-4">
                {" "}
                <div className="flex justify-center flex-shrink-0 mb-4">
                  <Image
                    src={"/embryoscope.png"}
                    alt={"lazer"}
                    width={200}
                    height={200}
                    layout="intrinsic" // Ensures the image does not shrink
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl text-gray-800   font-bold">
                    Embryoscope+
                  </div>
                  <div className="text-3xl sm:text-4xl text-gray-800  font-bold">
                    Time-lapse Sistemi
                  </div>
                  <div className=" text-xl text-gray-700 ml-1">
                    <div className=" ">Embriyo Gelişimi İçin Özel Tasarım</div>
                    <div className=" ">Time-Lapse Teknolojisi</div>
                    <div className=" ">Kesintisiz ve Güvenli Gözlem</div>
                    <div className="whitespace-normal ">
                      Optimizasyon Sağlayan İnkübasyon Tasarımı
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
