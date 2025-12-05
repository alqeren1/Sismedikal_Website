import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import JSON files
import enTranslations from "./locales/en/common.json";
import trTranslations from "./locales/tr/common.json";
import ruTranslations from "./locales/ru/common.json";
import uzTranslations from "./locales/uz/common.json";
i18n
  .use(initReactI18next) // Bind i18next to React
  .init({
    resources: {
      en: { translation: enTranslations },
      tr: { translation: trTranslations },
      ru: { translation: ruTranslations },
      uz: { translation: uzTranslations },
    },
    lng: "tr", // Default language
    fallbackLng: "tr", // Fallback language
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    cache: {
      enabled: false, // Disable caching for development
    },
  });

export default i18n;
