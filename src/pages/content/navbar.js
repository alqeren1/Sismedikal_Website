import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { Fade as Hamburger } from "hamburger-react";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const isMainPage = router.pathname === "/";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Scroll event listener to detect scrolling
  useEffect(() => {
    if (!isMainPage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMainPage]);

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

  if (!router.isReady) {
    return null;
  }

  return (
    <div
      className={`w-full z-50 ${
        isMainPage
          ? isScrolled
            ? "sticky top-0 bg-white shadow-md"
            : "sticky  top-0 bg-gradient-to-br from-[#eff6ff] to-[#f7faff]"
          : "sticky top-0 bg-white shadow-md"
      } `}
    >
      <div className="flex justify-between w-full items-center px-4 xl:px-20 py-4">
        {/* Logo */}
        <Image
          src="/sismed2.png"
          alt="Logo"
          width={250}
          height={50}
          className="cursor-pointer  w-full max-w-[250px]"
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
                    ? "text-blue-500"
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
        <a
          href="https://www.vitrolife.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden xllg:inline-flex items-center  "
        >
          <img
            src="/vitrolife.svg"
            alt="vitrolife"
            width={200}
            height={100}
            objectFit="contain"
          />
        </a>

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
        className={`xl:hidden fixed top-0 right-0 h-full bg-gradient-to-l  from-white via-white to-gray-100 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 w-auto min-w-max`}
      >
        <div className="">
          <div className="flex flex-col px-10 items-end text-gray-700 justify-start h-full space-y-4 xs:space-y-8 mt-20 xs:mt-36">
            {[
              { label: "Anasayfa", path: "/" },
              { label: "Hakkımızda", path: "/hakkimizda" },
              { label: "Ürünlerimiz", path: "/urunlerimiz" },

              { label: "Referanslarımız", path: "/referanslarimiz" },
              { label: "Protokoller", path: "/protokoller" },
              { label: "İletişim", path: "/iletisim" },
            ].map((item, index) => (
              <button
                key={index}
                className={`text-2xl ${
                  router.asPath === item.path
                    ? "font-bold text-blue-500"
                    : "font-normal text-gray-700"
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
          <a
            href="https://www.vitrolife.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center absolute bottom-10 w-full "
          >
            <img
              src="/vitrolife.svg"
              alt="vitrolife"
              width={200}
              height={100}
              objectFit="contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
