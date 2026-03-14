import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import InsightCard from "@/components/adhere/InsightCard";

const situations = [
  { id: "overate", label: "I already ate too much", emoji: "🍕" },
  { id: "missed", label: "I missed my workout", emoji: "🛋️" },
  { id: "going-out", label: "I'm going out tonight", emoji: "🍻" },
  { id: "craving", label: "I'm craving junk food", emoji: "🍫" },
  { id: "tired", label: "I barely slept", emoji: "😴" },
  { id: "travel", label: "I'm traveling today", emoji: "✈️" },
];

const FixMyDay = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showPlan, setShowPlan] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Wrench className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Fix My Day</h1>
        </div>
        <p className="text-sm text-muted-foreground">Life happened. Let's get you back on track — no guilt.</p>
      </div>

      <AnimatePresence mode="wait">
        {!showPlan ? (
          <motion.div key="select" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
            <p className="text-sm font-medium text-foreground">What happened?</p>
            <div className="grid grid-cols-2 gap-3">
              {situations.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                    selected === s.id ? "border-primary bg-primary/5 card-shadow-hover" : "border-border bg-card card-shadow"
                  }`}
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-sm font-medium text-card-foreground">{s.label}</span>
                </button>
              ))}
            </div>
            <Button
              size="lg"
              className="w-full h-12 bg-gradient-primary text-primary-foreground"
              disabled={!selected}
              onClick={() => setShowPlan(true)}
            >
              Fix My Day <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        ) : (
          <motion.div key="plan" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="rounded-2xl bg-gradient-primary p-5 text-primary-foreground">
              <div className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-2">Your Recovery Plan</div>
              <p className="font-semibold text-lg">It's okay. Here's how to finish the day strong.</p>
            </div>

            <InsightCard type="positive" title="You're not off track" description="One meal doesn't ruin a week. Your adherence score adjusts for real-life slip-ups." />

            <div className="space-y-3">
              {[
                { text: "Have a light, high-protein dinner: ~400 cal, 35g+ protein", done: false },
                { text: "Skip the late-night snack — brush teeth early", done: false },
                { text: "Walk 20 min after dinner to offset", done: false },
                { text: "Go to bed by 11 PM to reset hunger hormones", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border bg-card p-4 card-shadow">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary/30 mt-0.5">
                    <Check className="h-3 w-3 text-primary opacity-0" />
                  </div>
                  <span className="text-sm text-card-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border bg-card p-4 card-shadow">
              <h3 className="font-semibold text-card-foreground text-sm mb-2">What NOT to do</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>❌ Don't skip tomorrow's meals to "make up"</li>
                <li>❌ Don't do extra cardio out of guilt</li>
                <li>❌ Don't think the whole week is ruined</li>
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
