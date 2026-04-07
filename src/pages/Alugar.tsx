import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import resortPool from "@/assets/resort-pool.jpg";
import resortLake from "@/assets/resort-lake.jpg";
import resortLounge from "@/assets/resort-lounge.jpg";
import resortBar from "@/assets/resort-bar.jpg";
import resortKids from "@/assets/resort-kids.jpg";
import resortNight1 from "@/assets/resort-night-1.jpg";
import resortNight2 from "@/assets/resort-night-2.jpg";
import resortAerial from "@/assets/resort-aerial.jpg";
import resortPlayroom from "@/assets/resort-playroom.jpg";
import resortWater from "@/assets/resort-water.jpg";
import resortNight3 from "@/assets/resort-night-3.jpg";

const apartments = [
  {
    name: "Apartamento Lago",
    price: "R$ 1.200",
    pricePeriod: "/diária",
    capacity: "10 hóspedes",
    images: [resortLake, resortLounge, resortPool],
    highlights: ["Vista para o lago", "160m²", "3 suítes"],
  },
  {
    name: "Apartamento Piscina",
    price: "R$ 1.100",
    pricePeriod: "/diária",
    capacity: "10 hóspedes",
    images: [resortPool, resortWater, resortKids],
    highlights: ["Acesso direto à piscina", "160m²", "3 suítes"],
  },
  {
    name: "Apartamento Jardim",
    price: "R$ 1.000",
    pricePeriod: "/diária",
    capacity: "10 hóspedes",
    images: [resortNight1, resortNight3, resortAerial],
    highlights: ["Jardim privativo", "160m²", "3 suítes"],
  },
  {
    name: "Apartamento Varanda",
    price: "R$ 1.100",
    pricePeriod: "/diária",
    capacity: "10 hóspedes",
    images: [resortLounge, resortBar, resortLake],
    highlights: ["Varanda gourmet", "160m²", "3 suítes"],
  },
  {
    name: "Apartamento Sunset",
    price: "R$ 1.200",
    pricePeriod: "/diária",
    capacity: "10 hóspedes",
    images: [resortNight2, resortNight1, resortLounge],
    highlights: ["Vista pôr do sol", "160m²", "3 suítes"],
  },
  {
    name: "Apartamento Resort",
    price: "R$ 1.000",
    pricePeriod: "/diária",
    capacity: "10 hóspedes",
    images: [resortAerial, resortPool, resortPlayroom],
    highlights: ["Área central", "160m²", "3 suítes"],
  },
  {
    name: "Apartamento Premium",
    price: "R$ 1.400",
    pricePeriod: "/diária",
    capacity: "10 hóspedes",
    images: [resortBar, resortLake, resortNight2],
    highlights: ["Cobertura exclusiva", "160m²", "3 suítes"],
  },
];

const whatsappNumber = "5511920069049";

function ApartmentCard({ apt }: { apt: typeof apartments[0] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + apt.images.length) % apt.images.length);
  const next = () => setCurrent((c) => (c + 1) % apt.images.length);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Olá! Tenho interesse no ${apt.name} (${apt.price}${apt.pricePeriod}). Gostaria de mais informações sobre disponibilidade.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg flex flex-col"
    >
      {/* Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden group">
        <img
          src={apt.images[current]}
          alt={`${apt.name} - foto ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-foreground/50 hover:bg-foreground/70 text-primary-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-foreground/50 hover:bg-foreground/70 text-primary-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {apt.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-primary-foreground w-4" : "bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1.5 rounded-lg font-bold text-sm shadow-lg">
          {apt.price}<span className="font-normal text-xs">{apt.pricePeriod}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-1">{apt.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{apt.capacity}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {apt.highlights.map((h) => (
            <span key={h} className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
              {h}
            </span>
          ))}
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <MessageCircle className="w-5 h-5" />
          Reservar pelo WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

const Alugar = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-foreground/95 text-primary-foreground py-6">
        <div className="container mx-auto px-6 flex items-center gap-4">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Aluguel por Temporada</h1>
            <p className="text-primary-foreground/70 text-sm font-body">
              Ibiunature Aqua Clube • Ibiúna – SP
            </p>
          </div>
        </div>
      </div>

      {/* Apartments grid */}
      <div className="container mx-auto px-6 py-12">
        <p className="text-muted-foreground font-body text-center max-w-2xl mx-auto mb-10 text-lg">
          Escolha seu apartamento e viva a experiência de um resort completo com piscinas, 
          churrasqueira, bar e muito mais.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apt) => (
            <ApartmentCard key={apt.name} apt={apt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alugar;
