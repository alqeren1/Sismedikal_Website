import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { Fade as Hamburger } from "hamburger-react";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const isMainPage = router.pathname === "/";
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    const handleBodyStyles = () => {
      if (isMenuOpen) {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0";
      }
    };

    handleBodyStyles();
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [isMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <div
      className={`w-full z-50 ${
        isMainPage
          ? "absolute top-0 bg-white" // Sticks to top of the main page with absolute positioning
          : "sticky top-0 bg-white shadow-md" // Sticks to the top for other pages
      }`}
    >
      <div className="flex justify-between w-full items-center px-4 xl:px-20 py-4">
        {/* Logo */}
        <Image
          src="/sismed.png"
          alt="Logo"
          width={250}
          height={50}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className="flex items-center">
          {/* Desktop Menu */}
          <div className="hidden xl:flex space-x-6">
            {[
              { label: "Hakkımızda", path: "/hakkimizda" },
              { label: "Ürünlerimiz", path: "/urunlerimiz" },

              { label: "Referanslarımız", path: "/referanslarimiz" },
              { label: "Protokoller", path: "/protokoller" },
              { label: "İletişim", path: "/iletisim" },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-md xl:text-lg hover:cursor-pointer ${
                  router.asPath === item.path
                    ? "text-blue-500  "
                    : "text-gray-700 hover:text-blue-400"
                }`}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="relative hidden xl:flex ml-6">
            <button
              className={`py-3 px-5 text-sm flex items-center font-bold ${
                isLanguageDropdownOpen
                  ? "bg-white text-gray-800 rounded-t-lg border-t border-l border-r border-gray-200"
                  : "rounded-lg border border-gray-400 text-gray-800 hover:bg-gray-100"
              }`}
              onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
            >
              EN
              <FaChevronDown
                className={`ml-2 transform transition-transform duration-200 ${
                  isLanguageDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute top-full mt-[-1px] w-full bg-white border border-gray-200 shadow-lg rounded-b-lg">
                {[
                  { code: "tr", label: "TR", flag: "/turkey.png" },
                  { code: "en", label: "EN", flag: "/uk.png" },
                  { code: "de", label: "DE", flag: "/de.png" },
                  { code: "ru", label: "RU", flag: "/ru.png" },
                ].map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setIsLanguageDropdownOpen(false);
                      console.log(`Language set to: ${lang.label}`);
                    }}
                  >
                    <Image
                      src={lang.flag}
                      alt={`${lang.label} flag`}
                      width={20}
                      height={15}
                      className="mr-2"
                    />
                    <span>{lang.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden z-50" ref={hamburgerRef}>
          <Hamburger
            color="#000"
            size={20}
            toggled={isMenuOpen}
            toggle={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`xl:hidden fixed top-0 right-0 h-full bg-gradient-to-l from-white via-white to-gray-100 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 w-auto min-w-max`}
      >
        <div className="flex flex-col px-10 items-end text-gray-700 justify-start h-full space-y-4 xs:space-y-8 mt-20 xs:mt-36">
          {[
            { label: "Anasayfa", path: "/" },
            { label: "Hakkımızda", path: "/hakkimizda" },
            { label: "Ürünlerimiz", path: "/urunlerimiz" },
            { label: "Ürün Hesaplama", path: "/urunhesaplama" },
            { label: "Referanslarımız", path: "/referanslarimiz" },
            { label: "Protokoller", path: "/protokoller" },
            { label: "İletişim", path: "/iletisim" },
          ].map((item, index) => (
            <button
              key={index}
              className={`text-2xl ${
                router.asPath === item.path
                  ? "font-bold text-blue-500"
                  : "font-normal"
              }`}
              onClick={() => {
                router.push(item.path);
                toggleMenu();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
