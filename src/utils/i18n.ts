import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import def from '../traductions/default.en.json'

// Define your resources here
const resources = {
  en: {
    def,
  },
} as const;



// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
