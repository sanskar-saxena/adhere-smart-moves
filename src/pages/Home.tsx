import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ScanLine, Wrench, Compass, ArrowRight, Zap } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import ScoreRing from "@/components/adhere/ScoreRing";
import HeroCard from "@/components/adhere/HeroCard";
import AlertBanner from "@/components/adhere/AlertBanner";
import ActionStrip from "@/components/adhere/ActionStrip";
import CollapsibleSection from "@/components/adhere/CollapsibleSection";
import StatBlock from "@/components/adhere/StatBlock";

const Home = () => {
  const navigate = useNavigate();

  const timeGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
  };

  const quickActions = [
    { icon: Wrench, label: "Recover My Day", sublabel: "Went off-plan?", onClick: () => navigate("/app/fix") },
    { icon: ScanLine, label: "Scan a Menu", sublabel: "Get ranked options", onClick: () => navigate("/app/scan") },
    { icon: Compass, label: "Nearby Protein", sublabel: "Under ₹200", onClick: () => navigate("/app/nearby") },
  ];

  return (
    <motion.div className="space-y-5" initial="hidden" animate="visible" variants={staggerContainer}>
      {/* Greeting */}
      <motion.div variants={fadeUpItem} className="flex items-center justify-between">
        <div>
          <p className="text-[13px] text-muted-foreground font-medium">{timeGreeting()}, Arjun</p>
          <p className="text-[12px] text-muted-foreground/70 mt-0.5">Thursday · 820 cal left · 45g protein gap</p>
        </div>
        <ScoreRing score={74} size={52} />
      </motion.div>

      {/* Best Next Move */}
      <motion.div variants={fadeUpItem}>
        <HeroCard
          eyebrowIcon={Zap}
          eyebrow="Your Best Next Move"
          headline="High-protein dinner, under 500 cal."
          body="45g short on protein with 820 cal left. Grilled chicken or paneer tikka from anywhere nearby closes the gap."
          actions={
            <>
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
            </>
          }
        />
      </motion.div>

      {/* Risk Alerts */}
      <motion.div variants={fadeUpItem} className="space-y-2">
        <AlertBanner
          variant="warning"
          emoji="⚠️"
          title="Thursday night pattern detected"
          description="You've ordered delivery past 10 PM on 3 of the last 4 Thursdays. Decide dinner now."
        />
        <AlertBanner
          variant="danger"
          emoji="🥩"
          title="Protein gap widening"
          description="95g of 140g consumed. Your next meal needs to be protein-first."
        />
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={fadeUpItem}>
        <ActionStrip items={quickActions} />
      </motion.div>

      {/* Daily Stats */}
      <motion.div variants={fadeUpItem}>
        <CollapsibleSection title="Today's Numbers" summary="820 cal · 45g protein · 2/4 meals">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border bg-card p-3.5 shadow-card">
              <StatBlock label="Calorie Budget Left" value="820" unit="cal" variant="success" />
            </div>
            <div className="rounded-xl border bg-card p-3.5 shadow-card">
              <StatBlock label="Protein Gap" value="45" unit="g" variant="warning" />
            </div>
            <div className="rounded-xl border bg-card p-3.5 shadow-card">
              <StatBlock label="Meals Logged" value="2 of 4" />
            </div>
            <div className="rounded-xl border bg-card p-3.5 shadow-card">
              <StatBlock label="Hydration" value="1.8" unit="L" />
            </div>
          </div>
        </CollapsibleSection>
      </motion.div>

      {/* Streak */}
      <motion.div variants={fadeUpItem}>
        <AlertBanner
          variant="success"
          emoji="🎯"
          title="3-day protein streak"
          description="Closed your protein gap 3 days running. That's directly accelerating your cut."
        />
      </motion.div>

      {/* Training Intent */}
      <motion.div variants={fadeUpItem}>
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
