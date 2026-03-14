import { motion } from "framer-motion";
import { Target, Utensils, Wallet, MapPin, Bell, CreditCard, ChevronRight, LogOut, Sparkles } from "lucide-react";
import AdhereLogo from "@/components/adhere/AdhereLogo";

const settingsGroups = [
  {
    title: "Goals & Preferences",
    items: [
      { icon: Target, label: "Goal", value: "Fat Loss" },
      { icon: Utensils, label: "Food Preference", value: "Non-Vegetarian" },
      { icon: Wallet, label: "Meal Budget", value: "₹200/meal" },
      { icon: MapPin, label: "City", value: "Bangalore" },
    ],
  },
  {
    title: "App Settings",
    items: [
      { icon: Bell, label: "Notifications", value: "On" },
      { icon: CreditCard, label: "Subscription", value: "Pro Plan" },
    ],
  },
];

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const Profile = () => (
  <motion.div
    className="space-y-7"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
  >
    {/* Profile Header */}
    <motion.div variants={item} className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground text-2xl font-bold shadow-lg shadow-primary/10">
        A
      </div>
      <div>
        <h1 className="text-xl font-bold text-foreground tracking-tight">Arjun Mehta</h1>
        <p className="text-[13px] text-muted-foreground">arjun@example.com</p>
      </div>
    </motion.div>

    {/* Stats */}
    <motion.div variants={item} className="grid grid-cols-3 gap-3">
      {[
        { label: "Streak", value: "12", unit: "days" },
        { label: "Scans", value: "47", unit: "" },
        { label: "Adherence", value: "74", unit: "%" },
      ].map((stat) => (
        <div key={stat.label} className="rounded-2xl border bg-card p-3.5 shadow-card text-center">
          <div className="font-mono text-xl font-bold text-foreground tracking-tight">{stat.value}<span className="text-xs text-muted-foreground font-medium">{stat.unit}</span></div>
          <div className="text-2xs text-muted-foreground mt-1 uppercase tracking-label font-medium">{stat.label}</div>
        </div>
      ))}
    </motion.div>

    {/* Settings Groups */}
    {settingsGroups.map((group) => (
      <motion.div key={group.title} variants={item}>
        <h2 className="section-label mb-3">{group.title}</h2>
        <div className="rounded-2xl border bg-card shadow-card overflow-hidden divide-y divide-border">
          {group.items.map((settingItem) => (
            <button key={settingItem.label} className="flex w-full items-center gap-3.5 p-4 text-left hover:bg-muted/40 transition-colors duration-200 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted/70 transition-colors group-hover:bg-muted">
                <settingItem.icon className="h-[18px] w-[18px] text-muted-foreground" strokeWidth={1.8} />
              </div>
              <span className="flex-1 text-[13px] font-medium text-card-foreground">{settingItem.label}</span>
              <span className="text-[13px] text-muted-foreground">{settingItem.value}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
            </button>
          ))}
        </div>
      </motion.div>
    ))}

    {/* Pro Card */}
    <motion.div variants={item}>
      <div className="rounded-3xl bg-gradient-primary p-6 text-primary-foreground shadow-lg shadow-primary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/2" />
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4" />
          <h3 className="font-bold text-[15px]">You're on Pro</h3>
        </div>
        <p className="text-[13px] opacity-80 leading-relaxed">Unlimited scans, AI coaching, and advanced insights.</p>
        <button className="mt-4 rounded-xl bg-primary-foreground/15 backdrop-blur-sm px-5 py-2.5 text-[12px] font-semibold hover:bg-primary-foreground/25 transition-colors duration-200">
          Manage Subscription
        </button>
      </div>
    </motion.div>

    {/* Logout */}
    <motion.div variants={item}>
      <button className="flex w-full items-center justify-center gap-2 rounded-2xl border bg-card p-3.5 text-[13px] font-semibold text-destructive shadow-card hover:bg-destructive/5 transition-all duration-200 active:scale-[0.98]">
        <LogOut className="h-4 w-4" />
        Log Out
      </button>
    </motion.div>

    <motion.div variants={item} className="text-center pt-4 pb-8">
      <AdhereLogo size="sm" />
      <p className="text-2xs text-muted-foreground mt-2">Version 1.0.0</p>
    </motion.div>
  </motion.div>
);

export default Profile;
