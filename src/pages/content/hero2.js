import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/router";
import Highlighter from "react-highlight-words";
import Arrowleft from "../../../svgs/arrow";
import Arrowdown from "../../../svgs/arrowdown";
import Slider from "react-slick";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const carouselImages = [
    "/hero_images/ewitness.jpg",
    "/embryoscope2.png",
    "/gxmedia.png",
    "/EmbryoGlue_10.png",
    "/octaxlaserhd.png",
  ];
  const imageDescriptions = [
    "e-Witness System",
    "Embryoscope+",
    "Gx Media",
    "EmbryoGlue",
    "Octax Laser",
  ];

  // Custom Previous Arrow
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
        onClick={onClick}
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
    );
  };

  // Custom Next Arrow
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
        onClick={onClick}
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    );
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "15px", width: "100%" }}>
        <ul className="slick-dots">{dots}</ul>
      </div>
    ),
  };
  const steps = [
    { src: "/ivf-1.png", label: "Oosit toplama" },
    { src: "/ivf-2.png", label: "Sperm hazırlama" },
    { src: "/ivf-3.png", label: "Fertilizasyon" },
    { src: "/ivf-4.png", label: "Kültür" },
    { src: "/ivf-5.png", label: "Değerlendirme" },
    { src: "/ivf-6.png", label: "Embriyo transferi" },
    { src: "/ivf-7.png", label: "Dondurarak saklama" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full [height:calc(100vh-85px)] bg-gradient-to-br from-blue-50 to-white items-center justify-center md:mb-96 lg:mb-0">
      <div className="flex mb-4 justify-between px-8 xl:px-20 2xl:px-40 ucxl:px-72 mt-36 lg:mt-12 items-center ">
        {/* Left Content */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-blue-600"> Sürecin Her Aşamasında </span>
          </h1>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4 lg:mb-8">
            Sismedikal Yanınızda
          </h1>

          <div className="flex space-x-4">
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={() => router.push("/iletisim")}
            >
              Bize Ulaşın
            </button>
            <button
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              onClick={() => router.push("/urunlerimiz")}
            >
              Ürünleri İncele
            </button>
          </div>
        </div>

        {/* Right Content - Image Carousel */}
        <div className="hidden lg:flex">
          <div>
            <div className="w-full max-w-md lg:max-w-lg lg:mt-0 ">
              <Slider {...sliderSettings}>
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative flex justify-center items-center w-full h-full"
                    style={{ aspectRatio: "1 / 1" }}
                  >
                    {/* Description Label */}
                    <div className="absolute bottom-4 left-4 bg-white text-gray-900 px-8 py-4 backdrop-blur-sm bg-opacity-70 font-semibold text-4xl leading-tight  ">
                      {imageDescriptions[index]}
                    </div>

                    <img
                      src={image}
                      alt={imageDescriptions[index]}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Image Carousel */}
      <div className="flex lg:hidden w-full justify-center mt-16">
        <div>
          <div className="w-full max-w-md lg:max-w-lg lg:mt-0 ">
            <Slider {...sliderSettings}>
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="relative flex justify-center items-center w-full h-full"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  {/* Description Label */}
                  <div className="absolute bottom-4 left-4 bg-white text-gray-900 px-8 py-4 backdrop-blur-sm bg-opacity-70 font-semibold text-4xl leading-tight  ">
                    {imageDescriptions[index]}
                  </div>

                  <img
                    src={image}
                    alt={imageDescriptions[index]}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="hidden xllg:flex py-8 sm:py-8 w-full">
        <div className="flex flex-col items-center w-full">
          {/* Steps */}
          <div className="block md:flex justify-center flex-wrap gap-2 px-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col text-center text-gray-700 items-center"
              >
                {/* Step Image */}
                <div className="flex items-center">
                  <div className="hidden ucxl:flex">
                    <Image
                      src={step.src}
                      alt={step.label}
                      width={160}
                      height={160}
                    />
                  </div>
                  <div className="flex ucxl:hidden">
                    <Image
                      src={step.src}
                      alt={step.label}
                      width={122}
                      height={122}
                    />
                  </div>
                  <div className="hidden md:flex">
                    {index < steps.length - 1 && (
                      <div className="ml-2 w-12">
                        <Arrowleft />
                      </div>
                    )}
                  </div>
                </div>

                {/* Step Label */}
                <div className="flex justify-left w-full">
                  <div className="flex justify-center w-[122px] 2xl:w-[160px] font-semibold mt-2">
                    {step.label}
                  </div>
                </div>

                {/* phone mode arrow */}
                <div className="flex md:hidden">
                  {index < steps.length - 1 && (
                    <div className="w-12">
                      <Arrowdown />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
