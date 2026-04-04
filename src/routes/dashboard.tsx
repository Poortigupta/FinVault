import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { FinanceProvider } from "@/context/FinanceContext";
import { DashboardHeader } from "@/components/DashboardHeader";
import { SummaryCards } from "@/components/SummaryCards";
import { BalanceChart } from "@/components/BalanceChart";
import { CategoryChart } from "@/components/CategoryChart";
import { TransactionTable } from "@/components/TransactionTable";
import { InsightsPanel } from "@/components/InsightsPanel";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) return null;

  return (
    <FinanceProvider initialRole={user.role}>
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
          <SummaryCards />
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <BalanceChart />
            </div>
            <div className="lg:col-span-2">
              <CategoryChart />
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TransactionTable />
            </div>
            <div>
              <InsightsPanel />
            </div>
          </div>
        </main>
      </div>
    </FinanceProvider>
  );
}
