import { motion } from "framer-motion";
import { TreePine, Sun, Building } from "lucide-react";

const factors = [
  {
    icon: TreePine,
    title: "Turismo rural e ecológico em alta",
    desc: "O Brasil vive um boom de turismo de natureza. Ibiúna está no epicentro dessa demanda crescente, com acessibilidade privilegiada a partir de São Paulo.",
  },
  {
    icon: Sun,
    title: "Busca por lazer pós-pandemia",
    desc: "A procura por imóveis de lazer em locais com natureza e tranquilidade cresceu exponencialmente e se mantém em patamares históricos.",
  },
  {
    icon: Building,
    title: "Escassez de empreendimentos organizados",
    desc: "A região possui carência de empreendimentos estruturados e com gestão profissional, criando uma vantagem competitiva enorme para o Ibiunature.",
  },
];

const AppreciationSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Potencial de <span className="text-gradient-nature">Valorização</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Três fatores convergem para uma valorização expressiva nos próximos anos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {factors.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-nature flex items-center justify-center mx-auto mb-6">
                <f.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-display">{f.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppreciationSection;
