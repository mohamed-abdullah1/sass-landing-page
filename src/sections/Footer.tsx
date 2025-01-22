"use client";
import logo from "@/assets/logosaas.png";
import useScrollSection from "@/hooks/useScroll";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
export const Footer = () => {
  const t = useTranslations("footer");
  const [scrollToSection] = useScrollSection();
  return (
    <footer className="container bg-black text-white pt-24">
      <div className="flex flex-col items-center">
        <Image src={logo.src} alt="logo sass" width={100} height={100} />
        <ul className="flex gap-8 mt-8">
          <li
            className="text-white/60 font-medium cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            {t("home")}
          </li>
          <li
            className="text-white/60 font-medium cursor-pointer"
            onClick={() => scrollToSection("partners")}
          >
            {t("partners")}
          </li>
          <li
            className="text-white/60 font-medium cursor-pointer"
            onClick={() => scrollToSection("productShowCase")}
          >
            {t("product")}
          </li>
          <li
            className="text-white/60 font-medium cursor-pointer"
            onClick={() => scrollToSection("pricing")}
          >
            {t("pricing")}
          </li>
        </ul>
        <ul className="flex gap-4 text-white/60 mt-8">
          <li>
            <Facebook />
          </li>
          <li>
            <Youtube />
          </li>
          <li>
            <Linkedin />
          </li>
        </ul>
        <p className="py-8 text-white/90 text-sm">
          {t("copyright") +
            ` ${new Date().getFullYear()} ` +
            t("all-rights-reserved")}
        </p>
      </div>
    </footer>
  );
};
