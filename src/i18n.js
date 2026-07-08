// i18n configuration
// This is a minimal setup. For production, wire in react-i18next or similar.

const translations = {
  en: {
    welcome: 'Welcome to Flowbee',
  },
};

export const t = (key, lang = 'en') => translations[lang]?.[key] ?? key;

export default translations;
