import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, Target, Utensils, Moon, Brain } from "lucide-react";

const trendData = [
  { label: "Weight", value: "78.2", unit: "kg", change: "-1.8 kg", trend: "down", period: "4 wks" },
  { label: "Waist", value: "34.5", unit: "in", change: "-0.5 in", trend: "down", period: "4 wks" },
  { label: "Adherence", value: "74", unit: "%", change: "+8%", trend: "up", period: "vs prev mo" },
  { label: "Protein Hit Rate", value: "71", unit: "%", change: "+12%", trend: "up", period: "of days" },
];

const weeklyAdherence = [65, 72, 80, 58, 85, 74, 90];
const days = ["M", "T", "W", "T", "F", "S", "S"];
const maxVal = Math.max(...weeklyAdherence);

const impactItems = [
  { icon: Target, label: "Protein consistency", impact: "+18%", positive: true },
  { icon: Utensils, label: "Restaurant meals", impact: "-12%", positive: false },
  { icon: Moon, label: "Sleep above 7 hours", impact: "+9%", positive: true },
  { icon: Brain, label: "Weekend execution", impact: "-15%", positive: false },
];

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const Progress = () => (
  <motion.div
    className="space-y-5"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
  >
    <motion.div variants={item}>
      <p className="text-[13px] text-muted-foreground font-medium">Execution Trends</p>
      <h1 className="text-foreground mt-0.5">What's Working</h1>
    </motion.div>

    {/* Trend Cards */}
    <div className="grid grid-cols-2 gap-2.5">
      {trendData.map((t, i) => (
        <motion.div
          key={t.label}
          className="rounded-2xl border bg-card p-4 shadow-card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{t.label}</span>
          <div className="mt-1.5 flex items-baseline gap-1">
            <span className="font-mono text-[1.5rem] font-bold text-foreground tracking-tight leading-none">{t.value}</span>
            <span className="text-[11px] text-muted-foreground">{t.unit}</span>
          </div>
          <div className="mt-1.5 flex items-center gap-1">
            {t.trend === "down" ? (
              <TrendingDown className="h-3 w-3 text-success" strokeWidth={2.5} />
            ) : (
              <TrendingUp className="h-3 w-3 text-success" strokeWidth={2.5} />
            )}
            <span className="text-[11px] font-semibold text-success">{t.change}</span>
            <span className="text-[10px] text-muted-foreground">{t.period}</span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Weekly Adherence */}
    <motion.div variants={item} className="rounded-2xl border bg-card p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[13px] font-semibold text-card-foreground">This Week</span>
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.08em]">Adherence by Day</span>
      </div>
      <div className="flex items-end justify-between gap-2 h-28">
        {weeklyAdherence.map((val, i) => {
          const height = (val / maxVal) * 100;
          const isLow = val === Math.min(...weeklyAdherence);
          const color = val >= 75 ? "bg-primary" : val >= 50 ? "bg-warning" : "bg-destructive/50";
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
              <span className="font-mono text-[10px] font-semibold text-muted-foreground">{val}</span>
              <div className="w-full rounded-lg bg-muted/40 overflow-hidden relative" style={{ height: '100%' }}>
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 rounded-lg ${color}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className={`text-[10px] font-semibold ${isLow ? "text-destructive" : "text-muted-foreground"}`}>{days[i]}</span>
            </div>
          );
        })}
      </div>
    </motion.div>

    {/* AI Pattern Insights */}
    <motion.div variants={item} className="space-y-2">
      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground">What Adhere Sees</p>
      {[
        { emoji: "📉", title: "Saturdays cost you the most", desc: "52% avg adherence. Responsible for 40% of your weekly surplus. Pre-decide meals by Friday." },
        { emoji: "🏢", title: "Office canteen adds +300 cal", desc: "You exceed targets on canteen days. Two packed lunches per week closes this gap." },
        { emoji: "😴", title: "Sleep is your biggest lever", desc: "7+ hour nights → 23% higher adherence and 2× protein consistency." },
      ].map((insight, i) => (
        <motion.div
          key={i}
          className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-card"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-lg mt-0.5">{insight.emoji}</span>
          <div>
            <p className="text-[13px] font-semibold text-card-foreground leading-snug">{insight.title}</p>
            <p className="text-[12px] text-muted-foreground mt-0.5 leading-relaxed">{insight.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Impact Breakdown */}
    <motion.div variants={item} className="rounded-2xl border bg-card p-5 shadow-card">
      <p className="text-[13px] font-semibold text-card-foreground mb-4">Impact on Adherence Score</p>
      <div className="space-y-3.5">
        {impactItems.map((imp) => (
          <div key={imp.label} className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60">
              <imp.icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.8} />
            </div>
            <span className="flex-1 text-[13px] text-card-foreground">{imp.label}</span>
            <span className={`font-mono text-[13px] font-bold ${imp.positive ? "text-success" : "text-destructive"}`}>
              {imp.impact}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

export default Progress;
