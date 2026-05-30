import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "SmartTahlil | تحلیل هوشمند بازارهای مالی",
  description:
    "تحلیل حرفه‌ای سهام، ارز دیجیتال، طلا و فارکس با گزارش قابل فهم و پشتیبانی تخصصی ۶ ماهه",

  keywords: [
    "تحلیل سهام",
    "تحلیل ارز دیجیتال",
    "تحلیل طلا",
    "تحلیل فارکس",
    "سرمایه گذاری",
    "SmartTahlil",
    "اسمارت تحلیل"
  ],

  authors: [
    {
      name: "SmartTahlil",
      url: "https://www.smarttahlil.ir",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SmartTahlil | تحلیل هوشمند بازارهای مالی",

    description:
      "تحلیل حرفه‌ای سهام، ارز دیجیتال، طلا و فارکس با گزارش قابل فهم و پشتیبانی تخصصی",

    url: "https://www.smarttahlil.ir",

    siteName: "SmartTahlil",

    locale: "fa_IR",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SmartTahlil",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        {children}
      </body>
    </html>
  );
}