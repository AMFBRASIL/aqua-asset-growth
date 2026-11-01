"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Croissant, ExternalLink, MessageCircle, Pill, Store } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_MESSAGES, whatsappUrl } from "@/lib/site";

type Service = {
  icon: typeof Croissant;
  name: string;
  tagline: string;
  description: string;
  items: string[];
  ctaLabel: string;
  ctaType: "whatsapp" | "link";
  /** URL do fornecedor — atualizar quando o link oficial for fornecido */
  href: string;
};

const services: Service[] = [
  {
    icon: Croissant,
    name: "Padaria",
    tagline: "Pães fresquinhos todos os dias",
    description:
      "Padaria parceira com fornadas diárias de pães artesanais, doces, bolos e cafés especiais. Peça e receba no conforto do seu apartamento.",
    items: ["Pães artesanais e de fermentação natural", "Doces, bolos e sobremesas", "Cafés especiais e lanches", "Entrega no empreendimento"],
    ctaLabel: "Pedir pelo WhatsApp",
    ctaType: "whatsapp",
    href: whatsappUrl("estou no Ibiunature Aqua Clube e gostaria de fazer um pedido na padaria. Pode me ajudar?"),
  },
  {
    icon: Store,
    name: "Empório Paruru",
    tagline: "Tudo para sua estadia completa",
    description:
      "Empório com curadoria especial: bebidas, vinhos, gelo, petiscos e itens essenciais para você aproveitar o clube sem sair dele.",
    items: ["Bebidas e cervejas geladas", "Vinhos selecionados", "Gelo e carvão", "Petiscos e itens essenciais"],
    ctaLabel: "Comprar online",
    ctaType: "link",
    // TODO: substituir pelo link oficial do Empório Paruru quando fornecido
    href: whatsappUrl("estou no Ibiunature Aqua Clube e gostaria de comprar no Empório Paruru. Pode me ajudar?"),
  },
  {
    icon: Pill,
    name: "Farmácia",
    tagline: "Remédios e cuidados à mão",
    description:
      "Farmácia parceira com medicamentos, itens de higiene e primeiros cuidados. Comodidade e segurança durante toda a sua estadia.",
    items: ["Medicamentos com e sem receita", "Itens de higiene e cuidado pessoal", "Protetor solar e repelente", "Entrega rápida no clube"],
    ctaLabel: "Pedir pelo WhatsApp",
    ctaType: "whatsapp",
    href: whatsappUrl("estou no Ibiunature Aqua Clube e gostaria de fazer um pedido na farmácia. Pode me ajudar?"),
  },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            href="/"
            aria-label="Voltar para a página inicial"
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/70 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Ibiunature Aqua Clube</p>
            <h1 className="font-display text-lg font-bold text-foreground leading-tight">Serviços</h1>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary/10 rounded-full px-3 py-1 mb-3">
            Conveniência no clube
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3">
            Serviços terceirizados para sua comodidade
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            O Ibiunature Aqua Clube conta com parceiros selecionados para tornar sua estadia ainda mais completa.
            Escolha um serviço abaixo e fale diretamente com o fornecedor.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <main className="max-w-lg mx-auto px-4 pb-24 space-y-5">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[image:var(--gradient-nature)] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-card-foreground">{service.name}</h3>
                    <p className="text-sm text-secondary font-medium">{service.tagline}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>

                <ul className="space-y-2 mb-5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-card-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground font-semibold text-sm py-3.5 hover:opacity-90 transition-opacity"
                >
                  {service.ctaType === "whatsapp" ? (
                    <MessageCircle className="w-4 h-4" />
                  ) : (
                    <ExternalLink className="w-4 h-4" />
                  )}
                  {service.ctaLabel}
                </a>
              </div>
            </motion.article>
          );
        })}

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center pt-4"
        >
          <p className="text-xs text-muted-foreground leading-relaxed">
            Os serviços acima são operados por parceiros terceirizados.
            <br />
            Dúvidas gerais?{" "}
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.home)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-medium underline underline-offset-2"
            >
              Fale com a equipe Ibiunature
            </a>
          </p>
        </motion.div>
      </main>
    </div>
  );
}
