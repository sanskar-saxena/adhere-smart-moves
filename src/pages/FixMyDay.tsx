import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import InsightCard from "@/components/adhere/InsightCard";

const situations = [
  { id: "overate", label: "I went over my calories", emoji: "🍕" },
  { id: "missed", label: "I skipped my workout", emoji: "🛋️" },
  { id: "going-out", label: "I have dinner plans tonight", emoji: "🍻" },
  { id: "craving", label: "I'm about to order junk", emoji: "🍫" },
  { id: "tired", label: "I slept badly, everything's harder", emoji: "😴" },
  { id: "travel", label: "I'm on the road today", emoji: "✈️" },
];

const recoverySteps = [
  "Protein-first dinner: 400 cal max, 35g+ protein — close the gap, not the kitchen",
  "No snacking after dinner — brush teeth now, remove the decision later",
  "20-min walk post-dinner to bring down blood sugar and reclaim 100 cal",
  "Lights out by 11 PM — sleep debt is the #1 predictor of tomorrow's overeating",
];

const FixMyDay = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showPlan, setShowPlan] = useState(false);

  return (
    <div className="space-y-7">
      <div>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/8">
            <Wrench className="h-[18px] w-[18px] text-primary" strokeWidth={1.8} />
          </div>
          <div>
            <h1 className="text-foreground">Recover My Day</h1>
            <p className="text-[13px] text-muted-foreground mt-0.5">Something went sideways. Tell us what — we'll recalibrate the rest of today.</p>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!showPlan ? (
          <motion.div key="select" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="space-y-5">
            <p className="text-[13px] font-semibold text-foreground">What derailed you?</p>
            <div className="grid grid-cols-2 gap-3">
              {situations.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ease-spring ${
                    selected === s.id
                      ? "border-primary/25 bg-primary/5 shadow-card-hover ring-1 ring-primary/10"
                      : "border-border bg-card shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
                  }`}
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-[13px] font-medium text-card-foreground leading-snug">{s.label}</span>
                </button>
              ))}
            </div>
            <Button
              variant="premium"
              size="lg"
              className="w-full"
              disabled={!selected}
              onClick={() => setShowPlan(true)}
            >
              Recalibrate My Day <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        ) : (
          <motion.div key="plan" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="space-y-5">
            <div className="rounded-3xl bg-gradient-primary p-6 text-primary-foreground shadow-lg shadow-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/2" />
              <span className="section-label !text-primary-foreground/60 mb-2 block">Recalibrated Plan</span>
              <p className="font-semibold text-lg tracking-tight">Damage is contained. Here's how to close the day strong.</p>
            </div>

            <InsightCard type="positive" title="This isn't failure — it's a data point" description="One over-meal doesn't break your cut. Your adherence score weights the whole week, not one sitting. Execute the next 4 hours well and today still counts." />

            <div className="space-y-2.5">
              {recoverySteps.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3.5 rounded-2xl border bg-card p-4 shadow-card"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg border-2 border-primary/20 mt-0.5 flex-shrink-0">
                    <Check className="h-3 w-3 text-primary opacity-0" />
                  </div>
                  <span className="text-[13px] text-card-foreground leading-relaxed">{step}</span>
                </motion.div>
              ))}
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-card">
              <h3 className="font-semibold text-card-foreground text-[14px] mb-3">These will make it worse</h3>
              <ul className="space-y-2.5 text-[13px] text-muted-foreground">
                <li className="flex items-start gap-2"><span>❌</span> Skipping meals tomorrow to "compensate" — this triggers a binge cycle</li>
                <li className="flex items-start gap-2"><span>❌</span> Punishing yourself with extra cardio — guilt doesn't burn fat, consistency does</li>
                <li className="flex items-start gap-2"><span>❌</span> Writing off the rest of the week — your adherence score can still land above 70</li>
              </ul>
            </div>

            <Button variant="outline" className="w-full" onClick={() => { setShowPlan(false); setSelected(null); }}>
              Start Over
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FixMyDay;
