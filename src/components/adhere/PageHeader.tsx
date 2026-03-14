import { motion } from "framer-motion";
import { fadeUpItem } from "@/lib/motion";
import { type ReactNode } from "react";

interface PageHeaderProps {
  /** Small uppercase label above the title */
  eyebrow?: string;
  /** Page title */
  title: string;
  /** Optional description below title */
  description?: string;
  /** Optional content rendered to the right of the title block */
  trailing?: ReactNode;
  /** Optional content rendered above the eyebrow (e.g. location pill) */
  leading?: ReactNode;
}

const PageHeader = ({ eyebrow, title, description, trailing, leading }: PageHeaderProps) => (
  <motion.div variants={fadeUpItem} className="flex items-start justify-between gap-4">
    <div className="min-w-0">
      {leading}
      {eyebrow && <p className="text-[13px] text-muted-foreground font-medium">{eyebrow}</p>}
      <h1 className="text-foreground mt-0.5">{title}</h1>
      {description && <p className="text-[13px] text-muted-foreground mt-0.5">{description}</p>}
    </div>
    {trailing}
  </motion.div>
);

export default PageHeader;
