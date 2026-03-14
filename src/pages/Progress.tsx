import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, Target, Utensils, Moon, Brain } from "lucide-react";
import InsightCard from "@/components/adhere/InsightCard";

const trendData = [
  { label: "Weight", value: "78.2 kg", change: "-1.8 kg", trend: "down", period: "last 4 weeks" },
  { label: "Waist", value: "34.5 in", change: "-0.5 in", trend: "down", period: "last 4 weeks" },
  { label: "Adherence", value: "74%", change: "+8%", trend: "up", period: "vs last month" },
  { label: "Protein Avg", value: "128g", change: "+15g", trend: "up", period: "daily average" },
];

const weeklyAdherence = [65, 72, 80, 58, 85, 74, 90];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Progress = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Progress</h1>
      <p className="text-sm text-muted-foreground mt-1">Trends that matter, not just numbers.</p>
    </div>

    {/* Trend Cards */}
    <div className="grid grid-cols-2 gap-3">
      {trendData.map((item) => (
        <motion.div
          key={item.label}
          className="rounded-xl border bg-card p-4 card-shadow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{item.label}</span>
          <div className="mt-1 text-2xl font-bold text-foreground">{item.value}</div>
          <div className="mt-1 flex items-center gap-1">
            {item.trend === "down" ? (
              <TrendingDown className="h-3.5 w-3.5 text-success" />
            ) : (
              <TrendingUp className="h-3.5 w-3.5 text-success" />
            )}
            <span className="text-xs font-medium text-success">{item.change}</span>
            <span className="text-xs text-muted-foreground">{item.period}</span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Weekly Adherence Bar Chart */}
    <div className="rounded-2xl border bg-card p-5 card-shadow">
      <h3 className="font-semibold text-card-foreground text-sm mb-4">Weekly Adherence</h3>
      <div className="flex items-end justify-between gap-2 h-32">
        {weeklyAdherence.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-xs font-medium text-muted-foreground">{val}%</span>
            <motion.div
              className={`w-full rounded-t-lg ${val >= 75 ? "bg-primary" : val >= 50 ? "bg-warning" : "bg-destructive/60"}`}
              initial={{ height: 0 }}
              animate={{ height: `${val}%` }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
            />
            <span className="text-xs text-muted-foreground">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Insights */}
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">AI Insights</h3>
      <InsightCard type="warning" title="Weekends break your cut" description="Your Saturday adherence averages 52%. Pre-plan your Saturday meals to improve." />
      <InsightCard type="tip" title="Office lunches are your weak point" description="You overshoot calories by ~300 on days you eat at the office canteen. Try bringing lunch twice a week." />
      <InsightCard type="positive" title="Sleep improves your adherence" description="Days with 7+ hours of sleep show 23% better adherence. Keep prioritizing sleep." />
    </div>

    {/* Impact Breakdown */}
    <div className="rounded-2xl border bg-card p-5 card-shadow">
      <h3 className="font-semibold text-card-foreground text-sm mb-4">What's Moving the Needle</h3>
      <div className="space-y-3">
        {[
          { icon: Target, label: "Protein consistency", impact: "+18%", positive: true },
          { icon: Utensils, label: "Eating out frequency", impact: "-12%", positive: false },
          { icon: Moon, label: "Sleep quality", impact: "+9%", positive: true },
          { icon: Brain, label: "Weekend discipline", impact: "-15%", positive: false },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <span className="flex-1 text-sm text-card-foreground">{item.label}</span>
            <span className={`text-sm font-semibold ${item.positive ? "text-success" : "text-destructive"}`}>
              {item.impact}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Progress;
