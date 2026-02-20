import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(152,45%,15%,0.78), hsla(198,60%,20%,0.68))" }} />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-body tracking-wider uppercase mb-8 border border-primary-foreground/20">
            Oportunidade exclusiva de investimento
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Invista em um ativo real que trabalha por você todos os finais de semana.
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/85 font-body max-w-2xl mx-auto mb-4 leading-relaxed">
            Apartamentos de 160m² dentro do <strong>Ibiunature Aqua Clube</strong>.
          </p>
          <p className="text-base md:text-lg text-primary-foreground/75 font-body max-w-2xl mx-auto mb-10">
            Renda recorrente com locação por temporada + valorização imobiliária.
          </p>

          <motion.a
            href="#simulador"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-semibold rounded-lg text-lg shadow-premium hover:brightness-110 transition-all duration-300 hover:scale-105"
          >
            Quero Receber o Estudo Financeiro
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
