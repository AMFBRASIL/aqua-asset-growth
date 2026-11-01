/**
 * Catálogo do Concierge Digital — Ibiunature Aqua Services
 * Links externos são configuráveis por serviço (WhatsApp ou loja online).
 */

export type ServicoParceiro = {
  id: string;
  name: string;
  headline: string;
  description: string;
  tags: string[];
  ctaLabel: string;
  /** Link externo (WhatsApp / loja). Vazio = botão desabilitado até configurar. */
  href: string;
  image: string;
  imageAlt: string;
  /** Ex.: "WhatsApp", "Pedido online", "Contato direto" */
  channelLabel: string;
  icon: "bakery" | "drinks" | "pharmacy" | "market" | "general";
};

export const SERVICOS_DISCLAIMER =
  "O Ibiunature Aqua atua apenas como facilitador. Não realiza vendas, entregas ou atendimento dos estabelecimentos parceiros. Cada fornecedor é responsável por produtos, preços, disponibilidade, entregas e atendimento.";

export const servicosParceiros: ServicoParceiro[] = [
  {
    id: "padaria",
    name: "Padaria & Café da Manhã",
    headline: "Seu dia começa ainda melhor com aquele cheirinho de pão fresquinho.",
    description:
      "Que tal começar a manhã com um café especial? Encontre pães fresquinhos, doces, bolos, salgados e outras delícias para deixar seu café da manhã ou lanche da tarde ainda mais gostoso.",
    tags: ["🥐 Pães fresquinhos", "🍰 Bolos e doces", "☕ Café da manhã", "🥖 Salgados"],
    ctaLabel: "Ver opções da padaria",
    href: "",
    image: "/assets/servico-padaria.jpg",
    imageAlt: "Cesta de café da manhã com pães, croissants e café",
    channelLabel: "Contato com o parceiro",
    icon: "bakery",
  },
  {
    id: "emporio-paruru",
    name: "Empório Paruru",
    headline: "Bebidas, vinhos e o essencial para o seu churrasco.",
    description:
      "Precisa de refrigerante, gelo, cerveja ou um bom vinho para o jantar? O Empório Paruru também tem itens para acompanhar o churrasco — tudo perto de você, para deixar a experiência no Aqua ainda mais completa.",
    tags: ["🍷 Vinhos", "🥤 Bebidas", "🍺 Cervejas", "🔥 Itens de churrasco"],
    ctaLabel: "Ver opções do empório",
    href: "",
    image: "/assets/servico-emporio.jpg",
    imageAlt: "Vinhos, bebidas e itens de churrasco do Empório Paruru",
    channelLabel: "Contato com o parceiro",
    icon: "drinks",
  },
  {
    id: "farmacia",
    name: "Farmácia",
    headline: "Quando a comodidade também cuida do seu bem-estar.",
    description:
      "Esqueceu remédio, protetor solar, fralda ou um item de higiene? Conte com a farmácia parceira da região para o que for essencial — e aproveite seus dias no Ibiunature com mais tranquilidade.",
    tags: ["💊 Medicamentos", "🧴 Higiene", "☀️ Protetor solar", "🩹 Primeiros socorros"],
    ctaLabel: "Ver opções da farmácia",
    href: "",
    image: "/assets/servico-farmacia.jpg",
    imageAlt: "Itens de farmácia e cuidados pessoais",
    channelLabel: "Contato com o parceiro",
    icon: "pharmacy",
  },
];

export function servicoHrefReady(s: ServicoParceiro) {
  return Boolean(s.href?.trim());
}
