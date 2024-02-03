import i18n from 'i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'hy'],
    ns: ['translations'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    detection: {
      order: ['path', 'localStorage'],
      lookupLocalStorage: 'locale',
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
  });

export default i18n;
