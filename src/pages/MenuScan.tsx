import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles, ScanLine, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import PageHeader from "@/components/adhere/PageHeader";
import ScanUploader from "@/components/adhere/ScanUploader";
import ScanProcessing from "@/components/adhere/ScanProcessing";
import UploadProgress from "@/components/adhere/UploadProgress";
import AlertBanner from "@/components/adhere/AlertBanner";
import MealCard from "@/components/adhere/MealCard";
import EmptyState from "@/components/adhere/EmptyState";
import ErrorState from "@/components/adhere/ErrorState";
import { MealListSkeleton } from "@/components/adhere/Skeletons";

const mockResults = [
  { name: "Grilled Chicken Breast", restaurant: "The Health Bowl", calories: 380, protein: 42, price: "₹280", tags: ["best for your cut", "highest protein/cal"], rank: 1, confidence: 96, recommended: true },
  { name: "Paneer Tikka Platter", restaurant: "The Health Bowl", calories: 420, protein: 32, price: "₹250", tags: ["strong veg option", "fits your budget"], rank: 2, confidence: 88 },
  { name: "Egg White Omelette", restaurant: "The Health Bowl", calories: 280, protein: 28, price: "₹180", tags: ["lowest calorie", "under budget"], rank: 3, confidence: 82 },
  { name: "Dal Makhani + Roti", restaurant: "The Health Bowl", calories: 520, protein: 18, price: "₹200", tags: ["social-safe pick"], rank: 4, confidence: 45 },
  { name: "Butter Chicken + Naan", restaurant: "The Health Bowl", calories: 780, protein: 35, price: "₹350", tags: ["will blow your deficit"], rank: 5, confidence: 30 },
];

type ScanState = "idle" | "uploading" | "processing" | "done" | "error" | "partial";

const MenuScan = () => {
  const [state, setState] = useState<ScanState>("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const [visibleResults, setVisibleResults] = useState(mockResults);

  const simulateUpload = useCallback(() => {
    setState("uploading");
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setState("processing");
          return 100;
        }
        return p + Math.random() * 18 + 4;
      });
    }, 120);
  }, []);

  useEffect(() => {
    if (state !== "processing") return;
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setState("done");
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [state]);

  const handleRetry = () => {
    setState("idle");
    setUploadProgress(0);
    setScanProgress(0);
  };

  return (
    <motion.div className="space-y-5" initial="hidden" animate="visible" variants={staggerContainer}>
      <PageHeader
        eyebrow="Decision Engine"
        title="Scan a Menu"
        description="Photo any menu. Every dish ranked for your goal in seconds."
      />

      {/* ─── IDLE: Upload zone ─── */}
      {state === "idle" && (
        <motion.div variants={fadeUpItem}>
          <ScanUploader onScan={simulateUpload} />
        </motion.div>
      )}

      {/* ─── UPLOADING: File progress ─── */}
      {state === "uploading" && (
        <motion.div variants={fadeUpItem} className="space-y-3">
          <UploadProgress
            fileName="restaurant-menu.jpg"
            progress={Math.min(uploadProgress, 100)}
            status="uploading"
            onRemove={handleRetry}
          />
        </motion.div>
      )}

      {/* ─── PROCESSING: Scan animation ─── */}
      {state === "processing" && (
        <motion.div variants={fadeUpItem}>
          <ScanProcessing progress={Math.min(scanProgress, 100)} />
        </motion.div>
      )}

      {/* ─── ERROR: Graceful failure ─── */}
      {state === "error" && (
        <ErrorState
          title="Couldn't read this menu"
          description="The image was too blurry or the format isn't supported. Try a clearer photo or paste the menu text instead."
          onRetry={handleRetry}
        />
      )}

      {/* ─── DONE: Full results ─── */}
      {state === "done" && (
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
            {visibleResults.map((meal, i) => (
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

          <Button variant="outline" className="w-full" onClick={handleRetry}>
            Scan Another Menu
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MenuScan;
