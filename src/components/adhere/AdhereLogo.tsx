import { motion } from "framer-motion";

interface AdhereLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-display-sm md:text-display",
};

const AdhereLogo = ({ size = "md", className = "" }: AdhereLogoProps) => (
  <motion.span
    className={`font-sans font-extrabold tracking-tight text-foreground select-none ${sizes[size]} ${className}`}
    initial={{ opacity: 0, y: -4 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  >
    adhere<span className="text-gradient-primary">.</span>
  </motion.span>
);

export default AdhereLogo;
