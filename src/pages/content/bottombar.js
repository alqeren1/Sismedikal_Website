import { useState, useEffect, useRef } from "react";
import Arrowleft from "../../../svgs/arrow";
// header.js
import { useRouter } from "next/router";

export default function Bottombar() {
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
    <div className="w-full h-auto bg-[#003a7a]  text-white flex items-center justify-center ">
      <div className="p-8 mr-40">
        <div className="text-2xl mb-4">Ankara Ofis</div>
        <div>(0312) 426 0663 - Fax : (0312) 426 7401</div>
        <div>info@sismed.com</div>
        <div>Cinnah Cad. Gelibolu Sk. No:3/7 Kavaklıdere - ANKARA</div>
      </div>
      <div className="p-8">
        <div className="text-2xl mb-4">İstanbul Ofis</div>
        <div>(0216) 492 4620 - 21 - Fax : (0216) 492 4642</div>
        <div>info@sismed.com</div>
        <div>Cumhuriyet Caddesi No:131/2 Bağlarbaşı - İSTANBUL</div>
      </div>
    </div>
  );
}
