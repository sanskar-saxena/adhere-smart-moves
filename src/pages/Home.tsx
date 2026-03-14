import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ScanLine, Wrench, Compass, ArrowRight, ChevronDown, ChevronUp, Zap } from "lucide-react";
import ScoreRing from "@/components/adhere/ScoreRing";

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const Home = () => {
  const navigate = useNavigate();
  const [statsOpen, setStatsOpen] = useState(false);

  const timeGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <motion.div
      className="space-y-5"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* Greeting — minimal, contextual */}
      <motion.div variants={item} className="flex items-center justify-between">
        <div>
          <p className="text-[13px] text-muted-foreground font-medium">{timeGreeting()}, Arjun</p>
          <p className="text-[12px] text-muted-foreground/70 mt-0.5">Thursday · 820 cal left · 45g protein gap</p>
        </div>
        <ScoreRing score={74} size={52} />
      </motion.div>

      {/* === BEST NEXT MOVE — the hero === */}
      <motion.div variants={item}>
        <div className="rounded-3xl bg-gradient-primary p-6 pb-7 text-primary-foreground shadow-lg shadow-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary-foreground/4 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-primary-foreground/3 translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-primary-foreground/70" strokeWidth={2.5} />
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary-foreground/60">Your Best Next Move</span>
            </div>
            
            <p className="font-bold text-[1.25rem] leading-snug tracking-[-0.015em]">
              High-protein dinner, under 500 cal.
            </p>
            <p className="text-[13px] mt-2 opacity-75 leading-relaxed">
              45g short on protein with 820 cal left. Grilled chicken or paneer tikka from anywhere nearby closes the gap.
            </p>

            <div className="mt-5 flex gap-2.5">
              <button
                onClick={() => navigate("/app/nearby")}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary-foreground/15 backdrop-blur-sm py-2.5 text-[13px] font-semibold hover:bg-primary-foreground/25 transition-colors duration-200 active:scale-[0.97]"
              >
                Find options <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => navigate("/app/scan")}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary-foreground/10 backdrop-blur-sm px-4 py-2.5 text-[13px] font-semibold hover:bg-primary-foreground/20 transition-colors duration-200 active:scale-[0.97]"
              >
                <ScanLine className="h-3.5 w-3.5" /> Scan
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* === RISK ALERTS — contextual warnings === */}
      <motion.div variants={item} className="space-y-2">
        <button className="w-full flex items-start gap-3 rounded-2xl border border-warning/15 bg-warning/5 p-4 text-left transition-all duration-200 hover:bg-warning/8 active:scale-[0.99]">
          <span className="text-lg mt-0.5">⚠️</span>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-foreground leading-snug">Thursday night pattern detected</p>
            <p className="text-[12px] text-muted-foreground mt-0.5 leading-relaxed">You've ordered delivery past 10 PM on 3 of the last 4 Thursdays. Decide dinner now.</p>
          </div>
        </button>
        <button className="w-full flex items-start gap-3 rounded-2xl border border-destructive/10 bg-destructive/4 p-4 text-left transition-all duration-200 hover:bg-destructive/7 active:scale-[0.99]">
          <span className="text-lg mt-0.5">🥩</span>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-foreground leading-snug">Protein gap widening</p>
            <p className="text-[12px] text-muted-foreground mt-0.5 leading-relaxed">95g of 140g consumed. Your next meal needs to be protein-first.</p>
          </div>
        </button>
      </motion.div>

      {/* === QUICK ACTIONS — contextual, not a grid === */}
      <motion.div variants={item} className="flex gap-2.5 overflow-x-auto -mx-5 px-5 pb-1 scrollbar-hide">
        {[
          { icon: Wrench, label: "Recover My Day", sublabel: "Went off-plan?", onClick: () => navigate("/app/fix") },
          { icon: ScanLine, label: "Scan a Menu", sublabel: "Get ranked options", onClick: () => navigate("/app/scan") },
          { icon: Compass, label: "Nearby Protein", sublabel: "Under ₹200", onClick: () => navigate("/app/nearby") },
        ].map((action) => (
          <button
            key={action.label}
            onClick={action.onClick}
            className="flex-shrink-0 flex items-center gap-3 rounded-2xl border bg-card p-3.5 pr-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 active:scale-[0.97]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8">
              <action.icon className="h-[18px] w-[18px] text-primary" strokeWidth={1.8} />
            </div>
            <div className="text-left">
              <span className="text-[13px] font-semibold text-card-foreground block leading-tight">{action.label}</span>
              <span className="text-[11px] text-muted-foreground">{action.sublabel}</span>
            </div>
          </button>
        ))}
      </motion.div>

      {/* === COLLAPSIBLE DAILY STATS — secondary, not hero === */}
      <motion.div variants={item}>
        <button
          onClick={() => setStatsOpen(!statsOpen)}
          className="w-full flex items-center justify-between rounded-2xl border bg-card px-4 py-3 shadow-card transition-all duration-200 hover:shadow-card-hover"
        >
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-semibold text-card-foreground">Today's Numbers</span>
            <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
              <span>820 cal</span>
              <span className="text-border">·</span>
              <span>45g protein</span>
              <span className="text-border">·</span>
              <span>2/4 meals</span>
            </div>
          </div>
          {statsOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
        </button>
        
        {statsOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 grid grid-cols-2 gap-2"
          >
            {[
              { label: "Calorie Budget Left", value: "820", unit: "cal", color: "text-success" },
              { label: "Protein Gap", value: "45", unit: "g", color: "text-warning" },
              { label: "Meals Logged", value: "2 of 4", unit: "", color: "text-foreground" },
              { label: "Hydration", value: "1.8", unit: "L", color: "text-foreground" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border bg-card p-3.5 shadow-card">
                <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{stat.label}</span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className={`font-mono text-xl font-bold tracking-tight ${stat.color}`}>{stat.value}</span>
                  {stat.unit && <span className="text-[11px] text-muted-foreground">{stat.unit}</span>}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* === POSITIVE REINFORCEMENT — keep it brief === */}
      <motion.div variants={item}>
        <div className="flex items-center gap-3 rounded-2xl border border-success/12 bg-success/4 px-4 py-3.5">
          <span className="text-lg">🎯</span>
          <div>
            <p className="text-[13px] font-semibold text-foreground leading-snug">3-day protein streak</p>
            <p className="text-[12px] text-muted-foreground mt-0.5">Closed your protein gap 3 days running. That's directly accelerating your cut.</p>
          </div>
        </div>
      </motion.div>

      {/* === TRAINING INTENT — minimal, actionable === */}
      <motion.div variants={item}>
        <div className="flex items-center justify-between rounded-2xl border bg-card p-4 shadow-card">
          <div className="flex items-center gap-3">
            <span className="text-lg">🏋️</span>
            <div>
              <p className="text-[13px] font-semibold text-card-foreground">Upper Body · Push</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Chest, Shoulders, Triceps · ~45 min</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="rounded-xl bg-primary/8 px-3.5 py-2 text-[12px] font-semibold text-primary hover:bg-primary/14 transition-colors active:scale-[0.97]">
              Done
            </button>
            <button className="rounded-xl bg-muted px-3.5 py-2 text-[12px] font-semibold text-muted-foreground hover:bg-muted/70 transition-colors active:scale-[0.97]">
              Skip
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
