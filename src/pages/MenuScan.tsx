import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Camera, Clipboard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import MealCard from "@/components/adhere/MealCard";
import InsightCard from "@/components/adhere/InsightCard";

const mockResults = [
  { name: "Grilled Chicken Breast", restaurant: "The Health Bowl", calories: 380, protein: 42, price: "₹280", tags: ["best for cut", "best protein/cal"], rank: 1, confidence: 96, recommended: true },
  { name: "Paneer Tikka Platter", restaurant: "The Health Bowl", calories: 420, protein: 32, price: "₹250", tags: ["vegetarian", "high protein"], rank: 2, confidence: 88 },
  { name: "Egg White Omelette", restaurant: "The Health Bowl", calories: 280, protein: 28, price: "₹180", tags: ["best under budget", "low cal"], rank: 3, confidence: 82 },
  { name: "Dal Makhani + Roti", restaurant: "The Health Bowl", calories: 520, protein: 18, price: "₹200", tags: ["safest social option"], rank: 4, confidence: 45 },
  { name: "Butter Chicken + Naan", restaurant: "The Health Bowl", calories: 780, protein: 35, price: "₹350", tags: ["avoid if cutting"], rank: 5, confidence: 30 },
];

const MenuScan = () => {
  const [scanned, setScanned] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Menu Scan</h1>
        <p className="text-sm text-muted-foreground mt-1">Upload a menu photo and get ranked options for your goal.</p>
      </div>

      {!scanned ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div
            onClick={() => setScanned(true)}
            className="relative rounded-2xl border-2 border-dashed border-border bg-muted/30 p-12 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-all"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">Upload menu photo</p>
              <p className="text-sm text-muted-foreground mt-1">JPG, PNG, or screenshot</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-12" onClick={() => setScanned(true)}>
              <Camera className="mr-2 h-4 w-4" /> Take Photo
            </Button>
            <Button variant="outline" className="h-12" onClick={() => setScanned(true)}>
              <Clipboard className="mr-2 h-4 w-4" /> Paste Menu
            </Button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Ranked for your fat loss goal • 820 cal remaining
            </span>
          </div>

          <InsightCard type="tip" title="Pro tip" description="Grilled chicken is your best bet today. Skip the naan and save 200 calories." />

          <div className="space-y-3">
            {mockResults.map((meal) => (
              <MealCard key={meal.name} {...meal} />
            ))}
          </div>

          <div className="rounded-2xl border bg-card p-4 card-shadow">
            <h3 className="font-semibold text-card-foreground text-sm mb-2">What if I still want dessert?</h3>
            <p className="text-sm text-muted-foreground">
              If you pick option #1 (Grilled Chicken), you'd have ~440 cal left. A small gulab jamun (~150 cal) fits. Skip the kulfi (~280 cal) though.
            </p>
          </div>

          <Button variant="outline" className="w-full" onClick={() => setScanned(false)}>
            Scan Another Menu
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default MenuScan;
