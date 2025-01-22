import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { AbstractIntlMessages } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: AbstractIntlMessages = await getMessages({ locale });
  const title =
    typeof messages.home === "object" ? messages.home?.title : "title";
  const desc =
    typeof messages.home === "object"
      ? messages.home?.description
      : "description";
  return {
    title,
    description: desc,
  };
}

export default async function Home() {
  const locale = await getLocale();
  return (
    <>
      <Header locale={locale} />
      <Hero locale={locale} />
      <LogoTicker />
      <ProductShowcase locale={locale} />
      <Pricing locale={locale} />
      <Testimonials />
      <CallToAction locale={locale} />
      <Footer />
    </>
  );
}
