import { useState } from "react";
import { motion } from "framer-motion";

const options = [
  { label: "R$ 650.000", value: 650000, units: 1 },
  { label: "R$ 1.300.000", value: 1300000, units: 2 },
];

const SimulatorSection = () => {
  const [selected, setSelected] = useState(0);

  const inv = options[selected];
  const receitaMensalConservador = inv.units * 14000;
  const receitaMensalModerado = inv.units * 18000;
  const valorizacaoConservador = inv.value * 0.5;
  const valorizacaoModerado = inv.value * 0.8;
  const valorVendaConservador = inv.value + valorizacaoConservador;
  const valorVendaModerado = inv.value + valorizacaoModerado;

  // Receitas extras: 30 consumidores/fds × tickets (churrasco 45 + chopp 30 + mercado 35 + bar 50) × 4 semanas
  const receitaExtraMensal = 30 * (45 + 30 + 35 + 50) * 4; // R$ 19.200/mês por unidade operacional
  const receitaExtraMensalInvestidor = receitaExtraMensal * inv.units;
  const receitaExtra3anos = receitaExtraMensalInvestidor * 36;

  const lucroRendaConservador = receitaMensalConservador * 36;
  const lucroRendaModerado = receitaMensalModerado * 36;
  const lucroTotalConservador = lucroRendaConservador + valorizacaoConservador + receitaExtra3anos;
  const lucroTotalModerado = lucroRendaModerado + valorizacaoModerado + receitaExtra3anos;
  const roiConservador = ((lucroTotalConservador / inv.value) * 100).toFixed(0);
  const roiModerado = ((lucroTotalModerado / inv.value) * 100).toFixed(0);

  const fmt = (v: number) => `R$ ${v.toLocaleString("pt-BR")}`;

  return (
    <section id="simulador" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simulador <span className="text-gradient-nature">Interativo</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Quanto você quer investir?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Toggle */}
          <div className="flex justify-center gap-4 mb-10">
            {options.map((opt, i) => (
              <button
                key={opt.value}
                onClick={() => setSelected(i)}
                className={`px-8 py-4 rounded-xl font-body font-semibold text-lg transition-all duration-300 border-2 ${
                  selected === i
                    ? "bg-gradient-nature text-primary-foreground border-primary shadow-premium scale-105"
                    : "bg-card text-foreground border-border hover:border-primary/50"
                }`}
              >
                {opt.label}
                <span className="block text-xs font-normal mt-1 opacity-75">
                  {opt.units} {opt.units === 1 ? "unidade" : "unidades"}
                </span>
              </button>
            ))}
          </div>

          {/* BLOCO 1 — Renda com Locação */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h3 className="font-display font-bold text-xl text-foreground mb-2 flex items-center gap-2">
              🏨 <span>Lucro com Renda de Locação</span>
            </h3>
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-6">
              <p className="text-foreground font-body text-sm font-medium mb-1">💡 Valores de locação por final de semana: <strong>R$ 3.000 a R$ 15.000</strong></p>
              <p className="text-muted-foreground font-body text-xs">Feriados como Réveillon, Carnaval, Páscoa e Natal elevam significativamente a diária. A média ponderada considera finais de semana regulares e de alta temporada.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SimCard label="Conservador" variant="primary">
                <SimRow label="Receita mensal" value={fmt(receitaMensalConservador)} />
                <SimRow label="Receita anual" value={fmt(receitaMensalConservador * 12)} />
                <SimDivider />
                <SimTotal label="Lucro de renda em 3 anos" value={fmt(lucroRendaConservador)} variant="primary" />
              </SimCard>

              <SimCard label="Moderado" variant="secondary" recommended>
                <SimRow label="Receita mensal" value={fmt(receitaMensalModerado)} />
                <SimRow label="Receita anual" value={fmt(receitaMensalModerado * 12)} />
                <SimDivider />
                <SimTotal label="Lucro de renda em 3 anos" value={fmt(lucroRendaModerado)} variant="secondary" />
              </SimCard>
            </div>
          </motion.div>

          {/* BLOCO 2 — Lucro com Venda */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h3 className="font-display font-bold text-xl text-foreground mb-2 flex items-center gap-2">
              🏠 <span>Lucro com Venda do Imóvel (após 3 anos)</span>
            </h3>
            <p className="text-muted-foreground font-body text-sm mb-6">Valorização estimada de 50% a 80% sobre o valor investido.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SimCard label="Conservador (50%)" variant="primary">
                <SimRow label="Valor investido" value={fmt(inv.value)} />
                <SimRow label="Valorização (50%)" value={fmt(valorizacaoConservador)} highlight="primary" />
                <SimDivider />
                <SimTotal label="Valor de venda" value={fmt(valorVendaConservador)} variant="primary" />
              </SimCard>

              <SimCard label="Moderado (80%)" variant="secondary" recommended>
                <SimRow label="Valor investido" value={fmt(inv.value)} />
                <SimRow label="Valorização (80%)" value={fmt(valorizacaoModerado)} highlight="secondary" />
                <SimDivider />
                <SimTotal label="Valor de venda" value={fmt(valorVendaModerado)} variant="secondary" />
              </SimCard>
            </div>
          </motion.div>

          {/* BLOCO 3 — Resultado Total */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-premium border-2 border-accent"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-2 flex items-center gap-2">
              💰 <span>Resultado Total — Renda + Venda</span>
            </h3>
            <p className="text-muted-foreground font-body text-sm mb-6">Lucro total combinando a renda de locação dos 3 anos com a venda do imóvel valorizado.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <span className="text-xs font-semibold font-body tracking-wider uppercase text-primary mb-4 block">Conservador</span>
                <div className="space-y-3 font-body text-sm">
                  <SimRow label="Renda locação (3 anos)" value={fmt(lucroRendaConservador)} />
                  <SimRow label="Lucro na venda (valorização)" value={fmt(valorizacaoConservador)} />
                  <SimDivider />
                  <SimTotal label="Lucro total" value={fmt(lucroTotalConservador)} variant="primary" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ROI total</span>
                    <span className="font-bold text-primary">{roiConservador}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 border-2 border-secondary">
                <span className="text-xs font-semibold font-body tracking-wider uppercase text-secondary mb-4 block">Moderado (Recomendado)</span>
                <div className="space-y-3 font-body text-sm">
                  <SimRow label="Renda locação (3 anos)" value={fmt(lucroRendaModerado)} />
                  <SimRow label="Lucro na venda (valorização)" value={fmt(valorizacaoModerado)} />
                  <SimDivider />
                  <SimTotal label="Lucro total" value={fmt(lucroTotalModerado)} variant="secondary" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ROI total</span>
                    <span className="font-bold text-secondary">{roiModerado}%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Extra metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "TIR estimada", value: "28% a.a." },
              { label: "Payback", value: "~2,5 anos" },
              { label: "Tesouro Selic (3 anos)", value: fmt(195000 * inv.units) },
              { label: "Ibiunature (3 anos)", value: fmt(lucroTotalModerado) },
            ].map((m) => (
              <div key={m.label} className="bg-card rounded-xl p-5 shadow-card border border-border text-center hover:shadow-premium transition-shadow">
                <p className="text-xs text-muted-foreground font-body mb-1">{m.label}</p>
                <p className="text-lg font-bold text-foreground">{m.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* Sub-components */
const SimCard = ({ label, variant, recommended, children }: {
  label: string; variant: "primary" | "secondary"; recommended?: boolean; children: React.ReactNode;
}) => (
  <div className={`bg-card rounded-2xl p-8 shadow-card border${recommended ? "-2 border-secondary relative overflow-hidden" : " border-border"}`}>
    {recommended && (
      <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-body font-semibold px-3 py-1 rounded-bl-lg">
        Recomendado
      </div>
    )}
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold font-body tracking-wider uppercase mb-6 ${
      variant === "primary" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
    }`}>
      {label}
    </span>
    <div className="space-y-4 font-body">{children}</div>
  </div>
);

const SimRow = ({ label, value, highlight }: { label: string; value: string; highlight?: "primary" | "secondary" }) => (
  <div className="flex justify-between">
    <span className="text-muted-foreground">{label}</span>
    <span className={`font-semibold ${highlight === "primary" ? "text-primary" : highlight === "secondary" ? "text-secondary" : "text-foreground"}`}>{value}</span>
  </div>
);

const SimDivider = () => <div className="h-px bg-border" />;

const SimTotal = ({ label, value, variant }: { label: string; value: string; variant: "primary" | "secondary" }) => (
  <div className="flex justify-between items-end">
    <span className="text-foreground font-medium">{label}</span>
    <span className={`text-2xl font-bold ${variant === "primary" ? "text-primary" : "text-secondary"}`}>{value}</span>
  </div>
);

export default SimulatorSection;
