import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import PageHeader from "@/components/adhere/PageHeader";
import ScanUploader from "@/components/adhere/ScanUploader";
import AlertBanner from "@/components/adhere/AlertBanner";
import MealCard from "@/components/adhere/MealCard";

const mockResults = [
  { name: "Grilled Chicken Breast", restaurant: "The Health Bowl", calories: 380, protein: 42, price: "₹280", tags: ["best for your cut", "highest protein/cal"], rank: 1, confidence: 96, recommended: true },
  { name: "Paneer Tikka Platter", restaurant: "The Health Bowl", calories: 420, protein: 32, price: "₹250", tags: ["strong veg option", "fits your budget"], rank: 2, confidence: 88 },
  { name: "Egg White Omelette", restaurant: "The Health Bowl", calories: 280, protein: 28, price: "₹180", tags: ["lowest calorie", "under budget"], rank: 3, confidence: 82 },
  { name: "Dal Makhani + Roti", restaurant: "The Health Bowl", calories: 520, protein: 18, price: "₹200", tags: ["social-safe pick"], rank: 4, confidence: 45 },
  { name: "Butter Chicken + Naan", restaurant: "The Health Bowl", calories: 780, protein: 35, price: "₹350", tags: ["will blow your deficit"], rank: 5, confidence: 30 },
];

const MenuScan = () => {
  const [scanned, setScanned] = useState(false);

  return (
    <motion.div className="space-y-5" initial="hidden" animate="visible" variants={staggerContainer}>
      <PageHeader
        eyebrow="Decision Engine"
        title="Scan a Menu"
        description="Photo any menu. Every dish ranked for your goal in seconds."
      />

      {!scanned ? (
        <motion.div variants={fadeUpItem}>
          <ScanUploader onScan={() => setScanned(true)} />
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="space-y-3">
          <div className="flex items-center gap-2.5 rounded-2xl bg-primary/6 border border-primary/10 px-4 py-3">
            <Sparkles className="h-4 w-4 text-primary flex-shrink-0" strokeWidth={2} />
            <span className="text-[12px] font-medium text-primary">
              Ranked for fat loss · 820 cal remaining · protein-priority
            </span>
          </div>

          <AlertBanner
            variant="info"
            emoji="💡"
            title="Order the grilled chicken, skip the butter chicken"
            description="Closes your protein gap and leaves room for a 150-cal dessert. The butter chicken blows your deficit."
          />

          <div className="space-y-2.5">
            {mockResults.map((meal, i) => (
              <motion.div
                key={meal.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <MealCard {...meal} />
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl border bg-card p-4 shadow-card">
            <p className="text-[13px] font-semibold text-card-foreground">Still want dessert?</p>
            <p className="text-[12px] text-muted-foreground mt-1 leading-relaxed">
              Pick #1 → 440 cal left. Gulab jamun (150 cal) fits. Kulfi (280 cal) doesn't — costs you tomorrow's flexibility.
            </p>
          </div>

          <Button variant="outline" className="w-full" onClick={() => setScanned(false)}>
            Scan Another Menu
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MenuScan;
