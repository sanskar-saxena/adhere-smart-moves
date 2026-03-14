import { TrendingDown, TrendingUp } from "lucide-react";

interface TrendCardProps {
  label: string;
  value: string;
  unit: string;
  change: string;
  /** "up" means the trend direction is upward; "down" means downward */
  trend: "up" | "down";
  period: string;
}

const TrendCard = ({ label, value, unit, change, trend, period }: TrendCardProps) => (
  <div className="rounded-2xl border bg-card p-4 shadow-card">
    <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{label}</span>
    <div className="mt-1.5 flex items-baseline gap-1">
      <span className="font-mono text-[1.5rem] font-bold text-foreground tracking-tight leading-none">{value}</span>
      <span className="text-[11px] text-muted-foreground">{unit}</span>
    </div>
    <div className="mt-1.5 flex items-center gap-1">
      {trend === "down" ? (
        <TrendingDown className="h-3 w-3 text-success" strokeWidth={2.5} />
      ) : (
        <TrendingUp className="h-3 w-3 text-success" strokeWidth={2.5} />
      )}
      <span className="text-[11px] font-semibold text-success">{change}</span>
      <span className="text-[10px] text-muted-foreground">{period}</span>
    </div>
  </div>
);

export default TrendCard;
