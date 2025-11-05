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

function RequireRole({ role, children }: { role: 'user' | 'admin'; children: React.ReactNode }) {
  const current = (typeof window !== 'undefined' && localStorage.getItem('role')) as 'user' | 'admin' | null;
  if (!current) return <Navigate to="/login" replace />;
  if (current !== role) return <Navigate to={current === 'admin' ? '/dashboard/admin' : '/dashboard/user'} replace />;
  return <>{children}</>;
}

function App() {
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
