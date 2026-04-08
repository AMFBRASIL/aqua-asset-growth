import { motion } from "framer-motion";

const ClosingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-nature opacity-95" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Não é apenas um apartamento.
            <br />
            <span className="opacity-85">É um ativo que respira natureza e gera caixa.</span>
          </h2>
          <p className="text-primary-foreground/75 font-body text-lg mb-10 max-w-xl mx-auto">
            Garanta sua participação no empreendimento que une rentabilidade, segurança e qualidade de vida.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-accent-foreground font-body font-bold rounded-xl text-lg shadow-premium hover:brightness-110 transition-all duration-300 hover:scale-105"
          >
            Quero participar como investidor
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
