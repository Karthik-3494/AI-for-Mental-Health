
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Talk from "./pages/Talk";
import Mindfulness from "./pages/Mindfulness";
import Journal from "./pages/Journal";
import Consult from "./pages/Consult";
import Communities from "./pages/Communities";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/mindfulness" element={<Mindfulness />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
