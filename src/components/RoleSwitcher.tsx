import { Shield, Eye } from "lucide-react";
import { useFinance } from "@/context/FinanceContext";
import type { UserRole } from "@/lib/mock-data";

export function RoleSwitcher() {
  const { role, setRole } = useFinance();

  return (
    <div className="flex items-center gap-2 rounded-lg bg-secondary p-1">
      {(["viewer", "admin"] as UserRole[]).map((r) => (
        <button
          key={r}
          onClick={() => setRole(r)}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-all duration-200 ${
            role === r
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {r === "admin" ? <Shield className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
          {r}
        </button>
      ))}
    </div>
  );
}
