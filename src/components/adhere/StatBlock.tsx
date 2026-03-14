interface StatBlockProps {
  label: string;
  value: string;
  unit?: string;
  subtitle?: string;
  variant?: "default" | "success" | "warning" | "danger";
}

const variantClasses = {
  default: "text-foreground",
  success: "text-success",
  warning: "text-warning",
  danger: "text-destructive",
};

const StatBlock = ({ label, value, unit, subtitle, variant = "default" }: StatBlockProps) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
    <div className="flex items-baseline gap-1">
      <span className={`text-2xl font-bold ${variantClasses[variant]}`}>{value}</span>
      {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
    </div>
    {subtitle && <span className="text-xs text-muted-foreground">{subtitle}</span>}
  </div>
);

export default StatBlock;
