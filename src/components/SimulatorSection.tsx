import { useState } from "react";
import { motion } from "framer-motion";

const options = [
  { label: "R$ 500.000", value: 500000, units: 1 },
  { label: "R$ 1.000.000", value: 1000000, units: 2 },
];

const SimulatorSection = () => {
  const [selected, setSelected] = useState(0);

  const inv = options[selected];
  const receitaMensalConservador = inv.units * 10000;
  const receitaMensalModerado = inv.units * 12000;
  const valorizacaoConservador = inv.value * 0.5;
  const valorizacaoModerado = inv.value * 0.8;
  const valorVendaConservador = inv.value + valorizacaoConservador;
  const valorVendaModerado = inv.value + valorizacaoModerado;

  const lucroRendaConservador = receitaMensalConservador * 36;
  const lucroRendaModerado = receitaMensalModerado * 36;
  const lucroTotalConservador = lucroRendaConservador + valorizacaoConservador;
  const lucroTotalModerado = lucroRendaModerado + valorizacaoModerado;
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

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Conservative */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-body tracking-wider uppercase mb-6 bg-primary text-primary-foreground">
                Conservador
              </span>
              <div className="space-y-4 font-body">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Receita mensal (locação)</span>
                  <span className="font-semibold text-foreground">{fmt(receitaMensalConservador)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Renda locação em 3 anos</span>
                  <span className="font-semibold text-foreground">{fmt(lucroRendaConservador)}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valorização do imóvel (50%)</span>
                  <span className="font-semibold text-foreground">{fmt(valorizacaoConservador)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valor de venda após 3 anos</span>
                  <span className="font-semibold text-foreground">{fmt(valorVendaConservador)}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-end">
                  <span className="text-foreground font-medium">Lucro total</span>
                  <span className="text-2xl font-bold text-primary">{fmt(lucroTotalConservador)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ROI</span>
                  <span className="font-bold text-primary">{roiConservador}%</span>
                </div>
              </div>
            </div>

            {/* Moderate */}
            <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-secondary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-body font-semibold px-3 py-1 rounded-bl-lg">
                Recomendado
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-body tracking-wider uppercase mb-6 bg-secondary text-secondary-foreground">
                Moderado
              </span>
              <div className="space-y-4 font-body">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Receita mensal (locação)</span>
                  <span className="font-semibold text-foreground">{fmt(receitaMensalModerado)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Renda locação em 3 anos</span>
                  <span className="font-semibold text-foreground">{fmt(lucroRendaModerado)}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valorização do imóvel (80%)</span>
                  <span className="font-semibold text-foreground">{fmt(valorizacaoModerado)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valor de venda após 3 anos</span>
                  <span className="font-semibold text-foreground">{fmt(valorVendaModerado)}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-end">
                  <span className="text-foreground font-medium">Lucro total</span>
                  <span className="text-2xl font-bold text-secondary">{fmt(lucroTotalModerado)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ROI</span>
                  <span className="font-bold text-secondary">{roiModerado}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Exit strategy highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-card rounded-2xl p-6 md:p-8 shadow-card border-2 border-accent"
          >
            <h3 className="font-display font-bold text-lg text-foreground mb-3">🏠 Estratégia de saída após 3 anos</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Após os 3 anos de operação, você poderá <strong className="text-foreground">vender o imóvel valorizado de 50% a 80%</strong> sobre o valor investido. 
              Isso significa que, além de ter recebido renda recorrente durante todo o período, você ainda lucra com a venda do ativo — 
              transformando R$ 500.000 investidos em até <strong className="text-foreground">{fmt(inv.value * 0.8 + (receitaMensalModerado * 36) + inv.value)}</strong> de patrimônio total gerado.
            </p>
          </motion.div>

          {/* Extra metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "TIR estimada", value: "28% a.a." },
              { label: "Payback", value: "~2,5 anos" },
              { label: "Tesouro Selic (3 anos)", value: fmt(150000 * inv.units) },
              { label: "Ibiunature (3 anos)", value: fmt(lucroTotalModerado) },
            ].map((m) => (
              <div key={m.label} className="bg-card rounded-xl p-4 shadow-card border border-border text-center">
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

export default SimulatorSection;
