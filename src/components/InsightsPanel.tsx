import { TrendingUp, AlertTriangle, Award, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { useFinance } from "@/context/FinanceContext";

interface Insight {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
  color: string;
  bg: string;
}

export function InsightsPanel() {
  const { totalIncome, totalExpenses, savings, transactions } = useFinance();

  const categoryTotals = transactions
    .filter((t) => t.type === "expense")
    .reduce<Record<string, number>>((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const topCategory = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0];

  const insights: Insight[] = [
    {
      icon: Award,
      title: "Top Spending",
      value: topCategory ? topCategory[0] : "N/A",
      description: topCategory ? `$${topCategory[1].toLocaleString()} this period` : "",
      color: "text-chart-4",
      bg: "bg-chart-4/10",
    },
    {
      icon: TrendingUp,
      title: "Savings Rate",
      value: `${((savings / totalIncome) * 100).toFixed(1)}%`,
      description: "Of total income saved",
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      icon: ArrowDownRight,
      title: "Avg. Expense",
      value: `$${(totalExpenses / transactions.filter((t) => t.type === "expense").length).toFixed(0)}`,
      description: "Per transaction",
      color: "text-chart-5",
      bg: "bg-chart-5/10",
    },
    {
      icon: AlertTriangle,
      title: "Largest Expense",
      value: "Rent",
      description: "$4,400 — 68% of expenses",
      color: "text-warning",
      bg: "bg-warning/10",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.5 }}
      className="rounded-xl border border-border bg-card p-5"
    >
      <h3 className="mb-4 font-display text-base font-semibold text-card-foreground">Financial Insights</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {insights.map((ins, i) => (
          <motion.div
            key={ins.title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.08 }}
            className="flex items-start gap-3 rounded-lg bg-accent/40 p-3 transition-colors hover:bg-accent/70"
          >
            <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${ins.bg}`}>
              <ins.icon className={`h-4 w-4 ${ins.color}`} />
            </div>
            <div>
              <p className="text-[10px] font-medium text-muted-foreground">{ins.title}</p>
              <p className="text-sm font-bold text-card-foreground">{ins.value}</p>
              <p className="text-[10px] text-muted-foreground">{ins.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
