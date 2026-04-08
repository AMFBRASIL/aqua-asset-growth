import { motion } from "framer-motion";
import { Flame, ShoppingCart, Beer, Users, DollarSign, TrendingUp, Tv } from "lucide-react";

const ExtraRevenueSection = () => {
  // 6 aptos × 10 pessoas = 60 hóspedes, metade consome = 30 pessoas
  const hospedes = 60;
  const consumidores = hospedes / 2;
  const ticketMedioChurrasco = 45;
  const ticketMedioChopp = 30;
  const ticketMedioMercado = 35;
  const ticketMedioBar = 50;

  const receitaChurrascoFds = consumidores * ticketMedioChurrasco;
  const receitaChoppFds = consumidores * ticketMedioChopp;
  const receitaMercadoFds = consumidores * ticketMedioMercado;
  const receitaBarFds = consumidores * ticketMedioBar;
  const totalFds = receitaChurrascoFds + receitaChoppFds + receitaMercadoFds + receitaBarFds;
  const totalMensal = totalFds * 4;
  const totalAnual = totalMensal * 12;

  const fmt = (v: number) => `R$ ${v.toLocaleString("pt-BR")}`;

  const venues = [
    {
      title: "Churrasqueira & Bar",
      subtitle: "Espetos, hambúrgueres artesanais e chopp gelado",
      image: "/assets/churrasqueira-bar.jpg",
      icon: Flame,
      description:
        "Espaço gourmet com churrasqueira profissional, chopeiras e cardápio de espetos e hambúrgueres. Uma experiência gastronômica que gera receita recorrente a cada final de semana.",
      highlights: [
        { icon: Flame, label: "Espetos & Hambúrgueres", value: fmt(receitaChurrascoFds) + "/fds" },
        { icon: Beer, label: "Chopp & Bebidas", value: fmt(receitaChoppFds) + "/fds" },
      ],
    },
    {
      title: "SelfMart — Mini Mercado",
      subtitle: "Conveniência 24h para os hóspedes",
      image: "/assets/selfmart.jpg",
      icon: ShoppingCart,
      description:
        "Mini mercado self-service com bebidas, snacks, congelados e itens essenciais. Sistema de pagamento via Pix, cartão e app — praticidade que gera receita contínua.",
      highlights: [
        { icon: ShoppingCart, label: "Consumo por fds", value: fmt(receitaMercadoFds) + "/fds" },
        { icon: DollarSign, label: "Receita mensal", value: fmt(receitaMercadoFds * 4) },
      ],
    },
    {
      title: "Bar Americano",
      subtitle: "Chopp self-service, sinuca, mesa de air hockey e telões",
      image: "/assets/bar-americano.jpg",
      icon: Tv,
      description:
        "Bar estilo americano com máquinas de chopp em auto atendimento, mesa de sinuca, air hockey e telões transmitindo esportes ao vivo. Um espaço de convivência que atrai consumo e fideliza hóspedes.",
      highlights: [
        { icon: Beer, label: "Chopp self-service", value: fmt(receitaBarFds) + "/fds" },
        { icon: DollarSign, label: "Receita mensal", value: fmt(receitaBarFds * 4) },
      ],
    },
  ];

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
            Receitas <span className="text-gradient-nature">Extras</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Além da locação, o empreendimento gera receita com operações próprias de alimentação e conveniência.
          </p>
        </motion.div>

        {/* Premissa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-12 max-w-3xl mx-auto"
        >
          <p className="text-foreground font-body text-sm font-medium flex items-center gap-2">
            <Users className="w-5 h-5 text-accent shrink-0" />
            <span>
              <strong>Premissa:</strong> 6 apartamentos alugados × 10 pessoas = <strong>60 hóspedes</strong>.
              Estimamos que <strong>metade consuma</strong> nos espaços — ou seja, ~30 clientes por final de semana.
            </span>
          </p>
        </motion.div>

        {/* Cards dos espaços */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl shadow-card border border-border overflow-hidden hover:shadow-premium transition-all duration-300"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-primary-foreground font-display font-bold text-xl flex items-center gap-2">
                    <venue.icon className="w-5 h-5" />
                    {venue.title}
                  </h3>
                  <p className="text-primary-foreground/80 font-body text-sm">{venue.subtitle}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground font-body text-sm mb-5">{venue.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {venue.highlights.map((h) => (
                    <div key={h.label} className="bg-muted/50 rounded-lg p-3 text-center border border-border">
                      <h.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground font-body">{h.label}</p>
                      <p className="text-sm font-bold text-foreground">{h.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resumo financeiro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-premium border-2 border-accent max-w-3xl mx-auto"
        >
          <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            Projeção de Receita Extra
          </h3>
          <div className="space-y-4 font-body text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Churrasqueira + Hambúrgueres (por fds)</span>
              <span className="font-semibold text-foreground">{fmt(receitaChurrascoFds)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Chopp & Bebidas (por fds)</span>
              <span className="font-semibold text-foreground">{fmt(receitaChoppFds)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">SelfMart — Mini Mercado (por fds)</span>
              <span className="font-semibold text-foreground">{fmt(receitaMercadoFds)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bar Americano — Chopp & Entretenimento (por fds)</span>
              <span className="font-semibold text-foreground">{fmt(receitaBarFds)}</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex justify-between items-end">
              <span className="text-foreground font-medium">Total por final de semana</span>
              <span className="text-xl font-bold text-primary">{fmt(totalFds)}</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-foreground font-medium">Total mensal estimado</span>
              <span className="text-xl font-bold text-primary">{fmt(totalMensal)}</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-foreground font-medium">Total anual estimado</span>
              <span className="text-2xl font-bold text-secondary">{fmt(totalAnual)}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraRevenueSection;
