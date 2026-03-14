import { Home, ScanLine, Compass, TrendingUp, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Today", path: "/app" },
  { icon: ScanLine, label: "Scan", path: "/app/scan" },
  { icon: Compass, label: "Nearby", path: "/app/nearby" },
  { icon: TrendingUp, label: "Progress", path: "/app/progress" },
  { icon: User, label: "Profile", path: "/app/profile" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/80 backdrop-blur-xl safe-area-pb md:hidden">
      <div className="flex items-center justify-around py-1.5">
        {navItems.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`relative flex flex-col items-center gap-0.5 px-4 py-2 transition-all duration-200 ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {active && (
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-primary" />
              )}
              <Icon className="h-5 w-5" strokeWidth={active ? 2.2 : 1.8} />
              <span className="text-2xs font-semibold">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
