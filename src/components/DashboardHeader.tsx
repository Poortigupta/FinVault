import { LayoutDashboard, LogOut, User } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "@/context/AuthContext";

export function DashboardHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="flex flex-col gap-4 border-b border-border bg-card/80 px-4 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <LayoutDashboard className="h-4.5 w-4.5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold tracking-tight text-foreground">FinVault</h1>
            <p className="text-[11px] text-muted-foreground">Personal Finance Dashboard</p>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        {user && (
          <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5">
            <User className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs font-medium text-secondary-foreground">{user.email.split("@")[0]}</span>
            <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase ${
              user.role === "admin" ? "bg-primary/15 text-primary" : "bg-chart-2/15 text-chart-2"
            }`}>
              {user.role}
            </span>
          </div>
        )}
        <button
          onClick={logout}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
          title="Sign out"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
