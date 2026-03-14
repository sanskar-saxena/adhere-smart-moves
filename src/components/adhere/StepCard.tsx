import { motion } from "framer-motion";
import { slideInLeft } from "@/lib/motion";

interface StepCardProps {
  /** 1-based step index */
  index: number;
  /** Primary action text */
  action: string;
  /** Supporting rationale */
  reason: string;
}

const StepCard = ({ index, action, reason }: StepCardProps) => (
  <motion.div
    className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-card"
    variants={slideInLeft}
    custom={index - 1}
    initial="hidden"
    animate="visible"
  >
    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary/20 mt-0.5 flex-shrink-0">
      <span className="font-mono text-[10px] font-bold text-primary">{index}</span>
    </div>
    <div>
      <p className="text-[13px] font-semibold text-card-foreground leading-snug">{action}</p>
      <p className="text-[12px] text-muted-foreground mt-0.5">{reason}</p>
    </div>
  </motion.div>
);

export default StepCard;
