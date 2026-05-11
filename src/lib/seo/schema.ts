import { siteConfig } from "./site";

export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  "@id": `${siteConfig.url}/#preschool`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.assets.logo}`,
  image: `${siteConfig.url}${siteConfig.assets.ogImage}`,
  description: siteConfig.description,
  telephone: siteConfig.contact.whatsapp,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    postalCode: siteConfig.address.postalCode,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  areaServed: {
    "@type": "Country",
    name: "Mauritius",
  },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: {
    "@id": `${siteConfig.url}/#preschool`,
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  image: `${siteConfig.url}${siteConfig.assets.ogImage}`,
  url: siteConfig.url,
  telephone: siteConfig.contact.whatsapp,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    postalCode: siteConfig.address.postalCode,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};