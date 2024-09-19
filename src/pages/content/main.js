import { useState, useEffect, useRef } from "react";
import Arrowleft from "../../../svgs/arrow";
// header.js
import { useRouter } from "next/router";

export default function Main() {
  const [dotsClicked, setDotsClicked] = useState(false);

  const modalRef = useRef(null);
  const router = useRouter();
  const currentPage = router.pathname;

  const navigateToEscrow = () => {
    router.push("/");
  };
  const navigateToAudit = () => {
    router.push("/audit");
  };
  function dotsButton() {
    if (dotsClicked) {
    } else {
      setDotsClicked(true);
    }
  }
  const navigateToHow = () => {
    router.push("/how");
  };
  return (
    <div className="items-center w-full min-h-screen">
      <div className="flex justify-center">
        <div className="w-full 2xl:h-[825px] ">
          <img
            src="/main.png"
            alt="main"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="bg-blue-100 mt-16 h-[500px] flex items-center ">
        <div className="flex flex-col w-full  ">
          <div className="justify-center flex text-gray-800 font-bold text-5xl mb-32">
            IVF yolculuğunu Sismedikal ile keşfedin{" "}
          </div>
          <div className="flex items-center  justify-between px-36">
            <div className="">
              <img src="/ivf-1.png" alt="main" className=" h-36" />
              <div className="flex justify-center font-semibold mt-2">
                Oosit toplama
              </div>
            </div>
            <div className="h-20 w-20 mb-6">
              <Arrowleft />
            </div>

            <div className="">
              <img src="/ivf-2.png" alt="main" className=" h-36" />
              <div className="flex justify-center font-semibold mt-2">
                Sperm hazırlama
              </div>
            </div>
            <div className="h-20 w-20 mb-6">
              <Arrowleft />
            </div>
            <div className="">
              <img src="/ivf-3.png" alt="main" className=" h-36" />
              <div className="flex justify-center font-semibold mt-2">
                Fertilizasyon
              </div>
            </div>
            <div className="h-20 w-20 mb-6">
              <Arrowleft />
            </div>
            <div className="">
              <img src="/ivf-4.png" alt="main" className=" h-36" />
              <div className="flex justify-center font-semibold mt-2">
                Kültür
              </div>
            </div>
            <div className="h-20 w-20 mb-6">
              <Arrowleft />
            </div>
            <div className="">
              <img src="/ivf-5.png" alt="main" className=" h-36" />
              <div className="flex justify-center font-semibold mt-2">
                Değerlendirme
              </div>
            </div>
            <div className="h-20 w-20 mb-6">
              <Arrowleft />
            </div>
            <div className="">
              <img src="/ivf-6.png" alt="main" className=" h-36" />
              <div className="flex justify-center font-semibold mt-2">
                Embriyo transferi
              </div>
            </div>
            <div className="h-20 w-20 mb-6">
              <Arrowleft />
            </div>
            <div className="">
              <img src="/ivf-7.png" alt="main" className=" h-36" />
              <div className="flex justify-center font-semibold mt-2">
                Dondurarak saklama
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
