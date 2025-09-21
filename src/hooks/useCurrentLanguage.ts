// hooks/useCurrentLanguage.ts
import { useState, useEffect } from 'react';
import i18n from 'i18next'; // or get from context if needed

export const useCurrentLanguage = () => {
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    const handleLangChange = () => setLang(i18n.language);
    i18n.on('languageChanged', handleLangChange);

    return () => {
      i18n.off('languageChanged', handleLangChange);
    };
  }, []);

  return lang;
};