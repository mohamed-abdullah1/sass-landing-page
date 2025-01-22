"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import En from "@/assets/en.svg";
import Ar from "@/assets/ar.svg";
import Image from "next/image";
import { Languages } from "lucide-react";

const LanguageSwitcher = ({ iconColor }: { iconColor?: string }) => {
  const [locale, setLocale] = useState("");
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MY_NEXT_LOCALE="))
      ?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MY_NEXT_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MY_NEXT_LOCALE=${newLocale};`;
    router.refresh();
  };
  console.log("🔥✨ ", iconColor);

  return (
    <div
      className={`icon-btn-style`}
      onClick={() => changeLocale(locale === "ar" ? "en" : "ar")}
    >
      <Languages style={{ color: iconColor }} />
    </div>
  );
};

export default LanguageSwitcher;
