import { motion } from "framer-motion";

interface AdhereLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

const AdhereLogo = ({ size = "md", className = "" }: AdhereLogoProps) => (
  <motion.span
    className={`font-sans font-bold tracking-tight text-foreground ${sizes[size]} ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    adhere<span className="text-primary">.</span>
  </motion.span>
);

export default AdhereLogo;
