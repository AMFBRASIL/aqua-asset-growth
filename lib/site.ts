export const SITE_URL = "https://aqua.ibiunature.com.br";
export const SITE_NAME = "Ibiunature Aqua Clube";
export const SITE_LOCALE = "pt_BR";

export const WHATSAPP_E164 = "5511920069049";
export const WHATSAPP_DISPLAY = "(11) 92006-9049";
export const CONTACT_EMAIL = "promautone@gmail.com";
export const INSTAGRAM_HANDLE = "ibiunatureoficial";

export const WHATSAPP_MESSAGE_PREFIX =
  "Olá Dalbert cristiano , estou com duvida... Preciso de ajuda... ";

export function whatsappUrl(message: string) {
  const text = `${WHATSAPP_MESSAGE_PREFIX}${message.trim()}`;
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/localizacao-piscina.png`;

export const airbnbListings = [
  {
    code: "01",
    name: "Apartamento Lago",
    slug: "ibiunatureaqua01",
    image: "/assets/resort-lake.jpg",
    capacity: "Até 10 hóspedes",
    tag: "Vista para o lago",
    description:
      "Apartamento no Ibiunature Aqua Clube com vista para o lago, acesso ao clube completo e reserva oficial no Airbnb.",
  },
  {
    code: "02",
    name: "Apartamento Piscina",
    slug: "ibiunatureaqua02",
    image: "/assets/resort-pool.jpg",
    capacity: "Até 10 hóspedes",
    tag: "Perto da área de lazer",
    description:
      "Apartamento próximo à área de piscinas e lazer do Aqua Clube, anunciado e reservável pelo Airbnb.",
  },
  {
    code: "03",
    name: "Apartamento Jardim",
    slug: "ibiunatureaqua03",
    image: "/assets/resort-night-1.jpg",
    capacity: "Até 10 hóspedes",
    tag: "Ambiente com jardim",
    description:
      "Unidade com ambiente de jardim no empreendimento Ibiunature Aqua, com anúncio oficial no Airbnb.",
  },
  {
    code: "04",
    name: "Apartamento Varanda",
    slug: "ibiunatureaqua04",
    image: "/assets/resort-lounge.jpg",
    capacity: "Até 10 hóspedes",
    tag: "Varanda e convivência",
    description:
      "Apartamento com varanda e áreas de convivência, dentro do clube completo em Ibiúna – SP.",
  },
  {
    code: "05",
    name: "Apartamento Sunset",
    slug: "ibiunatureaqua05",
    image: "/assets/resort-night-2.jpg",
    capacity: "Até 10 hóspedes",
    tag: "Vista e entardecer",
    description:
      "Unidade com vista privilegiada para o entardecer no Ibiunature Aqua Clube, listada no Airbnb.",
  },
  {
    code: "06",
    name: "Apartamento Resort",
    slug: "ibiunatureaqua06",
    image: "/assets/resort-aerial.png",
    capacity: "Até 10 hóspedes",
    tag: "Área central do clube",
    description:
      "Apartamento na área central do resort, com uso compartilhado de piscinas, parque e salões.",
  },
  {
    code: "07",
    name: "Apartamento Premium",
    slug: "ibiunatureaqua07",
    image: "/assets/resort-bar.jpg",
    capacity: "Até 10 hóspedes",
    tag: "Unidade destaque",
    description:
      "Unidade destaque do Ibiunature Aqua Clube, com reserva segura e oficial pelo Airbnb.",
  },
] as const;

export function airbnbListingUrl(slug: string) {
  return `https://www.airbnb.com.br/h/${slug}`;
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
