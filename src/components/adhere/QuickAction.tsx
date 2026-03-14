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
    className="group flex flex-col items-center gap-2.5 rounded-2xl border bg-card p-4 shadow-card transition-all duration-200 ease-spring hover:shadow-card-hover hover:-translate-y-0.5 active:scale-[0.96] min-w-0"
  >
    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-primary/8 transition-colors duration-200 group-hover:bg-primary/14">
      <Icon className="h-[22px] w-[22px] text-primary transition-transform duration-200 group-hover:scale-110" strokeWidth={1.8} />
    </div>
    <span className="text-[11px] font-semibold text-card-foreground text-center leading-tight tracking-tight">{label}</span>
    {sublabel && <span className="text-2xs text-muted-foreground">{sublabel}</span>}
  </button>
);

export default QuickAction;
