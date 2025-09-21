// src/components/layout/Layout.tsx
import { useEffect } from "react";
import { useParams, useLocation, useNavigate,Outlet } from "react-router-dom"; // 👈 ADD THIS
import { useTranslation } from 'react-i18next';
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // When URL changes → update i18n
  useEffect(() => {
    if (lang && ["en", "ar"].includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang).catch(console.error);
    }
  }, [lang, i18n]);

  // When i18n changes → update URL
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      const currentPath = location.pathname;
      const newPath = `/${i18n.language}${currentPath ? `/${currentPath}` : ""}`;
      navigate(newPath + location.search + location.hash, { replace: true });
    }
  }, [i18n.language, lang, navigate, location]);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="pt-16">
        <Outlet /> {/* 👈 This renders the matched child route */}
      </main>
      <Footer />
    </div>
  );
};
export default Layout; // 👈 Export the default component
