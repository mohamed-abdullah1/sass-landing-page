"use client";
import { useTransform, motion, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import Checkbox from "@/assets/check.svg";
import { useRef } from "react";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = ({ locale }: { locale: string }) => {
  const t = useTranslations("pricing");
  const sectionRef = useRef(null);
  const scrollProgress = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(
    scrollProgress.scrollYProgress,
    [0, 1],
    [-200, 200]
  );
  return (
    <section
      className="container py-24 bg-white"
      ref={sectionRef}
      id={"pricing"}
    >
      <h3 className="title-style text-center">{t("title")}</h3>
      <p className="sub-title-style text-center mt-5 mb-8">{t("sub-title")}</p>
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-end justify-center">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={index}
            className={`p-10 nice-shadow min-w-[350px] ${
              tier.inverse && "bg-black text-white"
            }`}
          >
            <div className="flex justify-between items-center mb-5">
              <h3
                className={`text-lg font-bold  ${
                  tier.inverse ? "!text-white" : "text-black/50"
                }`}
              >
                {t(tier.title)}
              </h3>
              {tier.popular && (
                <div className="text-sm bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#7bcb92,#dd7ddf)] text-transparent bg-clip-text  px-2 py-1 rounded-full  bg-clip font-bold border border-[#fffff]/10 p-2">
                  {t("popular")}
                </div>
              )}
            </div>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold tracking-tight leading-none">
                {tier.monthlyPrice}${" "}
              </span>
              <span
                className={`tracking-tighter mx-1 ${
                  !tier.inverse ? "text-black/50" : "text-white/50"
                } `}
              >
                /{t("month")}
              </span>
            </div>
            <button
              className={`btn-primary mt-7 mb-4 w-full ${
                tier.inverse && "bg-white text-black"
              }`}
            >
              {t(tier.buttonText)}
            </button>
            <ul className="flex flex-col gap-4">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Checkbox className="h-5 w-5" />
                  <span>{t(feature)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
