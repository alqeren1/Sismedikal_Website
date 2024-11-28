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
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <div className="absolute z-10 w-full top-0 p-4 px-4 xl:px-20 flex items-center bg-white">
      <div className="flex justify-between w-full items-center">
        {/* Logo */}
        <Image
          src="/sismed.png"
          alt="Logo"
          width={250}
          height={50}
          className="mt-1 cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className="flex items-center">
          {/* Desktop Menu */}
          <div className="hidden xl:flex ">
            {[
              { label: "Hakkımızda", path: "/hakkimizda" },
              { label: "Ürünlerimiz", path: "/urunlerimiz" },
              { label: "Ürün Hesaplama", path: "/urunhesaplama" },
              { label: "Referanslarımız", path: "/referanslarimiz" },
              { label: "Protokoller", path: "/protokoller" },
              { label: "İletişim", path: "/iletisim" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-gray-700 text-md xl:text-lg px-2 xl:px-2 2xl:px-4 hover:cursor-pointer rounded hover:text-blue-400"
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </div>
            ))}
          </div>
          {/* Language Switcher */}
          <div className="relative ml-4 2xl:ml-8 hidden xl:flex">
            <button
              className={`py-3 px-5 w-22 text-sm flex items-center font-bold ${
                isLanguageDropdownOpen
                  ? "bg-white text-gray-800 rounded-t-lg border-l border-r border-t border-gray-200"
                  : "rounded-lg border border-gray-400 text-gray-800 hover:bg-gray-100 "
              }`}
              onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
            >
              EN {/* Change this to dynamically show the selected language */}
              <FaChevronDown
                className={`ml-2 transform transition-transform duration-200 ${
                  isLanguageDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute top-full mt-[-1px] w-full text-black text-sm bg-white border-l border-r border-b border-gray-200 shadow-lg rounded-b-lg">
                {[
                  { code: "tr", label: "TR", flag: "/turkey.png" },
                  { code: "en", label: "EN", flag: "/uk.png" },
                  { code: "de", label: "DE", flag: "/de.png" },
                  { code: "ru", label: "RU", flag: "/ru.png" },
                ].map((lang, index) => (
                  <div
                    key={index}
                    className="hover:bg-gray-100 flex items-center cursor-pointer rounded-lg"
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
                      className="ml-4 mr-2"
                    />
                    <button className="block text-left py-2">
                      {lang.label}
                    </button>
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
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`xl:hidden fixed top-0 right-0 h-full bg-gradient-to-l transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 w-auto min-w-max`}
        style={{
          background:
            "linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 100%)",
        }}
      >
        <div className="flex flex-col px-10 items-end text-gray-700 justify-start h-full space-y-4 xs:space-y-8 mt-20 xs:mt-36">
          {/* Menu Links */}
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
              className={`text-2xl hover:text-blue-400 ${
                router.pathname === item.path
                  ? "font-black text-blue-500"
                  : "font-semibold"
              }`}
              onClick={() => {
                router.push(item.path);
                toggleMenu();
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              className={`py-3 px-5 w-22 text-sm flex items-center font-bold ${
                isLanguageDropdownOpen
                  ? "bg-white text-gray-800 rounded-t-lg border-l border-r border-t border-gray-200"
                  : "rounded-lg border border-gray-500"
              }`}
              onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
            >
              EN {/* Change this to dynamically show the selected language */}
              <FaChevronDown
                className={`ml-2 transform transition-transform duration-200 ${
                  isLanguageDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute top-full mt-[-1px] w-full text-black text-sm bg-white border-l border-r border-b border-gray-200 shadow-lg rounded-b-lg">
                {[
                  { code: "tr", label: "TR", flag: "/turkey.png" },
                  { code: "en", label: "EN", flag: "/uk.png" },
                  { code: "de", label: "DE", flag: "/de.png" },
                  { code: "ru", label: "RU", flag: "/ru.png" },
                ].map((lang, index) => (
                  <div
                    key={index}
                    className="hover:bg-gray-100 flex items-center cursor-pointer rounded-lg"
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
                      className="ml-4 mr-2"
                    />
                    <button className="block text-left py-2">
                      {lang.label}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
