import { type LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";

export interface SettingItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface SettingsGroupProps {
  title: string;
  items: SettingItem[];
  onItemClick?: (label: string) => void;
}

const SettingsGroup = ({ title, items, onItemClick }: SettingsGroupProps) => (
  <div>
    <h2 className="section-label mb-3">{title}</h2>
    <div className="rounded-2xl border bg-card shadow-card overflow-hidden divide-y divide-border">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => onItemClick?.(item.label)}
          className="flex w-full items-center gap-3.5 p-4 text-left hover:bg-muted/40 transition-colors duration-200 group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted/70 transition-colors group-hover:bg-muted">
            <item.icon className="h-[18px] w-[18px] text-muted-foreground" strokeWidth={1.8} />
          </div>
          <span className="flex-1 text-[13px] font-medium text-card-foreground">{item.label}</span>
          <span className="text-[13px] text-muted-foreground">{item.value}</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
        </button>
      ))}
    </div>
  </div>
);

export default SettingsGroup;
