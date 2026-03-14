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
  <div className={`relative rounded-xl border bg-card p-4 card-shadow transition-all hover:card-shadow-hover ${recommended ? "border-primary/30 bg-gradient-card" : "border-border"}`}>
    {rank && (
      <div className="absolute -top-2 -left-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
        {rank}
      </div>
    )}
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-card-foreground truncate">{name}</h4>
        {restaurant && <p className="text-sm text-muted-foreground">{restaurant}</p>}
        <div className="mt-2 flex items-center gap-3 text-sm">
          <span className="font-medium text-card-foreground">{calories} cal</span>
          <span className="font-semibold text-primary">{protein}g protein</span>
          {price && <span className="text-muted-foreground">{price}</span>}
        </div>
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-medium">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      {confidence !== undefined && (
        <div className="flex flex-col items-center">
          <div className="text-xs text-muted-foreground">Match</div>
          <div className="text-lg font-bold text-primary">{confidence}%</div>
        </div>
      )}
    </div>
  </div>
);

export default MealCard;
