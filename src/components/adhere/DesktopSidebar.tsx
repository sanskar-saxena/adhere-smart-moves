import { Home, ScanLine, Compass, TrendingUp, User, Wrench, Zap } from "lucide-react";
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
    <aside className="fixed left-0 top-0 bottom-0 z-40 w-64 border-r bg-card flex flex-col">
      <div className="p-6">
        <AdhereLogo size="md" />
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </button>
          );
        })}
      </nav>
      <div className="p-4">
        <div className="rounded-xl bg-gradient-primary p-4 text-primary-foreground">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-semibold">Upgrade to Pro</span>
          </div>
          <p className="text-xs opacity-80">Unlock AI coaching & unlimited scans</p>
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
