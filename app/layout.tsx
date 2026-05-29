import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "SmartTahlil | تحلیل هوشمند بازارهای مالی",
  description: "تحلیل هوشمند سهام، ارز دیجیتال، طلا و فارکس با پشتیبانی تخصصی",
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