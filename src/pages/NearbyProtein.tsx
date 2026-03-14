import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Filter, MapPin } from "lucide-react";
import MealCard from "@/components/adhere/MealCard";

const filters = ["All", "Under ₹200", "Veg Only", "High Protein", "Delivery"];

const nearbyMeals = [
  { name: "Grilled Chicken Wrap", restaurant: "Protein Point • 0.3 km", calories: 350, protein: 38, price: "₹180", tags: ["delivery", "high protein"], confidence: 95, recommended: true },
  { name: "Egg Bhurji + 2 Roti", restaurant: "Sagar Kitchen • 0.5 km", calories: 380, protein: 24, price: "₹120", tags: ["under ₹200", "eggetarian"], confidence: 78 },
  { name: "Soya Chunk Bowl", restaurant: "Green Bites • 0.8 km", calories: 320, protein: 28, price: "₹150", tags: ["veg", "high protein"], confidence: 82 },
  { name: "Double Egg Sandwich", restaurant: "Toast & Co • 0.4 km", calories: 290, protein: 22, price: "₹100", tags: ["under ₹200", "quick"], confidence: 72 },
  { name: "Chicken Tikka + Salad", restaurant: "Fit Meals • 1.2 km", calories: 420, protein: 44, price: "₹250", tags: ["best for cut", "delivery"], confidence: 91 },
  { name: "Paneer Bhurji", restaurant: "Desi Tadka • 0.6 km", calories: 340, protein: 22, price: "₹130", tags: ["veg", "under ₹200"], confidence: 68 },
];

const NearbyProtein = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Compass className="h-5 w-5 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Nearby Protein</h1>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span>Koramangala, Bangalore</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeFilter === f
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Summary */}
      <div className="flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3">
        <Filter className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-primary">
          {nearbyMeals.length} options • Ranked by protein for your fat loss goal
        </span>
      </div>

      {/* Results */}
      <motion.div
        className="space-y-3"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {nearbyMeals.map((meal, i) => (
          <motion.div
            key={meal.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <MealCard {...meal} rank={i + 1} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NearbyProtein;
