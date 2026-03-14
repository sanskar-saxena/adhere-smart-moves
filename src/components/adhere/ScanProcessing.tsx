import { motion } from "framer-motion";
import { SPRING_EASE } from "@/lib/motion";

interface ScanProcessingProps {
  /** Current processing step label */
  step?: string;
  /** 0–100 progress percentage */
  progress?: number;
}

const steps = [
  "Reading menu items…",
  "Matching to nutrition database…",
  "Ranking for your goal…",
  "Generating recommendations…",
];

const ScanProcessing = ({ step, progress = 0 }: ScanProcessingProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: SPRING_EASE }}
    className="rounded-3xl border bg-card p-8 shadow-card flex flex-col items-center gap-6"
  >
    {/* Animated scanner icon */}
    <div className="relative flex h-20 w-20 items-center justify-center">
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-primary/20"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.2, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-2 rounded-xl border-2 border-primary/30"
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 0.3, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.div
        className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          <motion.line
            x1="3" y1="12" x2="21" y2="12"
            animate={{ y1: [8, 16, 8], y2: [8, 16, 8] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary"
          />
        </svg>
      </motion.div>
    </div>

    {/* Progress bar */}
    <div className="w-full max-w-xs">
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full bg-gradient-primary rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: SPRING_EASE }}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-[12px] text-muted-foreground font-medium">
          {step || steps[Math.min(Math.floor(progress / 25), steps.length - 1)]}
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">{Math.round(progress)}%</span>
      </div>
    </div>

    {/* Step indicators */}
    <div className="flex gap-1.5">
      {steps.map((_, i) => (
        <motion.div
          key={i}
          className={`h-1 rounded-full transition-colors duration-300 ${
            progress >= (i + 1) * 25 ? "bg-primary w-6" : progress >= i * 25 ? "bg-primary/40 w-4" : "bg-muted w-3"
          }`}
          layout
        />
      ))}
    </div>
  </motion.div>
);

export default ScanProcessing;
