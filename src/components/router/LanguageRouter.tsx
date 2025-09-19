import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { AuthProvider, useAuth } from '../../contexts/AuthContext';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import HomePage from '../../pages/public/HomePage';
import AboutPage from '../../pages/public/AboutPage';
import ProjectsPage from '../../pages/public/ProjectsPage';
import ContactPage from '../../pages/public/ContactPage';
import LoginPage from '../../pages/auth/LoginPage';
import SignupPage from '../../pages/auth/SignupPage';
import AdminDashboard from '../../pages/admin/AdminDashboard';

// Supported languages
const supportedLanguages = ['en', 'es', 'fr'];
const defaultLanguage = 'en';

// Language wrapper component
const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentLang = lang || defaultLanguage;
    
    // If language is not supported, redirect to default language
    if (!supportedLanguages.includes(currentLang)) {
      const newPath = location.pathname.replace(`/${lang}`, `/${defaultLanguage}`);
      navigate(newPath, { replace: true });
      return;
    }

    // Change i18n language if different
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [lang, i18n, navigate, location.pathname]);

  return <>{children}</>;
};

// Layout component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
    <Header />
    <main className="pt-16">
      {children}
    </main>
    <Footer />
  </div>
);

// Protected route component
const ProtectedRoute: React.FC<{ children: React.ReactNode; adminOnly?: boolean }> = ({ 
  children, 
  adminOnly = false 
}) => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/en/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/en/" replace />;
  }

  return <>{children}</>;
};

// Root redirect component
const RootRedirect: React.FC = () => {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Get user's preferred language from browser or localStorage
    const browserLang = navigator.language.split('-')[0];
    const storedLang = localStorage.getItem('i18nextLng');
    const preferredLang = storedLang || browserLang || defaultLanguage;
    
    // Use preferred language if supported, otherwise default
    const targetLang = supportedLanguages.includes(preferredLang) ? preferredLang : defaultLanguage;
    
    // Redirect to language-specific home page
    window.location.replace(`/${targetLang}/`);
  }, [i18n]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  );
};

function LanguageRouter() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Root redirect */}
            <Route path="/" element={<RootRedirect />} />
            
            {/* Language-specific routes */}
            <Route path="/:lang/*" element={
              <LanguageWrapper>
                <Layout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    
                    {/* Protected Admin Routes */}
                    <Route 
                      path="/admin" 
                      element={
                        <ProtectedRoute adminOnly>
                          <AdminDashboard />
                        </ProtectedRoute>
                      } 
                    />
                    
                    {/* Fallback route */}
                    <Route path="*" element={<Navigate to="" replace />} />
                  </Routes>
                </Layout>
              </LanguageWrapper>
            } />
            
            {/* Fallback for unsupported routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
                border: '1px solid var(--toast-border)',
              },
            }}
          />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default LanguageRouter;