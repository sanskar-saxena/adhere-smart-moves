import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ScanLine, Wrench, Compass, Utensils, Dumbbell, ArrowRight } from "lucide-react";
import ScoreRing from "@/components/adhere/ScoreRing";
import StatBlock from "@/components/adhere/StatBlock";
import QuickAction from "@/components/adhere/QuickAction";
import InsightCard from "@/components/adhere/InsightCard";

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const Home = () => {
  const navigate = useNavigate();

  const timeGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <motion.div
      className="space-y-7"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* Header */}
      <motion.div variants={item}>
        <p className="text-[13px] text-muted-foreground font-medium">{timeGreeting()}</p>
        <h1 className="text-foreground mt-0.5">Your Adherence Dashboard</h1>
      </motion.div>

      {/* Score + Stats */}
      <motion.div variants={item} className="rounded-3xl border bg-card p-6 shadow-card">
        <div className="flex items-center gap-6">
          <ScoreRing score={74} />
          <div className="flex-1 grid grid-cols-2 gap-5">
            <StatBlock label="Calories Left" value="820" unit="cal" variant="success" />
            <StatBlock label="Protein Left" value="45" unit="g" variant="warning" />
            <StatBlock label="Meals Today" value="2" subtitle="of 4 planned" />
            <StatBlock label="Water" value="1.8" unit="L" subtitle="target: 3L" />
          </div>
        </div>
      </motion.div>

      {/* Best Next Move */}
      <motion.div variants={item}>
        <div className="rounded-3xl bg-gradient-primary p-6 text-primary-foreground shadow-lg shadow-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/2" />
          <span className="section-label !text-primary-foreground/60 mb-2 block">Best Next Move</span>
          <p className="font-semibold text-lg leading-snug tracking-tight">
            Have a high-protein dinner under 500 cal.
          </p>
          <p className="text-[13px] mt-2.5 opacity-75 leading-relaxed">
            Try grilled chicken salad or paneer tikka. You're 45g protein short — prioritize that over calories tonight.
          </p>
          <button className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold opacity-90 hover:opacity-100 transition-opacity">
            See options <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>

      {/* Risk Alerts */}
      <motion.div variants={item} className="space-y-3">
        <InsightCard type="warning" title="Under-protein today" description="You've had 95g of 140g target. Focus on protein in your next meal." />
        <InsightCard type="alert" title="Late-night risk" description="Based on your patterns, you tend to order late on Thursdays. Plan ahead." />
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={item}>
        <h2 className="section-label mb-3.5">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-3">
          <QuickAction icon={ScanLine} label="Scan Menu" onClick={() => navigate("/app/scan")} />
          <QuickAction icon={Wrench} label="Fix My Day" onClick={() => navigate("/app/fix")} />
          <QuickAction icon={Compass} label="Nearby" onClick={() => navigate("/app/nearby")} />
          <QuickAction icon={Utensils} label="Log Meal" />
        </div>
      </motion.div>

      {/* Today's Workout */}
      <motion.div variants={item}>
        <div className="rounded-3xl border bg-card p-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/8">
                <Dumbbell className="h-[18px] w-[18px] text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="font-semibold text-card-foreground text-[15px]">Today's Workout</h3>
            </div>
            <span className="text-2xs font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-full uppercase tracking-label">Upper Body</span>
          </div>
          <p className="text-[13px] text-muted-foreground">Push day — Chest, Shoulders, Triceps</p>
          <div className="mt-4 flex gap-2.5">
            <button className="flex-1 rounded-xl bg-primary/8 py-2.5 text-[13px] font-semibold text-primary transition-all duration-200 hover:bg-primary/14 active:scale-[0.97]">
              Start Workout
            </button>
            <button className="flex-1 rounded-xl bg-muted py-2.5 text-[13px] font-semibold text-muted-foreground transition-all duration-200 hover:bg-muted/70 active:scale-[0.97]">
              Skip Today
            </button>
          </div>
        </div>
      </motion.div>

      {/* AI Insight */}
      <motion.div variants={item}>
        <InsightCard type="positive" title="3-day protein streak 🎯" description="You've hit your protein target 3 days in a row. Keep it going." />
      </motion.div>
    </motion.div>
  );
};

export default Home;
