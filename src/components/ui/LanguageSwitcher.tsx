// LanguageSwitcher.tsx — FIXED
import { ChevronDown } from 'lucide-react';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/auth-utils';
import { useNavigate, useLocation } from 'react-router-dom'; // 👈 ADD THIS

const languages = [
  { code: 'en', name: 'English', country_code: 'US' },
  { code: 'ar', name: 'العربية', country_code: 'SA' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate(); // 👈 ADD THIS
  const location = useLocation(); // 👈 ADD THIS
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = useMemo(() => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  }, [i18n.language]);

  const isRTL = i18n.language === 'ar';

  // 👇 FIXED: Change i18n AND update URL
  const handleLanguageChange = async (languageCode: string) => {
    // console.log('Changing language to:', languageCode);

    // Save preference
    localStorage.setItem('i18nextLng', languageCode);
    if (user) {
      try {
        const { error } = await supabase
          .from('profiles')
          .update({ locale: languageCode })
          .eq('id', user.id);
        if (error) throw error;
        // console.log('✅ Language saved to Supabase profile');
      } catch (err) {
        console.error('Failed to save language preference:', err);
      }
    }

    // 👉 STEP 1: Change i18n language
    await i18n.changeLanguage(languageCode);

    // 👉 STEP 2: Update URL — preserve current path, change lang prefix
    const currentPath = location.pathname.replace(/^\/[a-z]{2}/, ''); // Remove /en or /ar
    const newPath = `/${languageCode}${currentPath ? `/${currentPath}` : ''}`;

    // 👉 STEP 3: Navigate to new path — this triggers React Router to re-render
    navigate(newPath + location.search + location.hash);

    setIsOpen(false);
  };

  // Sync HTML attributes
  useEffect(() => {
    const updateHtmlAttributes = () => {
      const htmlElement = document.documentElement;
      htmlElement.lang = i18n.language;
      htmlElement.dir = i18n.dir();
    };

    updateHtmlAttributes();
    i18n.on('languageChanged', updateHtmlAttributes);

    return () => {
      i18n.off('languageChanged', updateHtmlAttributes);
    };
  }, [i18n]);

  return (
    <div className="relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2"
        aria-label="Change language"
      >
        <ReactCountryFlag
          key={i18n.language}
          countryCode={currentLanguage.country_code}
          svg
          style={{
            width: '1.2em',
            height: '1.2em',
            borderRadius: '3px',
            objectFit: 'cover',
          }}
          title={currentLanguage.name}
        />
        <span className='pr-2'>{currentLanguage.name}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          style={{ transform: isRTL && isOpen ? 'rotate(180deg) scaleX(-1)' : undefined }}
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
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
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`
                    w-full text-left px-4 py-2 text-sm transition-colors duration-200
                    flex items-center space-x-3
                    ${i18n.language === language.code
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}
                  lang={language.code}
                  dir="auto"
                >
                  <ReactCountryFlag
                    countryCode={language.country_code}
                    svg
                    style={{
                      width: '1.5em',
                      height: '1.2em',
                      borderRadius: '3px',
                    }}
                    title={language.name}
                  />
                  <span>{language.name}</span>
                  {i18n.language === language.code && (
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