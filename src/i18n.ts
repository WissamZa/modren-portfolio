// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 👇 Import translations statically
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

// 👇 Optional: If you still want to detect user language (e.g., from localStorage)
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // 👇 Remove HttpApi — we don’t need it anymore
  .use(LanguageDetector) // ← optional, remove if you always want 'en' by default
  .use(initReactI18next)
  .init({
    // 👇 Define all bundled resources
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
    },

    // 👇 Supported and fallback languages
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',

    // 👇 Language detection (optional)
    detection: {
      order: ['localStorage', 'navigator'], // try localStorage first, then browser
      caches: ['localStorage'], // save user’s choice
    },

    // 👇 IMPORTANT: Disable suspense since everything is bundled
    react: {
      useSuspense: false,
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },

    debug: true, // set to true for dev if needed
  });


export default i18n;