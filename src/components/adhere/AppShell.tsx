import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import DesktopSidebar from "./DesktopSidebar";

const AppShell = () => (
  <div className="min-h-screen bg-background">
    <div className="hidden md:block">
      <DesktopSidebar />
    </div>
    <main className="pb-20 md:pb-0 md:pl-64">
      <div className="mx-auto max-w-xl px-5 py-6 md:max-w-2xl md:py-10">
        <Outlet />
      </div>
    </main>
    <BottomNav />
  </div>
);

export default AppShell;
