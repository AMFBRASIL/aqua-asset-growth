import type { Metadata } from "next";
import ServicosClient from "./servicos-client";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import { SERVICOS_DISCLAIMER, servicosParceiros } from "@/lib/servicos";

const title = "Serviços & Conveniências | Concierge Digital Ibiunature Aqua";
const description =
  "Concierge digital do Ibiunature Aqua Clube: padaria, Empório Paruru, farmácia e parceiros da região para facilitar sua estadia em Ibiúna – SP.";
const canonical = `${SITE_URL}/servicos`;
const ogImage = absoluteUrl("/assets/localizacao-piscina.png");

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "Ibiunature Aqua serviços",
    "concierge Ibiúna",
    "padaria Ibiúna",
    "Empório Paruru",
    "farmácia Ibiúna",
    "conveniências resort",
    "serviços hóspedes Ibiunature",
    "QR code apartamento",
  ],
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: canonical,
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Serviços Ibiunature Aqua" }],
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
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: title,
        description,
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
        inLanguage: "pt-BR",
      },
      {
        "@type": "ItemList",
        name: "Serviços e conveniências parceiras",
        description: SERVICOS_DISCLAIMER,
        numberOfItems: servicosParceiros.length,
        itemListElement: servicosParceiros.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.name,
          description: s.description,
          url: s.href || canonical,
        })),
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function ServicosPage() {
  return (
    <>
      <JsonLd />
      <ServicosClient />
    </>
  );
}
