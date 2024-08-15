import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import def from '../traductions/default.en.json'
import login from '../traductions/login/login.en.json'
import register from '../traductions/register/register.en.json'

// Define your resources here
const resources = {
  en: {
    def,
    login,
    register
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
