import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
  weight: ["300", "400", "700"], // Adjust weights as needed
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eriitunu Adesioye's Portfolio",
  description: "A display of Eriitunu's skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat text-white antialiased w-full bg-[#111111]">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
