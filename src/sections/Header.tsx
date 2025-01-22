"use client";
import LanguageSwitcher from "@/components/languageSwitcher";
import { useTranslations } from "next-intl";
import ArrowRight from "@/assets/arrow-right.svg";
import logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations("header");
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element && navRef.current) {
      const navHeight = navRef.current.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };
  // Handle clicking outside to close menu
  const handleClickOutside = (e: React.MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur"
      ref={navRef}
      id="header"
    >
      <div className="flex justify-center items-center p-4 bg-black text-white text-sm">
        <p className="hidden md:block text-white/60 px-2 text-sm">
          {t("sub-title")}
        </p>
        <div
          className="inline-flex gap-1 items-center cursor-pointer"
          onClick={() => scrollToSection("sign-up-now")}
        >
          <p>{t("title")}</p>
          <ArrowRight
            className={`h-4 w-4 inline-flex justify-center items-center ${
              locale === "ar" && "rotate-180"
            }`}
          />
        </div>
      </div>
      <div className="py-5">
        <div className="container ">
          <div className="flex justify-between items-center">
            <Image
              src={logo}
              alt="logo"
              height={40}
              width={40}
              onClick={() => scrollToSection("hero")}
              className="cursor-pointer"
            />
            <MenuIcon
              className="h-5 w-5 md:hidden cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            />
            <nav className="hidden md:flex gap-6 text-black/60 items-center tracking-tight list-none">
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("partners")}
              >
                {t("partners")}
              </li>
              <li
                onClick={() => scrollToSection("productShowCase")}
                className="cursor-pointer"
              >
                {t("product")}
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("pricing")}
              >
                {t("pricing")}
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("comments")}
              >
                {t("customers")}
              </li>

              <LanguageSwitcher />
              <button
                onClick={() => scrollToSection("sign-up-now")}
                className="bg-black text-white px-4 py-2 rounded-lg inline-flex justify-center items-center font-medium"
              >
                {t("get-for-free")}
              </button>
            </nav>
          </div>
          {/* Mobile Navigation Overlay */}
          <div
            className={`fixed inset-0 bg-black/95 transition-opacity duration-300 md:hidden h-screen ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={handleClickOutside}
          >
            <div className="absolute top-4 right-4">
              <X
                style={{ color: "#ffffff" }}
                className="h-8 w-8  cursor-pointer z-50 mt-12"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg list-none">
              <li
                className="cursor-pointer text-white hover:text-white/80 transition-colors"
                onClick={() => scrollToSection("partners")}
              >
                {t("partners")}
              </li>
              <li
                className="cursor-pointer text-white hover:text-white/80 transition-colors"
                onClick={() => scrollToSection("productShowCase")}
              >
                {t("product")}
              </li>
              <li
                className="cursor-pointer text-white hover:text-white/80 transition-colors"
                onClick={() => scrollToSection("pricing")}
              >
                {t("pricing")}
              </li>
              <li
                className="cursor-pointer text-white hover:text-white/80 transition-colors"
                onClick={() => scrollToSection("comments")}
              >
                {t("customers")}
              </li>
              <LanguageSwitcher iconColor="#ffffff" />
              <button
                onClick={() => scrollToSection("sign-up-now")}
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                {t("get-for-free")}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
