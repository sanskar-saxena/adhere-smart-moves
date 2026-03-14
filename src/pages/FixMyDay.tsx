import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { slideInRight } from "@/lib/motion";
import PageHeader from "@/components/adhere/PageHeader";
import OptionSelector, { type SelectionOption } from "@/components/adhere/OptionSelector";
import StepCard from "@/components/adhere/StepCard";
import AlertBanner from "@/components/adhere/AlertBanner";

const situations: SelectionOption[] = [
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

const antiPatterns = [
  "Skipping meals tomorrow to \"compensate\"",
  "Punishing yourself with extra cardio",
  "Writing off the rest of the week",
];

const FixMyDay = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showPlan, setShowPlan] = useState(false);

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Recovery Engine"
        title="What happened?"
        description="Tell us. We'll recalibrate the rest of today."
      />

      <AnimatePresence mode="wait">
        {!showPlan ? (
          <motion.div key="select" variants={slideInRight} initial="hidden" animate="visible" exit="exit" className="space-y-4">
            <OptionSelector
              options={situations}
              selected={selected ? [selected] : []}
              onSelect={(id) => setSelected(id)}
            />
            <Button variant="premium" size="lg" className="w-full" disabled={!selected} onClick={() => setShowPlan(true)}>
              Recalibrate <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        ) : (
          <motion.div key="plan" variants={slideInRight} initial="hidden" animate="visible" className="space-y-4">
            <AlertBanner
              variant="success"
              title="Damage is contained."
              description="One over-meal doesn't break your cut. Your adherence score weights the whole week. Execute the next 4 hours well and today still counts."
            />

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-3">Do this next</p>
              <div className="space-y-2">
                {recoverySteps.map((step, i) => (
                  <StepCard key={i} index={i + 1} action={step.action} reason={step.why} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-destructive/10 bg-destructive/3 p-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-destructive/80 mb-2.5">These will make it worse</p>
              <ul className="space-y-2 text-[13px] text-muted-foreground">
                {antiPatterns.map((text) => (
                  <li key={text} className="flex items-start gap-2">
                    <span className="text-destructive">✕</span> {text}
                  </li>
                ))}
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
