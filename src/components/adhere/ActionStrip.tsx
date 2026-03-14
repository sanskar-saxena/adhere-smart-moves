import { type LucideIcon } from "lucide-react";

export interface ActionItem {
  icon: LucideIcon;
  label: string;
  sublabel: string;
  onClick: () => void;
}

interface ActionStripProps {
  items: ActionItem[];
}

/** Horizontally-scrollable quick action strip for mobile-first layouts */
const ActionStrip = ({ items }: ActionStripProps) => (
  <div className="flex gap-2.5 overflow-x-auto -mx-5 px-5 pb-1 scrollbar-hide">
    {items.map((action) => (
      <button
        key={action.label}
        onClick={action.onClick}
        className="flex-shrink-0 flex items-center gap-3 rounded-2xl border bg-card p-3.5 pr-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 active:scale-[0.97]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8">
          <action.icon className="h-[18px] w-[18px] text-primary" strokeWidth={1.8} />
        </div>
        <div className="text-left">
          <span className="text-[13px] font-semibold text-card-foreground block leading-tight">{action.label}</span>
          <span className="text-[11px] text-muted-foreground">{action.sublabel}</span>
        </div>
      </button>
    ))}
  </div>
);

export default ActionStrip;
