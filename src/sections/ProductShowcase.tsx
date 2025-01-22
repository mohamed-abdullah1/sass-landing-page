"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import tube from "@/assets/tube.png";
import pyramid from "@/assets/pyramid.png";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ProductShowcase = ({ locale }: { locale: string }) => {
  const t = useTranslations("productShowCase");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Transform scroll progress into x and y positions
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]); // Start 200px up

  return (
    <section
      className="container bg-gradient-to-b from-[#FFF] to-[#d2dcff] overflow-clip"
      ref={sectionRef}
      id="productShowCase"
    >
      <div className=" py-9">
        <div className="mx-auto max-w-[580px]">
          <div className="w-full flex items-center justify-center">
            <div className="tag-style">{t("tag")}</div>
          </div>
          <h2
            className={`title-style text-center my-5  ${
              locale === "en" ? "tracking-tighter" : "leading-[80px]"
            }`}
          >
            {t("title")}
          </h2>
          <p className="sub-title-style text-center">{t("sub-title")}</p>
        </div>
        <div className="flex items-center justify-center relative">
          <motion.img
            src={productImage.src}
            alt="product image"
            className="h-[200px] md:h-[700px] w-auto "
            initial={{ x: -100, y: -100, opacity: 1 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{
              once: true,
              // amount: 0.3, // Triggers when 30% of the element is in view
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.img
            src={tube.src}
            alt="tube image"
            width={260}
            height={260}
            className="absolute -right-0 top-0 hidden md:block"
            style={{
              translateY: y,
            }}
          />
          <motion.img
            src={pyramid.src}
            alt="pyramid image"
            width={260}
            height={260}
            className="absolute -left-0 -bottom-0 hidden md:block"
            style={{
              translateY: y,
            }}
          />
        </div>
      </div>
    </section>
  );
};
