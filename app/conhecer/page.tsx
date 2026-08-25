"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Waves,
  Flame,
  Gamepad2,
  Baby,
  Dumbbell,
  Droplets,
  Shield,
  Wifi,
  Car,
  PartyPopper,
  Users,
  Home,
  Trees,
  UtensilsCrossed,
  CheckCircle2,
} from "lucide-react";

const amenities = [
  {
    icon: Waves,
    title: "Parque aquático",
    desc: "Tobogãs e brinquedos d’água para toda a família.",
    image: "/assets/resort-kids.jpg",
  },
  {
    icon: Droplets,
    title: "Piscinas adulto e infantil",
    desc: "Área de lazer completa, com deck e paisagismo.",
    image: "/assets/resort-pool.jpg",
  },
  {
    icon: Flame,
    title: "Churrasqueira & bar",
    desc: "Espaço gourmet compartilhado para encontros e refeições.",
    image: "/assets/churrasqueira-bar.jpg",
  },
  {
    icon: UtensilsCrossed,
    title: "Bar americano",
    desc: "Chopp, jogos e convivência — além do seu apartamento.",
    image: "/assets/bar-americano.jpg",
  },
  {
    icon: Baby,
    title: "Brinquedoteca",
    desc: "Espaço infantil seguro para as crianças brincarem.",
    image: "/assets/resort-playroom.jpg",
  },
  {
    icon: Gamepad2,
    title: "Salão de jogos",
    desc: "Diversão compartilhada para jovens e adultos.",
    image: "/assets/resort-lounge.jpg",
  },
  {
    icon: PartyPopper,
    title: "Salão de festa",
    desc: "Espaço comum para celebrações e eventos em família.",
    image: "/assets/resort-bar.jpg",
  },
  {
    icon: Trees,
    title: "Lago e natureza",
    desc: "Paisagismo, verde e tranquilidade de Ibiúna.",
    image: "/assets/resort-lake.jpg",
  },
];

const extras = [
  { icon: Dumbbell, label: "Quadras esportivas" },
  { icon: Droplets, label: "Sauna" },
  { icon: Shield, label: "Segurança 24h" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Car, label: "Estacionamento" },
  { icon: Home, label: "Apartamentos 160m²" },
];

const gallery = [
  { src: "/assets/localizacao-piscina.png", alt: "Fachada e piscina do clube", wide: true },
  { src: "/assets/resort-aerial.png", alt: "Vista aérea do empreendimento" },
  { src: "/assets/resort-water.jpg", alt: "Piscina principal" },
  { src: "/assets/resort-kids.jpg", alt: "Parque aquático infantil" },
  { src: "/assets/resort-lounge.jpg", alt: "Lounge compartilhado" },
  { src: "/assets/localizacao-sunset.png", alt: "Resort ao entardecer" },
  { src: "/assets/resort-night-1.jpg", alt: "Área comum iluminada à noite" },
  { src: "/assets/resort-playroom.jpg", alt: "Brinquedoteca" },
];

const understanding = [
  "Você aluga um apartamento completo (suítes, cozinha, estar).",
  "E usa, de forma compartilhada, todo o clube: piscinas, parque, salões, bar e áreas verdes.",
  "É a experiência de resort — não um imóvel isolado.",
  "Ideal para famílias, grupos e finais de semana com lazer incluso.",
];

export default function ConhecerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/localizacao-piscina.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/30" />

        <div className="relative z-10 container mx-auto px-6 pb-16 pt-8 w-full">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-xs font-body tracking-widest uppercase mb-5">
              Temporada • Ibiúna – SP
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-5">
              Conheça o Ibiunature Aqua Clube
            </h1>
            <p className="text-primary-foreground/85 font-body text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Não é só um apartamento. É um apartamento{" "}
              <strong className="text-primary-foreground">dentro de um clube completo</strong> — com
              piscinas, parque aquático, brinquedoteca, salão de festa e muito mais, para usar em
              família.
            </p>
            <a
              href="#o-que-e"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-body font-bold rounded-xl hover:brightness-110 transition-all"
            >
              Entender como funciona
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What it is */}
      <section id="o-que-e" className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que muita gente{" "}
              <span className="text-gradient-nature">não imagina</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Ao reservar uma unidade, você não fica “preso” ao apartamento. Você passa a ter acesso
              às áreas comuns do empreendimento — como em um resort: lazer compartilhado, estrutura
              pronta e ambiente pensado para descanso e diversão.
            </p>
            <ul className="space-y-4">
              {understanding.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-premium border border-border">
              <img
                src="/assets/resort-aerial.png"
                alt="Vista aérea do clube completo"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 md:left-auto md:right-8 md:w-72 bg-primary text-primary-foreground rounded-xl p-5 shadow-premium">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-accent" />
                <p className="font-body font-bold text-sm">Apartamento + clube</p>
              </div>
              <p className="font-body text-sm text-primary-foreground/85 leading-relaxed">
                Unidades de até 10 hóspedes, com uso compartilhado de toda a estrutura de lazer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities grid */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              O que o clube <span className="text-gradient-nature">oferece</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Estrutura para usar durante a estadia — parques, brinquedos, salões, gastronomia e
              natureza.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {amenities.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-card flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-body font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {extras.map((e) => (
              <span
                key={e.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-body text-foreground shadow-sm"
              >
                <e.icon className="w-4 h-4 text-primary" />
                {e.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Imagens do empreendimento
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Veja o ambiente real: áreas comuns, lazer e o clima de resort em Ibiúna.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {gallery.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className={`overflow-hidden rounded-xl ${img.wide ? "col-span-2 row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover ${
                  img.wide ? "h-full min-h-[240px] md:min-h-[360px]" : "h-36 md:h-44"
                }`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-nature opacity-95" />
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Gostou da experiência?
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg mb-10">
              Agora escolha a unidade e fale com a gente sobre disponibilidade e valores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/alugar"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent text-accent-foreground font-body font-bold rounded-xl text-lg shadow-premium hover:brightness-110 transition-all hover:scale-[1.02]"
              >
                Gostei, quero ver preços
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/localizacao"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary-foreground/10 border border-primary-foreground/25 text-primary-foreground font-body font-semibold rounded-xl text-lg hover:bg-primary-foreground/20 transition-all"
              >
                Ver localização
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
