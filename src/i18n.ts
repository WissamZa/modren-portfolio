

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// 👇 Import primary language (e.g., English) statically — bundled with JS
import enTranslation from './lib/locales/en/translation.json';

// 👇 Arabic (or other secondary languages) will be lazy-loaded from public/ via HTTP

i18n
  .use(HttpApi)                    // ← enables lazy loading
  .use(LanguageDetector)           // ← auto detect user language
  .use(initReactI18next)           // ← connects i18n to React
  .init({
    // 👇 Preload English translations (no HTTP request needed for default language)
    resources: {
      en: { translation: enTranslation },
    },

    // 👇 Supported languages
    supportedLngs: ['en', 'ar'],

    // 👇 Fallback if user’s language not supported
    fallbackLng: 'en',

    // 👇 Auto-detection order
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],
    },

    // 👇 Where to load other languages from (e.g., Arabic)
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // ← served from public/locales/
    },

    // 👇 Disable suspense if you don’t want to wrap app in <Suspense>
    react: { useSuspense: false },

    // 👇 Optional: log missing keys during dev
    // debug: process.env.NODE_ENV === 'development',
  });

export default i18n;