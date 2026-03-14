import { Badge } from "@/components/ui/badge";

interface MealCardProps {
  name: string;
  restaurant?: string;
  calories: number;
  protein: number;
  price?: string;
  tags?: string[];
  rank?: number;
  confidence?: number;
  recommended?: boolean;
}

const MealCard = ({ name, restaurant, calories, protein, price, tags = [], rank, confidence, recommended }: MealCardProps) => (
  <div
    className={`group relative rounded-2xl border bg-card p-4.5 shadow-card transition-all duration-200 ease-spring hover:shadow-card-hover hover:-translate-y-0.5 ${
      recommended ? "border-primary/25 bg-gradient-card ring-1 ring-primary/8" : "border-border"
    }`}
  >
    {rank && (
      <div className={`absolute -top-2.5 -left-2.5 flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold shadow-sm ${
        rank === 1 ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground border"
      }`}>
        #{rank}
      </div>
    )}
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-card-foreground text-[15px] tracking-tight truncate">{name}</h4>
        {restaurant && <p className="text-[13px] text-muted-foreground mt-0.5">{restaurant}</p>}
        <div className="mt-3 flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-sm font-semibold text-card-foreground">{calories}</span>
            <span className="text-2xs text-muted-foreground">cal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-sm font-bold text-primary">{protein}g</span>
            <span className="text-2xs text-muted-foreground">protein</span>
          </div>
          {price && (
            <span className="font-mono text-sm text-muted-foreground">{price}</span>
          )}
        </div>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-2xs px-2 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      {confidence !== undefined && (
        <div className="flex flex-col items-center rounded-xl bg-muted/60 px-3 py-2">
          <span className="text-2xs text-muted-foreground font-medium uppercase tracking-label">Match</span>
          <span className={`font-mono text-xl font-bold ${confidence >= 80 ? "text-primary" : confidence >= 50 ? "text-warning" : "text-muted-foreground"}`}>
            {confidence}
          </span>
          <span className="text-2xs text-muted-foreground">%</span>
        </div>
      )}
    </div>
  </div>
);

export default MealCard;
