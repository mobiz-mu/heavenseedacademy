import type { Metadata } from "next";
import { siteConfig } from "./site";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.assets.ogImage,
  noIndex = false,
}: SeoInput): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  const pageDescription = description ?? siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}