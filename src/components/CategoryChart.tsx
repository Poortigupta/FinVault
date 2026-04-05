import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { categoryBreakdown } from "@/lib/mock-data";

const COLORS = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
  "var(--color-chart-6)",
  "var(--color-success)",
];

export function CategoryChart() {
  const total = categoryBreakdown.reduce((s, c) => s + c.value, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="rounded-xl border border-border bg-card p-5"
    >
      <div className="mb-4">
        <h3 className="font-display text-base font-semibold text-card-foreground">Spending Breakdown</h3>
        <p className="text-xs text-muted-foreground">By category</p>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="h-[200px] w-[200px] flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
                animationBegin={200}
                animationDuration={1000}
                stroke="none"
              >
                {categoryBreakdown.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.5rem",
                  fontSize: "0.75rem",
                  color: "var(--color-card-foreground)",
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid w-full grid-cols-2 gap-2">
          {categoryBreakdown.map((cat, i) => (
            <div key={cat.name} className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
              <div className="min-w-0">
                <p className="truncate text-xs text-muted-foreground">{cat.name}</p>
                <p className="text-xs font-semibold text-card-foreground">
                  {((cat.value / total) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
