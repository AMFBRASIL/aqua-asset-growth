"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  BadgeCheck,
  CreditCard,
  Headphones,
  Waves,
  Users,
  Home,
} from "lucide-react";
import { airbnbListingUrl, airbnbListings } from "@/lib/site";

const guarantees = [
  {
    icon: BadgeCheck,
    title: "Anúncios oficiais no Airbnb",
    desc: "Todas as unidades estão publicadas na plataforma, com fotos, regras e calendário atualizados.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção e regras do Airbnb",
    desc: "Reserva, pagamento e políticas seguem as regras e garantias da própria Airbnb.",
  },
  {
    icon: CreditCard,
    title: "Pagamento seguro",
    desc: "Você reserva e paga pelo Airbnb — sem transferências informais fora da plataforma.",
  },
  {
    icon: Headphones,
    title: "Suporte da plataforma",
    desc: "Em caso de dúvida ou imprevisto, o atendimento do Airbnb também está disponível.",
  },
];

export default function AirbnbClient() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/localizacao-sunset.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/65 to-foreground/35" />

        <div className="relative z-10 container mx-auto px-6 pb-14 pt-8 w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-body text-sm">Voltar ao site</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5A5F]/20 border border-[#FF5A5F]/40 text-primary-foreground text-xs font-body tracking-widest uppercase mb-5">
              Disponível no Airbnb
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-5">
              Reserve no Airbnb
              <br />
              <span className="opacity-90">Ibiunature Aqua Clube</span>
            </h1>
            <p className="text-primary-foreground/85 font-body text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Sete apartamentos dentro de um clube completo — piscinas, parque aquático, áreas
              comuns e natureza em Ibiúna. Tudo anunciado e reservado{" "}
              <strong className="text-primary-foreground">oficialmente pelo Airbnb</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#unidades"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF5A5F] text-white font-body font-bold rounded-xl hover:brightness-110 transition-all"
              >
                Ver os 7 apartamentos
              </a>
              <Link
                href="/conhecer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground/10 border border-primary-foreground/25 text-primary-foreground font-body font-semibold rounded-xl hover:bg-primary-foreground/20 transition-all"
              >
                Conhecer o clube
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-8 relative z-20" aria-label="Garantias Airbnb">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl shadow-premium p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FF5A5F]/10 flex items-center justify-center">
                <Home className="w-6 h-6 text-[#FF5A5F]" />
              </div>
              <div>
                <p className="font-display text-xl text-foreground">Tudo dentro do Airbnb</p>
                <p className="font-body text-sm text-muted-foreground">
                  Anúncios oficiais • Regras da plataforma • Reserva garantida pelo fluxo do Airbnb
                </p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-muted/60 p-4"
              >
                <g.icon className="w-5 h-5 text-primary mb-3" aria-hidden />
                <p className="font-body font-semibold text-foreground text-sm mb-1">{g.title}</p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 py-14" aria-label="Diferenciais">
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { icon: Waves, label: "Clube completo", text: "Piscinas, parque e áreas compartilhadas" },
            { icon: Users, label: "Família e grupos", text: "Unidades pensadas para até 10 hóspedes" },
            { icon: ShieldCheck, label: "Reserva com segurança", text: "Processo 100% pelo Airbnb" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card"
            >
              <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
              <div>
                <p className="font-body font-bold text-foreground text-sm">{item.label}</p>
                <p className="font-body text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="unidades" className="bg-muted/40 py-16 md:py-20" aria-labelledby="unidades-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 id="unidades-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Escolha sua unidade
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Cada apartamento tem o próprio anúncio no Airbnb. Clique e veja datas, valores e
              disponibilidade na plataforma.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {airbnbListings.map((apt, i) => {
              const href = airbnbListingUrl(apt.slug);
              return (
                <motion.article
                  key={apt.slug}
                  itemScope
                  itemType="https://schema.org/Apartment"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-card flex flex-col group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={apt.image}
                      alt={`${apt.name} — Ibiunature Aqua Clube, anúncio Airbnb ${apt.code}`}
                      itemProp="photo"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-foreground/80 text-primary-foreground text-xs font-body font-bold px-2.5 py-1 rounded-lg">
                      Aqua {apt.code}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#FF5A5F] text-white text-[10px] font-body font-bold uppercase tracking-wide px-2 py-1 rounded-md">
                      Airbnb
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 itemProp="name" className="font-display text-xl font-bold text-foreground mb-1">
                      {apt.name}
                    </h3>
                    <meta itemProp="description" content={apt.description} />
                    <p className="font-body text-sm text-muted-foreground mb-1">{apt.capacity}</p>
                    <p className="font-body text-sm text-primary mb-5">{apt.tag}</p>
                    <p className="font-body text-xs text-muted-foreground mb-4 break-all">
                      airbnb.com.br/h/{apt.slug}
                    </p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      itemProp="url"
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-[#FF5A5F] hover:bg-[#E0484D] text-white font-body font-bold rounded-xl transition-all hover:scale-[1.02]"
                    >
                      Ver no Airbnb
                      <ExternalLink className="w-4 h-4" aria-hidden />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20" aria-label="Reserva com segurança">
        <div className="absolute inset-0 bg-gradient-nature opacity-95" />
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Reserve com tranquilidade
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 leading-relaxed">
              Nossos apartamentos estão devidamente anunciados no Airbnb. Ao reservar pela
              plataforma, você conta com as regras, proteções e o fluxo de pagamento oficiais do
              Airbnb.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#unidades"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF5A5F] text-white font-body font-bold rounded-xl hover:brightness-110 transition-all"
              >
                Ir para os anúncios
              </a>
              <Link
                href="/localizacao"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 border border-primary-foreground/25 text-primary-foreground font-body font-semibold rounded-xl hover:bg-primary-foreground/20 transition-all"
              >
                Como chegar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
