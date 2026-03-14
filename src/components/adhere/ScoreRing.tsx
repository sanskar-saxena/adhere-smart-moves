import { useEffect, useState } from "react";

interface ScoreRingProps {
  score: number;
  size?: number;
  label?: string;
}

const ScoreRing = ({ score, size = 130, label = "Adherence" }: ScoreRingProps) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRendered(true), 100);
    return () => clearTimeout(t);
  }, []);

  const getColorClass = () => {
    if (score >= 80) return "text-success";
    if (score >= 50) return "text-primary";
    return "text-destructive";
  };

  const getStrokeUrl = () => {
    if (score >= 80) return "url(#scoreGradientGreen)";
    if (score >= 50) return "url(#scoreGradientTeal)";
    return "url(#scoreGradientRed)";
  };

  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <defs>
            <linearGradient id="scoreGradientTeal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(166 48% 34%)" />
              <stop offset="100%" stopColor="hsl(172 52% 28%)" />
            </linearGradient>
            <linearGradient id="scoreGradientGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(158 50% 38%)" />
              <stop offset="100%" stopColor="hsl(148 45% 32%)" />
            </linearGradient>
            <linearGradient id="scoreGradientRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(4 68% 52%)" />
              <stop offset="100%" stopColor="hsl(0 60% 45%)" />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth - 2}
            opacity={0.5}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={getStrokeUrl()}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={rendered ? offset : circumference}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-mono text-[2rem] font-bold tracking-tight ${getColorClass()}`}>
            {score}
          </span>
          <span className="text-2xs text-muted-foreground -mt-0.5">/ 100</span>
        </div>
      </div>
      <span className="section-label">{label}</span>
    </div>
  );
};

export default ScoreRing;
