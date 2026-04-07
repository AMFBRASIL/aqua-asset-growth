import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, HardHat } from "lucide-react";

import obra01 from "@/assets/obra-01-terreno.jpg";
import obra02 from "@/assets/obra-02-terraplanagem.jpg";
import obra03 from "@/assets/obra-03-fundacao.jpg";
import obra04 from "@/assets/obra-04-alvenaria-inicio.jpg";
import obra05 from "@/assets/obra-05-estrutura.jpg";
import obra06 from "@/assets/obra-06-cobertura.jpg";
import obra07 from "@/assets/obra-07-paisagismo.jpg";
import obra08 from "@/assets/obra-08-lago.jpg";
import obra09 from "@/assets/obra-09-varanda.jpg";
import obra10 from "@/assets/obra-10-piscina.jpg";
import resortLake from "@/assets/resort-lake.jpg";
import resortPool from "@/assets/resort-pool.jpg";

const phases = [
  { src: obra01, title: "Preparação do Terreno", desc: "Limpeza e terraplanagem do terreno em Ibiúna", phase: "Fase 1" },
  { src: obra02, title: "Terraplanagem", desc: "Nivelamento e preparação do solo para a fundação", phase: "Fase 1" },
  { src: obra03, title: "Fundação e Alvenaria", desc: "Início da construção dos blocos estruturais", phase: "Fase 2" },
  { src: obra04, title: "Alvenaria Avançada", desc: "Levantamento das paredes e estrutura do empreendimento", phase: "Fase 2" },
  { src: obra05, title: "Estrutura dos Blocos", desc: "Edificação dos apartamentos tomando forma", phase: "Fase 3" },
  { src: obra06, title: "Cobertura e Telhado", desc: "Finalização da estrutura principal com cobertura", phase: "Fase 3" },
  { src: obra07, title: "Paisagismo", desc: "Plantio de palmeiras e vegetação tropical", phase: "Fase 4" },
  { src: obra08, title: "Lago Natural", desc: "Construção do lago ornamental com pedras", phase: "Fase 4" },
  { src: obra09, title: "Varandas com Vista", desc: "Acabamento das varandas com vista para a serra", phase: "Fase 5" },
  { src: obra10, title: "Área de Lazer", desc: "Construção das piscinas e espaços de convivência", phase: "Fase 5" },
  { src: resortLake, title: "Lago Finalizado", desc: "Paisagismo concluído com lago natural e cascata", phase: "Entregue ✓" },
  { src: resortPool, title: "Resort Pronto!", desc: "Ibiunature Aqua Clube 100% operacional", phase: "Entregue ✓" },
];

const TimelapseSection = () => {
  const [current, setCurrent] = useState(0);

  const navigate = (dir: number) => {
    setCurrent((prev) => (prev + dir + phases.length) % phases.length);
  };

  const progress = ((current + 1) / phases.length) * 100;

  return (
    <section className="py-24 bg-muted overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-body font-semibold mb-6">
            <HardHat className="w-4 h-4" />
            Evolução da Obra
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Do Terreno ao <span className="text-gradient-nature">Resort</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Acompanhe a transformação completa do Ibiunature Aqua Clube — da terraplanagem à entrega.
          </p>
        </motion.div>

        {/* Main viewer */}
        <div className="max-w-5xl mx-auto">
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-body font-semibold text-primary">{phases[current].phase}</span>
              <span className="text-sm font-body text-muted-foreground">{current + 1} / {phases.length}</span>
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-nature rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Image viewer */}
          <div className="relative rounded-2xl overflow-hidden bg-foreground/5 aspect-video mb-6">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={phases[current].src}
                alt={phases[current].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Overlay info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-6 md:p-8">
              <motion.div key={current} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-body bg-primary text-primary-foreground mb-2">
                  {phases[current].phase}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground font-display">{phases[current].title}</h3>
                <p className="text-primary-foreground/75 font-body text-sm mt-1">{phases[current].desc}</p>
              </motion.div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/30 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-foreground/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/30 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-foreground/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {phases.map((phase, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                  current === i
                    ? "ring-2 ring-primary scale-105 opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={phase.src}
                  alt={phase.title}
                  className="w-20 h-14 md:w-24 md:h-16 object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelapseSection;
