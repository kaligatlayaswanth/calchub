import type { Metadata } from "next";
import Script from "next/script";
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
  title: "CalcHub – Free Online Calculators for Anything",
  description: "CalcHub offers 20+ free, fast, and easy-to-use calculators for health, finance, math, and students. BMI calculator, loan calculator, GPA calculator, and more. No ads, no tracking.",
  authors: [{ name: "CalcHub" }],
  creator: "CalcHub",
  publisher: "CalcHub",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calc.univexo.app",
    title: "CalcHub – Free Online Calculators for Anything",
    description: "20+ free calculators for health, finance, math, and students. Fast, accurate, and no ads.",
    siteName: "CalcHub",
    images: [
      {
        url: "https://calc.univexo.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "CalcHub - All-in-One Calculator Suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcHub – Free Online Calculators",
    description: "20+ fast and accurate calculators. BMI, loans, EMI, GPA, and more.",
    images: ["https://calc.univexo.app/og-image.png"],
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  alternates: {
    canonical: "https://calc.univexo.app",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4fc357" />
        
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CalcHub",
              url: "https://calc.univexo.app",
              description: "Free online calculators for health, finance, math, and students",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://calc.univexo.app/explore?search={search_term_string}",
                },
                query_input: "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
