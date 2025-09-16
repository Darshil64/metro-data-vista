import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { Layout } from "@/components/layout/Layout";
import { Login } from "@/pages/Login";
import { Dashboard } from "@/pages/Dashboard";
import { MultiSourceIngestion } from "@/pages/MultiSourceIngestion";
import { AIProcessing } from "@/pages/AIProcessing";
import { CentralRepository } from "@/pages/CentralRepository";
import { SecurityLayer } from "@/pages/SecurityLayer";
import { Outputs } from "@/pages/Outputs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Layout>{children}</Layout> : <Navigate to="/login" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/ingestion" element={
              <ProtectedRoute>
                <MultiSourceIngestion />
              </ProtectedRoute>
            } />
            <Route path="/ai-processing" element={
              <ProtectedRoute>
                <AIProcessing />
              </ProtectedRoute>
            } />
            <Route path="/repository" element={
              <ProtectedRoute>
                <CentralRepository />
              </ProtectedRoute>
            } />
            <Route path="/security" element={
              <ProtectedRoute>
                <SecurityLayer />
              </ProtectedRoute>
            } />
            <Route path="/outputs" element={
              <ProtectedRoute>
                <Outputs />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
