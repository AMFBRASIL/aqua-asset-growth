"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Instagram,
  Mail,
  Phone,
  ExternalLink,
  Waves,
  Flame,
  Gamepad2,
  Baby,
  Dumbbell,
  Droplets,
  Shield,
  Wifi,
  Car,
  Copy,
  Check,
  Church,
  Building2,
  Mountain,
  Star,
  Wine,
  Bed,
} from "lucide-react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import {
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  SITE_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGES,
  SITE_URL,
  whatsappUrl,
} from "@/lib/site";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=R.+Eliseu+Jos%C3%A9+Pereira,+248+-+Paruru,+Ibi%C3%BAna+-+SP,+18150-000";
const ADDRESS = "R. Eliseu José Pereira, 248 — Paruru, Ibiúna – SP, 18150-000";

const amenities = [
  { icon: Waves, label: "Parque aquático" },
  { icon: Droplets, label: "Piscinas adulto e infantil" },
  { icon: Flame, label: "Fireplace" },
  { icon: Gamepad2, label: "Salão de jogos" },
  { icon: Baby, label: "Brinquedoteca" },
  { icon: Dumbbell, label: "Quadras esportivas" },
  { icon: Droplets, label: "Sauna" },
  { icon: Shield, label: "Segurança 24h" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Car, label: "Estacionamento gratuito" },
];

const nearby = [
  { name: "Estrada do Vinho", icon: Wine, hint: "Roteiro gastronômico" },
  { name: "Parque Temático de Ibiúna", icon: Star, hint: "Diversão em família" },
  { name: "Represa de Itupararanga", icon: Waves, hint: "Natureza e lazer" },
  { name: "Vivant Eco Beach", icon: Bed, hint: "Praia de água doce" },
  { name: "Hotel Fazenda Ibiúna", icon: Bed, hint: "Hospedagem rural" },
  { name: "Pousada Alpes Ibiúna", icon: Bed, hint: "Aconchego na serra" },
  { name: "Centro de Ibiúna", icon: Building2, hint: "Comércio e serviços" },
  { name: "Igreja Matriz de Ibiúna", icon: Church, hint: "Patrimônio local" },
  { name: "Cachoeira Vargem do Salto", icon: Mountain, hint: "Trilha e queda d'água" },
];

const gallery = [
  { src: "/assets/localizacao-piscina.png", alt: "Piscina e fachada do empreendimento" },
  { src: "/assets/localizacao-sunset.png", alt: "Vista do resort ao entardecer" },
  { src: "/assets/resort-aerial.png", alt: "Vista aérea do Ibiunature Aqua Clube" },
  { src: "/assets/resort-pool.jpg", alt: "Área de lazer e piscina" },
];

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 text-sm font-body text-primary hover:text-primary/80 transition-colors"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? "Copiado!" : label}
    </button>
  );
}

export default function LocalizacaoPage() {
  const [pageUrl, setPageUrl] = useState(`${SITE_URL}/localizacao`);
  const whatsappLink = whatsappUrl(WHATSAPP_MESSAGES.localizacao);

  useEffect(() => {
    setPageUrl(`${window.location.origin}/localizacao`);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/localizacao-piscina.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/55 to-foreground/25" />

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
            <p className="font-display text-4xl md:text-6xl text-primary-foreground tracking-wide mb-2">
              Ibiúna Nature Aqua
            </p>
            <p className="font-body text-sm md:text-base tracking-[0.18em] uppercase text-accent font-semibold mb-6">
              Lazer, natureza e conforto perto de tudo
            </p>
            <p className="text-primary-foreground/85 font-body text-lg md:text-xl max-w-xl leading-relaxed">
              Um resort completo em Ibiúna – SP, a poucos minutos das principais atrações da região.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Callout + Maps CTA */}
      <section className="relative -mt-8 z-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground rounded-2xl shadow-premium p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between"
        >
          <div className="flex items-start gap-4 text-center md:text-left">
            <div className="hidden md:flex w-14 h-14 rounded-full bg-accent/20 items-center justify-center shrink-0">
              <MapPin className="w-7 h-7 text-accent" />
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl leading-tight mb-1">
                Tudo isso a poucos minutos de você!
              </p>
              <p className="font-body text-primary-foreground/80 text-sm md:text-base">{ADDRESS}</p>
            </div>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground font-body font-bold rounded-xl hover:brightness-110 transition-all shrink-0"
          >
            Abrir no Google Maps
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Nearby attractions */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Perto de <span className="text-gradient-nature">tudo</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Pontos de interesse, natureza e lazer ao redor do empreendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {nearby.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-card"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body font-semibold text-foreground text-sm">{item.name}</p>
                <p className="font-body text-xs text-muted-foreground">{item.hint}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Conheça o lugar
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
            {gallery.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover ${i === 0 ? "h-full min-h-[260px] md:min-h-[360px]" : "h-40 md:h-48"}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities bar */}
      <section className="bg-primary py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {amenities.map((a) => (
              <div key={a.label} className="flex flex-col items-center text-center gap-2">
                <a.icon className="w-6 h-6 text-accent" />
                <span className="font-body text-xs md:text-sm text-primary-foreground/90 leading-snug">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR + contacts */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 shadow-card"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Compartilhe esta página
            </h2>
            <p className="text-muted-foreground font-body text-sm mb-8">
              Escaneie o QR Code ou envie o link. Ideal para clientes e parceiros.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
                  <QRCodeSVG value={pageUrl} size={160} level="M" includeMargin={false} />
                </div>
                <p className="font-body text-sm font-semibold text-foreground">Página /localizacao</p>
                <CopyButton value={pageUrl} label="Copiar link da página" />
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
                  <QRCodeSVG value={MAPS_URL} size={160} level="M" includeMargin={false} />
                </div>
                <p className="font-body text-sm font-semibold text-foreground">Google Maps</p>
                <CopyButton value={MAPS_URL} label="Copiar link do Maps" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 shadow-card flex flex-col"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Fale conosco</h2>
            <p className="text-muted-foreground font-body text-sm mb-8">
              Atendimento direto para visitas e informações.
            </p>

            <div className="space-y-5 flex-1">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#25D366]/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">Telefone / WhatsApp</p>
                  <p className="font-body font-semibold text-foreground group-hover:text-primary transition-colors">
                    {WHATSAPP_DISPLAY}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">E-mail</p>
                  <p className="font-body font-semibold text-foreground group-hover:text-primary transition-colors">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>

              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">Instagram</p>
                  <p className="font-body font-semibold text-foreground group-hover:text-primary transition-colors">
                    @{INSTAGRAM_HANDLE}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">Endereço</p>
                  <p className="font-body font-semibold text-foreground text-sm leading-relaxed">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white font-body font-bold rounded-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Flyer reference strip */}
      <section className="pb-16 container mx-auto px-6">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-border shadow-card">
          <img
            src="/assets/localizacao-flyer.png"
            alt="Ibiúna Nature Aqua — lazer, natureza e conforto perto de tudo"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
