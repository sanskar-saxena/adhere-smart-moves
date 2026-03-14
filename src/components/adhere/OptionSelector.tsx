import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { scaleIn } from "@/lib/motion";

export interface SelectionOption {
  id: string;
  label: string;
  emoji: string;
}

interface OptionSelectorProps {
  options: SelectionOption[];
  selected: string[];
  onSelect: (id: string) => void;
  /** Use 2-column grid when more than this many options */
  columnsThreshold?: number;
}

const OptionSelector = ({ options, selected, onSelect, columnsThreshold = 4 }: OptionSelectorProps) => (
  <div className={`grid gap-2.5 ${options.length > columnsThreshold ? "grid-cols-2" : "grid-cols-1"}`}>
    {options.map((opt) => {
      const isSelected = selected.includes(opt.id);
      return (
        <button
          key={opt.id}
          onClick={() => onSelect(opt.id)}
          className={`flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-all duration-200 active:scale-[0.97] ${
            isSelected
              ? "border-primary/25 bg-primary/5 shadow-card-hover ring-1 ring-primary/10"
              : "border-border bg-card shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
          }`}
        >
          <span className="text-2xl">{opt.emoji}</span>
          <span className="font-medium text-[14px] text-card-foreground flex-1 tracking-tight">{opt.label}</span>
          {isSelected && (
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-primary"
            >
              <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
            </motion.div>
          )}
        </button>
      );
    })}
  </div>
);

export default OptionSelector;
