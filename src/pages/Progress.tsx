import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, Target, Utensils, Moon, Brain } from "lucide-react";
import InsightCard from "@/components/adhere/InsightCard";

const trendData = [
  { label: "Weight", value: "78.2", unit: "kg", change: "-1.8 kg", trend: "down", period: "4 wks" },
  { label: "Waist", value: "34.5", unit: "in", change: "-0.5 in", trend: "down", period: "4 wks" },
  { label: "Adherence", value: "74", unit: "%", change: "+8%", trend: "up", period: "vs prev mo" },
  { label: "Protein Hit Rate", value: "71", unit: "%", change: "+12%", trend: "up", period: "of days" },
];

const weeklyAdherence = [65, 72, 80, 58, 85, 74, 90];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const maxVal = Math.max(...weeklyAdherence);

const impactItems = [
  { icon: Target, label: "Protein consistency", impact: "+18%", positive: true },
  { icon: Utensils, label: "Restaurant meals", impact: "-12%", positive: false },
  { icon: Moon, label: "Sleep above 7 hours", impact: "+9%", positive: true },
  { icon: Brain, label: "Weekend execution", impact: "-15%", positive: false },
];

const Progress = () => (
  <motion.div
    className="space-y-7"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
  >
    <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } } }}>
      <span className="section-label text-primary mb-1 block">Execution Trends</span>
      <h1 className="text-foreground">Progress</h1>
      <p className="text-[13px] text-muted-foreground mt-1">What's working, what's not, and what to change this week.</p>
    </motion.div>

    {/* Trend Cards */}
    <div className="grid grid-cols-2 gap-3">
      {trendData.map((item, i) => (
        <motion.div
          key={item.label}
          className="rounded-2xl border bg-card p-4.5 shadow-card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">{item.label}</span>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="font-mono text-[1.75rem] font-bold text-foreground tracking-tight leading-none">{item.value}</span>
            <span className="text-xs text-muted-foreground font-medium">{item.unit}</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5">
            {item.trend === "down" ? (
              <TrendingDown className="h-3.5 w-3.5 text-success" strokeWidth={2.5} />
            ) : (
              <TrendingUp className="h-3.5 w-3.5 text-success" strokeWidth={2.5} />
            )}
            <span className="text-2xs font-semibold text-success">{item.change}</span>
            <span className="text-2xs text-muted-foreground">{item.period}</span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Weekly Adherence */}
    <motion.div
      className="rounded-3xl border bg-card p-6 shadow-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-card-foreground text-[15px]">Adherence by Day</h3>
        <span className="text-2xs text-muted-foreground font-medium uppercase tracking-label">This Week</span>
      </div>
      <div className="flex items-end justify-between gap-3 h-36">
        {weeklyAdherence.map((val, i) => {
          const height = (val / maxVal) * 100;
          const color = val >= 75 ? "bg-primary" : val >= 50 ? "bg-warning" : "bg-destructive/50";
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <span className="font-mono text-2xs font-semibold text-muted-foreground">{val}</span>
              <div className="w-full relative rounded-xl bg-muted/50 overflow-hidden" style={{ height: '100%' }}>
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 rounded-xl ${color}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className={`text-2xs font-medium ${val === Math.min(...weeklyAdherence) ? "text-destructive" : "text-muted-foreground"}`}>{days[i]}</span>
            </div>
          );
        })}
      </div>
    </motion.div>

    {/* AI Insights */}
    <div className="space-y-3">
      <h3 className="section-label">AI Insights</h3>
      <InsightCard type="warning" title="Weekends break your cut" description="Saturday adherence averages 52%. Pre-plan your Saturday meals." />
      <InsightCard type="tip" title="Office lunches are your weak point" description="You overshoot by ~300 cal on canteen days. Try bringing lunch twice a week." />
      <InsightCard type="positive" title="Sleep improves your adherence" description="7+ hours of sleep → 23% better adherence. Keep prioritizing sleep." />
    </div>

    {/* Impact Breakdown */}
    <motion.div
      className="rounded-3xl border bg-card p-6 shadow-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className="font-semibold text-card-foreground text-[15px] mb-5">What's Moving the Needle</h3>
      <div className="space-y-4">
        {impactItems.map((item) => (
          <div key={item.label} className="flex items-center gap-3.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted/70">
              <item.icon className="h-[18px] w-[18px] text-muted-foreground" strokeWidth={1.8} />
            </div>
            <span className="flex-1 text-[13px] font-medium text-card-foreground">{item.label}</span>
            <span className={`font-mono text-[13px] font-bold ${item.positive ? "text-success" : "text-destructive"}`}>
              {item.impact}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

export default Progress;
