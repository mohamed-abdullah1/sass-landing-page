"use client";
import { useTranslations } from "next-intl";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodle from "@/assets/noodle.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import useScrollSection from "@/hooks/useScroll";

export const Hero = ({ locale }: { locale: string }) => {
  const t = useTranslations("hero");

  const heroRef = useRef(null);
  const scrollProgress = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(
    scrollProgress.scrollYProgress,
    [0, 1],
    [-100, 100]
  );
  const [scrollSection] = useScrollSection();
  return (
    <section
      ref={heroRef}
      id="hero"
      className="container pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_66%)] overflow-x-clip relative"
    >
      <div className="md:flex items-center">
        <div className="md:flex-2 md:min-w-[700px]">
          <div className="tag-style">{t("tag")}</div>
          <h1
            className={`title-style mt-5 mb-5 ${
              locale === "en" && "tracking-tighter"
            }
            ${locale === "ar" && "py-1 leading-[80px]"}  
            `}
          >
            {t("title")}
          </h1>
          <p className="sub-title-style mt-6">{t("sub-title")}</p>
          <div className="flex gap-2 items-center mt-4">
            <button
              className="btn-primary"
              onClick={() => scrollSection("sign-up-now")}
            >
              {t("primary-button")}
            </button>
            <button
              onClick={() => scrollSection("productShowCase")}
              className="btn-secondary inline-flex items-center gap-1"
            >
              <span>{t("secondary-button")}</span>
              <ArrowIcon
                className={`w-4 h-4 ${locale === "ar" && "rotate-180"}`}
              />
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] w-full md:flex-2 md:flex md:justify-end md:items-center relative">
          <motion.img
            src={cylinderImage.src}
            alt="cylinder image"
            className="hidden lg:flex lg:items-start mb-96 border-red-200 lg:h-64 lg:w-auto lg:max-w-none "
            style={{
              translateY,
            }}
          />
          <motion.img
            src={cogImage.src}
            alt="cog image"
            className=" md:h-full md:w-auto md:max-w-none"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
          <motion.img
            src={noodle.src}
            alt="noodle image"
            className="hidden lg:block lg:absolute -bottom-28 h-40 w-auto"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
