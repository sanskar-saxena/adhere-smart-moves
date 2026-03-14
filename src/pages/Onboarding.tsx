import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdhereLogo from "@/components/adhere/AdhereLogo";

const steps = [
  {
    title: "What outcome do you want?",
    subtitle: "Everything we recommend is calibrated to this.",
    key: "goal",
    options: [
      { id: "fat-loss", label: "Lose fat, keep muscle", emoji: "🔥" },
      { id: "muscle-gain", label: "Build muscle, controlled bulk", emoji: "💪" },
      { id: "recomp", label: "Recomposition — both at once", emoji: "⚖️" },
      { id: "maintenance", label: "Stay where I am, stop slipping", emoji: "🛡️" },
    ],
  },
  {
    title: "Your lifestyle?",
    subtitle: "Helps us understand your daily patterns.",
    key: "lifestyle",
    options: [
      { id: "office", label: "Office Worker", emoji: "🏢" },
      { id: "traveler", label: "Frequent Traveler", emoji: "✈️" },
      { id: "student", label: "Student", emoji: "📚" },
      { id: "hybrid", label: "Hybrid Athlete", emoji: "🏃" },
    ],
  },
  {
    title: "Food preference?",
    subtitle: "We respect every dietary choice.",
    key: "diet",
    options: [
      { id: "nonveg", label: "Non-Vegetarian", emoji: "🍗" },
      { id: "veg", label: "Vegetarian", emoji: "🥬" },
      { id: "egg", label: "Eggetarian", emoji: "🥚" },
      { id: "vegan", label: "Vegan", emoji: "🌱" },
    ],
  },
  {
    title: "Your biggest struggles?",
    subtitle: "Select all that apply. No judgment.",
    key: "struggle",
    multi: true,
    options: [
      { id: "cravings", label: "Cravings", emoji: "🍫" },
      { id: "social", label: "Social Eating", emoji: "🍻" },
      { id: "travel", label: "Travel", emoji: "🧳" },
      { id: "inconsistency", label: "Inconsistency", emoji: "📉" },
      { id: "low-protein", label: "Low Protein", emoji: "🥩" },
      { id: "late-night", label: "Late-Night Orders", emoji: "🌙" },
    ],
  },
  {
    title: "Workout frequency?",
    subtitle: "No judgment — just calibrating.",
    key: "workout",
    options: [
      { id: "0-1", label: "0-1 days/week", emoji: "🧘" },
      { id: "2-3", label: "2-3 days/week", emoji: "💪" },
      { id: "4-5", label: "4-5 days/week", emoji: "🔥" },
      { id: "6+", label: "6+ days/week", emoji: "🏆" },
    ],
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string[]>>({});

  const current = steps[step];
  const isMulti = current.multi;
  const currentSelections = selections[current.key] || [];

  const handleSelect = (id: string) => {
    if (isMulti) {
      setSelections((prev) => ({
        ...prev,
        [current.key]: currentSelections.includes(id)
          ? currentSelections.filter((s) => s !== id)
          : [...currentSelections, id],
      }));
    } else {
      setSelections((prev) => ({ ...prev, [current.key]: [id] }));
      if (step < steps.length - 1) {
        setTimeout(() => setStep(step + 1), 350);
      }
    }
  };

  const canProceed = currentSelections.length > 0;
  const isLast = step === steps.length - 1;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex items-center justify-between px-6 py-5">
        <AdhereLogo size="sm" />
        <span className="font-mono text-2xs text-muted-foreground font-medium tracking-label uppercase">
          {step + 1} / {steps.length}
        </span>
      </header>

      {/* Progress bar */}
      <div className="px-6">
        <div className="h-1 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full bg-gradient-primary rounded-full"
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 py-10 max-w-lg mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-foreground">{current.title}</h1>
            <p className="mt-2 text-[14px] text-muted-foreground">{current.subtitle}</p>

            <div className={`mt-8 grid gap-3 ${current.options.length > 4 ? "grid-cols-2" : "grid-cols-1"}`}>
              {current.options.map((opt) => {
                const selected = currentSelections.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    className={`flex items-center gap-3.5 rounded-2xl border p-4.5 text-left transition-all duration-200 ease-spring active:scale-[0.97] ${
                      selected
                        ? "border-primary/25 bg-primary/5 shadow-card-hover ring-1 ring-primary/10"
                        : "border-border bg-card shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
                    }`}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    <span className="font-medium text-[14px] text-card-foreground flex-1 tracking-tight">{opt.label}</span>
                    {selected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-primary"
                      >
                        <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-6 py-6 flex items-center gap-3 max-w-lg mx-auto w-full">
        {step > 0 && (
          <Button variant="outline" size="lg" onClick={() => setStep(step - 1)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
        )}
        {(isMulti || isLast) && (
          <Button
            variant="premium"
            size="lg"
            className="flex-1"
            disabled={!canProceed}
            onClick={() => {
              if (isLast) {
                navigate("/app");
              } else {
                setStep(step + 1);
              }
            }}
          >
            {isLast ? "Let's Go" : "Continue"} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
