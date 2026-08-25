import HomeClient from "./home-client";

// Evita HTML estático antigo em CDN/edge após trocas de CTA.
export const dynamic = "force-dynamic";

export default function HomePage() {
  return <HomeClient />;
}
