"use client";
import { useTranslations } from "next-intl";
import ArrowIcon from "@/assets/arrow-right.svg";
import Star from "@/assets/star.png";
import Spring from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const CallToAction = ({ locale }: { locale: string }) => {
  const t = useTranslations("callToAction");
  const sectionRef = useRef(null);
  const scrollProgress = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(
    scrollProgress.scrollYProgress,
    [0, 1],
    [-150, 150]
  );
  return (
    <section
      className="container relative overflow-clip"
      ref={sectionRef}
      id="sign-up-now"
    >
      <div className="py-24 mx-auto">
        <h1
          className={`title-style text-center mb-1 ${
            locale === "ar" && "leading-relaxed"
          }`}
        >
          {t("title")}
        </h1>
        <p className="sub-title-style text-center mb-5">{t("sub-title")}</p>
        <div className="flex gap-2 items-center justify-center">
          <button className="btn-primary">{t("primary-button")}</button>
          <button className="btn-secondary inline-flex items-center gap-1">
            <span>{t("secondary-button")}</span>
            <ArrowIcon
              className={`w-5 h-5 ${locale === "ar" && "rotate-180"}`}
            />
          </button>
        </div>
      </div>
      <motion.img
        src={Spring.src}
        alt="spring image"
        className="absolute right-0 -top-0 hidden lg:block"
        width={280}
        height={280}
        style={{
          translateY,
          zIndex: 1,
        }}
      />
      <motion.img
        src={Star.src}
        alt="star image"
        className="absolute left-0 -bottom-0 hidden lg:block"
        width={280}
        height={280}
        style={{
          translateY,
          zIndex: 1,
        }}
      />
    </section>
  );
};
