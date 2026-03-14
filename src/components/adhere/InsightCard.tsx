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

const bgClasses = {
  warning: "bg-warning/10 border-warning/20",
  positive: "bg-success/10 border-success/20",
  tip: "bg-primary/10 border-primary/20",
  alert: "bg-destructive/10 border-destructive/20",
};

const iconClasses = {
  warning: "text-warning",
  positive: "text-success",
  tip: "text-primary",
  alert: "text-destructive",
};

const InsightCard = ({ type, title, description }: InsightCardProps) => {
  const Icon = icons[type];
  return (
    <div className={`rounded-xl border p-4 ${bgClasses[type]}`}>
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${iconClasses[type]}`} />
        <div>
          <h4 className="font-semibold text-card-foreground text-sm">{title}</h4>
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
