import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PayrollService from "./pages/services/PayrollService";
import TaxationService from "./pages/services/TaxationService";
import AuditingService from "./pages/services/AuditingService";
import FinancialStatementsService from "./pages/services/FinancialStatementsService";
import BookkeepingService from "./pages/services/BookkeepingService";
import VirtualCFOService from "./pages/services/VirtualCFOService";
import FinancialReportingService from "./pages/services/FinancialReportingService";
import FinancialModelingService from "./pages/services/FinancialModelingService";
import AccountingSoftwareDetailsPage from "./pages/AccountingSoftwareDetailsPage";
import IndustryDetailRouter from "./pages/IndustryDetailRouter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              
              {/* Individual Service Routes */}
              <Route path="/services/bookkeeping" element={<BookkeepingService />} />
              <Route path="/services/payroll" element={<PayrollService />} />
              <Route path="/services/taxation" element={<TaxationService />} />
              <Route path="/services/auditing" element={<AuditingService />} />
              <Route path="/services/financial-statements" element={<FinancialStatementsService />} />
              <Route path="/industries/:slug" element={<IndustryDetailRouter />} />

              <Route path="/industries" element={<Industries />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/financial-reporting" element={<FinancialReportingService />} />
<Route path="/services/virtual-cfo" element={<VirtualCFOService />} />
<Route path="/services/financial-modeling" element={<FinancialModelingService />} />
<Route path="/software-stack" element={<AccountingSoftwareDetailsPage />} />

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;