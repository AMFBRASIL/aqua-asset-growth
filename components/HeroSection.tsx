import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const resortLake = "/assets/resort-lake.jpg";

const stats = [
  { value: "160m²", label: "por unidade" },
  { value: "R$ 650k", label: "investimento" },
  { value: "166%", label: "ROI em 3 anos" },
  { value: "10", label: "hóspedes/unid." },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${resortLake})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center pt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md text-primary-foreground/90 text-sm font-body tracking-widest uppercase mb-8 border border-primary-foreground/20">
              Investimento Imobiliário • Ibiúna – SP
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Invista em um ativo real
              <br />
              <span className="opacity-80">que trabalha por você.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-4 leading-relaxed">
              Apartamentos de 160m² dentro do <strong className="text-primary-foreground">Ibiunature Aqua Clube</strong>.
            </p>
            <p className="text-base md:text-lg text-primary-foreground/65 font-body max-w-2xl mx-auto mb-12">
              Renda recorrente com locação por temporada + valorização imobiliária de até 80%.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#simulador"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-body font-bold rounded-xl text-lg shadow-premium hover:brightness-110 transition-all duration-300 hover:scale-105"
            >
              Quero Receber o Estudo Financeiro
            </a>
            <a
              href="/alugar"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-body font-semibold rounded-xl text-lg border border-primary-foreground/25 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              Quero Alugar por Temporada
            </a>
            <a
              href="/localizacao"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-body font-semibold rounded-xl text-lg border border-primary-foreground/25 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              Como chegar
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-primary-foreground/8 backdrop-blur-md rounded-xl px-4 py-5 border border-primary-foreground/10">
                <p className="text-2xl md:text-3xl font-bold text-primary-foreground">{s.value}</p>
                <p className="text-xs text-primary-foreground/60 font-body uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex justify-center mt-16"
        >
          <a href="#investimento" className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary-foreground/50" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
