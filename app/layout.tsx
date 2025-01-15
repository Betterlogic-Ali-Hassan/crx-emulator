import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const font = localFont({
  display: "swap",
  variable: "--font-sans",
  fallback: ["sans-serif"],
  preload: true,
  src: [
    {
      path: "./fonts/supreme-bold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/supreme-black.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/supreme-book.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Foxified Emulator",
  description:
    "Emulate Firefox addons in Chrome, Edge, Opera and other Chromium based browsers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(font.variable, " bg-background text-text")}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
