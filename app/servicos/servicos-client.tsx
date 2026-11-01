"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Info,
  Sparkles,
  Smartphone,
  Handshake,
  Clock3,
  Croissant,
  Wine,
  Pill,
  X,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import {
  SERVICOS_DISCLAIMER,
  servicoHrefReady,
  servicosParceiros,
  type ServicoParceiro,
} from "@/lib/servicos";
import "./servicos.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

function ServiceIcon({ type }: { type: ServicoParceiro["icon"] }) {
  if (type === "bakery") return <Croissant className="w-5 h-5" strokeWidth={1.75} />;
  if (type === "drinks") return <Wine className="w-5 h-5" strokeWidth={1.75} />;
  if (type === "pharmacy") return <Pill className="w-5 h-5" strokeWidth={1.75} />;
  return <Sparkles className="w-5 h-5" strokeWidth={1.75} />;
}

export default function ServicosClient() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="servicos-page min-h-screen antialiased">
      {/* Header sticky glass */}
      <header className="servicos-glass sticky top-0 z-40">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3 px-5 py-3.5">
          <div className="min-w-0">
            <p
              className="truncate font-semibold tracking-wide text-[#123D35]"
              style={{ fontFamily: "var(--font-servicos-display), sans-serif" }}
            >
              IBIUNATURE AQUA
            </p>
            <p className="truncate text-xs text-[#263238]/65">Seu paraíso, ainda mais completo.</p>
          </div>
          <button
            type="button"
            onClick={() => setInfoOpen(true)}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#123D35]/12 bg-white/70 px-3 py-2 text-xs font-medium text-[#123D35] shadow-sm transition hover:bg-white"
            aria-label="Informações sobre os serviços"
          >
            <Info className="h-3.5 w-3.5 text-[#18B8B0]" />
            Info
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/localizacao-piscina.png)" }}
        />
        <div className="servicos-hero-gradient absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-lg flex-col justify-end px-5 pb-12 pt-10">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D7B77A]"
          >
            Serviços & Conveniências
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-[2rem] font-bold leading-[1.15] text-white sm:text-[2.35rem]"
            style={{ fontFamily: "var(--font-servicos-display), sans-serif" }}
          >
            Tudo o que você precisa, pertinho de você.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="mb-6 max-w-md text-[15px] leading-relaxed text-white/85"
          >
            Sua experiência no Ibiunature Aqua vai muito além das nossas instalações. Selecionamos
            serviços e estabelecimentos parceiros para facilitar sua estadia. Peça aquele café da
            manhã especial, encontre bebidas para aproveitar o dia ou descubra onde comprar itens
            essenciais — de forma simples, rápida e pelo celular.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-[#D7B77A]" />
            Mais comodidade. Mais tempo para aproveitar.
          </motion.div>

          <motion.a
            href="#catalogo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mx-auto flex flex-col items-center gap-1 text-white/55"
            aria-label="Rolar para os serviços"
          >
            <span className="text-[10px] uppercase tracking-[0.18em]">Explorar</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* Welcome card */}
      <section className="relative z-20 mx-auto -mt-6 max-w-lg px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#123D35]/08 bg-white p-6 shadow-[0_20px_50px_-24px_rgba(18,61,53,0.35)]"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#123D35] to-[#18B8B0] text-white shadow-md">
            <Handshake className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <h2
            className="mb-3 text-xl font-bold text-[#123D35]"
            style={{ fontFamily: "var(--font-servicos-display), sans-serif" }}
          >
            Sua estadia, suas facilidades.
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-[#263238]/75">
            Pensamos em cada detalhe para você aproveitar ao máximo seus dias no Ibiunature Aqua. Por
            isso, reunimos opções de estabelecimentos e serviços da região que podem tornar sua
            experiência ainda mais confortável. Escolha o que precisa e entre em contato diretamente
            com o fornecedor.
          </p>
          <ul className="space-y-3">
            {[
              { icon: Smartphone, text: "Praticidade pelo celular." },
              { icon: Handshake, text: "Contato direto com parceiros." },
              { icon: Clock3, text: "Mais tempo para aproveitar suas férias." },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-sm text-[#123D35]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#18B8B0]/12 text-[#18B8B0]">
                  <item.icon className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium leading-snug">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Catalog */}
      <section id="catalogo" className="mx-auto max-w-lg px-5 py-14">
        <div className="mb-8 text-center">
          <h2
            className="mb-2 text-2xl font-bold text-[#123D35] sm:text-[1.75rem]"
            style={{ fontFamily: "var(--font-servicos-display), sans-serif" }}
          >
            Explore nossos serviços
          </h2>
          <p className="text-sm text-[#263238]/65">Pequenas facilidades que fazem toda a diferença.</p>
        </div>

        <div className="space-y-6">
          {servicosParceiros.map((servico, i) => {
            const ready = servicoHrefReady(servico);
            return (
              <motion.article
                key={servico.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                className="overflow-hidden rounded-[1.75rem] border border-[#123D35]/08 bg-white shadow-[0_16px_40px_-20px_rgba(18,61,53,0.28)]"
              >
                <div className="relative aspect-[5/3.4] overflow-hidden">
                  <img
                    src={servico.image}
                    alt={servico.imageAlt}
                    className="h-full w-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123D35]/55 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[#123D35] shadow-sm backdrop-blur">
                    <ServiceIcon type={servico.icon} />
                    <span className="text-xs font-semibold">{servico.channelLabel}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3
                    className="mb-2 text-xl font-bold text-[#123D35]"
                    style={{ fontFamily: "var(--font-servicos-display), sans-serif" }}
                  >
                    {servico.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium italic leading-relaxed text-[#18B8B0]">
                    {servico.headline}
                  </p>
                  <p className="mb-5 text-sm leading-relaxed text-[#263238]/75">{servico.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {servico.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#123D35]/08 bg-[#F8FAF8] px-3 py-1.5 text-xs font-medium text-[#263238]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {ready ? (
                    <a
                      href={servico.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#123D35] px-5 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_-12px_rgba(18,61,53,0.55)] transition hover:bg-[#0f342e] active:scale-[0.99]"
                    >
                      {servico.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-2xl bg-[#123D35]/35 px-5 py-4 text-[15px] font-semibold text-white"
                    >
                      Link em breve
                      <ExternalLink className="h-4 w-4 opacity-70" />
                    </button>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Disclaimer + footer */}
      <section className="border-t border-[#123D35]/08 bg-white">
        <div className="mx-auto max-w-lg px-5 py-10">
          <div className="mb-8 flex gap-3 rounded-2xl border border-[#D7B77A]/35 bg-[#D7B77A]/10 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#123D35]" />
            <p className="text-xs leading-relaxed text-[#263238]/80">{SERVICOS_DISCLAIMER}</p>
          </div>

          <div className="text-center">
            <p className="mb-1 text-sm font-semibold text-[#123D35]">Ibiunature Aqua</p>
            <p className="mb-5 text-xs text-[#263238]/55">
              Concierge digital de serviços e conveniências
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <Link href="/" className="text-[#18B8B0] hover:underline">
                Site
              </Link>
              <span className="text-[#123D35]/20">·</span>
              <Link href="/localizacao" className="text-[#18B8B0] hover:underline">
                Localização
              </Link>
              <span className="text-[#123D35]/20">·</span>
              <Link href="/airbnb" className="text-[#18B8B0] hover:underline">
                Airbnb
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info sheet */}
      <AnimatePresence>
        {infoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-[#123D35]/45 p-4 backdrop-blur-sm sm:items-center"
            onClick={() => setInfoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="servicos-info-title"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#18B8B0]">
                    Concierge digital
                  </p>
                  <h3
                    id="servicos-info-title"
                    className="text-lg font-bold text-[#123D35]"
                    style={{ fontFamily: "var(--font-servicos-display), sans-serif" }}
                  >
                    Como funcionam os serviços
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setInfoOpen(false)}
                  className="rounded-full bg-[#F8FAF8] p-2 text-[#263238]/70 hover:bg-[#123D35]/08"
                  aria-label="Fechar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-[#263238]/80">
                <p>
                  Esta página reúne parceiros da região para facilitar sua estadia — padaria, bebidas,
                  itens essenciais e outras conveniências.
                </p>
                <p>
                  Ao tocar em um serviço, você é direcionado ao canal do fornecedor (WhatsApp ou loja
                  online). Negociação, pagamento e entrega ficam entre você e o parceiro.
                </p>
                <p className="rounded-xl bg-[#F8FAF8] p-3 text-xs text-[#263238]/75">
                  {SERVICOS_DISCLAIMER}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setInfoOpen(false)}
                className="mt-6 w-full rounded-2xl bg-[#18B8B0] py-3.5 text-sm font-semibold text-white transition hover:brightness-105"
              >
                Entendi
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
