"use client";

import acme from "@/assets/logo-acme.png";
import apex from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import echo from "@/assets/logo-echo.png";
import pulse from "@/assets/logo-pulse.png";
import quantum from "@/assets/logo-quantum.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="container bg-white" id="partners">
      <div className="flex overflow-hidden items-effect">
        <motion.div
          animate={{ translateX: "-20%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 4,
            ease: "linear",
          }}
          className="flex gap-20 py-12 flex-none"
        >
          <Image src={acme} alt="acme logo" className="logo-item" />
          <Image src={apex} alt="apex logo" className="logo-item" />
          <Image src={celestial} alt="celestial logo" className="logo-item" />
          <Image src={echo} alt="echo logo" className="logo-item" />
          <Image src={pulse} alt="pulse logo" className="logo-item" />
          <Image src={quantum} alt="quantum logo" className="logo-item" />
          <Image src={acme} alt="acme logo" className="logo-item" />
          <Image src={apex} alt="apex logo" className="logo-item" />
          <Image src={celestial} alt="celestial logo" className="logo-item" />
          <Image src={echo} alt="echo logo" className="logo-item" />
          <Image src={pulse} alt="pulse logo" className="logo-item" />
          <Image src={quantum} alt="quantum logo" className="logo-item" />
        </motion.div>
      </div>
    </div>
  );
};
