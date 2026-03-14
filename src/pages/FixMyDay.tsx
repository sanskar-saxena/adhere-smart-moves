import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const situations = [
  { id: "overate", label: "I went over my calories", emoji: "🍕" },
  { id: "missed", label: "I skipped my workout", emoji: "🛋️" },
  { id: "going-out", label: "I have dinner plans tonight", emoji: "🍻" },
  { id: "craving", label: "I'm about to order junk", emoji: "🍫" },
  { id: "tired", label: "I slept badly, everything's harder", emoji: "😴" },
  { id: "travel", label: "I'm on the road today", emoji: "✈️" },
];

const recoverySteps = [
  { action: "Protein-first dinner: 400 cal max, 35g+ protein", why: "Close the gap, not the kitchen" },
  { action: "No snacking after dinner — brush teeth now", why: "Remove the decision before it arrives" },
  { action: "20-min walk post-dinner", why: "Reclaim ~100 cal and bring down blood sugar" },
  { action: "Lights out by 11 PM", why: "Sleep debt is the #1 predictor of tomorrow's overeating" },
];

const FixMyDay = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showPlan, setShowPlan] = useState(false);

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[13px] text-muted-foreground font-medium">Recovery Engine</p>
        <h1 className="text-foreground mt-0.5">What happened?</h1>
        <p className="text-[13px] text-muted-foreground mt-1">Tell us. We'll recalibrate the rest of today.</p>
      </div>

      <AnimatePresence mode="wait">
        {!showPlan ? (
          <motion.div key="select" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="space-y-4">
            <div className="grid grid-cols-1 gap-2.5">
              {situations.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-all duration-200 active:scale-[0.98] ${
                    selected === s.id
                      ? "border-primary/25 bg-primary/5 ring-1 ring-primary/10"
                      : "border-border bg-card shadow-card hover:bg-muted/30"
                  }`}
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-[14px] font-medium text-card-foreground leading-snug flex-1">{s.label}</span>
                  {selected === s.id && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
            <Button variant="premium" size="lg" className="w-full" disabled={!selected} onClick={() => setShowPlan(true)}>
              Recalibrate <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        ) : (
          <motion.div key="plan" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="space-y-4">
            {/* Reassurance */}
            <div className="rounded-2xl border border-success/12 bg-success/4 p-4">
              <p className="text-[14px] font-semibold text-foreground">Damage is contained.</p>
              <p className="text-[12px] text-muted-foreground mt-1 leading-relaxed">One over-meal doesn't break your cut. Your adherence score weights the whole week. Execute the next 4 hours well and today still counts.</p>
            </div>

            {/* Structured recovery steps */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-3">Do this next</p>
              <div className="space-y-2">
                {recoverySteps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-card"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary/20 mt-0.5 flex-shrink-0">
                      <span className="font-mono text-[10px] font-bold text-primary">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-card-foreground leading-snug">{step.action}</p>
                      <p className="text-[12px] text-muted-foreground mt-0.5">{step.why}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Anti-patterns */}
            <div className="rounded-2xl border border-destructive/10 bg-destructive/3 p-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-destructive/80 mb-2.5">These will make it worse</p>
              <ul className="space-y-2 text-[13px] text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-destructive">✕</span> Skipping meals tomorrow to "compensate"</li>
                <li className="flex items-start gap-2"><span className="text-destructive">✕</span> Punishing yourself with extra cardio</li>
                <li className="flex items-start gap-2"><span className="text-destructive">✕</span> Writing off the rest of the week</li>
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
