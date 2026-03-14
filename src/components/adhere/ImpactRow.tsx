import { type LucideIcon } from "lucide-react";

interface ImpactRowProps {
  icon: LucideIcon;
  label: string;
  impact: string;
  positive: boolean;
}

const ImpactRow = ({ icon: Icon, label, impact, positive }: ImpactRowProps) => (
  <div className="flex items-center gap-3">
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60">
      <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.8} />
    </div>
    <span className="flex-1 text-[13px] text-card-foreground">{label}</span>
    <span className={`font-mono text-[13px] font-bold ${positive ? "text-success" : "text-destructive"}`}>
      {impact}
    </span>
  </div>
);

export default ImpactRow;
