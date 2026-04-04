import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { transactions as initialTransactions, type Transaction, type UserRole, type TransactionType } from "@/lib/mock-data";

interface FinanceState {
  transactions: Transaction[];
  role: UserRole;
  searchQuery: string;
  filterType: TransactionType | "all";
  sortField: "date" | "amount";
  sortDirection: "asc" | "desc";
  
}

interface FinanceContextValue extends FinanceState {
  setRole: (role: UserRole) => void;
  setSearchQuery: (q: string) => void;
  setFilterType: (t: TransactionType | "all") => void;
  toggleSort: (field: "date" | "amount") => void;
  
  addTransaction: (t: Omit<Transaction, "id">) => void;
  deleteTransaction: (id: string) => void;
  filteredTransactions: Transaction[];
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
  savings: number;
}

const FinanceContext = createContext<FinanceContextValue | null>(null);

export function FinanceProvider({ children, initialRole = "admin" }: { children: ReactNode; initialRole?: UserRole }) {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [role, setRole] = useState<UserRole>(initialRole);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<TransactionType | "all">("all");
  const [sortField, setSortField] = useState<"date" | "amount">("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const toggleSort = useCallback((field: "date" | "amount") => {
    setSortField((prev) => {
      if (prev === field) {
        setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
        return prev;
      }
      setSortDirection("desc");
      return field;
    });
  }, []);

  const addTransaction = useCallback((t: Omit<Transaction, "id">) => {
    setTransactions((prev) => [{ ...t, id: crypto.randomUUID() }, ...prev]);
  }, []);

  const deleteTransaction = useCallback((id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const filteredTransactions = transactions
    .filter((t) => {
      if (filterType !== "all" && t.type !== filterType) return false;
      if (searchQuery && !t.category.toLowerCase().includes(searchQuery.toLowerCase()) && !t.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      const mul = sortDirection === "asc" ? 1 : -1;
      if (sortField === "date") return mul * (new Date(a.date).getTime() - new Date(b.date).getTime());
      return mul * (a.amount - b.amount);
    });

  const totalIncome = transactions.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const totalExpenses = transactions.filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0);
  const totalBalance = 26850;
  const savings = totalIncome - totalExpenses;

  return (
    <FinanceContext.Provider
      value={{
        transactions, role, searchQuery, filterType, sortField, sortDirection,
        setRole, setSearchQuery, setFilterType, toggleSort,
        addTransaction, deleteTransaction, filteredTransactions,
        totalBalance, totalIncome, totalExpenses, savings,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinance() {
  const ctx = useContext(FinanceContext);
  if (!ctx) throw new Error("useFinance must be used within FinanceProvider");
  return ctx;
}
