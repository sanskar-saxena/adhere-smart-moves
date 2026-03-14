import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Compass } from "lucide-react";
import { staggerContainer, fadeUpItem, SPRING_EASE } from "@/lib/motion";
import PageHeader from "@/components/adhere/PageHeader";
import FilterPills from "@/components/adhere/FilterPills";
import MealCard from "@/components/adhere/MealCard";
import EmptyState from "@/components/adhere/EmptyState";
import ErrorState from "@/components/adhere/ErrorState";
import { MealListSkeleton } from "@/components/adhere/Skeletons";

const filters = ["All", "Under ₹200", "Veg", "High Protein", "Delivery"];

const nearbyMeals = [
  { name: "Grilled Chicken Wrap", restaurant: "Protein Point · 0.3 km", calories: 350, protein: 38, price: "₹180", tags: ["delivery ready", "closes your gap"], confidence: 95, recommended: true },
  { name: "Egg Bhurji + 2 Roti", restaurant: "Sagar Kitchen · 0.5 km", calories: 380, protein: 24, price: "₹120", tags: ["under budget", "eggetarian"], confidence: 78 },
  { name: "Soya Chunk Bowl", restaurant: "Green Bites · 0.8 km", calories: 320, protein: 28, price: "₹150", tags: ["veg", "solid protein"], confidence: 82 },
  { name: "Double Egg Sandwich", restaurant: "Toast & Co · 0.4 km", calories: 290, protein: 22, price: "₹100", tags: ["cheapest option", "grab & go"], confidence: 72 },
  { name: "Chicken Tikka + Salad", restaurant: "Fit Meals · 1.2 km", calories: 420, protein: 44, price: "₹250", tags: ["top pick for cut", "delivery"], confidence: 91 },
  { name: "Paneer Bhurji", restaurant: "Desi Tadka · 0.6 km", calories: 340, protein: 22, price: "₹130", tags: ["veg", "under budget"], confidence: 68 },
];

const filterMap: Record<string, (m: typeof nearbyMeals[0]) => boolean> = {
  "All": () => true,
  "Under ₹200": (m) => parseInt(m.price.replace(/[^\d]/g, "")) <= 200,
  "Veg": (m) => m.tags.some((t) => t.toLowerCase().includes("veg")),
  "High Protein": (m) => m.protein >= 30,
  "Delivery": (m) => m.tags.some((t) => t.toLowerCase().includes("delivery")),
};

const NearbyProtein = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const filtered = nearbyMeals.filter(filterMap[activeFilter] || (() => true));

  if (error) {
    return (
      <div className="space-y-5">
        <PageHeader eyebrow="Nearby Fallbacks" title="Nearby Protein" />
        <ErrorState
          title="Location unavailable"
          description="We need your location to find nearby options. Enable location access and try again."
          onRetry={() => { setError(false); setLoading(true); setTimeout(() => setLoading(false), 900); }}
        />
      </div>
    );
  }

  return (
    <motion.div className="space-y-5" initial="hidden" animate="visible" variants={staggerContainer}>
      <PageHeader
        eyebrow="Nearby Fallbacks"
        title="Nearby Protein"
        description={loading ? undefined : `Ranked by protein per calorie for your cut. ${filtered.length} options found.`}
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

      {loading ? (
        <MealListSkeleton count={4} />
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={Compass}
          title="No matches for this filter"
          description="Try broadening your filter or checking a different area."
          action={{ label: "Show all options", onClick: () => setActiveFilter("All") }}
        />
      ) : (
        <div className="space-y-2.5">
          {filtered.map((meal, i) => (
            <motion.div
              key={meal.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: SPRING_EASE }}
            >
              <MealCard {...meal} rank={i + 1} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default NearbyProtein;
