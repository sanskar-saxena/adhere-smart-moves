import { motion } from "framer-motion";
import { SPRING_EASE } from "@/lib/motion";

interface WeeklyChartProps {
  values: number[];
  labels: string[];
  title?: string;
  subtitle?: string;
}

const WeeklyChart = ({ values, labels, title = "This Week", subtitle = "Adherence by Day" }: WeeklyChartProps) => {
  const maxVal = Math.max(...values);
  const minVal = Math.min(...values);

  return (
    <div className="rounded-2xl border bg-card p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[13px] font-semibold text-card-foreground">{title}</span>
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.08em]">{subtitle}</span>
      </div>
      <div className="flex items-end justify-between gap-2 h-28">
        {values.map((val, i) => {
          const height = (val / maxVal) * 100;
          const isLow = val === minVal;
          const color = val >= 75 ? "bg-primary" : val >= 50 ? "bg-warning" : "bg-destructive/50";
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
              <span className="font-mono text-[10px] font-semibold text-muted-foreground">{val}</span>
              <div className="w-full rounded-lg bg-muted/40 overflow-hidden relative" style={{ height: "100%" }}>
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 rounded-lg ${color}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.5, ease: SPRING_EASE }}
                />
              </div>
              <span className={`text-[10px] font-semibold ${isLow ? "text-destructive" : "text-muted-foreground"}`}>
                {labels[i]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyChart;
