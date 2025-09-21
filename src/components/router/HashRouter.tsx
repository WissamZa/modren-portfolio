// AppRouter.tsx — FIXED
import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,

} from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { AuthProvider } from '../../contexts/AuthContext';
import { useAuth } from '../../contexts/auth-utils';
import Layout from '../../components/layout/Layout'; 
import HomePage from '../../pages/public/HomePage';
import AboutPage from '../../pages/public/AboutPage';
import ProjectsPage from '../../pages/public/ProjectsPage';
import ContactPage from '../../pages/public/ContactPage';
import LoginPage from '../../pages/auth/LoginPage';
import NotFoundPage from '../../pages/public/NotFoundPage';
import AdminDashboard from '../../pages/admin/AdminDashboard';
import RedirectToLocale from './RedirectToLocale'; // 

// ProtectedRoute — preserve lang in redirects
const ProtectedRoute: React.FC<{ children: React.ReactNode; adminOnly?: boolean }> = ({ 
  children, 
  adminOnly = false 
}) => {
  const { user, isAdmin, loading } = useAuth();
  const { lang } = useParams<{ lang: string }>();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={`/${lang || 'en'}/login`} replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to={`/${lang || 'en'}`} replace />;
  }

  return <>{children}</>;
};

function AppRouter() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Redirect / → /en or /ar */}
            <Route path="/" element={<RedirectToLocale />} />
            {/* 👇 All routes under /:lang — wrap with Layout */}
            <Route path="/:lang" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
              
              <Route 
                path="admin" 
                element={
                  <ProtectedRoute adminOnly>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="" replace />} />
            </Route>
          </Routes>

          <Toaster position="bottom-right" />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default AppRouter;