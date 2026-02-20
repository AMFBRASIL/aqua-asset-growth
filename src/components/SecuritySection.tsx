import { motion } from "framer-motion";
import { Shield, MapPin, TrendingUp, CheckCircle, Landmark } from "lucide-react";

const securityItems = [
  { icon: Shield, title: "Ativo real e físico", desc: "Você é dono de um imóvel com escritura e lastro imobiliário." },
  { icon: Landmark, title: "Lastro imobiliário", desc: "Patrimônio tangível que protege contra oscilações de mercado." },
  { icon: MapPin, title: "Localização estratégica", desc: "Ibiúna – SP, a 80km da capital, em uma das regiões mais desejadas." },
  { icon: CheckCircle, title: "Modelo validado", desc: "Locação por temporada com demanda comprovada e recorrente." },
  { icon: TrendingUp, title: "Alta demanda", desc: "Turismo de experiência em franca expansão no Brasil." },
];

const SecuritySection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Segurança do <span className="text-gradient-nature">Investimento</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {securityItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border flex items-start gap-4 hover:shadow-premium transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-nature flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1 font-display text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
