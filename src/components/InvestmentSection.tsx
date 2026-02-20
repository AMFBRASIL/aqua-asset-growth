import { motion } from "framer-motion";
import { Building2, Users, DollarSign, Calendar } from "lucide-react";

const items = [
  { icon: DollarSign, label: "Investimento mínimo", value: "R$ 500.000" },
  { icon: Building2, label: "Área por unidade", value: "160m²" },
  { icon: Users, label: "Capacidade", value: "Até 10 hóspedes" },
  { icon: Calendar, label: "Operação", value: "Locação por temporada" },
];

const InvestmentSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Oportunidade de <span className="text-gradient-nature">Investimento</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Um modelo inteligente de investimento imobiliário com renda recorrente desde o primeiro mês.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card text-center border border-border hover:shadow-premium transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-nature flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-sm text-muted-foreground font-body mb-1">{item.label}</p>
              <p className="text-xl font-bold text-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border"
        >
          <h3 className="text-xl font-bold text-foreground mb-4 font-display">Como funciona?</h3>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              O investidor adquire <strong className="text-foreground">1 ou 2 unidades</strong> (R$ 500.000 cada) dentro do Ibiunature Aqua Clube.
            </p>
            <p>
              Durante <strong className="text-foreground">3 anos</strong>, o imóvel é operado via locação por temporada através de channels managers (Airbnb, Booking, etc.) até a regularização final da documentação.
            </p>
            <p>
              Você recebe renda recorrente enquanto o ativo <strong className="text-foreground">valoriza</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;
