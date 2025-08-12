import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Inter({
  weight:["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Caio Barbosa Portfolio | Next.js",
  description: "Portfolio construído com Next.js 15, TypeScript e Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
