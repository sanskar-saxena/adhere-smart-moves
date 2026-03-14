import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import MealCard from "@/components/adhere/MealCard";

const filters = ["All", "Under ₹200", "Veg", "High Protein", "Delivery"];

const nearbyMeals = [
  { name: "Grilled Chicken Wrap", restaurant: "Protein Point · 0.3 km", calories: 350, protein: 38, price: "₹180", tags: ["delivery ready", "closes your gap"], confidence: 95, recommended: true },
  { name: "Egg Bhurji + 2 Roti", restaurant: "Sagar Kitchen · 0.5 km", calories: 380, protein: 24, price: "₹120", tags: ["under budget", "eggetarian"], confidence: 78 },
  { name: "Soya Chunk Bowl", restaurant: "Green Bites · 0.8 km", calories: 320, protein: 28, price: "₹150", tags: ["veg", "solid protein"], confidence: 82 },
  { name: "Double Egg Sandwich", restaurant: "Toast & Co · 0.4 km", calories: 290, protein: 22, price: "₹100", tags: ["cheapest option", "grab & go"], confidence: 72 },
  { name: "Chicken Tikka + Salad", restaurant: "Fit Meals · 1.2 km", calories: 420, protein: 44, price: "₹250", tags: ["top pick for cut", "delivery"], confidence: 91 },
  { name: "Paneer Bhurji", restaurant: "Desi Tadka · 0.6 km", calories: 340, protein: 22, price: "₹130", tags: ["veg", "under budget"], confidence: 68 },
];

const NearbyProtein = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <motion.div
      className="space-y-5"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
    >
      <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } } }}>
        <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground mb-1">
          <MapPin className="h-3 w-3" />
          <span>Koramangala, Bangalore</span>
        </div>
        <h1 className="text-foreground">Nearby Protein</h1>
        <p className="text-[13px] text-muted-foreground mt-0.5">Ranked by protein per calorie for your cut. {nearbyMeals.length} options found.</p>
      </motion.div>

      {/* Filters */}
      <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } } }} className="flex gap-2 overflow-x-auto -mx-5 px-5 pb-1 scrollbar-hide">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`flex-shrink-0 rounded-full px-4 py-2 text-[12px] font-semibold transition-all duration-200 active:scale-95 ${
              activeFilter === f
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Results */}
      <div className="space-y-2.5">
        {nearbyMeals.map((meal, i) => (
          <motion.div
            key={meal.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <MealCard {...meal} rank={i + 1} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NearbyProtein;
