import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CalcHub – All-in-One Calculator Suite",
  description: "Free, fast, and beautifully designed calculators for health, finance, math, students and more. BMI, EMI, GPA, Unit Converter and 20+ calculators.",
  keywords: ["calculator", "BMI calculator", "EMI calculator", "GPA calculator", "unit converter", "free calculator"],
  openGraph: {
    title: "CalcHub – All-in-One Calculator Suite",
    description: "Free, fast, and beautifully designed calculators for every need.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
