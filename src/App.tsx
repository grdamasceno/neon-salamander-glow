import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/MainLayout";
import Inventory from "./pages/Inventory";
import Sale from "./pages/Sale";
import StorePortal from "./pages/StorePortal";
import OrdersApprove from "./pages/OrdersApprove";
import Receivables from "./pages/Receivables";
import Purchases from "./pages/Purchases";
import Payables from "./pages/Payables";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Index />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="sale" element={<Sale />} />
            <Route path="store-portal" element={<StorePortal />} />
            <Route path="orders-approve" element={<OrdersApprove />} />
            <Route path="receivables" element={<Receivables />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="payables" element={<Payables />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;