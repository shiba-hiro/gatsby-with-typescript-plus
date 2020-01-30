import i18n, { TFunction } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ResourceBackend from 'libs/i18n/i18next-resource-backend';

export const init = (): Promise<TFunction> => i18n
  .use(ResourceBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['gatsby-with-typescript-plus'],
    defaultNS: 'gatsby-with-typescript-plus',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!!
    },
    react: {
      wait: true,
    },
  });
