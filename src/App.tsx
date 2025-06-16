import { Web3Provider } from '@avalabs/builderkit';
import { avalanche, avalancheFuji } from '@wagmi/core/chains'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import DataSubmission from "./pages/DataSubmission";
import Marketplace from "./pages/Marketplace";
import Earnings from "./pages/Earnings";
import Governance from "./pages/Governance";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const chains = [avalanche, avalancheFuji];
const App = () => (
   <Web3Provider
    appName="memonaic"
    projectId="4bd0cc5b065ff2e0cebfe87a8586139b"
    chains={chains}
  >
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data-submission" element={<DataSubmission />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </Web3Provider>
);

export default App;
