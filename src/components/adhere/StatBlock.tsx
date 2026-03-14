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
  <div className="flex flex-col gap-1">
    <span className="section-label">{label}</span>
    <div className="flex items-baseline gap-1">
      <span className={`font-mono text-[1.5rem] font-bold tracking-tight leading-none ${variantClasses[variant]}`}>
        {value}
      </span>
      {unit && <span className="text-xs font-medium text-muted-foreground">{unit}</span>}
    </div>
    {subtitle && <span className="text-2xs text-muted-foreground">{subtitle}</span>}
  </div>
);

export default StatBlock;
