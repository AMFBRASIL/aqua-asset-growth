import type { Metadata } from "next";
import AirbnbClient from "./airbnb-client";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  airbnbListingUrl,
  airbnbListings,
  DEFAULT_OG_IMAGE,
} from "@/lib/site";

const title = "Reserve no Airbnb | 7 Apartamentos Ibiunature Aqua Clube";
const description =
  "Alugue apartamentos no Ibiunature Aqua Clube em Ibiúna – SP pelo Airbnb. 7 unidades oficiais com piscinas, parque aquático e clube completo. Reserva segura pelas regras do Airbnb.";
const canonical = `${SITE_URL}/airbnb`;
const ogImage = absoluteUrl("/assets/localizacao-sunset.png");

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "Airbnb Ibiúna",
    "Ibiunature Aqua Clube",
    "aluguel temporada Ibiúna",
    "apartamento Airbnb Ibiúna",
    "resort Ibiúna",
    "ibiunatureaqua",
    "piscina parque aquático Ibiúna",
    "hospedagem Ibiúna SP",
  ],
  alternates: {
    canonical,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: canonical,
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Ibiunature Aqua Clube — apartamentos no Airbnb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
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
  category: "travel",
};

function JsonLd() {
  const lodging = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${canonical}#lodging`,
    name: SITE_NAME,
    description,
    url: canonical,
    image: [DEFAULT_OG_IMAGE, ogImage],
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Eliseu José Pereira, 248 — Paruru",
      addressLocality: "Ibiúna",
      addressRegion: "SP",
      postalCode: "18150-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate — Maps destination Paruru, Ibiúna
      latitude: -23.6566,
      longitude: -47.2226,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Piscinas adulto e infantil", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parque aquático", value: true },
      { "@type": "LocationFeatureSpecification", name: "Brinquedoteca", value: true },
      { "@type": "LocationFeatureSpecification", name: "Salão de festa", value: true },
      { "@type": "LocationFeatureSpecification", name: "Churrasqueira e bar", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Estacionamento", value: true },
      { "@type": "LocationFeatureSpecification", name: "Segurança 24h", value: true },
    ],
    makesOffer: airbnbListings.map((apt) => ({
      "@type": "Offer",
      name: apt.name,
      url: airbnbListingUrl(apt.slug),
      description: apt.description,
      category: "LodgingReservation",
      availability: "https://schema.org/InStock",
      offeredBy: { "@id": `${canonical}#lodging` },
    })),
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${canonical}#listings`,
    name: "Apartamentos Ibiunature Aqua no Airbnb",
    description: "Lista dos 7 anúncios oficiais no Airbnb",
    numberOfItems: airbnbListings.length,
    itemListElement: airbnbListings.map((apt, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: apt.name,
      url: airbnbListingUrl(apt.slug),
      item: {
        "@type": "Apartment",
        name: apt.name,
        description: apt.description,
        image: absoluteUrl(apt.image),
        url: airbnbListingUrl(apt.slug),
        occupancy: {
          "@type": "QuantitativeValue",
          maxValue: 10,
          unitText: "guests",
        },
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Airbnb",
        item: canonical,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Os apartamentos do Ibiunature Aqua estão no Airbnb?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. As 7 unidades têm anúncios oficiais no Airbnb (ibiunatureaqua01 a ibiunatureaqua07). Reserva e pagamento são feitos pela plataforma.",
        },
      },
      {
        "@type": "Question",
        name: "A reserva segue as regras e proteções do Airbnb?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Ao reservar pelo Airbnb, valem as regras, políticas de cancelamento e proteções da própria plataforma, incluindo pagamento seguro.",
        },
      },
      {
        "@type": "Question",
        name: "O que está incluso além do apartamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Os apartamentos ficam dentro do Ibiunature Aqua Clube, com uso compartilhado de piscinas, parque aquático, brinquedoteca, salões e demais áreas comuns do empreendimento em Ibiúna – SP.",
        },
      },
      {
        "@type": "Question",
        name: "Onde fica o Ibiunature Aqua Clube?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "R. Eliseu José Pereira, 248 — Paruru, Ibiúna – SP, 18150-000. Veja também a página de localização do site.",
        },
      },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonical,
    url: canonical,
    name: title,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "pt-BR",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImage,
    },
  };

  const payload = [webPage, lodging, itemList, breadcrumb, faq];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export default function AirbnbPage() {
  return (
    <>
      <JsonLd />
      <AirbnbClient />
    </>
  );
}
