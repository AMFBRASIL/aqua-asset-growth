import { motion } from "framer-motion";

const scenarioData = [
  { name: "Conservador", mensal: 14000, anual: 168000, cor: "hsl(152, 45%, 28%)" },
  { name: "Moderado", mensal: 18000, anual: 216000, cor: "hsl(198, 60%, 42%)" },
];

const tableData = [
  { label: "Receita Bruta Anual (locação)", conservador: "R$ 168.000", moderado: "R$ 216.000" },
  { label: "Receita locação em 3 anos", conservador: "R$ 504.000", moderado: "R$ 648.000" },
  { label: "Valorização do imóvel (50% a 80%)", conservador: "R$ 325.000 (50%)", moderado: "R$ 520.000 (80%)" },
  { label: "Valor de venda após 3 anos", conservador: "R$ 975.000", moderado: "R$ 1.170.000" },
  { label: "Lucro total (renda + venda)", conservador: "R$ 829.000", moderado: "R$ 1.168.000" },
  { label: "ROI total em 3 anos", conservador: "128%", moderado: "180%" },
];

const formatCurrency = (value: number) =>
  `R$ ${value.toLocaleString("pt-BR")}`;

const RevenueSection = () => {
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
            Modelo de <span className="text-gradient-nature">Receita</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Valores de locação variam de <strong className="text-foreground">R$ 3.000 a R$ 15.000</strong> por final de semana, dependendo da temporada e feriados como Réveillon, Carnaval, Páscoa e Natal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {scenarioData.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-premium transition-all duration-300"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold font-body tracking-wider uppercase mb-5"
                style={{ backgroundColor: s.cor, color: "white" }}>
                Cenário {s.name}
              </span>
              <div className="space-y-4 font-body">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Faixa de diária (fim de semana)</span>
                  <span className="font-semibold text-foreground">R$ 3.000 – R$ 15.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Média ponderada/fim de semana</span>
                  <span className="font-semibold text-foreground">{i === 0 ? "R$ 3.500" : "R$ 4.500"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Receita mensal (4 fins de semana)</span>
                  <span className="font-semibold text-foreground">{formatCurrency(s.mensal)}</span>
                </div>
                <div className="h-px bg-border my-2" />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-lg">Receita anual</span>
                  <span className="font-bold text-2xl" style={{ color: s.cor }}>{formatCurrency(s.anual)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl shadow-card border border-border overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full font-body">
              <thead>
                <tr className="bg-gradient-nature">
                  <th className="text-left px-6 py-4 text-primary-foreground font-semibold">Projeção</th>
                  <th className="text-right px-6 py-4 text-primary-foreground font-semibold">Conservador</th>
                  <th className="text-right px-6 py-4 text-primary-foreground font-semibold">Moderado</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={row.label} className={`${i % 2 === 0 ? "bg-card" : "bg-muted/50"} ${i === tableData.length - 1 ? "font-bold text-lg" : ""}`}>
                    <td className="px-6 py-4 text-foreground font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">{row.conservador}</td>
                    <td className="px-6 py-4 text-right text-secondary font-semibold">{row.moderado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueSection;
