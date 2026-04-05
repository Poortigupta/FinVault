import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { BarChart3, Shield, CreditCard, TrendingUp, ArrowRight, Sparkles, PieChart, Lock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const features = [
  {
    icon: BarChart3,
    title: "Balance Tracking",
    description: "Monitor your total balance, income, and expenses with real-time summary cards and trend indicators.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: PieChart,
    title: "Spending Analytics",
    description: "Visualize spending patterns with interactive charts — area trends and category breakdowns at a glance.",
    color: "text-chart-2",
    bg: "bg-chart-2/10",
  },
  {
    icon: CreditCard,
    title: "Transaction Management",
    description: "Search, filter, and sort transactions. Admins can add and delete entries with smooth animations.",
    color: "text-chart-3",
    bg: "bg-chart-3/10",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Admin and Viewer roles with different permissions. The UI adapts dynamically based on your access level.",
    color: "text-chart-4",
    bg: "bg-chart-4/10",
  },
  {
    icon: TrendingUp,
    title: "Financial Insights",
    description: "Smart analytics cards showing top spending categories, savings rate, and unusual expense patterns.",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: Lock,
    title: "Dark Mode & Themes",
    description: "Full dark mode support with smooth transitions. Your preference persists across sessions.",
    color: "text-chart-5",
    bg: "bg-chart-5/10",
  },
];

function LandingPage() {
  const { isAuthenticated } = useAuth();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="flex w-full items-center px-3 py-4 sm:px-6 lg:px-8">
          <div className="-ml-1 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">FinVault</span>
          </div>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              to="/login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-4"
            >
              Sign In
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:px-4"
            >
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            {isAuthenticated && (
              <Link
                to="/dashboard"
                className="hidden items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent sm:inline-flex"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)/0.08,transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div
            className={`mx-auto max-w-2xl text-center transition-all duration-600 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" />
              Your personal finance companion
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Take control of your{" "}
              <span className="bg-gradient-to-r from-primary to-chart-5 bg-clip-text text-transparent">
                finances
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Track spending, analyze trends, and gain insights — all in one beautiful, role-based dashboard designed for clarity.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to={isAuthenticated ? "/dashboard" : "/register"}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
              >
                {isAuthenticated ? "Go to Dashboard" : "Create Free Account"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Sign in to your account
                </Link>
              )}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Demo accounts: <span className="font-mono text-foreground/70">admin@finvault.com</span> / <span className="font-mono text-foreground/70">viewer@finvault.com</span> — password: <span className="font-mono text-foreground/70">password</span>
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-accent/30 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className={`mb-12 text-center transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Everything you need to manage money
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Powerful features wrapped in a clean, intuitive interface
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`group rounded-xl border border-border bg-card p-6 transition-all duration-450 hover:-translate-y-1 hover:shadow-lg ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: mounted ? `${i * 80}ms` : "0ms" }}
              >
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${f.bg} transition-transform duration-200 group-hover:scale-110`}>
                  <f.icon className={`h-5 w-5 ${f.color}`} />
                </div>
                <h3 className="font-display text-base font-semibold text-card-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xs text-muted-foreground">
            © 2026 FinVault. Built with care for your financial clarity.
          </p>
        </div>
      </footer>
    </div>
  );
}
