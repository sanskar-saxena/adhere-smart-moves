import { type ReactNode } from "react";

type AlertVariant = "warning" | "danger" | "success" | "info";

interface AlertBannerProps {
  variant: AlertVariant;
  emoji?: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const variantStyles: Record<AlertVariant, string> = {
  warning: "border-warning/15 bg-warning/5 hover:bg-warning/8",
  danger: "border-destructive/10 bg-destructive/4 hover:bg-destructive/7",
  success: "border-success/12 bg-success/4 hover:bg-success/7",
  info: "border-primary/10 bg-primary/4 hover:bg-primary/7",
};

const AlertBanner = ({ variant, emoji, title, description, onClick }: AlertBannerProps) => {
  const Component = onClick ? "button" : "div";
  return (
    <Component
      onClick={onClick}
      className={`w-full flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 active:scale-[0.99] ${variantStyles[variant]}`}
    >
      {emoji && <span className="text-lg mt-0.5">{emoji}</span>}
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold text-foreground leading-snug">{title}</p>
        <p className="text-[12px] text-muted-foreground mt-0.5 leading-relaxed">{description}</p>
      </div>
    </Component>
  );
};

export default AlertBanner;
