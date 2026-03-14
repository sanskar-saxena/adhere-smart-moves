import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SPRING_EASE } from "@/lib/motion";

interface CollapsibleSectionProps {
  /** Always-visible summary content */
  title: string;
  /** Inline summary text shown next to title */
  summary?: string;
  /** Collapsible children */
  children: ReactNode;
  /** Start open or closed */
  defaultOpen?: boolean;
}

const CollapsibleSection = ({ title, summary, children, defaultOpen = false }: CollapsibleSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between rounded-2xl border bg-card px-4 py-3 shadow-card transition-all duration-200 hover:shadow-card-hover"
      >
        <div className="flex items-center gap-3">
          <span className="text-[13px] font-semibold text-card-foreground">{title}</span>
          {summary && <span className="text-[12px] text-muted-foreground">{summary}</span>}
        </div>
        {open ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: SPRING_EASE }}
          className="mt-2"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default CollapsibleSection;
