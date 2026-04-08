import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const comparisonData = [
  { name: "CDI (10% a.a.)", anual: 65000, tresAnos: 195000 },
  { name: "Ibiunature (Conservador)", anual: 120000, tresAnos: 360000 },
  { name: "Ibiunature (Moderado)", anual: 144000, tresAnos: 432000 },
];

const formatCurrency = (value: number) => `R$ ${(value / 1000).toFixed(0)}k`;

const CDIComparisonSection = () => {
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
            Comparativo com <span className="text-gradient-nature">CDI</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Investimento de R$ 650.000 — veja a diferença entre deixar no banco e investir em um ativo real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-6 md:p-10 shadow-card border border-border mb-12"
        >
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={comparisonData} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150, 15%, 88%)" />
              <XAxis
                dataKey="name"
                tick={{ fill: "hsl(200, 10%, 40%)", fontSize: 11, fontFamily: "Inter" }}
                axisLine={{ stroke: "hsl(150, 15%, 88%)" }}
              />
              <YAxis
                tickFormatter={formatCurrency}
                tick={{ fill: "hsl(200, 10%, 40%)", fontSize: 12, fontFamily: "Inter" }}
                axisLine={{ stroke: "hsl(150, 15%, 88%)" }}
              />
              <Tooltip
                formatter={(value: number) => [`R$ ${value.toLocaleString("pt-BR")}`, ""]}
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(150, 15%, 88%)",
                  borderRadius: "12px",
                  fontFamily: "Inter",
                }}
              />
              <Legend wrapperStyle={{ fontFamily: "Inter", fontSize: 13 }} />
              <Bar dataKey="anual" name="Receita Anual" radius={[8, 8, 0, 0]} fill="hsl(152, 45%, 28%)" />
              <Bar dataKey="tresAnos" name="Receita 3 Anos" radius={[8, 8, 0, 0]} fill="hsl(198, 60%, 42%)" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <blockquote className="text-xl md:text-2xl font-display font-semibold text-foreground italic max-w-3xl mx-auto">
            "Enquanto o banco remunera seu capital, o Ibiunature <span className="text-gradient-nature">multiplica</span> seu potencial."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default CDIComparisonSection;
