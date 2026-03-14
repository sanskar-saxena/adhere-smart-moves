import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Filter, MapPin } from "lucide-react";
import MealCard from "@/components/adhere/MealCard";

const filters = ["All", "Under ₹200", "Veg Only", "High Protein", "Delivery"];

const nearbyMeals = [
  { name: "Grilled Chicken Wrap", restaurant: "Protein Point • 0.3 km", calories: 350, protein: 38, price: "₹180", tags: ["delivery ready", "closes your gap"], confidence: 95, recommended: true },
  { name: "Egg Bhurji + 2 Roti", restaurant: "Sagar Kitchen • 0.5 km", calories: 380, protein: 24, price: "₹120", tags: ["under budget", "eggetarian"], confidence: 78 },
  { name: "Soya Chunk Bowl", restaurant: "Green Bites • 0.8 km", calories: 320, protein: 28, price: "₹150", tags: ["veg", "solid protein"], confidence: 82 },
  { name: "Double Egg Sandwich", restaurant: "Toast & Co • 0.4 km", calories: 290, protein: 22, price: "₹100", tags: ["cheapest option", "grab & go"], confidence: 72 },
  { name: "Chicken Tikka + Salad", restaurant: "Fit Meals • 1.2 km", calories: 420, protein: 44, price: "₹250", tags: ["top pick for cut", "delivery"], confidence: 91 },
  { name: "Paneer Bhurji", restaurant: "Desi Tadka • 0.6 km", calories: 340, protein: 22, price: "₹130", tags: ["veg", "under budget"], confidence: 68 },
];

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const NearbyProtein = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
    >
      <motion.div variants={item}>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/8">
            <Compass className="h-[18px] w-[18px] text-primary" strokeWidth={1.8} />
          </div>
          <div>
            <h1 className="text-foreground">Nearby Fallbacks</h1>
            <div className="flex items-center gap-1 text-2xs text-muted-foreground mt-0.5">
              <MapPin className="h-3 w-3" />
              <span>Koramangala, Bangalore</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div variants={item} className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5 scrollbar-hide">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`flex-shrink-0 rounded-full px-4 py-2 text-[12px] font-semibold transition-all duration-200 ${
              activeFilter === f
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Summary */}
      <motion.div variants={item} className="flex items-center gap-2.5 rounded-2xl bg-primary/6 border border-primary/10 px-4 py-3">
        <Filter className="h-4 w-4 text-primary flex-shrink-0" strokeWidth={2} />
        <span className="text-[13px] font-medium text-primary">
          {nearbyMeals.length} options • Ranked by protein for fat loss
        </span>
      </motion.div>

      {/* Results */}
      <div className="space-y-3">
        {nearbyMeals.map((meal, i) => (
          <motion.div
            key={meal.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <MealCard {...meal} rank={i + 1} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NearbyProtein;
