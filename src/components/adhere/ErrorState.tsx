import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { fadeUpItem } from "@/lib/motion";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

const ErrorState = ({
  title = "Something went wrong",
  description = "We couldn't load this data. Check your connection and try again.",
  onRetry,
}: ErrorStateProps) => (
  <motion.div
    variants={fadeUpItem}
    initial="hidden"
    animate="visible"
    className="flex flex-col items-center justify-center py-14 px-6 text-center"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/8 mb-5">
      <AlertTriangle className="h-6 w-6 text-destructive/70" strokeWidth={1.8} />
    </div>
    <h3 className="text-[15px] font-semibold text-foreground tracking-tight">{title}</h3>
    <p className="text-[13px] text-muted-foreground mt-1.5 max-w-xs leading-relaxed">{description}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-card border px-5 py-2.5 text-[13px] font-semibold text-foreground shadow-card hover:shadow-card-hover transition-all duration-200 active:scale-[0.97]"
      >
        <RefreshCw className="h-3.5 w-3.5" /> Try again
      </button>
    )}
  </motion.div>
);

export default ErrorState;
