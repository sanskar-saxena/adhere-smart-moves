import { motion } from "framer-motion";
import { User, Target, Utensils, Wallet, MapPin, Bell, CreditCard, ChevronRight, LogOut } from "lucide-react";
import AdhereLogo from "@/components/adhere/AdhereLogo";

const settingsGroups = [
  {
    title: "Goals & Preferences",
    items: [
      { icon: Target, label: "Goal", value: "Fat Loss", path: "#" },
      { icon: Utensils, label: "Food Preference", value: "Non-Vegetarian", path: "#" },
      { icon: Wallet, label: "Meal Budget", value: "₹200/meal", path: "#" },
      { icon: MapPin, label: "City", value: "Bangalore", path: "#" },
    ],
  },
  {
    title: "App Settings",
    items: [
      { icon: Bell, label: "Notifications", value: "On", path: "#" },
      { icon: CreditCard, label: "Subscription", value: "Pro Plan", path: "#" },
    ],
  },
];

const Profile = () => (
  <div className="space-y-6">
    {/* Profile Header */}
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground text-2xl font-bold">
        A
      </div>
      <div>
        <h1 className="text-xl font-bold text-foreground">Arjun Mehta</h1>
        <p className="text-sm text-muted-foreground">arjun@example.com</p>
      </div>
    </motion.div>

    {/* Stats Summary */}
    <div className="grid grid-cols-3 gap-3">
      {[
        { label: "Streak", value: "12 days" },
        { label: "Scans", value: "47" },
        { label: "Avg Adherence", value: "74%" },
      ].map((stat) => (
        <div key={stat.label} className="rounded-xl border bg-card p-3 card-shadow text-center">
          <div className="text-lg font-bold text-foreground">{stat.value}</div>
          <div className="text-xs text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Settings Groups */}
    {settingsGroups.map((group) => (
      <div key={group.title}>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">{group.title}</h2>
        <div className="rounded-2xl border bg-card card-shadow overflow-hidden divide-y">
          {group.items.map((item) => (
            <button key={item.label} className="flex w-full items-center gap-3 p-4 text-left hover:bg-muted/50 transition-colors">
              <item.icon className="h-5 w-5 text-muted-foreground" />
              <span className="flex-1 text-sm font-medium text-card-foreground">{item.label}</span>
              <span className="text-sm text-muted-foreground">{item.value}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    ))}

    {/* Pro Card */}
    <div className="rounded-2xl bg-gradient-primary p-5 text-primary-foreground">
      <h3 className="font-semibold">You're on Pro ✨</h3>
      <p className="text-sm opacity-80 mt-1">Unlimited scans, AI coaching, and advanced insights.</p>
      <button className="mt-3 rounded-lg bg-primary-foreground/20 px-4 py-2 text-sm font-medium hover:bg-primary-foreground/30 transition-colors">
        Manage Subscription
      </button>
    </div>

    {/* Logout */}
    <button className="flex w-full items-center justify-center gap-2 rounded-xl border bg-card p-3 text-sm font-medium text-destructive card-shadow hover:bg-destructive/5 transition-colors">
      <LogOut className="h-4 w-4" />
      Log Out
    </button>

    <div className="text-center pt-4 pb-8">
      <AdhereLogo size="sm" />
      <p className="text-xs text-muted-foreground mt-2">Version 1.0.0</p>
    </div>
  </div>
);

export default Profile;
