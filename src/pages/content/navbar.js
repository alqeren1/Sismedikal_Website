import { useState, useEffect, useRef } from "react";

// header.js
import { useRouter } from "next/router";

export default function Navbar() {
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
    <div className="sticky top-0 p-4 flex flex-row bg-[#fffffd] rounded-b-3xl items-center">
      <div className="flex   justify-between w-full items-center">
        <img src="/sismed.png" alt="Logo" className=" ml-10 w-[250px] mt-1" />
        <div className="flex mr-10">
          <div className="text-gray-700 text-lg p-2 hover:cursor-pointer rounded hover:text-blue-400 mr-4">
            Hakkımızda
          </div>
          <div className="text-gray-700 text-lg p-2 hover:cursor-pointer rounded  hover:text-blue-400 mr-4">
            Ürünlerimiz
          </div>
          <div className="text-gray-700 text-lg p-2 hover:cursor-pointer rounded hover:text-blue-400   mr-4">
            Ürün Hesaplama
          </div>
          <div className="text-gray-700 text-lg p-2 hover:cursor-pointer rounded  hover:text-blue-400 mr-4">
            Referanslarımız
          </div>
          <div className="text-gray-700 text-lg p-2 hover:cursor-pointer rounded  hover:text-blue-400 mr-4">
            Protokoller
          </div>
          <div className="text-gray-700 text-lg p-2 hover:cursor-pointer rounded hover:text-blue-400 mr-4">
            İletişim
          </div>
        </div>
      </div>
    </div>
  );
}
