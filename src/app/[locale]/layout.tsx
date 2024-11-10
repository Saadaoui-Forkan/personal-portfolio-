import { AppProvider } from "@/context/AppContext";
import "../globals.css";
import { Tajawal } from "next/font/google";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const ubuntu = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Portfolio",
  description: "Web developer based on Tunisia",
  keywords: [
    "مهندس مواقع", "مطور مواقع", "محمود سعداوي", "مبرمج MERN", "تطوير ويب",
    "portfolio développeur", "Mahmoud Saadaoui", "MERN stack", "développement web", 
    "freelance Tunisie", "création de sites web", "next js developer", "Full Stack Developer",
    "developer portfolio", "Mahmoud Saadaoui", "MERN stack developer", "web developer",
    "freelance Tunisia", "web development", "React developer", "Tailwind CSS"
  ],
  authors: [
    {
      name: "Saadaoui Mahmoud",
    },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

type Props = {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${ubuntu.className}`}
      >
        <NextIntlClientProvider messages={messages}>
          <AppProvider>
            {children}
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
