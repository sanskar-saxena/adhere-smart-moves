import { AlertTriangle, TrendingUp, Lightbulb, Shield } from "lucide-react";

interface InsightCardProps {
  type: "warning" | "positive" | "tip" | "alert";
  title: string;
  description: string;
}

const icons = {
  warning: AlertTriangle,
  positive: TrendingUp,
  tip: Lightbulb,
  alert: Shield,
};

const styles = {
  warning: {
    bg: "bg-warning/6 border-warning/15",
    iconBg: "bg-warning/12",
    icon: "text-warning",
  },
  positive: {
    bg: "bg-success/6 border-success/15",
    iconBg: "bg-success/12",
    icon: "text-success",
  },
  tip: {
    bg: "bg-primary/6 border-primary/15",
    iconBg: "bg-primary/12",
    icon: "text-primary",
  },
  alert: {
    bg: "bg-destructive/6 border-destructive/15",
    iconBg: "bg-destructive/12",
    icon: "text-destructive",
  },
};

const InsightCard = ({ type, title, description }: InsightCardProps) => {
  const Icon = icons[type];
  const s = styles[type];
  return (
    <div className={`rounded-2xl border p-4 ${s.bg} transition-all duration-200 hover:scale-[1.005]`}>
      <div className="flex gap-3.5">
        <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${s.iconBg} flex-shrink-0`}>
          <Icon className={`h-[18px] w-[18px] ${s.icon}`} strokeWidth={2} />
        </div>
        <div className="pt-0.5">
          <h4 className="font-semibold text-foreground text-[13px] leading-snug">{title}</h4>
          <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
