import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import PreloadResources from "@/components/layout/PreloadResources";
import { siteConfig } from "@/lib/seo/site";
import {
  localBusinessSchema,
  schoolSchema,
  websiteSchema,
} from "@/lib/seo/schema";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Heaven Seeds Academy",
  title: {
    default: "Heaven Seeds Academy | Pre-Primary School in Mauritius",
    template: "%s | Heaven Seeds Academy",
  },
  description:
    "Heaven Seeds Academy is a warm, safe and nurturing pre-primary school in Mauritius, helping children grow with love, confidence, creativity and strong early learning foundations.",
  keywords: [
    "Heaven Seeds Academy",
    "pre-primary school Mauritius",
    "preschool Mauritius",
    "nursery school Mauritius",
    "kindergarten Mauritius",
    "early childhood education Mauritius",
    "Quatre Bornes pre-primary school",
    "Mauritius early learning",
    "childcare Mauritius",
    "admissions pre-primary Mauritius",
  ],
  authors: [{ name: "Heaven Seeds Academy" }],
  creator: "Heaven Seeds Academy",
  publisher: "Heaven Seeds Academy",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Heaven Seeds Academy | Pre-Primary School in Mauritius",
    description:
      "A safe, caring and joyful pre-primary environment in Mauritius where children grow with confidence and love.",
    url: siteUrl,
    siteName: "Heaven Seeds Academy",
    images: [
      {
        url: "/images/og/heaven-seeds-og.jpg",
        width: 1200,
        height: 630,
        alt: "Heaven Seeds Academy pre-primary school in Mauritius",
      },
    ],
    locale: "en_MU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heaven Seeds Academy | Pre-Primary School in Mauritius",
    description: "A warm, safe and nurturing pre-primary school in Mauritius.",
    images: ["/images/og/heaven-seeds-og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-MU"
      data-scroll-behavior="smooth"
      className={`${openSans.variable} scroll-smooth`}
    >
      <head>
        <PreloadResources />
      </head>

      <body className="min-h-screen bg-white text-[#183528] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              schoolSchema,
              websiteSchema,
              localBusinessSchema,
            ]),
          }}
        />

        <Header />

        <main className="hsa-page-bg min-h-screen flex-1">{children}</main>

        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}