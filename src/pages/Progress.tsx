import { motion } from "framer-motion";
import { Target, Utensils, Moon, Brain } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import PageHeader from "@/components/adhere/PageHeader";
import TrendCard from "@/components/adhere/TrendCard";
import WeeklyChart from "@/components/adhere/WeeklyChart";
import AlertBanner from "@/components/adhere/AlertBanner";
import ImpactRow from "@/components/adhere/ImpactRow";

const trendData = [
  { label: "Weight", value: "78.2", unit: "kg", change: "-1.8 kg", trend: "down" as const, period: "4 wks" },
  { label: "Waist", value: "34.5", unit: "in", change: "-0.5 in", trend: "down" as const, period: "4 wks" },
  { label: "Adherence", value: "74", unit: "%", change: "+8%", trend: "up" as const, period: "vs prev mo" },
  { label: "Protein Hit Rate", value: "71", unit: "%", change: "+12%", trend: "up" as const, period: "of days" },
];

const weeklyValues = [65, 72, 80, 58, 85, 74, 90];
const weeklyLabels = ["M", "T", "W", "T", "F", "S", "S"];

const insights = [
  { emoji: "📉", title: "Saturdays cost you the most", desc: "52% avg adherence. Responsible for 40% of your weekly surplus. Pre-decide meals by Friday." },
  { emoji: "🏢", title: "Office canteen adds +300 cal", desc: "You exceed targets on canteen days. Two packed lunches per week closes this gap." },
  { emoji: "😴", title: "Sleep is your biggest lever", desc: "7+ hour nights → 23% higher adherence and 2× protein consistency." },
];

const impactItems = [
  { icon: Target, label: "Protein consistency", impact: "+18%", positive: true },
  { icon: Utensils, label: "Restaurant meals", impact: "-12%", positive: false },
  { icon: Moon, label: "Sleep above 7 hours", impact: "+9%", positive: true },
  { icon: Brain, label: "Weekend execution", impact: "-15%", positive: false },
];

const Progress = () => (
  <motion.div className="space-y-5" initial="hidden" animate="visible" variants={staggerContainer}>
    <PageHeader eyebrow="Execution Trends" title="What's Working" />

    {/* Trend Cards */}
    <div className="grid grid-cols-2 gap-2.5">
      {trendData.map((t, i) => (
        <motion.div key={t.label} variants={fadeUpItem}>
          <TrendCard {...t} />
        </motion.div>
      ))}
    </div>

    {/* Weekly Chart */}
    <motion.div variants={fadeUpItem}>
      <WeeklyChart values={weeklyValues} labels={weeklyLabels} />
    </motion.div>

    {/* AI Pattern Insights */}
    <motion.div variants={fadeUpItem} className="space-y-2">
      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground">What Adhere Sees</p>
      {insights.map((insight, i) => (
        <AlertBanner key={i} variant="info" emoji={insight.emoji} title={insight.title} description={insight.desc} />
      ))}
    </motion.div>

    {/* Impact Breakdown */}
    <motion.div variants={fadeUpItem} className="rounded-2xl border bg-card p-5 shadow-card">
      <p className="text-[13px] font-semibold text-card-foreground mb-4">Impact on Adherence Score</p>
      <div className="space-y-3.5">
        {impactItems.map((imp) => (
          <ImpactRow key={imp.label} {...imp} />
        ))}
      </div>
    </motion.div>
  </motion.div>
);

export default Progress;
