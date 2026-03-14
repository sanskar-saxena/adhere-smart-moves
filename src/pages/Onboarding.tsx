import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { slideInRight, SPRING_EASE } from "@/lib/motion";
import AdhereLogo from "@/components/adhere/AdhereLogo";
import OptionSelector, { type SelectionOption } from "@/components/adhere/OptionSelector";

interface OnboardingStep {
  title: string;
  subtitle: string;
  key: string;
  options: SelectionOption[];
  multi?: boolean;
}

const steps: OnboardingStep[] = [
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
    title: "What does your day look like?",
    subtitle: "This shapes when and how we intervene.",
    key: "lifestyle",
    options: [
      { id: "office", label: "Office — canteen lunches, desk snacking", emoji: "🏢" },
      { id: "traveler", label: "Travel-heavy — airports, hotels, client dinners", emoji: "✈️" },
      { id: "student", label: "Student — irregular schedule, tight budget", emoji: "📚" },
      { id: "hybrid", label: "Active / athletic — already training hard", emoji: "🏃" },
    ],
  },
  {
    title: "What do you eat?",
    subtitle: "Affects which meals and restaurants we recommend.",
    key: "diet",
    options: [
      { id: "nonveg", label: "Everything — no restrictions", emoji: "🍗" },
      { id: "veg", label: "Vegetarian", emoji: "🥬" },
      { id: "egg", label: "Egg-based, no meat", emoji: "🥚" },
      { id: "vegan", label: "Plant-only", emoji: "🌱" },
    ],
  },
  {
    title: "Where do you usually fall off?",
    subtitle: "Select all. This is where Adhere will intervene most.",
    key: "struggle",
    multi: true,
    options: [
      { id: "cravings", label: "Late-night cravings", emoji: "🍫" },
      { id: "social", label: "Social meals & peer pressure", emoji: "🍻" },
      { id: "travel", label: "Traveling or eating out", emoji: "🧳" },
      { id: "inconsistency", label: "Starting strong, fading by Thursday", emoji: "📉" },
      { id: "low-protein", label: "Never hitting protein", emoji: "🥩" },
      { id: "late-night", label: "Ordering delivery too late", emoji: "🌙" },
    ],
  },
  {
    title: "How often do you train?",
    subtitle: "Affects how aggressively we set your nutrition targets.",
    key: "workout",
    options: [
      { id: "0-1", label: "Rarely — 0-1 days/week", emoji: "🧘" },
      { id: "2-3", label: "Some — 2-3 days/week", emoji: "💪" },
      { id: "4-5", label: "Consistent — 4-5 days/week", emoji: "🔥" },
      { id: "6+", label: "Daily or near-daily", emoji: "🏆" },
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
  const canProceed = currentSelections.length > 0;
  const isLast = step === steps.length - 1;

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
            transition={{ duration: 0.4, ease: SPRING_EASE }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 py-10 max-w-lg mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div key={step} variants={slideInRight} initial="hidden" animate="visible" exit="exit">
            <h1 className="text-foreground">{current.title}</h1>
            <p className="mt-2 text-[14px] text-muted-foreground">{current.subtitle}</p>

            <div className="mt-8">
              <OptionSelector
                options={current.options}
                selected={currentSelections}
                onSelect={handleSelect}
              />
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
            onClick={() => (isLast ? navigate("/app") : setStep(step + 1))}
          >
            {isLast ? "Build My Plan" : "Continue"} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
