import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/design.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import SearchPage from './pages/Search';
import GeneratorPage from './pages/Generator';
import DashboardPage from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/Login';
import LawyersPage from './pages/Lawyers';
import AssistantPage from './pages/Assistant';
import ContactPage from './pages/Contact';
import DashboardLawyer from './pages/DashboardLawyer';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import RegistrationForm from './components/forms/UserRegistrationForm';
import { useState } from 'react';
import LawyerRegistrationForm from './components/forms/LawyerRegistrationForm';
import Modal from './components/ui/Modal';
import GuidePratique from './pages/GuidePratique';
import FAQ from './pages/FAQ';

function RequireRole({ role, children }: { role: 'user' | 'admin'; children: React.ReactNode }) {
  const current = (typeof window !== 'undefined' && localStorage.getItem('role')) as 'user' | 'admin' | null;
  if (!current) return <Navigate to="/login" replace />;
  if (current !== role) return <Navigate to={current === 'admin' ? '/dashboard/admin' : '/dashboard/user'} replace />;
  return <>{children}</>;
}

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [accountType, setAccountType] = useState<'user' | 'lawyer'>('user');

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/generator" element={<GeneratorPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/assistant" element={<AssistantPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dashboard/lawyer" element={<DashboardLawyer />} />
            <Route path="/register" element={<RegistrationForm type={accountType} onClose={() => setShowRegistration(false)} />} />
            <Route path="/register/lawyer" element={<LawyerRegistrationForm onClose={() => setShowRegistration(false)} />} />
            <Route path="/register" element={<Modal isOpen={showRegistration} onClose={() => setShowRegistration(false)}>
              <RegistrationForm type={accountType} onClose={() => setShowRegistration(false)} />
            </Modal>} />
            <Route path="/guide" element={<GuidePratique />} />
            <Route path="/faq" element={<FAQ />} />
            
            
            
            <Route
              path="/dashboard/user"
              element={
                <RequireRole role="user">
                  <DashboardPage />
                </RequireRole>
              }
            />
            <Route
              path="/dashboard/admin"
              element={
                <RequireRole role="admin">
                  <AdminDashboard />
                </RequireRole>
              }
            />
            <Route path="/dashboard" element={<Navigate to="/dashboard/user" replace />} />
            <Route path="/lawyers" element={<LawyersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
