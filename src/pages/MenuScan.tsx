import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Camera, Clipboard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <motion.div
      className="space-y-5"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
    >
      <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } } }}>
        <p className="text-[13px] text-muted-foreground font-medium">Decision Engine</p>
        <h1 className="text-foreground mt-0.5">Scan a Menu</h1>
        <p className="text-[12px] text-muted-foreground mt-0.5">Photo any menu. Every dish ranked for your goal in seconds.</p>
      </motion.div>

      {!scanned ? (
        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } } }} className="space-y-3">
          <div
            onClick={() => setScanned(true)}
            className="group rounded-3xl border-2 border-dashed border-border bg-muted/15 p-12 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary/30 hover:bg-primary/3 transition-all duration-300 active:scale-[0.99]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/8 transition-all duration-300 group-hover:bg-primary/14 group-hover:scale-105">
              <Upload className="h-7 w-7 text-primary" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground text-[14px]">Drop a menu photo</p>
              <p className="text-[12px] text-muted-foreground mt-1">Photo, screenshot, or delivery app screen</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <Button variant="outline" size="lg" onClick={() => setScanned(true)} className="active:scale-[0.97]">
              <Camera className="mr-2 h-4 w-4" /> Take Photo
            </Button>
            <Button variant="outline" size="lg" onClick={() => setScanned(true)} className="active:scale-[0.97]">
              <Clipboard className="mr-2 h-4 w-4" /> Paste Menu
            </Button>
          </div>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="space-y-3">
          <div className="flex items-center gap-2.5 rounded-2xl bg-primary/6 border border-primary/10 px-4 py-3">
            <Sparkles className="h-4 w-4 text-primary flex-shrink-0" strokeWidth={2} />
            <span className="text-[12px] font-medium text-primary">
              Ranked for fat loss · 820 cal remaining · protein-priority
            </span>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/4 p-4">
            <span className="text-lg">💡</span>
            <div>
              <p className="text-[13px] font-semibold text-foreground">Order the grilled chicken, skip the butter chicken</p>
              <p className="text-[12px] text-muted-foreground mt-0.5">Closes your protein gap and leaves room for a 150-cal dessert. The butter chicken blows your deficit.</p>
            </div>
          </div>

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
