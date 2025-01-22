import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Cairo } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import localFont from "next/font/local";

const cairo = localFont({
  src: "../fonts/Cairo-VariableFont_slnt,wght.ttf",
});

const poppins = localFont({
  src: "../fonts/Poppins/Poppins-Regular.ttf",
});
export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className="relative"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body
        className={clsx(
          locale === "en" ? poppins.className : cairo.className,
          "antialiased bg-[#EAEEFE]"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
