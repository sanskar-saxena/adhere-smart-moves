import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

interface HeroCardProps {
  /** Small uppercase eyebrow with icon */
  eyebrowIcon?: LucideIcon;
  eyebrow: string;
  /** Main headline */
  headline: string;
  /** Supporting paragraph */
  body: string;
  /** Action buttons rendered inside the card */
  actions?: ReactNode;
}

const HeroCard = ({ eyebrowIcon: Icon, eyebrow, headline, body, actions }: HeroCardProps) => (
  <div className="rounded-3xl bg-gradient-primary p-6 pb-7 text-primary-foreground shadow-lg shadow-primary/10 relative overflow-hidden">
    {/* Decorative orbs */}
    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary-foreground/4 -translate-y-1/2 translate-x-1/3" />
    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-primary-foreground/3 translate-y-1/2 -translate-x-1/3" />

    <div className="relative">
      <div className="flex items-center gap-2 mb-3">
        {Icon && <Icon className="h-4 w-4 text-primary-foreground/70" strokeWidth={2.5} />}
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary-foreground/60">
          {eyebrow}
        </span>
      </div>

      <p className="font-bold text-[1.25rem] leading-snug tracking-[-0.015em]">{headline}</p>
      <p className="text-[13px] mt-2 opacity-75 leading-relaxed">{body}</p>

      {actions && <div className="mt-5 flex gap-2.5">{actions}</div>}
    </div>
  </div>
);

export default HeroCard;
