export type TransactionType = "income" | "expense";
export type TransactionStatus = "completed" | "pending" | "failed";
export type TransactionCategory =
  | "Food"
  | "Rent"
  | "Travel"
  | "Shopping"
  | "Salary"
  | "Freelance"
  | "Entertainment"
  | "Utilities"
  | "Healthcare"
  | "Investment";

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  status: TransactionStatus;
}

export type UserRole = "viewer" | "admin";

export const transactions: Transaction[] = [
  { id: "1", date: "2026-04-01", description: "Monthly Salary", amount: 8500, type: "income", category: "Salary", status: "completed" },
  { id: "2", date: "2026-04-01", description: "Apartment Rent", amount: 2200, type: "expense", category: "Rent", status: "completed" },
  { id: "3", date: "2026-03-30", description: "Grocery Shopping", amount: 185.5, type: "expense", category: "Food", status: "completed" },
  { id: "4", date: "2026-03-28", description: "Flight to Berlin", amount: 420, type: "expense", category: "Travel", status: "completed" },
  { id: "5", date: "2026-03-27", description: "Freelance Project", amount: 3200, type: "income", category: "Freelance", status: "completed" },
  { id: "6", date: "2026-03-25", description: "New Headphones", amount: 299, type: "expense", category: "Shopping", status: "completed" },
  { id: "7", date: "2026-03-23", description: "Netflix & Spotify", amount: 28.99, type: "expense", category: "Entertainment", status: "completed" },
  { id: "8", date: "2026-03-22", description: "Electricity Bill", amount: 145, type: "expense", category: "Utilities", status: "completed" },
  { id: "9", date: "2026-03-20", description: "Doctor Visit", amount: 95, type: "expense", category: "Healthcare", status: "pending" },
  { id: "10", date: "2026-03-18", description: "Stock Dividend", amount: 450, type: "income", category: "Investment", status: "completed" },
  { id: "11", date: "2026-03-15", description: "Restaurant Dinner", amount: 78.5, type: "expense", category: "Food", status: "completed" },
  { id: "12", date: "2026-03-14", description: "Uber Rides", amount: 42, type: "expense", category: "Travel", status: "completed" },
  { id: "13", date: "2026-03-12", description: "Online Course", amount: 199, type: "expense", category: "Shopping", status: "completed" },
  { id: "14", date: "2026-03-10", description: "Monthly Salary", amount: 8500, type: "income", category: "Salary", status: "completed" },
  { id: "15", date: "2026-03-08", description: "Gas Bill", amount: 68, type: "expense", category: "Utilities", status: "completed" },
  { id: "16", date: "2026-03-05", description: "Concert Tickets", amount: 150, type: "expense", category: "Entertainment", status: "failed" },
  { id: "17", date: "2026-03-03", description: "Pharmacy", amount: 35.5, type: "expense", category: "Healthcare", status: "completed" },
  { id: "18", date: "2026-03-01", description: "Freelance Project", amount: 1800, type: "income", category: "Freelance", status: "completed" },
  { id: "19", date: "2026-02-28", description: "Winter Jacket", amount: 320, type: "expense", category: "Shopping", status: "completed" },
  { id: "20", date: "2026-02-25", description: "Apartment Rent", amount: 2200, type: "expense", category: "Rent", status: "completed" },
];

export const balanceTrend = [
  { month: "Oct", balance: 18200, income: 9000, expenses: 4200 },
  { month: "Nov", balance: 21500, income: 10200, expenses: 3800 },
  { month: "Dec", balance: 19800, income: 8500, expenses: 5100 },
  { month: "Jan", balance: 22400, income: 11700, expenses: 4600 },
  { month: "Feb", balance: 24100, income: 9500, expenses: 3900 },
  { month: "Mar", balance: 26850, income: 13950, expenses: 5966 },
];

export const categoryBreakdown = [
  { name: "Food", value: 264, color: "var(--color-chart-1)" },
  { name: "Rent", value: 4400, color: "var(--color-chart-2)" },
  { name: "Travel", value: 462, color: "var(--color-chart-3)" },
  { name: "Shopping", value: 818, color: "var(--color-chart-4)" },
  { name: "Entertainment", value: 179, color: "var(--color-chart-5)" },
  { name: "Utilities", value: 213, color: "var(--color-chart-6)" },
  { name: "Healthcare", value: 130.5, color: "var(--color-success)" },
];
