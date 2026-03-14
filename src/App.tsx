import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import AppShell from "./components/adhere/AppShell";
import Home from "./pages/Home";
import MenuScan from "./pages/MenuScan";
import FixMyDay from "./pages/FixMyDay";
import NearbyProtein from "./pages/NearbyProtein";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/app" element={<AppShell />}>
            <Route index element={<Home />} />
            <Route path="scan" element={<MenuScan />} />
            <Route path="fix" element={<FixMyDay />} />
            <Route path="nearby" element={<NearbyProtein />} />
            <Route path="progress" element={<Progress />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
