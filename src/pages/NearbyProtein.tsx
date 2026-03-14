import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import PageHeader from "@/components/adhere/PageHeader";
import FilterPills from "@/components/adhere/FilterPills";
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
    <motion.div className="space-y-5" initial="hidden" animate="visible" variants={staggerContainer}>
      <PageHeader
        eyebrow="Nearby Fallbacks"
        title="Nearby Protein"
        description={`Ranked by protein per calorie for your cut. ${nearbyMeals.length} options found.`}
        leading={
          <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground mb-1">
            <MapPin className="h-3 w-3" />
            <span>Koramangala, Bangalore</span>
          </div>
        }
      />

      <motion.div variants={fadeUpItem}>
        <FilterPills filters={filters} active={activeFilter} onChange={setActiveFilter} />
      </motion.div>

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
