import { useState, useRef } from "react";
import Arrowleft from "../../../svgs/arrow";
import Arrowdown from "../../../svgs/arrowdown";
import { useRouter } from "next/router";
import Image from "next/image";
import Highlighter from "react-highlight-words";

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
      {/* Hero Image Section */}
      <div className="relative w-full h-screen">
        {/* Overlay Text and Button */}
        <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col items-start justify-center text-white">
          <div className=" px-4 xl:px-20 bg-black/30  py-2 w-full sm:w-auto sm:bg-transparent sm:py-0">
            <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-normal mb-[-4px] sm:mb-1 md:mb-2 text-left">
              <Highlighter
                highlightClassName="highlight-pen font-bold mt-1 md:mt-0 text-white "
                searchWords={["LİDER"]}
                autoEscape={true}
                textToHighlight="IVF sektöründe LİDER"
              />
            </h1>

            <h1 className="text-4xl sm:text-5xl 2xl:text-6xl  font-normal mb-4 sm:mb-8 2xl:mb-12 text-left">
              çözüm ortağınız
            </h1>
            <button
              onClick={() => router.push("/contact")}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3  w-full rounded-md text-sm sm:text-lg 2xl:text-2xl font-semibold"
            >
              Bize Ulaşın
            </button>
          </div>
        </div>
        {/* Hero Image */}
        <Image
          src="/main.png"
          alt="main"
          fill
          className="object-cover "
          style={{ objectPosition: "75% center" }}
        />
      </div>

      {/* Steps Section */}
      <div className="bg-blue-100 py-8 sm:py-16 w-full">
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
    </div>
  );
}
