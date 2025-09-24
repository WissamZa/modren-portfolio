// src/components/ui/LanguageSwitcher.tsx
import { ChevronDown } from 'lucide-react';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/auth-utils';
import { useNavigate, useLocation } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', country_code: 'US' },
  { code: 'ar', name: 'العربية', country_code: 'SA' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = useMemo(() => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  }, [i18n.language]);

  const isRTL = i18n.language === 'ar';

  const handleLanguageChange = (languageCode: string) => {
    if (i18n.language === languageCode) {
      setIsOpen(false);
      return;
    }

    // Save preference
    localStorage.setItem('i18nextLng', languageCode);
    if (user) {
      supabase
        .from('profiles')
        .update({ locale: languageCode })
        .eq('id', user.id)
        .then(({ error }) => {
          if (error) console.error('Failed to save language:', error);
        });
    }

    // ✅ Extract current path segments
    const segments = location.pathname.split('/').filter(Boolean);
    // Replace first segment (lang) with new language
    segments[0] = languageCode;
    const newPath = `/${segments.join('/')}${location.search}${location.hash}`;

    setIsOpen(false);
    navigate(newPath, { replace: true });
    // i18n will be updated by Layout via useEffect
  };

  // Sync HTML attributes
  useEffect(() => {
    const update = () => {
      document.documentElement.lang = i18n.language;
      document.documentElement.dir = i18n.dir();
    };
    update();
    i18n.on('languageChanged', update);
    return () => void i18n.off('languageChanged', update);
  }, [i18n]);

  return (
    <div className="relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rtl:space-x-reverse"
        aria-label="Change language"
      >
        <ReactCountryFlag
          countryCode={currentLanguage.country_code}
          svg
          style={{ width: '1.2em', height: '1.2em', borderRadius: '3px' }}
          title={currentLanguage.name}
        />
        <span className="pr-2">{currentLanguage.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className={`
                absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg
                border border-gray-200 dark:border-gray-700 py-1 z-50
                ${isRTL ? 'left-0' : 'right-0'}
              `}
              dir="ltr"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`
                    w-full text-left px-4 py-2 text-sm transition-colors duration-200
                    flex items-center space-x-3
                    ${i18n.language === lang.code
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <ReactCountryFlag
                    countryCode={lang.country_code}
                    svg
                    style={{ width: '1.5em', height: '1.2em', borderRadius: '3px' }}
                    title={lang.name}
                  />
                  <span>{lang.name}</span>
                  {i18n.language === lang.code && (
                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;