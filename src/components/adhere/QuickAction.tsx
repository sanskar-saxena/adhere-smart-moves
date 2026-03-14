import { LucideIcon } from "lucide-react";

interface QuickActionProps {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
  onClick?: () => void;
}

const QuickAction = ({ icon: Icon, label, sublabel, onClick }: QuickActionProps) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-2 rounded-2xl border bg-card p-4 card-shadow transition-all hover:card-shadow-hover hover:scale-[1.02] active:scale-[0.98] min-w-0"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <span className="text-xs font-semibold text-card-foreground text-center leading-tight">{label}</span>
    {sublabel && <span className="text-[10px] text-muted-foreground">{sublabel}</span>}
  </button>
);

export default QuickAction;
