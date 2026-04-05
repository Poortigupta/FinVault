import { DollarSign, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import { motion } from "framer-motion";
import { useFinance } from "@/context/FinanceContext";

interface CardData {
  title: string;
  amount: number;
  icon: React.ElementType;
  trend: number;
  trendLabel: string;
  colorClass: string;
  iconBg: string;
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
}

export function SummaryCards() {
  const { totalBalance, totalIncome, totalExpenses, savings } = useFinance();

  const cards: CardData[] = [
    { title: "Total Balance", amount: totalBalance, icon: DollarSign, trend: 8.2, trendLabel: "vs last month", colorClass: "text-primary", iconBg: "bg-primary/10" },
    { title: "Total Income", amount: totalIncome, icon: TrendingUp, trend: 12.5, trendLabel: "vs last month", colorClass: "text-success", iconBg: "bg-success/10" },
    { title: "Total Expenses", amount: totalExpenses, icon: TrendingDown, trend: -3.1, trendLabel: "vs last month", colorClass: "text-destructive", iconBg: "bg-destructive/10" },
    { title: "Net Savings", amount: savings, icon: PiggyBank, trend: 24.3, trendLabel: "vs last month", colorClass: "text-chart-2", iconBg: "bg-chart-2/10" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2, boxShadow: "0 8px 30px -12px oklch(0.3 0.05 260 / 0.15)" }}
          className="group rounded-xl border border-border bg-card p-5 transition-colors"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">{card.title}</p>
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${card.iconBg} transition-transform duration-200 group-hover:scale-110`}>
              <card.icon className={`h-4 w-4 ${card.colorClass}`} />
            </div>
          </div>
          <p className="mt-2 font-display text-2xl font-bold tracking-tight text-card-foreground">
            {formatCurrency(card.amount)}
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            {card.trend > 0 ? (
              <TrendingUp className="h-3 w-3 text-success" />
            ) : (
              <TrendingDown className="h-3 w-3 text-destructive" />
            )}
            <span className={`text-xs font-medium ${card.trend > 0 ? "text-success" : "text-destructive"}`}>
              {card.trend > 0 ? "+" : ""}{card.trend}%
            </span>
            <span className="text-xs text-muted-foreground">{card.trendLabel}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
