import { motion } from "framer-motion";
import { Target, Utensils, Wallet, MapPin, Bell, CreditCard, LogOut, Sparkles } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import AdhereLogo from "@/components/adhere/AdhereLogo";
import StatBlock from "@/components/adhere/StatBlock";
import SettingsGroup, { type SettingItem } from "@/components/adhere/SettingsGroup";
import HeroCard from "@/components/adhere/HeroCard";

const settingsGroups = [
  {
    title: "Goals & Preferences",
    items: [
      { icon: Target, label: "Goal", value: "Fat Loss" },
      { icon: Utensils, label: "Food Preference", value: "Non-Vegetarian" },
      { icon: Wallet, label: "Meal Budget", value: "₹200/meal" },
      { icon: MapPin, label: "City", value: "Bangalore" },
    ] as SettingItem[],
  },
  {
    title: "App Settings",
    items: [
      { icon: Bell, label: "Notifications", value: "On" },
      { icon: CreditCard, label: "Subscription", value: "Pro Plan" },
    ] as SettingItem[],
  },
];

const Profile = () => (
  <motion.div className="space-y-7" initial="hidden" animate="visible" variants={staggerContainer}>
    {/* Profile Header */}
    <motion.div variants={fadeUpItem} className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground text-2xl font-bold shadow-lg shadow-primary/10">
        A
      </div>
      <div>
        <h1 className="text-xl font-bold text-foreground tracking-tight">Arjun Mehta</h1>
        <p className="text-[13px] text-muted-foreground">arjun@example.com</p>
      </div>
    </motion.div>

    {/* Stats */}
    <motion.div variants={fadeUpItem} className="grid grid-cols-3 gap-3">
      {[
        { label: "Streak", value: "12", unit: "d" },
        { label: "Decisions", value: "47" },
        { label: "Adherence", value: "74", unit: "%" },
      ].map((stat) => (
        <div key={stat.label} className="rounded-2xl border bg-card p-3.5 shadow-card text-center">
          <div className="font-mono text-xl font-bold text-foreground tracking-tight">
            {stat.value}
            {stat.unit && <span className="text-xs text-muted-foreground font-medium">{stat.unit}</span>}
          </div>
          <div className="text-2xs text-muted-foreground mt-1 uppercase tracking-label font-medium">{stat.label}</div>
        </div>
      ))}
    </motion.div>

    {/* Settings Groups */}
    {settingsGroups.map((group) => (
      <motion.div key={group.title} variants={fadeUpItem}>
        <SettingsGroup title={group.title} items={group.items} />
      </motion.div>
    ))}

    {/* Pro Card */}
    <motion.div variants={fadeUpItem}>
      <HeroCard
        eyebrowIcon={Sparkles}
        eyebrow="Pro — Active"
        headline="Unlimited scans, pattern recognition, full recovery engine, and nearby fallbacks."
        body=""
        actions={
          <button className="rounded-xl bg-primary-foreground/15 backdrop-blur-sm px-5 py-2.5 text-[12px] font-semibold hover:bg-primary-foreground/25 transition-colors duration-200">
            Manage Subscription
          </button>
        }
      />
    </motion.div>

    {/* Logout */}
    <motion.div variants={fadeUpItem}>
      <button className="flex w-full items-center justify-center gap-2 rounded-2xl border bg-card p-3.5 text-[13px] font-semibold text-destructive shadow-card hover:bg-destructive/5 transition-all duration-200 active:scale-[0.98]">
        <LogOut className="h-4 w-4" />
        Log Out
      </button>
    </motion.div>

    <motion.div variants={fadeUpItem} className="text-center pt-4 pb-8">
      <AdhereLogo size="sm" />
      <p className="text-2xs text-muted-foreground mt-2">Version 1.0.0</p>
    </motion.div>
  </motion.div>
);

export default Profile;
