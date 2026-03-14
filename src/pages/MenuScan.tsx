import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Camera, Clipboard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import MealCard from "@/components/adhere/MealCard";
import InsightCard from "@/components/adhere/InsightCard";

const mockResults = [
  { name: "Grilled Chicken Breast", restaurant: "The Health Bowl", calories: 380, protein: 42, price: "₹280", tags: ["best for your cut", "highest protein/cal"], rank: 1, confidence: 96, recommended: true },
  { name: "Paneer Tikka Platter", restaurant: "The Health Bowl", calories: 420, protein: 32, price: "₹250", tags: ["strong veg option", "fits your budget"], rank: 2, confidence: 88 },
  { name: "Egg White Omelette", restaurant: "The Health Bowl", calories: 280, protein: 28, price: "₹180", tags: ["lowest calorie", "under budget"], rank: 3, confidence: 82 },
  { name: "Dal Makhani + Roti", restaurant: "The Health Bowl", calories: 520, protein: 18, price: "₹200", tags: ["social-safe pick"], rank: 4, confidence: 45 },
  { name: "Butter Chicken + Naan", restaurant: "The Health Bowl", calories: 780, protein: 35, price: "₹350", tags: ["will blow your deficit"], rank: 5, confidence: 30 },
];

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const MenuScan = () => {
  const [scanned, setScanned] = useState(false);

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
    >
      <motion.div variants={item}>
        <span className="section-label text-primary mb-1 block">Decision Engine</span>
        <h1 className="text-foreground">Scan a Menu</h1>
        <p className="text-[13px] text-muted-foreground mt-1">Drop a photo of any restaurant menu. Every dish ranked and explained for your goal in seconds.</p>
      </motion.div>

      {!scanned ? (
        <motion.div variants={item} className="space-y-4">
          <div
            onClick={() => setScanned(true)}
            className="group relative rounded-3xl border-2 border-dashed border-border bg-muted/20 p-14 flex flex-col items-center justify-center gap-5 cursor-pointer hover:border-primary/30 hover:bg-primary/3 transition-all duration-300"
          >
            <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-primary/8 transition-all duration-300 group-hover:bg-primary/14 group-hover:scale-105">
              <Upload className="h-8 w-8 text-primary" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground text-[15px]">Drop a menu photo here</p>
              <p className="text-[13px] text-muted-foreground mt-1.5">Photo, screenshot, or Swiggy/Zomato screen</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="lg" onClick={() => setScanned(true)}>
              <Camera className="mr-2 h-4 w-4" /> Take Photo
            </Button>
            <Button variant="outline" size="lg" onClick={() => setScanned(true)}>
              <Clipboard className="mr-2 h-4 w-4" /> Paste Menu
            </Button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2.5 rounded-2xl bg-primary/6 border border-primary/10 px-4 py-3">
            <Sparkles className="h-4 w-4 text-primary flex-shrink-0" strokeWidth={2} />
            <span className="text-[13px] font-medium text-primary">
              Ranked for your fat loss goal • 820 cal remaining
            </span>
          </div>

          <InsightCard type="tip" title="Pro tip" description="Grilled chicken is your best bet today. Skip the naan and save 200 calories." />

          <div className="space-y-3">
            {mockResults.map((meal, i) => (
              <motion.div
                key={meal.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <MealCard {...meal} />
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-card">
            <h3 className="font-semibold text-card-foreground text-[14px] mb-2">What if I still want dessert?</h3>
            <p className="text-[13px] text-muted-foreground leading-relaxed">
              Pick #1 (Grilled Chicken) → ~440 cal left. A small gulab jamun (~150 cal) fits. Skip the kulfi (~280 cal) though.
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
