import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const useLanguageNavigation = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  const navigateWithLanguage = (path: string) => {
    const currentLang = lang || 'en';
    const fullPath = `/${currentLang}${path.startsWith('/') ? path : `/${path}`}`;
    navigate(fullPath);
  };

  const changeLanguage = (newLang: string) => {
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(`/${lang}`, '');
    const newPath = `/${newLang}${pathWithoutLang}`;
    
    // Change i18n language
    i18n.changeLanguage(newLang);
    
    // Navigate to new URL
    navigate(newPath);
  };

  const getCurrentLanguage = () => {
    return lang || 'en';
  };

  const getLanguageUrl = (path: string, language?: string) => {
    const targetLang = language || lang || 'en';
    return `/${targetLang}${path.startsWith('/') ? path : `/${path}`}`;
  };

  return {
    navigateWithLanguage,
    changeLanguage,
    getCurrentLanguage,
    getLanguageUrl
  };
};