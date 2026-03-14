import { Home, ScanLine, Compass, TrendingUp, User, Wrench, Sparkles } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import AdhereLogo from "./AdhereLogo";

const navItems = [
  { icon: Home, label: "Today", path: "/app" },
  { icon: ScanLine, label: "Menu Scan", path: "/app/scan" },
  { icon: Wrench, label: "Fix My Day", path: "/app/fix" },
  { icon: Compass, label: "Nearby", path: "/app/nearby" },
  { icon: TrendingUp, label: "Progress", path: "/app/progress" },
  { icon: User, label: "Profile", path: "/app/profile" },
];

const DesktopSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="fixed left-0 top-0 bottom-0 z-40 w-64 border-r bg-card/50 backdrop-blur-xl flex flex-col">
      <div className="px-7 py-8">
        <AdhereLogo size="md" />
      </div>
      <nav className="flex-1 px-4 space-y-0.5">
        {navItems.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`relative flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                active
                  ? "bg-primary/8 text-primary shadow-xs"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-r-full bg-primary" />
              )}
              <Icon className="h-[18px] w-[18px]" strokeWidth={active ? 2.2 : 1.8} />
              {label}
            </button>
          );
        })}
      </nav>
      <div className="p-4">
        <div className="rounded-2xl bg-gradient-primary p-5 text-primary-foreground shadow-lg shadow-primary/10">
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className="h-4 w-4" />
            <span className="text-[13px] font-bold">Upgrade to Pro</span>
          </div>
          <p className="text-[12px] leading-relaxed opacity-80">Unlock AI coaching, unlimited scans & insights</p>
          <button className="mt-3 w-full rounded-xl bg-primary-foreground/15 backdrop-blur-sm py-2 text-[12px] font-semibold hover:bg-primary-foreground/25 transition-colors duration-200">
            View Plans
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
