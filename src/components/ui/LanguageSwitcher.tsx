import { ChevronDown } from 'lucide-react';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';

const languages = [
  { code: 'en', name: 'English', country_code: 'US' },
  { code: 'ar', name: 'العربية', country_code: 'SA' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = useMemo(() => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  }, [i18n.language]);

  const isRTL = i18n.language === 'ar';

  const handleLanguageChange = (languageCode: string) => {
    console.log('Changing language to:', languageCode);
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  // 👇 BEST PRACTICE: Use i18next event listener
  useEffect(() => {
    const updateHtmlAttributes = () => {
      const htmlElement = document.documentElement;
      htmlElement.lang = i18n.language;
      htmlElement.dir = i18n.dir();
      console.log(`🌐 HTML lang="${htmlElement.lang}" dir="${htmlElement.dir}"`);
    };

    // Set initial values
    updateHtmlAttributes();

    // Listen for language changes
    i18n.on('languageChanged', updateHtmlAttributes);

    // Cleanup
    return () => {
      i18n.off('languageChanged', updateHtmlAttributes);
    };
  }, [i18n]); // ✅ Safe — i18n is stable

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