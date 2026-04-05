import { Search, ArrowUpDown, Trash2, Plus, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFinance } from "@/context/FinanceContext";
import { useState } from "react";
import type { TransactionType } from "@/lib/mock-data";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(n);
}

export function TransactionTable() {
  const {
    role, searchQuery, setSearchQuery, filterType, setFilterType,
    sortField, toggleSort, filteredTransactions, addTransaction, deleteTransaction,
  } = useFinance();
  const [showAdd, setShowAdd] = useState(false);
  const [newTx, setNewTx] = useState({ description: "", amount: "", type: "expense" as TransactionType, category: "Food" as const });

  const handleAdd = () => {
    if (!newTx.description || !newTx.amount) return;
    addTransaction({
      date: new Date().toISOString().split("T")[0],
      description: newTx.description,
      amount: parseFloat(newTx.amount),
      type: newTx.type,
      category: newTx.category,
      status: "completed",
    });
    setNewTx({ description: "", amount: "", type: "expense", category: "Food" });
    setShowAdd(false);
  };

  const filters: { label: string; value: TransactionType | "all" }[] = [
    { label: "All", value: "all" },
    { label: "Income", value: "income" },
    { label: "Expense", value: "expense" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="rounded-xl border border-border bg-card"
    >
      <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-base font-semibold text-card-foreground">Transactions</h3>
          <p className="text-xs text-muted-foreground">{filteredTransactions.length} records</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 w-44 rounded-lg border border-input bg-background pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <div className="flex rounded-lg bg-secondary p-0.5">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilterType(f.value)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all duration-200 ${
                  filterType === f.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <AnimatePresence>
            {role === "admin" && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setShowAdd(!showAdd)}
                className="flex h-8 items-center gap-1 rounded-lg bg-primary px-3 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Plus className="h-3.5 w-3.5" />
                Add
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showAdd && role === "admin" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-border"
          >
            <div className="flex flex-wrap items-end gap-2 p-4">
              <div>
                <label className="mb-1 block text-[10px] font-medium text-muted-foreground">Description</label>
                <input value={newTx.description} onChange={(e) => setNewTx({ ...newTx, description: e.target.value })} className="h-8 w-40 rounded-md border border-input bg-background px-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-medium text-muted-foreground">Amount</label>
                <input type="number" value={newTx.amount} onChange={(e) => setNewTx({ ...newTx, amount: e.target.value })} className="h-8 w-24 rounded-md border border-input bg-background px-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-medium text-muted-foreground">Type</label>
                <select value={newTx.type} onChange={(e) => setNewTx({ ...newTx, type: e.target.value as TransactionType })} className="h-8 rounded-md border border-input bg-background px-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <button onClick={handleAdd} className="h-8 rounded-md bg-success px-3 text-xs font-medium text-success-foreground">Save</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-4 py-3 font-medium text-muted-foreground">
                <button onClick={() => toggleSort("date")} className="flex items-center gap-1 hover:text-foreground transition-colors">
                  Date <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Description</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Category</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">
                <button onClick={() => toggleSort("amount")} className="flex items-center gap-1 hover:text-foreground transition-colors">
                  Amount <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Status</th>
              {role === "admin" && <th className="px-4 py-3 font-medium text-muted-foreground">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan={role === "admin" ? 6 : 5} className="px-4 py-12 text-center">
                  <FileText className="mx-auto mb-2 h-8 w-8 text-muted-foreground/40" />
                  <p className="text-sm text-muted-foreground">No transactions found</p>
                </td>
              </tr>
            ) : (
              filteredTransactions.map((tx) => (
                <motion.tr
                  key={tx.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="border-b border-border/50 transition-colors hover:bg-accent/50"
                >
                  <td className="px-4 py-3 text-muted-foreground">{new Date(tx.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</td>
                  <td className="px-4 py-3 font-medium text-card-foreground">{tx.description}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">{tx.category}</span>
                  </td>
                  <td className={`px-4 py-3 font-mono font-semibold ${tx.type === "income" ? "text-success" : "text-destructive"}`}>
                    {tx.type === "income" ? "+" : "-"}{formatCurrency(tx.amount)}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      tx.status === "completed" ? "bg-success/10 text-success" :
                      tx.status === "pending" ? "bg-warning/10 text-warning" :
                      "bg-destructive/10 text-destructive"
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                  {role === "admin" && (
                    <td className="px-4 py-3">
                      <button
                        onClick={() => deleteTransaction(tx.id)}
                        className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  )}
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
