import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ScanLine, Wrench, Compass, Utensils, Dumbbell } from "lucide-react";
import ScoreRing from "@/components/adhere/ScoreRing";
import StatBlock from "@/components/adhere/StatBlock";
import QuickAction from "@/components/adhere/QuickAction";
import InsightCard from "@/components/adhere/InsightCard";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4 },
  }),
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
    >
      {/* Header */}
      <motion.div variants={fadeUp} custom={0}>
        <p className="text-sm text-muted-foreground">Good evening</p>
        <h1 className="text-2xl font-bold text-foreground">Today's Plan</h1>
      </motion.div>

      {/* Score + Stats */}
      <motion.div variants={fadeUp} custom={1} className="rounded-2xl border bg-card p-6 card-shadow">
        <div className="flex items-center justify-between">
          <ScoreRing score={74} />
          <div className="flex-1 ml-6 grid grid-cols-2 gap-4">
            <StatBlock label="Calories Left" value="820" unit="cal" variant="success" />
            <StatBlock label="Protein Left" value="45" unit="g" variant="warning" />
            <StatBlock label="Meals Today" value="2" subtitle="of 4 planned" />
            <StatBlock label="Water" value="1.8" unit="L" subtitle="target: 3L" />
          </div>
        </div>
      </motion.div>

      {/* Best Next Move */}
      <motion.div variants={fadeUp} custom={2}>
        <div className="rounded-2xl bg-gradient-primary p-5 text-primary-foreground">
          <div className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-1">Best Next Move</div>
          <p className="font-semibold text-lg leading-snug">
            Have a high-protein dinner under 500 cal. Try grilled chicken salad or paneer tikka.
          </p>
          <p className="text-sm mt-2 opacity-80">You're 45g protein short. Prioritize that over calories.</p>
        </div>
      </motion.div>

      {/* Risk Alerts */}
      <motion.div variants={fadeUp} custom={3} className="space-y-3">
        <InsightCard type="warning" title="Under-protein today" description="You've had 95g of 140g target. Focus on protein in your next meal." />
        <InsightCard type="alert" title="Late-night risk" description="Based on your patterns, you tend to order late on Thursdays. Plan ahead." />
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={fadeUp} custom={4}>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-3">
          <QuickAction icon={ScanLine} label="Scan Menu" onClick={() => navigate("/app/scan")} />
          <QuickAction icon={Wrench} label="Fix My Day" onClick={() => navigate("/app/fix")} />
          <QuickAction icon={Compass} label="Nearby" onClick={() => navigate("/app/nearby")} />
          <QuickAction icon={Utensils} label="Log Meal" />
        </div>
      </motion.div>

      {/* Today's Workout */}
      <motion.div variants={fadeUp} custom={5}>
        <div className="rounded-2xl border bg-card p-5 card-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-card-foreground">Today's Workout</h3>
            </div>
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Upper Body</span>
          </div>
          <p className="text-sm text-muted-foreground">Push day — Chest, Shoulders, Triceps</p>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 rounded-lg bg-primary/10 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
              Start Workout
            </button>
            <button className="flex-1 rounded-lg bg-muted py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80">
              Skip Today
            </button>
          </div>
        </div>
      </motion.div>

      {/* AI Insight */}
      <motion.div variants={fadeUp} custom={6}>
        <InsightCard type="positive" title="3-day protein streak 🎯" description="You've hit your protein target 3 days in a row. Keep it going." />
      </motion.div>
    </motion.div>
  );
};

export default Home;
