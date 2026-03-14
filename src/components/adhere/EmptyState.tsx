import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpItem } from "@/lib/motion";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const EmptyState = ({ icon: Icon, title, description, action }: EmptyStateProps) => (
  <motion.div
    variants={fadeUpItem}
    initial="hidden"
    animate="visible"
    className="flex flex-col items-center justify-center py-16 px-6 text-center"
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted/60 mb-5">
      <Icon className="h-7 w-7 text-muted-foreground/60" strokeWidth={1.5} />
    </div>
    <h3 className="text-[15px] font-semibold text-foreground tracking-tight">{title}</h3>
    <p className="text-[13px] text-muted-foreground mt-1.5 max-w-xs leading-relaxed">{description}</p>
    {action && (
      <button
        onClick={action.onClick}
        className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-primary/8 px-5 py-2.5 text-[13px] font-semibold text-primary hover:bg-primary/14 transition-colors duration-200 active:scale-[0.97]"
      >
        {action.label}
      </button>
    )}
  </motion.div>
);

export default EmptyState;
